import * as React from 'react';
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{label:string;description?:string;error?:string};
export declare function TextField(props:TextFieldProps):React.ReactElement|null;
