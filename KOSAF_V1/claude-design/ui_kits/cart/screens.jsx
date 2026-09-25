// 장바구니 — Source: 상품 있음 1:103657 (PC) / 1:103945 (Mo), 상품 없음 1:104584. Totals = Σ(단가 × 수량), from shared PRODUCTS.
const P = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
const CART_INIT = [
  { seller: '대야청과', items: [{ id: 'p1', qty: 10, sel: true }, { id: 'p3', qty: 4, sel: true }] },
  { seller: '서울청과', items: [{ id: 'p2', qty: 6, sel: false }] },
];
const specsOf = (p) => [['단위/포장', p.unit], ['등급/크기', p.grade], ['남은수량', num(p.remain) + '박스']];

function useCart(empty) {
  const [groups, setGroups] = React.useState(empty ? [] : CART_INIT);
  const map = (fn) => setGroups(groups.map((g) => ({ ...g, items: fn(g.items) })).filter((g) => g.items.length));
  const all = groups.flatMap((g) => g.items);
  const total = all.filter((i) => i.sel).reduce((s, i) => s + P[i.id].price * i.qty, 0);
  const selCount = all.filter((i) => i.sel).length;
  return {
    groups, total, selCount, count: all.length, allSel: all.length > 0 && selCount === all.length,
    upd: (id, patch) => map((items) => items.map((it) => (it.id === id ? { ...it, ...patch } : it))),
    remove: (id) => map((items) => items.filter((it) => it.id !== id)),
    selectAll: (v) => map((items) => items.map((it) => ({ ...it, sel: v }))),
    removeSel: () => map((items) => items.filter((i) => !i.sel)),
  };
}

function CartBar({ c, mobile }) {
  const link = { background: 'none', border: 0, padding: '4px 0', cursor: 'pointer', fontFamily: 'inherit', fontSize: mobile ? 13 : 16, color: 'var(--kosaf-color-text-secondary)' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 12 : 20, padding: mobile ? '12px 16px' : '0 0 20px', borderBottom: '1px solid var(--kosaf-color-border-default)', marginBottom: mobile ? 16 : 30 }}>
      <KS.Checkbox checked={c.allSel} onChange={c.selectAll} style={{ fontSize: mobile ? 14 : 18, fontWeight: 500 }}>전체 선택 ({c.selCount}/{c.count})</KS.Checkbox>
      <span style={{ flex: 1 }}></span><button style={link} onClick={c.removeSel} disabled={!c.selCount}>선택 삭제</button>
    </div>
  );
}
const lineItem = (c, it, mobile) => { const p = P[it.id]; return <KS.CartItem key={it.id} device={mobile ? 'mobile' : 'desktop'} imageSrc={imgFor(p, true)} title={p.name} price={won(p.price)} specs={specsOf(p)} quantity={it.qty} onQuantity={(q) => c.upd(it.id, { qty: q })} deliveryDate="2023-05-10" selectable selected={it.sel} onSelect={(v) => c.upd(it.id, { sel: v })} onRemove={() => c.remove(it.id)} />; };
const sumRows = (t) => [['총 주문금액', won(t)], ['운임', '0원'], ['부가세', '0원']];

function CartPC({ empty }) {
  const c = useCart(empty);
  return (
    <PCPage>
      <PageHead title="장바구니" desc="판매샵별로 담긴 상품을 확인하고 주문할 상품을 선택하세요." right={<KS.Stepper current={0} itemWidth={150} />} />
      {c.groups.length === 0 ? <KS.EmptyState actionLabel="상품검색" /> : <>
        <CartBar c={c} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          {c.groups.map((g) => (
            <section key={g.seller} style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 30 }}>
              <h2 style={{ margin: '0 0 20px', paddingBottom: 16, borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 24, fontWeight: 700 }}>{g.seller}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '30px 60px' }}>{g.items.map((it) => lineItem(c, it))}</div>
            </section>
          ))}
        </div>
        <KS.OrderSummary layout="horizontal" total={won(c.total)} rows={sumRows(c.total)} style={{ marginTop: 50 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 30 }}><KS.Button variant="secondary" size={50} width={200}>계속 쇼핑하기</KS.Button><KS.Button size={50} width={200} disabled={!c.total}>선택상품 주문하기</KS.Button></div>
      </>}
    </PCPage>
  );
}

function CartMo({ empty }) {
  const c = useCart(empty);
  return (
    <MoPage title="장바구니" back bottom={c.groups.length ? <KS.BottomActionBar variant="full" primaryLabel={c.total ? won(c.total) + ' 주문하기' : '주문할 상품을 선택하세요'} disabled={!c.total} /> : null}>
      <div style={{ padding: '12px 16px 4px' }}><KS.Stepper current={0} itemWidth={116} style={{ gap: 3 }} /></div>
      {c.groups.length === 0 ? <div style={{ padding: 16 }}><KS.EmptyState device="mobile" actionLabel="상품검색" /></div> : <>
        <CartBar c={c} mobile />
        {c.groups.map((g) => (
          <section key={g.seller} style={{ margin: '0 16px 16px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 16 }}>
            <h2 style={{ margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid var(--kosaf-color-border-default)', fontSize: 18, fontWeight: 700 }}>{g.seller}</h2>
            {g.items.map((it, i) => <div key={it.id} style={{ paddingTop: i ? 20 : 0, marginTop: i ? 20 : 0, borderTop: i ? '1px solid var(--kosaf-color-border-default)' : 0 }}>{lineItem(c, it, true)}</div>)}
          </section>
        ))}
        <div style={{ padding: '0 16px 20px' }}><KS.OrderSummary total={won(c.total)} rows={sumRows(c.total)} /></div>
      </>}
    </MoPage>
  );
}
Object.assign(window, { CartPC, CartMo });
