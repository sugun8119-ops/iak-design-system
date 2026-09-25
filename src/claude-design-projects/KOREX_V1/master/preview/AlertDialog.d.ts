import * as React from 'react';
export interface AlertDialogProps{trigger?:React.ReactElement;title:string;description:string;confirmLabel?:string;cancelLabel?:string;danger?:boolean;onConfirm:()=>void|Promise<void>;errorMessage?:string;/** preview-only */inline?:boolean;/** preview-only */previewState?:'pending'|'error'};
export declare function AlertDialog(props:AlertDialogProps):React.ReactElement|null;
