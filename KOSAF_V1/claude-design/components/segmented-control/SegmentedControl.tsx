import React from 'react';

/** KOSAF SegmentedControl — period Toggle (Common_진행중 기간 선택 sample; geometry not exported → KOSAF extension styling). Radio-group semantics; ←/→ move selection. */
export function SegmentedControl({ options = ['1주일', '1개월', '3개월', '6개월'], value, defaultValue, onChange, height = 42, 'aria-label': ariaLabel = '기간 선택', style }) {
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const [inner, setInner] = React.useState(defaultValue ?? (opts[0] && opts[0].value));
  const v = value !== undefined ? value : inner;
  const refs = React.useRef([]);
  const set = (nv) => { if (value === undefined) setInner(nv); onChange && onChange(nv); };
  const key = (e, i) => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return; e.preventDefault();
    const n = (i + d + opts.length) % opts.length; set(opts[n].value); refs.current[n] && refs.current[n].focus();
  };
  return (
    <div role="radiogroup" aria-label={ariaLabel} style={{ display: 'inline-flex', ...style }}>
      {opts.map((o, i) => {
        const on = o.value === v;
        return (
          <button key={o.value} ref={(el) => (refs.current[i] = el)} type="button" role="radio" aria-checked={on} tabIndex={on ? 0 : -1} onClick={() => set(o.value)} onKeyDown={(e) => key(e, i)}
            style={{ boxSizing: 'border-box', height, minWidth: 80, padding: '0 16px', marginLeft: i ? -1 : 0, position: 'relative', zIndex: on ? 1 : 0, border: '1px solid ' + (on ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-border-default)'), borderRadius: i === 0 ? '5px 0 0 5px' : i === opts.length - 1 ? '0 5px 5px 0' : 0, background: on ? 'var(--kosaf-color-action-primary)' : '#fff', color: on ? '#fff' : 'var(--kosaf-color-text-primary)', fontFamily: 'var(--kosaf-font)', fontSize: 14, fontWeight: on ? 700 : 500, cursor: 'pointer' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
