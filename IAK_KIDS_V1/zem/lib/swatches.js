/* IAK KIDS_V1 · swatch renderer for colour token cards. Reads live computed values; contrast measured in-browser (WCAG 2.x). */
(function(){
const C={rgb(v){const d=document.createElement('i');d.style.color=v;document.body.appendChild(d);const c=getComputedStyle(d).color;d.remove();return c},
 parts(c){return c.match(/[\d.]+/g).map(Number)},
 hex(c){const m=this.parts(c);let s='#'+m.slice(0,3).map(v=>Math.round(v).toString(16).padStart(2,'0')).join('').toUpperCase();if(m.length>3&&m[3]<1)s+=Math.round(m[3]*255).toString(16).padStart(2,'0').toUpperCase();return s},
 lum(c){const m=this.parts(c);const f=v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)};return .2126*f(m[0])+.7152*f(m[1])+.0722*f(m[2])},
 ratio(a,b){const x=this.lum(a),y=this.lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}};
window.IAKSwatch=C;
function esc(s){return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
window.IAKSwatches=function(el,groups){const res=[];
 el.innerHTML=groups.map(g=>`<section class="mc-sec"><header><h2>${esc(g.title)}</h2>${g.note?`<p>${esc(g.note)}</p>`:''}</header><div class="sws">${g.items.map(it=>{const [tok,label,pair,min,role]=it;return `<figure class="sw" data-tok="${tok}" data-pair="${pair||''}" data-min="${min||''}"><i style="background:var(--iak-kids-${tok})">${pair?`<b style="color:var(--iak-kids-${pair})">가Aa</b>`:''}</i><figcaption><b>${esc(label)}</b><code>--iak-kids-${tok}</code><span class="hx"></span>${role?`<span class="rl">${esc(role)}</span>`:''}<span class="cr"></span></figcaption></figure>`}).join('')}</div></section>`).join('');
 el.querySelectorAll('.sw').forEach(f=>{const bg=C.rgb(`var(--iak-kids-${f.dataset.tok})`);f.querySelector('.hx').textContent=C.hex(bg);const p=f.dataset.pair;if(p){const fg=C.rgb(`var(--iak-kids-${p})`);const r=C.ratio(bg,fg),min=+f.dataset.min||4.5,ok=r>=min;f.querySelector('.cr').innerHTML=`<span class="zem-badge zem-badge--${ok?'success':'error'}">${ok?'통과':'미달'} ${r.toFixed(2)}:1 (≥${min})</span><span class="rl" style="font-size:11px">vs ${p}</span>`;res.push({bg:f.dataset.tok,fg:p,ratio:+r.toFixed(2),min,pass:ok})}});
 window.__IAK_CONTRAST=(window.__IAK_CONTRAST||[]).concat(res);return res};
})();
