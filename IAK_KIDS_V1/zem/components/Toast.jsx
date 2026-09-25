// Toast — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
export function Toast(props) {
  const C = window.ZEM && window.ZEM.preview.ToastView;
  return C ? React.createElement(C, props) : null;
}
export function ToastProvider(props) {
  return React.createElement(window.ZEM.ToastProvider, props);
}
export function useToast() {
  return window.ZEM.useToast();
}
