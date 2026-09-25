import * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:'primary'|'secondary'|'danger'|'text';size?:'sm'|'md'|'lg';loading?:boolean};
export declare function Button(props:ButtonProps):React.ReactElement|null;
