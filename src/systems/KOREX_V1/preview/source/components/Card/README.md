# Card

콘텐츠 묶음: (미디어 4:3) → meta → title(최대 2줄) → 본문 → (footer 액션). `outlined`(`surface` 면 + 1px `border` + `radius-md` + padding 24)와 `plain`(KOREX ProductCard처럼 면 없음) 두 결.

- **출처**: 미디어 → meta → title 구조는 KOREX ProductCard/ImageCard(정규화 preview)에서 계승(observed). outlined 면, selected, loading, 이미지 누락은 **derived-extension**.
- **상태**: hover(링크 카드 → 경계 `primary` + 제목 밑줄) · focus(카드 전체 2px 잉크 외곽선) · selected(`primary` 2px 경계 + “선택됨” brand 배지) · loading(Skeleton) · missing image(점선 틀 + 이미지 없음 아이콘 + “이미지 준비 중”).
- 그림자·좌측 컬러 바를 쓰지 않는다. 한 줄 카드 수는 ContentGrid 규칙(최대 3)을 따른다.
- 제품 목록은 여전히 **ProductCard**를 쓰고, 안내·비교·선택처럼 본문/액션이 있는 묶음에 Card를 쓴다.
- **제공할 것**: `title`, `meta`, `children`, `media` `{tone, missing, tall}`, `href`, `footer`, `variant`, `selected`, `loading`.
- observed는 Behance 원본 정밀 추출이 아니라 정규화 preview에서 계승했다는 뜻이다.
