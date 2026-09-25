import * as React from 'react';

/**
 * SegmentedControl — KOSAF extension, Common_진행중 Toggle sample. Period / view toggle (기간 선택). Source sample exists but geometry was not exported → styling is a KOSAF extension.
 * States: Default · Selected (fill + Bold) · Focus.
 */
export interface SegmentedControlProps {
  options?: (string | { value: string; label: string })[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Default 42. */
  height?: number;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element | null;
