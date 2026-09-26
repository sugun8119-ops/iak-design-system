import React from 'react';
import { Icon } from '../icon/Icon.tsx';

const ICON = { 16: 16, 20: 20, 24: 24 };

/** KOSAF IconButton — KOSAF extension. Icon-only control with a required accessible label.
 *  Hit area: desktop 36, mobile 44 (min). Hover #F7F7F7 · pressed #EAEAEA · selected brand tone · focus 2px #0047ED · disabled blocks events. */
export function IconButton({ icon, label, iconSize = 20, mode, tone, device = 'desktop', size, selected, toggle, pressed, disabled, state, onClick, type = 'button', style, ...rest }) {
  const [h, setH] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [f, setF] = React.useState(false);
  if (!label && typeof console !== 'undefined') console.warn('[KOSAF IconButton] label is required');
  const box = Math.max(size || 0, device === 'mobile' ? 44 : 36);
  const st = state || (disabled ? 'disabled' : down ? 'pressed' : f ? 'focus' : h ? 'hover' : 'default');
  const isSel = selected || pressed;
  const bg = st === 'disabled' ? 'transparent' : st === 'pressed' ? 'var(--kosaf-gray-100)' : st === 'hover' ? 'var(--kosaf-color-bg-subtle)' : 'transparent';
  const color = st === 'disabled' ? 'var(--kosaf-color-text-disabled)' : isSel ? 'var(--kosaf-color-action-primary)' : tone ? undefined : 'var(--kosaf-color-icon-default)';
  const isSourceOnly = ['search', 'cart', 'bell', 'heart', 'navigate', 'analytics', 'purchase', 'shopping-bag', 'document-edit', 'time-history', 'check'].includes(icon) && mode !== 'ui';
  return (
    <button type={type} aria-label={label} title={label} aria-pressed={toggle ? !!isSel : undefined} aria-disabled={disabled || undefined} disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)}
      onFocus={(e) => setF(e.target.matches ? e.target.matches(':focus-visible') : true)} onBlur={() => setF(false)}
      style={{ boxSizing: 'border-box', width: box, height: box, flex: '0 0 ' + box + 'px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 0, border: 0, borderRadius: 3, background: bg, color, cursor: st === 'disabled' ? 'not-allowed' : 'pointer', outline: st === 'focus' ? '2px solid var(--kosaf-color-state-focus)' : 'none', outlineOffset: st === 'focus' ? -2 : 0, opacity: st === 'disabled' && isSourceOnly ? 0.4 : 1, transition: 'background-color .12s', ...style }}
      {...rest}>
      <Icon name={icon} mode={mode} size={ICON[iconSize] || 20} tone={isSourceOnly ? undefined : tone} filled={isSel && (icon === 'heart-outline' || icon === 'star')} />
    </button>
  );
}
