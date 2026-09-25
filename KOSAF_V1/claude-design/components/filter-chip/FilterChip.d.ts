import * as React from 'react';

/**
 * FilterChip — Source-derived (1:85779), 1:97566 (capture). Toggle pill for 판매자 유형/거래방식/도매시장 and removable applied-filter tag ("사과 ×").
 * States: Default · Selected · Disabled · Removable.
 */
export interface FilterChipProps {
  selected?: boolean;
  onToggle?: () => void;
  variant?: 'toggle' | 'removable';
  onRemove?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FilterChip(props: FilterChipProps): JSX.Element | null;
