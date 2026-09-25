# HeroSearch

브랜드 히어로: `primaryDark` 단색 텍스트 패널(meta · display 제목 · 설명 · SearchBar)과 큰 미디어를 한 12열 블록에 결합한다.

- **레이아웃**: 데스크톱 1:1 두 칼럼, gap 48, padding 48. 태블릿 gap 20. 모바일 1열(텍스트 → 미디어), padding 24, display 36/44.
- **색**: 패널 텍스트 `surface`, meta `primarySoft`, focus 외곽선은 패널 위에서 `surface`. 미디어 자리표시자는 `primarySoft` 톤.
- **제공할 것**: `meta`, `title`(페이지의 유일한 h1), `text`, `search`(SearchBar props), `mediaLabel`.
- 미디어는 자체 도형 자리표시자다. 실제 프로젝트에서 사용권 있는 공간·소재·제품 사진으로 교체한다. 텍스트를 사진 위에 직접 얹지 않는다.
- **derived-extension 상태**: `imageMissing` — 진한 패널 위에서 `primarySoft` 점선 틀 + “이미지 준비 중”.
