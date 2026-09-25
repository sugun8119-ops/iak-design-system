// 통합검색 결과 — Source: 1:97566 (table), 1:98635 / 1:98118 (card), Mo 1:92883 / 1:92625 / 1:93119 (filter)
function SearchToolbar({ view, setView, onlyOnSale, setOnly, mobile, onFilter }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: mobile ? 8 : 16, flexWrap: 'wrap', padding: mobile ? '12px 20px' : '14px 20px', border: mobile ? 0 : '1px solid var(--kosaf-color-border-default)', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
      <span style={{ fontSize: mobile ? 14 : 18 }}>Total : <b style={{ color: 'var(--kosaf-color-action-primary)' }}>00</b>개</span>
      {!mobile ? <KS.Checkbox checked={onlyOnSale} onChange={setOnly} style={{ fontSize: 14 }}>판매중인 상품만 보기</KS.Checkbox> : null}
      <span style={{ flex: 1 }}></span>
      <KS.Select aria-label="정렬" options={['등록일순', '가나다순', '인기순', '관심품목순']} defaultValue="등록일순" width={mobile ? 130 : 272} />
      {!mobile ? <KS.Select aria-label="보기 개수" options={['10개씩', '40개씩', '60개씩', '80개씩']} placeholder="10개씩 보기" /> : null}
      {mobile ? <KS.Button variant="secondary" size={42} onClick={onFilter}>필터</KS.Button> : <KS.SegmentedControl options={['테이블', '카드']} value={view} onChange={setView} aria-label="보기 방식" />}
    </div>
  );
}

function SearchPC() {
  const [open, setOpen] = React.useState(true);
  const [view, setView] = React.useState('테이블');
  const [only, setOnly] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [liked, setLiked] = React.useState({});
  return (
    <PCPage active="거래방식별">
      {open ? <KS.FilterPanel keyword="사과" onlyOnSale={only} onOnlyOnSale={setOnly} defaultValue={{ sort: ['농산물'], class: ['사과', '포도'], item: ['사과', '포도'], variety: ['사과'], seller: ['위탁'] }} onClose={() => setOpen(false)} />
        : <div style={{ display: 'flex', justifyContent: 'center' }}><KS.Button onClick={() => setOpen(true)}>카테고리 내 검색 열기</KS.Button></div>}
      <div style={{ marginTop: 50 }}><SearchToolbar view={view} setView={setView} onlyOnSale={only} setOnly={setOnly} /></div>
      {view === '테이블'
        ? <KS.ProductTable rows={KD.rows.map((r) => ({ ...r, liked: liked[r.no] ?? r.liked }))} onLike={(r) => setLiked({ ...liked, [r.no]: !(liked[r.no] ?? r.liked) })} style={{ marginTop: 16 }} />
        : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20, marginTop: 20 }}>{KD.cards.concat(KD.cards).map((c, i) => <KS.ProductCard key={i} imageSrc={c.soldOut ? undefined : IMG_D} deal={c.deal} title={c.title} price="50,000" deadline={c.deadline} soldOut={c.soldOut} selected={i % 5 === 0} compare={false} />)}</div>}
      <KS.Pagination page={page} onChange={setPage} total={10} style={{ marginTop: 40 }} />
    </PCPage>
  );
}

function SearchMo() {
  const [filter, setFilter] = React.useState(false);
  const [page, setPage] = React.useState(1);
  return (
    <MoPage>
      <div style={{ padding: '10px 20px' }}><KS.Search width="100%" placeholder="검색어를 입력하세요" defaultValue="사과" /></div>
      <div style={{ display: 'flex', gap: 10, padding: '4px 20px 10px', flexWrap: 'wrap' }}><KS.FilterChip variant="removable">사과</KS.FilterChip><KS.FilterChip variant="removable">농산물</KS.FilterChip></div>
      <SearchToolbar mobile onFilter={() => setFilter(true)} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', justifyItems: 'center', gap: '10px 0', padding: '10px 10px' }}>
        {KD.cards.slice(0, 4).map((c, i) => <KS.ProductCard key={i} device="mobile" imageSrc={IMG_M} deal={c.deal} title={c.title} price="50,000" meta={['판매자 : 대야청과', '생산자 : 김원생', '거래수량 : 300']} />)}
      </div>
      <KS.Pagination device="mobile" page={page} onChange={setPage} total={3} style={{ padding: '20px 0 40px' }} />
      {filter ? <div style={{ position: 'fixed', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 390, zIndex: 100, background: '#fff', overflowY: 'auto' }}><KS.FilterPanel device="mobile" defaultValue={{ sort: ['농산물', '축산물', '임산물', '수산물'] }} onClose={() => setFilter(false)} /></div> : null}
    </MoPage>
  );
}
Object.assign(window, { SearchPC, SearchMo });
