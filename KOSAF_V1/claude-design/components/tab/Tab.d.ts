import * as React from 'react';

/**
 * KOSAF/Tab (Figma 218:620). 124×44, radius 5. Selected = #059B00 fill, white text; Default = white, #DDDDDD border.
 */
export interface TabProps {
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  /** Minimum width. Default 124 (Figma master); grows with longer labels. */
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function Tab(props: TabProps): JSX.Element;
