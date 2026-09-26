// 통합검색 결과 — Source: 1:97566 (table), 1:98635 / 1:98118 (card), Mo 1:92883 / 1:92625 / 1:93119 (filter)
// 1.4.0: real filtering (demo, client-side), 0-result EmptyState + reset, table sort/select, mobile MobileFilterSheet (draft/applied).
const facet = (x) => ({ item: x.item, deal: (x.deal || '').slice(0, 2), sold: !!(x.soldOut || x.disabled), name: x.name || '' });
function matches(x, s, only, kw) {
  const f = facet(x);
  const items = [].concat(s.class || [], s.item || []);
  if (items.length && !items.includes(f.item)) return false;
  if (s.deal && s.deal.length && !s.deal.includes(f.deal)) return false;
  if (only && f.sold) return false;
  if (kw && !f.name.includes(kw) && !f.item.includes(kw)) return false;
  return true;
}
const priceOf = (r) => parseInt(String(r.price).replace(/\D/g, ''), 10) || 0;
const qtyOf = (r) => parseInt(String(r.qty).replace(/\D/g, ''), 10) || 0;
function SearchToolbar({ total, view, setView, onlyOnSale, setOnly, mobile, onFilter, filterCount }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 8 : 16, padding: mobile ? '12px 16px' : '14px 20px', border: mobile ? 0 : '1px solid var(--kosaf-color-border-default)', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
      <span style={{ fontSize: mobile ? 14 : 18, whiteSpace: 'nowrap' }}>총 <b style={{ color: 'var(--kosaf-color-action-primary)', fontVariantNumeric: 'tabular-nums' }}>{total}</b>개</span>
      {!mobile ? <KS.Checkbox checked={onlyOnSale} onChange={setOnly} style={{ fontSize: 14 }}>판매중인 상품만 보기</KS.Checkbox> : null}
      <span style={{ flex: 1 }}></span>
      <KS.Select aria-label="정렬" options={['등록일순', '가나다순', '인기순', '관심품목순']} defaultValue="등록일순" width={mobile ? 124 : 200} />
      {!mobile ? <KS.Select aria-label="보기 개수" options={['10개씩 보기', '40개씩 보기', '60개씩 보기', '80개씩 보기']} defaultValue="10개씩 보기" width={200} /> : null}
      {mobile ? <KS.Button variant="secondary" size={42} onClick={onFilter} style={{ padding: '0 14px' }}>필터{filterCount ? ' ' + filterCount : ''}</KS.Button> : <KS.SegmentedControl options={['테이블', '카드']} value={view} onChange={setView} aria-label="보기 방식" />}
    </div>
  );
}

function SearchPC() {
  const INIT = { sort: ['농산물'], class: ['사과'], item: ['사과'] };
  const [open, setOpen] = React.useState(true);
  const [view, setView] = React.useState('테이블');
  const [only, setOnly] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [liked, setLiked] = React.useState({});
  const [sel, setSel] = React.useState(INIT);
  const [kw, setKw] = React.useState('사과');
  const [sort, setSort] = React.useState(null);
  const [picked, setPicked] = React.useState([]);
  const [resetN, setResetN] = React.useState(0);
  const reset = () => { setSel({}); setKw(''); setOnly(false); setPicked([]); setResetN(resetN + 1); };
  let rows = KD.rows.filter((r) => matches(r, sel, only, kw)).map((r) => ({ ...r, liked: liked[r.no] ?? r.liked }));
  if (sort) { const g = sort.key === 'price' ? priceOf : sort.key === 'qty' ? qtyOf : (r) => r.deadline; rows = rows.slice().sort((a, b) => { const x = g(a), y = g(b); const d = x > y ? 1 : x < y ? -1 : 0; return sort.dir === 'asc' ? d : -d; }); }
  const cards = PRODUCTS.filter((p) => matches(p, sel, only, kw));
  const total = view === '테이블' ? rows.length : cards.length;
  return (
    <PCPage active="거래방식별">
      <PageHead title="통합검색" desc={kw ? '\u2018' + kw + '\u2019 검색 결과입니다. 카테고리와 거래 조건으로 결과를 좁힐 수 있습니다.' : '카테고리와 거래 조건으로 상품을 찾아보세요.'} />
      {open ? <KS.FilterPanel key={resetN} keyword={kw} onSearch={setKw} onlyOnSale={only} onOnlyOnSale={setOnly} value={sel} onChange={setSel} onClose={() => setOpen(false)} />
        : <div style={{ display: 'flex', justifyContent: 'center' }}><KS.Button variant="secondary" onClick={() => setOpen(true)}>카테고리 내 검색 열기</KS.Button></div>}
      <div style={{ marginTop: 50 }}><SearchToolbar total={total} view={view} setView={setView} onlyOnSale={only} setOnly={setOnly} /></div>
      {total === 0 ? <KS.EmptyState variant="noResults" onAction={reset} style={{ marginTop: 20 }} />
        : view === '테이블'
          ? <>
              {picked.length ? <div role="status" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0 0', fontSize: 14 }}><span>선택 <b style={{ color: 'var(--kosaf-color-action-primary)', fontVariantNumeric: 'tabular-nums' }}>{picked.length}</b>건</span><KS.Button variant="secondary" size={34} style={{ padding: '0 12px' }} onClick={() => setPicked([])}>선택 해제</KS.Button></div> : null}
              <KS.ProductTable rows={rows} highlightFirst={!sort} sort={sort || undefined} onSort={setSort} selectable selectedKeys={picked} onSelectChange={setPicked} onLike={(r) => setLiked({ ...liked, [r.no]: !r.liked })} style={{ marginTop: 20 }} />
            </>
          : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 298px)', justifyContent: 'space-between', rowGap: 30, marginTop: 30 }}>{cards.map((p) => <KS.ProductCard key={p.id} imageSrc={imgFor(p)} deal={p.deal} title={p.name} price={num(p.price)} meta={cardMeta(p)} deadline={p.deadline} soldOut={p.soldOut} compare={false} />)}</div>}
      {total ? <KS.Pagination page={page} onChange={setPage} total={1} style={{ marginTop: 50 }} /> : null}
      <div style={{ marginTop: 20, textAlign: 'center' }}><DemoNote>검색·필터·정렬은 클라이언트 데모입니다. 거래방식에서 ‘역경매’를 고르면 0건 화면을 확인할 수 있습니다</DemoNote></div>
    </PCPage>
  );
}

function SearchMo() {
  const [sheet, setSheet] = React.useState(false);
  const [applied, setApplied] = React.useState({ sort: ['농산물'], class: ['사과'] });
  const [page, setPage] = React.useState(1);
  const chips = Object.entries(applied).flatMap(([k, a]) => (a || []).map((o) => [k, o]));
  const list = PRODUCTS.filter((p) => matches(p, applied));
  const remove = (k, o) => setApplied({ ...applied, [k]: applied[k].filter((x) => x !== o) });
  const Sheet = KS.MobileFilterSheet;
  return (
    <MoPage>
      <div style={{ padding: '8px 16px 12px' }}><KS.Search width="100%" placeholder="검색어를 입력하세요" defaultValue="사과" /></div>
      {chips.length ? <div aria-label="적용된 필터" role="group" style={{ display: 'flex', alignItems: 'center', gap: '4px 12px', padding: '0 16px 8px', flexWrap: 'wrap' }}>{chips.map(([k, o]) => <KS.FilterChip key={k + o} variant="removable" onRemove={() => remove(k, o)}>{o}</KS.FilterChip>)}<button type="button" onClick={() => setApplied({})} style={{ minHeight: 32, marginLeft: 'auto', padding: 0, background: 'none', border: 0, fontFamily: 'inherit', fontSize: 13, color: 'var(--kosaf-color-text-secondary)', textDecoration: 'underline', cursor: 'pointer' }}>전체 초기화</button></div> : null}
      <SearchToolbar mobile total={list.length} onFilter={() => setSheet(true)} filterCount={chips.length} />
      {list.length === 0 ? <KS.EmptyState device="mobile" variant="noResults" onAction={() => setApplied({})} /> : <>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 176px))', justifyContent: 'space-evenly', rowGap: 12, padding: '12px 0' }}>
          {list.map((p) => <KS.ProductCard key={p.id} device="mobile" imageSrc={imgFor(p, true)} deal={p.deal} title={p.name} price={num(p.price)} soldOut={p.soldOut} meta={['판매자 : ' + p.seller, '잔여수량 : ' + num(p.remain)]} />)}
        </div>
        <KS.Pagination device="mobile" page={page} onChange={setPage} total={1} style={{ padding: '12px 0 32px' }} />
      </>}
      {Sheet ? <Sheet open={sheet} value={applied} count={(d) => PRODUCTS.filter((p) => matches(p, d)).length} onApply={(v) => { setApplied(v); setSheet(false); }} onClose={() => setSheet(false)} />
        : sheet ? <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: '#fff', overflowY: 'auto' }}><KS.FilterPanel device="mobile" value={applied} onChange={setApplied} onClose={() => setSheet(false)} /></div> : null}
    </MoPage>
  );
}
Object.assign(window, { SearchPC, SearchMo });
