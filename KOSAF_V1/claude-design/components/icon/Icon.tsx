import React from 'react';
import { KOSAF_ICONS } from './icons.data.js';

/** All 11 source icons (name, Figma id, source layer name, native w/h, verbatim svg). */
export const IconRegistry = KOSAF_ICONS;

/** KOSAF Icon — renders one of the 11 SVGs exported verbatim from MOEAkEbXtwHdE3xveg2Gto. Colours are baked into the source SVG and preserved. */
export function Icon({ name, size, title, rotate = 0, style, ...rest }) {
  const def = KOSAF_ICONS.find((i) => i.name === name);
  if (!def) return null;
  const m = def.svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const vw = m ? +m[1] : 24, vh = m ? +m[2] : 24;
  const k = size ? size / Math.max(vw, vh) : 1;
  const w = +(vw * k).toFixed(2), h = +(vh * k).toFixed(2);
  const svg = def.svg.replace(/^<svg width="[^"]*" height="[^"]*"/, '<svg width="' + w + '" height="' + h + '" aria-hidden="true" focusable="false"');
  return (
    <span
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      data-icon={name}
      data-figma-id={def.id}
      style={{ display: 'inline-flex', flex: '0 0 auto', width: w, height: h, lineHeight: 0, transform: rotate ? 'rotate(' + rotate + 'deg)' : undefined, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...rest}
    />
  );
}
