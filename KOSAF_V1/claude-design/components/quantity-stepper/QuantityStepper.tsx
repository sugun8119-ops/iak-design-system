import React from 'react';

const F = 'var(--kosaf-font)';

/** KOSAF QuantityStepper — Source-derived from the Spinner sample (Common_진행중, 30px) and 상품상세 "− 100 +" (1:87593). ↑/↓ keys, min/max clamp, typed input. */
export function QuantityStepper({ value, defaultValue = 1, onChange, min = 1, max = 99999, step = 1, size = 'sm', disabled, 'aria-label': ariaLabel = '수량', style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  const clamp = (n) => Math.min(max, Math.max(min, isNaN(n) ? min : n));
  const set = (n) => { const c = clamp(n); if (value === undefined) setInner(c); onChange && onChange(c); };
  const h = size === 'lg' ? 45 : 30;
  const btn = (dis) => ({ width: h, height: h, flex: '0 0 ' + h + 'px', border: 0, background: '#fff', cursor: dis ? 'not-allowed' : 'pointer', fontFamily: F, fontSize: size === 'lg' ? 20 : 16, lineHeight: 1, color: dis ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-text-primary)' });
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', height: h, border: '1px solid var(--kosaf-color-border-default)', borderRadius: 3, overflow: 'hidden', background: '#fff', ...style }}>
      <button type="button" aria-label="수량 감소" disabled={disabled || v <= min} onClick={() => set(v - step)} style={btn(disabled || v <= min)}>−</button>
      <input type="text" inputMode="numeric" role="spinbutton" aria-label={ariaLabel} aria-valuemin={min} aria-valuemax={max} aria-valuenow={v} disabled={disabled} value={v}
        onChange={(e) => set(parseInt(e.target.value.replace(/\D/g, ''), 10))}
        onKeyDown={(e) => { if (e.key === 'ArrowUp') { e.preventDefault(); set(v + step); } if (e.key === 'ArrowDown') { e.preventDefault(); set(v - step); } }}
        style={{ width: size === 'lg' ? 80 : 50, border: 0, borderLeft: '1px solid var(--kosaf-color-border-default)', borderRight: '1px solid var(--kosaf-color-border-default)', textAlign: 'center', fontVariantNumeric: 'tabular-nums', fontFamily: F, fontSize: size === 'lg' ? 18 : 14, color: 'var(--kosaf-color-text-primary)', outline: 'none', padding: 0 }} />
      <button type="button" aria-label="수량 증가" disabled={disabled || v >= max} onClick={() => set(v + step)} style={btn(disabled || v >= max)}>+</button>
    </div>
  );
}
