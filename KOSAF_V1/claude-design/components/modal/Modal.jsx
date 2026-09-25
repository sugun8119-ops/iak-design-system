import React from 'react';

/** KOSAF/Modal — Figma 218:639. 706×630, #FFF, 1px #DDDDDD, radius 10. Title Bold 22 at (30,28); 646×1 #DDDDDD divider at y=82. */
export function Modal({ open = true, inline, title = '상세 정보', children, footer, onClose, width = 706, height = 630, style, ...rest }) {
  React.useEffect(() => {
    if (!open || inline || !onClose) return;
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, inline, onClose]);
  if (!open) return null;
  const panel = (
    <div
      role="dialog"
      aria-modal={inline ? undefined : true}
      aria-label={typeof title === 'string' ? title : undefined}
      onClick={(e) => e.stopPropagation()}
      style={{
        boxSizing: 'border-box', display: 'flex', flexDirection: 'column', width, maxWidth: '100%', height, maxHeight: inline ? undefined : 'calc(100vh - 40px)',
        padding: '0 30px', background: 'var(--kosaf-color-surface-default)', border: '1px solid var(--kosaf-color-border-default)',
        borderRadius: 'var(--kosaf-radius-10)', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ boxSizing: 'border-box', height: 82, padding: '28px 0 0', borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 22, lineHeight: '26px', fontWeight: 700 }}>{title}</div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', padding: '20px 0', fontSize: 16, lineHeight: '24px' }}>{children}</div>
      {footer ? <div style={{ display: 'flex', justifyContent: 'center', gap: 10, padding: '0 0 30px' }}>{footer}</div> : null}
    </div>
  );
  if (inline) return panel;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, background: 'rgba(0,0,0,0.5)' }}>
      {panel}
    </div>
  );
}
