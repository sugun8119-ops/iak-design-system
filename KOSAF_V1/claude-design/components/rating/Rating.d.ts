import * as React from 'react';

/**
 * Rating — KOSAF extension. Star score using the KOSAF extension SVG "star" (24 grid; not extracted from Figma), filled #FFE326, empty #DDDDDD, fractional clip. Display or input (radio group, ←/→).
 * States: Display (fractional) · Input · Hover.
 */
export interface RatingProps {
  value?: number;
  /** Makes it an input. */
  onChange?: (value: number) => void;
  max?: number;
  size?: number;
  showValue?: boolean;
  readOnly?: boolean;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function Rating(props: RatingProps): JSX.Element | null;
