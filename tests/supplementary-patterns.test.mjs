import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
function setup(n){const p=`src/systems/${n}_V1/preview/`;const d=new JSDOM(readFileSync(p+'scenarios.html','utf8'),{runScripts:'outside-only',url:'http://localhost'});d.window.eval(readFileSync(p+'scenarios.js','utf8'));const $=s=>d.window.document.querySelector(s);const change=(s,v)=>{$(s).value=v;$(s).dispatchEvent(new d.window.Event('change',{bubbles:true}))};const submit=s=>$(s).dispatchEvent(new d.window.Event('submit',{bubbles:true,cancelable:true}));return {d,$,change,submit}}
const wait=()=>new Promise(r=>setTimeout(r,700));
for(const n of ['DEW','KOREX']){
 test(`${n}: search empty state, error retry and loading recover without losing query`,async()=>{const {d,$,change,submit}=setup(n);try{
 assert.equal(d.window.document.querySelectorAll('.sc-card').length,3);$('#query').value='없는검색어';submit('#search-form');assert.match($('#search-status').textContent,/0개/);$('#results button').click();assert.equal($('#query').value,'');assert.equal(d.window.document.querySelectorAll('.sc-card').length,3);
 $('#query').value=n==='DEW'?'공간':'기본';change('#search-mode','error');$('#results button').click();assert.equal(d.window.document.querySelectorAll('.sc-card').length,1);assert.notEqual($('#query').value,'');change('#search-mode','loading');assert.equal($('#results').getAttribute('aria-busy'),'true');await wait();assert.equal($('#results').hasAttribute('aria-busy'),false);assert.equal(d.window.document.querySelectorAll('.sc-card').length,1);
 }finally{d.window.close()}});
 test(`${n}: form validates, preserves input on failure, prevents duplicate submit and resets after success`,async()=>{const {d,$,change,submit}=setup(n);try{
 submit('#request-form');assert.equal(d.window.document.activeElement.id,'email');assert.equal($('#email').getAttribute('aria-invalid'),'true');$('#email').value='sample@example.com';$('#message').value='사용할 공간과 필요한 기능을 함께 상담하고 싶습니다.';$('#message').dispatchEvent(new d.window.Event('input'));assert.match($('#message-count').textContent,/500/);$('#agree').checked=true;change('#submit-mode','error');const original=$('#message').value;submit('#request-form');submit('#request-form');assert.equal($('#submit-request').disabled,true);await wait();assert.match($('#form-message').textContent,/전송하지 못/);assert.equal($('#message').value,original);assert.equal($('#submit-request').disabled,false);submit('#request-form');await wait();assert.equal($('#form-fields').hidden,true);assert.match($('#form-message').textContent,/전송되지/);assert.equal(d.window.document.activeElement.id,'form-message');$('#new-request').click();assert.equal($('#form-fields').hidden,false);assert.equal($('#email').value,'');assert.equal($('#agree').checked,false);assert.equal(d.window.document.activeElement.id,'email');
 }finally{d.window.close()}});
}
