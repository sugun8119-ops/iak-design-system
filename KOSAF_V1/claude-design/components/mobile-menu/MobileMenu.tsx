import React from 'react';
import { Icon } from '../icon/Icon.tsx';

const F = 'var(--kosaf-font)';
const SECTIONS = [
  { label: '부류별', items: ['과실류', '채소류', '곡물류'] },
  { label: '거래방식별', items: ['정가거래', '입찰거래', '역경매'] },
  { label: '판매유형별', items: ['위탁', '매수', '직접판매'] },
  { label: '도매시장별', items: ['서울가락', '서울강서', '수원', '안양'] },
];
const QUICK = [{ label: '홈' }, { label: '거래관리' }, { label: '주문관리' }, { label: '관심목록', icon: 'heart' }, { label: 'Q&A' }, { label: '회원 정보 관리' }];

export function CloseX({ size = 18, color = 'var(--kosaf-src-text-strong)' }) {
  return <span aria-hidden="true" style={{ position: 'relative', display: 'inline-block', width: size, height: size }}>{[45, -45].map((d) => <span key={d} style={{ position: 'absolute', left: -2, top: size / 2 - 1, width: size + 4, height: 2, background: color, transform: 'rotate(' + d + 'deg)' }}></span>)}</span>;
}

/** KOSAF MobileMenu — Source-derived from 모바일 메뉴 1:93205 (390×845). Accordion sections, quick-menu grid, footer links. */
export function MobileMenu({ sections = SECTIONS, quick = QUICK, defaultOpen = 1, shopLabel = '입점 판매샵 목록', bottomLinks = ['마이페이지', '고객센터', '로그아웃'], onClose, onSelect, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const ref = React.useRef(null);
  React.useEffect(() => { const k = (e) => { if (e.key === 'Escape' && onClose) onClose(); }; window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);
  const row = { boxSizing: 'border-box', width: '100%', minHeight: 73, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', background: 'none', border: 0, borderBottom: '1px solid var(--kosaf-color-border-default)', cursor: 'pointer', fontFamily: F, fontSize: 20, lineHeight: '30px', color: 'var(--kosaf-src-text-strong)', textAlign: 'left' };
  return (
    <nav ref={ref} aria-label="전체메뉴" style={{ width: '100%', maxWidth: 391, background: '#fff', fontFamily: F, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 75, padding: '0 20px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
        <span style={{ fontSize: 24, fontWeight: 700, lineHeight: '33px' }}>전체메뉴</span>
        <button aria-label="메뉴 닫기" onClick={onClose} style={{ width: 44, height: 44, marginRight: -10, background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><CloseX /></button>
      </div>
      {sections.map((s, i) => {
        const on = open === i;
        const id = 'kmm-' + i;
        return (
          <div key={s.label}>
            <button style={{ ...row, borderBottom: on ? 0 : row.borderBottom }} aria-expanded={on} aria-controls={id} onClick={() => setOpen(on ? -1 : i)}>
              {s.label}<Icon name="navigate" size={20} rotate={on ? 90 : -90} />
            </button>
            {on ? (
              <ul id={id} style={{ listStyle: 'none', margin: 0, padding: '14px 0', background: 'var(--kosaf-color-bg-subtle)', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
                {s.items.map((it) => <li key={it}><button onClick={() => onSelect && onSelect(s.label, it)} style={{ width: '100%', minHeight: 48, padding: '0 48px', background: 'none', border: 0, textAlign: 'left', cursor: 'pointer', fontFamily: F, fontSize: 16, color: 'var(--kosaf-src-text-body)' }}>{it}</button></li>)}
              </ul>
            ) : null}
          </div>
        );
      })}
      <button style={{ ...row, borderBottom: 0 }} onClick={() => onSelect && onSelect(shopLabel)}>{shopLabel}</button>
      <div style={{ height: 10, background: 'var(--kosaf-src-divider-thick)' }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {Array.from({ length: Math.ceil(quick.length / 4) * 4 }).map((_, i) => {
          const q = quick[i];
          return q ? (
            <button key={i} onClick={() => onSelect && onSelect(q.label)} style={{ height: 79, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#fff', border: 0, borderRight: i % 4 < 3 ? '1px solid var(--kosaf-gray-100)' : 0, borderBottom: '1px solid var(--kosaf-gray-100)', cursor: 'pointer', fontFamily: F, fontSize: 13, color: 'var(--kosaf-src-text-strong)' }}>
              {q.icon ? <Icon name={q.icon} size={30} /> : <span aria-hidden="true" style={{ width: 32, height: 32, border: '1px dashed var(--kosaf-color-border-strong)', borderRadius: 3 }} title="icon slot"></span>}
              {q.label}
            </button>
          ) : <span key={i} style={{ borderRight: i % 4 < 3 ? '1px solid var(--kosaf-gray-100)' : 0, borderBottom: '1px solid var(--kosaf-gray-100)' }}></span>;
        })}
      </div>
      <div style={{ height: 12, background: 'var(--kosaf-src-divider-thick)' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, padding: '20px 0 28px' }}>
        {bottomLinks.map((b, i) => <React.Fragment key={b}>{i ? <span style={{ width: 1, height: 13, background: 'var(--kosaf-color-border-strong)' }}></span> : null}<button onClick={() => onSelect && onSelect(b)} style={{ background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: 14, color: 'var(--kosaf-color-text-secondary)' }}>{b}</button></React.Fragment>)}
      </div>
    </nav>
  );
}
