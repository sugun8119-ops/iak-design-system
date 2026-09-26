import * as React from 'react';
export interface GoalDraft{title:string;repeat:''|'daily'|'weekdays'|'weekend'|'weekly';kid:string;time:'any'|'morning'|'afternoon'|'evening';points:number|null;reminder:boolean;memo:string}
/** v2.3 pattern. Required: title (≤maxTitle), repeat, kid (only when kids.length>1). Details (time/points/reminder/memo) behind a disclosure (aria-expanded).
 * Submit (button or Enter) validates: values kept, error text under field, focus moves to the first invalid field (details auto-expand if needed). No network: onSubmit is synchronous. */
export interface GoalComposerProps{kids?:{id:string|number;name:string}[];defaultValue?:Partial<Omit<GoalDraft,'points'>&{points:string}>;defaultExpanded?:boolean;showErrors?:boolean;maxTitle?:number;submitLabel?:string;cancelLabel?:string;onSubmit?:(goal:GoalDraft)=>void;onCancel?:()=>void;demoNote?:string|null;className?:string}
export declare function GoalComposer(props:GoalComposerProps):React.ReactElement|null;
