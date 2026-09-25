import * as React from 'react';

/**
 * DateField — Source-derived (1:85779), 1:94245 Calender. Date / time entry using the NATIVE picker, styled 287×50 r10 (lg) or 40 r5 (sm). Custom calendar popover: not built / unverified.
 * States: Default · Focus · Error · Disabled.
 */
export interface DateFieldProps {
  /** yyyy-mm-dd (or hh:mm for type="time"). */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'date' | 'time';
  /** Default 287. */
  width?: number | string;
  /** lg 50px r10 (source), sm 40px r5 (mobile cart row). */
  size?: 'lg' | 'sm';
  min?: string;
  max?: string;
  disabled?: boolean;
  error?: boolean;
  id?: string;
  'aria-label'?: string;
  style?: React.CSSProperties;
}
export declare function DateField(props: DateFieldProps): JSX.Element | null;
