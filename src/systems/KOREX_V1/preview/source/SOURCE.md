# KOREX_V1 — preview/source

라이브 디자인 시스템 아티팩트(KOREX_V1, 버전 `1790332819-39d9`, 2026-09-25)의 **공개 가능한 자체 소스**를 그대로 복사한 폴더다. `components/bundle.js`, `bundle.css`, `index.d.ts`는 라이브 버전에서 다시 내려받아 이 파일들과 바이트 단위로 같음을 확인했다.

## 들어 있는 것

| 파일 | 크기 | sha256 |
|---|---|---|
| `components/bundle.js` | 37,632 B | `c72fb3d9112d16c3…` |
| `components/bundle.css` | 27,612 B | `9a6fcaca6ef89074…` |
| `components/index.d.ts` | 11,298 B | `5b10461876fcc851…` |
| `tokens.json` | 6,444 B | `1a0a8d9f1e212703…` |
| `templates.js` | 13,732 B | `b50215b09600e543…` |
| `README.md` | 12,463 B | `877449a5735d52ee…` |
| `coverage.md` | 6,818 B | `35d799a793b03b46…` |

- `components/bundle.js` — 컴포넌트 27개(`window.KOREX`). 클래식 스크립트 1개, import·네트워크 호출 없음. React 18(`window.React`)이 먼저 로드돼 있어야 한다.
- `components/bundle.css` — 컴포넌트 스타일. 색·간격·반경은 CSS 변수(`--primary`, `--space-24`, `--radius-md` …)를 읽는다. 변수 값은 `tokens.json`에 있다(정적 키트는 `../kit/kit.css`에 변수를 펼쳐 두었다).
- `components/index.d.ts` — 전체 props 타입(문서용).
- `components/<이름>/preview.html` · `README.md` — 카드 미리보기와 사용 가이드. 컴포넌트·상태 27개(AlertDialog, Badge, BrandStatement, Button, CTA, Card, CategoryNav, Checkbox, ContentGrid, Dialog, FilterPanel, Footer, GlobalHeader, HeroSearch, Icon, ImageCard, Menu, Pagination, ProductCard, SearchBar, Select, Skeleton, Switch, Table, TextField, Textarea, Toast), 템플릿 16개. preview.html은 디자인 시스템 아티팩트 런타임(토큰 CSS · React · bundle 사전 로드)을 전제로 하므로 이 폴더에서 단독으로 열면 렌더되지 않는다. 같은 화면의 정적 샘플은 `../kit/`에 있다.
- `components/Cover/preview.html` — 시스템 표지.
- `templates.js` — BrandHome · SearchList · ProductDetail 템플릿과 상태(default · loading · empty · error · long-text · missing-image) 소스. 템플릿 카드 preview.html에 인라인된 코드와 같다.
- `tokens.json` · `README.md` · `coverage.md` — 토큰, 브랜드 북, IAK coverage 대응표.

## 사용

```html
<link rel="stylesheet" href="../kit/kit.css">            <!-- 토큰 변수 + bundle.css -->
<script src="react.production.min.js"></script>           <!-- React 18 UMD (직접 준비) -->
<script src="react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>              <!-- window.KOREX -->
<script>
  ReactDOM.createRoot(root).render(React.createElement(KOREX.Button, { variant: 'primary' }, '저장'));
</script>
```

## 제외한 것

- 아티팩트 런타임 파일(type의 index.html · app.js · SKILL.md), 아티팩트 인덱스(`design-system.json`), 페이지가 생성하는 파일(tokens.css · manifest · api 카드).
- 외부 업로드 파일·폰트 파일 — 이 시스템에는 업로드 자산이 없다. 비밀 값·키·개인 정보 없음.
- React 라이브러리 자체(미포함, 필요 시 React 18 UMD를 직접 준비).

## 참고

- **정적 vs 동작**: `../kit/`은 서버 렌더한 **정적 샘플**(상호작용 없음)이다. 메뉴·대화상자·필터·페이지 이동은 이 소스(또는 아티팩트)에서 동작한다.
- **서체**: Figma는 기존 Inter Text Style 5개, 웹은 `Arial, "Noto Sans KR", sans-serif` 폴백. 글자 폭이 달라 줄바꿈 위치가 다를 수 있다.
- **observed**: 정규화 preview에서 계승한 요소라는 뜻이며 Behance 원본 정밀 추출이 아니다.
