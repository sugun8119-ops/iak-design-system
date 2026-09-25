// Badge — thin export of the ZEM_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
export function Badge(props) {
  const C = window.ZEM && window.ZEM.Badge;
  return C ? React.createElement(C, props) : null;
}
