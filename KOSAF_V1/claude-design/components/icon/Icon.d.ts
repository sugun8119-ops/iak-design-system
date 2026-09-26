import * as React from 'react';

export type KosafSourceIconName = 'analytics'|'search'|'check'|'shopping-bag'|'heart'|'navigate'|'purchase'|'bell'|'time-history'|'document-edit'|'cart';
export type KosafUIIconName = 'close'|'menu'|'plus'|'minus'|'chevron-left'|'chevron-right'|'chevron-up'|'chevron-down'|'star'|'heart-outline'|'filter'|'sort'|'check-mark'|'calendar'|'user'|'store'|'home'|'help'|'grid'|'list'|'refresh'|'chart-line'|'wallet';
export type KosafIconTone = 'current'|'primary'|'secondary'|'muted'|'disabled'|'brand'|'positive'|'danger'|'focus'|'inverse';

/**
 * Icon — 11 Source-derived SVGs (1:85779, verbatim, baked colours) + 23 KOSAF extension UI icons (24 grid, 2px round stroke, currentColor).
 * Catalogue: components/icon/icons.manifest.json. Unknown names render a dashed red "?" box and console.warn — never silent null.
 * States: Static · Missing.
 */
export interface IconProps {
  /** Canonical name or alias (see IconAliases). */
  name: KosafSourceIconName | KosafUIIconName | string;
  /** source (default): Figma SVG as-is, tone ignored. ui: prefer the extension glyph when one exists. Extension-only names always render as ui. */
  mode?: 'source' | 'ui';
  /** UI icons: 16 | 20 | 24 | 32 (default 24). Source icons: longest side, default native size. */
  size?: number;
  /** UI icons only. Semantic role colour or a CSS colour; default currentColor. */
  tone?: KosafIconTone | string;
  /** UI icons with a fillable shape (star, heart-outline). */
  filled?: boolean;
  /** UI icons only, 1.75–2. Default 2. */
  strokeWidth?: number;
  /** Accessible name. Omit when decorative or when the parent control has a label. */
  title?: string;
  /** Degrees (e.g. navigate: 180 = next). */
  rotate?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare function resolveIcon(name: string, mode?: 'source' | 'ui'): { kind: 'source' | 'ui' | 'missing'; canonical: string; def: any };
export declare const IconRegistry: { name: string; id: string; source: string; w: number; h: number; svg: string }[];
export declare const UIIconRegistry: { name: string; label: string; category: string; fill?: boolean; d: string[] }[];
export declare const IconAliases: Record<string, string>;
export declare const IconTones: Record<KosafIconTone, string>;
