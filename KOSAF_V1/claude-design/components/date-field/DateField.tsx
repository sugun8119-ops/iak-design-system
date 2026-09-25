import React from 'react';

/** KOSAF DateField — Source-derived look from Calender 1:94245 (287×50 r10, 18/34 text, 24px inset). Behaviour = native <input type="date"|"time"> (custom calendar popover is unverified / not built). */
export function DateField({ value, defaultValue, onChange, type = 'date', width = 287, size = 'lg', min, max, disabled, error, id, 'aria-label': ariaLabel, style }) {
  const [focus, setFocus] = React.useState(false);
  const lg = size === 'lg';
  const bd = focus ? 'var(--kosaf-color-state-focus)' : error ? 'var(--kosaf-color-action-danger)' : 'var(--kosaf-color-border-default)';
  return (
    <input id={id} aria-label={ariaLabel} className="kosaf-field" type={type} value={value} defaultValue={defaultValue} min={min} max={max} disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.value, e)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ boxSizing: 'border-box', width, maxWidth: '100%', height: lg ? 50 : 40, padding: lg ? '0 16px 0 24px' : '0 10px 0 16px', fontFamily: 'var(--kosaf-font)', fontSize: lg ? 18 : 15, color: 'var(--kosaf-src-text-strong)', background: disabled ? 'var(--kosaf-color-bg-subtle)' : '#fff', border: '1px solid ' + bd, boxShadow: focus ? 'inset 0 0 0 1px var(--kosaf-color-state-focus)' : 'none', borderRadius: lg ? 10 : 5, outline: 'none', ...style }} />
  );
}
