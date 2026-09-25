# ProductCard

제품 탐색 카드: 4:3 미디어(`radius-md`) → meta 분류 → title 제목 링크, 세로 gap 16.

- **변형**: Default, Hover(제목 밑줄 + 미디어 1px `primary` 외곽선), Focus(카드 링크 전체 2px 외곽선 + offset 4). 미리보기의 Hover/Focus는 `state`로 고정.
- 카드 전체가 하나의 링크다. 그림자·배지·가격 강조를 더하지 않고 여백으로 구분한다.
- **제공할 것**: `title`, `category`(예: `SEATING / 우드`), `href`, `media`(`default`·`mint`·`light` 자리표시자 톤), `mediaLabel`.
- 예시 이름·소재는 자리표시자다. 실제 제품명·가격·수치는 새 프로젝트 데이터로 채운다.
- **derived-extension 상태**: `loading`(미디어·meta·제목 크기 그대로의 Skeleton + “제품 정보를 불러오는 중”), `imageMissing`(비율 유지 점선 틀 + 이미지 없음 아이콘 + “이미지 준비 중”). 긴 제목은 단어 단위 줄바꿈.
