Label + control row for 회원가입/등록 forms: required *, error text, help, bottom rule. — use it for forms on KOSAF PC (1920) and mobile (390–391) screens.

```jsx
<FormField label="회원 이름" required labelWidth={200} error="필수항목을 입력해주세요." htmlFor="n1"><Input id="n1" state="error" width={360}/>
```

- Provenance: **Source-derived (1:85779)** · node 1:89853. Structure, sizes and colours follow the exported source; behaviour beyond what the screen shows is a KOSAF extension.
- States: Default · Required · Error · Help.
- Props: `label`, `required`, `error`, `help`, `htmlFor`, `layout`, `labelWidth`, `children`.
- Label + control row for 회원가입/등록 forms: required *, error text, help, bottom rule.

## 1.4.0 (web refinement)
- Give the control `id={htmlFor}`: FormField then adds `aria-describedby="<id>-help <id>-error"` and `aria-invalid`. Error text id = `<htmlFor>-error`.
- Field errors are no longer `role="alert"`; pair with **FormErrorSummary** for the announcement + first-error focus.
- Label column wraps long Korean words (`keep-all` + `overflow-wrap:anywhere`), 20px gutter.
