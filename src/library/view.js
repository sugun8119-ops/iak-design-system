const status=document.querySelector('#status');
try {
 const c=await fetch('catalog.json').then(r=>r.json());
 const file=new URL(location.href).searchParams.get('file');
 const card=c.cards.find(x=>x.path===file);
 if(!card) throw Error('등록된 미리보기가 아닙니다.');
 document.title=`${card.name} · IAK Design Studio`;
 document.querySelector('#title').textContent=card.name;
 document.querySelector('#sourceNote').textContent=`${card.group} · Claude Design 원본 · 데스크톱 기준. 작은 화면에서는 미리보기 내부를 스크롤할 수 있습니다.`;
 document.querySelector('#sourceFrame').src=`claude/${file}`;
 document.querySelector('#raw').href=`claude/${file}`;
 const copy=async text=>{document.querySelector('#request').hidden=false;document.querySelector('#request').textContent=text;try {await navigator.clipboard.writeText(text);status.textContent='복사했습니다.'}catch {status.textContent='아래 내용을 선택해 복사하세요.'}};
 document.querySelector('#copyUrl').onclick=()=>copy(location.href);
 document.querySelector('#prompt').onclick=()=>copy(`$iak-design-system\n\nIAK 원본 템플릿: ${location.href}\n원본 HTML: ${new URL('claude/'+file,location.href).href}\n디자인 토큰: ${new URL('claude/colors_and_type.css',location.href).href}\n적용 기준: ${new URL('guide.md',location.href).href}\n\n${document.querySelector('#feature').value.trim()||'이 디자인과 유사한 레이아웃으로 동작하는 화면을 만들어줘.'}\n\n원본을 확인하고 IAK 토큰과 컴포넌트를 사용해줘. 필요한 기능을 연결하고 모바일·키보드 동작을 검증해줘. 서버는 127.0.0.1에서만 실행하고 로컬 브라우저를 열어줘.`);
} catch(e){document.querySelector('#sourceNote').textContent=e.message;document.querySelector('#sourceFrame').hidden=true;}
