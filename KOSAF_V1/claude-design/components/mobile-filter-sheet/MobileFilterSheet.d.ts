import * as React from 'react';

/**
 * MobileFilterSheet — KOSAF extension (1.4.0). Bottom sheet around the source mobile FilterPanel (1:93119). Not a Figma master.
 * draft ≠ applied: 취소 / Escape / backdrop discard; 초기화 clears draft; 적용 calls onApply(draft). Focus trap/return, scroll lock.
 */
export interface MobileFilterSheetProps {
  open: boolean;
  /** Applied filters; the sheet copies this into its draft each time it opens. */
  value?: Record<string, string[]>;
  groups?: { key: string; label: string; options: string[]; chips?: boolean }[];
  onApply?: (next: Record<string, string[]>) => void;
  /** Cancel / Escape / backdrop / close button. Draft is discarded. */
  onClose?: () => void;
  /** Result count for the apply button; a function receives the draft (live preview). 0 disables apply. */
  count?: number | ((draft: Record<string, string[]>) => number);
  applyLabel?: string;
  title?: string;
  /** Render without overlay/scroll-lock (docs, cards). */
  inline?: boolean;
  maxHeight?: string | number;
  style?: React.CSSProperties;
}
export declare function MobileFilterSheet(props: MobileFilterSheetProps): JSX.Element | null;
