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
  { key: 'qty', label: '거래물량\n(잔여물량)', group: '거래정보', width: 110, numeric: true, sortable: true },
  { key: 'price', label: '거래단가', group: '거래정보', width: 130, numeric: true, sortable: true },
  { key: 'deadline', label: '입찰\n마감시간', group: '거래정보', width: 120, sortable: true },
  { key: 'grade', label: '등급', group: '거래정보', width: 70 },
  { key: 'region', label: '가능지역', group: '거래정보', width: 90 },
  { key: 'ship', label: '배송\n출발일', group: '거래정보', width: 90 },
  { key: 'buy', label: '거래하기', group: '거래정보', width: 90 },
  { key: 'manage', label: '관리', width: 90 },
];

const srOnly = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };
const MSG = { loading: '상품 목록을 불러오는 중입니다…', empty: '조회된 상품이 없습니다.', error: '상품 목록을 불러오지 못했습니다.' };

/** KOSAF ProductTable — Source-derived from 통합검색_테이블 1:97566: 2-level grouped header on #F7F7F7 (50+50), dense rows, 구매하기 link (#0047ED underline), heart/cart, disabled (sold-out) row greyed.
 *  1.4.0 web refinement (reference: Mobbin table): 상품명 left, numeric columns right + tabular-nums (numericAlign), optional sort buttons (onSort),
 *  row selection (selectable), and loading/empty/error states. Header labels/columns/heights unchanged.
 *  device="mobile" collapses rows into stacked TableRow-style blocks (50px rhythm). */
export function ProductTable({ rows = [], columns = PRODUCT_TABLE_COLUMNS, device = 'desktop', onBuy, onLike, onCart, highlightFirst = true, numericAlign = 'right', sort, onSort, selectable, selectedKeys = [], onSelectChange, rowKey = (r) => r.no, state = 'ready', emptyMessage, errorMessage, onRetry, style }) {
  const isSel = (r) => selectedKeys.includes(rowKey(r));
  const toggleRow = (r) => { const k = rowKey(r); onSelectChange && onSelectChange(isSel(r) ? selectedKeys.filter((x) => x !== k) : selectedKeys.concat(k)); };
  const status = state !== 'ready' ? state : rows.length === 0 ? 'empty' : 'ready';
  const stateBox = (h) => (
    <div role={status === 'error' ? 'alert' : 'status'} style={{ minHeight: h, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, fontSize: 16, color: 'var(--kosaf-color-text-secondary)' }}>
      <span>{status === 'empty' ? emptyMessage || MSG.empty : status === 'error' ? errorMessage || MSG.error : MSG.loading}</span>
      {status === 'error' && onRetry ? <button type="button" onClick={onRetry} style={{ height: 34, padding: '0 14px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 3, background: '#fff', fontFamily: F, fontSize: 14, fontWeight: 500, color: 'var(--kosaf-color-text-primary)', cursor: 'pointer' }}>다시 시도</button> : null}
    </div>
  );
  if (device === 'mobile') {
    if (status !== 'ready') return <div style={{ fontFamily: F, borderTop: '1px solid var(--kosaf-color-border-default)', borderBottom: '1px solid var(--kosaf-color-border-default)', ...style }}>{stateBox(160)}</div>;
    return (
      <div role="list" style={{ fontFamily: F, borderTop: '1px solid var(--kosaf-color-border-default)', ...style }}>
        {rows.map((r, i) => (
          <div role="listitem" key={i} style={{ padding: '14px 16px', borderBottom: '1px solid var(--kosaf-color-border-default)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '6px 12px', opacity: r.disabled ? 0.4 : 1, background: isSel(r) ? 'var(--kosaf-color-surface-brand-soft)' : undefined }}>
            <div style={{ fontSize: 14, fontWeight: 500, wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>{r.name}</div>
            <div style={{ fontSize: 14, fontWeight: 700, textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{r.price}</div>
            <div style={{ fontSize: 12, color: 'var(--kosaf-color-text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{[r.deal, r.producer, r.qty, r.region].filter(Boolean).join(' · ')}</div>
            <button type="button" disabled={r.disabled} onClick={() => onBuy && onBuy(r)} style={{ justifySelf: 'end', minHeight: 24, background: 'none', border: 0, padding: 0, color: 'var(--kosaf-color-state-focus)', textDecoration: 'underline', fontFamily: F, fontSize: 13, cursor: 'pointer' }}>구매하기</button>
          </div>
        ))}
      </div>
    );
  }
  const cols = selectable ? [{ key: '__sel', label: '선택', width: 48 }].concat(columns) : columns;
  const groups = [];
  cols.forEach((c) => { const last = groups[groups.length - 1]; if (c.group && last && last.group === c.group) last.span++; else groups.push({ group: c.group, span: 1, col: c }); });
  const th = { background: 'var(--kosaf-color-bg-subtle)', fontSize: 14, fontWeight: 500, lineHeight: '20px', padding: '0 6px', whiteSpace: 'pre-line', borderBottom: '1px solid var(--kosaf-color-border-default)', borderLeft: '1px solid var(--kosaf-color-border-default)', color: 'var(--kosaf-color-text-primary)' };
  const allOn = selectable && rows.length > 0 && rows.filter((r) => !r.disabled).every(isSel);
  const head = (c) => {
    if (c.key === '__sel') return <label style={{ display: 'inline-flex', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><input type="checkbox" checked={allOn} onChange={() => onSelectChange && onSelectChange(allOn ? [] : rows.filter((r) => !r.disabled).map(rowKey))} style={{ width: 20, height: 20, accentColor: 'var(--kosaf-color-action-primary)', margin: 0 }} /><span style={srOnly}>전체 선택</span></label>;
    if (!(onSort && c.sortable)) return c.label;
    const on = sort && sort.key === c.key;
    const next = on && sort.dir === 'asc' ? 'desc' : 'asc';
    return <button type="button" onClick={() => onSort({ key: c.key, dir: next })} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, minHeight: 36, padding: '0 4px', background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: 14, fontWeight: on ? 700 : 500, lineHeight: '20px', whiteSpace: 'pre-line', color: on ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{c.label}<span aria-hidden="true" style={{ fontSize: 10, color: on ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-disabled)' }}>{on && sort.dir === 'asc' ? '▲' : '▼'}</span></button>;
  };
  const ariaSort = (c) => (onSort && c.sortable ? (sort && sort.key === c.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined);
  const align = (c) => (c.key === 'name' ? 'left' : c.numeric ? numericAlign : 'center');
  return (
    <div style={{ width: '100%', overflowX: 'auto', ...style }}>
      <table aria-busy={status === 'loading' || undefined} style={{ width: '100%', minWidth: cols.reduce((s, c) => s + c.width, 0), borderCollapse: 'collapse', tableLayout: 'fixed', fontFamily: F, fontVariantNumeric: 'tabular-nums', textAlign: 'center', borderTop: '2px solid var(--kosaf-color-border-default)' }}>
        <colgroup>{cols.map((c) => <col key={c.key} style={{ width: c.width }} />)}</colgroup>
        <thead>
          <tr style={{ height: 50 }}>{groups.map((g, i) => g.group ? <th key={i} colSpan={g.span} scope="colgroup" style={{ ...th, borderLeft: i ? th.borderLeft : 0 }}>{g.group}</th> : <th key={i} rowSpan={2} scope="col" aria-sort={ariaSort(g.col)} style={{ ...th, borderLeft: i ? th.borderLeft : 0 }}>{head(g.col)}</th>)}</tr>
          <tr style={{ height: 50 }}>{cols.filter((c) => c.group).map((c) => <th key={c.key} scope="col" aria-sort={ariaSort(c)} style={th}>{head(c)}</th>)}</tr>
        </thead>
        <tbody>
          {status !== 'ready' ? <tr><td colSpan={cols.length} style={{ padding: 0, borderBottom: '1px solid var(--kosaf-color-border-subtle)' }}>{stateBox(200)}</td></tr> : rows.map((r, i) => {
            const bold = highlightFirst && i === 0;
            const sel = selectable && isSel(r);
            return (
              <tr key={i} aria-selected={selectable ? sel : undefined} style={{ height: 100, borderBottom: '1px solid var(--kosaf-color-border-subtle)', background: sel ? 'var(--kosaf-color-surface-brand-soft)' : undefined, color: r.disabled ? 'var(--kosaf-color-border-default)' : 'var(--kosaf-color-text-primary)', fontSize: 14, fontWeight: bold ? 700 : 400 }}>
                {cols.map((c) => {
                  let v = r[c.key];
                  if (c.key === '__sel') v = <label style={{ display: 'inline-flex', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', cursor: r.disabled ? 'not-allowed' : 'pointer' }}><input type="checkbox" disabled={r.disabled} checked={sel} onChange={() => toggleRow(r)} style={{ width: 20, height: 20, accentColor: 'var(--kosaf-color-action-primary)', margin: 0 }} /><span style={srOnly}>{r.name} 선택</span></label>;
                  if (c.key === 'price') v = <span style={{ fontSize: v && v !== '-' ? 18 : 14 }}>{v}</span>;
                  if (c.key === 'qty' && r.remain !== undefined) v = <>{r.qty}<br /><span style={{ color: r.disabled ? 'inherit' : r.deal === '정가' ? 'var(--kosaf-color-action-danger)' : 'inherit' }}>({r.remain})</span></>;
                  if (c.key === 'buy') v = <button type="button" disabled={r.disabled} onClick={() => onBuy && onBuy(r)} style={{ minHeight: 32, background: 'none', border: 0, padding: 0, fontFamily: F, fontSize: 14, fontWeight: 500, color: r.disabled ? 'inherit' : 'var(--kosaf-color-state-focus)', textDecoration: 'underline', cursor: r.disabled ? 'not-allowed' : 'pointer' }}>구매하기</button>;
                  if (c.key === 'manage') v = <span style={{ display: 'inline-flex', gap: 4, opacity: r.disabled ? 0.3 : 1 }}><button type="button" aria-label={'관심상품 ' + (r.name || '')} aria-pressed={!!r.liked} onClick={() => onLike && onLike(r)} style={{ width: 32, height: 32, background: 'none', border: 0, padding: 0, cursor: 'pointer', lineHeight: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="heart" size={20} style={{ filter: r.liked ? 'none' : 'grayscale(1) brightness(1.6)' }} /></button><button type="button" aria-label={'장바구니 담기 ' + (r.name || '')} onClick={() => onCart && onCart(r)} style={{ width: 32, height: 32, background: 'none', border: 0, padding: 0, cursor: 'pointer', lineHeight: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="cart" size={20} /></button></span>;
                  const a = align(c);
                  return <td key={c.key} style={{ padding: a === 'center' ? '0 6px' : '0 12px', textAlign: a, whiteSpace: 'pre-line', wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
