// 판매자 회원가입 — Source: 기본정보입력 1:89853 (PC 1920×3241), 1:89639 (Mo), Step_Navi 1:90125, 첨부파일 1:89966, 완료 1:90168
const TEL = ['010', '02', '031', '051'];
const REQ = '필수항목을 입력해주세요.';
function SignupForm({ mobile, onDone }) {
  const P = mobile ? 'm-' : 'f-';
  const [v, setV] = React.useState({ name: '', id: '', pw: '', pw2: '', type: '', biz: '', email: '' });
  const [tried, setTried] = React.useState(false);
  const [tries, setTries] = React.useState(0);
  const [status, setStatus] = React.useState('idle');
  const [failSim, setFailSim] = React.useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e && e.target ? e.target.value : e });
  const errors = !tried ? [] : [
    !v.name && { id: P + 'name', label: '회원 이름', message: REQ },
    !v.id && { id: P + 'id', label: '아이디', message: REQ },
    !v.pw && { id: P + 'pw', label: '비밀번호', message: REQ },
    (!v.pw2 || v.pw !== v.pw2) && { id: P + 'pw2', label: '비밀번호 확인', message: v.pw2 ? '비밀번호가 일치하지 않습니다.' : REQ },
    !v.type && { id: P + 'type', label: '판매자 유형', message: REQ },
    !v.email && { id: P + 'email', label: '이메일', message: REQ },
    !v.biz && { id: P + 'biz', label: '사업자등록번호', message: v.biz ? '' : REQ },
  ].filter(Boolean);
  const err = (k) => (errors.find((e) => e.id === P + k) || {}).message;
  const st = (k) => (err(k) ? 'error' : undefined);
  const L = mobile ? 'vertical' : 'horizontal';
  const W = mobile ? '100%' : 360;
  const submit = () => {
    const missing = !v.name || !v.id || !v.pw || v.pw !== v.pw2 || !v.pw2 || !v.type || !v.biz || !v.email;
    setTried(true); setTries(tries + 1);
    if (missing) { setStatus('error'); return; }
    setStatus('loading');
    setTimeout(() => { if (failSim) setStatus('submitError'); else { setStatus('success'); onDone(); } }, 700);
  };
  const summaryStatus = status === 'error' ? 'error' : status;
  return (
    <div>
      <div style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)', padding: '0 0 14px', borderBottom: '2px solid var(--kosaf-color-border-default)' }}><span style={{ color: 'var(--kosaf-color-action-danger)' }}>*</span> 표시는 반드시 입력하셔야 하는 항목입니다.</div>
      {summaryStatus !== 'idle' ? <KS.FormErrorSummary status={summaryStatus} errors={errors} focusKey={tries} focusTarget="firstField" device={mobile ? 'mobile' : 'desktop'} message={status === 'submitError' ? '네트워크 상태를 확인한 뒤 다시 시도해주세요. 입력한 내용은 유지됩니다. (데모)' : undefined} onRetry={submit} style={{ margin: '20px 0 4px' }} /> : null}
      <KS.FormField layout={L} label="회원 이름" required error={err('name')} htmlFor={P + 'name'}><KS.Input id={P + 'name'} width={W} value={v.name} onChange={set('name')} state={st('name')} placeholder="" /></KS.FormField>
      <KS.FormField layout={L} label="아이디" required error={err('id')} help="영문 소문자, 숫자 중 6~20자 조합." htmlFor={P + 'id'}><KS.Input id={P + 'id'} width={mobile ? 'calc(100% - 104px)' : W} value={v.id} onChange={set('id')} state={st('id')} placeholder="" /><KS.Button variant="secondary" size={45} style={{ flex: '0 0 auto' }}>중복 확인</KS.Button></KS.FormField>
      <KS.FormField layout={L} label="비밀번호" required error={err('pw')} help="영문+숫자+특수문자 8~24자 조합." htmlFor={P + 'pw'}><KS.Input id={P + 'pw'} type="password" width={W} value={v.pw} onChange={set('pw')} state={st('pw')} placeholder="" /></KS.FormField>
      <KS.FormField layout={L} label="비밀번호 확인" required error={err('pw2')} htmlFor={P + 'pw2'}><KS.Input id={P + 'pw2'} type="password" width={W} value={v.pw2} onChange={set('pw2')} state={st('pw2')} placeholder="비밀번호를 한 번 더 입력하세요." /></KS.FormField>
      <KS.FormField layout={L} label="판매자 유형" required error={err('type')} htmlFor={P + 'type'}><KS.Select id={P + 'type'} size="form" width={mobile ? '100%' : 200} options={['위탁', '매수', '직접판매']} value={v.type || undefined} onChange={set('type')} error={!!err('type')} aria-label="판매자 유형" /></KS.FormField>
      <KS.FormField layout={L} label="허가번호"><KS.Select size="form" width={mobile ? '100%' : 200} placeholder="-도매시장 선택-" options={['서울가락', '서울강서']} aria-label="도매시장" /><KS.Input width={mobile ? '100%' : 200} placeholder="허가번호" aria-label="허가번호" /></KS.FormField>
      <KS.FormField layout={L} label="휴대폰번호" required><div style={{ display: 'grid', gridTemplateColumns: mobile ? '96px 8px minmax(0,1fr) 8px minmax(0,1fr)' : '160px 8px 160px 8px 160px', alignItems: 'center', gap: 6, width: mobile ? '100%' : undefined }}><KS.Select size="form" width="100%" options={TEL} defaultValue="010" aria-label="휴대폰 앞자리" /><span aria-hidden="true" style={{ textAlign: 'center' }}>-</span><KS.Input width="100%" placeholder="" aria-label="휴대폰 가운데 자리" inputMode="numeric" /><span aria-hidden="true" style={{ textAlign: 'center' }}>-</span><KS.Input width="100%" placeholder="" aria-label="휴대폰 끝자리" inputMode="numeric" /></div></KS.FormField>
      <KS.FormField layout={L} label="이메일" required error={err('email')} htmlFor={P + 'email'}><div style={{ display: 'grid', gridTemplateColumns: mobile ? 'minmax(0,1fr) 16px minmax(0,1fr)' : '200px 16px 200px 200px', alignItems: 'center', gap: 6, width: mobile ? '100%' : undefined }}><KS.Input id={P + 'email'} width="100%" value={v.email} onChange={set('email')} state={st('email')} placeholder="" aria-label="이메일 아이디" aria-describedby={err('email') ? P + 'email-error' : undefined} aria-invalid={err('email') ? true : undefined} /><span aria-hidden="true" style={{ textAlign: 'center' }}>@</span><KS.Input width="100%" placeholder="" aria-label="이메일 도메인" /><KS.Select size="form" width="100%" placeholder="직접입력" options={['직접입력', 'naver.com', 'gmail.com']} aria-label="도메인 선택" style={mobile ? { gridColumn: '1 / -1' } : undefined} /></div></KS.FormField>
      <KS.FormField layout={L} label="사업자등록번호" required error={err('biz')} help="숫자 10자리" htmlFor={P + 'biz'}><KS.Input id={P + 'biz'} width={W} value={v.biz} onChange={set('biz')} state={st('biz')} placeholder="" inputMode="numeric" /></KS.FormField>
      <KS.FormField layout={L} label="회사주소" required><div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: mobile ? '100%' : undefined }}><div style={{ display: 'flex', gap: 10 }}><KS.Input width={mobile ? 'calc(100% - 124px)' : W} placeholder="우편번호" aria-label="우편번호" /><KS.Button variant="secondary" size={45} style={{ flex: '0 0 auto' }}>우편번호 검색</KS.Button></div><KS.Input width={W} placeholder="기본주소" aria-label="기본주소" /><KS.Input width={W} placeholder="상세주소" aria-label="상세주소" /></div></KS.FormField>
      <h2 style={{ fontSize: mobile ? 20 : 24, fontWeight: 700, margin: mobile ? '50px 0 8px' : '50px 0 8px' }}>심사서류</h2>
      <div style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)', lineHeight: '22px', paddingBottom: 14, borderBottom: '2px solid var(--kosaf-color-border-default)' }}><span style={{ color: 'var(--kosaf-color-action-danger)' }}>*</span> 표시는 반드시 입력하셔야 하는 항목입니다.<br />첨부파일은 4MB 이하로 올려 주셔야 합니다. 파일이 여러 개인 경우 압축해서 올려주세요.</div>
      <KS.FormField layout={L} label="첨부파일1" required help="*개인 정보입력에서 입력한 내용과 일치하여야 합니다."><KS.FileUpload name="bizRegistration" aria-label="사업자등록증 파일 선택" width={mobile ? '100%' : 360} defaultFiles={[{ name: '사업자등록증.hwp' }]} /></KS.FormField>
      <KS.FormField layout={L} label="첨부파일...n"><KS.FileUpload name="reviewDocs" aria-label="심사서류 파일 선택" width={mobile ? '100%' : 360} /></KS.FormField>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 50 }}>
        <KS.Button size={50} width={mobile ? '100%' : 164} fullWidth={mobile} disabled={status === 'loading'} onClick={submit}>{status === 'loading' ? '처리 중…' : '회원가입 완료'}</KS.Button>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 10 }}><DemoNote>필수 항목 검증·제출은 클라이언트 데모입니다</DemoNote><KS.Checkbox checked={failSim} onChange={setFailSim} style={{ fontSize: 13 }}>제출 실패 시뮬레이션</KS.Checkbox></div>
      </div>
    </div>
  );
}

function SignupDone({ mobile }) {
  return (
    <div style={{ padding: mobile ? '40px 0' : '80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <span aria-hidden="true" style={{ width: 90, height: 90, borderRadius: 45, background: 'var(--kosaf-color-action-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><KS.Icon name="check" size={44} /></span>
      <PageHead mobile={mobile} align="center" size={30} title="농산물 온라인거래소 심사신청이 완료되었습니다." desc="심사가 완료되면 로그인 후 판매를 시작할 수 있습니다." right={<KS.Button size={45} width={127}>메인으로</KS.Button>} style={{ marginBottom: 0 }} />
    </div>
  );
}

function SignupPC() {
  const [done, setDone] = React.useState(false);
  return (
    <div style={{ width: '100%', minWidth: 0, boxSizing: 'border-box', overflowX: 'visible', background: '#fff', fontFamily: 'var(--kosaf-font)' }}>
      <main style={{ width: '100%', maxWidth: 1276, margin: '0 auto', padding: '90px 0 120px' }}>
        <PageHead align="center" title="판매자 회원가입" desc="판매자 기본정보와 심사서류를 입력하면 심사 후 승인됩니다." style={{ justifyContent: 'center' }} />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0 50px' }}><KS.ProgressSteps current={done ? 2 : 1} /></div>
        {done ? <SignupDone /> : <SignupForm onDone={() => setDone(true)} />}
      </main>
      <KS.Footer />
    </div>
  );
}

function SignupMo() {
  const [done, setDone] = React.useState(false);
  return (
    <MoPage back>
      <div style={{ padding: '20px 20px 60px' }}>
        <PageHead mobile align="center" title="판매자 회원가입" desc="기본정보와 심사서류를 입력하세요." />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 30px' }}><KS.ProgressSteps device="mobile" current={done ? 2 : 1} /></div>
        {done ? <SignupDone mobile /> : <SignupForm mobile onDone={() => setDone(true)} />}
      </div>
    </MoPage>
  );
}
Object.assign(window, { SignupPC, SignupMo });
