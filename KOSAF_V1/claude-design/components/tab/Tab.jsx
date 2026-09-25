import React from 'react';

/** KOSAF/Tab — Figma 218:620. 124×44, radius 5, Medium 16.
 * Default #FFF/#DDDDDD, #333 text · Selected #059B00 fill+stroke, white text. No hover variant in source. */
export function Tab({ selected, onClick, children, width = 124, style, ...rest }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={!!selected}
      onClick={onClick}
      style={{
        boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 44, padding: '0 16px', minWidth: width,
        fontFamily: 'var(--kosaf-font)', fontSize: 16, fontWeight: 500, lineHeight: 1, whiteSpace: 'nowrap',
        color: selected ? 'var(--kosaf-color-text-inverse)' : 'var(--kosaf-color-text-primary)',
        background: selected ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-surface-default)',
        border: `1px solid ${selected ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-border-default)'}`,
        borderRadius: 'var(--kosaf-radius-5)', cursor: 'pointer',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
