# Coverage138

IAK 138개 케이스를 KOREX 컴포넌트로 모두 렌더한 갤러리. 케이스마다 안정 ID 앵커(`#c-<family>-<id>`, 예: `#c-table-virtual`)와 referenceType · origin 배지, 사용한 export/props를 표시한다.

- **referenceType**: code 114 · composition 8 · native 4 · preview-only 5 · design-only 7. design-only는 시각 샘플이며 런타임 컴포넌트나 prop이 아니다.
- **origin**: observed = 정규화 preview에서 계승(Behance 원본 정밀 추출 아님), derived-extension = 이번에 KOREX 스타일로 새로 만든 사례.
- 행 단위 기록은 패키지의 `preview/case-coverage.json`(138행), 정적 사본은 `preview/coverage-138.html`.
- family별 카드: Coverage 그룹의 Coverage·<Family>.
