import * as React from 'react';
export interface TableColumn<T=any>{id:string;header:string;cell:(row:T)=>React.ReactNode;sortValue?:(row:T)=>string|number|null|undefined;align?:'left'|'right'}
export interface TableSort{columnId:string;direction:'ascending'|'descending'}
export interface TablePagination{pageSize:number;page?:number;onPageChange?:(page:number)=>void}
export interface TableVirtualization{height?:number;rowHeight?:number;overscan?:number}
export interface TableProps<T=any>{caption:string;columns:TableColumn<T>[];rows:T[];rowKey:(row:T)=>string;sort?:TableSort|null;defaultSort?:TableSort;onSortChange?:(sort:TableSort)=>void;loading?:boolean;error?:string;emptyMessage?:string;loadingMessage?:string;minWidth?:number;pagination?:TablePagination;virtualization?:TableVirtualization};
export declare function Table(props:TableProps):React.ReactElement|null;
