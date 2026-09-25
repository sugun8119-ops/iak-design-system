import * as React from 'react';

/**
 * Accordion — Source-derived (1:85779), 1:90254. FAQ list with Q/A markers. Enter/Space toggle, ↑/↓/Home/End move focus.
 * States: Collapsed · Expanded · Focus.
 */
export interface AccordionProps {
  items?: { title: React.ReactNode; content: React.ReactNode }[];
  defaultOpen?: number[];
  multiple?: boolean;
  device?: 'desktop' | 'mobile';
  /** Show Q / A markers. */
  marker?: boolean;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element | null;
