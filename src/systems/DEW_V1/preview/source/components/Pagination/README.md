# Pagination

Page navigation under an ArticleList grid: text "이전 / 다음" with chevrons and 44px number targets; the current page is `textPrimary` 600 with the 2px `accent` underline — the same selected mark as CategoryNav.

**Consumer provides:** `page`, `total`, `onChange(n)` and/or `hrefFor(n)`, `siblingCount` (default 1), `disabled` (while a page loads), `label`.

- First/last: the unavailable step is shown in `textSecondary` with `aria-disabled` (never removed, so layout doesn't shift).
- Single page: one current number, both steps disabled. Disabled: all numbers inert, `aria-busy`.
- Mobile (<768): numbers collapse to "6 / 12" between the steps — same information, less width.

Status: **derived-extension**.

**IAK cases (v1.3):** all 8 cases render in the `CoveragePagination` card (anchors `case-pagination-<id>`).
