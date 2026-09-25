# Textarea

여러 줄 입력: TextField와 같은 label/description/메시지 구조 + 최소 높이 120, 세로 리사이즈, 선택적 글자 수 카운터(`maxLength`).

- **출처**: **derived-extension** (KOREX 원본에는 여러 줄 입력이 없음). 경계·반경·label 규칙은 KOREX 입력을 그대로 따른다.
- 카운터는 label 줄 오른쪽 `12/18` `textSecondary`, `aria-live="polite"`.
- 상태 표현은 TextField와 동일(error = 잉크 2px + 아이콘 + “오류” 문장).
- **제공할 것**: `label`, `value`/`defaultValue`, `onChange`, `rows`, `maxLength`, `description`, `error`, `required`, `readOnly`, `disabled`.
