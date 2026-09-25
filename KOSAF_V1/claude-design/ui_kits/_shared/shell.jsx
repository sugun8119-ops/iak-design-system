// Shared UI-kit shell: page frames + demo data. Loaded before each kit's screens.jsx.
const KS = window.KOSAFV1ProjectDesignSystem_f8c97b;
const ASSET = '../../assets/';
const LOGO = ASSET + 'brand/logo-wordmark__1-86099@2x.png';
const IMG_D = ASSET + 'products/product-desktop__1-91190.png';
const IMG_M = ASSET + 'products/product-mobile__1-91522.png';

const KD = {
  rows: Array.from({ length: 10 }, (_, i) => {
    const no = 10 - i, fixed = no % 2 === 1;
    return { no, item: '사과', variety: '부사', name: '사과/부사/특/20kg', deal: fixed ? '정가' : '입찰', producer: no === 9 ? '' : '김원생', qty: '300PT', remain: fixed ? 50 : 300, price: fixed ? '50,000원' : '-', deadline: '2023-05-05\n18:00', grade: '문경', region: '가락시장', ship: '2023\n05-05', liked: no === 10, disabled: no === 8 };
  }),
  cards: [
    { deal: '입찰거래', title: '파프리카 3kg', deadline: '2023-05-05 18:00', img: true },
    { deal: '정가거래', title: '배 5kg' }, { deal: '계약거래', title: '포도 5kg', soldOut: true },
    { deal: '정가거래', title: '배 5kg' }, { deal: '계약거래', title: '포도 5kg' },
  ],
  faq: [
    { title: '[배송] 배송기간은 얼마나 되나요?', content: '상품의 평균 배송일은 3~4일(주말, 공휴일 제외) 정도 소요됩니다.\n자세한 배송일자는 상품 상세 페이지에서 확인이 가능합니다.' },
    { title: '[회원] 회원탈퇴는 어떻게 해야 하나요?', content: '마이페이지 > 회원정보관리 > 회원탈퇴에서 신청할 수 있습니다. (예시 답변)' },
    { title: '[배송] 배송조회는 어디에서 할 수 있나요?', content: '마이페이지 > 주문/배송내역에서 확인할 수 있습니다. (예시 답변)' },
  ],
};

function PCPage({ children, active, onMenu }) {
  return (
    <div style={{ minWidth: 1920, background: '#fff', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)' }}>
      <KS.Header logoSrc={LOGO} activeMenu={active} onMenu={onMenu} cartCount={2} />
      <main style={{ maxWidth: 1596, margin: '0 auto', padding: '60px 20px 100px', boxSizing: 'content-box' }}>{children}</main>
      <KS.Footer />
    </div>
  );
}

function MoPage({ children, title, back, bottom, header = true }) {
  const [menu, setMenu] = React.useState(false);
  return (
    <div style={{ width: 390, margin: '0 auto', minHeight: '100vh', background: '#fff', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)', position: 'relative', paddingBottom: bottom ? 90 : 0 }}>
      {header ? <KS.MobileHeader title={title} back={back} onMenu={() => setMenu(true)} cartCount={2} /> : null}
      {children}
      <KS.Footer device="mobile" />
      {bottom ? <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 390, zIndex: 40 }}>{bottom}</div> : null}
      {menu ? <div style={{ position: 'fixed', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 390, zIndex: 100, overflowY: 'auto', background: '#fff' }}><KS.MobileMenu onClose={() => setMenu(false)} /></div> : null}
    </div>
  );
}

function PageTitle({ children, size = 40, align = 'left', style }) {
  return <h1 style={{ margin: 0, fontSize: size, fontWeight: 700, lineHeight: 1.3, textAlign: align, color: 'var(--kosaf-color-text-primary)', ...style }}>{children}</h1>;
}

function DemoNote({ children }) {
  return <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 12, color: 'var(--kosaf-color-text-secondary)', border: '1px dashed var(--kosaf-color-border-strong)', borderRadius: 3, padding: '2px 8px' }}><b style={{ color: 'var(--kosaf-color-action-danger)', fontWeight: 500 }}>데모</b>{children}</div>;
}

function SectionTitle({ children, right, size = 30 }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 0 20px' }}><h2 style={{ margin: 0, fontSize: size, fontWeight: 700, lineHeight: 1.4 }}>{children}</h2>{right}</div>;
}

Object.assign(window, { KS, ASSET, LOGO, IMG_D, IMG_M, KD, PCPage, MoPage, PageTitle, DemoNote, SectionTitle });
