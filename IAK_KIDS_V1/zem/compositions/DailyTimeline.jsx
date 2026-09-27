// DailyTimeline — thin export of the v2.3 composition pattern (implementation: zem/lib/zem-patterns.js → window.ZEM_PATTERNS). Requires icons.js + zem-ui.js + zem-patterns.js.
export function DailyTimeline(props) {
  const C = window.ZEM_PATTERNS && window.ZEM_PATTERNS.DailyTimeline;
  return C ? React.createElement(C, props) : null;
}
