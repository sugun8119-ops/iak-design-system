import * as React from 'react';

/**
 * CompareTable — Source-derived (1:85779), 1:90204. 상품 비교하기: products as columns, attributes as rows; differing values highlighted.
 * States: Same · Different (green Bold).
 */
export interface CompareTableProps {
  /** name, imageSrc + attribute keys. */
  products?: Record<string, any>[];
  rows?: { key: string; label: string }[];
  highlightDiff?: boolean;
  style?: React.CSSProperties;
}
export declare function CompareTable(props: CompareTableProps): JSX.Element | null;
