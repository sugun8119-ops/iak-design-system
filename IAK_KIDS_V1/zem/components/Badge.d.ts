import * as React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>{tone?:'info'|'success'|'warning'|'error'|'accent'|'neutral'};
export declare function Badge(props:BadgeProps):React.ReactElement|null;
