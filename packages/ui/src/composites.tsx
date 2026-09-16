'use client';
import * as React from 'react';
import {iconData} from './icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as MenuPrimitive from '@radix-ui/react-dropdown-menu';

export interface DialogProps {
  trigger: React.ReactElement;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  closeOnOutside?: boolean;
  closeLabel?: string;
  size?: 'sm'|'md'|'lg';
}
/** Modal focus handling is provided by Radix; all visual styles use IAK tokens. */
export function Dialog({trigger,title,description,children,footer,open,defaultOpen,onOpenChange,initialFocusRef,closeOnOutside=false,closeLabel='닫기',size='md'}:DialogProps){
  return <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
    <DialogPrimitive.Portal><DialogPrimitive.Overlay className="iak-dialog-overlay"/>
      <DialogPrimitive.Content className={`iak-dialog iak-dialog--${size}`} {...(!description?{'aria-describedby':undefined}:{})}
        onOpenAutoFocus={event=>{if(initialFocusRef?.current){event.preventDefault();initialFocusRef.current.focus();}}}
        onInteractOutside={event=>{if(!closeOnOutside)event.preventDefault();}}>
        <div className="iak-dialog-heading"><DialogPrimitive.Title className="iak-dialog-title">{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close className="iak-dialog-close" aria-label={closeLabel}><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{__html:iconData['eva:close-fill'].body}}/></DialogPrimitive.Close></div>
        {description&&<DialogPrimitive.Description className="iak-dialog-description">{description}</DialogPrimitive.Description>}
        <div className="iak-dialog-body">{children}</div>
        {footer&&<div className="iak-dialog-footer">{footer}</div>}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}
export interface MenuItem {id:string;label:string;onSelect:()=>void;disabled?:boolean;danger?:boolean;separatorBefore?:boolean}
export interface MenuProps {trigger:React.ReactElement;label:string;items:MenuItem[];align?:'start'|'center'|'end';open?:boolean;onOpenChange?:(open:boolean)=>void}
export function Menu({trigger,label,items,align='end',open,onOpenChange}:MenuProps){return <MenuPrimitive.Root modal={false} open={open} onOpenChange={onOpenChange}>
  <MenuPrimitive.Trigger asChild>{trigger}</MenuPrimitive.Trigger>
  <MenuPrimitive.Portal><MenuPrimitive.Content aria-labelledby={undefined} aria-label={label} className="iak-menu" align={align} sideOffset={6} collisionPadding={16} loop>
    {items.map(item=><React.Fragment key={item.id}>{item.separatorBefore&&<MenuPrimitive.Separator className="iak-menu-separator"/>}<MenuPrimitive.Item className="iak-menu-item" data-danger={item.danger||undefined} disabled={item.disabled} onSelect={()=>item.onSelect()}>{item.label}</MenuPrimitive.Item></React.Fragment>)}
  </MenuPrimitive.Content></MenuPrimitive.Portal>
</MenuPrimitive.Root>}

