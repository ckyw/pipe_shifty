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
vm.runInContext(prefix+'globalThis.data={copy,source,flows,correctionSteps,issues,ready,policies,flowOrder};})();',ctx);
let count=0;
function walk(value){
 if(!value||typeof value!=='object')return;
 if(typeof value.ko==='string'&&typeof value.en==='string'){
   for(const language of ['ko','en','zh','es','uz','mn']){
     assert.equal(typeof value[language],'string');assert.ok(value[language].trim());
     if(language!=='ko')assert.equal(/[가-힣]/.test(value[language]),false,`${language}: ${value[language]}`);
   }
   count++;
 }else Object.values(value).forEach(walk);
}
walk(ctx.data);
assert.equal(ctx.data.flowOrder[0],'signup');
assert.equal(ctx.data.flows.signup.steps.length,4);
assert.match(ctx.data.flows.signup.steps[1].body.en,/Google.*Gmail/);
assert.equal(ctx.data.source.signup.slug,'signUp');
assert.equal(ctx.data.flows.signup.steps[3].src,'join');
assert.match(ctx.data.ready[1].body.es,/solo.*guía/);
assert.match(ctx.data.flows.signup.steps[1].body.mn,/Google.*Gmail/);
assert.match(ctx.data.copy.languageMn.mn,/монгол/);
assert.match(ctx.data.ready[1].body.mn,/зөвхөн гарын авлагын/);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.equal((html.match(/data-lang="/g)||[]).length,6);
assert.ok(html.indexOf('locales.js')<html.indexOf('guide.js'));
assert.match(html,/CK Park/);assert.match(html,/cestck/);
console.log(`PASS ${count} text entries in six languages, signup-first flow, Google recommendation, company join and contact`);
