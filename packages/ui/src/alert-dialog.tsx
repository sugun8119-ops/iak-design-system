'use client';
import * as React from 'react';
import * as Primitive from '@radix-ui/react-alert-dialog';
import {Button} from './index';
export interface AlertDialogProps {
 trigger:React.ReactElement; title:string; description:string;
 confirmLabel?:string; cancelLabel?:string; danger?:boolean;
 onConfirm:()=>void|Promise<void>;
 errorMessage?:string;
}
/** Confirmation owns its lifecycle: await success, retain failures, and focus Cancel on open. */
export function AlertDialog({trigger,title,description,confirmLabel='확인',cancelLabel='취소',danger=false,onConfirm,errorMessage='작업을 완료하지 못했습니다. 다시 시도해 주세요.'}:AlertDialogProps){
 const [open,setOpen]=React.useState(false),[pending,setPending]=React.useState(false),[error,setError]=React.useState(false);
 const busy=React.useRef(false),alive=React.useRef(true),cancel=React.useRef<HTMLButtonElement>(null);
 React.useEffect(()=>{alive.current=true;return()=>{alive.current=false}},[]);
 async function confirm(){
  if(busy.current)return;busy.current=true;setPending(true);setError(false);
  try{await onConfirm();if(alive.current)setOpen(false)}catch{if(alive.current){setError(true);window.requestAnimationFrame(()=>cancel.current?.focus())}}
  finally{busy.current=false;if(alive.current)setPending(false)}
 }
 return <Primitive.Root open={open} onOpenChange={value=>{if(!busy.current){setError(false);setOpen(value)}}}>
  <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>
  <Primitive.Portal><Primitive.Overlay className="iak-dialog-overlay"/><Primitive.Content className="iak-dialog iak-dialog--sm" aria-busy={pending||undefined} onEscapeKeyDown={event=>{if(busy.current)event.preventDefault()}}>
   <Primitive.Title className="iak-dialog-title">{title}</Primitive.Title>
   <Primitive.Description className="iak-dialog-description">{description}</Primitive.Description>
   {error&&<p role="alert" className="iak-error">{errorMessage}</p>}
   {pending&&<p role="status">처리 중입니다.</p>}
   <div className="iak-dialog-footer"><Primitive.Cancel asChild><Button ref={cancel} variant="secondary" disabled={pending}>{cancelLabel}</Button></Primitive.Cancel><Primitive.Action asChild><Button variant={danger?'danger':'primary'} loading={pending} onClick={event=>{event.preventDefault();void confirm()}}>{confirmLabel}</Button></Primitive.Action></div>
  </Primitive.Content></Primitive.Portal>
 </Primitive.Root>;
}
