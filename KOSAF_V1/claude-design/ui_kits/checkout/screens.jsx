// 주문·결제 — Source: 1:85780 (PC), 1:104139 (Mo). 완료화면 — 1:104312 (PC), 1:104518 (Mo)
function PayMethod({ mobile }) {
  const [p, setP] = React.useState('a');
  return (
    <div role="radiogroup" aria-label="결제방법" style={{ display: 'flex', gap: 30, padding: mobile ? '16px 20px' : '24px 30px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10 }}>
      <KS.Radio name={'pay' + (mobile ? 'm' : 'p')} value="a" checked={p === 'a'} onChange={setP}>정산소 (현금, 연신)</KS.Radio>
      <KS.Radio name={'pay' + (mobile ? 'm' : 'p')} value="b" checked={p === 'b'} onChange={setP}>개별약정</KS.Radio>
    </div>
  );
}

function CompleteBody({ mobile, onRestart }) {
  const check = <KS.Icon name="check" size={mobile ? 34 : 44} />;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: mobile ? 16 : 24, padding: mobile ? '40px 20px' : '80px 0 0', textAlign: 'center' }}>
      <span style={{ width: mobile ? 70 : 90, height: mobile ? 70 : 90, borderRadius: '50%', background: 'var(--kosaf-color-action-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{check}</span>
      <div style={{ fontSize: mobile ? 22 : 30, fontWeight: 700 }}>감사합니다. 주문이 완료되었습니다.</div>
      <div style={{ fontSize: mobile ? 14 : 18, color: 'var(--kosaf-color-text-secondary)', whiteSpace: 'pre-line' }}>{'마이페이지 > 주문/배송내역에서\n상세정보를 확인할 수 있습니다.'}</div>
      <div style={{ width: '100%', maxWidth: mobile ? 350 : 1596, textAlign: 'left', marginTop: mobile ? 10 : 30 }}>
        <SectionTitle size={mobile ? 20 : 30}>결제정보</SectionTitle>
        <KS.DescriptionList device={mobile ? 'mobile' : 'desktop'} items={[{ label: '총상품가격', value: '9,400,000원' }, { label: '운임', value: '0원' }, { label: '부가세', value: '0원' }, { label: '결제방법', value: '정산소' }, { label: '총 결제방법', value: <b style={{ color: 'var(--kosaf-color-action-primary)', fontSize: mobile ? 18 : 24 }}>9,400,000원</b> }]} />
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}><KS.Button variant="secondary" size={mobile ? 45 : 50} width={mobile ? 150 : 200} onClick={onRestart}>상품검색</KS.Button><KS.Button size={mobile ? 45 : 50} width={mobile ? 150 : 200}>주문/배송내역</KS.Button></div>
    </div>
  );
}

function CheckoutPC({ startDone }) {
  const [done, setDone] = React.useState(!!startDone);
  return (
    <PCPage>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><PageTitle>{done ? '주문완료' : '주문/결제'}</PageTitle><KS.Stepper current={done ? 2 : 1} itemWidth={150} /></div>
      {done ? <CompleteBody onRestart={() => setDone(false)} /> : <>
        <div style={{ marginTop: 50 }}><SectionTitle>상품정보</SectionTitle></div>
        <div style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <KS.CartItem device="desktop" imageSrc={IMG_M} title="사과/부사/특20kg" quantity={100} editableQuantity={false} deliveryDate="2022-03-23" />
          <KS.CartItem device="desktop" imageSrc={IMG_M} title="사과/홍옥/15KG" price="20,000원" quantity={20} editableQuantity={false} deliveryDate="2022-03-23" specs={[['판매자', '대구경북능금농협'], ['거래수량', '상(20개)'], ['단위/포장', '5kg망']]} />
        </div>
        <div style={{ marginTop: 50 }}><SectionTitle>결제정보</SectionTitle><PayMethod /></div>
        <KS.OrderSummary layout="horizontal" total="4,000,000원" rows={[['상품 금액', '4,000,000원'], ['운임', '0원'], ['부가세', '0원']]} style={{ marginTop: 30 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 40 }}><KS.Button variant="secondary" size={50} width={200}>이전</KS.Button><KS.Button size={50} width={200} onClick={() => setDone(true)}>결제하기</KS.Button></div>
      </>}
    </PCPage>
  );
}

function CheckoutMo({ startDone }) {
  const [done, setDone] = React.useState(!!startDone);
  return (
    <MoPage header={false} bottom={done ? null : <KS.BottomActionBar variant="full" primaryLabel="결제하기" onPrimary={() => setDone(true)} />}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74, padding: '0 20px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}><PageTitle size={24}>{done ? '주문완료' : '주문/결제'}</PageTitle><button aria-label="닫기" style={{ width: 44, height: 44, marginRight: -10, border: 0, background: 'none', cursor: 'pointer' }}><KS.CloseX size={20} /></button></div>
      <div style={{ padding: '16px 16px 0' }}><KS.Stepper current={done ? 2 : 1} itemWidth={119} style={{ gap: 0 }} /></div>
      {done ? <CompleteBody mobile onRestart={() => setDone(false)} /> : (
        <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <section style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 16 }}>
            <h2 style={{ margin: '0 0 14px', paddingBottom: 12, borderBottom: '2px solid var(--kosaf-color-border-default)', fontSize: 20, fontWeight: 700 }}>서울청과</h2>
            <KS.CartItem imageSrc={IMG_M} quantity={100} editableQuantity={false} deliveryDate="2022-03-23" />
            <div style={{ borderTop: '1px solid var(--kosaf-color-border-default)', marginTop: 16, paddingTop: 16 }}><KS.OrderSummary title="판매샵 합계" total="1,100,000원" rows={[['상품 금액', '1,100,000원'], ['운임비', '0원'], ['부가세', '0원']]} style={{ border: 0, padding: 0 }} /></div>
          </section>
          <KS.OrderSummary />
          <div><div style={{ fontSize: 20, fontWeight: 500, margin: '10px 0 14px' }}>결제정보</div><PayMethod mobile /></div>
        </div>
      )}
    </MoPage>
  );
}
Object.assign(window, { CheckoutPC, CheckoutMo });
