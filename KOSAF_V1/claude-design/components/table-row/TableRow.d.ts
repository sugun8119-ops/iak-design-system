import * as React from 'react';

/**
 * KOSAF/TableRow (Figma 218:637). Desktop 70px grid row; Mobile 50px stacked row ("상품명 · 상태").
 */
export interface TableRowProps {
  device?: 'desktop' | 'mobile';
  /** Cell contents in order. Mobile joins them with " · ". */
  cells?: React.ReactNode[];
  /** Desktop only: CSS grid-template-columns, e.g. "2fr 1fr 1fr 80px 100px". Default max-content columns. */
  columns?: string;
  /** Render as header row (#F7F7F7 fill, Bold). */
  header?: boolean;
  /** Brand-soft #EBFFE9 fill. */
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function TableRow(props: TableRowProps): JSX.Element;
