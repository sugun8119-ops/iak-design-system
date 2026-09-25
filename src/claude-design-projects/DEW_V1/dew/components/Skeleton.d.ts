import * as React from 'react';
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement>{width?:string|number;height?:string|number;circle?:boolean};
export declare function Skeleton(props:SkeletonProps):React.ReactElement|null;
