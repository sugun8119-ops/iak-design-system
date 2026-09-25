import * as React from 'react';
export type ToastTone='success'|'warning'|'error'|'info';
export interface ToastOptions{title:string;description?:string;tone?:ToastTone;id?:string;duration?:number;priority?:'polite'|'assertive';action?:{label:string;altText:string;onClick:()=>void}}
export interface ToastProviderProps{children:React.ReactNode;duration?:number;label?:string}
/** Single static toast (preview-only view of one ToastProvider entry). Use ToastProvider + useToast in product code. */
export interface ToastProps extends ToastOptions{onClose?:()=>void};
export declare function Toast(props:ToastProps):React.ReactElement|null;
export declare function ToastProvider(props:ToastProviderProps):React.ReactElement;
export declare function useToast():{notify:(o:ToastOptions)=>string|undefined;dismiss:(id:string)=>void;dismissAll:()=>void};
