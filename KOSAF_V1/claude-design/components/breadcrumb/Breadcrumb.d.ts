import * as React from 'react';

/**
 * Breadcrumb — KOSAF extension, text "A > B". Location path. Built from the "과실류 > 사과" / "마이페이지 > 주문/배송내역" text pattern; no Figma component.
 * States: link · current.
 */
export interface BreadcrumbProps {
  items?: string[];
  onNavigate?: (label: string, index: number) => void;
  /** Font size, default 14. */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element | null;
