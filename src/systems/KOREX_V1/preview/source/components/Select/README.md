# Select

네이티브 `select` 기반 선택 필드: TextField와 같은 필드 구조 + 오른쪽 chevron 아이콘, 긴 선택값은 말줄임.

- **출처**: select 자체와 48px·`textSecondary` 경계는 KOREX FilterPanel(정규화 preview)에서 계승(observed). description/error/readOnly와 chevron 아이콘은 **derived-extension**.
- 네이티브 목록을 유지해 모바일 접근성을 보장한다(커스텀 리스트박스를 만들지 않는다).
- 선택 불가 옵션은 “(품절)”처럼 이유를 옵션 텍스트에 쓴다.
- readOnly는 네이티브 제약상 disabled로 렌더되며 label에 “읽기 전용”을 표기한다.
- **제공할 것**: `label`, `options` `[{value,label,disabled}]`, `value`/`defaultValue`, `onChange`, `placeholder`, `description`, `error`, `required`, `disabled`, `readOnly`.
- observed는 Behance 원본 정밀 추출이 아니라 정규화 preview에서 계승했다는 뜻이다.
- **v1.3 (derived-extension)**: `state="hover"`.
