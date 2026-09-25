import * as React from 'react';
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>,'title'>{title?:string;footer?:React.ReactNode};
export declare function Card(props:CardProps):React.ReactElement|null;
