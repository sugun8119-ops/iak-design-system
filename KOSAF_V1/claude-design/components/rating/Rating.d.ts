import * as React from 'react';

/**
 * Rating — KOSAF extension, ★ glyph. Star score. Star vectors not exported → ★ text glyph in #FFE326. Display or input (radio group, ←/→).
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
