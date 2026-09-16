'use client';
import * as React from 'react';
import {createPortal} from 'react-dom';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {iconData} from './icons';
export type ToastTone='success'|'warning'|'error'|'info';
export interface ToastOptions {
 title:string;description?:string;tone?:ToastTone;
 /** The same ID is ignored until the previous notification is dismissed. */
 id?:string;
 /** Milliseconds; zero disables automatic closing. Positive values have a 1s minimum. */
 duration?:number;
 priority?:'polite'|'assertive';
 action?:{label:string;altText:string;onClick:()=>void};
}
export interface ToastApi {notify:(options:ToastOptions)=>string|undefined;dismiss:(id:string)=>void;dismissAll:()=>void}
export interface ToastProviderProps {children:React.ReactNode;duration?:number;label?:string}
type Entry=ToastOptions&{id:string};
const Context=React.createContext<ToastApi|null>(null);
const labels:Record<ToastTone,string>={success:'성공',warning:'주의',error:'오류',info:'안내'};
const icons:Record<ToastTone,keyof typeof iconData>={success:'eva:checkmark-circle-2-fill',warning:'eva:alert-triangle-fill',error:'eva:alert-circle-outline',info:'eva:info-fill'};
const durationValue=(n:number)=>n===0?Infinity:Number.isFinite(n)&&n>0?Math.max(1000,n):5000;
function Glyph({name,size=20}:{name:keyof typeof iconData;size?:number}){return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{__html:iconData[name].body}}/>}
export function ToastProvider({children,duration=5000,label='알림'}:ToastProviderProps){
 const [entries,setEntries]=React.useState<Entry[]>([]),[mounted,setMounted]=React.useState(false);
 const current=React.useRef<Entry[]>([]),counter=React.useRef(0),prefix=React.useId();
 React.useEffect(()=>{setMounted(true);return()=>{current.current=[]}},[]);
 const commit=React.useCallback((next:Entry[])=>{current.current=next;setEntries(next)},[]);
 const notify=React.useCallback((options:ToastOptions)=>{
   if(!options.title.trim())return undefined;
   if(options.id&&current.current.some(item=>item.id===options.id))return options.id;
   // Bound queued work as well as visible notifications. No existing message is evicted.
   if(current.current.length>=50)return undefined;
   const id=options.id||`${prefix}-toast-${++counter.current}`;
   commit([...current.current,{...options,id}]);return id;
 },[commit,prefix]);
 const dismiss=React.useCallback((id:string)=>commit(current.current.filter(item=>item.id!==id)),[commit]);
 const dismissAll=React.useCallback(()=>commit([]),[commit]);
 const api=React.useMemo(()=>({notify,dismiss,dismissAll}),[notify,dismiss,dismissAll]);
 return <Context.Provider value={api}><ToastPrimitive.Provider label={label} duration={durationValue(duration)} swipeDirection="right">
  {children}
  {entries.slice(0,3).map(entry=>{const tone=entry.tone||'info';return <ToastPrimitive.Root key={entry.id} data-toast-id={entry.id} className={`iak-toast iak-toast--${tone}`} open duration={durationValue(entry.duration??duration)} type={entry.priority==='assertive'?'foreground':'background'} onOpenChange={open=>{if(!open)dismiss(entry.id)}}>
   <span className="iak-toast-icon"><Glyph name={icons[tone]}/></span>
   <div className="iak-toast-content"><ToastPrimitive.Title className="iak-toast-title"><span className="iak-sr-only">{labels[tone]}: </span>{entry.title}</ToastPrimitive.Title>{entry.description&&<ToastPrimitive.Description className="iak-toast-description">{entry.description}</ToastPrimitive.Description>}
   {entry.action&&<ToastPrimitive.Action altText={entry.action.altText} className="iak-toast-action" onClick={entry.action.onClick}>{entry.action.label}</ToastPrimitive.Action>}</div>
   <ToastPrimitive.Close aria-label={`${entry.title} 알림 닫기`} className="iak-toast-close"><Glyph name="eva:close-fill" size={18}/></ToastPrimitive.Close>
  </ToastPrimitive.Root>})}
  {mounted&&createPortal(<ToastPrimitive.Viewport className="iak-toast-viewport" hotkey={['F8']} label={`${label} ({hotkey})`}/>,document.body)}
 </ToastPrimitive.Provider></Context.Provider>;
}
export function useToast():ToastApi{const context=React.useContext(Context);if(!context)throw new Error('useToast must be used inside ToastProvider');return context}
