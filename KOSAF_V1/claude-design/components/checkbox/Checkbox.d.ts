import * as React from 'react';

/** KOSAF/Checkbox (Figma 218:608). 20×20, radius 3; checked = #059B00 fill + white "✓" glyph (Bold 14). */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Force a visual state (catalogs). */
  state?: 'unchecked' | 'checked' | 'focus' | 'disabled';
  disabled?: boolean;
  /** Optional label, Body S 14/20 (web addition; Figma variants have no label). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
