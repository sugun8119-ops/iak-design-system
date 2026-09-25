import * as React from 'react';
export interface MenuItem{id:string;label:string;onSelect:()=>void;disabled?:boolean;danger?:boolean;separatorBefore?:boolean}
export interface MenuProps{trigger?:React.ReactElement;label:string;items:MenuItem[];align?:'start'|'center'|'end';open?:boolean;onOpenChange?:(open:boolean)=>void;/** preview-only */inline?:boolean;/** preview-only */highlightedId?:string};
export declare function Menu(props:MenuProps):React.ReactElement|null;
