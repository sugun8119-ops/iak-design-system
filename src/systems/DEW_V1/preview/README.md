# DEW_V1 preview/

**정적 HTML 스냅숏이다.** 디자인 시스템 컴포넌트를 렌더링한 결과를 HTML/CSS로 저장했을 뿐 JavaScript는 없다. 메뉴 열기, 대화상자·토스트 닫기, 정렬, 페이지 이동 같은 동작은 작동하지 않는다. 동작하는 구현은 `source/components/bundle.js`에 있다.

- `index.html`, `list.html`, `detail.html` — 템플릿 기본 화면
- `index-*.html`, `list-*.html`, `detail-*.html` — 상태(loading / empty / error / long / missing). detail에는 empty 없음
- `components.html` — 27 family의 모든 케이스. 샘플의 id / for / aria-* 참조는 `family--case--원래id` 형식으로 유일하다
- `styles.css` — tokens CSS 변수 + 컴포넌트 CSS
- `figma-board.svg` — 정적 참조 보드(변수·Auto Layout을 만들지 않음)
- `coverage-138.html` — IAK 138 케이스 정적 갤러리(앵커 `#case-<family>-<id>`)
- `case-coverage.json` — 138행 대응표(export·props·예시 경로·앵커·검증)
- `source/` — 현재 라이브 디자인 시스템의 자체 소스 사본(`source/SOURCE-README.md`)

웹 미리보기는 Georgia / Arial(+ 설치된 Noto 폴백)로 그려진다. Figma 스타일(Noto Serif KR Medium / Inter)과 글자 폭이 달라 줄바꿈이 다를 수 있다.
