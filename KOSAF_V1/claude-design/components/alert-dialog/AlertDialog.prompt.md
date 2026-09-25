Notice/confirm popup (휴면 계정, 비밀번호 변경, 심사안내) — use it for feedback & overlay on KOSAF PC (1920) and mobile (390–391) screens.

```jsx
<AlertDialog inline message={'안녕하세요!\n회원님은 1년 이상 로그인하지 않아 휴면 계정으로 전환되었습니다.'} details={[['마지막 접속일','2022-05-04'],['휴면 전환일','2022-05-04']]} primaryLabel="휴면 해제하기" secondaryLabel="다음에 하기"/>
```

- Provenance: **Source-derived (1:85779)** · node 1:103625. Structure, sizes and colours follow the exported source; behaviour beyond what the screen shows is a KOSAF extension.
- States: Open · 1 or 2 actions.
- Props: `open`, `inline`, `title`, `icon`, `message`, `details`, `primaryLabel`, `secondaryLabel`, `onPrimary`, `onSecondary`, `onClose`, `width`.
- Notice/confirm popup (휴면 계정, 비밀번호 변경, 심사안내). Green title bar, icon circle, info box, 158×45 r2 buttons. Focus trap + Esc.
