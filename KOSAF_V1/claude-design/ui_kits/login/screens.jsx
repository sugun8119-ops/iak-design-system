// 로그인 — Source: 1:87393 (PC 1920×1080, bg #F1F3F8, two 627×361 r20 cards), 1:87494 (Mo). 휴면 계정 안내 1:103625.
function LoginForm({ mobile, onDormant }) {
  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = (e) => { e.preventDefault(); if (!id || !pw) setErr('아이디와 비밀번호를 입력해주세요.'); else { setErr(''); onDormant(); } };
  const card = { boxSizing: 'border-box', background: '#fff', borderRadius: 20, padding: mobile ? 24 : '50px 64px', width: mobile ? '100%' : 627, minHeight: mobile ? undefined : 361 };
  return (
    <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 16 : 26, justifyContent: 'center' }}>
      <form style={card} onSubmit={submit} aria-label="일반 로그인">
        <h2 style={{ margin: '0 0 30px', fontSize: 24, fontWeight: 700 }}>일반 로그인</h2>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <KS.Input width="100%" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} aria-label="아이디" state={err && !id ? 'error' : undefined} />
            <KS.Input width="100%" type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} aria-label="비밀번호" state={err && !pw ? 'error' : undefined} errorMessage={err} />
          </div>
          <KS.Button type="submit" size={mobile ? 102 : 102} width={mobile ? 90 : 125} style={{ height: 102, alignSelf: 'flex-start' }}>로그인</KS.Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginTop: 20, fontSize: 16 }}>
          <KS.Checkbox>아이디 저장</KS.Checkbox>
          <nav aria-label="계정 찾기" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: mobile ? 14 : 16 }}>{['회원가입', '아이디 찾기', '비밀번호 찾기'].map((t, i) => <React.Fragment key={t}>{i ? <span aria-hidden="true" style={{ width: 1, height: 12, background: 'var(--kosaf-color-border-strong)' }}></span> : null}<a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--kosaf-color-text-primary)' }}>{t}</a></React.Fragment>)}</nav>
        </div>
      </form>
      <div style={card}>
        <h2 style={{ margin: '0 0 30px', fontSize: 24, fontWeight: 700 }}>공동인증서 로그인</h2>
        <KS.Button fullWidth size={70} style={{ height: 102 }} onClick={onDormant}>공동인증서 로그인</KS.Button>
        <div style={{ marginTop: 20, fontSize: 16, fontWeight: 500 }}>공동인증서를 등록한 후에 로그인이 가능합니다.</div>
      </div>
    </div>
  );
}

function Dormant({ open, onClose, width }) {
  return <KS.AlertDialog open={open} onClose={onClose} onPrimary={onClose} onSecondary={onClose} width={width} title="휴면 계정 안내" message={'안녕하세요!\n회원님은 농산물온라인도매시장에 1년 이상 로그인하지 않아 관련 법령에 따라 휴면 계정으로 전환되었습니다.'} details={[['마지막 접속일', '2022-05-04'], ['휴면 전환일', '2022-05-04']]} primaryLabel="휴면 해제하기" secondaryLabel="다음에 하기" />;
}

function LoginPC() {
  const [d, setD] = React.useState(false);
  const link = { background: 'none', border: 0, fontFamily: 'inherit', fontSize: 14, fontWeight: 500, color: 'var(--kosaf-color-text-secondary)', cursor: 'pointer' };
  return (
    <div style={{ minWidth: 1920, minHeight: 1080, background: 'var(--kosaf-src-login-bg)', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)' }}>
      <div style={{ maxWidth: 1596, margin: '0 auto', display: 'flex', justifyContent: 'space-between', paddingTop: 0 }}><span style={{ display: 'flex', gap: 20 }}><button style={link}>플랫폼 소개</button><button style={link}>도매시장 유통데이터</button></span><span style={{ display: 'flex', gap: 20 }}><button style={link}>로그인</button><button style={link}>회원가입</button><button style={link}>고객센터</button></span></div>
      <div style={{ textAlign: 'center', marginTop: 68 }}>
        <h1 style={{ margin: 0, fontSize: 40, fontWeight: 700 }}>로그인</h1>
        <div style={{ fontSize: 24, fontWeight: 700, marginTop: 30 }}>농산물 온라인도매시장 품목도매관 로그인</div>
        <div style={{ fontSize: 18, marginTop: 10, lineHeight: '28px', color: 'var(--kosaf-color-text-secondary)' }}>로그인을 하시면 농산물 온라인도매시장에서 제공하는 다양한 서비스를 이용하실 수 있습니다.</div>
      </div>
      <div style={{ marginTop: 50 }}><LoginForm onDormant={() => setD(true)} /></div>
      <div style={{ textAlign: 'center', marginTop: 30 }}><DemoNote>로그인 시 휴면 계정 안내(1:103625) 팝업을 띄웁니다</DemoNote></div>
      <Dormant open={d} onClose={() => setD(false)} />
    </div>
  );
}

function LoginMo() {
  const [d, setD] = React.useState(false);
  return (
    <MoPage>
      <div style={{ background: 'var(--kosaf-src-login-bg)', padding: '30px 20px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}><h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>로그인</h1><div style={{ fontSize: 14, marginTop: 10, color: 'var(--kosaf-color-text-secondary)' }}>로그인을 하시면 다양한 서비스를 이용하실 수 있습니다.</div></div>
        <LoginForm mobile onDormant={() => setD(true)} />
      </div>
      <Dormant open={d} onClose={() => setD(false)} width={350} />
    </MoPage>
  );
}
Object.assign(window, { LoginPC, LoginMo });
