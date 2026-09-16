# IAK 템플릿 운영

사이트의 **템플릿 운영**에서 사용하는 AI 도구를 고르고 운영 스킬 설치 명령을 복사합니다. 설치 후 새 Codex 작업 또는 Claude Code 세션에서 요청문을 사용합니다. 사이트는 AI를 직접 실행하거나 Figma를 자동 수집하지 않습니다.

- 추가/수정: `$iak-add-template` 또는 `/iak-add-template`
- 피드백 개선: `$iak-refine-template` 또는 `/iak-refine-template`
- 같은 설치 명령은 해당 스킬의 최신 SKILL.md로 갱신하며 이전 파일을 .bak으로 보존합니다.

## 추가·업데이트 흐름

원본 링크/파일과 원하는 기능 → 원본 확인 → 데스크톱/모바일 규칙 정리 → 로컬 미리보기 제작 → 템플릿 등록 → 테스트와 브라우저 확인 → 권한 범위에 따라 배포.

IAK 저장소 안에서 작업합니다. 프리뷰는 검토한 코드만 `src/template-previews/<id>/`에 넣습니다. `index.html`을 진입점으로 하고 자산 경로는 상대 경로를 사용합니다. 빌드 앱은 `/templates/<id>/preview/`에서도 실행되도록 base를 상대 경로로 설정합니다. 외부 디자인 아카이브를 검토 없이 공개하지 않습니다.

예시 `work/my-template.json`:

```json
{
  "id": "my-template",
  "name": "내 템플릿",
  "category": "예약",
  "description": "사용자가 제작한 예약 화면",
  "type": "custom",
  "status": "draft",
  "sources": ["사용자가 제공한 원본 링크 또는 파일 경로"],
  "layout": {
    "desktop": "원본에서 확인한 폭과 열 비율",
    "mobile": "375px에서 확인한 순서와 재배치",
    "sections": ["소개", "예약 입력", "요약"]
  },
  "features": "이 디자인으로 예약 화면을 만들어줘. 미연동 예약은 데모로 표시해줘.",
  "acceptance": ["원본의 콘텐츠 순서 유지", "키보드로 입력 및 결과 확인", "375px 가로 넘침 없음"]
}
```

```sh
node scripts/template-workflow.mjs add work/my-template.json
# 기존 id와 URL을 유지하며 변경
node scripts/template-workflow.mjs update work/my-template.json
npm test
npm run build
```

새로 추가한 카테고리는 사이트 필터에도 표시됩니다. 등록 도구는 AI 대신 디자인을 만들어주거나 시각 검수를 대신하지 않습니다. 원본 파일명·출처·메타데이터가 공개될 수 있으니 게시 전에 비공개 정보 포함 여부를 확인합니다.

## 피드백 → 다음 생성 규칙

기대/실제 차이 재현 → 앱/템플릿/공통 컴포넌트 중 수정 범위 결정 → 수정 및 필요한 회귀 검사 → 확인된 규칙만 해당 template.json의 lessons로 전달.

```json
{
  "id": "my-template-mobile-order",
  "templateId": "my-template",
  "expected": "모바일에서 입력 다음 요약",
  "actual": "요약이 입력보다 먼저 표시됨",
  "rule": "375px에서는 예약 입력 다음에 요약을 표시한다.",
  "evidence": "원본 비교 및 재현 기록 경로",
  "status": "verified",
  "verification": "실제로 실행한 검사 및 화면 확인 결과",
  "regressionTests": []
}
```

```sh
node scripts/template-workflow.mjs feedback work/feedback.json
# 기존 피드백 수정
node scripts/template-workflow.mjs feedback-update work/feedback.json
```

미검증 피드백은 `draft`로 저장하고 실제 확인 후 `verified`로 갱신합니다. 자동화한 검사가 있다면 `regressionTests`에 `tests/...` 경로를 기록합니다. 시각 검수만 했으면 배열은 비워두되 verification에 관찰한 결과를 씁니다. verified 여부는 사람/AI 작성자의 기록이며 도구가 검수 진위를 판정하지 않습니다.

빌드는 verified 기록만 해당 템플릿의 lessons에 포함합니다. 다른 템플릿이나 공통 브랜드 규칙으로 자동 전파하지 않습니다. 생성 스킬은 template.json과 lessons를 읽습니다. 반복 방지에 도움이 되는 절차이며 생성 결과를 항상 동일하게 보장하지 않습니다.
