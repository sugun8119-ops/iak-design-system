# Layout Patterns

Single-column 320–480 mobile canvas; max reading width 680 on desktop

기준폭 390px · 4열 · gutter 16px.

- Main: Discover → ../preview/index.html
- Sub: Category Feed → ../preview/sub.html
- Detail: Story Detail → ../preview/detail.html

공통 항목은 유지하되 CRM/RAIS 대시보드 업무 내용은 복사하지 않는다. 긴 제목은 높이를 늘리고 최소 글자 크기를 유지한다.


## Quality revision 1.3

KPOP: 48px 기본 버튼, 44px 최소 터치 영역, 25~28px 비조작 배지. Hero 4:5 / Detail 16:10 / 목록 1:1. 이미지의 이중 패딩 제거, 목록 88px 썸네일 + 16px 간격과 hairline 구분. 본문 16/26, 문단 사이24. 자체 링·캡슐 SVG를 중앙 크롭한다.

타이포: Display32/40, Heading24/32, Title18/26, Body16/26, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.


## Quality revision 1.4 · 2026-09-26

콘텐츠 아트 방향: Music pink / Stage blue / Culture green. 이는 콘텐츠 그래픽 팔레트이며 브랜드와 상태 토큰은 기존 값을 유지한다. Main은 hero → Latest stories 2개 → ranking → 일정으로 구성한다. 제목·카테고리·읽기 시간은 상세 화면과 일치시킨다. 웹 일정은 월/일 블록과 내용 열, Figma 일정은 기존 ScheduleRow 인스턴스를 재사용한다.

BottomNav는 자체 제작 compass/feed/bookmark 24px, stroke 1.75px 아이콘과 텍스트를 조합한다. SVG는 장식이고 접근 가능한 이름은 텍스트가 제공한다. active는 연분홍 배경과 aria-current로 표시하며 웹 링크 높이는64px, Figma 항목64px/전체96px다. 미디어 없음 변형은 그래픽 대신 중립 플레이스홀더를 유지한다.
