# Switch

즉시 적용되는 켜기/끄기: label(+description) 왼쪽, 44×24 각진 트랙(`radius-sm`) + “켜짐/꺼짐” 텍스트 오른쪽.

- **출처**: **derived-extension**. KOREX Don't(과도한 pill 금지)에 맞춰 둥근 알약 트랙 대신 각진 트랙과 정사각 thumb을 쓴다.
- 색만으로 상태를 전하지 않도록 트랙 옆에 “켜짐/꺼짐”(또는 `onLabel`/`offLabel`) 텍스트를 항상 보인다.
- `role="switch"` + `aria-checked`. loading은 thumb 안 스피너 + `aria-busy`, 토글 차단.
- 제출 버튼이 필요한 설정에는 Switch 대신 Checkbox를 쓴다.
- **제공할 것**: `label`, `checked`/`defaultChecked`, `onChange`, `description`, `disabled`, `loading`, `onLabel`, `offLabel`.
