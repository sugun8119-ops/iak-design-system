// Card — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
export function Card(props) {
  const C = window.ZEM && window.ZEM.Card;
  return C ? React.createElement(C, props) : null;
}
