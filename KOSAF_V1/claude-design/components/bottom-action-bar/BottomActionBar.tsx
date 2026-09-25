import React from 'react';
import { Button } from '../button/Button.jsx';
import { Icon } from '../icon/Icon.tsx';

/** KOSAF BottomActionBar — Source-derived. variant="split": 상품상세 Mo (1:87593) cart/heart icons + 가격협상 + 구매하기. variant="full": 주문/결제 Mo (1:104139) full-width 70px 결제하기. */
export function BottomActionBar({ variant = 'split', primaryLabel = '구매하기', secondaryLabel = '가격협상', onPrimary, onSecondary, onCart, onLike, liked, showIcons = true, fixed = false, disabled, style }) {
  const pos = fixed ? { position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50 } : {};
  if (variant === 'full') {
    return <div style={{ ...pos, width: '100%', ...style }}><button type="button" disabled={disabled} onClick={onPrimary} style={{ width: '100%', height: 70, border: 0, background: disabled ? 'var(--kosaf-gray-100)' : 'var(--kosaf-color-action-primary)', color: disabled ? 'var(--kosaf-color-text-disabled)' : '#fff', fontFamily: 'var(--kosaf-font)', fontSize: 20, fontWeight: 500, cursor: disabled ? 'not-allowed' : 'pointer' }}>{primaryLabel}</button></div>;
  }
  const ib = { width: 44, height: 50, flex: '0 0 44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 0, padding: 0, cursor: 'pointer' };
  return (
    <div style={{ ...pos, boxSizing: 'border-box', width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#fff', borderTop: '1px solid var(--kosaf-color-border-default)', ...style }}>
      {showIcons ? <><button type="button" style={ib} aria-label="장바구니 담기" onClick={onCart}><Icon name="shopping-bag" size={26} style={{ filter: 'brightness(0) saturate(0) opacity(.8)' }} /></button><button type="button" style={ib} aria-label="관심상품" aria-pressed={!!liked} onClick={onLike}><Icon name="heart" size={24} style={{ filter: liked ? 'none' : 'grayscale(1) brightness(1.6)' }} /></button></> : null}
      {secondaryLabel ? <Button variant="secondary" size={50} style={{ flex: 1 }} onClick={onSecondary} disabled={disabled}>{secondaryLabel}</Button> : null}
      <Button size={50} style={{ flex: 1 }} onClick={onPrimary} disabled={disabled}>{primaryLabel}</Button>
    </div>
  );
}
