# Table

A quiet editorial index table: `meta` headers over a 1px `textPrimary` rule, `body` rows divided by `border` hairlines, no zebra fills, no card frame.

**Consumer provides:** `columns[]` (`key`, `label`, `sortable`, `align: 'end'` for numbers, `width`, `render`), `rows[]` (`id`, values, `selected`), `sort` (`{key, direction}`) + `onSort(key, direction)`, `state` (`ready` | `loading` | `empty` | `error`), `emptyTitle`/`emptyMessage`/`emptyAction`, `errorTitle`/`errorMessage`/`onRetry`, `caption`, `summary`, `minWidth`.

- Sort: header buttons with `aria-sort`; the active column's label gets the 2px `accent` underline and a direction icon.
- Missing values render "—" with hidden "정보 없음". Long text wraps.
- Narrow screens: the wrapper is a focusable, labelled scroll region; columns are never dropped.
- Loading uses Skeleton rows; empty/error show an icon, a sentence and one Button.

Use for archives, issue indexes and spec tables inside StoryDetail — not for KPI dashboards. Status: **derived-extension**.
