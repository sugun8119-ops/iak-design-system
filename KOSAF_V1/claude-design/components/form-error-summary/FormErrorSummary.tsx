import React from 'react';
import { Button } from '../button/Button.jsx';

const F = 'var(--kosaf-font)';

/** KOSAF FormErrorSummary — KOSAF extension (1.4.0, reference: Mobbin error-message). Separates field errors (list of links to fields)
 *  from submit failure (server/network, retry). Also loading / success status lines. Border-only, no shadow, radius 5. */
export function FormErrorSummary({ status = 'error', errors = [], title, message, onRetry, retryLabel = '다시 시도', focusKey, focusTarget = 'summary', device = 'desktop', style }) {
  const ref = React.useRef(null);
  const m = device === 'mobile';
  React.useEffect(() => {
    if (focusKey === undefined || focusKey === null) return;
    if (status === 'error' && errors.length) {
      if (focusTarget === 'firstField') { const el = document.getElementById(errors[0].id); if (el) { el.focus(); return; } }
      if (focusTarget !== 'none' && ref.current) ref.current.focus();
    } else if (status === 'submitError' && ref.current && focusTarget !== 'none') ref.current.focus();
  }, [focusKey]);
  if (status === 'error' && !errors.length) return null;
  if (!status || status === 'idle') return null;
  const tone = { error: 'var(--kosaf-color-action-danger)', submitError: 'var(--kosaf-color-action-danger)', loading: 'var(--kosaf-color-border-default)', success: 'var(--kosaf-color-action-positive)' }[status];
  const heading = title || { error: '입력 내용을 확인해주세요. (' + errors.length + '개 항목)', submitError: '신청을 완료하지 못했습니다.', loading: '처리 중입니다…', success: '정상적으로 처리되었습니다.' }[status];
  const live = status === 'loading' || status === 'success' ? { role: 'status', 'aria-live': 'polite' } : { role: 'alert' };
  const go = (id) => (e) => { e.preventDefault(); const el = document.getElementById(id); if (el) el.focus(); };
  return (
    <div ref={ref} tabIndex={-1} {...live} style={{ boxSizing: 'border-box', width: '100%', padding: m ? '14px 16px' : '16px 20px', border: '1px solid ' + tone, borderRadius: 'var(--kosaf-radius-5)', background: status === 'loading' ? 'var(--kosaf-color-bg-subtle)' : '#fff', fontFamily: F, outline: 'none', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <strong style={{ flex: 1, minWidth: 0, fontSize: m ? 15 : 16, lineHeight: '24px', fontWeight: 500, color: status === 'loading' ? 'var(--kosaf-color-text-secondary)' : status === 'success' ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-action-danger)', wordBreak: 'keep-all' }}>{heading}</strong>
        {status === 'submitError' && onRetry ? <Button variant="secondary" size={34} onClick={onRetry} style={{ padding: '0 14px' }}>{retryLabel}</Button> : null}
      </div>
      {message ? <p style={{ margin: '4px 0 0', fontSize: 14, lineHeight: '20px', color: 'var(--kosaf-color-text-secondary)', wordBreak: 'keep-all', overflowWrap: 'anywhere' }}>{message}</p> : null}
      {status === 'error' ? (
        <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {errors.map((e) => <li key={e.id} style={{ fontSize: 14, lineHeight: '20px' }}><a href={'#' + e.id} onClick={go(e.id)} style={{ color: 'var(--kosaf-color-text-primary)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{e.label}</a><span style={{ color: 'var(--kosaf-color-text-secondary)' }}> — {e.message}</span></li>)}
        </ul>
      ) : null}
    </div>
  );
}
