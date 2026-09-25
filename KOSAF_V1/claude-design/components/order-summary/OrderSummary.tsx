import React from 'react';

const F = 'var(--kosaf-font)';

/** KOSAF OrderSummary — Source-derived. vertical = mobile 총 결제 예정금액 box (1:104139: r10 #DDDDDD, green bold total, 총 주문금액/부가세/운임 rows).
 *  horizontal = PC Result_Payment bar (1:103657: 1596×105, 총 주문금액 + 운임 + 부가세 = 총 결제 예정금액). */
export function OrderSummary({ title = '총 결제 예정금액', total = '1,300,000원', rows = [['총 주문금액', '1,300,000원'], ['부가세', '0원'], ['운임', '0원']], layout = 'vertical', style }) {
  if (layout === 'horizontal') {
    const cell = (l, v, strong) => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: 16, color: 'var(--kosaf-color-text-secondary)' }}>{l}</span>
        <span style={{ fontSize: strong ? 30 : 24, fontWeight: 700, color: strong ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{v}</span>
      </div>
    );
    const op = (c) => <span aria-hidden="true" style={{ fontSize: 28, color: 'var(--kosaf-color-text-muted)' }}>{c}</span>;
    return (
      <div style={{ boxSizing: 'border-box', width: '100%', minHeight: 105, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, padding: '16px 30px', background: 'var(--kosaf-color-bg-subtle)', border: '1px solid var(--kosaf-color-border-default)', fontFamily: F, ...style }}>
        {rows.map(([l, v], i) => <React.Fragment key={l}>{i ? op('+') : null}{cell(l, v)}</React.Fragment>)}
        {op('=')}{cell(title, total, true)}
      </div>
    );
  }
  return (
    <section aria-label={title} style={{ boxSizing: 'border-box', padding: 20, border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, background: '#fff', fontFamily: F, ...style }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, paddingBottom: 14 }}>
        <span style={{ fontSize: 18, fontWeight: 500, color: 'var(--kosaf-color-text-primary)' }}>{title}</span>
        <strong style={{ fontSize: 26, fontWeight: 700, color: 'var(--kosaf-color-action-primary)' }}>{total}</strong>
      </div>
      <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 8, fontSize: 14 }}>
        {rows.map(([l, v]) => <React.Fragment key={l}><dt style={{ color: 'var(--kosaf-color-text-secondary)' }}>{l}</dt><dd style={{ margin: 0, fontSize: 16, color: 'var(--kosaf-color-text-primary)' }}>{v}</dd></React.Fragment>)}
      </dl>
    </section>
  );
}
