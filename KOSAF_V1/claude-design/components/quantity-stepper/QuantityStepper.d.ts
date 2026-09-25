import * as React from 'react';

/**
 * QuantityStepper — Source-derived (1:85779), Spinner sample / 1:87593. − value + quantity control; ↑/↓ keys; clamps to min/max; typed numbers.
 * States: Default · At min/max (button disabled) · Disabled.
 */
export interface QuantityStepperProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** Default 1. */
  min?: number;
  max?: number;
  step?: number;
  /** sm 30px (source spinner), lg 45px (extension). */
  size?: 'sm' | 'lg';
  disabled?: boolean;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function QuantityStepper(props: QuantityStepperProps): JSX.Element | null;
