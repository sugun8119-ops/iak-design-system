import React from 'react';

// Geometry 218:572: 164×45, radius 5, label Medium 16. Only 45 is a Figma master; 34/42/50/70 are documented height rules
// (Common_진행중 btn-* samples) — label size for 34 is reduced to 14 as a web adaptation, not a Figma value.
const SIZE = {
  34: { font: 14, pad: 14 },
  42: { font: 16, pad: 20 },
  45: { font: 16, pad: 20 },
  50: { font: 16, pad: 20 },
  70: { font: 16, pad: 20 },
};

const VARIANT = {
  primary: {
    default: { bg: 'var(--kosaf-color-action-primary)', fg: 'var(--kosaf-color-text-inverse)', bd: 'var(--kosaf-color-action-primary)' },
    hover: { bg: 'var(--kosaf-color-action-primary-hover)', fg: 'var(--kosaf-color-text-inverse)', bd: 'var(--kosaf-color-action-primary)' },
  },
  secondary: {
    default: { bg: 'var(--kosaf-color-surface-default)', fg: 'var(--kosaf-color-text-primary)', bd: 'var(--kosaf-color-border-default)' },
    hover: { bg: 'var(--kosaf-color-bg-subtle)', fg: 'var(--kosaf-color-text-primary)', bd: 'var(--kosaf-color-border-default)' },
  },
  danger: {
    default: { bg: 'var(--kosaf-color-action-danger)', fg: 'var(--kosaf-color-text-inverse)', bd: 'var(--kosaf-color-action-danger)' },
    hover: { bg: 'var(--kosaf-color-action-danger-hover)', fg: 'var(--kosaf-color-text-inverse)', bd: 'var(--kosaf-color-action-danger)' },
  },
};
// 218:576/582/588: fill #EAEAEA, stroke #DDDDDD, text #A0A0A0
const DISABLED = { bg: 'var(--kosaf-gray-100)', fg: 'var(--kosaf-color-text-disabled)', bd: 'var(--kosaf-color-border-default)' };

/** KOSAF/Button — Figma 218:590. Style=Primary|Secondary|Danger × State=Default|Hover|Disabled (+Focus on Primary/Secondary). */
export function Button({ variant = 'primary', size = 45, state, disabled, fullWidth, width, type = 'button', onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const isDisabled = disabled || state === 'disabled';
  const v = VARIANT[variant] || VARIANT.primary;
  const isHover = state ? state === 'hover' : hover;
  // Focus variant exists only for Primary and Secondary in the source (223:570, 223:572).
  const isFocus = variant !== 'danger' && (state ? state === 'focus' : focus);
  const c = isDisabled ? DISABLED : isHover ? v.hover : v.default;
  const s = SIZE[size] || SIZE[42];
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={(e) => setFocus(e.currentTarget.matches(':focus-visible'))}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        height: size, padding: `0 ${s.pad}px`, width: fullWidth ? '100%' : width,
        fontFamily: 'var(--kosaf-font)', fontSize: s.font, fontWeight: 500, lineHeight: 1, whiteSpace: 'nowrap',
        color: c.fg, background: c.bg,
        border: `1px solid ${isFocus && !isDisabled ? 'var(--kosaf-color-state-focus)' : c.bd}`,
        boxShadow: isFocus && !isDisabled ? 'inset 0 0 0 1px var(--kosaf-color-state-focus)' : 'none',
        borderRadius: 'var(--kosaf-radius-5)', outline: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer', transition: 'background-color .15s, border-color .15s',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
