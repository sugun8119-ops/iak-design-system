Mobile filter bottom sheet: edit a draft, then 적용 (apply) or 취소/Esc (revert) — use on every 390/391 list with filters.

```jsx
const [applied, setApplied] = React.useState({ class: ['사과'] });
const [open, setOpen] = React.useState(false);
<Button variant="secondary" size={42} onClick={() => setOpen(true)}>필터 {Object.values(applied).flat().length}</Button>
<MobileFilterSheet open={open} value={applied} count={(d) => countFor(d)}
  onApply={(v) => { setApplied(v); setOpen(false); }} onClose={() => setOpen(false)} />
```

- Body = source FilterPanel mobile (75px header, 초기화 82×42 r5, 72px accordion rows). Sheet chrome (radius 10 top, apply bar 50) is KOSAF extension.
- Applied chips live outside the sheet (FilterChip removable, + 전체 초기화).
- Apply button shows live result count (`count(draft)`); 0 → disabled "조건에 맞는 상품 없음".
- `inline` renders in-flow for docs.
