import * as React from 'react';

/**
 * EmptyState — Source-derived (1:85779), 1:104584 · 1:91890. No-data block with optional action. Copy is from source; spacing is a KOSAF extension.
 * States: With action · Without.
 */
export interface EmptyStateProps {
  message?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element | null;
