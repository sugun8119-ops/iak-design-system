import * as React from 'react';

/**
 * Select — Source-derived (1:85779), 1:98823 / 1:98859. Dropdown (정렬/보기개수/폼 선택). 272×42 r3; idle #ABABAB, selected #000 Medium. Keyboard listbox.
 * States: Closed · Open · Option highlighted · Selected · Disabled · Error.
 */
export interface SelectProps {
  options?: (string | { value: string; label: string; icon?: React.ReactNode })[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Default '-선택-'. */
  placeholder?: string;
  /** Default 272. */
  width?: number | string;
  /** 42px (list controls) or 45px (form rows). */
  size?: 'list' | 'form';
  disabled?: boolean;
  error?: boolean;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element | null;
