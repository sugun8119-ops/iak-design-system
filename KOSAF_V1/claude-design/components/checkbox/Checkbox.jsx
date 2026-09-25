import React from 'react';

/** KOSAF/Checkbox — Figma 218:608. 20×20, radius 3.
 * Unchecked #FFF/#C1C1C1 · Checked #059B00 fill, #C1C1C1 stroke, "✓" Bold 14 white · Focus #FFF, 2px #0047ED · Disabled #EAEAEA/#C1C1C1. */
export function Checkbox({ checked, defaultChecked, onChange, state, disabled, children, style, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const [focus, setFocus] = React.useState(false);
  const isChecked = state === 'checked' ? true : state === 'unchecked' || state === 'focus' || state === 'disabled' ? false : checked !== undefined ? checked : inner;
  const isDisabled = disabled || state === 'disabled';
  const isFocus = !isDisabled && (state ? state === 'focus' : focus);
  return (
    <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, cursor: isDisabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--kosaf-font)', fontSize: 14, lineHeight: '20px', color: isDisabled ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-text-primary)', ...style }}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={(e) => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e.target.checked, e); }}
        onFocus={(e) => setFocus(e.currentTarget.matches(':focus-visible'))}
        onBlur={() => setFocus(false)}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1, margin: 0 }}
        {...rest}
      />
      <span aria-hidden="true" style={{
        boxSizing: 'border-box', flex: '0 0 20px', width: 20, height: 20, borderRadius: 'var(--kosaf-radius-3)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: isDisabled ? 'var(--kosaf-gray-100)' : isChecked ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-surface-default)',
        border: isFocus ? '2px solid var(--kosaf-color-state-focus)' : '1px solid var(--kosaf-color-border-strong)',
        color: 'var(--kosaf-color-text-inverse)', fontSize: 14, fontWeight: 700, lineHeight: 1,
      }}>{isChecked ? '✓' : null}</span>
      {children}
    </label>
  );
}
