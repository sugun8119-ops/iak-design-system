import {test,afterEach} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const dom=new JSDOM('<!doctype html><html><body></body></html>',{url:'http://localhost',pretendToBeVisual:true});
for(const key of ['window','document','HTMLElement','HTMLInputElement','Node','MutationObserver','CustomEvent','NodeFilter','HTMLButtonElement','Element'])globalThis[key]=dom.window[key];
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
// jsdom does not implement browser pointer capture; swipe gestures are browser-only checks.
const captures=new WeakMap();
dom.window.Element.prototype.setPointerCapture=function(id){captures.set(this,id)};
dom.window.Element.prototype.hasPointerCapture=function(id){return captures.get(this)===id};
dom.window.Element.prototype.releasePointerCapture=function(){captures.delete(this)};
const React=await import('react');
globalThis.getComputedStyle=dom.window.getComputedStyle.bind(dom.window);
const {render,screen,fireEvent,cleanup,waitFor}=await import('@testing-library/react');
const UI=await import('../packages/ui/dist/index.js');
const h=React.createElement;
afterEach(cleanup);
test('loading and disabled buttons suppress activation, retain name, and do not submit by default',()=>{
 let clicks=0;const {rerender}=render(h(UI.Button,{loading:true,onClick:()=>clicks++},'Create'));
 const b=screen.getByRole('button',{name:'Create'});assert.equal(b.disabled,true);assert.equal(b.getAttribute('aria-busy'),'true');fireEvent.click(b);assert.equal(clicks,0);
 rerender(h(UI.Button,{onClick:()=>clicks++},'Create'));fireEvent.click(b);assert.equal(clicks,1);assert.equal(b.type,'button');
 rerender(h(UI.Button,{disabled:true,onClick:()=>clicks++},'Create'));fireEvent.click(b);assert.equal(clicks,1);
});
test('fields have unique labels, error descriptions, refs and native form values',()=>{
 const ref=React.createRef();render(h('form',{},h(UI.TextField,{label:'Name',name:'name',defaultValue:'IAK',required:true,error:'Enter a name',ref}),h(UI.TextField,{label:'Other'}),h(UI.Textarea,{label:'Notes'}),h(UI.Select,{label:'Status',name:'status'},h('option',{value:'active'},'Active'))));
 const input=screen.getByRole('textbox',{name:'Name'});assert.equal(ref.current,input);assert.equal(input.required,true);assert.equal(input.getAttribute('aria-invalid'),'true');assert.equal(document.getElementById(input.getAttribute('aria-describedby')).textContent,'Enter a name');assert.notEqual(input.id,screen.getByLabelText('Other').id);
 const data=new dom.window.FormData(input.form);assert.equal(data.get('name'),'IAK');assert.equal(data.get('status'),'active');
});
test('switch and checkbox expose state and honor native disabled',()=>{
 let value;render(h('div',{},h(UI.Switch,{label:'Notify',onChange:e=>value=e.target.checked}),h(UI.Checkbox,{label:'Disabled',disabled:true})));const control=screen.getByRole('switch',{name:'Notify'});fireEvent.click(control);assert.equal(value,true);assert.equal(control.checked,true);assert.equal(screen.getByLabelText('Disabled').disabled,true);
});
test('SVG labels, decorative skeletons and invalid icon names',()=>{
 const {container}=render(h('div',{},h(UI.Icon,{name:'eva:checkmark-fill',label:'Done'}),h(UI.Skeleton,{}),h(UI.Icon,{name:'__proto__'})));
 assert.equal(screen.getByRole('img',{name:'Done'}).tagName.toLowerCase(),'svg');assert.equal(container.querySelectorAll('svg').length,1);assert.equal(container.querySelector('.iak-skeleton').getAttribute('aria-hidden'),'true');
});

test('Dialog exposes title, focuses the requested input and returns focus after Escape',async()=>{
 const user=(await import('@testing-library/user-event')).default.setup();
 const ref=React.createRef();
 render(h(UI.Dialog,{trigger:h(UI.Button,{},'Open dialog'),title:'Edit project',description:'Change the name',initialFocusRef:ref},h(UI.TextField,{label:'Project',ref})));
 await user.click(screen.getByRole('button',{name:'Open dialog'}));
 const dialog=await screen.findByRole('dialog',{name:'Edit project'});
 assert.equal(document.activeElement,screen.getByLabelText('Project'));
 assert.equal(document.getElementById(dialog.getAttribute('aria-describedby')).textContent,'Change the name');
 await user.tab();assert.equal(document.activeElement,screen.getByRole('button',{name:'닫기'}));
 await user.keyboard('{Escape}');
 await waitFor(()=>assert.equal(screen.queryByRole('dialog'),null));
 await waitFor(()=>assert.equal(document.activeElement,screen.getByRole('button',{name:'Open dialog'})));
});
test('Menu skips disabled items, runs the selected action and restores trigger focus',async()=>{
 const user=(await import('@testing-library/user-event')).default.setup();let chosen='';
 render(h(UI.Menu,{trigger:h(UI.Button,{},'Actions'),label:'Project actions',items:[{id:'one',label:'Rename',onSelect:()=>chosen='rename'},{id:'two',label:'Disabled',disabled:true,onSelect:()=>chosen='disabled'},{id:'three',label:'Archive',onSelect:()=>chosen='archive'}]}));
 screen.getByRole('button',{name:'Actions'}).focus();await user.keyboard('{ArrowDown}');
 await screen.findByRole('menu');assert.equal(document.activeElement.textContent,'Rename');await user.keyboard('{ArrowDown}');assert.equal(document.activeElement.textContent,'Archive');await user.keyboard('{Enter}');
 assert.equal(chosen,'archive');await waitFor(()=>assert.equal(screen.queryByRole('menu'),null));await waitFor(()=>assert.equal(document.activeElement,screen.getByRole('button',{name:'Actions'})));
});
test('Table numeric sorting is immutable and communicates sort/loading/empty/error states',()=>{
 const rows=[{id:'a',n:12},{id:'b',n:3},{id:'c',n:null}];const columns=[{id:'n',header:'Count',cell:r=>r.n??'Missing',sortValue:r=>r.n}];const props={caption:'Projects',rows,columns,rowKey:r=>r.id};
 const {rerender}=render(h(UI.Table,props));const values=()=>[...document.querySelectorAll('tbody td')].map(x=>x.textContent);
 fireEvent.click(screen.getByRole('button',{name:'Count 정렬'}));assert.deepEqual(values(),['3','12','Missing']);assert.equal(screen.getByRole('columnheader').getAttribute('aria-sort'),'ascending');
 fireEvent.click(screen.getByRole('button',{name:'Count 정렬'}));assert.deepEqual(values(),['12','3','Missing']);assert.deepEqual(rows.map(r=>r.id),['a','b','c']);
 rerender(h(UI.Table,{...props,loading:true}));assert.equal(screen.getByRole('table').getAttribute('aria-busy'),'true');assert.equal(screen.getByRole('button',{name:'Count 정렬'}).disabled,true);
 rerender(h(UI.Table,{...props,rows:[]}));assert.equal(screen.getByRole('status').textContent,'표시할 항목이 없습니다.');
 rerender(h(UI.Table,{...props,error:'Failed'}));assert.equal(screen.getByRole('status').textContent,'Failed');
});
test('Table controlled sort requests changes without changing rows until the parent updates',()=>{
 let requested;const props={caption:'Controlled',rows:[{id:'a',n:12},{id:'b',n:3}],columns:[{id:'n',header:'Count',cell:r=>r.n,sortValue:r=>r.n}],rowKey:r=>r.id,sort:null,onSortChange:s=>requested=s};
 const {rerender}=render(h(UI.Table,props));fireEvent.click(screen.getByRole('button',{name:'Count 정렬'}));assert.deepEqual(requested,{columnId:'n',direction:'ascending'});assert.equal(document.querySelector('tbody td').textContent,'12');rerender(h(UI.Table,{...props,sort:requested}));assert.equal(document.querySelector('tbody td').textContent,'3');
});

test('Pagination clamps boundaries and emits requested page',()=>{
 const requests=[];const {rerender}=render(h(UI.Pagination,{page:1,pageCount:4,onPageChange:p=>requests.push(p)}));assert.equal(screen.getByRole('button',{name:'이전'}).disabled,true);fireEvent.click(screen.getByRole('button',{name:'다음'}));assert.deepEqual(requests,[2]);rerender(h(UI.Pagination,{page:4,pageCount:4,onPageChange:p=>requests.push(p)}));assert.equal(screen.getByRole('button',{name:'다음'}).disabled,true);fireEvent.click(screen.getByRole('button',{name:'첫 페이지'}));assert.deepEqual(requests,[2,1]);
});
test('Table paginates after sorting, resets for page size, and clamps after filtering',async()=>{
 const rows=Array.from({length:25},(_,i)=>({id:String(i),n:i}));const props={caption:'Paged',rows,columns:[{id:'n',header:'Number',cell:r=>r.n,sortValue:r=>r.n}],rowKey:r=>r.id,pagination:{pageSize:10}};const {rerender}=render(h(UI.Table,props));
 assert.equal(document.querySelectorAll('tbody tr').length,10);fireEvent.click(screen.getByRole('button',{name:'다음'}));assert.equal(document.querySelector('tbody td').textContent,'10');assert.equal(document.querySelector('tbody tr').getAttribute('aria-rowindex'),'12');
 fireEvent.click(screen.getByRole('button',{name:'Number 정렬'}));await waitFor(()=>assert.equal(document.querySelector('tbody td').textContent,'0'));
 fireEvent.click(screen.getByRole('button',{name:'마지막 페이지'}));assert.equal(document.querySelectorAll('tbody tr').length,5);rerender(h(UI.Table,{...props,rows:rows.slice(0,4)}));await waitFor(()=>assert.equal(document.querySelector('tbody td').textContent,'0'));
 rerender(h(UI.Table,{...props,pagination:{pageSize:5}}));assert.equal(document.querySelectorAll('tbody tr').length,5);
});
test('Virtual table bounds DOM size, publishes logical indices and preserves the focused row',()=>{
 const rows=Array.from({length:10000},(_,i)=>({id:String(i),n:i}));render(h(UI.Table,{caption:'Virtual',rows,columns:[{id:'n',header:'Number',cell:r=>h('button',{},String(r.n))}],rowKey:r=>r.id,virtualization:{height:300,rowHeight:50,overscan:2}}));
 const table=screen.getByRole('table');assert.equal(table.getAttribute('aria-rowcount'),'10001');assert.ok(document.querySelectorAll('tbody tr:not([aria-hidden])').length<20);
 const first=screen.getByRole('button',{name:'0',exact:true});first.focus();const region=screen.getByRole('region');fireEvent.scroll(region,{target:{scrollTop:5000}});
 assert.equal(document.activeElement,first);assert.ok(document.querySelectorAll('tbody tr:not([aria-hidden])').length<20);const indices=[...document.querySelectorAll('tbody tr[aria-rowindex]')].map(e=>Number(e.getAttribute('aria-rowindex')));assert.ok(indices.some(n=>n>90));assert.deepEqual(indices,[...indices].sort((a,b)=>a-b));
});
test('Controlled pagination waits for parent state and pagination takes precedence over virtualization',()=>{
 let page;const rows=Array.from({length:30},(_,i)=>({id:String(i),n:i}));const props={caption:'Controlled pages',rows,columns:[{id:'n',header:'N',cell:r=>r.n}],rowKey:r=>r.id,pagination:{pageSize:10,page:1,onPageChange:p=>page=p},virtualization:{height:200}};const {rerender}=render(h(UI.Table,props));fireEvent.click(screen.getByRole('button',{name:'다음'}));assert.equal(page,2);assert.equal(document.querySelector('tbody td').textContent,'0');rerender(h(UI.Table,{...props,pagination:{...props.pagination,page}}));assert.equal(document.querySelector('tbody td').textContent,'10');assert.equal(document.querySelector('.iak-table-virtual'),null);
});

function ToastHarness({onResult=()=>{}}={}){const api=UI.useToast();return h('div',{},h('button',{onClick:()=>onResult(api.notify({id:'same',title:'Saved',description:'Changes applied',tone:'success',duration:0}))},'Notify'),h('button',{onClick:()=>{for(let n=1;n<=5;n++)api.notify({id:`q-${n}`,title:`Queue ${n}`,duration:0})}},'Queue'),h('button',{onClick:api.dismissAll},'Clear'),h('button',{onClick:()=>api.notify({title:'Automatic',duration:1000})},'Timed'),h('button',{onClick:()=>api.notify({title:'Action',duration:0,action:{label:'Undo',altText:'Use project history to undo later',onClick:()=>onResult('undone')}})},'Action example'))}
test('Toast deduplicates IDs without moving focus and dismisses explicitly',async()=>{
 const user=(await import('@testing-library/user-event')).default.setup();render(h(UI.ToastProvider,{},h(ToastHarness)));
 const trigger=screen.getByRole('button',{name:'Notify'});await user.click(trigger);await user.click(trigger);assert.equal(document.querySelectorAll('[data-toast-id]').length,1);assert.equal(document.activeElement,trigger);assert.equal(document.querySelector('.iak-toast-icon').querySelector('svg').getAttribute('aria-hidden'),'true');await user.click(screen.getByRole('button',{name:'Saved 알림 닫기'}));await waitFor(()=>assert.equal(document.querySelectorAll('[data-toast-id]').length,0));
});
test('Toast queue shows three, promotes waiting messages and clears everything',async()=>{
 const user=(await import('@testing-library/user-event')).default.setup();render(h(UI.ToastProvider,{},h(ToastHarness)));await user.click(screen.getByRole('button',{name:'Queue'}));assert.equal(document.querySelectorAll('[data-toast-id]').length,3);assert.equal(document.querySelector('[data-toast-id="q-4"]'),null);await user.click(screen.getByRole('button',{name:'Queue 1 알림 닫기'}));await waitFor(()=>assert.ok(document.querySelector('[data-toast-id="q-4"]')));await user.click(screen.getByRole('button',{name:'Clear'}));assert.equal(document.querySelectorAll('[data-toast-id]').length,0);
});
test('Toast auto closes and actions execute once',async()=>{
 const user=(await import('@testing-library/user-event')).default.setup();let count=0;render(h(UI.ToastProvider,{},h(ToastHarness,{onResult:r=>{if(r==='undone')count++}})));await user.click(screen.getByRole('button',{name:'Timed'}));assert.ok(document.querySelector('[data-toast-id]'));await waitFor(()=>assert.equal(document.querySelector('[data-toast-id]')===null,true),{timeout:2500});await user.click(screen.getByRole('button',{name:'Action example'}));await user.click(screen.getByRole('button',{name:'Undo'}));assert.equal(count,1);await waitFor(()=>assert.equal(document.querySelector('[data-toast-id]')===null,true));
});
test('Toast timer pauses for keyboard focus and resumes on leaving',async()=>{
 const user=(await import('@testing-library/user-event')).default.setup();render(h(UI.ToastProvider,{},h(ToastHarness)));await user.click(screen.getByRole('button',{name:'Timed'}));fireEvent.keyDown(document,{key:'F8',code:'F8'});assert.ok(document.activeElement.closest('.iak-toast-viewport'));
 await new Promise(resolve=>setTimeout(resolve,1100));assert.ok(document.querySelector('[data-toast-id]'));screen.getByRole('button',{name:'Action example'}).focus();await waitFor(()=>assert.equal(document.querySelector('[data-toast-id]')===null,true),{timeout:2000});
});
test('Toast rejects blank messages and bounds the queue without evicting existing entries',()=>{
 const results=[];function Capacity(){const {notify}=UI.useToast();return h('button',{onClick:()=>{results.push(notify({title:' '}));for(let i=0;i<51;i++)results.push(notify({title:`Message ${i}`,duration:0}))}},'Fill')};render(h(UI.ToastProvider,{},h(Capacity)));fireEvent.click(screen.getByRole('button',{name:'Fill'}));assert.equal(results[0],undefined);assert.ok(results[50]);assert.equal(results[51],undefined);assert.equal(document.querySelectorAll('[data-toast-id]').length,3);assert.ok(document.querySelector('.iak-toast-title').textContent.includes('Message 0'));
});
