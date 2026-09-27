import * as React from 'react';
export type FocusPhase='idle'|'running'|'paused'|'timeup'|'done';
/** v2.3 pattern. mm:ss number + progress bar. Buttons per phase: idle[시작] · running[일시정지, 완료, 초기화] · paused[재개, 완료, 초기화] · timeup[완료, 초기화] · done[다시 하기].
 * No per-second live announcements: role=timer aria-live=off; polite status on phase change + once at 1 min left. Change resetKey to load a new task. */
export interface FocusSessionProps{title:string;durationSec?:number;steps?:{title:string;done?:boolean}[];resetKey?:string|number;initialPhase?:FocusPhase;initialElapsedSec?:number;label?:string;onStart?:()=>void;onPause?:()=>void;onResume?:()=>void;onComplete?:(r:{elapsedSec:number})=>void;onReset?:()=>void;className?:string}
export declare function FocusSession(props:FocusSessionProps):React.ReactElement|null;
