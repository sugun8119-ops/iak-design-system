import * as React from 'react';
export interface DialogProps{trigger?:React.ReactElement;title:string;description?:string;children:React.ReactNode;footer?:React.ReactNode;open?:boolean;defaultOpen?:boolean;onOpenChange?:(open:boolean)=>void;initialFocusRef?:React.RefObject<HTMLElement|null>;closeOnOutside?:boolean;closeLabel?:string;size?:'sm'|'md'|'lg';/** preview-only */inline?:boolean};
export declare function Dialog(props:DialogProps):React.ReactElement|null;
