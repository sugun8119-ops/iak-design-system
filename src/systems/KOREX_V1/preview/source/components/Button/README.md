# Button

KOREX CTA를 IAK Button 기준으로 확장한 행동 버튼: 4 variants(primary · secondary · ghost · danger) × 3 sizes(sm 36 · md 44 · lg 56), 각진 `radius-md` 4px.

- **출처**: primary/secondary와 밑줄 텍스트 액션은 정규화 preview에서 계승(observed). ghost 명칭, danger, sm/lg, pressed/loading은 **derived-extension**.
- **색**: primary = `primary` 면 + `surface` 글자(hover·pressed `primaryDark`). secondary = `surface` 면 + `primary` 경계·글자(hover `primarySoft`). ghost = 투명 + `textPrimary` 밑줄 글자(hover `primary`). danger = 새 빨강 없이 `textPrimary`(잉크) 면 + `surface` 글자 + 휴지통 아이콘 + “삭제” 같은 명시적 동사.
- **상태**: hover · focus(2px `textPrimary`, offset 4) · pressed(안쪽 2px 링) · disabled(`border` 면 + `textSecondary`) · loading(스피너 + 진행형 라벨, `aria-busy`, 클릭 차단).
- **크기**: sm은 시각 36px이지만 위아래 4px 확장 히트 영역으로 44px 터치 기준을 지킨다. lg는 title 20/28.
- 긴 라벨은 줄바꿈된다(자르지 않음). 아이콘 전용 버튼은 `label`로 읽을 수 있는 이름을 반드시 준다.
- **제공할 것**: `children`, `variant`, `size`, `icon`/`iconEnd`, `href` 또는 `onClick`, `loading` + `loadingLabel`, `disabled`, `block`.
- 기존 **CTA**는 그대로 유지한다(md primary/secondary와 동일 외형). 새 화면은 Button을 쓴다.
- observed는 Behance 원본 정밀 추출이 아니라 정규화 preview에서 계승했다는 뜻이다.
- **v1.3 (derived-extension)**: `variant="text"`(IAK 이름, 기존 ghost와 같은 모양 — ghost는 별칭으로 유지), `autoFocusMark`(대화상자 초기 포커스 표식). d-outlined · d-outlined-primary · d-soft는 Coverage 갤러리의 **시각 샘플(design-only)**이며 variant가 아니다.
