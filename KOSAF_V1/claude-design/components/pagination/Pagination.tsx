import React from 'react';
import { PaginationItem } from '../pagination-item/PaginationItem.jsx';
import { Icon } from '../icon/Icon.tsx';

/** KOSAF Pagination — composes PaginationItem (218:631) with first/prev/next/last controls seen in 1:97566 / 1:90254. ←/→ keys move page when focused. */
export function Pagination({ page, defaultPage = 1, total = 10, window: win = 10, onChange, device = 'desktop', style }) {
  const [inner, setInner] = React.useState(defaultPage);
  const p = page !== undefined ? page : inner;
  const go = (n) => { const c = Math.min(total, Math.max(1, n)); if (c === p) return; if (page === undefined) setInner(c); onChange && onChange(c); };
  const mobile = device === 'mobile';
  const w = mobile ? Math.min(win, 5) : win;
  const start = Math.floor((p - 1) / w) * w + 1;
  const nums = Array.from({ length: Math.min(w, total - start + 1) }, (_, i) => start + i);
  const ctrl = (label, n, dis, rot, bar) => (
    <button type="button" aria-label={label} disabled={dis} onClick={() => go(n)} style={{ width: mobile ? 32 : 36, height: mobile ? 32 : 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 0, background: 'none', border: 0, cursor: dis ? 'not-allowed' : 'pointer', opacity: dis ? 0.35 : 1 }}>
      {bar === 'l' ? <span aria-hidden="true" style={{ width: 2, height: 12, background: 'var(--kosaf-color-text-primary)', marginRight: -3 }}></span> : null}
      <Icon name="navigate" size={20} rotate={rot} />
      {bar === 'r' ? <span aria-hidden="true" style={{ width: 2, height: 12, background: 'var(--kosaf-color-text-primary)', marginLeft: -3 }}></span> : null}
    </button>
  );
  return (
    <nav aria-label="페이지" onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(p - 1); if (e.key === 'ArrowRight') go(p + 1); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: mobile ? 6 : 12, ...style }}>
      {ctrl('첫 페이지', 1, p === 1, 0, 'l')}
      {ctrl('이전 페이지', p - 1, p === 1, 0)}
      {nums.map((n) => mobile
        ? <button key={n} type="button" aria-current={n === p ? 'page' : undefined} onClick={() => go(n)} style={{ minWidth: 28, height: 28, border: 0, borderRadius: 3, background: n === p ? 'var(--kosaf-color-action-primary)' : 'none', color: n === p ? '#fff' : 'var(--kosaf-color-text-primary)', fontFamily: 'var(--kosaf-font)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>{n}</button>
        : <PaginationItem key={n} selected={n === p} onClick={() => go(n)}>{n}</PaginationItem>)}
      {ctrl('다음 페이지', p + 1, p === total, 180)}
      {ctrl('마지막 페이지', total, p === total, 180, 'r')}
    </nav>
  );
}
