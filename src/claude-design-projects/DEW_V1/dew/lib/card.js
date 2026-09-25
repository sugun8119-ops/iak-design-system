/* DEW card helper: case grids + records rendered cases (window.__DEW_RENDERED) incl. overflow and token-link check. */
(function(){
const h=React.createElement;
const TAG={code:'code','native':'native attr',composition:'composition','design-only':'design-only','preview-only':'preview-only',derived:'derived',observed:'observed'};
function Case({c}){return h('figure',{className:'dc-case'+(c.wide?' wide':c.w2?' w2':''),'data-case':c.id,'data-tag':c.tag||'code'},h('div',{className:'dc-demo'+(c.col?' col':''),style:c.demoStyle},c.el),h('figcaption',{className:'dc-cap'},h('span',null,c.label),h('span',{className:'dc-tag','data-t':c.tag||'code'},TAG[c.tag||'code'])))}
function audit(name,extra){const figs=[...document.querySelectorAll('[data-case]')];const cases=figs.map(f=>{const d=f.querySelector('.dc-demo');const r=d.getBoundingClientRect();return {id:f.dataset.case,tag:f.dataset.tag,rendered:d.childElementCount>0&&r.height>0,overflowX:d.scrollWidth>d.clientWidth+1}});
 const cs=getComputedStyle(document.documentElement);const tokens=['--dew-black','--dew-red','--dew-action','--dew-font-display','--dew-font-sans','--dew-focus-width','--dew-motion-base'].map(t=>[t,cs.getPropertyValue(t).trim()!=='']);
 const d=document.documentElement;window.__DEW_RENDERED={component:name,cases,tokensLinked:tokens.every(t=>t[1]),docOverflowX:d.scrollWidth>d.clientWidth+1,width:d.clientWidth,...(extra||{})};console.log('DEW-CASES '+JSON.stringify({c:name,n:cases.length,ok:cases.filter(x=>x.rendered).length,tokens:window.__DEW_RENDERED.tokensLinked,docOverflowX:window.__DEW_RENDERED.docOverflowX}))}
function Page({spec}){
 React.useEffect(()=>{setTimeout(()=>audit(spec.name,spec.audit),60)},[]);
 return h('main',{className:'dc'},
  h('header',{className:'dc-head'},h('div',null,h('div',{className:'dew-overline'},'DEW_V1 · ',spec.group||'Component'),h('h1',null,spec.name)),h('p',null,spec.description),
   h('div',{className:'dc-meta'},(spec.meta||[]).map((m,i)=>h('code',{key:i},m)))),
  spec.sections.map((s,i)=>h('section',{key:i,className:'dc-sec'},h('header',null,h('span',{className:'n'},String(i+1).padStart(2,'0')),h('h2',null,s.title),s.note&&h('p',null,s.note)),s.body||h('div',{className:'dc-grid',style:s.min?{gridTemplateColumns:`repeat(auto-fill,minmax(min(${s.min}px,100%),1fr))`}:undefined},s.cases.map(c=>h(Case,{key:c.id,c}))))),
  spec.notInSource&&spec.notInSource.length?h('section',{className:'dc-sec'},h('header',null,h('span',{className:'n'},'—'),h('h2',null,'소스에 없는 상태 · 렌더하지 않음')),h('div',{className:'dc-note'},spec.notInSource.map((n,i)=>h('div',{key:i},'· ',n)))):null,
  spec.footer||null);
}
window.DEWCard={mount(spec){ReactDOM.createRoot(document.getElementById('root')).render(h(Page,{spec}))},audit};
})();
