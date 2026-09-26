import React from 'react';
import { Button } from '../button/Button.jsx';

/** KOSAF EmptyState — Source-derived copy/structure from 장바구니 없음 1:104584 ("장바구니에 담긴 상품이 없습니다." + 상품검색), 후기 No Result 1:91890, 주문내역 없음 1:105292. Layout = KOSAF extension.
 *  1.4.0 variants (KOSAF extension copy except emptyCart): noResults → 필터 초기화 · emptyCart → 상품검색 · noHistory → guidance only. */
export const EMPTY_STATE_PRESETS = {
  emptyCart: { message: '장바구니에 담긴 상품이 없습니다.', actionLabel: '상품검색' },
  noResults: { message: '조건에 맞는 상품이 없습니다.', description: '선택한 필터를 줄이거나 초기화한 뒤 다시 검색해 보세요.', actionLabel: '필터 초기화' },
  noHistory: { message: '조회된 거래내역이 없습니다.', description: '조회 기간을 변경하면 이전 거래를 확인할 수 있습니다.' },
};
export function EmptyState({ variant, message, description, actionLabel, onAction, secondaryLabel, onSecondary, icon, device = 'desktop', style }) {
  const m = device === 'mobile';
  const p = (variant && EMPTY_STATE_PRESETS[variant]) || {};
  const msg = message ?? p.message ?? '장바구니에 담긴 상품이 없습니다.';
  const desc = description ?? p.description;
  const act = actionLabel ?? (onAction ? p.actionLabel : undefined) ?? (variant ? undefined : undefined);
  return (
    <div role="status" style={{ boxSizing: 'border-box', width: '100%', minHeight: m ? 300 : 498, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: m ? 14 : 20, padding: 20, borderTop: '1px solid var(--kosaf-color-border-default)', borderBottom: '1px solid var(--kosaf-color-border-default)', fontFamily: 'var(--kosaf-font)', textAlign: 'center', ...style }}>
      {icon}
      <div style={{ fontSize: m ? 18 : 24, fontWeight: 500, lineHeight: m ? '26px' : '34px', color: 'var(--kosaf-color-text-primary)', wordBreak: 'keep-all' }}>{msg}</div>
      {desc ? <div style={{ fontSize: m ? 14 : 18, lineHeight: m ? '20px' : '28px', color: 'var(--kosaf-color-text-secondary)', whiteSpace: 'pre-line', wordBreak: 'keep-all' }}>{desc}</div> : null}
      {act || secondaryLabel ? (
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {secondaryLabel ? <Button variant="secondary" size={m ? 45 : 50} width={m ? 140 : 180} onClick={onSecondary}>{secondaryLabel}</Button> : null}
          {act ? <Button size={m ? 45 : 50} width={m ? 160 : 200} onClick={onAction}>{act}</Button> : null}
        </div>
      ) : null}
    </div>
  );
}
