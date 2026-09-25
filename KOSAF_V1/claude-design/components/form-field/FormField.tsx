import React from 'react';

/** KOSAF FormField — Source-derived from 판매자 회원가입 1:89853 form rows (label column, required "*", red error "필수항목을 입력해주세요.", 1px #DDDDDD row rule). */
export function FormField({ label, required, error, help, htmlFor, layout = 'horizontal', labelWidth = 320, children, style }) {
  const h = layout === 'horizontal';
  return (
    <div role="group" aria-labelledby={htmlFor ? htmlFor + '-label' : undefined} style={{ display: 'flex', flexDirection: h ? 'row' : 'column', gap: h ? 0 : 8, padding: h ? '16px 0' : '14px 0', borderBottom: '1px solid var(--kosaf-color-border-default)', fontFamily: 'var(--kosaf-font)', ...style }}>
      <label id={htmlFor ? htmlFor + '-label' : undefined} htmlFor={htmlFor} style={{ flex: h ? '0 0 ' + labelWidth + 'px' : undefined, display: 'flex', alignItems: h ? 'flex-start' : 'center', paddingTop: h ? 11 : 0, fontSize: 16, fontWeight: 500, lineHeight: '24px', color: 'var(--kosaf-color-text-primary)' }}>
        {label}{required ? <span aria-hidden="true" style={{ color: 'var(--kosaf-color-action-danger)', marginLeft: 4 }}>*</span> : null}{required ? <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>(필수)</span> : null}
      </label>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>{children}</div>
        {error ? <span role="alert" style={{ fontSize: 14, lineHeight: '20px', color: 'var(--kosaf-color-action-danger)' }}>{error}</span> : null}
        {help ? <span style={{ fontSize: 13, lineHeight: '18px', color: 'var(--kosaf-color-text-secondary)' }}>{help}</span> : null}
      </div>
    </div>
  );
}
