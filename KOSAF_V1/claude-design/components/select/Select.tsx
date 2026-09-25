import React from 'react';
import { Icon } from '../icon/Icon.tsx';

const F = 'var(--kosaf-font)';

/** KOSAF Select — Source-derived from Drop down_List type 1:98823 / Drop down_amount 1:98859 (272×42 r3, options 16px, idle #ABABAB, selected #000).
 * Custom listbox with keyboard: Enter/Space/ArrowDown open, ↑↓ move, Enter select, Esc close. */
export function Select({ options = [], value, defaultValue, onChange, placeholder = '-선택-', width = 272, size = 'list', disabled, error, 'aria-label': ariaLabel, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);
  const [hi, setHi] = React.useState(-1);
  const wrap = React.useRef(null);
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const v = value !== undefined ? value : inner;
  const cur = opts.find((o) => o.value === v);
  const h = size === 'form' ? 45 : 42;
  const pick = (o) => { if (value === undefined) setInner(o.value); onChange && onChange(o.value); setOpen(false); };
  React.useEffect(() => {
    if (!open) return;
    const c = (e) => { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', c); return () => document.removeEventListener('mousedown', c);
  }, [open]);
  const onKey = (e) => {
    if (disabled) return;
    if (!open && ['Enter', ' ', 'ArrowDown'].includes(e.key)) { e.preventDefault(); setOpen(true); setHi(Math.max(0, opts.indexOf(cur))); return; }
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setHi((i) => Math.min(opts.length - 1, i + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHi((i) => Math.max(0, i - 1)); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (opts[hi]) pick(opts[hi]); }
    else if (e.key === 'Tab') setOpen(false);
  };
  const bd = error ? 'var(--kosaf-color-action-danger)' : open ? 'var(--kosaf-color-state-focus)' : 'var(--kosaf-color-border-default)';
  return (
    <div ref={wrap} style={{ position: 'relative', width, maxWidth: '100%', fontFamily: F, ...style }}>
      <button type="button" role="combobox" aria-haspopup="listbox" aria-expanded={open} aria-label={ariaLabel} disabled={disabled} onClick={() => setOpen(!open)} onKeyDown={onKey}
        style={{ boxSizing: 'border-box', width: '100%', height: h, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '0 14px 0 19px', background: disabled ? 'var(--kosaf-color-bg-subtle)' : '#fff', border: '1px solid ' + bd, borderRadius: 3, cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: F, fontSize: 16, color: cur ? 'var(--kosaf-src-text-strong)' : 'var(--kosaf-src-dropdown-idle)', textAlign: 'left' }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cur ? cur.label : placeholder}</span>
        <Icon name="navigate" size={18} rotate={open ? 90 : -90} />
      </button>
      {open ? (
        <ul role="listbox" style={{ position: 'absolute', zIndex: 20, left: 0, right: 0, top: h - 1, margin: 0, padding: '8px 0', listStyle: 'none', background: '#fff', border: '1px solid var(--kosaf-color-border-default)', maxHeight: 260, overflowY: 'auto' }}>
          {opts.map((o, i) => (
            <li key={o.value} role="option" aria-selected={o.value === v} onMouseEnter={() => setHi(i)} onMouseDown={(e) => { e.preventDefault(); pick(o); }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, minHeight: 43, padding: '0 19px', cursor: 'pointer', fontSize: 16, fontWeight: o.value === v ? 500 : 400, color: o.value === v ? 'var(--kosaf-src-text-strong)' : 'var(--kosaf-src-dropdown-idle)', background: hi === i ? 'var(--kosaf-color-bg-subtle)' : 'transparent' }}>
              {o.icon}{o.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
