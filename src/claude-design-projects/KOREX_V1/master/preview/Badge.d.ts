import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLElement>{tone?:'neutral'|'success'|'warning'|'error'|'info'|'brand';children?:React.ReactNode};
export declare function Badge(props:BadgeProps):React.ReactElement|null;
