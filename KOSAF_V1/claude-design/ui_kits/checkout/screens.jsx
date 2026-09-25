// 주문·결제 — Source: 1:85780 (PC), 1:104139 (Mo). 완료화면 — 1:104312 (PC), 1:104518 (Mo). Order = 사과/부사 10박스 + 배/신고 4박스.
const ORDER = [{ p: PRODUCTS[0], qty: 10 }, { p: PRODUCTS[2], qty: 4 }];
const ORDER_TOTAL = ORDER.reduce((s, o) => s + o.p.price * o.qty, 0);
const orderRows = [['상품금액', won(ORDER_TOTAL)], ['운임', '0원'], ['부가세', '0원']];

function PayMethod({ mobile, value, onChange }) {
  return (
    <div role="radiogroup" aria-label="결제방법" style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 16 : 40, padding: mobile ? 16 : '24px 30px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10 }}>
      <KS.Radio name={'pay' + (mobile ? 'm' : 'p')} value="a" checked={value === 'a'} onChange={onChange}>정산소 (현금, 여신)</KS.Radio>
      <KS.Radio name={'pay' + (mobile ? 'm' : 'p')} value="b" checked={value === 'b'} onChange={onChange}>개별약정</KS.Radio>
    </div>
  );
}

function CompleteBody({ mobile, pay, onRestart }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: mobile ? 12 : 20, padding: mobile ? '32px 16px' : '60px 0 0', textAlign: 'center' }}>
      <span style={{ width: mobile ? 64 : 90, height: mobile ? 64 : 90, borderRadius: '50%', background: 'var(--kosaf-color-action-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><KS.Icon name="check" size={mobile ? 30 : 44} /></span>
      <h2 style={{ margin: mobile ? '8px 0 0' : '10px 0 0', fontSize: mobile ? 20 : 30, fontWeight: 700 }}>주문이 완료되었습니다.</h2>
      <p style={{ margin: 0, fontSize: mobile ? 14 : 18, lineHeight: mobile ? '20px' : '28px', color: 'var(--kosaf-color-text-secondary)' }}>마이페이지 &gt; 주문/배송내역에서 상세정보를 확인할 수 있습니다.</p>
      <div style={{ width: '100%', maxWidth: mobile ? undefined : 1000, textAlign: 'left', marginTop: mobile ? 20 : 30 }}>
        <SectionTitle size={mobile ? 18 : 24}>결제정보</SectionTitle>
        <KS.DescriptionList device={mobile ? 'mobile' : 'desktop'} items={[{ label: '주문번호', value: '2023050800012 (예시)' }, { label: '상품금액', value: won(ORDER_TOTAL) }, { label: '운임', value: '0원' }, { label: '부가세', value: '0원' }, { label: '결제방법', value: pay === 'b' ? '개별약정' : '정산소' }, { label: '총 결제금액', value: <b style={{ color: 'var(--kosaf-color-action-primary)', fontSize: mobile ? 18 : 24 }}>{won(ORDER_TOTAL)}</b> }]} />
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: mobile ? 16 : 30, width: mobile ? '100%' : undefined }}><KS.Button variant="secondary" size={mobile ? 45 : 50} width={mobile ? undefined : 200} style={mobile ? { flex: 1 } : undefined} onClick={onRestart}>상품검색</KS.Button><KS.Button size={mobile ? 45 : 50} width={mobile ? undefined : 200} style={mobile ? { flex: 1 } : undefined}>주문/배송내역</KS.Button></div>
    </div>
  );
}

function CheckoutPC({ startDone }) {
  const [done, setDone] = React.useState(!!startDone);
  const [pay, setPay] = React.useState('a');
  return (
    <PCPage>
      <PageHead title={done ? '주문완료' : '주문/결제'} desc={done ? null : '납품기일과 납품장소를 확인한 뒤 결제방법을 선택하세요.'} right={<KS.Stepper current={done ? 2 : 1} itemWidth={150} />} />
      {done ? <CompleteBody pay={pay} onRestart={() => setDone(false)} /> : <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
        <section><SectionTitle size={24}>상품정보</SectionTitle>
          <div style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 30 }}>
            <h3 style={{ margin: '0 0 20px', paddingBottom: 16, borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 20, fontWeight: 700 }}>대야청과</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '30px 60px' }}>{ORDER.map(({ p, qty }) => <KS.CartItem key={p.id} device="desktop" imageSrc={imgFor(p, true)} title={p.name} price={won(p.price)} specs={[['단위/포장', p.unit], ['등급/크기', p.grade], ['금액', won(p.price * qty)]]} quantity={qty} editableQuantity={false} deliveryDate="2023-05-10" />)}</div>
          </div>
        </section>
        <section><SectionTitle size={24}>결제정보</SectionTitle><PayMethod value={pay} onChange={setPay} /></section>
        <section><KS.OrderSummary layout="horizontal" total={won(ORDER_TOTAL)} rows={orderRows} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 30 }}><KS.Button variant="secondary" size={50} width={200}>이전</KS.Button><KS.Button size={50} width={200} onClick={() => setDone(true)}>{won(ORDER_TOTAL)} 결제하기</KS.Button></div>
          <div style={{ textAlign: 'center', marginTop: 16 }}><DemoNote>결제는 실제로 처리되지 않습니다</DemoNote></div>
        </section>
      </div>}
    </PCPage>
  );
}

function CheckoutMo({ startDone }) {
  const [done, setDone] = React.useState(!!startDone);
  const [pay, setPay] = React.useState('a');
  return (
    <MoPage header={false} bottom={done ? null : <KS.BottomActionBar variant="full" primaryLabel={won(ORDER_TOTAL) + ' 결제하기'} onPrimary={() => setDone(true)} />} bottomHeight={70}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, padding: '0 16px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}><h1 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{done ? '주문완료' : '주문/결제'}</h1><button aria-label="닫기" style={{ width: 44, height: 44, marginRight: -12, border: 0, background: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><KS.CloseX size={18} /></button></div>
      <div style={{ padding: '16px 16px 0' }}><KS.Stepper current={done ? 2 : 1} itemWidth={116} style={{ gap: 3 }} /></div>
      {done ? <CompleteBody mobile pay={pay} onRestart={() => setDone(false)} /> : (
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <section style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 16 }}>
            <h2 style={{ margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 18, fontWeight: 700 }}>대야청과</h2>
            {ORDER.map(({ p, qty }, i) => <div key={p.id} style={{ paddingTop: i ? 20 : 0, marginTop: i ? 20 : 0, borderTop: i ? '1px solid var(--kosaf-color-border-default)' : 0 }}><KS.CartItem imageSrc={imgFor(p, true)} title={p.name} price={won(p.price)} specs={[['단위/포장', p.unit], ['금액', won(p.price * qty)]]} quantity={qty} editableQuantity={false} deliveryDate="2023-05-10" /></div>)}
          </section>
          <KS.OrderSummary total={won(ORDER_TOTAL)} rows={orderRows} />
          <section><h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 12px' }}>결제정보</h2><PayMethod mobile value={pay} onChange={setPay} /></section>
        </div>
      )}
    </MoPage>
  );
}
Object.assign(window, { CheckoutPC, CheckoutMo });
