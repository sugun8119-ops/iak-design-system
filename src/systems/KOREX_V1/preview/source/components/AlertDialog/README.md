# AlertDialog

확인이 반드시 필요한 결정용 Dialog sm: 아이콘 마크 + 제목 + 결과 설명 + [취소][확인].

- **출처**: **derived-extension**.
- **danger**: 새 빨강 없이 잉크(`textPrimary`) 사각 마크 + 경고 아이콘, 확인 버튼은 Button `danger`(잉크 면 + 휴지통 + “비우기/삭제” 같은 구체 동사). **neutral**: `primarySoft` 마크 + 정보 아이콘, 확인은 primary.
- `role="alertdialog"`, 바깥 클릭·닫기 버튼 없음(명시적 선택 강제). Esc는 취소와 같다(처리 중에는 무시).
- loading: 확인 버튼 스피너 + “처리 중…”, 취소 비활성. error: 본문에 잉크 아이콘 + “오류” 문장(`role="alert"`), 확인 라벨을 “다시 시도”로.
- **제공할 것**: `open`, `title`, `description`, `confirmLabel`, `cancelLabel`, `onConfirm`, `onCancel`, `tone`, `loading`, `error`.
- **v1.3 (derived-extension)**: `onConfirm`이 Promise를 반환하면 자동으로 pending(`aria-busy`, 취소 비활성) → 거부 시 `role=alert` 오류 + 확인 버튼 “다시 시도” → 이행 시 `onResolved`. 열리면 취소 버튼으로 포커스.
