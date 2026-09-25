# KOREX_V1 인계 · 1.2.0

- Claude Design: https://claude.ai/artifact/23zNuD35PBpF9wPangTXsz?org=fa3d9581-54d4-4425-bae4-42d8076030e7
- Figma: https://www.figma.com/design/MR9qvFSq9w5HAD2wnQObdn
- GitHub: https://github.com/sugun8119-ops/iak-design-system/tree/main/src/systems/KOREX_V1

프로젝트 전용 11종 + 공통 16종 = 27종. Figma 공통 UI 변형은 175개이며 아이콘은 별도다. Figma Foundations, Components, Templates, Actions, Forms, Feedback & Content, Overlays, Data 순으로 탐색한다.

IAK의 138개 참조 행은 시각 변형·조합·HTML 의미·실행 동작·design-only 항목이 섞인 체크리스트다. 138개를 각각 Figma variant로 복제했다는 뜻이 아니다. 실제 네이티브 변형은 figma-components.json, Claude와 소스 사례는 ../coverage.md에서 확인한다. Icon의 labelled/decorative, 이메일 입력, 키보드 탐색은 런타임/문서 계약이다. 가상 스크롤·추가 테마·백엔드는 이번 최소 편집/브랜드 웹 범위에 넣지 않는다.

기본 템플릿 3개는 Figma에서 편집한다. 확장 템플릿 상태 및 상호작용 사례는 Claude와 preview/source/를 기준으로 사용한다. Code Connect 및 팀 공유 라이브러리 게시를 실행하지 않았다.

Figma와 웹의 서체 매핑은 figma-system.json fontMapping 참고. 줄바꿈은 사용 환경에 따라 다를 수 있다. 작은 시각 요소의 클릭/터치 영역은 최소 44px로 감싼다. 고정 SVG 선은 한 축의 기하학적 크기가 0이어도 선 두께로 표시된다.
