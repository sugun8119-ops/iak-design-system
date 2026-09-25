import * as React from 'react';

/** KOSAF/Badge (Figma 218:621). Single variant in source: 30px tall, radius 15, #EBFFE9 fill, #059B00 Medium 14 text. */
export interface BadgeProps {
  /** Short status text, e.g. "답변완료". */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
