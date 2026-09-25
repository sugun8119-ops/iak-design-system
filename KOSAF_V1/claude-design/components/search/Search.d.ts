import * as React from 'react';

/**
 * KOSAF/Search (Figma 218:601). Fixed rule: 579×50, radius 25.
 */
export interface SearchProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Called on Enter. */
  onSubmit?: (value: string) => void;
  /** Default "검색어를 입력하세요". */
  placeholder?: string;
  /** Default 579. Shrinks to container on mobile via max-width:100%. */
  width?: number | string;
  /** KOSAF extension: leading slot before the input (e.g. the header's "거래방식 ▾" scope from 1:86081), followed by a 1px divider. */
  leading?: React.ReactNode;
  /** Optional trailing slot, e.g. <Icon name="search" /> (source icon 1:86084) wrapped in a submit button. */
  trailing?: React.ReactNode;
  disabled?: boolean;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function Search(props: SearchProps): JSX.Element;
