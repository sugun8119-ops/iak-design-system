import * as React from 'react';
export interface ButtonProps extends React.HTMLAttributes<HTMLElement>{variant?:'primary'|'secondary'|'outline'|'chip'|'danger'|'text';size?:'sm'|'md'|'lg';loading?:boolean;selected?:boolean};
export declare function Button(props:ButtonProps):React.ReactElement|null;
