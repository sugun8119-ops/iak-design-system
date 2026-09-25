// 상품상세 — Source: 정가 1:86264 (PC), 1:87593 (Mo), 시세동향 1:86445/1:86729, 구매후기 1:102483. Product = PRODUCTS[0] (사과, supplied photo).
const PD = PRODUCTS[0];
const PD_TABS = ['속성정보', '상세정보', '구매후기', '상품문의', '배송/반품/교환정보'];
const pdInfo = (mobile) => [
  { label: '품목', value: '과실류 > 사과' }, { label: '품종', value: PD.variety },
  { label: mobile ? '단위/포장' : '단위/포장/크기', value: PD.unit }, { label: '등급', value: PD.grade },
  { label: '판매단가', value: <b style={{ fontSize: mobile ? 16 : 22 }}>{won(PD.price)}</b> },
  { label: mobile ? '거래(잔여)수량' : '거래수량\n(잔여수량)', value: num(PD.qty) + '박스 (' + num(PD.remain) + ')' },
  { label: '최소구매수량', value: '1박스' }, { label: '운임', value: '판매자 부담' },
  { label: '배송출발일', value: '2023-05-08' },
];

function PDTabs({ tab, setTab, mobile }) {
  const refs = React.useRef([]);
  const key = (e, i) => { const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!d) return; const n = (i + d + PD_TABS.length) % PD_TABS.length; setTab(n); refs.current[n] && refs.current[n].focus(); };
  return (
    <div role="tablist" aria-label="상품 정보" style={{ display: 'flex', borderBottom: '1px solid var(--kosaf-color-border-default)', overflowX: 'auto', gap: mobile ? 20 : 0, padding: mobile ? '0 16px' : 0, scrollbarWidth: 'none' }}>
      {PD_TABS.map((t, i) => (
        <button key={t} ref={(el) => (refs.current[i] = el)} role="tab" aria-selected={tab === i} tabIndex={tab === i ? 0 : -1} onKeyDown={(e) => key(e, i)} onClick={() => setTab(i)} style={{ flex: mobile ? '0 0 auto' : 1, height: mobile ? 46 : 70, border: 0, borderBottom: '2px solid ' + (tab === i ? 'var(--kosaf-color-action-primary)' : 'transparent'), background: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: mobile ? 15 : 20, fontWeight: tab === i ? 700 : 400, whiteSpace: 'nowrap', color: tab === i ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{t}</button>
      ))}
    </div>
  );
}

function PDTabBody({ tab, mobile }) {
  const pad = mobile ? '20px 16px' : '40px 0';
  if (tab === 2) return (
    <div style={{ padding: mobile ? '0 16px' : 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 0', borderBottom: '1px solid var(--kosaf-color-border-default)' }}><span style={{ fontSize: mobile ? 15 : 18, fontWeight: 500 }}>평균별점</span><KS.Rating value={4.5} showValue size={mobile ? 18 : 24} /><span style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)' }}>후기 2건</span></div>
      <KS.ReviewItem device={mobile ? 'mobile' : 'desktop'} product={PD.name} rating={5} tags={['품질 만족', '배송 만족']} images={[IMG_M]} actions={[{ label: '신고하기' }]} />
      <KS.ReviewItem device={mobile ? 'mobile' : 'desktop'} author="kim***" date="2023-04-20" product={PD.name} rating={4} body="크기가 고르고 당도가 좋습니다. 재구매 의사 있어요." actions={[{ label: '신고하기' }]} />
    </div>
  );
  if (tab === 0) return <div style={{ padding: pad }}><KS.DescriptionList device={mobile ? 'mobile' : 'desktop'} items={[{ label: '원산지', value: '경북 청송 (예시)' }, { label: '보관방법', value: '0~2℃ 냉장 보관 (예시)' }, { label: '출하 형태', value: PD.unit }]} /></div>;
  return <div style={{ padding: pad }}><KS.EmptyState device={mobile ? 'mobile' : 'desktop'} message="원본에서 이 탭의 본문이 제공되지 않았습니다." description="상세 이미지·문의·배송 안내 본문은 실제 데이터로 채워 주세요." style={{ minHeight: mobile ? 180 : 240 }} /></div>;
}

function ProductDetailPC() {
  const [qty, setQty] = React.useState(10);
  const [tab, setTab] = React.useState(0);
  const [trend, setTrend] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  return (
    <PCPage active="거래방식별">
      <KS.Breadcrumb items={['홈', '거래방식별', '정가거래', '과실류', '사과']} />
      <div style={{ display: 'grid', gridTemplateColumns: '700px 1fr', gap: 60, marginTop: 30, alignItems: 'start' }}>
        <KS.ImageSlot src={IMG_D} alt={PD.name} width={700} height={700} />
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 30 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><KS.DealBadge type={PD.deal} /><span style={{ fontSize: 18, color: 'var(--kosaf-color-text-secondary)' }}>{PD.seller}</span><span style={{ flex: 1 }}></span><KS.Button variant="secondary" size={42} onClick={() => setTrend(true)}>품종 시세동향보기</KS.Button></div>
            <h1 style={{ margin: '16px 0 0', fontSize: 30, fontWeight: 700, lineHeight: '40px' }}>{PD.name}</h1>
          </div>
          <KS.DescriptionList items={pdInfo(false)} labelWidth={220} />
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto 1fr auto', alignItems: 'center', columnGap: 20, padding: '4px 0 24px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
            <span style={{ fontSize: 18, fontWeight: 500 }}>주문수량</span><KS.QuantityStepper size="lg" value={qty} onChange={setQty} max={PD.remain} />
            <span style={{ justifySelf: 'end', fontSize: 18 }}>총 상품금액 <small style={{ fontSize: 14, color: 'var(--kosaf-color-text-muted)' }}>({won(PD.price)} × {qty})</small></span>
            <b style={{ fontSize: 30, color: 'var(--kosaf-color-action-primary)', fontVariantNumeric: 'tabular-nums' }}>{won(PD.price * qty)}</b>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 2fr', gap: 10 }}>
            <KS.Button variant="secondary" size={70} aria-pressed={liked} onClick={() => setLiked(!liked)}>{liked ? '관심상품 해제' : '관심상품'}</KS.Button>
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
  const [qty, setQty] = React.useState(10);
  const [tab, setTab] = React.useState(0);
  const [liked, setLiked] = React.useState(false);
  const [nego, setNego] = React.useState(false);
  return (
    <MoPage back bottom={<KS.BottomActionBar liked={liked} onLike={() => setLiked(!liked)} onSecondary={() => setNego(true)} primaryLabel={'구매하기'} />}>
      <KS.ImageSlot src={IMG_M} alt={PD.name} width="100%" radius={0} />
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><KS.DealBadge type={PD.deal} size="sm" /><span style={{ fontSize: 13, color: 'var(--kosaf-color-text-secondary)' }}>{PD.seller}</span></div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 500, lineHeight: '26px' }}>{PD.name}</h1>
        <div style={{ fontSize: 24, fontWeight: 700, lineHeight: '32px', fontVariantNumeric: 'tabular-nums' }}>{won(PD.price)}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--kosaf-color-text-secondary)', marginLeft: 6 }}>/ 1박스</span></div>
      </div>
      <KS.DescriptionList device="mobile" items={pdInfo(true)} />
      <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14, borderBottom: '8px solid var(--kosaf-src-divider-thick)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: 15, fontWeight: 500 }}>주문수량</span><KS.QuantityStepper value={qty} onChange={setQty} max={PD.remain} /></div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}><span style={{ fontSize: 15 }}>총 상품금액</span><b style={{ fontSize: 22, color: 'var(--kosaf-color-action-primary)', fontVariantNumeric: 'tabular-nums' }}>{won(PD.price * qty)}</b></div>
      </div>
      <div style={{ marginTop: 8 }}><PDTabs tab={tab} setTab={setTab} mobile /><PDTabBody tab={tab} mobile /></div>
      <KS.AlertDialog open={nego} onClose={() => setNego(false)} onPrimary={() => setNego(false)} icon={null} title="가격협상" width={350} message={'희망 단가로 가격협상을 요청합니다.\n(서버 연동 없는 데모)'} primaryLabel="요청하기" secondaryLabel="취소" />
    </MoPage>
  );
}
Object.assign(window, { ProductDetailPC, ProductDetailMo });
