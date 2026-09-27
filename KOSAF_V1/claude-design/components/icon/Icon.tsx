import React from 'react';
import { KOSAF_ICONS } from './icons.data.js';
import { KOSAF_UI_ICONS, KOSAF_ICON_ALIASES, KOSAF_ICON_TONES, KOSAF_ICON_SOFT } from './icons.ui.js';

/** 11 source icons, verbatim (name, Figma id, source layer, native w/h, svg). Unchanged since 1.0. */
export const IconRegistry = KOSAF_ICONS;
/** KOSAF extension UI icons (24 grid, currentColor). Authored, not extracted from Figma. */
export const UIIconRegistry = KOSAF_UI_ICONS;
export const IconAliases = KOSAF_ICON_ALIASES;
export const IconTones = KOSAF_ICON_TONES;
export const IconSoftTones = KOSAF_ICON_SOFT;
/** Variants an icon supports: source → ['source']; open-stroke ui → ['outline']; closed ui → outline/duotone/solid. */
export function iconVariants(name) { const r = resolveIcon(name, 'ui'); return r.kind === 'ui' ? (r.def.variants || ['outline']) : r.kind === 'source' ? ['source'] : []; }

const warned = {};
function warn(msg) { if (!warned[msg] && typeof console !== 'undefined') { warned[msg] = 1; console.warn('[KOSAF Icon] ' + msg); } }

/** Resolve a name/alias → { kind: 'source'|'ui'|'missing', canonical, def }. */
export function resolveIcon(name, mode = 'source') {
  const canonical = KOSAF_ICON_ALIASES[name] || name;
  const src = KOSAF_ICONS.find((i) => i.name === canonical);
  const ui = KOSAF_UI_ICONS.find((i) => i.name === canonical);
  if (mode === 'ui' && ui) return { kind: 'ui', canonical, def: ui };
  if (src) return { kind: 'source', canonical, def: src };
  if (ui) return { kind: 'ui', canonical, def: ui };
  return { kind: 'missing', canonical, def: null };
}

/** KOSAF Icon — mode="source" (default) renders the 11 Figma SVGs verbatim (baked colours, tone ignored);
 *  extension names render the 24-grid currentColor set. Unknown names render an explicit dashed "missing" box + console.warn. */
export function Icon({ name, size, title, rotate = 0, mode = 'source', tone, secondaryTone, variant = 'outline', filled, strokeWidth = 2, style, ...rest }) {
  const r = resolveIcon(name, mode);
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true };
  const tf = rotate ? 'rotate(' + rotate + 'deg)' : undefined;
  if (r.kind === 'missing') {
    warn('unknown icon "' + name + '" — see components/icon/icons.manifest.json');
    const s = size || 24;
    return <span data-icon-missing={name} title={'missing icon: ' + name} {...a11y} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', boxSizing: 'border-box', width: s, height: s, border: '1px dashed var(--kosaf-color-action-danger)', borderRadius: 2, color: 'var(--kosaf-color-action-danger)', fontSize: Math.max(9, s * 0.45), fontFamily: 'var(--kosaf-font)', lineHeight: 1, ...style }} {...rest}>?</span>;
  }
  if (r.kind === 'ui') {
    const s = size || 24;
    if (![16, 20, 24, 32].includes(s)) warn('"' + r.canonical + '" size ' + s + ' is outside 16/20/24/32');
    const color = tone ? KOSAF_ICON_TONES[tone] || tone : 'currentColor';
    const sup = r.def.variants || ['outline'];
    let v = filled && r.def.fill ? 'solid' : variant;
    if (!sup.includes(v)) { if (v !== 'outline') warn('"' + r.canonical + '" has no ' + v + ' variant — outline fallback'); v = 'outline'; }
    const closed = r.def.closed || [], inner = r.def.inner || [];
    const soft = secondaryTone ? (KOSAF_ICON_SOFT[secondaryTone] || [secondaryTone, 1]) : (KOSAF_ICON_SOFT[tone] || KOSAF_ICON_SOFT.current);
    const knock = tone === 'inverse' ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-inverse)';
    return (
      <span data-icon={r.canonical} data-icon-kind="extension" data-icon-variant={v} {...a11y} style={{ display: 'inline-flex', flex: '0 0 auto', width: s, height: s, lineHeight: 0, color, transform: tf, ...style }} {...rest}>
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          {v === 'duotone' ? closed.map((i) => <path key={'s' + i} d={r.def.d[i]} fill={soft[0]} fillOpacity={soft[1]} stroke="none" />) : null}
          {r.def.d.map((d, i) => {
            if (v === 'solid' && closed.includes(i)) return <path key={i} d={d} fill="currentColor" />;
            if (v === 'solid' && inner.includes(i)) return <path key={i} d={d} stroke={knock} />;
            return <path key={i} d={d} />;
          })}
        </svg>
      </span>
    );
  }
  if (tone) warn('tone ignored for source icon "' + r.canonical + '" (colours are preserved from Figma)');
  const def = r.def;
  const m = def.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const vw = m ? +m[1] : 24, vh = m ? +m[2] : 24;
  const k = size ? size / Math.max(vw, vh) : 1;
  const w = +(vw * k).toFixed(2), h = +(vh * k).toFixed(2);
  const svg = def.svg.replace(/^<svg width="[^"]*" height="[^"]*"/, '<svg width="' + w + '" height="' + h + '" aria-hidden="true" focusable="false"');
  return (
    <span {...a11y} data-icon={r.canonical} data-icon-kind="source" data-figma-id={def.id}
      style={{ display: 'inline-flex', flex: '0 0 auto', width: w, height: h, lineHeight: 0, transform: tf, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }} {...rest} />
  );
}
