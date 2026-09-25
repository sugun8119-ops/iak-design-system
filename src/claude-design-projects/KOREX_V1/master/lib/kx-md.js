/* Minimal markdown → HTML (headings, lists, checkboxes, tables, code fences, inline code/bold). */
window.KXmd=function(src){const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');const inl=s=>esc(s).replace(/\`([^\`]+)\`/g,'<code>$1</code>').replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');
const L=src.split('\n');let o='',i=0;while(i<L.length){let l=L[i];
if(l.startsWith('\`\`\`')){let c=[];i++;while(i<L.length&&!L[i].startsWith('\`\`\`'))c.push(L[i++]);i++;o+='<pre class="md-code"><code>'+esc(c.join('\n'))+'</code></pre>';continue}
let m=l.match(/^(#{1,3}) (.*)/);if(m){o+='<h'+(m[1].length+1)+'>'+inl(m[2])+'</h'+(m[1].length+1)+'>';i++;continue}
if(l.startsWith('|')){const rows=[];while(i<L.length&&L[i].startsWith('|'))rows.push(L[i++]);const cells=r=>r.split('|').slice(1,-1).map(c=>c.trim());o+='<div class="mc-scroll"><table class="mc-tbl"><thead><tr>'+cells(rows[0]).map(c=>'<th>'+inl(c)+'</th>').join('')+'</tr></thead><tbody>'+rows.slice(2).map(r=>'<tr>'+cells(r).map(c=>'<td>'+inl(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';continue}
if(/^- /.test(l)){o+='<ul>';while(i<L.length&&/^- /.test(L[i])){let t=L[i++].slice(2);const cb=t.match(/^\[( |x)\] (.*)/);o+='<li>'+(cb?'<input type="checkbox" disabled '+(cb[1]==='x'?'checked':'')+' aria-hidden="true"> '+inl(cb[2]):inl(t))+'</li>'}o+='</ul>';continue}
if(l.trim())o+='<p>'+inl(l)+'</p>';i++}return o};
