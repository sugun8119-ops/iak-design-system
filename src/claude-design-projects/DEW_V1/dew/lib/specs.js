/* DEW component card specs · 16 components. Props = packages/ui API (see figma-system.json). All copy/data fictional. */
(function(){
const h=React.createElement,F=React.Fragment,D=window.DEW;
const {Icon,Button,TextField,Textarea,Select,Checkbox,Switch,Badge,Card,Skeleton,Dialog,Menu,Table,Pagination,AlertDialog}=D;const TV=D.preview.ToastView;
const W=(w,el)=>h('div',{style:{width:w,maxWidth:'100%'}},el);
const LONG='2026 가을호 특집 — 도시의 오래된 골목과 새로 문을 연 작은 서점들을 따라 걷는 긴 산책 기록';
const box=(el,w=220)=>h('div',{style:{width:w,maxWidth:'100%',border:'1px dashed var(--dew-line-mid)',padding:8,overflow:'hidden'}},el);
const S={};
S.Button={name:'Button',group:'Components · Actions',description:'variant·size·loading·disabled가 실제 props. DEW 시각: 각진 0 radius, 빨강은 주 행동 1개에만, 보조는 검정 선.',meta:['packages/ui/src/index.tsx','variant primary|secondary|danger|text','size sm 32 · md 40 · lg 48 (derived)','radius 0 (derived)','focus 2px outline + 2px offset'],
sections:[
{title:'Variant',cases:[['primary','variant="primary" · red CTA','구독하기'],['secondary','variant="secondary" · black rule','취소'],['danger','variant="danger"','삭제'],['text','variant="text" · underline','기사 전체 보기']].map(([v,l,t])=>({id:v,label:l,el:h(Button,{variant:v},t)}))},
{title:'Size',cases:['sm','md','lg'].map((s,i)=>({id:'size-'+s,label:`size="${s}" · ${[32,40,48][i]}px`,el:h(F,null,h(Button,{size:s},'구독하기'),h(Button,{size:s,variant:'secondary'},'취소'))}))},
{title:'State',note:'hover/pressed/focus는 data-preview-state로 고정 표시(카드 전용). 실제는 :hover/:active/:focus-visible',cases:[
 {id:'default',label:'default',el:h(F,null,h(Button,null,'구독하기'),h(Button,{variant:'secondary'},'취소'))},
 {id:'hover',label:'hover · primary red-600 / secondary 반전',el:h(F,null,h(Button,{'data-preview-state':'hover'},'구독하기'),h(Button,{variant:'secondary','data-preview-state':'hover'},'취소'),h(Button,{variant:'text','data-preview-state':'hover'},'더 보기'))},
 {id:'pressed',label:'pressed · red-700 / grey-800',el:h(F,null,h(Button,{'data-preview-state':'pressed'},'구독하기'),h(Button,{variant:'secondary','data-preview-state':'pressed'},'취소'))},
 {id:'focus',label:'focus-visible · 2px/2px black',el:h(F,null,h(Button,{'data-preview-state':'focus'},'구독하기'),h(Button,{variant:'secondary','data-preview-state':'focus'},'취소'))},
 {id:'disabled',label:'disabled · grey-100 / fg-disabled',el:h(F,null,h(Button,{disabled:true},'구독하기'),h(Button,{disabled:true,variant:'secondary'},'취소'),h(Button,{disabled:true,variant:'text'},'링크'))},
 {id:'loading',label:'loading · aria-busy, 폭 유지',el:h(F,null,h(Button,{loading:true},'저장 중'),h(Button,{loading:true,variant:'secondary'},'불러오기'))}]},
{title:'Content',cases:[{id:'with-icon',tag:'composition',label:'children = Icon + label',el:h(Button,{variant:'secondary'},h(Icon,{name:'eva:download-fill',size:16}),'PDF 내려받기')},
 {id:'icon-only',tag:'composition',label:'icon only + aria-label',el:h(Button,{variant:'secondary','aria-label':'더보기',style:{padding:'0 10px'}},h(Icon,{name:'eva:more-horizontal-fill',size:20}))},
 {id:'long-label',label:'긴 문구 · nowrap(소스) → 부모가 폭 제약 시 잘림',el:box(h(Button,null,'이번 호 특집 기사 전체를 PDF로 내려받기'))}]},
{title:'Design-only',note:'코드에 없음. 제품에서는 오른쪽 대응 props 사용',cases:[
 {id:'d-arrow',tag:'design-only',label:'Editorial arrow link → variant="text" + Icon',el:h('button',{type:'button',className:'dew-button dew-button--text dew-button--md',style:{textDecoration:'none',borderBottom:'1px solid currentColor',paddingInline:0}},h('span',null,'READ STORY ',h(Icon,{name:'eva:arrow-ios-forward-fill',size:16})))},
 {id:'d-inverse',tag:'design-only',label:'Inverse on photo → 대응 없음 (secondary 사용)',demoStyle:{background:'var(--dew-grey-800)'},el:h('button',{type:'button',className:'dew-button dew-button--md',style:{background:'transparent',borderColor:'#fff',color:'#fff'}},h('span',null,'VIEW GALLERY'))}]}],
notInSource:['icon-only 전용 prop 없음 — children + aria-label로 조합']};

const fieldCases=(C,extra={})=>[
 {id:'default',label:'label + placeholder',el:W(300,h(C,{label:'기사 제목',placeholder:'제목을 입력하세요',...extra}))},
 {id:'description',label:'description → aria-describedby',el:W(300,h(C,{label:'슬러그',description:'영문 소문자와 하이픈만 사용합니다.',defaultValue:'autumn-bookshops',...extra}))},
 {id:'required',label:'required · 별표',el:W(300,h(C,{label:'필자',required:true,placeholder:'이름',...extra}))},
 {id:'hover',label:'hover · border black',el:W(300,h(C,{label:'기사 제목','data-preview-state':'hover',placeholder:'제목',...extra}))},
 {id:'focus',label:'focus-visible · 2px/2px',el:W(300,h(C,{label:'기사 제목','data-preview-state':'focus',defaultValue:'골목의 서점',...extra}))},
 {id:'error',label:'error → aria-invalid + 빨강 하단선',el:W(300,h(C,{label:'이메일',error:'올바른 이메일 형식이 아닙니다.',defaultValue:'reader@',...extra}))},
 {id:'disabled',label:'disabled',el:W(300,h(C,{label:'발행 ID',disabled:true,defaultValue:'DEW-2026-09',...extra}))},
 {id:'long',label:'긴 문구 · 라벨/값/에러 줄바꿈',el:W(260,h(C,{label:'이번 호 특집 기사 대표 제목 (검색 결과와 공유 카드에 함께 쓰임)',defaultValue:LONG,error:'제목은 60자 이내로 줄여 주세요. 공유 카드에서 잘릴 수 있습니다.',...extra}))}];
S.TextField={name:'TextField',group:'Components · Inputs',description:'label·description·error·required·disabled + 네이티브 input 속성. 라벨은 overline 대문자, 필드는 0 radius 1px 회색선.',meta:['packages/ui/src/index.tsx','height 40 (md)','error = description 대체','radius 0 (derived)'],sections:[{title:'Field states',cases:fieldCases(TextField)},{title:'Native type',cases:[{id:'search',tag:'native',label:'type="search"',el:W(300,h(TextField,{label:'검색',type:'search',placeholder:'기사, 필자, 태그'}))},{id:'number',tag:'native',label:'type="number"',el:W(300,h(TextField,{label:'부수',type:'number',defaultValue:1200}))}]}]};
S.Textarea={name:'Textarea',group:'Components · Inputs',description:'TextField와 같은 field shell, rows 기본 4, resize vertical.',meta:['packages/ui/src/index.tsx','min-height 112','line-height 1.65'],sections:[{title:'States',cases:[
 {id:'default',label:'rows=4 기본',el:W(320,h(Textarea,{label:'리드 문단',placeholder:'기사 첫 문단'}))},
 {id:'rows',tag:'native',label:'rows=6',el:W(320,h(Textarea,{label:'편집자 메모',rows:6,defaultValue:'사진 2컷 추가 필요.'}))},
 {id:'focus',label:'focus-visible',el:W(320,h(Textarea,{label:'리드 문단','data-preview-state':'focus',defaultValue:'가을 오후, 골목 끝 서점에 불이 켜졌다.'}))},
 {id:'error',label:'error',el:W(320,h(Textarea,{label:'요약',error:'요약은 비워 둘 수 없습니다.'}))},
 {id:'disabled',label:'disabled',el:W(320,h(Textarea,{label:'원고 (잠김)',disabled:true,defaultValue:'교정 완료 · 수정 불가'}))},
 {id:'long',label:'긴 문구',el:W(320,h(Textarea,{label:'본문',defaultValue:(LONG+'. ').repeat(4)}))}]}]};
const opts=h(F,null,h('option',null,'특집'),h('option',null,'인터뷰'),h('option',null,'에세이'),h('option',null,'리뷰'));
S.Select={name:'Select',group:'Components · Inputs',description:'네이티브 select + field shell. 1.5px 검정 chevron. 옵션 목록은 OS 기본 렌더.',meta:['packages/ui/src/index.tsx','native <select>','padding-right 40'],sections:[{title:'States',cases:[
 {id:'default',label:'default',el:W(280,h(Select,{label:'섹션',defaultValue:'특집'},opts))},
 {id:'description',label:'description',el:W(280,h(Select,{label:'섹션',description:'목차 순서를 결정합니다.'},opts))},
 {id:'focus',label:'focus-visible',el:W(280,h(Select,{label:'섹션','data-preview-state':'focus'},opts))},
 {id:'error',label:'error',el:W(280,h(Select,{label:'섹션',error:'섹션을 선택하세요.'},h('option',{value:''},'선택'),opts))},
 {id:'disabled',label:'disabled',el:W(280,h(Select,{label:'섹션',disabled:true},opts))},
 {id:'long',label:'긴 옵션 · 말줄임은 OS 처리',el:W(240,h(Select,{label:'연재',defaultValue:'a'},h('option',{value:'a'},LONG)))}]}],notInSource:['검색형/다중 선택 combobox 없음 — 네이티브 select만']};
S.Checkbox={name:'Checkbox',group:'Components · Selection',description:'label + 네이티브 checkbox. 18px 정사각, 체크 시 검정 채움.',meta:['packages/ui/src/index.tsx','18×18 · radius 0','checked = black'],sections:[{title:'States',cases:[
 {id:'unchecked',label:'unchecked',el:h(Checkbox,{label:'뉴스레터 받기'})},{id:'checked',label:'checked',el:h(Checkbox,{label:'뉴스레터 받기',defaultChecked:true})},
 {id:'hover',label:'hover',el:h(Checkbox,{label:'뉴스레터 받기','data-preview-state':'hover'})},{id:'focus',label:'focus-visible',el:h(Checkbox,{label:'뉴스레터 받기','data-preview-state':'focus',defaultChecked:true})},
 {id:'disabled',label:'disabled · off / on',el:h(F,null,h(Checkbox,{label:'잠김',disabled:true}),h(Checkbox,{label:'잠김',disabled:true,defaultChecked:true}))},
 {id:'long',label:'긴 문구 · 줄바꿈',el:W(260,h(Checkbox,{label:'개인정보 수집·이용과 마케팅 정보 수신, 제3자 제공 동의 내용을 모두 확인했습니다'}))}]}],notInSource:['indeterminate 상태 없음','error prop 없음']};
S.Switch={name:'Switch',group:'Components · Selection',description:'role="switch" 체크박스. 사각 트랙 40×22, 켜짐은 검정 반전.',meta:['packages/ui/src/index.tsx','track 40×22 · knob 14','motion base 180ms'],sections:[{title:'States',cases:[
 {id:'off',label:'off',el:h(Switch,{label:'자동 발행'})},{id:'on',label:'on',el:h(Switch,{label:'자동 발행',defaultChecked:true})},
 {id:'focus',label:'focus-visible',el:h(Switch,{label:'자동 발행','data-preview-state':'focus',defaultChecked:true})},
 {id:'disabled',label:'disabled · off / on',el:h(F,null,h(Switch,{label:'잠김',disabled:true}),h(Switch,{label:'잠김',disabled:true,defaultChecked:true}))},
 {id:'long',label:'긴 문구',el:W(260,h(Switch,{label:'새 댓글이 달리면 필자와 담당 편집자에게 이메일로 즉시 알림 보내기'}))}]}]};
S.Badge={name:'Badge',group:'Components · Display',description:'tone 5종. 사각, overline 대문자. 빨강은 error만 — 섹션 라벨 빨강은 design-only.',meta:['packages/ui/src/index.tsx','tone neutral|success|warning|error|info'],sections:[
{title:'Tone',cases:[['neutral','초안'],['success','발행됨'],['warning','검토 중'],['error','반려'],['info','특집']].map(([t,l])=>({id:t,label:`tone="${t}"`,el:h(Badge,{tone:t},l)}))},
{title:'Content',cases:[{id:'icon',tag:'composition',label:'Icon + text',el:h(Badge,{tone:'success'},h(Icon,{name:'eva:checkmark-circle-2-fill',size:14}),'발행됨')},{id:'long',label:'긴 문구 · 줄바꿈',el:W(180,h(Badge,null,'2026 가을호 특집 연재 · 골목 서점'))}]},
{title:'Design-only',cases:[{id:'d-section',tag:'design-only',label:'Section label (red overline) → 대응 없음',el:h('span',{className:'dew-overline dew-overline--red'},'FEATURE — 04')},{id:'d-number',tag:'design-only',label:'Issue number → tone="info"',el:h('span',{style:{font:'400 22px/1 var(--dew-font-display)',borderBottom:'1px solid'}},'No. 27')}]}]};
S.Card={name:'Card',group:'Components · Display',description:'title(h2 serif)·footer·children. 모서리 0, 상단 검정 1px + 나머지 hair선.',meta:['packages/ui/src/index.tsx','padding 24 · radius 0','title → aria-labelledby'],sections:[{title:'Composition',min:320,cases:[
 {id:'title-footer',label:'title + children + footer',el:W(340,h(Card,{title:'이번 주 발행',footer:'9월 25일 업데이트'},h('div',{className:'dew-numeral'},'14'),h('div',{className:'dew-caption'},'지난주 대비 +3')))},
 {id:'body-only',label:'children only',el:W(340,h(Card,null,h('p',null,'제목 없는 카드는 aria-labelledby를 직접 전달하세요.')))},
 {id:'loading',tag:'composition',label:'loading · Skeleton 조합',el:W(340,h(Card,{title:'이번 주 발행','aria-busy':'true'},h(Skeleton,{height:48,width:'40%'}),h(Skeleton,{height:14,width:'70%'})))},
 {id:'missing',tag:'composition',label:'누락 데이터 · —',el:W(340,h(Card,{title:'평균 체류 시간',footer:'집계 대기'},h('div',{className:'dew-numeral dew-miss'},'—'),h('div',{className:'dew-caption'},'데이터가 아직 없습니다')))},
 {id:'error',tag:'composition',label:'error · 재시도',el:W(340,h(Card,{title:'구독자 수'},h('p',{className:'dew-error dew-small'},'불러오지 못했습니다.'),h('div',null,h(Button,{variant:'secondary',size:'sm'},'다시 시도'))))},
 {id:'long',label:'긴 제목',el:W(300,h(Card,{title:LONG},h('p',{className:'dew-small dew-muted'},'제목은 줄바꿈되며 잘리지 않습니다.')))},
 {id:'d-story',tag:'design-only',label:'Story card (photo) → Card + 이미지 children',el:W(300,h('article',{className:'story'},h('div',{className:'dew-photo',style:{aspectRatio:'4/5'}},h('span',null,'PHOTO 4:5')),h('div',{className:'dew-overline dew-overline--red'},'ESSAY'),h('h3',null,'골목 끝, 불 켜진 서점'),h('div',{className:'dew-byline'},h('span',null,'글 한지우'),h('span',null,'6분'))))}]}]};
S.Skeleton={name:'Skeleton',group:'Components · Feedback',description:'aria-hidden 로딩 자리표시. 회색 shimmer, reduced-motion에서 정지.',meta:['packages/ui/src/index.tsx','width · height · circle','shimmer 1.4s · reduced → none'],sections:[{title:'Shapes',cases:[
 {id:'line',label:'line · 100% × 20',el:W(260,h(Skeleton,null))},{id:'sized',label:'width/height',el:h(F,null,h(Skeleton,{width:120,height:32}),h(Skeleton,{width:64,height:32}))},
 {id:'circle',label:'circle',el:h(Skeleton,{width:40,height:40,circle:true})},
 {id:'story',tag:'composition',label:'story card 자리표시',el:W(240,h('div',{className:'stack',style:{gap:10}},h(Skeleton,{height:200}),h(Skeleton,{height:12,width:'30%'}),h(Skeleton,{height:24}),h(Skeleton,{height:24,width:'70%'})))},
 {id:'reduced',tag:'preview-only',label:'prefers-reduced-motion → animation none',el:W(260,h(Skeleton,{style:{animation:'none'}}))}]}]};
const icons=['eva:search-fill','eva:bookmark-fill','eva:link-fill','eva:arrow-ios-forward-fill','eva:close-fill','eva:checkmark-circle-2-fill','eva:alert-triangle-fill','eva:info-fill'];
S.Icon={name:'Icon',group:'Components · Display',description:'실제 SVG 97개 (Eva/Solar) · currentColor. 없는 이름은 null 반환. DEW에서 아이콘은 보조 — 타이포가 주.',meta:['packages/ui/src/index.tsx','size 16 / 20 / 24','label → role=img'],sections:[{title:'Size & color',cases:[
 {id:'s16',label:'size=16',el:icons.map(n=>h(Icon,{key:n,name:n,size:16}))},{id:'s20',label:'size=20 (기본)',el:icons.map(n=>h(Icon,{key:n,name:n}))},{id:'s24',label:'size=24',el:icons.map(n=>h(Icon,{key:n,name:n,size:24}))},
 {id:'color',label:'currentColor · black / grey / red',el:h(F,null,h('span',{style:{color:'var(--dew-fg)'}},h(Icon,{name:'eva:bookmark-fill',size:24})),h('span',{style:{color:'var(--dew-fg-3)'}},h(Icon,{name:'eva:bookmark-fill',size:24})),h('span',{style:{color:'var(--dew-action)'}},h(Icon,{name:'eva:bookmark-fill',size:24})))},
 {id:'label',label:'label="북마크" → role=img',el:h(Icon,{name:'eva:bookmark-fill',size:24,label:'북마크'})},
 {id:'unresolved',label:'누락 이름 → null (렌더 없음)',el:h('span',{className:'dew-caption'},'solar:gem-bold → ',h(Icon,{name:'solar:gem-bold'})||'null')}]}]};
S.Dialog={name:'Dialog',group:'Components · Overlay',description:'모달. 검정 1px 테두리, 제목 serif h2 + 하단 검정 선. 카드에서는 inline 무대로 고정 표시.',meta:['packages/ui/src/composites.tsx','size sm 480 · md 640 · lg 880','overlay black 56%','focus trap · Esc'],sections:[{title:'Size',min:560,cases:['sm','md','lg'].map(s=>({id:'size-'+s,tag:'preview-only',label:`size="${s}" · inline`,wide:s==='lg',el:h('div',{className:'dew-stage',style:{width:'100%',height:s==='lg'?380:340}},h(Dialog,{inline:true,size:s,title:'기사 공유 설정',description:'외부 공유 카드에 표시될 정보를 확인하세요.',footer:h(F,null,h(Button,{variant:'secondary'},'취소'),h(Button,null,'저장'))},h(TextField,{label:'공유 제목',defaultValue:'골목 끝, 불 켜진 서점'})))}))},
{title:'Content',min:560,cases:[{id:'long',tag:'preview-only',label:'긴 본문 · 내부 스크롤',el:h('div',{className:'dew-stage',style:{width:'100%',height:360}},h(Dialog,{inline:true,title:LONG,footer:h(Button,null,'확인')},h('p',null,(LONG+'. ').repeat(6))))},
 {id:'live',label:'live · trigger 클릭 → 포털',el:h(Dialog,{trigger:h(Button,{variant:'secondary'},'대화상자 열기'),title:'발행 예약',description:'10월 1일 09:00에 발행됩니다.',footer:h(Button,null,'확인')})}]}],notInSource:['inline prop은 미리보기 전용 (소스는 Radix portal)']};
const items=[{id:'open',label:'기사 열기'},{id:'dup',label:'복제'},{id:'lock',label:'편집 잠금 (권한 없음)',disabled:true},{id:'del',label:'삭제',danger:true,separatorBefore:true}];
S.Menu={name:'Menu',group:'Components · Overlay',description:'드롭다운 메뉴. 강조 행은 검정 반전, danger는 빨강 반전.',meta:['packages/ui/src/composites.tsx','items: id·label·onSelect·disabled·danger·separatorBefore','keyboard ↑↓ Home End Esc'],sections:[{title:'States',cases:[
 {id:'default',tag:'preview-only',label:'inline · highlighted 첫 항목',el:h(Menu,{inline:true,label:'기사 작업',items,highlightedId:'open'})},
 {id:'danger',tag:'preview-only',label:'danger highlighted',el:h(Menu,{inline:true,label:'기사 작업',items,highlightedId:'del'})},
 {id:'long',tag:'preview-only',label:'긴 항목 · 줄바꿈',el:W(220,h(Menu,{inline:true,label:'연재',items:[{id:'a',label:LONG},{id:'b',label:'짧은 항목'}]}))},
 {id:'live',label:'live · trigger',el:h(Menu,{label:'기사 작업',items,trigger:h(Button,{variant:'secondary'},'작업 ',h(Icon,{name:'eva:arrow-ios-downward-fill',size:16}))})}]}]};
const rows=[{id:1,t:'골목 끝, 불 켜진 서점',a:'한지우',s:'발행됨',v:18420},{id:2,t:'도시의 여백을 걷다',a:'이도현',s:'검토 중',v:9210},{id:3,t:'작은 출판사 인터뷰',a:null,s:'초안',v:null},{id:4,t:LONG,a:'박세린',s:'반려',v:1204},{id:5,t:'가을 음반 리뷰',a:'정민',s:'발행됨',v:22013}];
const TONE={'발행됨':'success','검토 중':'warning','초안':'neutral','반려':'error'};
const cols=[{id:'t',header:'제목',cell:r=>r.t,sortValue:r=>r.t},{id:'a',header:'필자',cell:r=>r.a||h('span',{className:'dew-miss'},'미지정')},{id:'s',header:'상태',cell:r=>h(Badge,{tone:TONE[r.s]},r.s),sortValue:r=>r.s},{id:'v',header:'조회',align:'right',cell:r=>r.v==null?h('span',{className:'dew-miss'},'—'):r.v.toLocaleString('ko-KR'),sortValue:r=>r.v}];
const many=Array.from({length:120},(_,i)=>({id:i+1,t:`아카이브 기사 ${i+1}`,a:['한지우','이도현','박세린'][i%3],s:['발행됨','초안'][i%2],v:1000+i*37}));
S.Table={name:'Table',group:'Components · Data',description:'caption · columns · rows · sort · pagination · virtualization · loading · error · empty. 상단 3px 검정 굵은선, 헤더 overline, 행 hair선.',meta:['packages/ui/src/table.tsx','sort aria-sort','pagination pageSize','virtualization height/rowHeight'],sections:[{title:'Data states',min:560,cases:[
 {id:'default',wide:true,label:'default · defaultSort 조회 ↓ · 누락(—, 미지정) · 긴 제목',el:h('div',{style:{width:'100%'}},h(Table,{caption:'9월 기사',columns:cols,rows,rowKey:r=>r.id,defaultSort:{columnId:'v',direction:'descending'}}))},
 {id:'pagination',wide:true,label:'pagination · pageSize=2',el:h('div',{style:{width:'100%'}},h(Table,{caption:'9월 기사',columns:cols,rows,rowKey:r=>r.id,pagination:{pageSize:2}}))},
 {id:'loading',label:'loading',el:h('div',{style:{width:'100%'}},h(Table,{caption:'9월 기사',columns:cols,rows:[],rowKey:r=>r.id,loading:true,minWidth:0}))},
 {id:'error',label:'error',el:h('div',{style:{width:'100%'}},h(Table,{caption:'9월 기사',columns:cols,rows:[],rowKey:r=>r.id,error:'기사 목록을 불러오지 못했습니다.',minWidth:0}))},
 {id:'empty',label:'empty',el:h('div',{style:{width:'100%'}},h(Table,{caption:'9월 기사',columns:cols,rows:[],rowKey:r=>r.id,emptyMessage:'조건에 맞는 기사가 없습니다.',minWidth:0}))},
 {id:'focus',tag:'preview-only',label:'sort button focus-visible',el:h('button',{type:'button',className:'dew-table-sort','data-preview-state':'focus',style:{font:'var(--dew-text-overline)',letterSpacing:'.12em'}},'제목 ↕')},
 {id:'virtual',wide:true,label:'virtualization · 120행 · height 280',el:h('div',{style:{width:'100%'}},h(Table,{caption:'아카이브',columns:cols,rows:many,rowKey:r=>r.id,virtualization:{height:280,rowHeight:48}}))}]}]};
S.Pagination={name:'Pagination',group:'Components · Data',description:'처음·이전·현재/전체·다음·마지막. 각진 40px 버튼, hover 검정 반전.',meta:['packages/ui/src/table.tsx','page · pageCount · onPageChange · disabled'],sections:[{title:'States',min:340,cases:[
 {id:'first',label:'page 1 / 12',el:h(Pagination,{page:1,pageCount:12,onPageChange(){}})},{id:'middle',label:'page 6 / 12',el:h(Pagination,{page:6,pageCount:12,onPageChange(){}})},
 {id:'last',label:'page 12 / 12',el:h(Pagination,{page:12,pageCount:12,onPageChange(){}})},{id:'single',label:'pageCount 1',el:h(Pagination,{page:1,pageCount:1,onPageChange(){}})},
 {id:'disabled',label:'disabled',el:h(Pagination,{page:3,pageCount:12,disabled:true,onPageChange(){}})},
 {id:'hover',tag:'preview-only',label:'hover · 다음',el:h(Pagination,{page:3,pageCount:12,previewState:'hover',onPageChange(){}})},
 {id:'focus',tag:'preview-only',label:'focus-visible · 다음',el:h(Pagination,{page:3,pageCount:12,previewState:'focus',onPageChange(){}})}]}]};
const ul=el=>h('ol',{style:{listStyle:'none',margin:0,padding:0,width:360,maxWidth:'100%'}},el);
function LiveToast(){const t=D.useToast();return h(Button,{variant:'secondary',onClick:()=>t.notify({title:'기사가 저장되었습니다',description:'초안 · 방금 전',tone:'success'})},'토스트 띄우기')}
S.Toast={name:'Toast',group:'Components · Feedback',description:'ToastProvider + useToast().notify. 각진 검정 테두리, 아이콘 사각 32. 최대 3개 표시.',meta:['packages/ui/src/toast.tsx','tone info|success|warning|error','duration 5000 · 0=유지','viewport 380 · bottom-right'],sections:[{title:'Tone',min:380,cases:[['info','편집 회의가 10분 후 시작됩니다'],['success','기사가 발행되었습니다'],['warning','사진 저작권 확인이 필요합니다'],['error','저장하지 못했습니다']].map(([t,l])=>({id:t,tag:'preview-only',label:`tone="${t}" · ToastView`,el:ul(h(TV,{tone:t,title:l}))}))},
{title:'Content',min:380,cases:[{id:'description',tag:'preview-only',label:'description',el:ul(h(TV,{tone:'success',title:'기사가 발행되었습니다',description:'2026 가을호 · 방금 전'}))},
 {id:'action',tag:'preview-only',label:'action',el:ul(h(TV,{tone:'info',title:'초안이 복구되었습니다',action:{label:'되돌리기',altText:'복구 되돌리기',onClick(){}}}))},
 {id:'close-focus',tag:'preview-only',label:'close focus-visible',el:ul(h(TV,{tone:'info',title:'새 댓글 3개',previewState:'focus'}))},
 {id:'long',tag:'preview-only',label:'긴 문구',el:ul(h(TV,{tone:'warning',title:LONG,description:(LONG+' ').repeat(2)}))},
 {id:'stack',tag:'preview-only',label:'stack · 3개',el:ul(h(F,null,h(TV,{tone:'success',title:'발행됨'}),h(TV,{tone:'info',title:'예약됨'}),h(TV,{tone:'error',title:'실패'})))},
 {id:'live',label:'live · ToastProvider',el:h(D.ToastProvider,null,h(LiveToast))}]}],notInSource:['ToastView는 미리보기용 노출 — 제품은 useToast().notify만 사용']};
S.AlertDialog={name:'AlertDialog',group:'Components · Overlay',description:'확인이 필요한 파괴적 작업. 비동기 onConfirm pending·error 상태, 취소 버튼 초기 포커스.',meta:['packages/ui/src/alert-dialog.tsx','danger → variant danger','pending → loading','error → role=alert'],sections:[{title:'States',min:520,cases:[
 {id:'primary',tag:'preview-only',label:'primary',el:h('div',{className:'dew-stage',style:{width:'100%',height:300}},h(AlertDialog,{inline:true,title:'발행할까요?',description:'구독자 12,480명에게 뉴스레터가 함께 발송됩니다.',confirmLabel:'발행',onConfirm(){}}))},
 {id:'danger',tag:'preview-only',label:'danger',el:h('div',{className:'dew-stage',style:{width:'100%',height:300}},h(AlertDialog,{inline:true,danger:true,title:'기사를 삭제할까요?',description:'삭제한 기사는 복구할 수 없습니다.',confirmLabel:'삭제',onConfirm(){}}))},
 {id:'pending',tag:'preview-only',label:'pending',el:h('div',{className:'dew-stage',style:{width:'100%',height:320}},h(AlertDialog,{inline:true,danger:true,previewState:'pending',title:'기사를 삭제할까요?',description:'삭제한 기사는 복구할 수 없습니다.',confirmLabel:'삭제',onConfirm(){}}))},
 {id:'error',tag:'preview-only',label:'error',el:h('div',{className:'dew-stage',style:{width:'100%',height:320}},h(AlertDialog,{inline:true,danger:true,previewState:'error',title:'기사를 삭제할까요?',description:'삭제한 기사는 복구할 수 없습니다.',confirmLabel:'삭제',onConfirm(){}}))},
 {id:'live',label:'live · 실패 후 재시도',el:h(AlertDialog,{trigger:h(Button,{variant:'danger'},'기사 삭제'),danger:true,title:'기사를 삭제할까요?',description:'삭제한 기사는 복구할 수 없습니다.',confirmLabel:'삭제',onConfirm:()=>new Promise((_,rej)=>setTimeout(()=>rej(new Error('x')),900))})}]}]};
window.DEW_SPECS=S;
})();
