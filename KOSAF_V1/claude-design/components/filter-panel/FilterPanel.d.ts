import * as React from 'react';

/**
 * FilterPanel — Source-derived (1:85779), 1:97566 · 1:93119. 통합검색 filters. PC: green label column + 4 category lists + chip rows + 전체해제/applied tags + 닫기. Mobile: accordion checkbox lists + 초기화.
 * States: Option selected · Section open (mobile) · Applied tags.
 */
export interface FilterPanelProps {
  device?: 'desktop' | 'mobile';
  /** Default DEFAULT_FILTER_GROUPS. */
  groups?: { key: string; label: string; options: string[]; chips?: boolean }[];
  value?: Record<string, string[]>;
  defaultValue?: Record<string, string[]>;
  onChange?: (value: Record<string, string[]>) => void;
  keyword?: string;
  onKeyword?: (q: string) => void;
  onSearch?: (q: string) => void;
  onClose?: () => void;
  onlyOnSale?: boolean;
  onOnlyOnSale?: (v: boolean) => void;
  style?: React.CSSProperties;
}
export declare function FilterPanel(props: FilterPanelProps): JSX.Element | null;
