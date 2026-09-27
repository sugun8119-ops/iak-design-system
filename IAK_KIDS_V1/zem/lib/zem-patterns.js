/* IAK KIDS_V1 · Little Everyday v2.3 — composition patterns. Compose window.ZEM base components (Button/Badge/Select/TextField/Textarea/Switch/Skeleton/Icon) — no new primitives, no new colours.
   Exposed as window.ZEM_PATTERNS; the bundle's .jsx files are thin wrappers. Load AFTER zem-ui.js. If the DS bundle namespace predates v2.3, missing pattern names are filled in (compat). */
(function(){
// ChildSwitcher — v2.3 composition pattern. Composes ZEM Button/Icon/Skeleton (window.ZEM). Radiogroup with roving tabindex.
function ChildSwitcher({kids=[],value,defaultValue,onChange,label='자녀 선택',state='ready',onRetry,onAdd,addLabel='자녀 추가',emptyTitle='연결된 자녀가 없어요',emptyText='자녀 기기를 연결하면 사용 시간과 요청을 여기서 볼 수 있어요.',className}){
 const h=React.createElement,Z=window.ZEM||{};
 const [inner,setInner]=React.useState(defaultValue!==undefined?defaultValue:(kids[0]&&kids[0].id));
 const refs=React.useRef([]);
 const cur=value!==undefined?value:inner;
 const pick=id=>{if(value===undefined)setInner(id);onChange&&onChange(id)};
 const cls='zp-kids'+(className?' '+className:'');
 if(state==='loading')return h('div',{className:cls,'aria-busy':'true','aria-label':label+' 불러오는 중'},[0,1].map(i=>h(Z.Skeleton,{key:i,width:168,height:56,style:{borderRadius:16,flex:'none'}})));
 if(state==='error')return h('div',{className:'zp-alert',role:'alert'},h(Z.Icon,{name:'eva:alert-circle-outline',size:20}),h('div',{className:'zp-stack',style:{gap:6,flex:1}},h('b',null,'자녀 목록을 불러오지 못했어요'),h('span',{className:'zp-cap'},'연결 상태를 확인한 뒤 다시 시도해 주세요. 입력한 내용은 그대로 있어요.'),onRetry&&h('div',null,h(Z.Button,{size:'sm',variant:'secondary',onClick:onRetry},'다시 시도'))));
 if(!kids.length)return h('div',{className:'zp-empty'},h('b',null,emptyTitle),h('span',{className:'zp-cap'},emptyText),onAdd&&h(Z.Button,{size:'sm',onClick:onAdd},h(Z.Icon,{name:'eva:plus-fill',size:18}),addLabel));
 const idx=Math.max(0,kids.findIndex(k=>k.id===cur));
 const onKey=(e,i)=>{const n=kids.length;let t=null;if(e.key==='ArrowRight'||e.key==='ArrowDown')t=(i+1)%n;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')t=(i-1+n)%n;else if(e.key==='Home')t=0;else if(e.key==='End')t=n-1;if(t===null)return;e.preventDefault();pick(kids[t].id);const el=refs.current[t];el&&el.focus()};
 return h('div',{role:'radiogroup','aria-label':label,className:cls},kids.map((k,i)=>{const sel=i===idx;return h('button',{key:k.id,ref:el=>{refs.current[i]=el},type:'button',role:'radio','aria-checked':sel,tabIndex:sel?0:-1,className:'zp-kid',title:k.name+(k.meta?' · '+k.meta:''),onClick:()=>pick(k.id),onKeyDown:e=>onKey(e,i)},
  h('span',{className:'ava','aria-hidden':'true'},k.initial||String(k.name||'?').slice(0,1)),
  h('span',{className:'zp-kid-t'},h('b',null,k.name),sel?h('span',{className:'zp-kid-sel'},'보는 중'+(k.meta?' · '+k.meta:'')):h('span',null,k.meta||'')))}));
}

// DailyTimeline — v2.3 composition pattern. time · title · duration · status text (완료/지금/예정) + optional sub-steps. Composes ZEM Badge/Icon/Button/Skeleton.
function DailyTimeline({items=[],state='ready',onRetry,onSelect,label='오늘 일정',showSteps='current',emptyTitle='오늘은 일정이 없어요',emptyText='일정을 추가하면 시간 순서대로 보여요.',className}){
 const h=React.createElement,Z=window.ZEM||{};
 const LABEL={done:'완료',current:'지금',upcoming:'예정'},TONE={done:'success',current:'info',upcoming:'neutral'};
 const fmt=m=>{if(m==null||m==='')return null;m=+m;const hh=Math.floor(m/60),mm=m%60;return (hh?hh+'시간':'')+(hh&&mm?' ':'')+(mm?mm+'분':'')||'0분'};
 const cls='zp-tl'+(className?' '+className:'');
 if(state==='loading')return h('div',{className:'zp-stack','aria-busy':'true','aria-label':label+' 불러오는 중'},[0,1,2].map(i=>h('div',{key:i,style:{display:'grid',gridTemplateColumns:'56px minmax(0,1fr)',gap:12}},h(Z.Skeleton,{height:16}),h(Z.Skeleton,{height:48}))));
 if(state==='error')return h('div',{className:'zp-alert',role:'alert'},h(Z.Icon,{name:'eva:alert-circle-outline',size:20}),h('div',{className:'zp-stack',style:{gap:6,flex:1}},h('b',null,label+'을 불러오지 못했어요'),h('span',{className:'zp-cap'},'잠시 후 다시 시도해 주세요.'),onRetry&&h('div',null,h(Z.Button,{size:'sm',variant:'secondary',onClick:onRetry},'다시 시도'))));
 if(!items.length)return h('div',{className:'zp-empty'},h('b',null,emptyTitle),h('span',{className:'zp-cap'},emptyText));
 return h('ol',{className:cls,'aria-label':label},items.map(it=>{
  const st=LABEL[it.status]?it.status:'upcoming';
  const meta=[fmt(it.duration),it.note].filter(Boolean).join(' · ');
  const withSteps=it.steps&&it.steps.length&&(showSteps==='all'||(showSteps==='current'&&st==='current'));
  const card=h('div',{className:'zp-tl-card'},h('div',{className:'zp-tl-row'},h('span',{className:'zp-tl-title'},it.title),h(Z.Badge,{tone:TONE[st]},LABEL[st])),meta&&h('span',{className:'zp-tl-meta'},meta),
   withSteps?h('ol',{className:'zp-steps','aria-label':it.title+' 단계'},it.steps.map((s,j)=>h('li',{key:j,'data-done':!!s.done},h('span',{className:'zp-step-mark','aria-hidden':'true'},s.done?h(Z.Icon,{name:'eva:checkmark-fill',size:14}):null),h('span',null,s.title,h('span',{className:'zp-sr'},s.done?' · 완료':' · 남음'))))):null);
  return h('li',{key:it.id,'data-status':st,'aria-current':st==='current'?'step':undefined},
   h('span',{className:'zp-tl-time'},it.time||''),
   h('span',{className:'zp-tl-rail','aria-hidden':'true'},h('span',{className:'zp-tl-dot'},st==='done'?h(Z.Icon,{name:'eva:checkmark-fill',size:12}):null)),
   h('div',{className:'zp-tl-body'},onSelect&&!withSteps?h('button',{type:'button',className:'zp-tl-btn',onClick:()=>onSelect(it.id)},card):card));
 }));
}

// FocusSession — v2.3 composition pattern. Number (mm:ss) + progress bar. idle → running ⇄ paused → timeup/done; reset anytime.
// Screen readers: role=timer with aria-live off (no per-second announcements). A polite status speaks only on state changes and once at 1 minute left.
function FocusSession({title,durationSec=600,steps,resetKey,initialPhase='idle',initialElapsedSec=0,label='지금 할 일',onStart,onPause,onResume,onComplete,onReset,className}){
 const h=React.createElement,Z=window.ZEM||{};
 const [phase,setPhase]=React.useState(initialPhase);
 const [elapsed,setElapsed]=React.useState(Math.min(initialElapsedSec,durationSec));
 const [msg,setMsg]=React.useState('');
 const firstBtn=React.useRef(null),wantFocus=React.useRef(false),warned=React.useRef(false),mounted=React.useRef(false);
 React.useEffect(()=>{if(!mounted.current){mounted.current=true;return}setPhase(initialPhase);setElapsed(Math.min(initialElapsedSec,durationSec));setMsg('');warned.current=false},[resetKey]);
 React.useEffect(()=>{if(phase!=='running')return;const t0=Date.now(),e0=elapsed;const id=setInterval(()=>{const e=Math.min(durationSec,e0+Math.floor((Date.now()-t0)/1000));setElapsed(e);
   if(!warned.current&&durationSec>90&&durationSec-e<=60&&e<durationSec){warned.current=true;setMsg('1분 남았어요.')}
   if(e>=durationSec){clearInterval(id);setPhase('timeup');setMsg('시간이 다 됐어요. 끝냈으면 완료를 눌러요.')}},250);return ()=>clearInterval(id)},[phase]);
 React.useEffect(()=>{if(wantFocus.current&&firstBtn.current){firstBtn.current.focus();wantFocus.current=false}},[phase]);
 const left=Math.max(0,durationSec-elapsed),mm=String(Math.floor(left/60)).padStart(2,'0'),ss=String(left%60).padStart(2,'0');
 const pct=durationSec?Math.round(elapsed/durationSec*100):0,mins=Math.round(durationSec/60);
 const go=(p,m,cb)=>{wantFocus.current=true;setPhase(p);setMsg(m);cb&&cb()};
 const act={
  start:()=>go('running',(title||'')+' 시작! '+mins+'분 동안 해요.',onStart),
  pause:()=>go('paused','일시정지 · '+Math.ceil(left/60)+'분 남았어요.',onPause),
  resume:()=>go('running','다시 시작했어요.',onResume),
  done:()=>go('done',(title||'')+' 완료!',()=>onComplete&&onComplete({elapsedSec:elapsed})),
  reset:()=>{warned.current=false;setElapsed(0);go('idle','처음으로 되돌렸어요.',onReset)}};
 const B=(k,t,v,first)=>h(Z.Button,{key:k,variant:v,ref:first?firstBtn:undefined,onClick:act[k]},t);
 const btns={idle:[B('start','시작','primary',1)],running:[B('pause','일시정지','secondary',1),B('done','완료','primary'),B('reset','초기화','text')],paused:[B('resume','재개','primary',1),B('done','완료','secondary'),B('reset','초기화','text')],timeup:[B('done','완료','primary',1),B('reset','초기화','text')],done:[B('reset','다시 하기','secondary',1)]}[phase]||[];
 const ST={idle:['neutral','준비'],running:['info','진행 중'],paused:['warning','일시정지'],timeup:['warning','시간 끝'],done:['success','완료']}[phase]||['neutral','준비'];
 return h('section',{className:'zp-focus'+(className?' '+className:''),'data-phase':phase,'aria-label':label+(title?' · '+title:'')},
  h('div',{className:'zp-focus-top'},h('div',{className:'zp-stack',style:{gap:2,flex:'1 1 200px'}},h('span',{className:'zp-cap'},label),h('h3',{className:'zp-h'},title)),h(Z.Badge,{tone:ST[0]},ST[1])),
  h('div',{style:{display:'flex',alignItems:'baseline',gap:10,flexWrap:'wrap'}},h('span',{className:'zp-clock',role:'timer','aria-live':'off','aria-atomic':'true','aria-label':'남은 시간 '+Math.floor(left/60)+'분 '+(left%60)+'초'},mm+':'+ss),h('span',{className:'zp-cap'},'/ '+mins+'분')),
  h('div',{className:'zp-bar',role:'progressbar','aria-label':'집중 진행률','aria-valuemin':0,'aria-valuemax':100,'aria-valuenow':pct,'aria-valuetext':mins+'분 중 '+Math.floor(elapsed/60)+'분 지남'},h('i',{style:{width:pct+'%'}})),
  steps&&steps.length?h('ol',{className:'zp-steps','aria-label':'단계'},steps.map((s,j)=>h('li',{key:j,'data-done':!!s.done},h('span',{className:'zp-step-mark','aria-hidden':'true'},s.done?h(Z.Icon,{name:'eva:checkmark-fill',size:14}):null),h('span',null,s.title,h('span',{className:'zp-sr'},s.done?' · 완료':' · 남음'))))):null,
  h('div',{className:'zp-actions'},btns),
  h('div',{className:'zp-sr',role:'status','aria-live':'polite'},msg));
}

// GoalComposer — v2.3 composition pattern. Title + repeat first; details behind a disclosure. Validation on submit keeps values and focuses the first error.
function GoalComposer({kids,defaultValue,defaultExpanded=false,showErrors=false,maxTitle=30,submitLabel='목표 만들기',cancelLabel='취소',onSubmit,onCancel,demoNote='데모: 저장하면 이 화면의 메모리에만 추가되고 서버로 보내지 않아요.',className}){
 const h=React.createElement,Z=window.ZEM||{};
 const uid=React.useId().replace(/:/g,'');
 const init=()=>({title:'',repeat:'',kid:kids&&kids.length===1?String(kids[0].id):'',time:'any',points:'',reminder:false,memo:'',...(defaultValue||{})});
 const [v,setV]=React.useState(init);
 const [err,setErr]=React.useState({});
 const [open,setOpen]=React.useState(defaultExpanded);
 const [sum,setSum]=React.useState('');
 const refs={title:React.useRef(null),repeat:React.useRef(null),kid:React.useRef(null),points:React.useRef(null)};
 const needKid=kids&&kids.length>1;
 const validate=x=>{const e={},t=x.title.trim();
  if(!t)e.title='목표 이름을 입력해 주세요.';else if(t.length>maxTitle)e.title='목표 이름은 '+maxTitle+'자 이내로 줄여 주세요. (지금 '+t.length+'자)';
  if(!x.repeat)e.repeat='반복 주기를 골라 주세요.';
  if(needKid&&!x.kid)e.kid='누구의 목표인지 골라 주세요.';
  if(x.points!==''&&(!/^\d+$/.test(String(x.points))||+x.points>500))e.points='포인트는 0–500 사이의 숫자로 입력해 주세요.';
  return e};
 React.useEffect(()=>{if(showErrors){const e=validate(v);setErr(e);if(e.points)setOpen(true);const n=Object.keys(e).length;setSum(n?n+'개 항목을 확인해 주세요.':'')}},[showErrors]);
 const set=k=>ev=>{const val=ev.target.type==='checkbox'?ev.target.checked:ev.target.value;setV(s=>({...s,[k]:val}));if(err[k])setErr(s=>{const n={...s};delete n[k];return n})};
 const submit=ev=>{ev.preventDefault();const e=validate(v),keys=['title','repeat','kid','points'].filter(k=>e[k]);setErr(e);
  if(keys.length){setSum(keys.length+'개 항목을 확인해 주세요.');const k=keys[0];if(k==='points'&&!open)setOpen(true);setTimeout(()=>{const el=refs[k].current;el&&el.focus()},0);return}
  setSum('');onSubmit&&onSubmit({...v,title:v.title.trim(),points:v.points===''?null:+v.points});setV(init());setOpen(defaultExpanded)};
 const opt=a=>a.map(([val,l])=>h('option',{key:val,value:val},l));
 const tlen=v.title.trim().length;
 return h('form',{className:'zp-goal'+(className?' '+className:''),noValidate:true,onSubmit:submit},
  sum?h('div',{className:'zp-errsum',role:'status','aria-live':'polite'},sum):null,
  h(Z.TextField,{ref:refs.title,label:'목표 이름',required:true,value:v.title,onChange:set('title'),placeholder:'예: 저녁 먹고 양치하기',error:err.title,description:err.title?undefined:tlen+' / '+maxTitle+'자',autoComplete:'off'}),
  h(Z.Select,{ref:refs.repeat,label:'반복',required:true,value:v.repeat,onChange:set('repeat'),error:err.repeat},opt([['','선택하세요'],['daily','매일'],['weekdays','평일'],['weekend','주말'],['weekly','일주일에 한 번']])),
  needKid?h(Z.Select,{ref:refs.kid,label:'누구의 목표인가요?',required:true,value:v.kid,onChange:set('kid'),error:err.kid},opt([['','선택하세요'],...kids.map(k=>[String(k.id),k.name])])):null,
  h('button',{type:'button',className:'zp-disclose','aria-expanded':open,'aria-controls':uid+'-more',onClick:()=>setOpen(o=>!o)},h('span',{style:{flex:1}},'상세 설정 (선택)'),h(Z.Icon,{name:'eva:arrow-ios-downward-fill',size:20})),
  open?h('div',{id:uid+'-more',className:'zp-details'},
   h('div',{className:'zp-grid2'},h(Z.Select,{label:'시간대',value:v.time,onChange:set('time')},opt([['any','언제든'],['morning','아침'],['afternoon','오후'],['evening','저녁']])),
    h(Z.TextField,{ref:refs.points,label:'완료 포인트',inputMode:'numeric',value:v.points,onChange:set('points'),placeholder:'예: 50',error:err.points,description:err.points?undefined:'비워 두면 포인트 미정'})),
   h(Z.Switch,{label:'시간이 되면 알림 받기',checked:!!v.reminder,onChange:set('reminder')}),
   h(Z.Textarea,{label:'메모',value:v.memo,onChange:set('memo'),rows:3,placeholder:'아이에게 보여줄 한마디'})):null,
  demoNote?h('span',{className:'zp-cap'},demoNote):null,
  h('div',{className:'zp-actions',style:{justifyContent:'flex-end'}},onCancel?h(Z.Button,{variant:'secondary',onClick:onCancel,style:{flex:'0 1 auto'}},cancelLabel):null,h(Z.Button,{type:'submit',style:{flex:'0 1 auto'}},submitLabel)));
}

// MissionFeedback — v2.3 composition pattern. Complete / undo, progress, points. Points are DERIVED from the completed set, so a mission can never be rewarded twice.
function MissionFeedback({missions=[],completedIds,defaultCompletedIds=[],onChange,title='오늘의 미션',pointsLabel='오늘 포인트',state='ready',onRetry,emptyTitle='오늘은 미션이 없어요',emptyText='보호자가 미션을 보내면 이곳에 바로 보여요.',className}){
 const h=React.createElement,Z=window.ZEM||{};
 const [inner,setInner]=React.useState(defaultCompletedIds);
 const ids=completedIds!==undefined?completedIds:inner;
 const done=new Set(ids);
 const ever=React.useRef(null);if(!ever.current)ever.current=new Set(ids);
 const [note,setNote]=React.useState(null);
 const total=set=>missions.reduce((a,m)=>a+(set.has(m.id)&&m.points!=null?m.points:0),0);
 const toggle=m=>{const next=new Set(done),was=next.has(m.id);was?next.delete(m.id):next.add(m.id);
  const kind=was?'undo':ever.current.has(m.id)?'redo':'done';ever.current.add(m.id);const p=total(next),pt=m.points!=null?m.points+'P':'포인트 미정';
  const text=kind==='done'?'‘'+m.title+'’ 완료! +'+pt+' · '+pointsLabel+' '+p+'P':kind==='redo'?'‘'+m.title+'’ 다시 완료 · 포인트는 한 번만 반영돼요 · '+pointsLabel+' '+p+'P':'‘'+m.title+'’ 완료를 취소했어요 · '+pointsLabel+' '+p+'P';
  setNote({id:m.id,kind,text,n:Date.now()});const arr=missions.filter(x=>next.has(x.id)).map(x=>x.id);if(completedIds===undefined)setInner(arr);
  onChange&&onChange({completedIds:arr,points:p,changedId:m.id,action:kind})};
 const cls='zp-mf'+(className?' '+className:'');
 if(state==='loading')return h('div',{className:cls,'aria-busy':'true','aria-label':title+' 불러오는 중'},h(Z.Skeleton,{height:20,width:'50%'}),h(Z.Skeleton,{height:12}),[0,1,2].map(i=>h(Z.Skeleton,{key:i,height:48})));
 if(state==='error')return h('div',{className:'zp-alert',role:'alert'},h(Z.Icon,{name:'eva:alert-circle-outline',size:20}),h('div',{className:'zp-stack',style:{gap:6,flex:1}},h('b',null,'미션을 불러오지 못했어요'),h('span',{className:'zp-cap'},'완료한 기록은 사라지지 않아요. 다시 시도해 주세요.'),onRetry&&h('div',null,h(Z.Button,{size:'sm',variant:'secondary',onClick:onRetry},'다시 시도'))));
 if(!missions.length)return h('div',{className:'zp-empty'},h('b',null,emptyTitle),h('span',{className:'zp-cap'},emptyText));
 const n=missions.filter(m=>done.has(m.id)).length,pct=Math.round(n/missions.length*100),all=n===missions.length,pts=total(done);
 const nm=note&&missions.find(m=>m.id===note.id);
 return h('section',{className:cls,'aria-label':title},
  h('div',{className:'zp-mf-sum'},h('div',{className:'zp-stack',style:{gap:2}},h('b',null,title),h('span',{className:'zp-cap'},all?'모두 끝냈어요! '+missions.length+'개 완료':missions.length+'개 중 '+n+'개 완료')),h('span',{className:'zp-mf-pts'},pointsLabel+' '+pts+'P')),
  h('div',{className:'zp-bar',role:'progressbar','aria-label':'미션 진행률','aria-valuemin':0,'aria-valuemax':100,'aria-valuenow':pct,'aria-valuetext':missions.length+'개 중 '+n+'개 완료'},h('i',{style:{width:pct+'%'}})),
  note&&nm?h('div',{key:note.n,className:'zp-mf-note zp-pop','data-tone':note.kind==='undo'?'info':'success'},h(Z.Icon,{name:note.kind==='undo'?'eva:info-fill':'eva:checkmark-circle-2-fill',size:20}),h('span',null,note.text),note.kind!=='undo'?h(Z.Button,{size:'sm',variant:'secondary',onClick:()=>toggle(nm)},'되돌리기'):null):null,
  h('ul',{className:'zp-mf-list'},missions.map(m=>{const d=done.has(m.id);return h('li',{key:m.id,'data-done':d},
   h('span',{className:'done'+(d?'':' todo'),'aria-hidden':'true'},d?h(Z.Icon,{name:'eva:checkmark-fill',size:16}):null),
   h('div',{className:'zp-mf-t'},h('b',null,m.title),h('span',{className:m.points==null?'miss':undefined},(d?'완료 · ':'')+(m.points!=null?m.points+'P':'포인트 미정'))),
   h(Z.Button,{size:'sm',variant:d?'secondary':'primary','aria-pressed':d,'aria-label':m.title+(d?' 완료 취소':' 완료하기'),onClick:()=>toggle(m)},d?'완료 취소':'완료하기'))})),
  h('div',{className:'zp-sr',role:'status','aria-live':'polite'},note?note.text:''));
}


window.ZEM_PATTERNS={ChildSwitcher,DailyTimeline,FocusSession,GoalComposer,MissionFeedback};
var NS=window.RAISDesignSystem_019e07;if(NS){for(var k in window.ZEM_PATTERNS){if(!NS[k])NS[k]=window.ZEM_PATTERNS[k]}}
})();
