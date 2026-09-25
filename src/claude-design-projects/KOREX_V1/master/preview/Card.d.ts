import * as React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLElement>{title?:React.ReactNode;footer?:React.ReactNode;tone?:'default'|'brand'|'mint';children?:React.ReactNode};
export declare function Card(props:CardProps):React.ReactElement|null;
