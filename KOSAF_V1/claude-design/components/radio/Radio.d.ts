import * as React from 'react';

/** KOSAF/Radio (Figma 218:614). 20×20 circle; checked = #059B00 ring + 10px dot. */
export interface RadioProps {
  checked?: boolean;
  /** Receives this radio's `value`. */
  onChange?: (value: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Force a visual state (catalogs). */
  state?: 'unchecked' | 'checked' | 'focus' | 'disabled';
  disabled?: boolean;
  name?: string;
  value?: string;
  /** Optional label, Body S 14/20. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
