// 상품상세 — Source: 정가 1:86264 (PC), 1:87593 (Mo), 시세동향 1:86445/1:86729, 확대 1:86964, 구매후기 1:102483
const PD_INFO = [
  { label: '품목', value: '과실류 > 사과' }, { label: '품종', value: '홍옥' }, { label: '단위/포장/크기', value: '15kg/박스/6내' },
  { label: '판매단가', value: <b style={{ fontSize: 24 }}>40,000원</b> }, { label: '거래수량\n(잔여수량)', value: '300개 (50)' }, { label: '최소구매수량', value: '1개' },
  { label: '운임', value: '판매자부담' }, { label: '배송가능지역', value: <span style={{ color: 'var(--kosaf-color-state-focus)' }}>서울 종로구 외 2건</span> }, { label: '배송출발일', value: '2023-03-23' },
];
const PD_TABS = ['속성정보', '상세정보', '구매후기', '상품문의', '배송/반품/교환정보'];

function PDTabs({ tab, setTab, mobile }) {
  return (
    <div role="tablist" style={{ display: 'flex', borderBottom: '1px solid var(--kosaf-color-border-default)', overflowX: 'auto', gap: mobile ? 20 : 0, padding: mobile ? '0 20px' : 0 }}>
      {PD_TABS.map((t, i) => (
        <button key={t} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} style={{ flex: mobile ? '0 0 auto' : 1, height: mobile ? 44 : 70, border: 0, borderBottom: '2px solid ' + (tab === i ? 'var(--kosaf-color-action-primary)' : 'transparent'), background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: mobile ? 14 : 20, fontWeight: tab === i ? 700 : 400, color: tab === i ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{t}</button>
      ))}
    </div>
  );
}

function PDTabBody({ tab, mobile }) {
  if (tab === 2) return <div style={{ padding: mobile ? '0 20px' : 0 }}><div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 0' }}>평균별점 <KS.Rating value={4.4} showValue size={mobile ? 18 : 24} /></div>{[0, 1].map((i) => <KS.ReviewItem key={i} device={mobile ? 'mobile' : 'desktop'} tags={['품질 만족', '배송 만족']} images={i ? [] : [IMG_M]} actions={[{ label: '신고하기' }]} />)}<KS.Pagination device={mobile ? 'mobile' : 'desktop'} total={3} style={{ margin: '24px 0' }} /></div>;
  if (tab === 0) return <div style={{ padding: mobile ? '20px' : '40px 0' }}><KS.DescriptionList device={mobile ? 'mobile' : 'desktop'} items={[{ label: '원산지', value: '국내산 (예시)' }, { label: '보관방법', value: '냉장 보관 (예시)' }]} /></div>;
  return <div style={{ padding: 40 }}><KS.EmptyState device={mobile ? 'mobile' : 'desktop'} message="이 탭의 상세 콘텐츠는 원본 이미지/본문이 제공되지 않았습니다." style={{ minHeight: 200 }} /></div>;
}

function ProductDetailPC() {
  const [qty, setQty] = React.useState(100);
  const [tab, setTab] = React.useState(2);
  const [trend, setTrend] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  return (
    <PCPage active="거래방식별">
      <KS.Breadcrumb items={['홈', '거래방식별', '정가거래', '상품상세']} />
      <div style={{ display: 'flex', gap: 60, marginTop: 30 }}>
        <div style={{ flex: '0 0 700px' }}><img src={IMG_D} alt="사과 상품 이미지 (1:91190)" style={{ width: 700, height: 700, objectFit: 'cover', borderRadius: 10, display: 'block' }} /></div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><KS.DealBadge type="정가거래" /><span style={{ fontSize: 18, color: 'var(--kosaf-color-text-secondary)' }}>청송홈골농원</span><span style={{ flex: 1 }}></span><KS.Button variant="secondary" size={42} onClick={() => setTrend(true)}>가격시세현황</KS.Button></div>
          <h1 style={{ margin: '16px 0 24px', fontSize: 30, fontWeight: 700, lineHeight: '40px' }}>새벽이슬 사과 팜맛탱 23년 햇 여름 청사과 2KG g 한입(17과내)...제목은 길어질수 있음</h1>
          <KS.DescriptionList items={PD_INFO} labelWidth={220} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px 0', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
            <span style={{ fontSize: 18, fontWeight: 500 }}>수량</span><KS.QuantityStepper size="lg" value={qty} onChange={setQty} max={300} />
            <span style={{ flex: 1 }}></span><span style={{ fontSize: 18 }}>총합계금액 <small style={{ color: 'var(--kosaf-color-text-muted)' }}>(부가세포함)</small></span>
            <b style={{ fontSize: 30, color: 'var(--kosaf-color-action-primary)' }}>{(40000 * qty).toLocaleString()}원</b>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginTop: 24 }}>
            <KS.Button variant="secondary" size={70} onClick={() => setLiked(!liked)}>{liked ? '관심상품 ✓' : '관심상품'}</KS.Button>
            <KS.Button variant="secondary" size={70}>가격협상</KS.Button>
            <KS.Button variant="secondary" size={70}>장바구니</KS.Button>
            <KS.Button size={70}>구매하기</KS.Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 80 }}><PDTabs tab={tab} setTab={setTab} /><PDTabBody tab={tab} /></div>
      <KS.Modal open={trend} onClose={() => setTrend(false)} title="품종 시세동향보기"><KS.PriceTrend width={646} height={320} /></KS.Modal>
    </PCPage>
  );
}

function ProductDetailMo() {
  const [qty, setQty] = React.useState(100);
  const [tab, setTab] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [nego, setNego] = React.useState(false);
  return (
    <MoPage bottom={<KS.BottomActionBar liked={liked} onLike={() => setLiked(!liked)} onSecondary={() => setNego(true)} />}>
      <div style={{ padding: '10px 20px', fontSize: 20, fontWeight: 700 }}>상품상세페이지</div>
      <img src={IMG_D} alt="사과 상품 이미지" style={{ width: 390, height: 390, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '20px 20px 16px' }}>
        <KS.DealBadge type="정가거래" size="sm" />
        <div style={{ fontSize: 16, lineHeight: '24px', marginTop: 8 }}>양파/태극황/15Kg망(파렛트 판매) / 58~62개</div>
        <div style={{ fontSize: 24, fontWeight: 700, lineHeight: '34px' }}>190,000원</div>
      </div>
      <KS.DescriptionList device="mobile" items={PD_INFO.slice(0, 7).concat([{ label: '수량', value: <KS.QuantityStepper value={qty} onChange={setQty} /> }])} />
      <div style={{ marginTop: 30 }}><PDTabs tab={tab} setTab={setTab} mobile /><PDTabBody tab={tab} mobile /></div>
      <KS.AlertDialog open={nego} onClose={() => setNego(false)} onPrimary={() => setNego(false)} icon={null} title="가격협상" width={350} message="희망 단가로 가격협상을 요청합니다. (데모)" primaryLabel="요청하기" secondaryLabel="취소" />
    </MoPage>
  );
}
Object.assign(window, { ProductDetailPC, ProductDetailMo });
