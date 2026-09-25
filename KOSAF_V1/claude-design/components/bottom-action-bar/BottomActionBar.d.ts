import * as React from 'react';

/**
 * BottomActionBar — Source-derived (1:85779), 1:87593 · 1:104139. Mobile sticky actions: split (icons + 가격협상 + 구매하기) or full 70px 결제하기.
 * States: Default · Liked · Disabled.
 */
export interface BottomActionBarProps {
  variant?: 'split' | 'full';
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onCart?: () => void;
  onLike?: () => void;
  liked?: boolean;
  showIcons?: boolean;
  /** position: fixed to viewport bottom. */
  fixed?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function BottomActionBar(props: BottomActionBarProps): JSX.Element | null;
