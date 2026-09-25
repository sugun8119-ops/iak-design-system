import React from 'react';
import { Checkbox } from '../checkbox/Checkbox.jsx';
import { FilterChip } from '../filter-chip/FilterChip.tsx';
import { Icon } from '../icon/Icon.tsx';
import { CloseX } from '../mobile-menu/MobileMenu.tsx';

const F = 'var(--kosaf-font)';
export const DEFAULT_FILTER_GROUPS = [
  { key: 'sort', label: '구분', options: ['농산물', '축산물', '임산물', '수산물'] },
  { key: 'class', label: '부류', options: ['사과', '배', '포도', '복숭아'] },
  { key: 'item', label: '품목', options: ['사과', '배', '포도', '복숭아'] },
  { key: 'variety', label: '품종', options: ['사과', '홍옥', '골덴', '후지', '아오리'] },
  { key: 'seller', label: '판매자 유형', options: ['위탁', '매수', '직접판매'], chips: true },
  { key: 'deal', label: '거래방식', options: ['정가', '입찰', '역경매'], chips: true },
  { key: 'market', label: '도매시장', options: ['서울가락', '서울강서', '수원', '안양'], chips: true },
];

/** KOSAF FilterPanel — Source-derived. desktop = 통합검색 category panel (1:97566 / 1:98635): green label column, 4 list columns, chip rows, 전체해제 + applied tags, 닫기.
 *  mobile = 통합검색_필터 1:93119 (390): accordion + checkbox lists, 초기화 82×42 r5, summary text #0047ED. */
export function FilterPanel({ device = 'desktop', groups = DEFAULT_FILTER_GROUPS, value, defaultValue = {}, onChange, keyword, onKeyword, onSearch, onClose, onlyOnSale, onOnlyOnSale, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const sel = value !== undefined ? value : inner;
  const [open, setOpen] = React.useState(0);
  const [kw, setKw] = React.useState(keyword ?? '');
  const set = (next) => { if (value === undefined) setInner(next); onChange && onChange(next); };
  const toggle = (k, o) => { const cur = sel[k] || []; set({ ...sel, [k]: cur.includes(o) ? cur.filter((x) => x !== o) : cur.concat(o) }); };
  const reset = () => set({});
  const applied = Object.entries(sel).flatMap(([k, arr]) => (arr || []).map((o) => ({ k, o })));

  if (device === 'mobile') {
    return (
      <div role="dialog" aria-label="필터" style={{ width: '100%', maxWidth: 390, background: '#fff', fontFamily: F, ...style }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, height: 75, padding: '0 20px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>필터</span>
          <button type="button" onClick={reset} style={{ width: 82, height: 42, border: 0, borderRadius: 5, background: 'var(--kosaf-color-action-primary)', color: '#fff', fontFamily: F, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>초기화</button>
          <button type="button" aria-label="필터 닫기" onClick={onClose} style={{ marginLeft: 'auto', marginRight: -10, width: 44, height: 44, background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><CloseX size={20} /></button>
        </div>
        {groups.map((g, i) => {
          const on = open === i; const cur = sel[g.key] || [];
          return (
            <div key={g.key} style={{ borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
              <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)} style={{ width: '100%', minHeight: 72, display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px', background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: 20, color: 'var(--kosaf-src-text-strong)', textAlign: 'left' }}>
                <span style={{ flex: '0 0 auto' }}>{g.label}</span>
                <span style={{ flex: 1, textAlign: 'right', fontSize: 15, color: 'var(--kosaf-color-state-focus)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cur.join(', ')}</span>
                <Icon name="navigate" size={20} rotate={on ? 90 : -90} />
              </button>
              {on ? (
                <div style={{ background: 'var(--kosaf-color-bg-subtle)', padding: '20px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {g.options.map((o) => <Checkbox key={o} checked={cur.includes(o)} onChange={() => toggle(g.key, o)} style={{ fontSize: 16, color: 'var(--kosaf-src-text-body)' }}>{o}</Checkbox>)}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  const lists = groups.filter((g) => !g.chips);
  const chips = groups.filter((g) => g.chips);
  const labelCol = { background: 'var(--kosaf-color-action-primary)', color: '#fff', fontSize: 20, fontWeight: 500, padding: '0 24px', display: 'flex', alignItems: 'center' };
  return (
    <section aria-label="카테고리 내 검색" style={{ width: '100%', fontFamily: F, ...style }}>
      <div style={{ border: '1px solid var(--kosaf-color-border-default)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '290px 1fr' }}>
          <div style={{ ...labelCol, height: 92 }}>카테고리 내 검색</div>
          <form onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(kw); }} style={{ display: 'flex', alignItems: 'center', gap: 28, padding: '0 20px' }}>
            <input className="kosaf-field" aria-label="카테고리 내 검색어" value={kw} onChange={(e) => { setKw(e.target.value); onKeyword && onKeyword(e.target.value); }} style={{ flex: '0 1 832px', height: 48, padding: '0 16px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 3, fontFamily: F, fontSize: 18, outline: 'none' }} />
            <button type="submit" style={{ width: 90, height: 48, border: 0, borderRadius: 3, background: 'var(--kosaf-color-action-primary)', color: '#fff', fontFamily: F, fontSize: 16, fontWeight: 500, cursor: 'pointer' }}>검색</button>
            <Checkbox checked={!!onlyOnSale} onChange={onOnlyOnSale} style={{ fontSize: 18, whiteSpace: 'nowrap', flex: '0 0 auto' }}>판매중인 상품만 보기</Checkbox>
          </form>
          <div style={{ ...labelCol, gridRow: 'span 1' }}>카테고리</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + lists.length + ', 1fr)', borderTop: '1px solid var(--kosaf-color-border-default)' }}>
            {lists.map((g, i) => (
              <div key={g.key} style={{ borderLeft: i ? '1px solid var(--kosaf-color-border-default)' : 0 }}>
                <div style={{ height: 70, display: 'flex', alignItems: 'center', padding: '0 30px', background: 'var(--kosaf-color-bg-subtle)', fontSize: 20, fontWeight: 500 }}>{g.label}</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: '14px 0', height: 280, overflowY: 'auto', boxSizing: 'border-box' }}>
                  {g.options.map((o) => { const on = (sel[g.key] || []).includes(o); return <li key={o}><button type="button" aria-pressed={on} onClick={() => toggle(g.key, o)} style={{ width: '100%', minHeight: 56, padding: '0 30px', textAlign: 'left', background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: 18, fontWeight: on ? 500 : 400, color: on ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{o}</button></li>; })}
                </ul>
              </div>
            ))}
          </div>
          {chips.map((g) => (
            <React.Fragment key={g.key}>
              <div style={{ ...labelCol, height: 68 }}>{g.label}</div>
              <div role="group" aria-label={g.label} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24, padding: '0 30px', borderTop: g === chips[0] ? '1px solid var(--kosaf-color-border-default)' : 0 }}>
                {g.options.map((o) => <FilterChip key={o} selected={(sel[g.key] || []).includes(o)} onToggle={() => toggle(g.key, o)}>{o}</FilterChip>)}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, minHeight: 64, padding: '0 30px', borderTop: '1px solid var(--kosaf-color-border-default)' }}>
          <button type="button" onClick={reset} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: 18, fontWeight: 500, color: 'var(--kosaf-color-text-primary)' }}><span aria-hidden="true" style={{ fontSize: 20 }}>⟳</span>전체해제</button>
          {applied.length ? <span aria-hidden="true" style={{ width: 1, height: 18, background: 'var(--kosaf-color-border-default)' }}></span> : null}
          {applied.map(({ k, o }) => <FilterChip key={k + o} variant="removable" onRemove={() => toggle(k, o)}>{o}</FilterChip>)}
        </div>
      </div>
      {onClose ? <div style={{ display: 'flex', justifyContent: 'center' }}><button type="button" onClick={onClose} style={{ height: 46, padding: '0 36px', marginTop: -1, border: 0, borderRadius: '0 0 3px 3px', background: 'var(--kosaf-color-action-primary)', color: '#fff', fontFamily: F, fontSize: 18, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10 }}>닫기 <Icon name="navigate" size={16} rotate={90} style={{ filter: 'brightness(0) invert(1)' }} /></button></div> : null}
    </section>
  );
}
