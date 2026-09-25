import React from 'react';

/** KOSAF Textarea — Source-derived from Input 1:87378 (925×204 r5, text 22/34, placeholder #CCCCCC, counter "0/300" #68696B bottom-right, 20px inset). */
export function Textarea({ value, defaultValue, onChange, placeholder = '후기를 남겨주세요.(최소 10자 이상)', maxLength = 300, rows, width = '100%', height = 204, size = 'lg', disabled, error, id, 'aria-label': ariaLabel, style }) {
  const [inner, setInner] = React.useState(defaultValue ?? '');
  const [focus, setFocus] = React.useState(false);
  const v = value !== undefined ? value : inner;
  const fs = size === 'lg' ? 22 : 16, lh = size === 'lg' ? 34 : 24;
  const bd = disabled ? 'var(--kosaf-color-border-default)' : focus ? 'var(--kosaf-color-state-focus)' : error ? 'var(--kosaf-color-action-danger)' : 'var(--kosaf-color-border-default)';
  return (
    <div style={{ position: 'relative', width, maxWidth: '100%', ...style }}>
      <textarea id={id} aria-label={ariaLabel} className="kosaf-field kosaf-textarea" value={v} disabled={disabled} maxLength={maxLength} rows={rows} placeholder={placeholder}
        onChange={(e) => { if (value === undefined) setInner(e.target.value); onChange && onChange(e.target.value, e); }}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ boxSizing: 'border-box', display: 'block', width: '100%', height: rows ? undefined : height, resize: 'vertical', padding: '20px 20px ' + (lh + 26) + 'px', fontFamily: 'var(--kosaf-font)', fontSize: fs, lineHeight: lh + 'px', color: 'var(--kosaf-color-text-primary)', background: disabled ? 'var(--kosaf-color-bg-subtle)' : '#fff', border: '1px solid ' + bd, boxShadow: focus ? 'inset 0 0 0 1px var(--kosaf-color-state-focus)' : 'none', borderRadius: 5, outline: 'none' }} />
      <span aria-live="polite" style={{ position: 'absolute', right: 28, bottom: 20, fontFamily: 'var(--kosaf-font)', fontSize: fs, lineHeight: lh + 'px', color: 'var(--kosaf-src-counter)', pointerEvents: 'none' }}>{v.length}/{maxLength}</span>
    </div>
  );
}
