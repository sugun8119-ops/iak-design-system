import * as React from 'react';

/**
 * FormField — Source-derived (1:85779), 1:89853. Label + control row for 회원가입/등록 forms: required *, error text, help, bottom rule.
 * States: Default · Required · Error · Help.
 */
export interface FormFieldProps {
  label?: React.ReactNode;
  /** Adds red * (+ SR "(필수)"). */
  required?: boolean;
  /** "필수항목을 입력해주세요." style (#E23736, 14). */
  error?: string;
  help?: string;
  htmlFor?: string;
  /** horizontal = PC (label col 320), vertical = mobile. */
  layout?: 'horizontal' | 'vertical';
  labelWidth?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FormField(props: FormFieldProps): JSX.Element | null;
