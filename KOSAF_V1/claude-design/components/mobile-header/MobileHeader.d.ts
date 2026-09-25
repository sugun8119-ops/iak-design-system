import * as React from 'react';

/**
 * MobileHeader — Source-derived (1:85779), 1:87784. 390px top bar: menu (CSS bars) · centred title · search + cart (source icons).
 * States: menu · back.
 */
export interface MobileHeaderProps {
  title?: string;
  /** Optional logo image (scaled to 20px height). */
  logoSrc?: string;
  onMenu?: () => void;
  onSearch?: () => void;
  onCart?: () => void;
  cartCount?: number;
  /** Show back (navigate icon) instead of menu. */
  back?: boolean;
  onBack?: () => void;
  style?: React.CSSProperties;
}
export declare function MobileHeader(props: MobileHeaderProps): JSX.Element | null;
