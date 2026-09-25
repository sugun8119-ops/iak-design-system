# DEW_V1 — component source

이 폴더는 디자인 시스템 아티팩트 버전 1790332904-a708에 공개된 **자체 소스 파일 95개**의 사본이다. 파일별 sha256은 `SOURCE-MANIFEST.json`에 있다. 외부 업로드 자산, 비밀 파일, 아티팩트 런타임(type) 파일, 뷰어가 자동 생성하는 파일(tokens.css, api/, manifest.json)은 넣지 않았다.

| 경로 | 내용 |
|---|---|
| `components/bundle.js` | 27개 family 구현. 일반 스크립트 하나가 `window.DEW`를 만든다(import·네트워크·eval 없음) |
| `components/bundle.css` | 컴포넌트 스타일(`dew-` 접두사). tokens의 CSS 변수를 사용 |
| `components/index.d.ts` | props 타입(문서용) |
| `components/<Name>/README.md` · `preview.html` | 가이드와 라이브 미리보기 원본 — 45개 폴더(family 27, 템플릿 3, 템플릿 상태 14, Cover) |
| `tokens.json` | 토큰 원본(색 8 = 7 + derived-extension `scrim`, 타입 5, spacing 9, radius 3) |
| `README.md` · `coverage.md` | 브랜드북과 IAK → DEW 대응표 |

## 사용하려면

React 18 UMD(`react`, `react-dom`)는 포함하지 않는다. 따로 불러온 뒤 `bundle.js`를 넣는다. CSS 변수는 `tokens.json`에서 만들거나 `../styles.css` 첫 줄의 `:root` 블록을 쓴다. `preview.html`은 디자인 시스템 뷰어 안에서 실행되도록 작성되어 단독으로 열면 스타일·스크립트가 빠진다.

## 계승과 확장

팔레트·타입·간격·모서리·그리드, editorial 11개, 템플릿 3개는 정규화본 v1.0에서 계승했다(원본에서 정밀 추출한 값이 아님). 공통 16 family, 상태 카드, 아이콘, `scrim`, AlertDialog 오류+재시도 등은 derived-extension이다(`coverage.md`).
