import React from 'react';

/** KOSAF/Search — Figma 218:601. 579×50, radius 25, white fill, 2px #059B00 stroke, placeholder Regular 14 #707070 at x=24. */
export function Search({ value, defaultValue, onChange, onSubmit, placeholder = '검색어를 입력하세요', width = 579, leading, trailing, disabled, 'aria-label': ariaLabel = '검색어', style, ...rest }) {
  const [inner, setInner] = React.useState(defaultValue ?? '');
  const [focus, setFocus] = React.useState(false);
  const v = value !== undefined ? value : inner;
  return (
    <form
      role="search"
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(v); }}
      style={{
        boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 10,
        width, maxWidth: '100%', height: 'var(--kosaf-control-search)', padding: '0 8px 0 24px',
        background: disabled ? 'var(--kosaf-color-bg-subtle)' : 'var(--kosaf-color-surface-default)',
        border: `1px solid ${focus ? 'var(--kosaf-color-state-focus)' : 'var(--kosaf-color-action-primary)'}`,
        boxShadow: `inset 0 0 0 1px ${focus ? 'var(--kosaf-color-state-focus)' : 'var(--kosaf-color-action-primary)'}`,
        borderRadius: 'var(--kosaf-radius-25)',
        ...style,
      }}
    >
      {leading ? <>{leading}<span aria-hidden="true" style={{ width: 1, height: 16, background: 'var(--kosaf-color-border-default)' }}></span></> : null}
      <input
        className="kosaf-field"
        aria-label={ariaLabel}
        type="search"
        value={v}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => { if (value === undefined) setInner(e.target.value); onChange && onChange(e.target.value, e); }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ flex: 1, minWidth: 0, height: '100%', border: 0, outline: 'none', background: 'transparent', fontFamily: 'var(--kosaf-font)', fontSize: 14, color: 'var(--kosaf-color-text-primary)' }}
        {...rest}
      />
      {trailing}
    </form>
  );
}
