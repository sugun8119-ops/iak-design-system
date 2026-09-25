// 통합검색 결과 — Source: 1:97566 (table), 1:98635 / 1:98118 (card), Mo 1:92883 / 1:92625 / 1:93119 (filter)
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
  const [open, setOpen] = React.useState(true);
  const [view, setView] = React.useState('테이블');
  const [only, setOnly] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [liked, setLiked] = React.useState({});
  const rows = KD.rows.filter((r) => !only || !r.disabled).map((r) => ({ ...r, liked: liked[r.no] ?? r.liked }));
  const cards = PRODUCTS.filter((p) => !only || !p.soldOut);
  return (
    <PCPage active="거래방식별">
      <PageHead title="통합검색" desc={'\u2018사과\u2019 검색 결과입니다. 카테고리와 거래 조건으로 결과를 좁힐 수 있습니다.'} />
      {open ? <KS.FilterPanel keyword="사과" onlyOnSale={only} onOnlyOnSale={setOnly} defaultValue={{ sort: ['농산물'], class: ['사과'], item: ['사과'] }} onClose={() => setOpen(false)} />
        : <div style={{ display: 'flex', justifyContent: 'center' }}><KS.Button variant="secondary" onClick={() => setOpen(true)}>카테고리 내 검색 열기</KS.Button></div>}
      <div style={{ marginTop: 50 }}><SearchToolbar total={view === '테이블' ? rows.length : cards.length} view={view} setView={setView} onlyOnSale={only} setOnly={setOnly} /></div>
      {view === '테이블'
        ? <KS.ProductTable rows={rows} onLike={(r) => setLiked({ ...liked, [r.no]: !r.liked })} style={{ marginTop: 20 }} />
        : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 298px)', justifyContent: 'space-between', rowGap: 30, marginTop: 30 }}>{cards.map((p, i) => <KS.ProductCard key={p.id} imageSrc={imgFor(p)} deal={p.deal} title={p.name} price={num(p.price)} meta={cardMeta(p)} deadline={p.deadline} soldOut={p.soldOut} compare={false} />)}</div>}
      <KS.Pagination page={page} onChange={setPage} total={3} style={{ marginTop: 50 }} />
      <div style={{ marginTop: 20, textAlign: 'center' }}><DemoNote>상품·가격은 예시 데이터이며, 사진은 원본에서 제공된 사과 이미지 2종만 사용합니다</DemoNote></div>
    </PCPage>
  );
}

function SearchMo() {
  const [filter, setFilter] = React.useState(false);
  const [sel, setSel] = React.useState({ sort: ['농산물'], class: ['사과'] });
  const [page, setPage] = React.useState(1);
  const tags = Object.values(sel).flat();
  return (
    <MoPage>
      <div style={{ padding: '8px 16px 12px' }}><KS.Search width="100%" placeholder="검색어를 입력하세요" defaultValue="사과" /></div>
      {tags.length ? <div style={{ display: 'flex', gap: 12, padding: '0 16px 8px', flexWrap: 'wrap' }}>{tags.map((t) => <KS.FilterChip key={t} variant="removable" onRemove={() => setSel(Object.fromEntries(Object.entries(sel).map(([k, v]) => [k, v.filter((x) => x !== t)])))}>{t}</KS.FilterChip>)}</div> : null}
      <SearchToolbar mobile total={PRODUCTS.length} onFilter={() => setFilter(true)} filterCount={tags.length} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 176px)', justifyContent: 'space-evenly', rowGap: 12, padding: '12px 0' }}>
        {PRODUCTS.slice(0, 4).map((p) => <KS.ProductCard key={p.id} device="mobile" imageSrc={imgFor(p, true)} deal={p.deal} title={p.name} price={num(p.price)} soldOut={p.soldOut} meta={['판매자 : ' + p.seller, '잔여수량 : ' + num(p.remain)]} />)}
      </div>
      <KS.Pagination device="mobile" page={page} onChange={setPage} total={3} style={{ padding: '12px 0 32px' }} />
      {filter ? <div style={{ position: 'fixed', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 391, zIndex: 100, background: '#fff', overflowY: 'auto' }}><KS.FilterPanel device="mobile" value={sel} onChange={setSel} onClose={() => setFilter(false)} /></div> : null}
    </MoPage>
  );
}
Object.assign(window, { SearchPC, SearchMo });
