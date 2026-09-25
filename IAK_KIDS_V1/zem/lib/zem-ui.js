/* IAK KIDS_V1 · Little Everyday UI — window.ZEM namespace kept for compatibility (same component API as v1). Styling in zem-ui.css (semantic --iak-kids-* roles). Overlay behaviour is a dependency-free approximation for previews. */
(function(){
const h=React.createElement,IC=()=>window.ZEM_ICONS||{};
const cx=(...a)=>a.filter(Boolean).join(' ');
const has=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const FOCUSABLE='button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
function Glyph({name,size=20}){const ic=IC()[name];return ic?h('svg',{width:size,height:size,viewBox:'0 0 24 24','aria-hidden':'true',focusable:'false',dangerouslySetInnerHTML:{__html:ic.body}}):null}

/* index.tsx */
function Icon({name,size=20,label,...p}){const I=IC();const ic=has(I,name)?I[name]:undefined;if(!ic)return null;return h('svg',{...p,width:size,height:size,viewBox:`0 0 ${ic.width} ${ic.height}`,fill:'currentColor',role:label?'img':undefined,'aria-label':label,'aria-hidden':label?undefined:true,focusable:'false',dangerouslySetInnerHTML:{__html:ic.body}})}
const Button=React.forwardRef(function Button({variant='primary',size='md',loading=false,disabled,children,className,type='button',...p},ref){return h('button',{...p,ref,type,disabled:disabled||loading,'aria-busy':loading||undefined,className:cx('zem-button',`zem-button--${variant}`,`zem-button--${size}`,className)},h('span',{style:loading?{opacity:0}:undefined},children),loading&&h('span',{className:'zem-spinner','aria-hidden':'true'}))});
function useField(id,description,error,describedBy){const uid=React.useId();const inputId=id||`zem-${uid}`;return {inputId,helpId:`${inputId}-help`,descriptionId:cx(describedBy,(!!error||!!description)&&`${inputId}-help`)||undefined}}
function FieldShell({label,inputId,helpId,description,error,required,children}){return h('div',{className:'zem-field'},h('label',{htmlFor:inputId},label,required&&h('span',{'aria-hidden':'true'},' *')),children,(error||description)&&h('p',{id:helpId,className:cx('zem-help',!!error&&'zem-error')},error||description))}
function fieldFactory(tag,extra){return React.forwardRef(function Field({label,description,error,id,className,required,'aria-describedby':db,children,...p},ref){const f=useField(id,description,error,db);const props={...p,id:f.inputId,ref,required,'aria-describedby':f.descriptionId,'aria-invalid':error?true:p['aria-invalid'],className:cx('zem-input',extra,className)};if(tag==='textarea')props.rows=p.rows||4;return h(FieldShell,{...f,label,description,error,required},h(tag,props,tag==='select'?children:undefined))})}
const TextField=fieldFactory('input'),Textarea=fieldFactory('textarea','zem-textarea'),Select=fieldFactory('select');
const Checkbox=React.forwardRef(function Checkbox({label,className,...p},ref){return h('label',{className:cx('zem-control',className)},h('input',{...p,type:'checkbox',ref}),h('span',null,label))});
const Switch=React.forwardRef(function Switch({label,className,...p},ref){return h('label',{className:cx('zem-control','zem-switch',className)},h('input',{...p,type:'checkbox',role:'switch',ref}),h('span',{className:'zem-switch-track','aria-hidden':'true'}),h('span',null,label))});
function Badge({tone='neutral',className,children,...p}){return h('span',{...p,className:cx('zem-badge',`zem-badge--${tone}`,className)},children)}
function Card({title,footer,children,className,...p}){const id=React.useId();return h('section',{...p,'aria-labelledby':title?id:p['aria-labelledby'],className:cx('zem-card',className)},title&&h('h2',{id},title),h('div',null,children),footer&&h('footer',null,footer))}
function Skeleton({width='100%',height=20,circle=false,style,className,...p}){return h('span',{...p,'aria-hidden':'true',className:cx('zem-skeleton',className),style:{width,height,borderRadius:circle?'50%':undefined,...style}})}

/* focus helpers for overlay approximations */
function useModalFocus(open,ref,initialFocusRef,onClose,lockEsc){
 React.useEffect(()=>{if(!open)return;const prev=document.activeElement;const node=ref.current;
  const t=setTimeout(()=>{if(initialFocusRef&&initialFocusRef.current)initialFocusRef.current.focus();else{const f=node&&node.querySelector(FOCUSABLE);f&&f.focus()}},0);
  const key=e=>{if(e.key==='Escape'){if(lockEsc&&lockEsc())return;e.preventDefault();onClose()}if(e.key==='Tab'&&node){const els=[...node.querySelectorAll(FOCUSABLE)];if(!els.length)return;const a=els[0],z=els[els.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}};
  document.addEventListener('keydown',key);return()=>{clearTimeout(t);document.removeEventListener('keydown',key);prev&&prev.focus&&prev.focus()}},[open]);
}
function portal(node,inline){return inline?node:ReactDOM.createPortal(node,document.body)}

/* composites.tsx */
function Dialog({trigger,title,description,children,footer,open,defaultOpen,onOpenChange,initialFocusRef,closeOnOutside=false,closeLabel='닫기',size='md',inline=false}){
 const [inner,setInner]=React.useState(!!defaultOpen);const isOpen=inline||(open!==undefined?open:inner);
 const set=v=>{if(open===undefined)setInner(v);onOpenChange&&onOpenChange(v)};
 const ref=React.useRef(null),tid=React.useId();
 useModalFocus(isOpen&&!inline,ref,initialFocusRef,()=>set(false));
 const content=h(React.Fragment,null,h('div',{className:'zem-dialog-overlay',onClick:()=>{if(closeOnOutside)set(false)}}),
  h('div',{ref,role:'dialog','aria-modal':'true','aria-labelledby':tid,className:`zem-dialog zem-dialog--${size}`},
   h('div',{className:'zem-dialog-heading'},h('h2',{id:tid,className:'zem-dialog-title'},title),h('button',{type:'button',className:'zem-dialog-close','aria-label':closeLabel,onClick:()=>set(false)},h(Glyph,{name:'eva:close-fill'}))),
   description&&h('p',{className:'zem-dialog-description'},description),h('div',{className:'zem-dialog-body'},children),footer&&h('div',{className:'zem-dialog-footer'},footer)));
 return h(React.Fragment,null,trigger&&!inline&&React.cloneElement(trigger,{onClick:()=>set(true),'aria-haspopup':'dialog'}),isOpen&&portal(content,inline));
}
function Menu({trigger,label,items,align='end',open,onOpenChange,inline=false,highlightedId}){
 const [inner,setInner]=React.useState(false);const isOpen=inline||(open!==undefined?open:inner);
 const set=v=>{if(open===undefined)setInner(v);onOpenChange&&onOpenChange(v)};
 const [hi,setHi]=React.useState(highlightedId||null);const listRef=React.useRef(null),trig=React.useRef(null),anchor=React.useRef(null);const [pos,setPos]=React.useState(null);
 React.useLayoutEffect(()=>{if(!isOpen||inline||!anchor.current)return;const place=()=>{const r=anchor.current.getBoundingClientRect(),vw=document.documentElement.clientWidth;const st={position:'fixed',top:r.bottom+6};if(align==='start')st.left=Math.max(16,r.left);else if(align==='center'){st.left=r.left+r.width/2;st.transform='translateX(-50%)'}else st.right=Math.max(16,vw-r.right);setPos(st)};place();window.addEventListener('scroll',place,true);window.addEventListener('resize',place);return()=>{window.removeEventListener('scroll',place,true);window.removeEventListener('resize',place)}},[isOpen]);
 const enabled=items.filter(i=>!i.disabled);
 React.useEffect(()=>{if(isOpen&&!inline){setHi(enabled[0]&&enabled[0].id);const out=e=>{if(listRef.current&&!listRef.current.contains(e.target)&&anchor.current&&!anchor.current.contains(e.target))set(false)};document.addEventListener('mousedown',out);return()=>document.removeEventListener('mousedown',out)}},[isOpen]);
 React.useEffect(()=>{if(isOpen&&!inline&&hi&&listRef.current){const el=listRef.current.querySelector(`[data-id="${hi}"]`);el&&el.focus()}},[hi,isOpen]);
 const key=e=>{const idx=enabled.findIndex(i=>i.id===hi);if(e.key==='ArrowDown'){e.preventDefault();setHi(enabled[(idx+1)%enabled.length].id)}else if(e.key==='ArrowUp'){e.preventDefault();setHi(enabled[(idx-1+enabled.length)%enabled.length].id)}else if(e.key==='Home'){e.preventDefault();setHi(enabled[0].id)}else if(e.key==='End'){e.preventDefault();setHi(enabled[enabled.length-1].id)}else if(e.key==='Escape'||e.key==='Tab'){set(false);if(e.key==='Escape'&&trig.current)trig.current.focus()}};
 const list=h('div',{ref:listRef,style:inline?undefined:pos||{position:'fixed',visibility:'hidden'},role:'menu','aria-label':label,className:cx('zem-menu',inline&&'zem-menu--inline'),'data-align':align,onKeyDown:key},items.map(item=>h(React.Fragment,{key:item.id},item.separatorBefore&&h('div',{role:'separator',className:'zem-menu-separator'}),
  h('div',{role:'menuitem',tabIndex:-1,'data-id':item.id,className:'zem-menu-item','data-danger':item.danger||undefined,'data-disabled':item.disabled||undefined,'aria-disabled':item.disabled||undefined,'data-highlighted':hi===item.id&&!item.disabled?'':undefined,onMouseEnter:()=>!item.disabled&&setHi(item.id),onClick:()=>{if(item.disabled)return;item.onSelect&&item.onSelect();set(false)}},item.label))));
 if(inline)return list;
 return h('span',{className:'zem-menu-anchor',ref:anchor},React.cloneElement(trigger,{ref:trig,'aria-haspopup':'menu','aria-expanded':isOpen,onClick:()=>set(!isOpen),onKeyDown:e=>{if(e.key==='ArrowDown'){e.preventDefault();set(true)}}}),isOpen&&ReactDOM.createPortal(list,document.body));
}

/* table.tsx */
const integer=(v,fb,min=1)=>Number.isFinite(v)?Math.max(min,Math.floor(v)):fb;
function Pagination({page,pageCount,onPageChange,disabled=false,label='페이지 탐색',previewState}){
 const count=integer(pageCount,1),current=Math.min(integer(page,1),count);
 return h('nav',{className:'zem-pagination','aria-label':label,'data-preview-state':previewState},
  h('button',{type:'button',disabled:disabled||current===1,onClick:()=>onPageChange(1),'aria-label':'첫 페이지'},'«'),
  h('button',{type:'button',disabled:disabled||current===1,onClick:()=>onPageChange(current-1)},'이전'),
  h('span',{'aria-current':'page'},`${current} / ${count} 페이지`),
  h('button',{type:'button',disabled:disabled||current===count,onClick:()=>onPageChange(current+1)},'다음'),
  h('button',{type:'button',disabled:disabled||current===count,onClick:()=>onPageChange(count),'aria-label':'마지막 페이지'},'»'));
}
const collator=new Intl.Collator('ko',{numeric:true,sensitivity:'base'});
function Table({caption,columns,rows,rowKey,sort,defaultSort,onSortChange,loading=false,error,emptyMessage='표시할 항목이 없습니다.',loadingMessage='데이터를 불러오는 중입니다.',minWidth=560,pagination,virtualization}){
 const [iSort,setISort]=React.useState(defaultSort),[iPage,setIPage]=React.useState(1),[scrollTop,setScrollTop]=React.useState(0);
 const viewport=React.useRef(null);
 const activeSort=sort===undefined?iSort:sort;
 const sorted=React.useMemo(()=>{const c=columns.find(c=>activeSort&&c.id===activeSort.columnId);if(!c||!c.sortValue||!activeSort)return rows;return [...rows].sort((a,b)=>{const x=c.sortValue(a),y=c.sortValue(b);if(x==null)return y==null?0:1;if(y==null)return -1;const n=typeof x==='number'&&typeof y==='number'?x-y:collator.compare(String(x),String(y));return (activeSort.direction==='ascending'?1:-1)*(Number.isNaN(n)?0:n)})},[columns,rows,activeSort]);
 const size=integer(pagination&&pagination.pageSize!=null?pagination.pageSize:rows.length,10),pageCount=Math.max(1,Math.ceil(rows.length/size));
 const page=pagination?Math.min(integer(pagination.page!=null?pagination.page:iPage,1),pageCount):1,startIndex=pagination?(page-1)*size:0;
 const visibleRows=pagination?sorted.slice(startIndex,startIndex+size):sorted;
 const virtual=!!virtualization&&!pagination,height=integer(virtualization&&virtualization.height||400,400,160),rowHeight=integer(virtualization&&virtualization.rowHeight||56,56,40),overscan=Math.min(50,integer(virtualization&&virtualization.overscan!=null?virtualization.overscan:4,4,0));
 const changePage=n=>{if(!pagination||pagination.page===undefined)setIPage(n);pagination&&pagination.onPageChange&&pagination.onPageChange(n);if(viewport.current)viewport.current.scrollTop=0};
 const bodyOffset=96;
 const first=virtual?Math.max(0,Math.min(Math.max(0,visibleRows.length-1),Math.floor(Math.max(0,scrollTop-bodyOffset)/rowHeight)-overscan)):0;
 const end=virtual?Math.min(visibleRows.length,first+Math.ceil(height/rowHeight)+2*overscan+1):visibleRows.length;
 const state=loading?loadingMessage:error||(!rows.length?emptyMessage:undefined);
 const cells=[];let cursor=0;const spacer=(a,b)=>{if(b>a)cells.push(h('tr',{key:'sp'+a,'aria-hidden':'true',className:'zem-table-spacer'},h('td',{colSpan:Math.max(1,columns.length),style:{height:(b-a)*rowHeight}})))};
 for(let i=first;i<end;i++){const row=visibleRows[i];if(virtual)spacer(cursor,i);cells.push(h('tr',{key:'r'+rowKey(row),'aria-rowindex':virtual||pagination?startIndex+i+2:undefined},columns.map(c=>h('td',{key:c.id,style:{textAlign:c.align||'left'}},virtual?h('div',{className:'zem-table-virtual-cell',style:{height:rowHeight}},c.cell(row)):c.cell(row)))));cursor=i+1}
 if(virtual)spacer(cursor,visibleRows.length);
 const toggle=id=>{const next={columnId:id,direction:activeSort&&activeSort.columnId===id&&activeSort.direction==='ascending'?'descending':'ascending'};if(sort===undefined)setISort(next);onSortChange&&onSortChange(next);if(pagination)changePage(1)};
 const range=rows.length?`${startIndex+1}–${startIndex+visibleRows.length} / ${rows.length}개`:'0개';
 return h('div',{className:'zem-table-root'},
  h('div',{ref:viewport,className:cx('zem-table-scroll',virtual&&'zem-table-virtual'),style:virtual?{maxHeight:height}:undefined,role:'region','aria-label':`${caption} · 스크롤`,tabIndex:0,onScroll:virtual?e=>setScrollTop(e.currentTarget.scrollTop):undefined},
   h('table',{className:'zem-table',style:{minWidth},'aria-busy':loading||undefined,'aria-rowcount':!state&&(virtual||pagination)?rows.length+1:undefined},
    h('caption',null,caption),
    h('thead',null,h('tr',null,columns.map(c=>h('th',{key:c.id,scope:'col',style:{textAlign:c.align||'left'},'aria-sort':c.sortValue&&activeSort&&activeSort.columnId===c.id?activeSort.direction:undefined},c.sortValue?h('button',{type:'button',disabled:loading||!!error,className:'zem-table-sort',onClick:()=>toggle(c.id)},c.header,h('span',{'aria-hidden':'true'},activeSort&&activeSort.columnId===c.id?(activeSort.direction==='ascending'?'↑':'↓'):'↕'),h('span',{className:'zem-sr-only'},' 정렬')):c.header)))),
    h('tbody',null,state?h('tr',null,h('td',{className:'zem-table-state',colSpan:Math.max(columns.length,1)},state)):cells))),
  pagination&&h('div',{className:'zem-table-paging'},h('span',null,range),h(Pagination,{page,pageCount,onPageChange:changePage,disabled:loading||!!error,label:`${caption} 페이지 탐색`})),
  h('p',{className:'zem-sr-only',role:'status'},state||(pagination?`${page} / ${pageCount} 페이지, ${range}`:`${rows.length}개 항목`)));
}

/* toast.tsx */
const labels={success:'성공',warning:'주의',error:'오류',info:'안내'};
const toneIcons={success:'eva:checkmark-circle-2-fill',warning:'eva:alert-triangle-fill',error:'eva:alert-circle-outline',info:'eva:info-fill'};
const durationValue=n=>n===0?Infinity:Number.isFinite(n)&&n>0?Math.max(1000,n):5000;
function ToastView({title,description,tone='info',action,onClose,previewState}){return h('li',{className:`zem-toast zem-toast--${tone}`,role:'status'},
 h('span',{className:'zem-toast-icon'},h(Glyph,{name:toneIcons[tone]})),
 h('div',{className:'zem-toast-content'},h('div',{className:'zem-toast-title'},h('span',{className:'zem-sr-only'},labels[tone]+': '),title),description&&h('div',{className:'zem-toast-description'},description),action&&h('button',{type:'button',className:'zem-toast-action','aria-label':action.altText,onClick:action.onClick},action.label)),
 h('button',{type:'button','aria-label':`${title} 알림 닫기`,className:'zem-toast-close','data-preview-state':previewState,onClick:onClose},h(Glyph,{name:'eva:close-fill',size:18})))}
const ToastCtx=React.createContext(null);
function ToastProvider({children,duration=5000,label='알림',container}){
 const [entries,setEntries]=React.useState([]);const cur=React.useRef([]),counter=React.useRef(0),timers=React.useRef({});
 const commit=n=>{cur.current=n;setEntries(n)};
 const dismiss=React.useCallback(id=>{clearTimeout(timers.current[id]);delete timers.current[id];commit(cur.current.filter(e=>e.id!==id))},[]);
 const notify=React.useCallback(o=>{if(!o.title||!o.title.trim())return undefined;if(o.id&&cur.current.some(e=>e.id===o.id))return o.id;if(cur.current.length>=50)return undefined;const id=o.id||`toast-${++counter.current}`;commit([...cur.current,{...o,id}]);return id},[]);
 const dismissAll=React.useCallback(()=>{Object.values(timers.current).forEach(clearTimeout);timers.current={};commit([])},[]);
 const visible=entries.slice(0,3);
 React.useEffect(()=>{visible.forEach(e=>{if(timers.current[e.id])return;const d=durationValue(e.duration!=null?e.duration:duration);if(d!==Infinity)timers.current[e.id]=setTimeout(()=>dismiss(e.id),d)})});
 const api=React.useMemo(()=>({notify,dismiss,dismissAll}),[]);
 const vp=h('ol',{className:'zem-toast-viewport','aria-label':`${label} (F8)`,tabIndex:-1},visible.map(e=>h(ToastView,{key:e.id,...e,onClose:()=>dismiss(e.id)})));
 return h(ToastCtx.Provider,{value:api},children,container?vp:ReactDOM.createPortal(vp,document.body));
}
function useToast(){const c=React.useContext(ToastCtx);if(!c)throw new Error('useToast must be used inside ToastProvider');return c}

/* alert-dialog.tsx */
function AlertDialog({trigger,title,description,confirmLabel='확인',cancelLabel='취소',danger=false,onConfirm,errorMessage='작업을 완료하지 못했습니다. 다시 시도해 주세요.',inline=false,previewState}){
 const [open,setOpen]=React.useState(false),[pending,setPending]=React.useState(previewState==='pending'),[error,setError]=React.useState(previewState==='error');
 const busy=React.useRef(false),cancel=React.useRef(null),ref=React.useRef(null),tid=React.useId(),did=React.useId();
 const isOpen=inline||open;
 useModalFocus(isOpen&&!inline,ref,cancel,()=>{setError(false);setOpen(false)},()=>busy.current);
 async function confirm(){if(busy.current||inline)return;busy.current=true;setPending(true);setError(false);try{await onConfirm();setOpen(false)}catch(e){setError(true);requestAnimationFrame(()=>cancel.current&&cancel.current.focus())}finally{busy.current=false;setPending(false)}}
 const content=h(React.Fragment,null,h('div',{className:'zem-dialog-overlay'}),h('div',{ref,role:'alertdialog','aria-modal':'true','aria-labelledby':tid,'aria-describedby':did,'aria-busy':pending||undefined,className:'zem-dialog zem-dialog--sm'},
  h('h2',{id:tid,className:'zem-dialog-title'},title),h('p',{id:did,className:'zem-dialog-description'},description),
  error&&h('p',{role:'alert',className:'zem-error'},errorMessage),pending&&h('p',{role:'status',className:'zem-alert-status'},'처리 중입니다.'),
  h('div',{className:'zem-dialog-footer'},h(Button,{ref:cancel,variant:'secondary',disabled:pending,onClick:()=>{if(!busy.current){setError(false);setOpen(false)}}},cancelLabel),h(Button,{variant:danger?'danger':'primary',loading:pending,onClick:e=>{e.preventDefault();confirm()}},confirmLabel))));
 return h(React.Fragment,null,trigger&&!inline&&React.cloneElement(trigger,{onClick:()=>setOpen(true),'aria-haspopup':'dialog'}),isOpen&&portal(content,inline));
}

window.ZEM={Icon,Button,TextField,Textarea,Select,Checkbox,Switch,Badge,Card,Skeleton,Dialog,Menu,Table,Pagination,ToastProvider,useToast,AlertDialog,preview:{ToastView,Glyph}};
})();
