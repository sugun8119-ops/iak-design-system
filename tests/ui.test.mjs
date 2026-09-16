import {test,afterEach} from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
const dom=new JSDOM('<!doctype html><html><body></body></html>',{url:'http://localhost'});
for(const key of ['window','document','HTMLElement','HTMLInputElement','Node','MutationObserver'])globalThis[key]=dom.window[key];
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
const React=await import('react');
const {render,screen,fireEvent,cleanup}=await import('@testing-library/react');
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
