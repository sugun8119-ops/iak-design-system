# KOSAF_V1 — Public Commerce / Enterprise Web System

KOSAF_V1은 농산물 온라인 도매시장 최종 수정본에서 역추출한 독립 디자인 시스템이다. IAK Design Studio의 관리 구조(Foundation → Semantic Token → Component → State → Pattern)를 따르되, 시각 값은 KOSAF 최종 Figma를 Source of Truth로 한다.

## Source of Truth

- Final source file: `MOEAkEbXtwHdE3xveg2Gto`
- Final source node: `1:85779` — `2023-07-21_화면 Screen ID_진행중`
- Design-system management file: `SZ7AweGiHxzEDmEmuNi3LY`
- Existing guide nodes to reconcile: `1:69548`, `1:69947`, `1:70749`, `1:107843`, `213:712`
- New Figma system areas: `KOSAF_V1 / Foundations`, `KOSAF_V1 / Core Components`

이 시스템은 기존 관리 화면의 항목을 버리지 않는다. Typography, Button, Button Status, Tab, Mobile/PC Component, Table, Pagination, Interaction 항목을 최신 최종본 값으로 재정의한다.

## STYLE DNA

공공/기업 거래 서비스에 맞는 높은 정보 밀도와 명확한 업무 흐름을 유지한다. 녹색 브랜드 액션, 중립적인 회색 정보 계층, 1920px 데스크톱과 390–391px 모바일 대응, 테이블/폼 중심의 거래 UX가 핵심이다.

## Foundation

### Color
- Primary: `#059B00`
- Primary Hover: `#02AC5A`
- Positive: `#17BF56`
- Brand Soft: `#EBFFE9`
- Lime Soft: `#D5FFBA`
- Text Primary: `#333333`
- Text Secondary: `#707070`
- Text Muted: `#888888`
- Border Default: `#DDDDDD`
- Border Strong: `#C1C1C1`
- Surface Subtle: `#F7F7F7`
- Focus: `#0047ED`
- Warning: `#FFE326`
- Danger: `#E23736`
- Danger Soft: `#FF5858`

### Typography
기본 폰트는 Noto Sans KR. 최종 원본에서 Regular/Medium/Bold가 핵심 가중치다.

- Display 40/52 Bold
- H1 30/40 Bold
- H2 24/34 Bold
- H3 22/34 Medium
- Title 20/30 Medium
- Body L 18/30 Regular
- Body M 16/24 Regular
- Body S 14/20 Regular
- Caption 12/16 Regular

### Spacing
`4 / 8 / 10 / 12 / 16 / 20 / 24 / 30 / 32 / 40 / 50 / 60`

### Radius
`2 / 3 / 5 / 10 / 16 / 20 / 25 / 30 / 40 / full`

## Layout

- Desktop reference width: 1920px
- Mobile reference width: 390–391px
- Search control: 579×50px, radius 25px
- Common form control heights: 45–50px
- Compact button: 34px
- Common button: 42–45px
- Large/mobile action: up to 70px
- Desktop table rhythm: 70px
- Mobile table rhythm: 50px
- Section rhythm: 20 / 30 / 50px

## Components

### Actions
- Button — Primary / Secondary / Danger
- States — Default / Hover / Disabled; Primary / Secondary에는 Focus 추가
- Search — 579×50, pill radius 25
- Badge — short status text

### Forms
- Input — Default / Focus / Error / Disabled
- Checkbox — Unchecked / Checked / Focus / Disabled
- Radio — Unchecked / Checked / Focus / Disabled
- Dropdown / Calendar — follow Input height and border rules

### Navigation
- Tab — Default / Selected
- PaginationItem — Default / Hover / Selected / Disabled
- Stepper — 3-step transaction flow
- Header / GNB
- Footer

### Data Display
- TableRow — Desktop 70px / Mobile 50px
- Product Card
- Small Data Card
- Status/summary blocks

### Overlay
- Modal shell — representative desktop 706×630
- Mobile modal variants are derived from final source screens.

## State Rules

- Primary action: #059B00 → hover #02AC5A
- Focus must use visible #0047ED outline/stroke.
- Disabled uses neutral surface/text and cannot rely on opacity alone.
- Error uses #E23736 and must include adjacent text feedback.
- Selected states must be distinguishable by shape/fill/text, not color alone.

## Responsive Rules

- Desktop and mobile are separate explicit variants when layout density changes materially.
- 1920px desktop screens preserve wide table and multi-column work areas.
- 390–391px mobile screens collapse table/data layouts into compact cards or stacked rows.
- Do not scale desktop typography proportionally; use the defined mobile/body hierarchy.
- Touch targets should remain at least 44px when interactive.

## IAK Mapping

IAK의 구조와 배포 방식만 재사용한다.

1. Foundation
2. Semantic Token
3. Component
4. State
5. Pattern
6. Template

IAK GameofMind의 다크/오렌지 외형은 KOSAF에 적용하지 않는다. KOSAF의 시각값은 반드시 최종 수정본을 우선한다.

## Migration Targets

기존 디자인 시스템 관리 노드:
- Common_최종 양식 — Typography / Button / Tab 중심
- Common_진행중 — Mobile/PC Component / Table / Pagination / Toggle / Spinner
- Interaction — 실제 화면/상호작용 레퍼런스
- Frame 107 / Frame 108 — 메인 화면, 대시보드, 데이터 카드 레퍼런스

2026-09-25: Common 두 섹션과 Interaction의 토큰·스타일 마이그레이션을 수행했다. Button 샘플 25개는 인스턴스로 교체했고, 나머지는 기존 구조 안에서 연결했다. 보존 예외와 미분류 색상 노드가 남아 있다. [migration-status.md](migration-status.md)를 실제 완료 범위로 참조한다.

## 실제 자산과 원본 보존 규칙

- 현재 변수 81개, 기본 Typography 9개 + KOSAF/Source 60개. 정확한 정의는 [figma-inventory.json](figma-inventory.json).
- Source 스타일은 최종본의 실제 서체 조합을 보존한다. 신규 화면에는 기본 9개를 우선한다.
- 위 컴포넌트/패턴 설명에는 설계 방향도 포함된다. 실제 생성된 11개 family와 구현 상태는 [figma-system.json](figma-system.json)의 components/componentStates를 따른다. plannedComponents는 구현되지 않은 항목이다.
- 원본의 소형 컨트롤과 브랜드 서체 예외는 유지되어 있으므로 터치 영역·대비·누락 서체를 자동 해결된 것으로 간주하지 않는다.
