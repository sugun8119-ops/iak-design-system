import React from 'react';
import { CloseX } from '../mobile-menu/MobileMenu.tsx';

const F = 'var(--kosaf-font)';
export const SAMPLE_NOTIFICATIONS = ['역경매번호 [127794749] 마감', '역경매번호 [127794749] 자동유찰', '공고번호 [딸기] 에 낙찰자로 선정', '상품번호 [127794749] 지정거래 상품이 등록', '[딸기] 에서 발주반려. 발주번호 [12779474]', '상품번호 [127794749] 가격협상 승인', '상품번호 [127794749] 가격협상 거절'];

/** KOSAF NotificationList — Source-derived from 메인화면_알림 1:92553 (390: title "알림" 24/700, #F5F5F5 panel, white r10 card 352 wide, rows 15/400 #444 every 50px). */
export function NotificationList({ items = SAMPLE_NOTIFICATIONS, title = '알림', onClose, onItem, emptyMessage = '새로운 알림이 없습니다.', style }) {
  return (
    <section aria-label={title} style={{ width: '100%', maxWidth: 390, fontFamily: F, background: '#fff', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, padding: '0 20px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, lineHeight: '24px' }}>{title}</h2>
        {onClose ? <button type="button" aria-label="알림 닫기" onClick={onClose} style={{ width: 44, height: 44, marginRight: -12, background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><CloseX size={16} /></button> : null}
      </div>
      <div style={{ background: 'var(--kosaf-src-panel-bg)', padding: 20 }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: '4px 20px', background: '#fff', borderRadius: 10 }}>
          {items.length ? items.map((t, i) => (
            <li key={i} style={{ borderTop: i ? '1px solid var(--kosaf-gray-100)' : 0 }}>
              <button type="button" onClick={() => onItem && onItem(t, i)} style={{ width: '100%', minHeight: 50, padding: 0, background: 'none', border: 0, textAlign: 'left', cursor: 'pointer', fontFamily: F, fontSize: 15, color: 'var(--kosaf-src-text-body)' }}>{typeof t === 'string' ? t : t.text}</button>
            </li>
          )) : <li style={{ padding: '40px 0', textAlign: 'center', fontSize: 15, color: 'var(--kosaf-color-text-muted)' }}>{emptyMessage}</li>}
        </ul>
      </div>
    </section>
  );
}
