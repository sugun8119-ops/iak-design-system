import React from 'react';

/** KOSAF/PaginationItem — Figma 218:631. 42×42, radius 5, Medium 14; all states keep 1px #DDDDDD stroke.
 * Default #FFF/#333 · Hover #F7F7F7/#333 · Selected #059B00/#FFF · Disabled #FFF/#A0A0A0. */
export function PaginationItem({ state, selected, disabled, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const isDisabled = disabled || state === 'disabled';
  const isSelected = state ? state === 'selected' : !!selected;
  const isHover = !isDisabled && !isSelected && (state ? state === 'hover' : hover);
  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-current={isSelected ? 'page' : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 42, height: 42, padding: '0 6px',
        fontFamily: 'var(--kosaf-font)', fontSize: 14, fontWeight: 500, lineHeight: 1,
        color: isSelected ? 'var(--kosaf-color-text-inverse)' : isDisabled ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-text-primary)',
        background: isSelected ? 'var(--kosaf-color-action-primary)' : isHover ? 'var(--kosaf-color-bg-subtle)' : 'var(--kosaf-color-surface-default)',
        border: '1px solid var(--kosaf-color-border-default)',
        borderRadius: 'var(--kosaf-radius-5)', cursor: isDisabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
