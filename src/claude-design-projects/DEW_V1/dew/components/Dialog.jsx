// Dialog — export of the DEW port (dew/lib/dew-ui.js; API mirrors uploads/IAK-Master-source/packages/ui/src). Load dew/lib/icons.js + dew/lib/dew-ui.js + styles.css first.
export function Dialog(props) {
  const C = window.DEW&&window.DEW.Dialog;
  return C ? React.createElement(C, props) : null;
}
