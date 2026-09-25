import {test,afterEach} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {JSDOM} from 'jsdom';
const dom=new JSDOM('<!doctype html><html><body></body></html>',{url:'http://localhost',runScripts:'outside-only',pretendToBeVisual:true});
for(const k of ['window','document','HTMLElement','HTMLInputElement','Node','MutationObserver','Element'])globalThis[k]=dom.window[k];
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
const React=await import('react');window.React=React;
const {render,fireEvent,cleanup,act}=await import('@testing-library/react');
const userEvent=(await import('@testing-library/user-event')).default;
for(const n of ['DEW','KOREX'])window.eval(readFileSync(`src/systems/${n}_V1/preview/source/components/bundle.js`,'utf8'));
afterEach(cleanup);
for(const n of ['DEW','KOREX']){
 const U=window[n],h=React.createElement;
 test(`${n}: uncontrolled textarea counter follows edits`,async()=>{
  const r=render(h(U.Textarea,{label:'Message',maxLength:20,defaultValue:''}));
  await userEvent.setup().type(r.getByRole('textbox'),'hello');
  assert.match(r.container.textContent,/5 \/ 20/);
 });
 test(`${n}: confirmation catches synchronous failure and recovers`,async()=>{
  let tries=0,resolved=0;const r=render(h(U.AlertDialog,{open:true,title:'Confirm',confirmLabel:'Proceed',onConfirm:()=>{if(++tries===1)throw Error('Try again');return Promise.resolve()},onResolved:()=>resolved++,onCancel:()=>{}}));
  fireEvent.click(r.getByRole('button',{name:'Proceed'}));
  assert.match(r.getByRole('alert').textContent,/Try again/);
  await act(async()=>{fireEvent.click(r.getByRole('button',{name:'다시 시도'}));});
  assert.equal(resolved,1);assert.equal(tries,2);assert.equal(r.queryByRole('alert'),null);
 });
 test(`${n}: modal Shift+Tab from panel stays inside`,()=>{
  const r=render(h('div',{},h('button',{},'Outside'),h(U.Dialog,{open:true,title:'Panel',onClose:()=>{}},h('button',{},'Last'))));
  const panel=r.getByRole('dialog');panel.focus();
  fireEvent.keyDown(panel,{key:'Tab',shiftKey:true});
  assert.equal(document.activeElement,r.getByRole('button',{name:'Last'}));
 });
 test(`${n}: modal locks page scrolling and restores it`,()=>{
  document.body.style.overflow='auto';const r=render(h(U.Dialog,{open:true,title:'Panel',onClose:()=>{}}));
  assert.equal(document.body.style.overflow,'hidden');r.unmount();assert.equal(document.body.style.overflow,'auto');
 });
 test(`${n}: menu opens at first enabled item by keyboard`,async()=>{
  const r=render(h(U.Menu,{label:'Actions',items:[{label:'Unavailable',disabled:true},{label:'Enabled',value:'yes'}]}));
  const b=r.getByRole('button',{name:'Actions'});b.focus();fireEvent.keyDown(b,{key:'ArrowDown'});
  assert.equal(document.activeElement,r.getByRole('menuitem',{name:'Enabled'}));
 });
}
for(const n of ['DEW','KOREX'])test(`${n}: named fields participate in native form submission`,()=>{
 const U=window[n],h=React.createElement;
 const r=render(h('form',{},h(U.TextField,{name:'title',label:'Title',defaultValue:'Example'}),h(U.Textarea,{name:'body',label:'Body',defaultValue:'Text'}),h(U.Select,{name:'category',label:'Category',defaultValue:'a',options:[{value:'a',label:'A'}]}),h(U.Checkbox,{name:'agree',value:'yes',label:'Agree',defaultChecked:true})));
 const data=new window.FormData(r.container.querySelector('form'));
 assert.deepEqual(Object.fromEntries(data),{title:'Example',body:'Text',category:'a',agree:'yes'});
});
for(const n of ['DEW','KOREX'])test(`${n}: approved foundation, case identities and offline library remain intact`,()=>{
 const base=`src/systems/${n}_V1`,manifest=JSON.parse(readFileSync(`${base}/figma-system.json`,'utf8'));
 const colors=n==='DEW'?{canvas:'#F7F3EA',surface:'#FFFFFF',textPrimary:'#111111',textSecondary:'#6F6A63',border:'#D8D2C8',accent:'#E3231C',support:'#A9E1D6'}:{canvas:'#F5F6F2',surface:'#FFFFFF',textPrimary:'#172019',textSecondary:'#677068',border:'#D9DED8',primary:'#07523D',primaryDark:'#04382B',primarySoft:'#DCE8E3'};
 assert.deepEqual(manifest.foundation.colors,colors);
 const coverage=JSON.parse(readFileSync(`${base}/preview/case-coverage.json`,'utf8'));const rows=Array.isArray(coverage)?coverage:coverage.cases||coverage.rows;
 const mapping=JSON.parse(readFileSync(`${base}/preview/handoff/figma-cases.json`,'utf8')).cases;
 assert.equal(rows.length,138);assert.equal(Object.keys(mapping).length,138);
 for(const r of rows)assert.ok(mapping[`${r.family||r.component}/${r.id||r.caseId}`]);
 const html=readFileSync(`${base}/preview/library.html`,'utf8');const doc=new JSDOM(html).window.document;
 assert.equal(doc.querySelectorAll('#kind option').length,6);
 for(const s of doc.querySelectorAll('script[src]')){assert.ok(!/^https?:/.test(s.getAttribute('src')));assert.ok(readFileSync(`${base}/preview/${s.getAttribute('src')}`).length>0)}
 const styles=readFileSync(`${base}/preview/styles.css`,'utf8');for(const v of manifest.figma.variables){const css=v.codeSyntax.WEB.slice(4,-1);assert.ok(styles.includes(css+':'),`${v.name}: missing ${css}`)}
});
