import * as React from 'react';

/**
 * Pagination — Source-derived (1:85779), 1:97566 / 1:90254. Page navigation with first/prev/next/last; PC uses PaginationItem; mobile compact (5 pages).
 * States: Current · First/last disabled.
 */
export interface PaginationProps {
  page?: number;
  defaultPage?: number;
  total?: number;
  /** Pages per group, default 10. */
  window?: number;
  onChange?: (page: number) => void;
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function Pagination(props: PaginationProps): JSX.Element | null;
