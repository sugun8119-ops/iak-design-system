# 프로젝트별 독립 디자인 시스템

IAK는 항목과 케이스의 기준이고, 시각 스타일은 각 프로젝트가 정한다. 현재 이 목록에는 DEW_V1, KOREX_V1, HYNIX_V1, KPOP_V1을 기록한다. 각 시스템의 검증 범위와 남은 항목은 개별 기록을 따른다. 포트폴리오 전체의 제작 완료를 의미하지 않는다.

| 프로젝트 | 용도 | 스타일 |
|---|---|---|
| DEW_V1 | Editorial / Premium / Content Web | 크림 바탕·세리프 헤드라인·편집 그리드 |
| KOREX_V1 | Corporate / Brand / Product Web | 녹색 브랜드·제품 탐색·기업 정보 |

DEW_V1과 KOREX_V1의 각 폴더는 figma-system.json, claude-system.md, preview/로 구성된다. 각각 27개 컴포넌트 항목과 기본 템플릿 3개, 공통 상태 사례를 제공한다. preview/source/는 Claude의 재사용 소스, preview/handoff/는 Figma 연결 및 검증 기록이다. 정적 HTML 사례와 React 런타임 소스를 구분해 사용한다.

IAK_MASTER_V1은 항목 참조 자료다. 프로젝트별 시각 디자인을 대체하지 않는다. 정확한 적용 범위는 각 preview/coverage.md에 있다.

## HYNIX_V1 · KPOP_V1 수정 기록

아래 내용은 HYNIX_V1과 KPOP_V1의 개별 기록입니다. 새 프로젝트의 수치나 서체 규칙에 적용하지 않습니다.

IAK Design Studio의 **케이스 항목 구조만 공유**하고 Behance 프로젝트별 고유 스타일을 유지하는 두 독립 시스템입니다. IAK/RAIS 색상·폰트·형태를 공통 브랜드로 상속하지 않습니다. 한 프로젝트에 하나를 선택하고 `CLAUDE.md` → `claude-system.md` → `figma-system.json` 순으로 적용합니다. 정적 HTML/CSS/JS이며 DB·Router·설치가 필요 없습니다.

| 시스템 | 추천 사용처 | Figma | Claude Design |
|---|---|---|---|
| HYNIX_V1 | 설비 관제, IoT 운영, 장비 관리, 원격 뷰어 | [13종 · 61변형](https://www.figma.com/design/Nh9NILHBye8VS0jGtph3UB) | [게시 완료](https://claude.ai/design/p/e80718a5-1ce2-4e2c-8305-66e1c569290b) |
| KPOP_V1 | 모바일 콘텐츠, 엔터테인먼트 피드, 문화 매거진 | [13종 · 55변형](https://www.figma.com/design/VR9GFAKIFEjLWuQonbJVYv) | [게시 완료 · 최종 자동 재검사 통과](https://claude.ai/design/p/b9b13fc9-3a4a-4815-b091-5eab5b27fa26) |

[시스템 미리보기](https://sugun8119-ops.github.io/iak-design-system/systems/)

## 1.1 수정

각 시스템에 IAK 원본 30개 항목을 매핑한 `case-coverage.json`, `preview/cases.html`, 운영 문서 7개(`docs/`)를 추가했습니다. 원본 토큰은 유지하고 Toast만 각 프로젝트 스타일로 보완했습니다. 실제 검사 기록은 `qa-results.json`에서 확인합니다. 재생성 안정성/스트레스 테스트의 IAK 원본 점수는 가져오지 않으며 미실행은 미실행으로 표시합니다.

Figma의 `22 Case Library`, `23 Project Guides`, `15 Toast`에서 같은 체계를 확인할 수 있습니다. HYNIX의 4→2열 전환을 1200px로 바로잡았고 사이드바 900px 전환과 구분했습니다. 구식 Figma 미생성 문구도 수정했습니다.

## 각 폴더의 파일

- `figma-system.json`: 토큰, 컴포넌트 13종, Main/Sub/Detail 명세, 등록 정보
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

HTML과 Figma는 동일한 토큰·컴포넌트 계약을 사용하는 별도 구현입니다. 픽셀 단위 복제본이 아닙니다. 기본 권장 글꼴은 Pretendard 1.3.9입니다. HTML/Claude는 번들 WOFF2를 사용하고, 현재 Figma 자동화 환경은 Pretendard를 제공하지 않아 Noto Sans KR로 대체 표시합니다. 각 Foundations에 제한을 명시했습니다.

## Claude Design 사용

HYNIX_V1은 Published 상태로 팀 신규 프로젝트에서 선택할 수 있습니다. Main/Sub/Detail을 실제 templates 항목으로 변환했고 디자인 시스템 구조 검사를 통과했습니다. 생성 과정의 추가 화면 점검은 완전한 기능 보증이 아닙니다.

KPOP_V1도 Published로 등록해 팀 신규 프로젝트에서 선택할 수 있습니다. 30개 케이스, 7개 문서, 핵심 12개 + Toast, Main/Sub/Detail 템플릿을 갖췄습니다. OS 글꼴 fallback과 반경 수정 후 TP01–TP10 및 디자인 시스템 재검사를 완료했습니다. TP10은 104개 파일을 검사했고 반경·Toast 규격 9개도 통과했습니다. 이후 사용자 승인으로 Pretendard 번들 정책으로 변경했고, 재검사를 통과했으며 앱의 폰트 경고 배너도 사라졌습니다. 독립 재생성 비교와 실기기 화면 읽기 검사는 별도 미실행 항목입니다.

## 확인

v1.0에서 저장소 검사 31개와 빌드를 통과했습니다. v1.1 검증 결과는 각 `qa-results.json`에 기록합니다. 정적 preview의 검색·필터·저장·오프라인 제어 비활성화와 390px 화면을 확인했습니다. Figma의 24개 컴포넌트 세트 변형 수, 주요 컬러 연결, 템플릿 글꼴·가로 넘침과 여섯 화면을 점검했습니다.

모든 문구·수치·장비 도식·추상 그래픽은 가상 자료입니다. 원본 고객 로고, 실제 카피/데이터, 고유 이미지/아이콘을 포함하지 않습니다. 출처와 관찰/정규화 구분은 각 JSON provenance에 있습니다.


v1.1 로컬 확인: 각 30개 케이스 경로·앵커, 문서 7개, 시각 토큰 원본 유지, 375px Main/Sub/Detail 가로 넘침 없음, Toast 닫기 및 다음 버튼 포커스. Figma 추가 30개 안내/7개 문서/Toast 5상태의 배치와 토큰 바인딩을 확인했습니다. 화면 읽기 도구 실기기 인증과 독립 AI 재생성 3회 비교는 미실행입니다.

## 폰트 업데이트

사용자 승인으로 HYNIX/KPOP 기본 글꼴을 Pretendard 1.3.9로 변경했습니다. assets/fonts/에 실제 WOFF2와 SIL OFL 라이선스가 포함됩니다. 글자 크기·굵기·행간과 각 프로젝트 스타일은 유지합니다. 375px Main/Sub/Detail에서 가로 넘침 없음을 확인했습니다.
