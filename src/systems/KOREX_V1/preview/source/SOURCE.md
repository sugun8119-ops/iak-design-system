# KOREX_V1 v1.3 — preview/source

디자인 시스템 아티팩트(KOREX_V1)의 **공개 가능한 자체 소스 전체**다. 게시한 라이브 버전과 같은 파일이며, 게시 후 bundle.js · bundle.css · index.d.ts를 다시 내려받아 바이트 단위로 같음을 확인한다(값은 아래 sha256). React는 포함하지 않는다.

## 파일

| 파일 | 크기 | sha256 |
|---|---|---|
| `components/bundle.js` | 44,059 B | `719e940cf20d977e…` |
| `components/bundle.css` | 30,175 B | `dbba6b9e6e430c7e…` |
| `components/index.d.ts` | 12,877 B | `da7737409e4e349d…` |
| `coverage-cases.js` | 48,442 B | `3c1f68868703135d…` |
| `templates.js` | 13,732 B | `b50215b09600e543…` |
| `tokens.json` | 6,444 B | `1a0a8d9f1e212703…` |
| `README.md` | 15,046 B | `350669355e990ab4…` |
| `coverage.md` | 9,617 B | `661d2e70a86d75c7…` |

- `components/bundle.js` — `window.KOREX`: 컴포넌트 27개 + ToastStack. 클래식 스크립트 1개, import·네트워크 없음. React 18(`window.React`, `window.ReactDOM`)을 먼저 불러와야 한다.
- `components/bundle.css` — 컴포넌트 스타일. 색·간격·반경은 CSS 변수로 읽는다(값: `tokens.json`, 펼친 사본: `../kit/kit.css`).
- `components/index.d.ts` — 전체 props 타입(문서용).
- `coverage-cases.js` — **IAK 138 케이스 명세 + 갤러리**(`window.KOREX_COVERAGE` = cases · families · Gallery · css). case-coverage.json의 모든 행은 이 파일의 케이스에서 생성했다. design-only 7개의 시각 샘플 CSS(`.cv-d-*`)도 여기에만 있다(bundle.css에는 없음).
- `templates.js` — BrandHome · SearchList · ProductDetail과 상태 소스.
- `components/<이름>/preview.html · README.md` — 아티팩트 카드 소스.
  - 컴포넌트 27개.
  - 템플릿·상태 16개.
  - Coverage 카드 17개(Coverage138 + family 16).
  - 표지 1개.
  - preview.html은 아티팩트 런타임(토큰 CSS · React · bundle 사전 로드)을 전제로 하므로 이 폴더에서 단독으로 열면 렌더되지 않는다. 정적 사본: `../kit/`, `../coverage-138.html`.
- `tokens.json` · `README.md` · `coverage.md`.

## 사용

```html
<link rel="stylesheet" href="../kit/kit.css">
<script src="react.production.min.js"></script>        <!-- React 18 UMD (직접 준비) -->
<script src="react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>           <!-- window.KOREX -->
<script src="coverage-cases.js"></script>              <!-- 선택: 138 케이스 갤러리 -->
<script>
  ReactDOM.createRoot(root).render(React.createElement(KOREX.Button, { variant: 'primary' }, '저장'));
</script>
```

## 제외한 것

- 아티팩트 런타임 파일과 인덱스(`design-system.json`), 페이지가 생성하는 파일, React 라이브러리.
- 외부 업로드·폰트 파일(이 시스템에는 없음), 비밀 값·개인 정보(없음).

## 참고

- design-only(`d-*`) 7개는 **시각 샘플**이다. 런타임 컴포넌트·prop이 아니다.
- observed = 정규화 preview에서 계승(Behance 원본 정밀 추출 아님), derived-extension = 새로 만든 사례.
- 서체: Figma는 Inter Text Style 5개, 웹은 `Arial, "Noto Sans KR", sans-serif` 폴백 — 글자 폭이 다를 수 있다.
