import * as React from 'react';

/**
 * PageHeader — KOSAF extension (1.4.0, reference-based: Land-book Hunar/Calendly title→description→action order; KOSAF type scale only).
 * Not a Figma master. Work screens left-aligned; completion screens centered.
 */
export interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Buttons / Stepper placed at the right (PC) or below (mobile, centered). */
  actions?: React.ReactNode;
  align?: 'left' | 'center';
  device?: 'desktop' | 'mobile';
  /** PC title size. 40 default, 30 inside SideNav layouts. Mobile is fixed 22. */
  size?: 30 | 40 | number;
  /** Heading level (1–3). Default 1. */
  level?: 1 | 2 | 3;
  style?: React.CSSProperties;
}
export declare function PageHeader(props: PageHeaderProps): JSX.Element | null;
