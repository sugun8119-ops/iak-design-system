import React from 'react';

const srOnly = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };
const wrap = { wordBreak: 'keep-all', overflowWrap: 'anywhere' };

/** KOSAF FormField — Source-derived from 판매자 회원가입 1:89853 form rows (label column, required "*", red error "필수항목을 입력해주세요.", 1px #DDDDDD row rule).
 *  1.4.0 web refinement: the child whose id === htmlFor receives aria-describedby (help + error ids) and aria-invalid; help sits above error so rows don't jump order. */
export function FormField({ label, required, error, help, htmlFor: forProp, layout = 'horizontal', labelWidth = 320, children, style }) {
  const h = layout === 'horizontal';
  // 1.5.2: without htmlFor, the first element child lacking an id gets an auto id so label-for / describedby still connect (backward compatible).
  const auto = 'kff' + React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const arr = React.Children.toArray(children);
  const firstIdx = arr.findIndex((c) => React.isValidElement(c));
  const firstEl = firstIdx >= 0 ? arr[firstIdx] : null;
  const autoIdx = !forProp && firstEl ? firstIdx : -1;
  const htmlFor = forProp || (firstEl && firstEl.props.id) || (autoIdx >= 0 ? auto : undefined);
  const helpId = htmlFor && help ? htmlFor + '-help' : undefined;
  const errId = htmlFor && error ? htmlFor + '-error' : undefined;
  const desc = [helpId, errId].filter(Boolean).join(' ') || undefined;
  let idx = -1;
  const kids = React.Children.map(children, (c) => {
    if (React.isValidElement(c) || typeof c === 'string' || typeof c === 'number') idx++;
    if (!htmlFor || !React.isValidElement(c)) return c;
    const isTarget = c.props.id === htmlFor || (autoIdx >= 0 && idx === autoIdx);
    if (!isTarget) return c;
    const own = c.props['aria-describedby'];
    return React.cloneElement(c, { id: htmlFor, 'aria-describedby': [own, desc].filter(Boolean).join(' ') || undefined, 'aria-invalid': error ? true : c.props['aria-invalid'] });
  });
  return (
    <div role="group" aria-labelledby={htmlFor ? htmlFor + '-label' : undefined} style={{ display: 'flex', flexDirection: h ? 'row' : 'column', gap: h ? 0 : 8, padding: h ? '16px 0' : '14px 0', borderBottom: '1px solid var(--kosaf-color-border-default)', fontFamily: 'var(--kosaf-font)', ...style }}>
      <label id={htmlFor ? htmlFor + '-label' : undefined} htmlFor={htmlFor} style={{ flex: h ? '0 0 ' + labelWidth + 'px' : undefined, boxSizing: 'border-box', paddingRight: h ? 20 : 0, display: 'block', paddingTop: h ? 11 : 0, fontSize: 16, fontWeight: 500, lineHeight: '24px', color: 'var(--kosaf-color-text-primary)', ...wrap }}>
        {label}{required ? <span aria-hidden="true" style={{ color: 'var(--kosaf-color-action-danger)', marginLeft: 4 }}>*</span> : null}{required ? <span style={srOnly}>(필수)</span> : null}
      </label>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, minWidth: 0 }}>{kids}</div>
        {help ? <span id={helpId} style={{ fontSize: 13, lineHeight: '18px', color: 'var(--kosaf-color-text-secondary)', ...wrap }}>{help}</span> : null}
        {error ? <span id={errId} style={{ fontSize: 14, lineHeight: '20px', color: 'var(--kosaf-color-action-danger)', ...wrap }}>{error}</span> : null}
      </div>
    </div>
  );
}
