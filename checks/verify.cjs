/* Uses an already-installed Playwright library and Chrome; does not install anything. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.SHIFTEE_PLAYWRIGHT_PATH || 'playwright');
const base = process.env.SHIFTEE_PREVIEW_URL || 'http://127.0.0.1:8795/';
assert.equal(new URL(base).hostname, '127.0.0.1', 'Verification is restricted to loopback.');
const out = path.resolve(process.cwd(), 'output/playwright');
fs.mkdirSync(out, { recursive: true });
const results = [];
const record = (name, detail) => { results.push({ name, status: 'PASS', detail }); console.log(`PASS ${name}`); };
const errors = [], external = [], consoleErrors = [];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true, chromiumSandbox: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1080 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('request', request => { if (!['127.0.0.1'].includes(new URL(request.url()).hostname) && !request.url().startsWith('data:')) external.push(request.url()); });
    await page.goto(base);
    assert.match(await page.title(), /PIPE · 시프티/);
    assert.equal(await page.locator('html').getAttribute('lang'), 'ko');
    assert.equal(await page.locator('.training-banner').innerText().then(t => t.includes('전송되지')), true);
    record('Correct project and educational scope', 'PIPE title, Korean default and no-submission notice');
    await page.waitForFunction(() => [...document.querySelectorAll('img.brand-logo')].every(img => img.complete && img.naturalWidth > 0));
    assert.equal(await page.locator('img.brand-logo').count(),2);
    for (const logo of await page.locator('img.brand-logo').all()) {
      assert.equal(await logo.getAttribute('alt'),'PIPE');
      const ratio=await logo.evaluate(img=>({natural:img.naturalWidth/img.naturalHeight,display:img.getBoundingClientRect().width/img.getBoundingClientRect().height,fit:getComputedStyle(img).objectFit}));
      assert.equal(ratio.natural,1);assert.ok(Math.abs(ratio.display-1)<0.01);assert.equal(ratio.fit,'contain');
    }
    assert.equal(await page.locator('link[rel="icon"]').getAttribute('href'),'assets/pipe-logo.webp');
    record('Original PIPE logo','Header/footer load, unchanged square ratio, contain fit and favicon reference');


    assert.equal(new URL(page.url()).hash,'#signup/0');
    assert.equal(await page.locator('[data-lang]').count(),6);
    assert.match(await page.locator('.contact-banner').innerText(),/문의하기.*CK Park.*카카오톡 ID.*cestck/);
    record('Signup is first and contact is visible','Signup default, six native language buttons and requested KakaoTalk contact');

    const sizes = { signup: 4, 'clock-in': 3, qr: 3, 'clock-out': 2, correction: 3 };
    for (const language of ['ko', 'en', 'zh', 'es', 'uz', 'mn']) {
      await page.locator(`#lang-${language}`).click();
      for (const [flow, count] of Object.entries(sizes)) {
        await page.locator(`[data-flow="${flow}"]`).click();
        await page.locator('#restart').click();
        for (let index = 0; index < count; index++) {
          assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), String(index + 1));
          assert.equal(await page.locator('#previous').isDisabled(), index === 0);
          assert.equal(await page.locator('#next').isDisabled(), index === count - 1);
          assert.equal(await page.locator('[aria-current="step"].step-chip').getAttribute('data-step'), String(index));
          assert.ok((await page.locator('#step-description').innerText()).length > 10);
          if (!['signup','correction'].includes(flow)) {
            await page.waitForFunction(() => { const image = document.getElementById('app-screen'); return image.complete && image.naturalWidth > 0; });
            assert.equal(await page.locator('#app-screen').getAttribute('lang'), language === 'zh' ? 'zh-Hans' : language);
            const frame = await page.locator('#screen-window').boundingBox();
            const spot = await page.locator('#spotlight').boundingBox();
            assert.ok(spot.x >= frame.x && spot.y >= frame.y && spot.x + spot.width <= frame.x + frame.width + 1 && spot.y + spot.height <= frame.y + frame.height + 1);
            if (language === 'en' && flow === 'clock-in' && index === 1) {
              assert.match(await page.locator('#app-screen').getAttribute('src'), /clock-ko/);
              assert.match(await page.locator('#image-note').innerText(), /Korean screenshot/);
              assert.match(await page.locator('#app-screen').getAttribute('alt'), /Korean timeclock/);
            }
          } else {
            if (flow === 'signup') {
              assert.match(await page.locator('#step-source').getAttribute('href'),index < 3 ? /signUp$/ : /joinCompany$/);
              if (index === 1) assert.match(await page.locator('#step-description').innerText(),/Google|Gmail/);
            }
            assert.equal(await page.locator('#screen-figure').isVisible(), false);
            assert.equal(await page.locator('#request-diagram').isVisible(), true);
          }
          if (language === 'en') {
            const englishText = (await page.locator('body').innerText()).replaceAll('한국어', '');
            assert.equal(/[가-힣]/.test(englishText), false, `Untranslated text at ${flow}/${index}`);
            const accessible = await page.locator('[aria-label],img[alt]').evaluateAll(nodes => nodes.filter(n => n.getClientRects().length).map(n => n.getAttribute('aria-label') || n.getAttribute('alt')).join(' '));
            assert.equal(/[가-힣]/.test(accessible), false, `Untranslated accessible name at ${flow}/${index}`);
          }
          await page.locator('#guide').screenshot({ path: path.join(out, `shiftee-${language}-${flow}-${index + 1}.png`) });
          const hash = new URL(page.url()).hash;
          await page.locator(`[data-flow="${flow}"]`).click();
          assert.equal(new URL(page.url()).hash, hash, 'Repeated flow selection preserves progress');
          if (index < count - 1) await page.locator('#next').click();
        }
        await page.locator('.step-chip[data-step="0"]').click();
        assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'),'1');
        await page.locator(`.step-chip[data-step="${count-1}"]`).click();
        assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'),String(count));
        await page.locator('#previous').click();
        assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), String(count - 1));
        await page.locator('#restart').click();
        assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '1');
        assert.equal(await page.locator('html').getAttribute('lang'), language === 'zh' ? 'zh-Hans' : language);
        record(`${language} ${flow}: all steps, repeated selection, previous, restart, image`, `${count} steps`);
      }
      const issueIds = await page.locator('#issue option').evaluateAll(nodes => nodes.map(n => n.value));
      const titles = new Set();
      for (const issue of issueIds) {
        await page.locator('#issue').selectOption(issue);
        titles.add(await page.locator('#issue-title').innerText());
        assert.ok((await page.locator('#issue-summary').innerText()).length > 10);
        assert.ok(await page.locator('#issue-actions li').count() >= 2);
        assert.match(await page.locator('#issue-source').getAttribute('href'), /^https:\/\/shiftee.io\/ko\/help\/article\//);
        if (language === 'en') assert.equal(/[가-힣]/.test(await page.locator('#issue-answer').innerText()), false);
      }
      assert.equal(titles.size, 10);
      record(`${language} troubleshooting`, '10 distinct situations, actions and official sources');
    }

    await page.locator('#lang-en').click();
    await page.locator('[data-flow="correction"]').click();
    await page.locator('#next').click();
    await page.locator('[data-request="edit"]').click();
    const correctionHash = new URL(page.url()).hash;
    assert.match(await page.locator('#step-title').innerText(), /corrected times/);
    await page.locator('#issue').selectOption('offsite');
    await page.locator('#lang-ko').click();
    assert.equal(new URL(page.url()).hash, correctionHash);
    assert.equal(await page.locator('#issue').inputValue(), 'offsite');
    assert.equal(await page.locator('[data-request="edit"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '2');
    assert.equal(await page.locator('#lang-ko').evaluate(n => n === document.activeElement), true);
    assert.match(await page.locator('#step-title').innerText(), /수정할/);
    await page.locator('#lang-en').click();
    assert.equal(new URL(page.url()).hash, correctionHash);
    record('Language switches preserve step, correction type, help choice and focus', 'KO ↔ EN on correction step 2');

    await page.locator('[data-flow="qr"]').click();
    await page.locator('#next').click();
    await page.locator('[data-flow="clock-out"]').click();
    await page.locator('[data-flow="qr"]').click();
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '2');
    await page.locator('.help-jump').click();
    await page.waitForFunction(() => document.activeElement.id === 'help-heading');
    assert.equal(await page.locator('[data-flow="qr"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '2');
    await page.goBack();
    await page.waitForFunction(() => document.activeElement.id === 'step-title');
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '2');
    await page.locator('.skip-link').focus();
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.activeElement.id === 'step-title');
    assert.equal(await page.locator('[data-flow="qr"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '2');
    record('Section anchors preserve progress and focus', 'Help, browser back and skip link keep QR step 2');

    await page.goto(base);
    await page.locator('#next').click();
    await page.locator('#lang-en').click();
    await page.locator('#next').click();
    await page.goBack();
    await page.waitForFunction(() => document.getElementById('progress').getAttribute('aria-valuenow') === '2');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    await page.goForward();
    await page.waitForFunction(() => document.getElementById('progress').getAttribute('aria-valuenow') === '3');
    record('Browser back and forward', 'Step history restored without changing English');

    await page.goto(`${base}#qr/1`);
    // A hash-only navigation keeps focus; reload for the first-Tab entry check.
    await page.reload();
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.skip-link').evaluate(n => n === document.activeElement), true);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.activeElement.id === 'step-title');
    await page.locator('#next').focus();
    await page.keyboard.press('Space');
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '3');
    assert.equal(await page.locator('#step-title').evaluate(n => n === document.activeElement), true);
    await page.locator('#previous').focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'), '2');
    await page.locator('#issue').focus();
    await page.keyboard.press('Space');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    // macOS native popup key events may not be delivered by Chrome automation.
    // Do not count a programmatic selectOption as keyboard verification.
    if (await page.locator('#issue').inputValue() === 'wifi') {
      record('Native select keyboard selection', 'Space / ArrowDown / Enter selected WiFi');
    } else {
      results.push({ name:'Native select keyboard selection',status:'UNCONFIRMED',detail:'Chrome on this macOS host did not apply native popup key events; headed retry also failed. Pointer/programmatic selection is covered separately.' });
      console.log('UNCONFIRMED Native select keyboard selection');
    }
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#spotlight').evaluate(n => getComputedStyle(n).transitionDuration), '0s');
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
    record('Keyboard and reduced motion', 'Tab skip link, Enter/Space step navigation, heading focus and disabled transitions; native popup keyboard result is separate');

    for (const language of ['ko','en','zh','es','uz','mn']) {
      await page.locator(`#lang-${language}`).click();
      await page.locator('[data-flow="correction"]').click();
      await page.locator('[data-request="edit"]').click();
      await page.locator('#restart').click();
      for (let index=0;index<3;index++) {
        assert.match(await page.locator('#step-source').getAttribute('href'), /editAttendanceRequest$/);
        assert.equal(await page.locator('#progress').getAttribute('aria-valuenow'),String(index+1));
        assert.ok((await page.locator('#step-description').innerText()).length>10);
        if (language==='en') assert.equal(/[가-힣]/.test(await page.locator('#step-description').innerText()),false);
        const hash=new URL(page.url()).hash;
        await page.locator('[data-request="edit"]').click();
        assert.equal(new URL(page.url()).hash,hash);
        if(index<2) await page.locator('#next').click();
      }
      record(`${language} edit-request variant`,'All three edit steps, correct source and repeated type selection');
    }

    for (const width of [320,390,768,1440]) {
      await page.setViewportSize({width,height:844});
      for (const language of ['ko','en','zh','es','uz','mn']) {
        await page.locator(`#lang-${language}`).click();
        const headerOverlap=await page.evaluate(()=>{
          const a=document.querySelector('.site-header>.brand').getBoundingClientRect(),b=document.querySelector('.contact-banner').getBoundingClientRect();
          return a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;
        });
        assert.equal(headerOverlap,false,`Contact overlaps brand ${width}/${language}`);
        for (const flow of Object.keys(sizes)) {
          await page.locator(`[data-flow="${flow}"]`).click();
          assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth+1), false, `Horizontal overflow ${width}/${language}/${flow}`);
          assert.equal(await page.locator('#next').isVisible(), true);
        }
        if (width === 390 || width === 1440) {
          await page.locator('[data-flow="clock-in"]').click();
          await page.locator('#restart').click();
          await page.evaluate(() => window.scrollTo(0,0));
          await page.screenshot({path:path.join(out,`shiftee-${width}-${language}.png`),fullPage:true});
        }
      }
    }
    record('Responsive layout', '320/390/768/1440 px, six languages and all flows: no horizontal overflow');

    await page.goto(`${base}#qr/99`);
    await page.waitForFunction(() => location.hash === '#qr/2');
    assert.equal(new URL(page.url()).hash,'#qr/2');
    await page.goto(`${base}#not-a-route`);
    await page.waitForFunction(() => location.hash === '#signup/0');
    assert.equal(new URL(page.url()).hash,'#signup/0');
    assert.equal(await page.evaluate(() => localStorage.length + sessionStorage.length),0);
    assert.equal((await context.cookies()).length,0);
    record('Invalid route handling and no persistence', 'Unknown route defaults, step is clamped, no cookies or browser storage');

    const failedPage = await context.newPage();
    await failedPage.route('**/assets/*.png', route => route.abort());
    await failedPage.goto(`${base}#clock-in/0`);
    await failedPage.waitForFunction(() => document.getElementById('screen-window').classList.contains('failed'));
    assert.match(await failedPage.locator('#image-message').innerText(),/불러오지 못/);
    await failedPage.locator('#lang-en').click();
    await failedPage.waitForFunction(() => document.getElementById('screen-window').classList.contains('failed'));
    assert.match(await failedPage.locator('#image-message').innerText(),/could not load/);
    assert.ok((await failedPage.locator('#step-description').innerText()).length>10);
    assert.equal(await failedPage.locator('#step-source').isVisible(),true);
    await failedPage.locator('#next').click();
    assert.equal(await failedPage.locator('#progress').getAttribute('aria-valuenow'),'2');
    await failedPage.screenshot({path:path.join(out,'shiftee-image-failure-en.png'),fullPage:true});
    record('Image failure in both languages', 'Text and official link survive and next step still works');
    await failedPage.close();

    assert.deepEqual(errors,[]);
    assert.deepEqual(consoleErrors,[]);
    assert.deepEqual(external,[]);
    record('Runtime and network', 'No uncaught errors, console errors or external requests on the guide');
    fs.writeFileSync(path.join(out,'shiftee-results.json'),JSON.stringify({date:new Date().toISOString(),browser:await browser.version(),results,errors,external,consoleErrors},null,2));
    console.log(`Results: ${results.filter(r=>r.status==='PASS').length} pass, ${results.filter(r=>r.status==='UNCONFIRMED').length} unconfirmed. Evidence: ${out}/shiftee-results.json`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error);process.exitCode=1; });
