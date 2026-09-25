import * as React from 'react';

/**
 * Footer — Source-derived (1:85779), 1:86051. #202020 site footer 1920×289; #888888 links (15/500) and company info (14/400). Social icons not exported.
 * States: desktop · mobile.
 */
export interface FooterProps {
  device?: 'desktop'|'mobile';
  links?: string[];
  /** Rows of address/registration text; [] = spacer row. */
  info?: string[][];
  onLink?: (label: string) => void;
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element | null;
