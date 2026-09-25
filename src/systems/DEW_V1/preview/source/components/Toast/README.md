# Toast

A brief, non-blocking notice: `surface` sheet, 1px `textPrimary` frame, square corners, max width 400. Each tone has its **word** ("안내 / 완료 / 주의 / 오류") and **icon**; colour only reinforces.

**Consumer provides:** `tone` (`info` | `success` | `warning` | `error`), `title`, optional `message`, `action` (`{label, onClick}` — rendered as a text Button), `onClose`, `toneLabel`. Place toasts in `ToastRegion` (fixed bottom-right; full-width with 16 gutters on mobile).

- info: outlined icon square · success: `support` icon square · warning: `border` icon square · error: `accent` icon and 2px `accent` top rule. Text is always `textPrimary`/`textSecondary`.
- info/success use `role="status"` (polite); warning/error use `role="alert"`.
- Don't use toasts for page-level errors — use the error panel in the template (see Template states).

Status: **derived-extension**.
