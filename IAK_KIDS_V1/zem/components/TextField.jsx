// TextField — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
export function TextField(props) {
  const C = window.ZEM && window.ZEM.TextField;
  return C ? React.createElement(C, props) : null;
}
