# 1.4 품질 개선

현재 시작점은 [디자인 라이브러리](../library.html)와 [Figma Guide](https://www.figma.com/design/qDaMlSX00Eow0b7aDYKKsf?node-id=46-2)입니다. 검증은 [quality-1.4.json](quality-1.4.json)을 확인하세요. 아래 1.3 기록은 이전 전달 이력입니다. 현재 미리보기는 vendor/ 런타임을 포함하여 인터넷 연결 없이 동작합니다.

# DEW_V1 · 1.3.0

IAK는 사례 항목만 정하며, 시각 스타일은 이 프로젝트의 기존 정규화 foundation을 유지합니다.

- Claude: https://claude.ai/artifact/QPSdZdNRdLF3gfnZccrmYv?org=fa3d9581-54d4-4425-bae4-42d8076030e7
- Figma: https://www.figma.com/design/qDaMlSX00Eow0b7aDYKKsf?node-id=35-390
- GitHub: https://github.com/sugun8119-ops/iak-design-system/tree/main/src/systems/DEW_V1

전용 11개 + 공통 16개 family, 기본 템플릿 3개. IAK 138개 사례는 `../case-coverage.json`에서 하나씩 찾습니다. Figma에서는 **Coverage 138 · Actions / Forms / Feedback / Overlays & Data** 4개 페이지가 이 버전의 사례 기준이며, 138개 모두 편집 가능한 native component입니다. 기존 라이브러리 변형 개수와 더해서 사례 수를 세지 않습니다.

code 114 / composition 8 / native 4 / preview-only 5 / design-only 7. design-only는 시각 예시이며 runtime API가 아닙니다. Figma 상태 화면에서 실행 동작을 시뮬레이션하지 않으며 실제 동작은 Claude 카드와 source를 사용합니다. 가상 표와 비동기 확인·실패·재시도도 포함합니다.

기본 색상·타입·spacing·radius·grid는 v1.2와 동일합니다. Figma는 DEW의 제목에 Noto Serif KR Medium, 나머지에 Inter를 사용합니다. 웹은 Georgia/Arial 및 Noto 한글 fallback을 사용하므로 자폭과 줄바꿈은 다를 수 있습니다. 폰트 파일은 포함하지 않습니다. 폰트가 없을 때만 비슷한 사용 가능한 서체로 교체하고 기록합니다. 색상 변경은 하지 않았습니다.

같은 Figma 파일에 다른 작업의 별도 스타일 자료가 있을 수 있습니다. 이 인계에서는 위 Coverage 138 페이지와 이 폴더의 foundation을 함께 사용합니다. Code Connect 게시와 Figma 팀 라이브러리 게시는 수행하지 않았습니다.
