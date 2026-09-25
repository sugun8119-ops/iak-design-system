# HYNIX_V1 · KPOP_V1 디자인 시스템

두 독립 시스템입니다. 한 프로젝트에 하나를 선택하고 `CLAUDE.md` → `claude-system.md` → `figma-system.json` 순으로 적용합니다. 정적 HTML/CSS/JS이며 DB·Router·설치가 필요 없습니다.

| 시스템 | 추천 사용처 | Figma | Claude Design |
|---|---|---|---|
| HYNIX_V1 | 설비 관제, IoT 운영, 장비 관리, 원격 뷰어 | [12종 · 56변형](https://www.figma.com/design/Nh9NILHBye8VS0jGtph3UB) | [게시 완료](https://claude.ai/design/p/e80718a5-1ce2-4e2c-8305-66e1c569290b) |
| KPOP_V1 | 모바일 콘텐츠, 엔터테인먼트 피드, 문화 매거진 | [12종 · 50변형](https://www.figma.com/design/VR9GFAKIFEjLWuQonbJVYv) | [사용 한도로 중지된 초안](https://claude.ai/design/p/b9b13fc9-3a4a-4815-b091-5eab5b27fa26) |

[시스템 미리보기](https://sugun8119-ops.github.io/iak-design-system/systems/)

## 각 폴더의 파일

- `figma-system.json`: 토큰, 컴포넌트 12종, Main/Sub/Detail 명세, 등록 정보
- `claude-system.md`: STYLE DNA, Layout, Typography, Image Direction, Components, Do/Don't, Default Pages
- `CLAUDE.md`: Claude Code의 진입점
- `integrations.json`: GitHub·Figma·Claude Design 링크와 정확한 상태
- `figma-components.json`: Figma 컴포넌트별 직접 링크와 변형 목록
- `preview/index.html`, `sub.html`, `detail.html`: Main, Sub, Detail
- `preview/components.html`: 토큰/컴포넌트 안내 및 상태 샘플
- `preview/styles.css`, `app.js`: 스타일과 로컬 데모 동작
- `preview/figma-main.png`, `figma-sub.png`, `figma-detail.png`: 네이티브 Figma 화면 이미지

## Figma 사용

각 파일의 Getting Started → Foundations → 컴포넌트별 페이지 → Templates 순서로 확인합니다. 두 컬렉션(Primitives 38개, Tokens 38개), 텍스트 스타일 5개, 효과 스타일 2개가 있습니다. Templates 프레임은 로컬 컴포넌트 인스턴스이며 주요 Main/Sub/Detail 이동이 연결되어 있습니다. 프레임을 복제하고 TEXT 속성·variant를 교체해 시작하세요. 팀 라이브러리 게시와 Code Connect는 수행하지 않았습니다.

HTML과 Figma는 동일한 토큰·컴포넌트 계약을 사용하는 별도 구현입니다. 픽셀 단위 복제본이 아닙니다. Figma의 한국어 글꼴은 원본 fallback 스택에 있는 Noto Sans KR이며, HTML은 운영체제에 설치된 글꼴을 사용합니다.

## Claude Design 사용

HYNIX_V1은 Published 상태로 팀 신규 프로젝트에서 선택할 수 있습니다. Main/Sub/Detail을 실제 templates 항목으로 변환했고 디자인 시스템 구조 검사를 통과했습니다. 생성 과정의 추가 화면 점검은 완전한 기능 보증이 아닙니다.

KPOP_V1은 소스 업로드·생성 프로젝트·템플릿 초안까지 만들었으나 계정 세션 한도로 최종 생성/검사가 중단되었습니다. UI가 안내한 재개 시각은 2026-09-25 13:50 KST입니다. 해당 프로젝트에서 Resume → 남은 검사/수정 → Published 순서로 완료해야 합니다. 한도를 우회하거나 유료 요금제를 변경하지 않았습니다.

## 확인

GitHub 저장소 전체 검사 31개 및 빌드 통과. 정적 preview의 검색·필터·저장·오프라인 제어 비활성화와 390px 화면을 확인했습니다. Figma의 24개 컴포넌트 세트 변형 수, 주요 컬러 연결, 템플릿 글꼴·가로 넘침과 여섯 화면을 점검했습니다.

모든 문구·수치·장비 도식·추상 그래픽은 가상 자료입니다. 원본 고객 로고, 실제 카피/데이터, 고유 이미지/아이콘을 포함하지 않습니다. 출처와 관찰/정규화 구분은 각 JSON provenance에 있습니다.
