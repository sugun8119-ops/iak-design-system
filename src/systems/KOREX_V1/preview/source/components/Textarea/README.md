# Textarea

여러 줄 입력: TextField와 같은 label/description/메시지 구조 + 최소 높이 120, 세로 리사이즈, 선택적 글자 수 카운터(`maxLength`).

- **출처**: **derived-extension** (KOREX 원본에는 여러 줄 입력이 없음). 경계·반경·label 규칙은 KOREX 입력을 그대로 따른다.
- 카운터는 label 줄 오른쪽 `12/18` `textSecondary`, `aria-live="polite"`.
- 상태 표현은 TextField와 동일(error = 잉크 2px + 아이콘 + “오류” 문장).
- **제공할 것**: `label`, `value`/`defaultValue`, `onChange`, `rows`, `maxLength`, `description`, `error`, `required`, `readOnly`, `disabled`.
- **v1.3 (derived-extension)**: `state="hover"`, `rows`를 주면 최소 높이 120을 풀어 네이티브 행 수를 따른다(rows-2).


### 1.4 quality update
입력 상태 갱신, 대화상자 초점/스크롤 관리, 확인 오류 표시, 메뉴 키보드 진입을 보완했습니다. 실제 검증 범위는 preview/handoff/quality-1.4.json과 저장소 tests/project-systems.test.mjs를 참조하세요.
