// KOSAF extension UI icons — authored for KOSAF_V1 1.5.0 (NOT extracted from Figma).
// 24×24 grid, 2px stroke, round cap/join, stroke = currentColor. `fill: true` shapes may be filled (Rating star, liked heart).
// 1.5.1 variants: entries with `variants` support outline | duotone | solid. `closed` = path indexes that form closed faces (soft fill in duotone,
// solid fill in solid); `inner` = detail paths drawn on top of a solid face in the knock-out colour. Open-stroke glyphs (close, plus, chevrons…)
// have no variants and always fall back to outline.
export const KOSAF_UI_ICONS = [
  { name: 'close', label: '닫기', category: 'action', d: ['M6 6L18 18', 'M18 6L6 18'] },
  { name: 'menu', label: '전체메뉴', category: 'navigation', d: ['M4 6H20', 'M4 12H20', 'M4 18H20'] },
  { name: 'plus', label: '더하기·증가', category: 'action', d: ['M12 5V19', 'M5 12H19'] },
  { name: 'minus', label: '빼기·감소', category: 'action', d: ['M5 12H19'] },
  { name: 'chevron-left', label: '이전', category: 'navigation', d: ['M15 5L8 12L15 19'] },
  { name: 'chevron-right', label: '다음', category: 'navigation', d: ['M9 5L16 12L9 19'] },
  { name: 'chevron-up', label: '접기', category: 'navigation', d: ['M5 15L12 8L19 15'] },
  { name: 'chevron-down', label: '펼치기', category: 'navigation', d: ['M5 9L12 16L19 9'] },
  { name: 'star', variants: ['outline', 'duotone', 'solid'], closed: [0], inner: [], label: '별점', category: 'status', fill: true, d: ['M12 3.5L14.6 8.8L20.4 9.6L16.2 13.7L17.2 19.5L12 16.8L6.8 19.5L7.8 13.7L3.6 9.6L9.4 8.8Z'] },
  { name: 'heart-outline', variants: ['outline', 'duotone', 'solid'], closed: [0], inner: [], label: '관심상품(해제)', category: 'status', fill: true, d: ['M12 19.5C12 19.5 3.5 14.6 3.5 9C3.5 6.5 5.5 4.5 8 4.5C9.7 4.5 11.1 5.4 12 6.8C12.9 5.4 14.3 4.5 16 4.5C18.5 4.5 20.5 6.5 20.5 9C20.5 14.6 12 19.5 12 19.5Z'] },
  { name: 'filter', variants: ['outline', 'duotone', 'solid'], closed: [0], inner: [], label: '필터', category: 'action', d: ['M4 5H20L14 12.5V19L10 17V12.5Z'] },
  { name: 'sort', label: '정렬', category: 'action', d: ['M8 4V20', 'M4.5 7.5L8 4L11.5 7.5', 'M16 20V4', 'M12.5 16.5L16 20L19.5 16.5'] },
  { name: 'check-mark', label: '확인·선택됨', category: 'status', d: ['M5 12.5L10 17.5L19 7'] },
  { name: 'calendar', variants: ['outline', 'duotone', 'solid'], closed: [0], inner: [1], label: '날짜', category: 'form', d: ['M5.5 5H18.5A2 2 0 0 1 20.5 7V18A2 2 0 0 1 18.5 20H5.5A2 2 0 0 1 3.5 18V7A2 2 0 0 1 5.5 5Z', 'M3.5 10H20.5', 'M8 3V7', 'M16 3V7'] },
  { name: 'user', variants: ['outline', 'duotone', 'solid'], closed: [0,1], inner: [], label: '회원', category: 'navigation', d: ['M12 12A4 4 0 1 0 12 4A4 4 0 1 0 12 12Z', 'M4.5 20C5.5 16.5 8.5 14.5 12 14.5C15.5 14.5 18.5 16.5 19.5 20'] },
  { name: 'store', variants: ['outline', 'duotone', 'solid'], closed: [0,2], inner: [3], label: '판매샵', category: 'navigation', d: ['M4 9L5.5 4H18.5L20 9', 'M4 9H20', 'M5 9V20H19V9', 'M9.5 20V14H14.5V20'] },
  { name: 'home', variants: ['outline', 'duotone', 'solid'], closed: [0], inner: [], label: '홈', category: 'navigation', d: ['M4 10.5L12 4L20 10.5V20H14.5V14.5H9.5V20H4Z'] },
  { name: 'help', variants: ['outline', 'duotone', 'solid'], closed: [0], inner: [1,2], label: '문의·Q&A', category: 'navigation', d: ['M12 20.5A8.5 8.5 0 1 0 12 3.5A8.5 8.5 0 1 0 12 20.5Z', 'M9.6 9.5A2.4 2.4 0 1 1 12 12V13.5', 'M12 16.8V17'] },
  { name: 'grid', variants: ['outline', 'duotone', 'solid'], closed: [0,1,2,3], inner: [], label: '카드 보기', category: 'view', d: ['M4 4H10.5V10.5H4Z', 'M13.5 4H20V10.5H13.5Z', 'M4 13.5H10.5V20H4Z', 'M13.5 13.5H20V20H13.5Z'] },
  { name: 'list', label: '목록 보기', category: 'view', d: ['M9 6H20', 'M9 12H20', 'M9 18H20', 'M4.5 6H5', 'M4.5 12H5', 'M4.5 18H5'] },
  { name: 'chart-line', label: '추이·통계', category: 'data', d: ['M4 4V20H20', 'M7.5 15L11.5 11L14.5 14L20 8.5'] },
  { name: 'wallet', variants: ['outline', 'duotone', 'solid'], closed: [0,1], inner: [2], label: '금액·여신', category: 'data', d: ['M4 7H18A2 2 0 0 1 20 9V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V7Z', 'M4 7L15.5 4V7', 'M16 13.5H16.5'] },
  { name: 'refresh', label: '초기화', category: 'action', d: ['M19.5 12A7.5 7.5 0 1 1 17.3 6.7', 'M19.5 3.5V8H15'] },
];

// alias → canonical. Duplicated / legacy names resolve here instead of adding new SVGs.
export const KOSAF_ICON_ALIASES = {
  x: 'close', 'close-x': 'close', hamburger: 'menu', add: 'plus', increase: 'plus', decrease: 'minus',
  prev: 'chevron-left', next: 'chevron-right', 'caret-down': 'chevron-down', 'caret-up': 'chevron-up', expand: 'chevron-down', collapse: 'chevron-up',
  back: 'navigate', bag: 'shopping-bag', notification: 'bell', history: 'time-history', edit: 'document-edit', chart: 'analytics', money: 'wallet', trend: 'chart-line',
  like: 'heart', 'heart-filled': 'heart', 'like-outline': 'heart-outline', rating: 'star', check: 'check', done: 'check-mark', date: 'calendar',
  member: 'user', shop: 'store', qna: 'help', reset: 'refresh', 'view-grid': 'grid', 'view-list': 'list',
};

export const KOSAF_ICON_TONES = {
  current: 'currentColor', primary: 'var(--kosaf-color-icon-default)', secondary: 'var(--kosaf-color-text-secondary)',
  muted: 'var(--kosaf-color-text-muted)', disabled: 'var(--kosaf-color-text-disabled)', brand: 'var(--kosaf-color-action-primary)',
  positive: 'var(--kosaf-color-action-positive)', danger: 'var(--kosaf-color-action-danger)', focus: 'var(--kosaf-color-state-focus)', inverse: 'var(--kosaf-color-text-inverse)',
};

// Secondary (soft) fill per tone for duotone, and knock-out colour for solid. Existing semantic tokens only; no gradients/shadows.
export const KOSAF_ICON_SOFT = {
  current: ['currentColor', 0.16], primary: ['var(--kosaf-gray-100)', 1], secondary: ['var(--kosaf-gray-100)', 1], muted: ['var(--kosaf-gray-100)', 1],
  disabled: ['var(--kosaf-color-bg-subtle)', 1], brand: ['var(--kosaf-color-surface-brand-soft)', 1], positive: ['var(--kosaf-color-surface-brand-soft)', 1],
  danger: ['var(--kosaf-color-action-danger)', 0.14], focus: ['var(--kosaf-color-state-focus)', 0.12], inverse: ['var(--kosaf-color-text-inverse)', 0.3],
};
