import * as React from 'react';

/**
 * Icon — Source-derived (1:85779), 11 SVG ids. The 11 SVGs exported verbatim from the final source. Colours are baked in; size scales the longest side.
 * States: Static.
 */
export interface IconProps {
  /** Icon key (see IconRegistry). */
  name?: 'analytics'|'search'|'check'|'shopping-bag'|'heart'|'navigate'|'purchase'|'bell'|'time-history'|'document-edit'|'cart';
  /** Longest side in px. Default = native size. */
  size?: number;
  /** Accessible name; omit for decorative. */
  title?: string;
  /** Degrees. "navigate" points left as exported; use 180 for next, ±90 for chevrons. */
  rotate?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const IconRegistry: { name: string; id: string; source: string; w: number; h: number; svg: string }[];
