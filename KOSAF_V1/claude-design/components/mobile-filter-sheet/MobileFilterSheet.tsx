import React from 'react';
import { Button } from '../button/Button.jsx';
import { FilterPanel } from '../filter-panel/FilterPanel.tsx';

const F = 'var(--kosaf-font)';

const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])';

/** KOSAF MobileFilterSheet — KOSAF extension (1.4.0, reference: Mobbin bottom-sheet/chip). Wraps the source mobile FilterPanel (1:93119)
 *  in a bottom sheet with draft ≠ applied state: 취소 / Esc / backdrop → discard draft; 초기화 → clear draft; 적용 → onApply(draft).
 *  Focus trap + return, body scroll lock, scrolling body with fixed apply bar. inline = no overlay (for docs/cards). */
export function MobileFilterSheet({ open, value = {}, groups, onApply, onClose, count, applyLabel, title = '필터', inline, maxHeight = '88vh', style }) {
  const [draft, setDraft] = React.useState(value);
  const ref = React.useRef(null);
  const back = React.useRef(null);
  React.useEffect(() => {
    if (!open) return undefined;
    setDraft(value);
    if (inline) return undefined;
    back.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => { const f = ref.current && ref.current.querySelector(FOCUSABLE); if (f) f.focus(); }, 0);
    return () => { clearTimeout(t); document.body.style.overflow = prev; const b = back.current; if (b && b.focus) b.focus(); };
  }, [open]);
  if (!open) return null;
  const cancel = () => { setDraft(value); onClose && onClose(); };
  const onKey = (e) => {
    if (e.key === 'Escape') { e.stopPropagation(); cancel(); return; }
    if (e.key !== 'Tab' || !ref.current) return;
    const els = Array.from(ref.current.querySelectorAll(FOCUSABLE));
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  const n = typeof count === 'function' ? count(draft) : count;
  const label = applyLabel || (n === undefined || n === null ? '적용' : n + '개 상품 보기');
  const sheet = (
    <div ref={ref} role="dialog" aria-modal={inline ? undefined : 'true'} aria-label={title} onKeyDown={onKey}
      style={{ boxSizing: 'border-box', width: '100%', maxWidth: 391, maxHeight: inline ? undefined : maxHeight, height: inline ? '100%' : undefined, display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: inline ? 0 : '10px 10px 0 0', overflow: 'hidden', fontFamily: F, ...style }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overscrollBehavior: 'contain' }}>
        <FilterPanel device="mobile" bare groups={groups} value={draft} onChange={setDraft} onClose={cancel} style={{ maxWidth: 'none' }} />
      </div>
      <div style={{ flex: '0 0 auto', display: 'flex', gap: 10, padding: '12px 16px', paddingBottom: 'calc(12px + env(safe-area-inset-bottom))', borderTop: '1px solid var(--kosaf-color-border-default)', background: '#fff' }}>
        <Button variant="secondary" size={50} onClick={cancel} style={{ flex: '0 0 96px' }}>취소</Button>
        <Button size={50} onClick={() => onApply && onApply(draft)} style={{ flex: 1, fontVariantNumeric: 'tabular-nums' }} disabled={n === 0}>{n === 0 ? '조건에 맞는 상품 없음' : label}</Button>
      </div>
    </div>
  );
  if (inline) return sheet;
  return (
    <div onMouseDown={(e) => { if (e.target === e.currentTarget) cancel(); }} style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' }}>{sheet}</div>
  );
}
