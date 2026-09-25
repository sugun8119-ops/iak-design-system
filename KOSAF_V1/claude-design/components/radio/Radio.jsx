import React from 'react';

/** KOSAF/Radio — Figma 218:614. 20×20 circle.
 * Unchecked #FFF/#C1C1C1 · Checked #FFF/#C1C1C1 + 10px #059B00 dot · Focus #FFF, 2px #0047ED · Disabled #FFF/#D9D9D9. */
export function Radio({ checked, onChange, state, disabled, name, value, children, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const isChecked = state === 'checked' ? true : state === 'unchecked' || state === 'focus' || state === 'disabled' ? false : !!checked;
  const isDisabled = disabled || state === 'disabled';
  const isFocus = !isDisabled && (state ? state === 'focus' : focus);
  return (
    <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, cursor: isDisabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--kosaf-font)', fontSize: 14, lineHeight: '20px', color: isDisabled ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-text-primary)', ...style }}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={(e) => onChange && onChange(value, e)}
        onFocus={(e) => setFocus(e.currentTarget.matches(':focus-visible'))}
        onBlur={() => setFocus(false)}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1, margin: 0 }}
        {...rest}
      />
      <span aria-hidden="true" style={{
        boxSizing: 'border-box', flex: '0 0 20px', width: 20, height: 20, borderRadius: 10, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--kosaf-color-surface-default)',
        border: isFocus ? '2px solid var(--kosaf-color-state-focus)' : `1px solid ${isDisabled ? 'var(--kosaf-color-surface-disabled)' : 'var(--kosaf-color-border-strong)'}`,
      }}>
        {isChecked ? <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--kosaf-color-action-primary)' }}></span> : null}
      </span>
      {children}
    </label>
  );
}
