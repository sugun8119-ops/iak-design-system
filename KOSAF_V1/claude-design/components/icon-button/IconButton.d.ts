import * as React from 'react';

/**
 * IconButton — KOSAF extension (no Figma master). Icon-only button: required `label` (aria-label + tooltip), decorative inner icon.
 * Hit area desktop ≥36 / mobile ≥44. States: Default · Hover (#F7F7F7) · Pressed/active (#EAEAEA) · Focus-visible (2px #0047ED outline, combinable) · Selected (#EBFFE9 bg + 1px inset #059B00 + brand icon, duotone for closed UI glyphs) · Disabled (wins over any forced state; neutral bg, #A0A0A0, events blocked).
 */
export interface IconButtonProps {
  /** Icon name or alias (see Icon). */
  icon: string;
  /** Required accessible name (e.g. "메뉴 닫기"). */
  label: string;
  iconSize?: 16 | 20 | 24;
  /** Passed to Icon. */
  mode?: 'source' | 'ui';
  tone?: string;
  /** desktop = 36 hit area, mobile = 44. */
  device?: 'desktop' | 'mobile';
  /** Larger hit area (never below the device minimum). */
  size?: number;
  /** Toggle button: renders aria-pressed. */
  toggle?: boolean;
  selected?: boolean;
  pressed?: boolean;
  /** Disabled: native disabled + onClick not called. */
  disabled?: boolean;
  /** Force a visual state (catalogs). `disabled` prop always wins. */
  state?: 'default' | 'hover' | 'focus' | 'pressed' | 'selected' | 'disabled';
  /** Icon variant when selected (closed UI glyphs only). Default duotone. */
  selectedVariant?: 'duotone' | 'solid';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
