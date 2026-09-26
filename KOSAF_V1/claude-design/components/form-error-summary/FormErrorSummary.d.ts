import * as React from 'react';

/**
 * FormErrorSummary — KOSAF extension (1.4.0). Not a Figma master; field-error copy "필수항목을 입력해주세요." is from 1:89853.
 * status: error (field list, links focus each field) · submitError (server/network failure + retry — demo) · loading · success.
 */
export interface FormErrorSummaryProps {
  status?: 'idle' | 'error' | 'submitError' | 'loading' | 'success';
  /** id = the field element id (FormField htmlFor). */
  errors?: { id: string; label: string; message: string }[];
  title?: React.ReactNode;
  message?: React.ReactNode;
  onRetry?: () => void;
  retryLabel?: string;
  /** Change (e.g. submit counter) to move focus once per submit — never on each keystroke. */
  focusKey?: number | string;
  /** Where focus goes on focusKey change. Default 'summary'. */
  focusTarget?: 'summary' | 'firstField' | 'none';
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function FormErrorSummary(props: FormErrorSummaryProps): JSX.Element | null;
