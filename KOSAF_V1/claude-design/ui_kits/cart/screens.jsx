// 장바구니 — Source: 상품 있음 1:103657 (PC) / 1:103945 (Mo), 상품 없음 1:104584
const CART_INIT = [
  { seller: '서울청과', items: [{ id: 1, title: '사과/부사/특20kg', price: '10,000원', qty: 100, sel: true }, { id: 2, title: '사과/부사/특20kg', price: '20,000원', qty: 20, sel: true, specs: [['단위/포장', '5kg망'], ['등급/크기', '중 (20개)'], ['남은수량', '300']] }] },
  { seller: '서울청과', items: [{ id: 3, title: '프리미엄 부사 꿀사과 5kg', price: '10,000원', qty: 100, sel: false }] },
];
const won = (n) => n.toLocaleString() + '원';
const priceOf = (it) => parseInt(it.price.replace(/\D/g, ''), 10);

function useCart(empty) {
  const [groups, setGroups] = React.useState(empty ? [] : CART_INIT);
  const upd = (id, patch) => setGroups(groups.map((g) => ({ ...g, items: g.items.map((it) => (it.id === id ? { ...it, ...patch } : it)) })));
  const remove = (id) => setGroups(groups.map((g) => ({ ...g, items: g.items.filter((it) => it.id !== id) })).filter((g) => g.items.length));
  const all = groups.flatMap((g) => g.items);
  const total = all.filter((i) => i.sel).reduce((s, i) => s + priceOf(i) * i.qty, 0);
  const allSel = all.length > 0 && all.every((i) => i.sel);
  const selectAll = (v) => setGroups(groups.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, sel: v })) })));
  return { groups, upd, remove, total, allSel, selectAll, clear: () => setGroups([]), removeSel: () => setGroups(groups.map((g) => ({ ...g, items: g.items.filter((i) => !i.sel) })).filter((g) => g.items.length)) };
}

function CartBar({ c, mobile }) {
  const link = { background: 'none', border: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: mobile ? 13 : 16, color: 'var(--kosaf-color-text-secondary)' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 10 : 20, padding: mobile ? '12px 16px' : '20px 0' }}>
      <KS.Checkbox checked={c.allSel} onChange={c.selectAll} style={{ fontSize: mobile ? 14 : 18, fontWeight: 700 }}>전체 선택</KS.Checkbox>
      <span style={{ flex: 1 }}></span><button style={link} onClick={c.removeSel}>선택 삭제</button><button style={link} onClick={c.clear}>품절/판매종료 상품 전체삭제</button>
    </div>
  );
}

function CartPC({ empty }) {
  const c = useCart(empty);
  return (
    <PCPage>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><PageTitle>장바구니</PageTitle><KS.Stepper current={0} itemWidth={150} /></div>
      {c.groups.length === 0 ? <div style={{ marginTop: 40 }}><KS.EmptyState actionLabel="상품검색" /></div> : <>
        <CartBar c={c} />
        {c.groups.map((g, gi) => (
          <section key={gi} style={{ border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 30, marginBottom: 20 }}>
            <h2 style={{ margin: '0 0 20px', fontSize: 24, fontWeight: 700 }}>{g.seller}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>{g.items.map((it) => <KS.CartItem key={it.id} device="desktop" imageSrc={IMG_M} title={it.title} price={it.price} specs={it.specs} quantity={it.qty} onQuantity={(q) => c.upd(it.id, { qty: q })} deliveryDate="2022-03-23" selectable selected={it.sel} onSelect={(v) => c.upd(it.id, { sel: v })} onRemove={() => c.remove(it.id)} />)}</div>
          </section>
        ))}
        <KS.OrderSummary layout="horizontal" total={won(c.total)} rows={[['총 주문금액', won(c.total)], ['운임', '0원'], ['부가세', '0원']]} style={{ marginTop: 20 }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 40 }}><KS.Button variant="secondary" size={50} width={200}>상품검색</KS.Button><KS.Button size={50} width={200} disabled={!c.total}>구매하기</KS.Button></div>
      </>}
    </PCPage>
  );
}

function CartMo({ empty }) {
  const c = useCart(empty);
  return (
    <MoPage bottom={c.groups.length ? <KS.BottomActionBar variant="full" primaryLabel={'구매하기 ' + won(c.total)} disabled={!c.total} /> : null}>
      <div style={{ padding: '10px 16px 0' }}><PageTitle size={24}>장바구니</PageTitle><div style={{ marginTop: 14 }}><KS.Stepper current={0} itemWidth={116} style={{ gap: 3 }} /></div></div>
      {c.groups.length === 0 ? <div style={{ padding: 16 }}><KS.EmptyState device="mobile" actionLabel="상품검색" /></div> : <>
        <CartBar c={c} mobile />
        {c.groups.map((g, gi) => (
          <section key={gi} style={{ margin: '0 16px 16px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 10, padding: 16 }}>
            <h2 style={{ margin: '0 0 14px', paddingBottom: 12, borderBottom: '2px solid var(--kosaf-color-border-default)', fontSize: 20, fontWeight: 700 }}>{g.seller}</h2>
            {g.items.map((it, i) => <div key={it.id} style={{ paddingTop: i ? 20 : 0, marginTop: i ? 20 : 0, borderTop: i ? '1px solid var(--kosaf-color-border-default)' : 0 }}><KS.CartItem imageSrc={IMG_M} title={it.title} price={it.price} specs={it.specs} quantity={it.qty} onQuantity={(q) => c.upd(it.id, { qty: q })} deliveryDate="2022-03-23" selectable selected={it.sel} onSelect={(v) => c.upd(it.id, { sel: v })} onRemove={() => c.remove(it.id)} /></div>)}
          </section>
        ))}
        <div style={{ padding: '0 16px 30px' }}><KS.OrderSummary total={won(c.total)} rows={[['총 주문금액', won(c.total)], ['부가세', '0원'], ['운임', '0원']]} /></div>
      </>}
    </MoPage>
  );
}
Object.assign(window, { CartPC, CartMo });
