import * as React from 'react';
export interface Mission{id:string|number;title:string;/** null = 포인트 미정 */points:number|null}
export interface MissionChange{completedIds:(string|number)[];points:number;changedId:string|number;action:'done'|'undo'|'redo'}
/** v2.3 pattern. Toggle complete/undo (aria-pressed), progress bar + "N개 중 M개 완료", points = sum of completed (derived → no double reward; redo shows "한 번만 반영").
 * Feedback strip with 되돌리기; polite status speaks the change once. Controlled (completedIds) or uncontrolled (defaultCompletedIds). */
export interface MissionFeedbackProps{missions:Mission[];completedIds?:(string|number)[];defaultCompletedIds?:(string|number)[];onChange?:(c:MissionChange)=>void;title?:string;pointsLabel?:string;state?:'ready'|'loading'|'error';onRetry?:()=>void;emptyTitle?:string;emptyText?:string;className?:string}
export declare function MissionFeedback(props:MissionFeedbackProps):React.ReactElement|null;
