import * as React from 'react';

/**
 * OrderSummary — Source-derived (1:85779), 1:104139 · 1:103657. 총 결제 예정금액. Vertical box (mobile) or horizontal A + B + C = total bar (PC).
 * States: vertical · horizontal.
 */
export interface OrderSummaryProps {
  title?: string;
  total?: string;
  rows?: [string, string][];
  layout?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
}
export declare function OrderSummary(props: OrderSummaryProps): JSX.Element | null;
