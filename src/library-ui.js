const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cache;
export async function library(main, mode = 'all') {
  const route = location.hash;
  cache ||= fetch('library/catalog.json').then(r => {if(!r.ok) throw Error('자료 조회 실패');return r.json()});
  const c = await cache;
  if(!main.isConnected || location.hash !== route) return;
  const view = p => `library/view.html?file=${encodeURIComponent(p)}`;
  main.innerHTML = `<div class="crumb">IAK / SOURCE LIBRARY</div><span class="eyebrow">CLAUDE DESIGN → IAK</span><h1 class="page-title">디자인의 원본을 한곳에.</h1><p class="lead">IAK Design Studio의 RAIS 원본에서 가져온 ${Object.keys(c.tokens).length}개 토큰, ${c.cards.length}개 미리보기, ${c.fonts.length}개 폰트 굵기.</p><div class="sample-row"><a class="button primary" href="library/iak-design-assets.zip" download>디자인 자산 ZIP 받기</a><a class="button" href="library/guide.md">적용 기준 읽기</a><a class="text-link" href="${esc(c.sourceUrl)}" target="_blank" rel="noopener">Claude 원본 ↗</a></div><div class="library-stats"><div><strong>162</strong><span>디자인 토큰</span></div><div><strong>30</strong><span>원본 미리보기</span></div><div><strong>9</strong><span>Pretendard 굵기</span></div><div><strong>${c.icons.length}</strong><span>아이콘 이름 참조</span></div></div><label for="assetSearch">디자인 자산 검색</label><input id="assetSearch" type="search" placeholder="Button, color, 브랜드, 폰트…"><div class="filters" role="group" aria-label="자산 분류">${[['all','전체'],['tokens','토큰'],['Components','컴포넌트'],['Brand','브랜드·문서'],['kits','UI 킷'],['files','파일·폰트'],['icons','아이콘']].map(([k,n])=>`<button class="filter" data-kind="${k}" aria-pressed="${k===mode}">${n}</button>`).join('')}</div><p id="assetCount" class="lead" aria-live="polite"></p><div id="assetResults"></div><section class="panel"><h2>원본 범위와 확인할 부분</h2><ul>${c.limits.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><p>불러온 날짜 ${c.importedAt} · <a href="library/catalog.json">전체 파일·체크섬 목록</a></p></section>`;
  let kind = mode;
  const render = () => {
    const q=main.querySelector('#assetSearch').value.trim().toLowerCase();
    let count=0,html='';
    if(kind==='tokens') {
      const rows=Object.entries(c.tokens).filter(([n,v])=>`${n} ${v}`.toLowerCase().includes(q));count=rows.length;
      html=`<div class="table-wrap"><table class="token-table"><thead><tr><th>토큰</th><th>기본값</th></tr></thead><tbody>${rows.map(([n,v])=>`<tr><td><code>${esc(n)}</code></td><td>${/^#|^rgba?\(/.test(v)?`<span class="token-dot" style="background:${esc(v)}"></span>`:''}<code>${esc(v)}</code></td></tr>`).join('')}</tbody></table></div><details class="panel"><summary>반응형·모션 감소 조건별 덮어쓰기</summary><pre>${esc(JSON.stringify(c.contextOverrides,null,2))}</pre></details>`;
    } else if(kind==='files') {
      const rows=c.files.filter(f=>f.path.toLowerCase().includes(q)); count=rows.length;
      html=`<div class="asset-files">${rows.map(f=>`<a href="library/claude/${encodeURI(f.path)}" download><span>${esc(f.path)}</span><small>${(f.bytes/1024).toFixed(1)} KB ↓</small></a>`).join('')}</div>`;
    } else if(kind==='icons') {
      const rows=c.icons.filter(n=>n.includes(q));count=rows.length;
      html=`<div class="callout">원본이 사용하는 Eva/Solar 아이콘 이름 목록입니다. SVG 파일은 원본에 포함되어 있지 않습니다. <a href="${view('preview/iconography.html')}">원본 아이콘 미리보기 ↗</a></div><div class="icon-names">${rows.map(n=>`<code>${esc(n)}</code>`).join('')}</div>`;
    } else {
      const rows=c.cards.filter(x=>(kind==='all'||(kind==='kits'?x.group.startsWith('UI Kit'):x.group===kind))&&`${x.name} ${x.group} ${x.subtitle||''}`.toLowerCase().includes(q));count=rows.length;
      html=`<div class="asset-cards">${rows.map(x=>`<a class="panel asset-card" href="${view(x.path)}"><span class="eyebrow">${esc(x.group)}</span><h2>${esc(x.name)}</h2><p>${esc(x.subtitle||'Claude Design 원본 화면')}</p><span class="text-link">원본 미리보기 · URL 복사 ↗</span></a>`).join('')}</div>`;
      if(kind==='Brand'||kind==='all') html=`<section class="panel brand-proof"><img src="library/claude/assets/brand-mark-rgb.png" alt="IAK 원본 브랜드 마크 세 가지"><div><h2>IAK 브랜드 자산</h2><p>원본 이미지, 사용 규칙, 글꼴과 UI 구성을 함께 제공합니다.</p></div></section>`+html;
    }
    main.querySelector('#assetResults').innerHTML=count?html:'<div class="empty">일치하는 자산이 없습니다.</div>';
    main.querySelector('#assetCount').textContent=`${count}개 항목`;
  };
  main.querySelectorAll('[data-kind]').forEach(b=>b.onclick=()=>{kind=b.dataset.kind;main.querySelectorAll('[data-kind]').forEach(x=>x.setAttribute('aria-pressed',x===b));render()});
  main.querySelector('#assetSearch').oninput=render; render();
}
