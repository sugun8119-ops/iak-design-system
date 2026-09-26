# IAK KIDS_V1 · Little Everyday v2.3.1 — 수정/검수 기록 (2026-09-27)

## 수정
1. 번들 무한 재삽입: `iak-kids-v2.2-templates/`(구형 ds-base.js 3개 + zem/lib/icons.js·zem-ui.js 사본)가 번들 입력으로 스캔됨 → `archive/iak-kids-v2.2-templates.zip`으로 보관(25파일 + ARCHIVED.txt), 폴더 삭제. 컴파일러는 루트 `templates/` 외 모든 .js를 스캔하므로 구형 스냅샷은 폴더가 아닌 ZIP으로만 보관합니다(재발 방지 규칙).
2. 템플릿 3종 `phaseOf(p)`: `new URLSearchParams(location.search).get("state") || p || "default"`.
3. `zem/lib/zem-patterns.css`: `.zp-tl-row .zem-badge{flex-shrink:0;white-space:nowrap}` 추가. 완료 제목 색은 기존 `.zp-tl [data-status=done] .zp-tl-title{color:var(--iak-kids-text-secondary)}` 하나만 유지. 캐시: styles.css → `zem-patterns.css?v=2.3.1`, ds-base.js 3개 → `styles.css?v=2.3.1`.
4. `zem/qa-v23.html` 준비 판정: `.zs-body[data-state]` === 요청 상태 + `document.fonts.status==='loaded'` + placeholder 없음. empty/loading/no-children은 패턴 없이도 준비 완료, 그 외 상태는 패턴 요소 필요.

## 실제 검수 (실행함)
- check_design_system: 카드 69 · 컴포넌트 22 · 템플릿 3 인식 · 토큰 254 · 폰트 Nanum Barun Gothic · manifest 개수 일치 · startingPoints (none).
- 인계 ZIP `_ds_bundle.js` 정적 검증: v2.2 블록 5개 + 헤더 해시 항목 제거 후 `ds-base.js` 0건 · `iak-kids-v2.2` 0건 · `'_ds_bundle.js'` 참조 0건 · zem-ui.js 블록 1개 · 헤더 JSON 파싱 정상 → 자기 재삽입 경로 없음.
- 치환 적용 확인: phaseOf 3/3, ds-base 3/3, CSS 1, styles.css 1, QA 하네스 2.

## 미검수 (통과로 보지 마세요)
- 브라우저 렌더(템플릿 3종 · 375/834/1440 · 375px 배지 한 줄 · ?state= 상태 · 폰트 로드): 이 세션에서 실행하지 않음. `zem/qa-v23.html?s=default,empty,loading,error,long-text`로 로컬 확인 필요.
- 프로젝트의 `_ds_bundle.js`는 이번 턴 종료 시 컴파일러가 재생성합니다. 인계 ZIP 번들은 같은 입력(v2.2 폴더 제외) 기준으로 v2.2 블록만 제거한 사본이며, 컴파일러 재생성본과 바이트 비교는 하지 않았습니다.
- Safari Select 재검증 미실행(v2.2 경고 유지, `.mc-demo>*{min-width:0;max-width:100%}` 적용 상태).

## 알려진 경고
- 스타일 홀 3개(부모 홈 사용 시간 너비 · 시간표 칸/범례 색): 실행 중 바뀌는 값, 의도적 유지.
- startingPoints 비어 있음. 템플릿 3종은 @template로 Templates 그룹에만 인식됩니다.


## Independent Codex follow-up — 2026-09-27

The preceding sections record the original Claude turn. After it finished, the actual regenerated bundle and manifest were downloaded separately because full project archive export failed. Bundle SHA-256: `55ed8ad1ec8cce75c783aa41cba40a5888106aae122cbd3833d00d781dc10929`. Static checks found no legacy loaders or recursive references. Official OFL matched the repository byte-for-byte.

The regenerated bundle passed 45 Chrome state/width cases (3 templates × default/empty/loading/error/long-text × 375/834/1440), with actual state matching, no horizontal overflow and no controls below the harness 36px height threshold. Evidence: `tests/browser-2026-09-27/v231-generated-bundle.jsonl`. This is not a full accessibility or 44px audit.

The repository QA harness uses actual state + loaded font + Nanum CSS + no placeholder readiness; it does not require patterns, because KidActivity error is legitimately pattern-free. This correction was also sent to Claude. Figma v2.3, Safari Select, physical-device and screen-reader checks remain pending.

Claude subsequently confirmed the final readiness correction: state match, fonts loaded, no placeholder, and actual Nanum Barun Gothic font; no pattern-presence requirement.
