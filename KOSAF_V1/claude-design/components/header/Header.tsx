import React from 'react';
import { Search } from '../search/Search.jsx';
import { Icon } from '../icon/Icon.tsx';

const F = 'var(--kosaf-font)';
const TOP_LEFT = ['플랫폼 소개', '도매시장 유통데이터'];
const TOP_RIGHT = ['로그인', '회원가입', '고객센터'];
const MENU = ['부류별', '거래방식별', '판매유형별', '도매시장별'];

/** KOSAF Header — Source-derived from header 1:86081 (1920×203). Content column 1596px. */
export function Header({ logoSrc, menu = MENU, topLeft = TOP_LEFT, topRight = TOP_RIGHT, activeMenu, onMenu, onTopLink, onSearch, searchPlaceholder = '', cartCount, alarmCount = 10, onCart, onAlarm, onMall, onShop, style }) {
  const link = { whiteSpace: 'nowrap', background: 'none', border: 0, padding: 0, cursor: 'pointer', fontFamily: F, fontSize: 14, fontWeight: 500, lineHeight: '21px', color: 'var(--kosaf-color-text-secondary)' };
  const iconBtn = { position: 'relative', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 0, padding: 0, cursor: 'pointer' };
  const count = (n) => n ? <span style={{ position: 'absolute', top: 0, right: 0, minWidth: 20, height: 20, borderRadius: 10, background: 'var(--kosaf-color-action-danger)', color: '#fff', fontSize: 10, fontWeight: 500, lineHeight: '20px', textAlign: 'center' }}>{n}</span> : null;
  return (
    <header style={{ width: '100%', background: 'var(--kosaf-color-surface-default)', fontFamily: F, color: 'var(--kosaf-color-text-primary)', ...style }}>
      <div style={{ maxWidth: 1596, margin: '0 auto', padding: '0 20px', boxSizing: 'content-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: 21, paddingTop: 0 }}>
          <nav aria-label="유틸리티" style={{ display: 'flex', gap: 20 }}>{topLeft.map((t) => <button key={t} style={link} onClick={() => onTopLink && onTopLink(t)}>{t}</button>)}</nav>
          <nav aria-label="회원" style={{ display: 'flex', gap: 20 }}>{topRight.map((t) => <button key={t} style={link} onClick={() => onTopLink && onTopLink(t)}>{t}</button>)}</nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40, height: 50, marginTop: 50 }}>
          <a href="#" onClick={(e) => e.preventDefault()} aria-label="농산물 온라인 도매시장 홈" style={{ flex: '0 0 292px', display: 'inline-flex' }}>
            {logoSrc ? <img src={logoSrc} alt="농산물 온라인 도매시장" width="292" height="33" style={{ display: 'block' }} /> : <span style={{ fontSize: 28, fontWeight: 700, lineHeight: '33px' }}>농산물 온라인 도매시장</span>}
          </a>
          <Search width={579} placeholder={searchPlaceholder} onSubmit={onSearch}
            leading={<span style={{ fontSize: 18, color: 'var(--kosaf-color-text-secondary)', whiteSpace: 'nowrap' }}>거래방식 ▾</span>}
            trailing={<button type="submit" aria-label="검색" style={{ background: 'none', border: 0, padding: 0, marginRight: 12, cursor: 'pointer', lineHeight: 0 }}><Icon name="search" /></button>} />
          <button onClick={onMall} style={{ flex: '0 0 239px', height: 50, borderRadius: 25, border: 0, background: 'var(--kosaf-color-action-primary)', color: '#fff', fontFamily: F, fontSize: 24, fontWeight: 500, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>품목도매관 <span aria-hidden="true" style={{ fontSize: 16 }}>▾</span></button>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
            <button style={iconBtn} aria-label="장바구니" onClick={onCart}><Icon name="cart" size={30} />{count(cartCount)}</button>
            <button style={iconBtn} aria-label={'알림 ' + (alarmCount || 0) + '건'} onClick={onAlarm}><Icon name="bell" size={31} />{count(alarmCount)}</button>
          </div>
        </div>
      </div>
      <nav aria-label="주 메뉴" style={{ marginTop: 24, borderTop: '1px solid var(--kosaf-gray-100)', borderBottom: '1px solid var(--kosaf-gray-100)' }}>
        <div style={{ maxWidth: 1596, margin: '0 auto', padding: '0 20px', boxSizing: 'content-box', display: 'flex', height: 57 }}>
          {menu.map((m) => (
            <button key={m} onClick={() => onMenu && onMenu(m)} aria-current={activeMenu === m ? 'page' : undefined}
              style={{ flex: '0 0 281px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px 0 17px', background: 'none', border: 0, borderLeft: '1px solid var(--kosaf-gray-100)', cursor: 'pointer', fontFamily: F, fontSize: 20, fontWeight: 500, color: activeMenu === m ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>
              {m}<span aria-hidden="true" style={{ fontSize: 14 }}>▼</span>
            </button>
          ))}
          <span style={{ borderLeft: '1px solid var(--kosaf-gray-100)' }}></span>
          <button onClick={onShop} style={{ whiteSpace: 'nowrap', marginLeft: 'auto', background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: 20, fontWeight: 500, color: 'var(--kosaf-color-text-primary)' }}>판매샵</button>
        </div>
      </nav>
    </header>
  );
}
