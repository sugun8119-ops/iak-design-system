# KOREX 디자인 규칙서
KOREX_V1 · Project Design System의 기본 규칙입니다. 출처 구분은 `source-observations.md`를 따릅니다.

## 원칙
- **Light only.** 흰 면과 옅은 회색 바탕 위에 딥그린 면으로 식별 영역을 만듭니다. (observed)
- **녹색 = 행동.** 검색·저장·신청 같은 주 행동만 `--action`으로 채웁니다. (observed: 녹색 검색 버튼)
- **보조 CTA는 직사각형 outline.** `Button variant="outline"`. (observed)
- **카테고리·필터는 pill chip.** 그 밖의 요소에는 pill을 쓰지 않습니다. (observed)
- **넓은 여백, 정돈된 목록.** 매물은 사진 좌 / 글 우 행으로 나열합니다. (observed)

## 수치 (derived-design-value)
| 항목 | 값 |
|---|---|
| radius | 2 버튼·입력 / 4 타일·메뉴 / 6 카드·모달 / pill chip |
| focus | 2px outline + 2px offset, 딥그린 면 위 흰색 |
| layout | max 1280 · pad 40/24/16 · 12/8/4 cols · 1024/640 |
| motion | 140 / 200 / 280ms · reduced 1ms |
| font | Noto Sans KR 100–900 |

## 금지
- 원본 로고·사진·고유 카피·실데이터 재사용
- 새 로고 제작 (텍스트 워드마크만)
- 이전 시스템의 주황·다크·서체·보석 마크 상속
