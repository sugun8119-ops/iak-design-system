import React from 'react';

const F = 'var(--kosaf-font)';
export const BUYER_NAV = [
  { label: '거래관리', items: ['입찰', '정가거래', '역경매거래', '발주거래'] },
  { label: '주문관리', items: ['주문/배송내역', '취소/반품/교환 신청', '취소/반품/교환 완료내역', '클레임 내역'] },
  { label: '정산관리', items: ['구매확정시 결제내역', '입금확인', '정산소한도 거래원장', '정산소 한도약정', '전자세금계산서'] },
  { label: '관심목록', items: ['관심상품', '최근 본 상품'] },
  { label: 'Q&A', items: [] },
  { label: '회원정보관리', items: ['기본정보수정', '회원탈퇴', '담당자관리'] },
];

/** KOSAF SideNav (LNB) — Source-derived from LNB 1:90423 (240 wide). Title 30/400, group 18/500 black, item 16/400 #707070. */
export function SideNav({ title = '마이페이지', groups = BUYER_NAV, active, onSelect, style }) {
  return (
    <nav aria-label={title} style={{ width: 240, flex: '0 0 240px', fontFamily: F, ...style }}>
      <div style={{ fontSize: 30, lineHeight: '42px', color: 'var(--kosaf-src-text-strong)', marginBottom: 30 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 38 }}>
        {groups.map((g) => (
          <div key={g.label} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button onClick={() => onSelect && onSelect(g.label)} aria-current={active === g.label ? 'page' : undefined} style={{ textAlign: 'left', background: 'none', border: 0, padding: 0, cursor: 'pointer', fontFamily: F, fontSize: 18, fontWeight: 500, lineHeight: '24px', color: active === g.label ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-src-text-strong)' }}>{g.label}</button>
            {g.items.map((it) => {
              const on = active === it;
              return <button key={it} onClick={() => onSelect && onSelect(it, g.label)} aria-current={on ? 'page' : undefined} style={{ textAlign: 'left', background: 'none', border: 0, padding: '2px 0', cursor: 'pointer', fontFamily: F, fontSize: 16, lineHeight: '24px', fontWeight: on ? 500 : 400, color: on ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-secondary)' }}>{it}</button>;
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}
