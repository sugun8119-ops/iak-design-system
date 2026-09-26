import * as React from 'react';
export type TimelineStatus='done'|'current'|'upcoming';
export interface TimelineStep{title:string;done?:boolean}
export interface TimelineItem{id:string|number;time?:string;title:string;/** minutes */duration?:number;status:TimelineStatus;note?:string;steps?:TimelineStep[]}
/** v2.3 pattern. <ol> in time order; current item has aria-current="step". Status is always Badge text + marker, never colour alone. */
export interface DailyTimelineProps{items:TimelineItem[];state?:'ready'|'loading'|'error';onRetry?:()=>void;onSelect?:(id:string|number)=>void;label?:string;showSteps?:'current'|'all'|'none';emptyTitle?:string;emptyText?:string;className?:string}
export declare function DailyTimeline(props:DailyTimelineProps):React.ReactElement|null;
