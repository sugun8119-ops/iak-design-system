import * as React from 'react';

/**
 * AlertDialog — Source-derived (1:85779), 1:103625. Notice/confirm popup (휴면 계정, 비밀번호 변경, 심사안내). Green title bar, icon circle, info box, 158×45 r2 buttons. Focus trap + Esc.
 * States: Open · 1 or 2 actions.
 */
export interface AlertDialogProps {
  open?: boolean;
  inline?: boolean;
  title?: string;
  /** null hides the 90px circle. */
  icon?: React.ReactNode | null;
  message?: React.ReactNode;
  /** Rows in the #F7FEF8 box; first value green Bold. */
  details?: [string, string][];
  primaryLabel?: string;
  /** Grey #A0A0A0 button. */
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onClose?: () => void;
  /** Default 570. */
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function AlertDialog(props: AlertDialogProps): JSX.Element | null;
