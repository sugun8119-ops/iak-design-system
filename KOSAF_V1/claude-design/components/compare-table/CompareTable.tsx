import React from 'react';
import { ImageSlot } from '../product-card/ProductCard.tsx';

const F = 'var(--kosaf-font)';

/** KOSAF CompareTable — Source-derived from 상품 비교하기 1:90204 (modal 1004 wide: thumbnails row 780×270, 결제정보 900×272, actions 260×45). Attributes as rows, products as columns. */
export function CompareTable({ products = [], rows = [], highlightDiff = true, style }) {
  const diff = (key) => highlightDiff && new Set(products.map((p) => String(p[key] ?? ''))).size > 1;
  return (
    <div style={{ width: '100%', overflowX: 'auto', fontFamily: F, ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', minWidth: 160 + products.length * 200 }}>
        <colgroup><col style={{ width: 160 }} />{products.map((p, i) => <col key={i} />)}</colgroup>
        <thead>
          <tr>
            <th scope="col" style={{ borderBottom: '1px solid var(--kosaf-color-border-default)' }}><span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>항목</span></th>
            {products.map((p, i) => (
              <th key={i} scope="col" style={{ padding: '0 10px 16px', verticalAlign: 'top', borderBottom: '1px solid var(--kosaf-color-border-default)', fontWeight: 500, fontSize: 16, textAlign: 'left' }}>
                <ImageSlot src={p.imageSrc} alt={p.name} style={{ maxWidth: 200, marginBottom: 10 }} />
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key}>
              <th scope="row" style={{ height: 60, padding: '0 20px', textAlign: 'left', background: 'var(--kosaf-color-bg-subtle)', borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 16, fontWeight: 500 }}>{r.label}</th>
              {products.map((p, i) => <td key={i} style={{ padding: '0 16px', borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 16, fontWeight: diff(r.key) ? 700 : 400, color: diff(r.key) ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{p[r.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
