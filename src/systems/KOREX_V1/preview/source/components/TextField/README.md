# TextField

한 줄 입력: 항상 보이는 label → (description) → 48px 입력 → (오류/성공 메시지). KOREX 입력 규격을 IAK TextField 항목으로 정리한 것.

- **출처**: 입력 필드·label·`textSecondary` 경계는 정규화 preview의 검색/필터에서 계승(observed). description, error/success 메시지, readOnly, sm 크기는 **derived-extension**.
- **error**: 새 빨강 없이 경계를 `textPrimary` 2px로 두껍게 + 경고 아이콘 + “오류” 단어 + 해결 방법 문장. `aria-invalid`, `aria-describedby`로 연결.
- **success**: `primary` 2px 경계 + 체크 아이콘 + 문장.
- **required**: label 뒤 “필수” 텍스트(별표만 쓰지 않음) + `required`.
- **readOnly**: `canvas` 면 + 점선 `border` + “읽기 전용” 표기. **disabled**: `canvas` 면 + `textSecondary` 글자.
- 긴 값은 입력 안에서 가로 스크롤, 긴 label은 줄바꿈.
- **제공할 것**: `label`(필수), `value`/`defaultValue`, `onChange`, `description`, `error`, `success`, `required`, `readOnly`, `disabled`, `type`, `size`.
- observed는 Behance 원본 정밀 추출이 아니라 정규화 preview에서 계승했다는 뜻이다.
