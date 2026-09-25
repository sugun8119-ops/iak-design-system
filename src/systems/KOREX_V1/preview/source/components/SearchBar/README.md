# SearchBar

항상 보이는 label + search input(Fill) + 제출 CTA(Hug)로 된 가로 검색 폼, 높이 최소 48.

- **변형**: Default, Focus(2px `textPrimary` 외곽선, offset 4), Filled(`defaultValue`/`value`). 미리보기의 Focus는 `state="focus"`로 고정 표시한 것.
- **입력 경계**는 `textSecondary`(얇은 `border` 아님), 반경 `radius-md`, 배경 `surface`. label↔입력, 입력↔버튼 간격 `space-8`.
- **반응형**: 모바일에서 입력과 버튼이 줄바꿈된다.
- **제공할 것**: `label`(필수, 화면에 표시), `placeholder`, `onSubmit(value)`; 제어형은 `value`+`onChange`. `form role="search"`로 렌더.
- **derived-extension 상태**: `disabled`(로딩 중 입력·버튼 비활성, `canvas` 면 + `textSecondary`).
