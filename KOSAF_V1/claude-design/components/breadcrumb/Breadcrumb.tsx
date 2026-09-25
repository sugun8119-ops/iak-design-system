import React from 'react';

/** KOSAF Breadcrumb — KOSAF extension of the "A > B" path text seen in source (e.g. "과실류 > 사과", "마이페이지 > 주문/배송내역"). */
export function Breadcrumb({ items = [], onNavigate, size = 14, style }) {
  return (
    <nav aria-label="현재 위치" style={style}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6, margin: 0, padding: 0, listStyle: 'none', fontFamily: 'var(--kosaf-font)', fontSize: size, lineHeight: '20px' }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {i ? <span aria-hidden="true" style={{ color: 'var(--kosaf-color-text-muted)' }}>&gt;</span> : null}
              {last ? <span aria-current="page" style={{ color: 'var(--kosaf-color-text-primary)', fontWeight: 500 }}>{it}</span>
                : <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(it, i); }} style={{ color: 'var(--kosaf-color-text-secondary)', textDecoration: 'none' }}>{it}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
