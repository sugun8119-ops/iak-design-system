import * as React from 'react';
/** One of the 97 names in master/lib/icons.js. 9 original names are unresolved and render null. */
export type IconName=string;
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>,'name'>{name:IconName;size?:16|20|24;label?:string};
export declare function Icon(props:IconProps):React.ReactElement|null;
