import * as React from 'react';

/**
 * KOSAF/Input (Figma 218:600). 287×45 form control, #DDDDDD border, radius 5.
 */
export interface InputProps {
  /** Force a visual state (catalogs). Omit for live behaviour. */
  state?: 'default' | 'focus' | 'error' | 'disabled';
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Default "입력값을 입력하세요". */
  placeholder?: string;
  /** Required with error: shown below in #E23736 (error must never be color-only). Passing it also implies error state. */
  errorMessage?: string;
  disabled?: boolean;
  /** Default 287 (Figma master width). */
  width?: number | string;
  type?: string;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
