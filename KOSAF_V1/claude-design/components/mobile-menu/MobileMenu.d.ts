import * as React from 'react';

/**
 * MobileMenu — Source-derived (1:85779), 1:93205. 전체메뉴 drawer: accordion sections (open list on #F7F7F7), 입점 판매샵 목록, 4-col quick menu, bottom links. Esc closes.
 * States: Section open · closed.
 */
export interface MobileMenuProps {
  sections?: { label: string; items: string[] }[];
  /** Only "heart" has a source icon; others render an empty slot. */
  quick?: { label: string; icon?: string }[];
  /** Index open initially (-1 none). Default 1. */
  defaultOpen?: number;
  shopLabel?: string;
  bottomLinks?: string[];
  onClose?: () => void;
  onSelect?: (label: string, item?: string) => void;
  style?: React.CSSProperties;
}
export declare function MobileMenu(props: MobileMenuProps): JSX.Element | null;
