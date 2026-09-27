import React from 'react';
import { Icon, resolveIcon, iconVariants } from '../icon/Icon.tsx';

const ICON = { 16: 16, 20: 20, 24: 24 };

/** KOSAF IconButton — KOSAF extension. Icon-only control with a required accessible label.
 *  Hit area desktop 36 / mobile 44 (min). States (priority): disabled > selected/pressed(toggle) > active press > focus-visible > hover > default.
 *  default transparent · hover #F7F7F7 · active press #EAEAEA · selected #EBFFE9 bg + 1px inset #059B00 + brand icon (duotone/solid for closed UI glyphs)
 *  · focus 2px #0047ED outline (combines with any state) · disabled neutral, #A0A0A0 icon, events blocked. Geometry unchanged. */
export function IconButton({ icon, label, iconSize = 20, mode, tone, device = 'desktop', size, selected, toggle, pressed, disabled, state, selectedVariant = 'duotone', onClick, type = 'button', style, ...rest }) {
  const [h, setH] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [f, setF] = React.useState(false);
  if (!label && typeof console !== 'undefined') console.warn('[KOSAF IconButton] label is required');
  const box = Math.max(size || 0, device === 'mobile' ? 44 : 36);
  const isDis = !!disabled || state === 'disabled';
  const isSel = !isDis && (!!selected || !!pressed || state === 'selected');
  const isDown = !isDis && (state === 'pressed' || down);
  const isFocus = !isDis && (state === 'focus' || f);
  const isHover = !isDis && (state === 'hover' || h);
  const bg = isDis ? 'var(--kosaf-color-bg-subtle)' : isSel ? 'var(--kosaf-color-surface-brand-soft)' : isDown ? 'var(--kosaf-gray-100)' : isHover ? 'var(--kosaf-color-bg-subtle)' : 'transparent';
  const inset = isSel ? 'inset 0 0 0 1px var(--kosaf-color-action-primary)' : 'none';
  const isSource = resolveIcon(icon, mode || 'source').kind === 'source';
  const vars = iconVariants(icon);
  const iconTone = isSource ? undefined : isDis ? 'disabled' : isSel ? 'brand' : tone || 'primary';
  const iconVariant = isSource ? undefined : isSel && vars.includes(selectedVariant) ? selectedVariant : 'outline';
  return (
    <button type={type} aria-label={label} title={label} aria-pressed={toggle ? isSel : undefined} disabled={isDis}
      data-state={isDis ? 'disabled' : isSel ? 'selected' : isDown ? 'pressed' : isFocus ? 'focus' : isHover ? 'hover' : 'default'}
      onClick={isDis ? undefined : onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}
      onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setDown(true); }} onKeyUp={() => setDown(false)}
      onFocus={(e) => setF(e.target.matches ? e.target.matches(':focus-visible') : true)} onBlur={() => { setF(false); setDown(false); }}
      style={{ boxSizing: 'border-box', width: box, height: box, flex: '0 0 ' + box + 'px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 0, border: 0, borderRadius: 3, background: bg, boxShadow: inset, color: isDis ? 'var(--kosaf-color-text-disabled)' : isSel ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-icon-default)', cursor: isDis ? 'not-allowed' : 'pointer', outline: isFocus ? '2px solid var(--kosaf-color-state-focus)' : 'none', outlineOffset: isFocus ? 1 : 0, opacity: isDis && isSource ? 0.4 : 1, transform: isDown && !isSel ? 'translateY(0.5px)' : 'none', transition: 'background-color .12s, box-shadow .12s', ...style }}
      {...rest}>
      <Icon name={icon} mode={mode} size={ICON[iconSize] || 20} tone={iconTone} variant={iconVariant} />
    </button>
  );
}
