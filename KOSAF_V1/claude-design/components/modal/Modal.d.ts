import * as React from 'react';

/**
 * KOSAF/Modal (Figma 218:639). White shell, 1px #DDDDDD border, radius 10, H2 title + divider.
 */
export interface ModalProps {
  /** Default true. */
  open?: boolean;
  /** Render in-flow without the fixed backdrop (for catalogs / embedding). */
  inline?: boolean;
  /** Default "상세 정보". */
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Centered action row, e.g. Secondary + Primary Buttons. */
  footer?: React.ReactNode;
  /** Backdrop click and Escape call this. */
  onClose?: () => void;
  /** Default 706. */
  width?: number | string;
  /** Default 630. Pass "auto" for content height. */
  height?: number | string;
  style?: React.CSSProperties;
}
export declare function Modal(props: ModalProps): JSX.Element | null;
