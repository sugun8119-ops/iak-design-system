// 판매자 회원가입 — Source: 기본정보입력 1:89853 (PC 1920×3241), 1:89639 (Mo), Step_Navi 1:90125, 첨부파일 1:89966, 완료 1:90168
const TEL = ['010', '02', '031', '051'];
function SignupForm({ mobile, onDone }) {
  const [v, setV] = React.useState({ name: '', id: '', pw: '', pw2: '', type: '', biz: '' });
  const [tried, setTried] = React.useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e && e.target ? e.target.value : e });
  const req = (k) => (tried && !v[k] ? '필수항목을 입력해주세요.' : undefined);
  const L = mobile ? 'vertical' : 'horizontal';
  const W = mobile ? '100%' : 360;
  const submit = () => { setTried(true); if (v.name && v.id && v.pw && v.pw === v.pw2 && v.type && v.biz) onDone(); };
  return (
    <div>
      <div style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)', padding: '0 0 14px', borderBottom: '2px solid var(--kosaf-color-border-default)' }}><span style={{ color: 'var(--kosaf-color-action-danger)' }}>*</span> 표시는 반드시 입력하셔야 하는 항목입니다.</div>
      <KS.FormField layout={L} label="회원 이름" required error={req('name')} htmlFor="f-name"><KS.Input id="f-name" width={W} value={v.name} onChange={set('name')} state={req('name') ? 'error' : undefined} placeholder="" /></KS.FormField>
      <KS.FormField layout={L} label="아이디" required error={req('id')} htmlFor="f-id"><KS.Input id="f-id" width={mobile ? 220 : W} value={v.id} onChange={set('id')} placeholder="영문 소문자, 숫자 중 6~20자 조합." /><KS.Button variant="secondary" size={45}>중복 확인</KS.Button></KS.FormField>
      <KS.FormField layout={L} label="비밀번호" required error={req('pw')} htmlFor="f-pw"><KS.Input id="f-pw" type="password" width={W} value={v.pw} onChange={set('pw')} placeholder="영문+숫자+특수문자 8~24자 조합." /></KS.FormField>
      <KS.FormField layout={L} label="비밀번호 확인" required error={tried && v.pw !== v.pw2 ? '비밀번호가 일치하지 않습니다.' : undefined} htmlFor="f-pw2"><KS.Input id="f-pw2" type="password" width={W} value={v.pw2} onChange={set('pw2')} placeholder="" /></KS.FormField>
      <KS.FormField layout={L} label="판매자 유형" required error={req('type')}><KS.Select size="form" width={200} options={['위탁', '매수', '직접판매']} value={v.type || undefined} onChange={set('type')} error={!!req('type')} aria-label="판매자 유형" /></KS.FormField>
      <KS.FormField layout={L} label="허가번호"><KS.Select size="form" width={200} placeholder="-도매시장 선택-" options={['서울가락', '서울강서']} aria-label="도매시장" /><KS.Input width={mobile ? '100%' : 200} placeholder="허가번호" /></KS.FormField>
      <KS.FormField layout={L} label="휴대폰번호" required><KS.Select size="form" width={mobile ? 96 : 160} options={TEL} aria-label="앞자리" /><span>-</span><KS.Input width={mobile ? 90 : 160} placeholder="" /><span>-</span><KS.Input width={mobile ? 90 : 160} placeholder="" /></KS.FormField>
      <KS.FormField layout={L} label="이메일" required><KS.Input width={mobile ? 140 : 200} placeholder="" /><span>@</span><KS.Input width={mobile ? 150 : 200} placeholder="" /><KS.Select size="form" width={200} placeholder="직접선택" options={['naver.com', 'gmail.com']} aria-label="도메인" /></KS.FormField>
      <KS.FormField layout={L} label="사업자등록번호" required error={req('biz')}><KS.Input width={W} value={v.biz} onChange={set('biz')} placeholder="12345" /></KS.FormField>
      <KS.FormField layout={L} label="회사주소" required><div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: mobile ? '100%' : undefined }}><div style={{ display: 'flex', gap: 10 }}><KS.Input width={mobile ? 220 : W} placeholder="" /><KS.Button variant="secondary" size={45}>우편번호 검색</KS.Button></div><KS.Input width={W} placeholder="기본주소" /><KS.Input width={W} placeholder="상세주소" /></div></KS.FormField>
      <h2 style={{ fontSize: mobile ? 20 : 24, fontWeight: 700, margin: '60px 0 8px' }}>심사서류</h2>
      <div style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)', lineHeight: '22px', paddingBottom: 14, borderBottom: '2px solid var(--kosaf-color-border-default)' }}><span style={{ color: 'var(--kosaf-color-action-danger)' }}>*</span> 표시는 반드시 입력하셔야 하는 항목입니다.<br />첨부파일은 4MB 이하로 올려 주셔야 합니다. 파일이 여러 개인 경우 압축해서 올려주세요.</div>
      <KS.FormField layout={L} label="첨부파일1" required help="*개인 정보입력에서 입력한 내용과 일치하여야 합니다."><KS.FileUpload width={mobile ? 220 : 360} defaultFiles={[{ name: '사업자등록증.hwp' }]} /></KS.FormField>
      <KS.FormField layout={L} label="첨부파일...n"><KS.FileUpload width={mobile ? 220 : 360} /></KS.FormField>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><KS.Button size={50} width={mobile ? '100%' : 164} fullWidth={mobile} onClick={submit}>회원가입 완료</KS.Button></div>
      {tried ? <div style={{ textAlign: 'center', marginTop: 10 }}><DemoNote>필수 항목 검증은 클라이언트 데모입니다</DemoNote></div> : null}
    </div>
  );
}

function SignupDone({ mobile }) {
  return (
    <div style={{ textAlign: 'center', padding: mobile ? '40px 20px' : '80px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <span style={{ width: 90, height: 90, borderRadius: 45, background: 'var(--kosaf-color-action-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><KS.Icon name="check" size={44} /></span>
      <div style={{ fontSize: mobile ? 20 : 30, fontWeight: 700 }}>농산물 온라인거래소 심사신청이 완료되었습니다.</div>
      <KS.Button size={45} width={127}>메인으로</KS.Button>
    </div>
  );
}

function SignupPC() {
  const [done, setDone] = React.useState(false);
  return (
    <div style={{ minWidth: 1920, background: '#fff', fontFamily: 'var(--kosaf-font)' }}>
      <main style={{ width: 1276, margin: '0 auto', padding: '90px 0 120px' }}>
        <PageTitle align="center">판매자 회원가입</PageTitle>
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
        <PageTitle size={24} align="center">판매자 회원가입</PageTitle>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 30px' }}><KS.ProgressSteps device="mobile" current={done ? 2 : 1} /></div>
        {done ? <SignupDone mobile /> : <SignupForm mobile onDone={() => setDone(true)} />}
      </div>
    </MoPage>
  );
}
Object.assign(window, { SignupPC, SignupMo });
