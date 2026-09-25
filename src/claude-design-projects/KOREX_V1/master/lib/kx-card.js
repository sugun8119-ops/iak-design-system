/* KOREX card helper: renders case grids and records rendered cases (window.__KX_RENDERED). */
(function(){
const h=React.createElement;
const TAG={code:'code',native:'native attr',composition:'composition','design-only':'design-only','preview-only':'preview-only',observed:'observed'};
function Case({c}){return h('figure',{className:'mc-case'+(c.wide?' wide':c.w2?' w2':''),'data-case':c.id,'data-tag':c.tag||'code'},h('div',{className:'mc-demo'+(c.col?' col':'')},c.el),h('figcaption',{className:'mc-cap'},h('span',null,c.label),h('span',{className:'mc-tag','data-t':c.tag||'code'},TAG[c.tag||'code'])))}
function Page({spec}){
 React.useEffect(()=>{const t=setTimeout(()=>{const cases=[...document.querySelectorAll('[data-case]')].map(f=>{const d=f.querySelector('.mc-demo');const r=d.getBoundingClientRect();return {id:f.dataset.case,tag:f.dataset.tag,rendered:d.childElementCount>0&&r.height>0,overflowX:d.scrollWidth>d.clientWidth+1}});window.__KX_RENDERED={component:spec.name,cases,notApplicable:spec.notApplicable||[]};console.log('KX-CASES '+spec.name+' '+cases.filter(c=>c.rendered).length+'/'+cases.length)},300);return()=>clearTimeout(t)},[]);
 return h('main',{className:'mc'},
  h('header',{className:'mc-head'},h('div',{className:'ov'},spec.group||'KOREX · Component'),h('h1',null,spec.name),spec.description&&h('p',null,spec.description),h('div',{className:'mc-meta'},(spec.meta||[]).map((m,i)=>h('code',{key:i},m)))),
  spec.sections.map((s,i)=>h('section',{key:i,className:'mc-sec'},h('header',null,h('h2',null,s.title),s.note&&h('p',null,s.note)),h('div',{className:'mc-grid'},s.cases.map(c=>h(Case,{key:c.id,c}))))),
  spec.notApplicable&&spec.notApplicable.length?h('section',{className:'mc-sec'},h('header',null,h('h2',null,'해당 없음 · 렌더하지 않음')),h('div',{className:'mc-note'},spec.notApplicable.map((n,i)=>h('div',{key:i},'· ',n)))):null);
}
window.KXCard={mount(spec){ReactDOM.createRoot(document.getElementById('root')).render(h(Page,{spec}))}};
})();
