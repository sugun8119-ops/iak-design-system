# Independent design systems

HYNIX_V1과 KPOP_V1은 IAK Brand/RAIS와 다른 독립 스타일이다. 한 프로젝트에 하나를 선택하고 해당 폴더의 CLAUDE.md → claude-system.md → figma-system.json 순으로 읽는다.

| ID | 사용처 | Preview |
|---|---|---|
| HYNIX_V1 | 장비 관제, IoT, 원격 뷰어 | [Main](HYNIX_V1/preview/index.html) |
| KPOP_V1 | 모바일 엔터테인먼트, 콘텐츠 피드 | [Main](KPOP_V1/preview/index.html) |

각 폴더에는 Main/Sub/Detail/Components HTML, CSS, JS, Figma 명세, Claude 지침이 있다. 설치/DB/Router가 필요 없다.
Figma 네이티브 파일 진행 상태는 index.json을 참고한다. Claude Code는 시스템 폴더를 프로젝트에 복사하면 CLAUDE.md를 진입점으로 사용한다. Claude Design에는 같은 폴더의 파일을 프로젝트 소스로 넣고 claude-system.md를 디자인 규칙으로 제공한다. 파일 제공과 Claude Design 프로젝트 설치는 별개다.

출처는 각 JSON provenance에 기록했다. 모든 예시 문구, 수치, 그래픽은 신규 작성했으며 원본 고객 자산은 포함하지 않는다.
