Form-level feedback above a form: field-error summary (links to each invalid field) vs. submit failure (retry), plus loading/success lines.

```jsx
const [tries, setTries] = React.useState(0);
<FormErrorSummary status="error" focusKey={tries} focusTarget="firstField"
  errors={[{ id: 'f-name', label: '회원 이름', message: '필수항목을 입력해주세요.' }]} />
<FormErrorSummary status="submitError" message="네트워크 상태를 확인한 뒤 다시 시도해주세요. (데모)" onRetry={submit} />
<FormErrorSummary status="loading" />
```

- Field errors stay inline in FormField (id `<htmlFor>-error`, linked by aria-describedby); the summary only lists them.
- Increase `focusKey` per submit so focus moves once — never while the user is typing.
- submitError = request failed (not a field problem). Backends in kits are demo only.
- KOSAF extension: 1px #E23736 border, radius 5, no fill/shadow; loading uses #F7F7F7.
