import React from 'react';

/** KOSAF MetricCard (SmallDataCard) — Source-derived from Card_01 1:87886 (167×227 r10 white; 70px #02AC5A icon circle; label 16/500 #333; unit 12 #878787; value 20/500). */
export function MetricCard({ label = '여신금액', unit = '(만원)', value = '10,000', icon, width = 167, onClick, style }) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag onClick={onClick} style={{ boxSizing: 'border-box', width, maxWidth: '100%', minHeight: 227, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, background: '#fff', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, fontFamily: 'var(--kosaf-font)', cursor: onClick ? 'pointer' : 'default', overflow: 'hidden', textAlign: 'center' }}>
      <span aria-hidden="true" style={{ width: 70, height: 70, marginTop: 23, borderRadius: 35, background: 'var(--kosaf-src-metric-icon)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <span style={{ marginTop: 10, fontSize: 16, fontWeight: 500, lineHeight: '26px', color: 'var(--kosaf-color-text-primary)' }}>{label}</span>
      {unit ? <span style={{ fontSize: 12, lineHeight: '16px', color: '#878787' }}>{unit}</span> : null}
      <span style={{ marginTop: 'auto', width: '100%', borderTop: '1px solid var(--kosaf-color-border-default)', padding: '14px 0', fontSize: 20, fontWeight: 500, lineHeight: '27px', fontVariantNumeric: 'tabular-nums', color: 'var(--kosaf-src-text-strong)', ...style }}>{value}</span>
    </Tag>
  );
}
