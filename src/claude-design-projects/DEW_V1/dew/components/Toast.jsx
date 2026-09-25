// Toast — export of the DEW port (dew/lib/dew-ui.js; API mirrors uploads/IAK-Master-source/packages/ui/src). Load dew/lib/icons.js + dew/lib/dew-ui.js + styles.css first.
export function Toast(props) {
  const C = window.DEW&&window.DEW.preview.ToastView;
  return C ? React.createElement(C, props) : null;
}
export function ToastProvider(props) {
  return window.DEW ? React.createElement(window.DEW.ToastProvider, props) : props.children || null;
}
export function useToast() {
  return window.DEW.useToast();
}
