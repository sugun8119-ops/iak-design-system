import * as React from 'react';

/**
 * ProductTable — Source-derived (1:85779), 1:97566. 통합검색 table: grouped 2-level header (상품정보/거래정보), 14 columns, 구매하기 link, heart/cart, sold-out row. Mobile = stacked list.
 * States: Row default · First (bold) · Disabled · Liked.
 */
export interface ProductTableProps {
  /** Keys per column + remain, disabled, liked. */
  rows?: Record<string, any>[];
  /** Default PRODUCT_TABLE_COLUMNS. */
  columns?: { key: string; label: string; group?: string; width: number }[];
  device?: 'desktop' | 'mobile';
  onBuy?: (row: any) => void;
  onLike?: (row: any) => void;
  onCart?: (row: any) => void;
  /** Source shows first row Bold. */
  highlightFirst?: boolean;
  style?: React.CSSProperties;
}
export declare function ProductTable(props: ProductTableProps): JSX.Element | null;
