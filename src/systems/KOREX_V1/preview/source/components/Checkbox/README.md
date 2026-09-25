# Checkbox

20px 각진 체크박스(`radius-sm`) + 오른쪽 label, 행 높이 44. 선택 시 `primary` 면 + `surface` 체크.

- **출처**: **derived-extension**. KOREX 원본에는 체크박스가 없어 입력 경계(`textSecondary`)와 선택 색(`primary`)만 가져왔다.
- 네이티브 `input[type=checkbox]`가 44×44 투명 히트 영역으로 박스 위에 놓여 키보드·스크린리더 동작을 그대로 유지한다.
- indeterminate는 가로 막대 아이콘 + `indeterminate` 속성. error는 잉크 2px 경계 + “오류” 문장.
- **제공할 것**: `label`, `checked`/`defaultChecked`, `onChange`, `indeterminate`, `description`, `error`, `required`, `disabled`.
