import React from 'react';
import { SegmentedControl } from '../segmented-control/SegmentedControl.tsx';

const F = 'var(--kosaf-font)';
/** Illustrative only — the source popups (1:86445 graph, 1:86729 table) do not provide numeric series. */
export const EXAMPLE_PRICE_SERIES = [
  { date: '03-17', price: 38000 }, { date: '03-18', price: 39500 }, { date: '03-19', price: 37200 }, { date: '03-20', price: 41000 },
  { date: '03-21', price: 40200 }, { date: '03-22', price: 42500 }, { date: '03-23', price: 40000 },
];

/** KOSAF PriceTrend — Source-derived frame from 품종 시세동향보기 (graph 1:86445 / 1:1251:1314, table 1:86729, Popup_graph 706×630). Chart/table toggle. Values are EXAMPLE DATA. */
export function PriceTrend({ data = EXAMPLE_PRICE_SERIES, view, defaultView = '그래프', onView, unit = '원', example = true, width = 646, height = 300, style }) {
  const [inner, setInner] = React.useState(defaultView);
  const v = view ?? inner;
  const ps = data.map((d) => d.price);
  const lo = Math.min(...ps), hi = Math.max(...ps), pad = 36;
  const x = (i) => pad + (i * (width - pad * 2)) / Math.max(1, data.length - 1);
  const y = (p) => height - pad - ((p - lo) / Math.max(1, hi - lo)) * (height - pad * 2);
  const fmt = (n) => n.toLocaleString('ko-KR');
  return (
    <figure style={{ margin: 0, width, maxWidth: '100%', fontFamily: F, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <SegmentedControl options={['그래프', '테이블']} value={v} onChange={(nv) => { setInner(nv); onView && onView(nv); }} height={36} aria-label="시세 보기 방식" />
        {example ? <span style={{ fontSize: 12, color: 'var(--kosaf-color-action-danger)', border: '1px solid currentColor', borderRadius: 3, padding: '1px 6px' }}>예시 데이터</span> : null}
      </div>
      {v === '그래프' ? (
        <svg role="img" aria-label={'가격 추이 ' + data.map((d) => d.date + ' ' + fmt(d.price) + unit).join(', ')} viewBox={'0 0 ' + width + ' ' + height} width="100%" style={{ display: 'block', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 5 }}>
          {[0, 1, 2, 3].map((i) => <line key={i} x1={pad} x2={width - pad} y1={pad + (i * (height - pad * 2)) / 3} y2={pad + (i * (height - pad * 2)) / 3} stroke="var(--kosaf-gray-100)" />)}
          <polyline fill="none" stroke="var(--kosaf-color-action-primary)" strokeWidth="2" points={data.map((d, i) => x(i) + ',' + y(d.price)).join(' ')} />
          {data.map((d, i) => <g key={i}><circle cx={x(i)} cy={y(d.price)} r="4" fill="#fff" stroke="var(--kosaf-color-action-primary)" strokeWidth="2" /><text x={x(i)} y={height - 12} textAnchor="middle" fontSize="12" fill="var(--kosaf-color-text-muted)">{d.date}</text></g>)}
        </svg>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, textAlign: 'center' }}>
          <thead><tr>{['일자', '가격(' + unit + ')', '전일대비'].map((h) => <th key={h} scope="col" style={{ height: 44, background: 'var(--kosaf-color-bg-subtle)', borderTop: '1px solid var(--kosaf-color-border-default)', borderBottom: '1px solid var(--kosaf-color-border-default)', fontWeight: 500 }}>{h}</th>)}</tr></thead>
          <tbody>{data.map((d, i) => { const diff = i ? d.price - data[i - 1].price : 0; return <tr key={i} style={{ height: 44, borderBottom: '1px solid var(--kosaf-gray-100)' }}><td>{d.date}</td><td>{fmt(d.price)}</td><td style={{ color: diff > 0 ? 'var(--kosaf-color-action-danger)' : diff < 0 ? 'var(--kosaf-color-state-focus)' : 'inherit' }}>{i ? (diff > 0 ? '▲ ' : diff < 0 ? '▼ ' : '') + fmt(Math.abs(diff)) : '-'}</td></tr>; })}</tbody>
        </table>
      )}
    </figure>
  );
}
