# 변경 기록
## KOREX_V1 · 2026-09-25
- IAK 사본을 KOREX_V1 · Project Design System으로 변환. 62개 카드 목차 유지.
- 원본 IAK 파일 → `archive/iak-master/` (활성 카드에서 제외).
- 토큰 재작성: 딥그린/민트/회색, Noto Sans KR, radius 2/4/6/pill, motion 140/200/280.
- 컴포넌트: Button에 outline·chip·selected, Card에 tone, Badge에 brand 추가. Pagination 번호형.
- 사이트 화면 3종(ProductHome, SearchList, ProductDetail) 추가.
- Behance 원본은 직접 조회 불가 — 사용자 관찰 기록을 observed 기준으로 사용.
- pill은 observed → chip·heart·switch 트랙 허용 (2/4/6 한정 아님).
- 누락 9항목 복원: System Hub, Structural Audit, Locks 01–03 / 04–10, Variant Stress, Regeneration Stability, UI kit 3종(korex-site/console/inquiry).
- figma-system.json · claude-system.md · coverage.json · source-observations.md · tokens/*.json 재생성.
