import * as React from 'react';

/** KOSAF/PaginationItem (Figma 218:631). One page cell; compose a row with `gap: 10`. */
export interface PaginationItemProps {
  /** Force a visual state (catalogs). */
  state?: 'default' | 'hover' | 'selected' | 'disabled';
  selected?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Page number or short text. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PaginationItem(props: PaginationItemProps): JSX.Element;
