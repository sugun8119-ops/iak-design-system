import * as React from 'react';

/**
 * DateRange — Source-derived (1:85779), 1:85780 ("~"). Start ~ end dates; end is constrained by start (native min/max).
 * States: Default · Disabled.
 */
export interface DateRangeProps {
  start?: string;
  end?: string;
  defaultStart?: string;
  defaultEnd?: string;
  onChange?: (start: string, end: string) => void;
  width?: number | string;
  size?: 'lg' | 'sm';
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function DateRange(props: DateRangeProps): JSX.Element | null;
