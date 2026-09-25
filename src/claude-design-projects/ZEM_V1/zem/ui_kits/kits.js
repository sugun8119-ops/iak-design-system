/* ZEM_V1 · 3 UI kits (parent / schedule / activity). ZEM-style derived samples, fictional data. Reuses pattern Shell (zem/lib/patterns.js). */
(function(){
const h=React.createElement,F=React.Fragment;
const {Icon,Button,TextField,Select,Checkbox,Switch,Badge,Card,Dialog,Table,ToastProvider,useToast}=ZEM;
const {Shell,Row,Done,Empty,Bars,Legend,miss}=ZEM_SHELL;
const q=new URLSearchParams(location.search);
/* ---------- parent ---------- */
function Parent(){const t=useToast();const p=q.get('p')||'dashboard';
 const [req,setReq]=React.useState([{id:1,kid:'민서',what:'게임 30분 더 하기',why:'숙제 다 했어요'},{id:2,kid:'도윤',what:'영상 앱 사용',why:'학교 과제 영상 보기'},{id:3,kid:'민서',what:'친구 집에서 저녁까지 놀기 — 오후 7시 전에 귀가할게요',why:null}]);
 const act=(r,ok)=>{setReq(req.filter(x=>x.id!==r.id));t.notify({tone:ok?'success':'info',title:ok?`${r.kid}의 요청을 수락했어요`:'요청을 거절했어요',description:r.what})};
 const [sw,setSw]=React.useState({night:true,loc:true,app:false});
 if(p==='settings')return h(Shell,{active:'settings',title:'보호 설정',hero:'아이별 보호 규칙',sub:'민서 · 도윤'},
  h(Card,{title:'사용 규칙'},h('div',{className:'stack g16'},
   h(Switch,{label:'밤 10시 이후 잠금',checked:sw.night,onChange:e=>setSw({...sw,night:e.target.checked})}),
   h(Switch,{label:'등·하교 위치 알림',checked:sw.loc,onChange:e=>setSw({...sw,loc:e.target.checked})}),
   h(Switch,{label:'새 앱 설치 시 보호자 승인 받기',checked:sw.app,onChange:e=>setSw({...sw,app:e.target.checked})}))),
  h(Card,{title:'하루 사용 목표'},h(Select,{label:'민서',defaultValue:'90'},h('option',{value:'60'},'1시간'),h('option',{value:'90'},'1시간 30분'),h('option',{value:'120'},'2시간')),
   h('div',{className:'row',style:{justifyContent:'flex-end'}},h(Button,{onClick:()=>t.notify({tone:'success',title:'설정을 저장했어요'})},'저장'))));
 return h(Shell,{active:'dashboard',title:'부모 홈',hero:req.length?`확인할 요청 ${req.length}개`:'모든 요청을 확인했어요',sub:'오늘 오후 3:12 기준'},
  h('div',{className:'zs-grid'},
   ...[['민서','1시간 28분',62,'success','목표 이내'],['도윤','2시간 10분',100,'warning','목표 초과']].map(([n,u,v,tone,b])=>h('div',{key:n,className:'t4 d6'},h(Card,null,
    h('div',{className:'row between'},h('div',{className:'row'},h('span',{className:'ava'},n[0]),h('b',null,n)),h(Badge,{tone},b)),
    h('div',{className:'kpi'},u),h('div',{className:'prog',role:'progressbar','aria-valuenow':v,'aria-valuemin':0,'aria-valuemax':100,'aria-label':n+' 사용 목표 대비'},h('i',{style:{width:v+'%'}}))))),
   h('div',{className:'t8 d12'},h(Card,{title:'자녀 요청'},req.length?h('ul',{className:'rows'},req.map(r=>Row(r.kid==='민서'?'cyan':'violet','solar:chat-round-line-bold',r.what,r.kid+' · '+(r.why||'사유 없음'),h('div',{className:'row',style:{flexWrap:'nowrap'}},h(Button,{size:'sm',variant:'secondary',onClick:()=>act(r,false)},'거절'),h(Button,{size:'sm',onClick:()=>act(r,true)},'수락'))))):
    Empty('eva:checkmark-circle-2-fill','새 요청이 없어요','아이가 요청을 보내면 이곳에 바로 보여요.')))));}
/* ---------- schedule ---------- */
const DAYS=['월','화','수','목','금'],SLOTS=['1시','3시','5시'];
const TONE={학원:'var(--zem-cyan-100)',숙제:'var(--zem-lime-100)',놀이:'var(--zem-mint-100)',운동:'var(--zem-violet-100)'};
function Schedule(){const t=useToast();
 const [items,setItems]=React.useState([{d:0,s:0,t:'수학 학원',k:'학원'},{d:1,s:1,t:'줄넘기',k:'운동'},{d:2,s:0,t:'영어 학원',k:'학원'},{d:2,s:2,t:'독서 20분',k:'숙제'},{d:3,s:1,t:'놀이터',k:'놀이'},{d:4,s:2,t:'피아노',k:'학원'}]);
 const [open,setOpen]=React.useState(false),[name,setName]=React.useState(''),[err,setErr]=React.useState(''),[form,setForm]=React.useState({d:'0',s:'1',k:'숙제'});
 const save=()=>{if(!name.trim()){setErr('일정 이름을 입력해 주세요.');return}setItems([...items,{d:+form.d,s:+form.s,t:name.trim(),k:form.k}]);setOpen(false);setName('');setErr('');t.notify({tone:'success',title:'일정을 추가했어요',description:name.trim()})};
 const cell=(d,s)=>items.filter(i=>i.d===d&&i.s===s);
 return h(Shell,{active:'builder',title:'일정',hero:'이번 주 시간표',sub:`${items.length}개 일정 · 9월 넷째 주`},
  h(Card,{title:'주간 시간표',footer:Legend(Object.entries(TONE).map(([k,c])=>[c,k]))},
   h('div',{className:'tt',role:'table','aria-label':'주간 시간표'},h('div',{className:'h'}),DAYS.map(d=>h('div',{key:d,className:'h'},d)),
    SLOTS.map((sl,si)=>h(F,{key:sl},h('div',{className:'h',style:{alignSelf:'center'}},sl),DAYS.map((d,di)=>h('div',{key:d,style:{background:cell(di,si).length?TONE[cell(di,si)[0].k]:'var(--zem-periwinkle-50)',fontWeight:700,overflowWrap:'anywhere'}},cell(di,si).map(i=>i.t).join(' · ')))))),
   h('div',{className:'row',style:{justifyContent:'flex-end'}},h(Dialog,{open,onOpenChange:v=>{setOpen(v);if(!v)setErr('')},trigger:h(Button,null,h(Icon,{name:'eva:plus-fill',size:18}),'일정 추가'),title:'일정 추가',description:'요일과 시간을 고르면 시간표에 바로 들어가요.',
    footer:h(F,null,h(Button,{variant:'secondary',onClick:()=>setOpen(false)},'취소'),h(Button,{onClick:save},'추가'))},
    h('div',{className:'stack'},h(TextField,{label:'일정 이름',value:name,onChange:e=>{setName(e.target.value);setErr('')},error:err||undefined,placeholder:'예: 미술 학원'}),
     h('div',{className:'row',style:{flexWrap:'nowrap'}},h(Select,{label:'요일',value:form.d,onChange:e=>setForm({...form,d:e.target.value})},DAYS.map((d,i)=>h('option',{key:d,value:i},d))),h(Select,{label:'시간',value:form.s,onChange:e=>setForm({...form,s:e.target.value})},SLOTS.map((s,i)=>h('option',{key:s,value:i},s)))),
     h(Select,{label:'종류',value:form.k,onChange:e=>setForm({...form,k:e.target.value})},Object.keys(TONE).map(k=>h('option',{key:k},k))))))),
  h(Card,{title:'오늘'},h('ul',{className:'rows'},cell(2,0).concat(cell(2,2)).map((i,n)=>Row(n?'lime':'cyan',n?'solar:book-bold':'eva:calendar-fill',i.t,SLOTS[i.s]+' · '+i.k,Done(n?'todo':'done'))))));}
/* ---------- activity (kid) ---------- */
function Activity(){const t=useToast();const p=q.get('p')||'dashboard';
 const [m,setM]=React.useState([{id:1,n:'줄넘기 100번',pt:50,done:true},{id:2,n:'영어 단어 20개 외우기',pt:100,done:false},{id:3,n:'방 정리하고 사진 보내기',pt:50,done:false},{id:4,n:'가족에게 오늘 있었던 일 이야기하기',pt:null,done:false}]);
 const done=m.filter(x=>x.done).length,pts=m.filter(x=>x.done).reduce((a,x)=>a+(x.pt||0),0);
 const toggle=x=>{setM(m.map(y=>y.id===x.id?{...y,done:!y.done}:y));if(!x.done)t.notify({tone:'success',title:'미션 완료! 보호자 확인을 기다려요',description:x.n})};
 if(p==='analytics')return h(Shell,{active:'analytics',title:'나의 기록',hero:'이번 주 잘하고 있어요',sub:'미션 12개 완료 · 600P'},
  h(Card,{title:'요일별 미션 완료',footer:Legend([['var(--zem-periwinkle-500)','완료 개수']])},h(Bars,{data:[2,1,3,2,1,2,1],labels:['월','화','수','목','금','토','일'],a11y:'요일별 미션 완료 개수, 수요일 3개 최고'})));
 return h(Shell,{active:'dashboard',title:'오늘의 미션',hero:`${m.length}개 중 ${done}개 완료`,sub:`오늘 모은 포인트 ${pts}P`},
  h(Card,null,h('div',{className:'row between'},h('b',{style:{font:'var(--zem-text-title)'}},'진행률'),h('b',{className:'num'},Math.round(done/m.length*100)+'%')),h('div',{className:'prog',role:'progressbar','aria-valuenow':Math.round(done/m.length*100),'aria-valuemin':0,'aria-valuemax':100,'aria-label':'미션 진행률'},h('i',{style:{width:done/m.length*100+'%',transition:'width var(--zem-motion-slow) var(--zem-ease)'}}))),
  h(Card,{title:'미션'},h('ul',{className:'rows'},m.map(x=>h('li',{key:x.id},h('span',{className:'tile '+(x.done?'mint':'lime')},h(Icon,{name:'solar:target-bold',size:20})),h('div',{className:'t'},h('b',null,x.n),h('span',null,x.pt==null?miss(null,'포인트 미정'):x.pt+'P')),
   h(Button,{size:'sm',variant:x.done?'secondary':'primary','aria-pressed':x.done,onClick:()=>toggle(x)},x.done?'완료됨':'완료하기'))))));}
const KITS={parent:Parent,schedule:Schedule,activity:Activity};
window.ZEM_mountKit=function(el,k){ReactDOM.createRoot(el).render(h(ToastProvider,null,h(KITS[k]||Parent)))};
})();
