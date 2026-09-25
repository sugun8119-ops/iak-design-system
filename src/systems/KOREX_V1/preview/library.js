(function(){
'use strict';
var root=document.getElementById('gallery'),input=document.getElementById('search'),family=document.getElementById('family'),kind=document.getElementById('kind'),count=document.getElementById('result-count');
function setup(){
 var cards=Array.from(root.querySelectorAll('[data-family][data-case]'));if(cards.length!==138)return false;
 var groups=Array.from(root.querySelectorAll('[id^="family-"],.cv-fam-sec'));
 cards.forEach(function(card){
  var row=window.LIBRARY_CASES.find(function(c){return c.family===card.dataset.family&&c.id===card.dataset.case});if(!row)return;
  card.dataset.referenceType=row.type;
  var links=document.createElement('div');links.className='case-links';
  var here=document.createElement('a');here.href='#'+card.id;here.textContent='사례 링크';here.setAttribute('aria-label',row.family+' '+row.id+' 사례 링크');
  var fig=document.createElement('a');fig.href=row.url;fig.textContent='Figma ↗';fig.target='_blank';fig.rel='noopener';fig.setAttribute('aria-label',row.family+' '+row.id+' Figma 보기');links.append(here,fig);card.append(links);
 });
 groups.forEach(function(group){var c=group.querySelector('[data-family]');if(c){var p=document.createElement('p');p.className='case-guidance';p.textContent=window.LIBRARY_GUIDES[c.dataset.family];var grid=group.querySelector('.dew-cov,.cv-grid');grid.parentNode.insertBefore(p,grid)}});
 function filter(){var q=input.value.trim().toLowerCase();var visible=0;cards.forEach(function(c){var match=(!family.value||c.dataset.family===family.value)&&(!kind.value||c.dataset.referenceType===kind.value)&&(!q||(c.dataset.family+' '+c.dataset.case+' '+(window.LIBRARY_GUIDES[c.dataset.family]||'')).toLowerCase().includes(q));c.hidden=!match;if(match)visible++});groups.forEach(function(g){g.hidden=!Array.from(g.querySelectorAll('[data-family][data-case]')).some(function(c){return !c.hidden})});count.textContent=visible+' / 138개 사례';document.getElementById('empty-results').hidden=visible!==0;}
 input.addEventListener('input',filter);family.addEventListener('change',filter);kind.addEventListener('change',filter);document.getElementById('reset').addEventListener('click',function(){input.value='';family.value='';kind.value='';filter();input.focus()});
 function revealHash(){var target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target&&root.contains(target)){input.value='';family.value='';kind.value='';filter();target.scrollIntoView({block:'start'})}}
 window.addEventListener('hashchange',revealHash);filter();revealHash();return true;
}
if(!setup()){var observer=new MutationObserver(function(){if(setup())observer.disconnect()});observer.observe(root,{childList:true,subtree:true})}
})();
