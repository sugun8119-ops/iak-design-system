# KOREX_V1 · 1.4

첫 화면: **library.html** — 기본 규칙, 검색, 구성요소/유형 필터, 138개 사례, 사례별 Figma 링크.

- 페이지 예시: index.html
- 전체 사례: coverage-138.html
- Figma 가이드: https://www.figma.com/design/MR9qvFSq9w5HAD2wnQObdn?node-id=61-2
- 상태별 컴포넌트: Figma의 Coverage 138 페이지
- 토큰/컴포넌트 규격: ../figma-system.json
- AI 제작 규칙: ../claude-system.md
- 검증 기록: handoff/quality-1.4.json

React 18.3.1 런타임과 MIT 라이선스가 vendor/에 포함되어 인터넷 없이 동작합니다. 폰트는 운영체제에 설치된 기존 대체 서체를 사용합니다. 폴더 전체를 유지해 library.html을 열거나 정적 서버에서 제공합니다.

기존 색상·서체·간격을 유지하며 IAK에서는 사례 목록만 참조합니다. 디자인 전용 7개는 시각 참고용입니다. Figma는 정적 상태 예시이며 실제 상호작용은 웹에서 확인합니다.

## 1.5 실전 조합

`scenarios.html`에서 검색·복구, 긴 콘텐츠·이미지 누락·표, 입력·검증·실패·완료를 시연합니다. 각 프로젝트에 3개 조합 / 12개 상태가 추가됐으며 기존 IAK 138개 사례는 변경하지 않습니다. 추가 사례는 기존 스타일을 활용한 파생 조합이며 Behance 관찰 사례 수에 합산하지 않습니다.

- 검색: 임의 검색어로 빈 결과, 상태 선택으로 로딩·오류, 버튼으로 복구를 확인합니다.
- 폼: 빈 상태 제출로 검증, 예시 이메일과 10자 이상 내용 및 동의로 제출, 결과 선택으로 실패·재시도를 확인합니다.
- 목록과 상세는 공통 상세 레이아웃을 보여주는 조합 시연이며 개별 콘텐츠 라우팅은 없습니다.
- 입력값은 메모리에만 있으며 실제 전송·구독·저장은 하지 않습니다. 새로고침하면 초기화됩니다.
- Figma 연결은 `handoff/figma-supplementary.json`을 참조하세요. 편집 가능한 정적 흐름 참고이며 모든 웹 폼 컨트롤을 픽셀 단위로 복제한 화면은 아닙니다.

제품 확장 1.6: `product.html`. 사용법: `source/product-patterns.md`. 출처: `handoff/product-patterns.json`.
