import React from 'react';
import { Button } from '../button/Button.jsx';

/** KOSAF EmptyState — Source-derived copy/structure from 장바구니 없음 1:104584 ("장바구니에 담긴 상품이 없습니다." + 상품검색), 후기 No Result 1:91890, 주문내역 없음 1:105292. Layout = KOSAF extension. */
export function EmptyState({ message = '장바구니에 담긴 상품이 없습니다.', description, actionLabel, onAction, icon, device = 'desktop', style }) {
  const m = device === 'mobile';
  return (
    <div role="status" style={{ boxSizing: 'border-box', width: '100%', minHeight: m ? 300 : 498, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: m ? 14 : 20, padding: 20, borderTop: '1px solid var(--kosaf-color-border-default)', borderBottom: '1px solid var(--kosaf-color-border-default)', fontFamily: 'var(--kosaf-font)', textAlign: 'center', ...style }}>
      {icon}
      <div style={{ fontSize: m ? 18 : 24, fontWeight: 500, lineHeight: m ? '26px' : '34px', color: 'var(--kosaf-color-text-primary)' }}>{message}</div>
      {description ? <div style={{ fontSize: m ? 14 : 18, lineHeight: m ? '20px' : '28px', color: 'var(--kosaf-color-text-secondary)', whiteSpace: 'pre-line' }}>{description}</div> : null}
      {actionLabel ? <Button size={m ? 45 : 50} width={m ? 160 : 200} onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  );
}
