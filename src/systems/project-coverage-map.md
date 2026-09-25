# 프로젝트별 사례 대응표

2026-09-25 · DEW_V1 / KOREX_V1 1.4.0

각 프로젝트의 기존 정규화 스타일을 유지하며, 전용 11종 + 공통 16종과 기본 템플릿 3개를 제공합니다. IAK는 138개 사례의 항목 기준입니다. 각 시스템의 138개 사례가 Claude, 소스, Figma의 Coverage 138 페이지에 대응됩니다.

code 114 / composition 8 / native 4 / preview-only 5 / design-only 7. 사례 수는 컴포넌트 family 수나 모든 상태 조합 수와 다릅니다. 디자인 전용 7개를 런타임 API라고 표시하지 않습니다. 가상 스크롤 표, 페이지 표, 알림 스택, 비동기 확인·재시도도 포함합니다. DB/Router는 없습니다.

- [DEW 사례](DEW_V1/preview/case-coverage.json) · [Figma 연결](DEW_V1/preview/handoff/figma-cases.json)
- [KOREX 사례](KOREX_V1/preview/case-coverage.json) · [Figma 연결](KOREX_V1/preview/handoff/figma-cases.json)

Figma는 편집 가능한 정적 사례이며 실제 키보드·비동기 동작은 Claude와 소스 미리보기를 기준으로 합니다. 독립 검증과 Claude의 개별 검증 보고는 각 preview/handoff/verification.json에서 구분합니다.

## 1.4 사용 품질

[DEW 라이브러리](DEW_V1/preview/library.html) · [KOREX 라이브러리](KOREX_V1/preview/library.html)에서 기본 규칙과 검색 가능한 138개 사례를 확인합니다. 기존 프로젝트 스타일과 사례 ID는 유지했습니다. 두 시스템 전용 회귀 검사는 tests/project-systems.test.mjs에 있습니다.
