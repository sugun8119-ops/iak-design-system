import * as React from 'react';

/**
 * ProductListItem — Source-derived (1:85779), 1:87784 · 1:94265. Horizontal product row: thumb, status, date, 2-line title, price, outline 상세보기.
 * States: status default / done.
 */
export interface ProductListItemProps {
  imageSrc?: string;
  /** e.g. 배송준비중 / 배송완료. */
  status?: string;
  statusTone?: 'default' | 'done';
  date?: string;
  title?: string;
  price?: string;
  actionLabel?: string;
  onAction?: () => void;
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function ProductListItem(props: ProductListItemProps): JSX.Element | null;
