import React from 'react';

const F = 'var(--kosaf-font)';
const LINKS = ['공인인증서 등록', '이용약관', '개인정보취급방침', '이메일 무단 수집거부'];
const INFO = [
  ['주소: (06774) 서울특별시 서초구 강남대로 27, 5층', '사업자등록번호: 214-82-11586', 'FAX. 02)6919-1481'],
  ['통신판업신고번호 : 제 2009-서울서초-0746호'],
  [],
  ['Copyrights © 2023 by 한국농수산식품유통공사. All rights reserved.'],
];

/** KOSAF Footer — Source-derived from Footer 1:86051 (1920×289, #202020, #888888 text). */
export function Footer({ device = 'desktop', links = LINKS, info = INFO, onLink, style }) {
  const mobile = device === 'mobile';
  const txt = { color: 'var(--kosaf-src-footer-text)', fontFamily: F };
  return (
    <footer style={{ background: 'var(--kosaf-src-footer-bg)', width: '100%', ...style }}>
      <div style={{ maxWidth: mobile ? undefined : 1272, margin: '0 auto', padding: mobile ? '30px 20px 40px' : '47px 20px 0', minHeight: mobile ? undefined : 242, boxSizing: 'border-box', display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 20 : 39 }}>
        <div style={{ ...txt, fontSize: mobile ? 18 : 22, fontWeight: 700, lineHeight: '26px', whiteSpace: 'nowrap' }}>농산물 온라인 도매시장</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 16 : 40 }}>
          <nav aria-label="약관" style={{ display: 'flex', flexWrap: 'wrap', gap: mobile ? '8px 16px' : 30 }}>
            {links.map((l) => <a key={l} href="#" onClick={(e) => { e.preventDefault(); onLink && onLink(l); }} style={{ ...txt, fontSize: mobile ? 13 : 15, fontWeight: 500, lineHeight: '22px', textDecoration: 'none' }}>{l}</a>)}
          </nav>
          <address style={{ ...txt, fontStyle: 'normal', fontSize: mobile ? 12 : 14, lineHeight: mobile ? '18px' : '20px', display: 'flex', flexDirection: 'column', gap: mobile ? 2 : 5 }}>
            {info.map((row, i) => row.length ? <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: mobile ? '0 12px' : 44 }}>{row.map((t) => <span key={t}>{t}</span>)}</div> : <div key={i} style={{ height: mobile ? 4 : 20 }}></div>)}
          </address>
        </div>
      </div>
    </footer>
  );
}
