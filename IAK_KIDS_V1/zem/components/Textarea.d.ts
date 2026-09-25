import * as React from 'react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{label:string;description?:string;error?:string};
export declare function Textarea(props:TextareaProps):React.ReactElement|null;
