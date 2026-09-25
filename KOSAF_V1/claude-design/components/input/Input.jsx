import React from 'react';

/** KOSAF/Input — Figma 218:600. 287×45, radius 5, 14px inset, Regular 14. State=Default|Focus(2px #0047ED)|Error(1px #E23736)|Disabled(#F7F7F7). */
export function Input({ state, value, defaultValue, onChange, placeholder = '입력값을 입력하세요', errorMessage, disabled, width = 287, type = 'text', id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const isDisabled = disabled || state === 'disabled';
  const isError = state === 'error' || (!state && !!errorMessage);
  const isFocus = !isDisabled && (state ? state === 'focus' : focus);
  const bd = isDisabled ? 'var(--kosaf-color-border-default)' : isFocus ? 'var(--kosaf-color-state-focus)' : isError ? 'var(--kosaf-color-action-danger)' : 'var(--kosaf-color-border-default)';
  const msgId = id ? id + '-msg' : undefined;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width, maxWidth: '100%', ...style }}>
      <input
        className="kosaf-field"
        id={id}
        type={type}
        value={value}
        defaultValue={defaultValue}
        disabled={isDisabled}
        placeholder={isDisabled && !placeholder ? 'Disabled' : placeholder}
        aria-invalid={isError || undefined}
        aria-describedby={isError && errorMessage ? msgId : undefined}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          boxSizing: 'border-box', width: '100%', height: 'var(--kosaf-control-form)', padding: '0 14px',
          fontFamily: 'var(--kosaf-font)', fontSize: 14, color: isDisabled ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-text-primary)',
          background: isDisabled ? 'var(--kosaf-color-bg-subtle)' : 'var(--kosaf-color-surface-default)',
          border: `1px solid ${bd}`, boxShadow: isFocus ? 'inset 0 0 0 1px var(--kosaf-color-state-focus)' : 'none',
          borderRadius: 'var(--kosaf-radius-5)', outline: 'none', cursor: isDisabled ? 'not-allowed' : 'text',
        }}
        {...rest}
      />
      {isError && errorMessage ? (
        <span id={msgId} style={{ fontFamily: 'var(--kosaf-font)', fontSize: 12, lineHeight: '16px', color: 'var(--kosaf-color-action-danger)' }}>{errorMessage}</span>
      ) : null}
    </div>
  );
}
