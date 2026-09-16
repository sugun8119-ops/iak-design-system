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
  initialFocusRef?: React.RefObject<HTMLElement>;
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

export interface TableColumn<T>{id:string;header:string;cell:(row:T)=>React.ReactNode;sortValue?:(row:T)=>string|number|null|undefined;align?:'left'|'right'}
export interface TableSort {columnId:string;direction:'ascending'|'descending'}
export interface TableProps<T>{caption:string;columns:TableColumn<T>[];rows:T[];rowKey:(row:T)=>string;sort?:TableSort|null;defaultSort?:TableSort;onSortChange?:(sort:TableSort)=>void;loading?:boolean;error?:string;emptyMessage?:string;loadingMessage?:string;minWidth?:number}
const collator=new Intl.Collator('ko',{numeric:true,sensitivity:'base'});
export function Table<T>({caption,columns,rows,rowKey,sort,defaultSort,onSortChange,loading=false,error,emptyMessage='표시할 항목이 없습니다.',loadingMessage='데이터를 불러오는 중입니다.',minWidth=560}:TableProps<T>){
  const [internalSort,setInternalSort]=React.useState<TableSort|undefined>(defaultSort);
  const activeSort=sort===undefined?internalSort:sort;
  const sorted=React.useMemo(()=>{
    const column=columns.find(c=>c.id===activeSort?.columnId);
    if(!column?.sortValue||!activeSort)return rows;
    const value=column.sortValue;const direction=activeSort.direction==='ascending'?1:-1;
    return [...rows].sort((a,b)=>{const x=value(a),y=value(b);if(x==null)return y==null?0:1;if(y==null)return -1;return direction*(typeof x==='number'&&typeof y==='number'?x-y:collator.compare(String(x),String(y)));});
  },[columns,rows,activeSort]);
  function toggle(columnId:string){const next:TableSort={columnId,direction:activeSort?.columnId===columnId&&activeSort.direction==='ascending'?'descending':'ascending'};if(sort===undefined)setInternalSort(next);onSortChange?.(next);}
  const state=loading?loadingMessage:error||(!rows.length?emptyMessage:undefined);
  return <div className="iak-table-root"><div className="iak-table-scroll" role="region" aria-label={`${caption} · 가로 스크롤`} tabIndex={0}>
    <table className="iak-table" style={{minWidth}} aria-busy={loading||undefined}>
      <caption>{caption}</caption><thead><tr>{columns.map(column=><th key={column.id} scope="col" style={{textAlign:column.align||'left'}} aria-sort={column.sortValue&&activeSort?.columnId===column.id?activeSort.direction:undefined}>{column.sortValue?<button type="button" disabled={loading||!!error} className="iak-table-sort" onClick={()=>toggle(column.id)}>{column.header}<span aria-hidden="true">{activeSort?.columnId===column.id?(activeSort.direction==='ascending'?'↑':'↓'):'↕'}</span><span className="iak-sr-only"> 정렬</span></button>:column.header}</th>)}</tr></thead>
      <tbody>{state?<tr><td className="iak-table-state" colSpan={Math.max(columns.length,1)}>{state}</td></tr>:sorted.map(row=><tr key={rowKey(row)}>{columns.map(column=><td key={column.id} style={{textAlign:column.align||'left'}}>{column.cell(row)}</td>)}</tr>)}</tbody>
    </table>
  </div><p className="iak-sr-only" role="status">{state|| (activeSort?`${columns.find(c=>c.id===activeSort.columnId)?.header||''} ${activeSort.direction==='ascending'?'오름차순':'내림차순'} 정렬`: `${rows.length}개 항목`)}</p></div>;
}
