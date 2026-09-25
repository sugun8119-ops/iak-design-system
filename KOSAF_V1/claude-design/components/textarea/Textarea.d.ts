import * as React from 'react';

/**
 * Textarea — Source-derived (1:85779), 1:87378. Long text (후기/문의). 925×204 r5, 22/34, #CCCCCC placeholder, live counter "0/300".
 * States: Default · Focus · Error · Disabled.
 */
export interface TextareaProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  /** Default 300. */
  maxLength?: number;
  rows?: number;
  width?: number | string;
  /** Default 204. */
  height?: number;
  /** lg = source 22/34; md = 16/24 (mobile, extension). */
  size?: 'lg' | 'md';
  disabled?: boolean;
  error?: boolean;
  id?: string;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element | null;
