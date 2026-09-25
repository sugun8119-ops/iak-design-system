import React from 'react';
import { Icon } from '../icon/Icon.tsx';

/** KOSAF MobileHeader — Source-derived from mobile screens (1:87784, 1:92154). Hamburger bars are CSS (menu vector not exported). */
export function MobileHeader({ title = '농산물 온라인 도매시장', logoSrc, onMenu, onSearch, onCart, cartCount, back, onBack, style }) {
  const btn = { width: 44, height: 44, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 0, padding: 0, cursor: 'pointer', position: 'relative' };
  return (
    <header style={{ boxSizing: 'border-box', height: 60, display: 'flex', alignItems: 'center', padding: '0 8px', background: 'var(--kosaf-color-surface-default)', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)', ...style }}>
      {back ? (
        <button style={btn} aria-label="뒤로" onClick={onBack}><Icon name="navigate" size={24} /></button>
      ) : (
        <button style={btn} aria-label="전체메뉴 열기" onClick={onMenu}>
          <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>{[0, 1, 2].map((i) => <span key={i} style={{ width: 20, height: 2, background: 'var(--kosaf-color-text-primary)' }}></span>)}</span>
        </button>
      )}
      <div style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 700, lineHeight: '26px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {logoSrc ? <img src={logoSrc} alt={title} style={{ height: 20, width: 'auto', verticalAlign: 'middle' }} /> : title}
      </div>
      <button style={btn} aria-label="검색" onClick={onSearch}><Icon name="search" size={24} /></button>
      <button style={btn} aria-label="장바구니" onClick={onCart}><Icon name="cart" size={24} />{cartCount ? <span style={{ position: 'absolute', top: 6, right: 4, minWidth: 16, height: 16, borderRadius: 8, background: 'var(--kosaf-color-action-danger)', color: '#fff', fontSize: 10, lineHeight: '16px', textAlign: 'center' }}>{cartCount}</span> : null}</button>
    </header>
  );
}
