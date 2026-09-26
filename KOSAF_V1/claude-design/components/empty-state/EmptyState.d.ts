import * as React from 'react';

/**
 * EmptyState — Source-derived (1:85779), 1:104584 · 1:91890 · 1:105292. No-data block with optional action.
 * 1.4.0 variants (KOSAF extension, reference: Mobbin empty-state): noResults (필터 초기화), emptyCart (상품검색, source copy), noHistory (guidance, no action).
 * States: With action · Without · per variant.
 */
export interface EmptyStateProps {
  variant?: 'noResults' | 'emptyCart' | 'noHistory';
  message?: string;
  description?: string;
  /** Explicit label; otherwise the variant's label is used when onAction is given. */
  actionLabel?: string;
  onAction?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  icon?: React.ReactNode;
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element | null;
