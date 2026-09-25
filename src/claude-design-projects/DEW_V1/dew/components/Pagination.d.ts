import * as React from 'react';
export interface PaginationProps{page:number;pageCount:number;onPageChange:(page:number)=>void;disabled?:boolean;label?:string;/** preview-only */previewState?:'hover'|'focus'};
export declare function Pagination(props:PaginationProps):React.ReactElement|null;
