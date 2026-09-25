// Toast — thin export of KOREX UI (master/lib/kx-ui.js). Requires kx-icons.js + kx-ui.js loaded.
export function Toast(props){const C=window.KX&&window.KX.preview.ToastView;return C?React.createElement(C,props):null}
export function ToastProvider(props){return React.createElement(window.KX.ToastProvider,props)}
export function useToast(){return window.KX.useToast()}
