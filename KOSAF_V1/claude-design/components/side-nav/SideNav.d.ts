import * as React from 'react';

/**
 * SideNav — Source-derived (1:85779), 1:90423. 240px LNB for 마이페이지 / 마이샵 / 고객센터: title 30/400, group 18/500, items 16/400 #707070.
 * States: Item default · current (extension: green).
 */
export interface SideNavProps {
  title?: string;
  /** Default buyer 마이페이지 tree (BUYER_NAV). */
  groups?: { label: string; items: string[] }[];
  active?: string;
  onSelect?: (item: string, group?: string) => void;
  style?: React.CSSProperties;
}
export declare function SideNav(props: SideNavProps): JSX.Element | null;
