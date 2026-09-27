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
  /** Extension icons only. outline (default) · duotone (soft secondary face + sharp stroke) · solid (filled face, inner details knocked out).
   *  Only closed geometries support duotone/solid (star, heart-outline, filter, calendar, user, store, home, help, grid, wallet); others fall back to outline + console.warn. Source icons ignore it. */
  variant?: 'outline' | 'duotone' | 'solid';
  /** Duotone soft face colour: a tone key (uses IconSoftTones) or CSS colour. Default derives from `tone` (primary→#EAEAEA, brand→#EBFFE9, danger→#E23736@14%, inverse→white@30%). */
  secondaryTone?: KosafIconTone | string;
  /** Legacy (1.5.0): same as variant="solid" for star / heart-outline. */
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
export declare const IconSoftTones: Record<KosafIconTone, [string, number]>;
export declare function iconVariants(name: string): string[];
