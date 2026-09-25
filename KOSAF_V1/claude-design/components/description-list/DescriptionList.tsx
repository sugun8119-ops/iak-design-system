import React from 'react';

/** KOSAF DescriptionList — Source-derived from List_table rows (1:94245 / 1:94233: 951×70, label cell 293×70 #F7F7F7, label 18/500 inset 30) and mobile 상품상세 info table (1:87593). */
export function DescriptionList({ items = [], device = 'desktop', labelWidth, style }) {
  const m = device === 'mobile';
  const lw = labelWidth ?? (m ? 124 : 293);
  return (
    <dl style={{ display: 'grid', gridTemplateColumns: lw + 'px 1fr', margin: 0, borderTop: '1px solid var(--kosaf-color-border-default)', fontFamily: 'var(--kosaf-font)', ...style }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <dt style={{ boxSizing: 'border-box', minHeight: m ? 50 : 70, display: 'flex', alignItems: 'center', padding: m ? '10px 12px 10px 16px' : '0 30px', wordBreak: 'keep-all', background: 'var(--kosaf-color-bg-subtle)', borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: m ? 14 : 18, fontWeight: 500, lineHeight: m ? '20px' : '24px', color: 'var(--kosaf-src-text-strong)', whiteSpace: 'pre-line' }}>
            {it.required ? <span style={{ color: 'var(--kosaf-color-action-danger)', marginRight: 4 }}>*</span> : null}{it.label}
          </dt>
          <dd style={{ boxSizing: 'border-box', margin: 0, minHeight: m ? 50 : 70, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', padding: m ? '10px 16px' : '10px 30px', borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: m ? 14 : 18, lineHeight: m ? '20px' : '26px', fontVariantNumeric: 'tabular-nums', minWidth: 0, color: 'var(--kosaf-color-text-primary)' }}>{it.value}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
