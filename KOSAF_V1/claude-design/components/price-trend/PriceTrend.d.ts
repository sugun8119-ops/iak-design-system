import * as React from 'react';

/**
 * PriceTrend — Source-derived (1:85779), 1:86445 · 1:86729. 품종 시세동향 popup body: graph/table toggle. Numbers are EXAMPLE DATA (source has no series).
 * States: 그래프 · 테이블.
 */
export interface PriceTrendProps {
  /** Default EXAMPLE_PRICE_SERIES (illustrative). */
  data?: { date: string; price: number }[];
  view?: '그래프' | '테이블';
  defaultView?: '그래프' | '테이블';
  onView?: (v: string) => void;
  unit?: string;
  /** Shows the 예시 데이터 flag. Keep true unless real data. */
  example?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}
export declare function PriceTrend(props: PriceTrendProps): JSX.Element | null;
