// 구매자 마이페이지 홈 — Source: 1:88132 (PC 1920×2622), 1:87784 (Mo 390×2203), LNB 1:90423, MetricCard 1:87886
const METRICS = [['여신금액', '10,000', 'purchase'], ['사용금액', '1,000', 'analytics'], ['한도금액', '9,000'], ['사용가능금액', '8,800']];
const FLOW = [['주문', 0], ['상품준비', 0], ['출고', 0], ['인수', 0], ['구매확정', 0]];
const QNA = [['답변대기', '주문한지 1주가 지났는데 아직 배송이...', '2023-03-24'], ['답변완료', '주문한지 1주가 지났는데 아직 배송이...', '2023-03-24'], ['답변완료', '주문한지 1주가 지났는데 아직 배송이...', '2023-03-24']];
const icoW = (n) => (n ? <KS.Icon name={n} size={34} style={{ filter: 'brightness(0) invert(1)' }} /> : null);

function Welcome({ mobile }) {
  return (
    <div style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: mobile ? 20 : 30 }}>
        <span aria-hidden="true" style={{ width: mobile ? 70 : 90, height: mobile ? 70 : 90, borderRadius: '50%', background: 'var(--kosaf-gray-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--kosaf-color-text-muted)' }}>이미지</span>
        <div><div style={{ fontSize: mobile ? 18 : 24, fontWeight: 700 }}>여신약정 만기일</div><div style={{ fontSize: mobile ? 16 : 18 }}>2023-12-23</div></div>
      </div>
      <div style={{ background: 'var(--kosaf-color-action-primary)', color: '#fff', padding: '10px 20px', fontSize: mobile ? 14 : 16 }}>청송홍골농원님 환영합니다.</div>
    </div>
  );
}
function Flow({ mobile }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, background: 'var(--kosaf-color-bg-subtle)', padding: mobile ? '12px 4px' : '24px' }}>{FLOW.map(([l, n], i) => <React.Fragment key={l}>{i ? <KS.Icon name="navigate" rotate={180} size={mobile ? 14 : 20} style={{ opacity: .4 }} /> : null}<div style={{ textAlign: 'center' }}><div style={{ fontSize: mobile ? 20 : 30, fontWeight: 500 }}>{n}</div><div style={{ fontSize: mobile ? 13 : 16 }}>{l}</div></div></React.Fragment>)}</div>;
}
function QnaList({ mobile }) {
  return <div role="list">{QNA.map(([s, t, d], i) => <div role="listitem" key={i} style={{ display: 'grid', gridTemplateColumns: (mobile ? '80px' : '120px') + ' 1fr auto', gap: 12, alignItems: 'center', minHeight: mobile ? 29 : 50, borderBottom: '1px solid var(--kosaf-color-border-subtle)', fontSize: mobile ? 14 : 16 }}><b style={{ fontWeight: 500, color: s === '답변완료' ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)' }}>{s}</b><span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t}</span><span>{d}</span></div>)}</div>;
}

function BuyerMyPC() {
  const [nav, setNav] = React.useState('마이페이지 홈');
  return (
    <PCPage>
      <div style={{ display: 'flex', gap: 60 }}>
        <KS.SideNav title="마이페이지" active={nav} onSelect={setNav} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 50 }}>
          <PageTitle size={30}>마이페이지 홈</PageTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 30 }}><Welcome /><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>{METRICS.map(([l, v, ic]) => <KS.MetricCard key={l} width="100%" label={l} value={v} icon={icoW(ic)} />)}</div></div>
          <div><SectionTitle size={24} right={<a href="#" style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)', textDecoration: 'underline' }}>더보기 &gt;</a>}>주문배송내역</SectionTitle><Flow /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div><SectionTitle size={24}>최근 주문</SectionTitle><div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><KS.ProductListItem device="desktop" imageSrc={IMG_M} status="배송준비중" date="2023-06-14" title="거창농산 13브릭스이상 당도좋은 아삭사과 껍질째먹는 꿀 햇 부사..." price="13,950원" /><KS.ProductListItem device="desktop" imageSrc={IMG_M} status="배송완료" statusTone="done" date="2023-06-14" title="거창농산 13브릭스이상 당도좋은 아삭사과" price="13,950원" /></div></div>
            <div><SectionTitle size={24}>문의내역</SectionTitle><QnaList /></div>
          </div>
        </div>
      </div>
    </PCPage>
  );
}

function BuyerMyMo() {
  return (
    <MoPage>
      <div style={{ padding: 20 }}><PageTitle size={20} style={{ marginBottom: 14 }}>마이페이지 홈</PageTitle><Welcome mobile /></div>
      <div style={{ background: 'var(--kosaf-color-bg-subtle)', padding: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, borderTop: '1px solid var(--kosaf-color-border-default)' }}>{METRICS.map(([l, v, ic]) => <KS.MetricCard key={l} width="100%" label={l} value={v} icon={icoW(ic)} />)}</div>
      <div style={{ padding: '24px 0 0' }}><div style={{ padding: '0 20px 14px', fontSize: 20, fontWeight: 500 }}>서비스바로가기</div>{['거래관리', '주문관리', '정산관리', '관심목록', 'Q&A'].map((s) => <button key={s} style={{ width: '100%', height: 73, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', border: 0, borderTop: '1px solid var(--kosaf-color-border-default)', background: '#fff', fontFamily: 'inherit', fontSize: 20, cursor: 'pointer' }}>{s}<KS.Icon name="navigate" rotate={180} size={20} /></button>)}</div>
      <div style={{ height: 8, background: 'var(--kosaf-color-border-default)' }}></div>
      <div style={{ padding: 20 }}><div style={{ fontSize: 16, fontWeight: 500, marginBottom: 12 }}>주문배송내역</div><Flow mobile /></div>
      <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 20 }}><KS.ProductListItem imageSrc={IMG_M} status="배송준비중" date="2023-06-14" title="거창농산 13브릭스이상 당도좋은 아삭사과 껍질째먹는 꿀 햇 부사..." price="13,950원" /><KS.ProductListItem imageSrc={IMG_M} status="배송완료" statusTone="done" date="2023-06-14" title="거창농산 13브릭스이상 당도좋은 아삭사과" price="13,950원" /></div>
      <div style={{ padding: '0 20px 30px' }}><div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>문의내역</div><QnaList mobile /></div>
    </MoPage>
  );
}
Object.assign(window, { BuyerMyPC, BuyerMyMo });
