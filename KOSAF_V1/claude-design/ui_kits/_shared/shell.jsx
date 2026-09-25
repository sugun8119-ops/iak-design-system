// Shared UI-kit shell: page frames + ONE consistent demo catalogue. Loaded before each kit's screens.jsx.
/* Pre-compile guard: ImageSlot ships in the next bundle; this local copy is used only if the bundle predates it. */
function ImageSlotFallback({ src, alt = '', width = '100%', height, radius = 10, label = '이미지 준비중', style }) {
  const [bad, setBad] = React.useState(false);
  const box = { boxSizing: 'border-box', width, height, aspectRatio: height ? undefined : '1 / 1', borderRadius: radius, overflow: 'hidden', flex: '0 0 auto', ...style };
  return !src || bad ? <div role="img" aria-label={label} style={{ ...box, background: '#F7F7F7', border: '1px solid #EAEAEA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#888' }}>{label}</div>
    : <div style={box}><img src={src} alt={alt} onError={() => setBad(true)} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /></div>;
}
const KS = Object.assign({ ImageSlot: ImageSlotFallback }, window.KOSAFV1ProjectDesignSystem_f8c97b);
const ASSET = '../../assets/';
const LOGO = ASSET + 'brand/logo-wordmark__1-86099@2x.png';
const IMG_D = ASSET + 'products/product-desktop__1-91190.png'; // 1:91190 — apple, desktop 278
const IMG_M = ASSET + 'products/product-mobile__1-91522.png';  // 1:91522 — apple, mobile 155
const won = (n) => n.toLocaleString('ko-KR') + '원';
const num = (n) => n.toLocaleString('ko-KR');

/* Demo catalogue. Only 사과 items use the two supplied apple photos; everything else renders ImageSlot fallback. Prices are illustrative (데모). */
const PRODUCTS = [
  { id: 'p1', item: '사과', variety: '부사', name: '사과/부사/특/10kg', unit: '10kg 박스', grade: '특 (30과)', price: 52000, deal: '정가거래', seller: '대야청과', producer: '김원생', qty: 300, remain: 120, apple: true },
  { id: 'p2', item: '사과', variety: '홍로', name: '사과/홍로/상/5kg', unit: '5kg 박스', grade: '상 (18과)', price: 31000, deal: '입찰거래', seller: '서울청과', producer: '이정호', qty: 200, remain: 200, deadline: '2023-05-05 18:00', apple: true },
  { id: 'p3', item: '배', variety: '신고', name: '배/신고/특/7.5kg', unit: '7.5kg 박스', grade: '특 (12과)', price: 45000, deal: '정가거래', seller: '대야청과', producer: '박성민', qty: 150, remain: 40 },
  { id: 'p4', item: '포도', variety: '캠벨', name: '포도/캠벨얼리/상/5kg', unit: '5kg 박스', grade: '상', price: 28000, deal: '계약거래', seller: '동부청과', producer: '최영수', qty: 100, remain: 0, soldOut: true },
  { id: 'p5', item: '복숭아', variety: '천중도', name: '복숭아/천중도/특/4.5kg', unit: '4.5kg 박스', grade: '특 (15과)', price: 39000, deal: '입찰거래', seller: '서울청과', producer: '정미경', qty: 80, remain: 80, deadline: '2023-05-06 14:00' },
];
const imgFor = (p, mobile) => (p.apple ? (mobile ? IMG_M : IMG_D) : undefined);
const cardMeta = (p) => ['판매자 : ' + p.seller, '생산자 : ' + p.producer, '거래수량 : ' + num(p.qty), '잔여수량 : ' + num(p.remain)];

const KD = {
  products: PRODUCTS,
  rows: PRODUCTS.concat(PRODUCTS.map((p) => ({ ...p, id: p.id + 'b' }))).map((p, i, arr) => ({
    no: arr.length - i, item: p.item, variety: p.variety, name: p.name, deal: p.deal.slice(0, 2), producer: p.producer, qty: num(p.qty) + '박스', remain: num(p.remain),
    price: p.deal === '입찰거래' ? '-' : won(p.price), deadline: p.deadline ? p.deadline.replace(' ', '\n') : '-', grade: p.grade.split(' ')[0], region: '가락시장', ship: '2023\n05-08', liked: i === 0, disabled: !!p.soldOut,
  })),
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

/* Mobile frame: 100% up to 391, clips horizontal overflow (tables scroll inside their own wrapper), reserves room for the fixed CTA. */
function MoPage({ children, title, back, bottom, bottomHeight = 71, header = true }) {
  const [menu, setMenu] = React.useState(false);
  const overlay = { position: 'fixed', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 391, zIndex: 100, overflowY: 'auto', background: '#fff' };
  return (
    <div style={{ boxSizing: 'border-box', width: '100%', maxWidth: 391, margin: '0 auto', minHeight: '100vh', background: '#fff', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)', position: 'relative', overflowX: 'clip', paddingBottom: bottom ? bottomHeight + 24 : 0 }}>
      {header ? <KS.MobileHeader title={title} logoSrc={title ? undefined : LOGO} back={back} onMenu={() => setMenu(true)} cartCount={2} /> : null}
      {children}
      <KS.Footer device="mobile" />
      {bottom ? <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 391, zIndex: 40, paddingBottom: 'env(safe-area-inset-bottom)', background: '#fff' }}>{bottom}</div> : null}
      {menu ? <div style={overlay}><KS.MobileMenu onClose={() => setMenu(false)} /></div> : null}
    </div>
  );
}

/* Title → description → content → action hierarchy. */
function PageHead({ title, desc, right, size = 40, mobile, align = 'left', style }) {
  return (
    <div style={{ display: 'flex', alignItems: mobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: 20, flexDirection: mobile && right ? 'column' : 'row', textAlign: align, marginBottom: mobile ? 20 : 30, ...style }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ margin: 0, fontSize: mobile ? 22 : size, fontWeight: 700, lineHeight: 1.3 }}>{title}</h1>
        {desc ? <p style={{ margin: mobile ? '6px 0 0' : '10px 0 0', fontSize: mobile ? 14 : 18, lineHeight: mobile ? '20px' : '28px', color: 'var(--kosaf-color-text-secondary)' }}>{desc}</p> : null}
      </div>
      {right}
    </div>
  );
}
function PageTitle({ children, size = 40, align = 'left', style }) {
  return <h1 style={{ margin: 0, fontSize: size, fontWeight: 700, lineHeight: 1.3, textAlign: align, color: 'var(--kosaf-color-text-primary)', ...style }}>{children}</h1>;
}
function DemoNote({ children }) {
  return <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center', fontSize: 12, lineHeight: '18px', color: 'var(--kosaf-color-text-secondary)', border: '1px dashed var(--kosaf-color-border-strong)', borderRadius: 3, padding: '2px 8px' }}><b style={{ color: 'var(--kosaf-color-action-danger)', fontWeight: 500 }}>데모</b>{children}</div>;
}
function SectionTitle({ children, right, size = 30, desc }) {
  return <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, margin: '0 0 20px' }}><div><h2 style={{ margin: 0, fontSize: size, fontWeight: 700, lineHeight: 1.35 }}>{children}</h2>{desc ? <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--kosaf-color-text-secondary)' }}>{desc}</p> : null}</div>{right}</div>;
}

Object.assign(window, { KS, ASSET, LOGO, IMG_D, IMG_M, KD, PRODUCTS, imgFor, cardMeta, won, num, PCPage, MoPage, PageHead, PageTitle, DemoNote, SectionTitle });
