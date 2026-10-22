/* Verify complete local translations without a browser or network. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root=path.resolve(__dirname,'..');
const ctx={window:{}};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,'locales.js'),'utf8'),ctx);
const source=fs.readFileSync(path.join(root,'guide.js'),'utf8');
const prefix=source.slice(0,source.indexOf('  const state ='));
vm.runInContext(prefix+'globalThis.data={copy,source,flows,correctionSteps,issues,ready,policies,flowOrder,images};})();',ctx);
let count=0;
function walk(value){
 if(!value||typeof value!=='object')return;
 if(typeof value.ko==='string'&&typeof value.en==='string'){
   for(const language of ['ko','en','zh','es','uz','mn']){
     assert.equal(typeof value[language],'string');assert.ok(value[language].trim());
     assert.doesNotMatch(value[language],/\bQR\b/i,'No QR instructions in any language');
     if(language!=='ko')assert.equal(/[가-힣]/.test(value[language]),false,`${language}: ${value[language]}`);
   }
   count++;
 }else Object.values(value).forEach(walk);
}
walk(ctx.data);
assert.deepEqual(Array.from(ctx.data.flowOrder),['signup','clock-in','clock-out','correction']);
assert.equal(ctx.data.flows.qr,undefined);
assert.deepEqual(Array.from(ctx.data.issues,x=>x.id),['gps','wifi','schedule','missing','pending','offsite','break','web','automation']);
assert.match(ctx.data.issues[2].summary.es,/turno/);
assert.match(ctx.data.issues[3].summary.mn,/бүртгэл/);
assert.match(ctx.data.issues[8].title.uz,/Ilovani/);
assert.equal(ctx.data.flowOrder[0],'signup');
assert.equal(ctx.data.flows.signup.steps.length,4);
assert.match(ctx.data.flows.signup.steps[1].body.en,/Google.*Gmail/);
assert.equal(ctx.data.flows.signup.steps[1].note.ko,'(name).pipecompany@gmail.com Google 계정으로 진행하고, 이후 시프티에 접속할 때도 같은 계정을 사용하세요.');
for(const language of ['ko','en','zh','es','uz','mn'])assert.ok(ctx.data.flows.signup.steps[1].note[language].includes('(name).pipecompany@gmail.com'));
assert.equal(ctx.data.copy.imageGoogleKo,undefined);
assert.equal(ctx.data.source.signup.slug,'signUp');
assert.equal(ctx.data.flows.signup.steps[3].src,'staff');
assert.equal(ctx.data.source.staff.slug,'gettingStartedGuideForStaff');
assert.match(ctx.data.ready[1].body.es,/solo.*guía/);
assert.match(ctx.data.flows.signup.steps[1].body.mn,/Google.*Gmail/);
assert.match(ctx.data.copy.languageMn.mn,/монгол/);
assert.match(ctx.data.ready[1].body.mn,/зөвхөн гарын авлагын/);
for(const language of ['ko','en','zh','es','uz','mn']){
 const text=ctx.data.flows.signup.steps.map(step=>[step.title[language],step.body[language],step.note[language],step.alt[language]].join(' ')).join(' ');
 assert.doesNotMatch(text,/이메일|비밀번호|\b(?:PC|SSO)\b|네이버|애플|스팸|email|password|computer|desktop|naver|apple|correo|contraseña|ordenador|kompyuter|parol|邮箱|密码|电脑|邮件|имэйл|нууц үг|компьютер/i,'Google mobile signup only');
}
for(const [index,step]of ctx.data.flows.signup.steps.entries()){
 assert.equal(step.forceKo,true);assert.equal(step.image,index===3?'join':'signup');assert.ok(step.alt.en);
 assert.equal(step.hideImageCaption===true,index===1||index===2);
 if(index===1||index===2)assert.equal(step.imageNote,undefined);else assert.ok(step.imageNote);
 const info=ctx.data.images[step.image+'-ko'];assert.ok(fs.existsSync(path.join(root,'assets',info.file)));
}
const googleCrop=ctx.data.images['signup-ko'].panes[1];
assert.ok(googleCrop[0]<=1523/2566*100&&googleCrop[0]+googleCrop[1]<1717/2566*100,'Crop includes Google and ends before other account buttons');
assert.ok(googleCrop[2]>1750/2250*100&&googleCrop[2]+googleCrop[3]>1950/2250*100,'Crop excludes email button and includes Google button');

const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.match(html,/<label for="language-select"[^>]*data-i18n="languageLabel"/);
assert.match(html,/<select id="language-select"/);
assert.deepEqual(Array.from(html.matchAll(/<option value="(ko|en|zh|es|uz|mn)"/g),m=>m[1]),['ko','en','zh','es','uz','mn']);
assert.doesNotMatch(html,/data-lang=/);
assert.ok(html.indexOf('locales.js')<html.indexOf('guide.js'));
assert.match(html,/CK Park/);assert.match(html,/cestck/);
console.log(`PASS ${count} text entries in six languages, signup-first flow, Google-only mobile signup, company join and contact`);
