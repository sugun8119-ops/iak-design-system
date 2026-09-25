import React from 'react';

const F = 'var(--kosaf-font)';

/** KOSAF AlertDialog — Source-derived from 휴면 계정 안내 1:103625 (570×686 r10, 59px title bar white 20/500, 90px icon circle, 18px message, #F7FEF8 info box, 158×45 r2 buttons: primary #059B00 / secondary #A0A0A0).
 *  Also covers 비밀번호 변경 안내 1:93985, 심사안내 1:105606. Focus moves to the primary action; Esc and backdrop call onClose; Tab is trapped. */
export function AlertDialog({ open = true, inline, title = '휴면 계정 안내', icon, message, details = [], primaryLabel = '확인', secondaryLabel, onPrimary, onSecondary, onClose, width = 570, style }) {
  const panel = React.useRef(null); const first = React.useRef(null);
  React.useEffect(() => {
    if (!open || inline) return;
    first.current && first.current.focus();
    const k = (e) => {
      if (e.key === 'Escape' && onClose) onClose();
      if (e.key === 'Tab' && panel.current) {
        const f = panel.current.querySelectorAll('button'); if (!f.length) return;
        const a = f[0], b = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus(); } else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus(); }
      }
    };
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open, inline, onClose]);
  if (!open) return null;
  const btn = (bg) => ({ width: 158, height: 45, border: 0, borderRadius: 2, background: bg, color: '#fff', fontFamily: F, fontSize: 18, fontWeight: 500, cursor: 'pointer' });
  const body = (
    <div ref={panel} role="alertdialog" aria-modal={inline ? undefined : true} aria-labelledby="kad-title" onClick={(e) => e.stopPropagation()} style={{ boxSizing: 'border-box', width, maxWidth: '100%', background: '#fff', borderRadius: 10, overflow: 'hidden', fontFamily: F, color: 'var(--kosaf-src-text-strong)', ...style }}>
      <div style={{ height: 59, display: 'flex', alignItems: 'center', padding: '0 26px', background: 'var(--kosaf-color-action-primary)' }}><h2 id="kad-title" style={{ margin: 0, fontSize: 20, fontWeight: 500, lineHeight: '20px', color: '#fff' }}>{title}</h2></div>
      <div style={{ padding: '50px 30px 44px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        {icon !== null ? <span aria-hidden="true" style={{ width: 90, height: 90, borderRadius: 45, background: 'var(--kosaf-color-action-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span> : null}
        {message ? <div style={{ width: '100%', maxWidth: 457, fontSize: 18, lineHeight: '26px', textAlign: 'center', whiteSpace: 'pre-line' }}>{message}</div> : null}
        {details.length ? <dl style={{ boxSizing: 'border-box', width: '100%', margin: 0, padding: '20px 30px', background: 'var(--kosaf-src-notice-box)', display: 'grid', gridTemplateColumns: '1fr auto', rowGap: 10, fontSize: 18 }}>{details.map(([k, v], i) => <React.Fragment key={k}><dt style={{ fontWeight: 500 }}>{k}</dt><dd style={{ margin: 0, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? 'var(--kosaf-color-action-primary)' : 'inherit' }}>{v}</dd></React.Fragment>)}</dl> : null}
        <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
          <button ref={first} type="button" onClick={onPrimary} style={btn('var(--kosaf-color-action-primary)')}>{primaryLabel}</button>
          {secondaryLabel ? <button type="button" onClick={onSecondary || onClose} style={btn('var(--kosaf-color-text-disabled)')}>{secondaryLabel}</button> : null}
        </div>
      </div>
    </div>
  );
  if (inline) return body;
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(0,0,0,.5)' }}>{body}</div>;
}
