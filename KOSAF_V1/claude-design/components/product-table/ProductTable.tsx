import React from 'react';
import { Icon } from '../icon/Icon.tsx';

const F = 'var(--kosaf-font)';
export const PRODUCT_TABLE_COLUMNS = [
  { key: 'no', label: 'NO', width: 64 },
  { key: 'item', label: '품목', group: '상품정보', width: 70 },
  { key: 'variety', label: '품종', group: '상품정보', width: 70 },
  { key: 'name', label: '상품명/입찰명/역경매명', group: '상품정보', width: 220 },
  { key: 'deal', label: '거래방식', group: '거래정보', width: 90 },
  { key: 'producer', label: '생산자', group: '거래정보', width: 90 },
  { key: 'qty', label: '거래물량\n(잔여물량)', group: '거래정보', width: 110 },
  { key: 'price', label: '거래단가', group: '거래정보', width: 130 },
  { key: 'deadline', label: '입찰\n마감시간', group: '거래정보', width: 120 },
  { key: 'grade', label: '등급', group: '거래정보', width: 70 },
  { key: 'region', label: '가능지역', group: '거래정보', width: 90 },
  { key: 'ship', label: '배송\n출발일', group: '거래정보', width: 90 },
  { key: 'buy', label: '거래하기', group: '거래정보', width: 90 },
  { key: 'manage', label: '관리', width: 90 },
];

/** KOSAF ProductTable — Source-derived from 통합검색_테이블 1:97566: 2-level grouped header on #F7F7F7, dense rows, 구매하기 link (#0047ED underline), heart/cart, disabled (sold-out) row greyed.
 *  device="mobile" collapses rows into stacked TableRow-style blocks (50px rhythm). */
export function ProductTable({ rows = [], columns = PRODUCT_TABLE_COLUMNS, device = 'desktop', onBuy, onLike, onCart, highlightFirst = true, style }) {
  if (device === 'mobile') {
    return (
      <div role="list" style={{ fontFamily: F, borderTop: '1px solid var(--kosaf-color-border-default)', ...style }}>
        {rows.map((r, i) => (
          <div role="listitem" key={i} style={{ padding: '14px 16px', borderBottom: '1px solid var(--kosaf-color-border-default)', display: 'grid', gridTemplateColumns: '1fr auto', gap: 6, opacity: r.disabled ? 0.4 : 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{r.name}</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{r.price}</div>
            <div style={{ fontSize: 12, color: 'var(--kosaf-color-text-secondary)' }}>{[r.deal, r.producer, r.qty, r.region].filter(Boolean).join(' · ')}</div>
            <button type="button" disabled={r.disabled} onClick={() => onBuy && onBuy(r)} style={{ background: 'none', border: 0, padding: 0, color: 'var(--kosaf-color-state-focus)', textDecoration: 'underline', fontFamily: F, fontSize: 13, cursor: 'pointer' }}>구매하기</button>
          </div>
        ))}
      </div>
    );
  }
  const groups = [];
  columns.forEach((c) => { const last = groups[groups.length - 1]; if (c.group && last && last.group === c.group) last.span++; else groups.push({ group: c.group, span: 1, col: c }); });
  const th = { background: 'var(--kosaf-color-bg-subtle)', fontSize: 14, fontWeight: 500, lineHeight: '20px', padding: '0 6px', whiteSpace: 'pre-line', borderBottom: '1px solid var(--kosaf-color-border-default)', borderLeft: '1px solid var(--kosaf-color-border-default)', color: 'var(--kosaf-color-text-primary)' };
  return (
    <div style={{ width: '100%', overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', minWidth: columns.reduce((s, c) => s + c.width, 0), borderCollapse: 'collapse', tableLayout: 'fixed', fontFamily: F, textAlign: 'center', borderTop: '2px solid var(--kosaf-color-border-default)' }}>
        <colgroup>{columns.map((c) => <col key={c.key} style={{ width: c.width }} />)}</colgroup>
        <thead>
          <tr style={{ height: 50 }}>{groups.map((g, i) => g.group ? <th key={i} colSpan={g.span} scope="colgroup" style={{ ...th, borderLeft: i ? th.borderLeft : 0 }}>{g.group}</th> : <th key={i} rowSpan={2} scope="col" style={{ ...th, borderLeft: i ? th.borderLeft : 0 }}>{g.col.label}</th>)}</tr>
          <tr style={{ height: 50 }}>{columns.filter((c) => c.group).map((c) => <th key={c.key} scope="col" style={th}>{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const bold = highlightFirst && i === 0;
            return (
              <tr key={i} style={{ height: 100, borderBottom: '1px solid var(--kosaf-color-border-subtle)', color: r.disabled ? 'var(--kosaf-color-border-default)' : 'var(--kosaf-color-text-primary)', fontSize: 14, fontWeight: bold ? 700 : 400 }}>
                {columns.map((c) => {
                  let v = r[c.key];
                  if (c.key === 'price') v = <span style={{ fontSize: v && v !== '-' ? 18 : 14 }}>{v}</span>;
                  if (c.key === 'qty' && r.remain !== undefined) v = <>{r.qty}<br /><span style={{ color: r.disabled ? 'inherit' : r.deal === '정가' ? 'var(--kosaf-color-action-danger)' : 'inherit' }}>({r.remain})</span></>;
                  if (c.key === 'buy') v = <button type="button" disabled={r.disabled} onClick={() => onBuy && onBuy(r)} style={{ background: 'none', border: 0, padding: 0, fontFamily: F, fontSize: 14, fontWeight: 500, color: r.disabled ? 'inherit' : 'var(--kosaf-color-state-focus)', textDecoration: 'underline', cursor: r.disabled ? 'not-allowed' : 'pointer' }}>구매하기</button>;
                  if (c.key === 'manage') v = <span style={{ display: 'inline-flex', gap: 8, opacity: r.disabled ? 0.3 : 1 }}><button type="button" aria-label="관심상품" aria-pressed={!!r.liked} onClick={() => onLike && onLike(r)} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', lineHeight: 0 }}><Icon name="heart" size={20} style={{ filter: r.liked ? 'none' : 'grayscale(1) brightness(1.6)' }} /></button><button type="button" aria-label="장바구니" onClick={() => onCart && onCart(r)} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', lineHeight: 0 }}><Icon name="cart" size={20} /></button></span>;
                  return <td key={c.key} style={{ padding: '0 6px', whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
