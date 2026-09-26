import * as React from 'react';
export interface ChildSwitcherKid{id:string|number;name:string;initial?:string;meta?:string}
/** v2.3 pattern. role=radiogroup · ←/→/↑/↓ move+select · Home/End · roving tabindex. Selected = selected bg + primary line + "보는 중" text. */
export interface ChildSwitcherProps{kids:ChildSwitcherKid[];value?:string|number;defaultValue?:string|number;onChange?:(id:string|number)=>void;label?:string;state?:'ready'|'loading'|'error';onRetry?:()=>void;onAdd?:()=>void;addLabel?:string;emptyTitle?:string;emptyText?:string;className?:string}
export declare function ChildSwitcher(props:ChildSwitcherProps):React.ReactElement|null;
