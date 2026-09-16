'use client';
import * as React from 'react';
export interface PaginationProps {page:number;pageCount:number;onPageChange:(page:number)=>void;disabled?:boolean;label?:string}
const integer=(value:number,fallback:number,min=1)=>Number.isFinite(value)?Math.max(min,Math.floor(value)):fallback;
export function Pagination({page,pageCount,onPageChange,disabled=false,label='페이지 탐색'}:PaginationProps){
 const count=integer(pageCount,1),current=Math.min(integer(page,1),count);
 return <nav className="iak-pagination" aria-label={label}>
  <button type="button" disabled={disabled||current===1} onClick={()=>onPageChange(1)} aria-label="첫 페이지">«</button>
  <button type="button" disabled={disabled||current===1} onClick={()=>onPageChange(current-1)}>이전</button>
  <span aria-current="page">{current} / {count} 페이지</span>
  <button type="button" disabled={disabled||current===count} onClick={()=>onPageChange(current+1)}>다음</button>
  <button type="button" disabled={disabled||current===count} onClick={()=>onPageChange(count)} aria-label="마지막 페이지">»</button>
 </nav>;
}
export interface TableColumn<T>{id:string;header:string;cell:(row:T)=>React.ReactNode;sortValue?:(row:T)=>string|number|null|undefined;align?:'left'|'right'}
export interface TableSort {columnId:string;direction:'ascending'|'descending'}
export interface TablePagination {pageSize:number;page?:number;onPageChange?:(page:number)=>void}
export interface TableVirtualization {height?:number;rowHeight?:number;overscan?:number}
export interface TableProps<T>{caption:string;columns:TableColumn<T>[];rows:T[];rowKey:(row:T)=>string;sort?:TableSort|null;defaultSort?:TableSort;onSortChange?:(sort:TableSort)=>void;loading?:boolean;error?:string;emptyMessage?:string;loadingMessage?:string;minWidth?:number;pagination?:TablePagination;virtualization?:TableVirtualization}
const collator=new Intl.Collator('ko',{numeric:true,sensitivity:'base'});
export function Table<T>({caption,columns,rows,rowKey,sort,defaultSort,onSortChange,loading=false,error,emptyMessage='표시할 항목이 없습니다.',loadingMessage='데이터를 불러오는 중입니다.',minWidth=560,pagination,virtualization}:TableProps<T>){
 const [internalSort,setInternalSort]=React.useState<TableSort|undefined>(defaultSort),[internalPage,setInternalPage]=React.useState(1),[scrollTop,setScrollTop]=React.useState(0),[bodyOffset,setBodyOffset]=React.useState(96),[focusedKey,setFocusedKey]=React.useState<string|null>(null);
 const viewport=React.useRef<HTMLDivElement>(null),body=React.useRef<HTMLTableSectionElement>(null);
 const activeSort=sort===undefined?internalSort:sort;
 const sorted=React.useMemo(()=>{const column=columns.find(c=>c.id===activeSort?.columnId);if(!column?.sortValue||!activeSort)return rows;const value=column.sortValue;return [...rows].sort((a,b)=>{const x=value(a),y=value(b);if(x==null)return y==null?0:1;if(y==null)return -1;const n=typeof x==='number'&&typeof y==='number'?x-y:collator.compare(String(x),String(y));return (activeSort.direction==='ascending'?1:-1)*(Number.isNaN(n)?0:n);});},[columns,rows,activeSort]);
 const size=integer(pagination?.pageSize??rows.length,10),pageCount=Math.max(1,Math.ceil(rows.length/size));
 const requestedPage=integer(pagination?.page??internalPage,1),page=pagination?Math.min(requestedPage,pageCount):1;
 const startIndex=pagination?(page-1)*size:0;
 const visibleRows=pagination?sorted.slice(startIndex,startIndex+size):sorted;
 // Pagination takes precedence: consumers can provide a non-virtual alternative without changing columns.
 const virtual=!!virtualization&&!pagination, height=integer(virtualization?.height??400,400,160),rowHeight=integer(virtualization?.rowHeight??56,56,40),overscan=Math.min(50,integer(virtualization?.overscan??4,4,0));
 const resetScroll=()=>{if(viewport.current)viewport.current.scrollTop=0;setScrollTop(0)};
 const changePage=(next:number)=>{if(pagination?.page===undefined)setInternalPage(next);pagination?.onPageChange?.(next);resetScroll()};
 const sortKey=`${activeSort?.columnId??''}:${activeSort?.direction??''}`,previous=React.useRef({sortKey,size});
 React.useEffect(()=>{if(previous.current.sortKey!==sortKey||previous.current.size!==size){previous.current={sortKey,size};if(pagination)changePage(1);else resetScroll();}},[sortKey,size]);
 React.useEffect(()=>{if(pagination&&requestedPage!==page){if(pagination.page===undefined)setInternalPage(page);else pagination.onPageChange?.(page);}},[page,requestedPage,pagination?.page]);
 React.useEffect(()=>{resetScroll();setFocusedKey(null)},[virtual]);
 React.useEffect(()=>{if(!virtual||!viewport.current||!body.current)return;const measure=()=>{const v=viewport.current,b=body.current;if(v&&b)setBodyOffset(b.getBoundingClientRect().top-v.getBoundingClientRect().top+v.scrollTop)};measure();if(typeof ResizeObserver==='undefined')return;const observer=new ResizeObserver(measure);observer.observe(viewport.current);return()=>observer.disconnect()},[virtual,columns.length,caption]);
 const first=virtual?Math.max(0,Math.min(Math.max(0,visibleRows.length-1),Math.floor(Math.max(0,scrollTop-bodyOffset)/rowHeight)-overscan)):0;
 const end=virtual?Math.min(visibleRows.length,first+Math.ceil(height/rowHeight)+2*overscan+1):visibleRows.length;
 const indexes=Array.from({length:Math.max(0,end-first)},(_,i)=>first+i);
 if(virtual&&focusedKey){const focused=visibleRows.findIndex(row=>rowKey(row)===focusedKey);if(focused>=0&&!indexes.includes(focused))indexes.push(focused);indexes.sort((a,b)=>a-b)}
 const state=loading?loadingMessage:error||(!rows.length?emptyMessage:undefined);
 const cells:React.ReactNode[]=[];let cursor=0;
 const spacer=(from:number,to:number)=>{if(to>from)cells.push(<tr key={`spacer-${from}`} aria-hidden="true" className="iak-table-spacer"><td colSpan={Math.max(1,columns.length)} style={{height:(to-from)*rowHeight}}/></tr>)};
 for(const index of indexes){const row=visibleRows[index],key=rowKey(row);if(virtual)spacer(cursor,index);cells.push(<tr key={`row-${key}`} aria-rowindex={virtual||pagination?startIndex+index+2:undefined} onFocusCapture={()=>setFocusedKey(key)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setFocusedKey(null)}}>{columns.map(column=><td key={column.id} style={{textAlign:column.align||'left'}}>{virtual?<div className="iak-table-virtual-cell" style={{height:rowHeight}}>{column.cell(row)}</div>:column.cell(row)}</td>)}</tr>);cursor=index+1;}
 if(virtual)spacer(cursor,visibleRows.length);
 function toggle(columnId:string){const next:TableSort={columnId,direction:activeSort?.columnId===columnId&&activeSort.direction==='ascending'?'descending':'ascending'};if(sort===undefined)setInternalSort(next);onSortChange?.(next);}
 const range=rows.length?`${startIndex+1}–${startIndex+visibleRows.length} / ${rows.length}개`:'0개';
 return <div className="iak-table-root"><div ref={viewport} className={`iak-table-scroll${virtual?' iak-table-virtual':''}`} style={virtual?{maxHeight:height}:undefined} role="region" aria-label={`${caption} · 스크롤`} tabIndex={0} onKeyDown={virtual?event=>{if(event.target===event.currentTarget&&(event.key==='Home'||event.key==='End')){event.preventDefault();event.currentTarget.scrollTop=event.key==='Home'?0:event.currentTarget.scrollHeight;setScrollTop(event.currentTarget.scrollTop)}}:undefined} onScroll={virtual?event=>setScrollTop(event.currentTarget.scrollTop):undefined}>
  <table className="iak-table" style={{minWidth}} aria-busy={loading||undefined} aria-rowcount={!state&&(virtual||pagination)?rows.length+1:undefined}>
   <caption>{caption}</caption><thead><tr aria-rowindex={!state&&(virtual||pagination)?1:undefined}>{columns.map(column=><th key={column.id} scope="col" style={{textAlign:column.align||'left'}} aria-sort={column.sortValue&&activeSort?.columnId===column.id?activeSort.direction:undefined}>{column.sortValue?<button type="button" disabled={loading||!!error} className="iak-table-sort" onClick={()=>toggle(column.id)}>{column.header}<span aria-hidden="true">{activeSort?.columnId===column.id?(activeSort.direction==='ascending'?'↑':'↓'):'↕'}</span><span className="iak-sr-only"> 정렬</span></button>:column.header}</th>)}</tr></thead>
   <tbody ref={body}>{state?<tr><td className="iak-table-state" colSpan={Math.max(columns.length,1)}>{state}</td></tr>:cells}</tbody>
  </table>
 </div>{pagination&&<div className="iak-table-paging"><span>{range}</span><Pagination page={page} pageCount={pageCount} onPageChange={changePage} disabled={loading||!!error} label={`${caption} 페이지 탐색`}/></div>}
 <p className="iak-sr-only" role="status">{state||[activeSort?`${columns.find(c=>c.id===activeSort.columnId)?.header||''} ${activeSort.direction==='ascending'?'오름차순':'내림차순'} 정렬`: '',pagination?`${page} / ${pageCount} 페이지, ${range}`:`${rows.length}개 항목`].filter(Boolean).join(', ')}</p></div>;
}
