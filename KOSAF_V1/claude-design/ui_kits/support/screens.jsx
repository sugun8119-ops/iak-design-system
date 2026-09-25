// 고객센터 FAQ / 공지사항 / 이용후기 — Source: FAQ 1:90254, 공지사항 1:93514 / Mo 1:93353, 이용후기 1:93671 / Mo 1:92154, No Result 1:91890, 알림 1:92553
const FAQ_CATS = ['전체', '상품', '거래', '회원', '결제', '배송', '정산', '분쟁조정', '기타'];
const NOTICES = [['**마켓 고객정보 보안 강화작업으로 인한 서비스 일시 중단 안내', '2023-04-23'], ['국민카드 결제가 일시 중지됩니다.', '2023-04-21'], ['현대포인트 결제가 가능합니다.', '2023-04-21']];
const CS_NAV = [{ label: 'FAQ', items: [] }, { label: 'Q&A', items: [] }, { label: '공지사항', items: [] }, { label: '이용후기', items: [] }];

function FaqSearch({ mobile }) {
  return <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 10, justifyContent: 'center', padding: mobile ? 16 : 24, background: 'var(--kosaf-color-bg-subtle)', flexWrap: 'wrap' }}>{!mobile ? <KS.Select size="form" width={160} options={['제목', '내용']} defaultValue="제목" aria-label="검색 구분" /> : null}<KS.Input width={mobile ? 240 : 560} placeholder="검색어 입력" aria-label="검색어" /><KS.Button size={45} width={mobile ? 70 : 120} type="submit">검색</KS.Button></form>;
}
function FaqBody({ mobile }) {
  const [cat, setCat] = React.useState(0);
  const items = cat === 0 ? KD.faq : KD.faq.filter((f) => f.title.includes('[' + FAQ_CATS[cat] + ']'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: mobile ? 16 : 30 }}>
      <FaqSearch mobile={mobile} />
      <div role="tablist" style={{ display: 'flex', gap: mobile ? 6 : 10, flexWrap: 'wrap', padding: mobile ? '0 16px' : 0 }}>{FAQ_CATS.map((c, i) => <KS.Tab key={c} selected={cat === i} onClick={() => setCat(i)} width={mobile ? 60 : 124} style={mobile ? { height: 36, fontSize: 14, padding: '0 10px' } : undefined}>{c}</KS.Tab>)}</div>
      {items.length ? <KS.Accordion key={cat} device={mobile ? 'mobile' : 'desktop'} items={items} defaultOpen={[0]} /> : <KS.EmptyState device={mobile ? 'mobile' : 'desktop'} message="조회된 FAQ가 없습니다." style={{ minHeight: 200 }} />}
      <KS.Pagination device={mobile ? 'mobile' : 'desktop'} total={mobile ? 3 : 10} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: mobile ? '10px 16px 30px' : 0 }}><span style={{ fontSize: mobile ? 14 : 18 }}>찾으시는 내용이 없나요?</span><KS.Button variant="secondary" size={mobile ? 42 : 45}>문의작성</KS.Button></div>
    </div>
  );
}
function NoticeBody({ mobile }) {
  return <div><div role="table">{mobile ? NOTICES.map((n, i) => <KS.TableRow key={i} device="mobile" cells={[n[0], n[1]]} style={{ borderTop: i ? 0 : undefined }} />) : <><KS.TableRow header columns="80px 1fr 160px" cells={['NO', '제목', '등록일']} />{NOTICES.map((n, i) => <KS.TableRow key={i} columns="80px 1fr 160px" style={{ borderTop: 0 }} cells={[NOTICES.length - i, n[0], n[1]]} />)}</>}</div><KS.Pagination device={mobile ? 'mobile' : 'desktop'} total={3} style={{ marginTop: 24 }} /></div>;
}
function ReviewBody({ mobile }) {
  const [empty, setEmpty] = React.useState(false);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: mobile ? '0 16px 10px' : '0 0 16px', borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
        <span style={{ fontSize: mobile ? 14 : 18 }}>Total : <b style={{ color: 'var(--kosaf-color-action-primary)' }}>{empty ? '00' : '02'}</b>개</span><span style={{ flex: 1 }}></span>
        <KS.Select aria-label="정렬" width={mobile ? 120 : 200} options={['등록일순', '평점높은순', '평점낮은순']} defaultValue="등록일순" />
        <KS.Button variant="secondary" size={34} onClick={() => setEmpty(!empty)}>{empty ? '데이터 보기' : '결과없음 보기'}</KS.Button>
      </div>
      {empty ? <KS.EmptyState device={mobile ? 'mobile' : 'desktop'} message="조회된 리뷰가 없습니다." style={{ borderTop: 0 }} /> : <div style={{ padding: mobile ? '0 16px' : 0 }}>{[5, 4].map((r) => <KS.ReviewItem key={r} rating={r} device={mobile ? 'mobile' : 'desktop'} tags={r === 5 ? ['품질 만족', '배송 만족', '포장상태 만족'] : []} actions={[{ label: mobile ? '수정' : '삭제' }]} />)}</div>}
    </div>
  );
}

function SupportPC() {
  const [nav, setNav] = React.useState('FAQ');
  return (
    <PCPage>
      <div style={{ display: 'flex', gap: 60 }}>
        <KS.SideNav title="고객센터" groups={CS_NAV} active={nav} onSelect={setNav} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <PageTitle size={30} style={{ marginBottom: 30 }}>{nav === '이용후기' ? '이용후기(리뷰)' : nav}</PageTitle>
          {nav === 'FAQ' ? <FaqBody /> : nav === '공지사항' ? <NoticeBody /> : nav === '이용후기' ? <ReviewBody /> : <KS.EmptyState message="Q&A 화면은 이번 범위에서 재현하지 않았습니다." description="FAQ · 공지사항 · 이용후기를 선택하세요." />}
        </div>
      </div>
    </PCPage>
  );
}

function SupportMo() {
  const [t, setT] = React.useState(0);
  const [alarm, setAlarm] = React.useState(false);
  return (
    <MoPage>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px' }}><PageTitle size={20}>고객센터</PageTitle><KS.Button variant="secondary" size={34} onClick={() => setAlarm(true)}>알림 보기</KS.Button></div>
      <div role="tablist" style={{ display: 'flex', gap: 6, padding: '0 16px 16px' }}>{['FAQ', '공지사항', '이용후기'].map((x, i) => <KS.Tab key={x} selected={t === i} onClick={() => setT(i)} width={110}>{x}</KS.Tab>)}</div>
      {t === 0 ? <FaqBody mobile /> : t === 1 ? <NoticeBody mobile /> : <ReviewBody mobile />}
      {alarm ? <div style={{ position: 'fixed', top: 0, bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 390, zIndex: 100, background: '#fff' }}><KS.NotificationList onClose={() => setAlarm(false)} /></div> : null}
    </MoPage>
  );
}
Object.assign(window, { SupportPC, SupportMo });
