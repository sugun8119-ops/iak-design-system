import * as React from 'react';

/**
 * KOSAF/Button (Figma 218:590). Heights follow the source rule 34 / 42 / 45 / 50 / 70.
 */
export interface ButtonProps {
  /** Style variant. Default "primary". */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Height in px. 45 = Figma master 164×45 (default) · 34 compact · 42 common · 50 large · 70 mobile action. */
  size?: 34 | 42 | 45 | 50 | 70;
  /** Force a visual state (catalogs/specs). Omit for live interaction. "focus" is ignored for danger (not in source). */
  state?: 'default' | 'hover' | 'focus' | 'disabled';
  disabled?: boolean;
  fullWidth?: boolean;
  width?: number | string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
