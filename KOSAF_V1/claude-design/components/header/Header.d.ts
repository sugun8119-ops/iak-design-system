import * as React from 'react';

/**
 * Header — Source-derived (1:85779), 1:86081. PC GNB 1920×203: utility links, logo (1:86099 PNG), 579 search with scope, 품목도매관 pill, cart/bell counts, 4-menu bar + 판매샵.
 * States: Menu default · current (aria-current) · counts.
 */
export interface HeaderProps {
  /** Path to assets/brand/logo-wordmark__1-86099@2x.png (render 292×33). Text fallback if omitted. */
  logoSrc?: string;
  /** Default ['부류별','거래방식별','판매유형별','도매시장별']. */
  menu?: string[];
  topLeft?: string[];
  topRight?: string[];
  /** Current menu (KOSAF extension: green text). */
  activeMenu?: string;
  onMenu?: (label: string) => void;
  onTopLink?: (label: string) => void;
  onSearch?: (q: string) => void;
  searchPlaceholder?: string;
  cartCount?: number;
  /** Default 10 (source). */
  alarmCount?: number;
  onCart?: () => void;
  onAlarm?: () => void;
  /** 품목도매관 pill. */
  onMall?: () => void;
  onShop?: () => void;
  style?: React.CSSProperties;
}
export declare function Header(props: HeaderProps): JSX.Element | null;
