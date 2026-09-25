import React from 'react';

/** KOSAF/Stepper — Figma 218:642. 645×50: three 205×50 blocks, radius 5, 15px gap, Medium 14 at x=24.
 * Inactive #F7F7F7 / #707070 · Current #059B00 / #FFFFFF. */
export function Stepper({ steps = ['장바구니', '주문/결제', '주문완료'], current = 0, itemWidth = 205, style, ...rest }) {
  return (
    <ol style={{ display: 'flex', gap: 15, margin: 0, padding: 0, listStyle: 'none', ...style }} {...rest}>
      {steps.map((label, i) => {
        const on = i === current;
        return (
          <li
            key={i}
            aria-current={on ? 'step' : undefined}
            style={{
              boxSizing: 'border-box', display: 'flex', alignItems: 'center', width: itemWidth, flex: '0 1 auto', minWidth: 0, height: 50, padding: '0 24px',
              fontFamily: 'var(--kosaf-font)', fontSize: 14, lineHeight: '20px', fontWeight: 500, whiteSpace: 'nowrap',
              color: on ? 'var(--kosaf-color-text-inverse)' : 'var(--kosaf-color-text-secondary)',
              background: on ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-bg-subtle)',
              borderRadius: 'var(--kosaf-radius-5)',
            }}
          >
            {String(i + 1).padStart(2, '0')} {label}
          </li>
        );
      })}
    </ol>
  );
}
