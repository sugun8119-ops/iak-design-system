// 판매자 마이샵 — Source: 마이샵 홈 1:89065 (PC) / 1:88758 (Mo), 정가거래 목록 1:94517, 정가상품등록 목록 1:94403, 정가거래 상세 1:94233
const SELLER_NAV = [
  { label: '마이샵관리', items: ['마이샵 홈'] },
  { label: '상품관리', items: ['정가 상품등록', '입찰 상품등록', '상품등록관리'] },
  { label: '거래관리', items: ['정가거래', '입찰거래', '역경매', '발주거래'] },
  { label: '샵관리', items: ['카테고리 관리', '상품진열 관리', '샵소개 관리', '게시판 관리'] },
  { label: '통계', items: ['기간별 주문내역', '품목별 주문내역'] },
  { label: '정산관리', items: ['정산예정', '정산내역', '세금계산서'] },
];
const DEALS = [['2023-04-23', '사과/부사/특/20kg', '100', '1,000,000원', '결제완료'], ['2023-04-22', '배/신고/특/15kg', '20', '400,000원', '가격협상'], ['2023-04-21', '포도/캠벨/5kg', '50', '250,000원', '배송준비중']];

function ShopInfo({ mobile }) {
  return <KS.DescriptionList device={mobile ? 'mobile' : 'desktop'} labelWidth={mobile ? 100 : 200} items={[{ label: '판매자', value: '서울청과' }, { label: '경매사', value: '김환수' }, { label: '판매자 의견', value: '당일 경매 물량 기준으로 출고합니다. (예시)' }, { label: '경매사 의견', value: '상품 상태 양호. (예시)' }, { label: '이미지 파일', value: <span style={{ color: 'var(--kosaf-color-text-muted)' }}>파일 없음</span> }]} />;
}

function SellerShopPC() {
  const [nav, setNav] = React.useState('마이샵 홈');
  const [period, setPeriod] = React.useState('1개월');
  const [detail, setDetail] = React.useState(null);
  const cols = '140px 1fr 90px 160px 140px 150px';
  return (
    <PCPage>
      <div style={{ display: 'flex', gap: 60 }}>
        <KS.SideNav title="마이샵관리" groups={SELLER_NAV} active={nav} onSelect={setNav} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 50 }}>
          <PageTitle size={30}>마이샵 홈</PageTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>{[['정산예정', '10,000', 'analytics'], ['정가거래', '12', 'purchase'], ['입찰거래', '3'], ['가격협상', '2']].map(([l, v, ic]) => <KS.MetricCard key={l} width="100%" label={l} unit={l === '정산예정' ? '(만원)' : '(건)'} value={v} icon={ic ? <KS.Icon name={ic} size={34} style={{ filter: 'brightness(0) invert(1)' }} /> : null} />)}</div>
          <div><SectionTitle size={24}>판매정보</SectionTitle><ShopInfo /></div>
          <div>
            <SectionTitle size={24} right={<KS.SegmentedControl value={period} onChange={setPeriod} />}>정가거래 목록</SectionTitle>
            <div role="table"><KS.TableRow header columns={cols} cells={['주문일', '상품명', '수량', '결제금액', '상태', '관리']} />{DEALS.map((d, i) => <KS.TableRow key={i} columns={cols} style={{ borderTop: 0 }} cells={[d[0], d[1], d[2], d[3], d[4] === '가격협상' ? <span style={{ color: 'var(--kosaf-color-state-focus)', fontWeight: 500 }}>{d[4]}</span> : <KS.Badge>{d[4]}</KS.Badge>, <KS.Button variant="secondary" size={34} onClick={() => setDetail(d)}>상세보기</KS.Button>]} />)}</div>
            <KS.Pagination total={5} style={{ marginTop: 30 }} />
          </div>
          <DemoNote>MetricCard 수치·목록 데이터는 예시입니다 (원본 통계 값 미제공)</DemoNote>
        </div>
      </div>
      <KS.Modal open={!!detail} onClose={() => setDetail(null)} title="정가거래 상세" height="auto" width={1004} footer={<><KS.Button variant="secondary" width={260}>협상거절</KS.Button><KS.Button width={260} onClick={() => setDetail(null)}>협상승인</KS.Button></>}>
        {detail ? <KS.DescriptionList items={[{ label: '주문결제 정보', value: detail[1] + ' · ' + detail[2] + '개' }, { label: '가격협상대상', value: <KS.Button size={42}>가격협상 상세보기</KS.Button> }, { label: '결제금액', value: detail[3] }]} /> : null}
      </KS.Modal>
    </PCPage>
  );
}

function SellerShopMo() {
  const [tab, setTab] = React.useState(0);
  return (
    <MoPage>
      <div style={{ padding: 20 }}><PageTitle size={20}>마이샵 홈</PageTitle></div>
      <div style={{ padding: '0 20px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>{[['정산예정', '10,000'], ['정가거래', '12']].map(([l, v]) => <KS.MetricCard key={l} width="100%" label={l} value={v} icon={<KS.Icon name="analytics" size={34} style={{ filter: 'brightness(0) invert(1)' }} />} />)}</div>
      <div role="tablist" style={{ display: 'flex', gap: 8, padding: '0 20px 16px' }}>{['판매정보', '거래목록'].map((t, i) => <KS.Tab key={t} selected={tab === i} onClick={() => setTab(i)} width={120}>{t}</KS.Tab>)}</div>
      {tab === 0 ? <ShopInfo mobile /> : <div role="table">{DEALS.map((d, i) => <KS.TableRow key={i} device="mobile" cells={[d[1], d[4]]} style={{ borderTop: i ? 0 : undefined }} />)}</div>}
      <div style={{ padding: 20 }}><DemoNote>수치·목록은 예시</DemoNote></div>
    </MoPage>
  );
}
Object.assign(window, { SellerShopPC, SellerShopMo });
