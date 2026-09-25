import React from 'react';

/** KOSAF/Badge — Figma 218:621. 88×30 master, radius 15, #EBFFE9 fill, Medium 14 #059B00, 18px side inset. */
export function Badge({ children, style, ...rest }) {
  return (
    <span
      style={{
        boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', height: 30, padding: '0 18px',
        background: 'var(--kosaf-color-surface-brand-soft)', color: 'var(--kosaf-color-action-primary)',
        fontFamily: 'var(--kosaf-font)', fontSize: 14, fontWeight: 500, lineHeight: 1, whiteSpace: 'nowrap',
        borderRadius: 15,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
