import * as React from 'react';
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{label:string;description?:string;error?:string};
export declare function Select(props:SelectProps):React.ReactElement|null;
