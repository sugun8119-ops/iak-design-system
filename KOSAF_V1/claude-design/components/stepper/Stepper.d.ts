import * as React from 'react';

/** KOSAF/Stepper (Figma 218:642). "01 장바구니 / 02 주문/결제 / 03 주문완료"; three 205×50 blocks, 15px gap. */
export interface StepperProps {
  /** Step labels (numbers are prefixed automatically). Default ['장바구니','주문/결제','주문완료']. */
  steps?: string[];
  /** 0-based index of the current step. */
  current?: number;
  /** Width of each step block. Default 205 (Figma master). */
  itemWidth?: number | string;
  style?: React.CSSProperties;
}
export declare function Stepper(props: StepperProps): JSX.Element;
