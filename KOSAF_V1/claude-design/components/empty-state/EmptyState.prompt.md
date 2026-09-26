No-data block with optional action — use it for feedback & overlay on KOSAF PC (1920) and mobile (390–391) screens.

```jsx
<EmptyState actionLabel="상품검색" style={{minHeight:180}}/>
```

- Provenance: **Source-derived (1:85779)** · node 1:104584 · 1:91890. Structure, sizes and colours follow the exported source; behaviour beyond what the screen shows is a KOSAF extension.
- States: With action · Without.
- Props: `message`, `description`, `actionLabel`, `onAction`, `icon`, `device`.
- No-data block with optional action. Copy is from source; spacing is a KOSAF extension.

## 1.4.0 variants (KOSAF extension)
- `variant="noResults" onAction={reset}` — 검색/필터 0건 → 필터 초기화 (optionally `secondaryLabel="검색어 변경"`).
- `variant="emptyCart" onAction={goSearch}` — source copy 1:104584 + 상품검색.
- `variant="noHistory"` — 거래/주문내역 없음: guidance only, no CTA.
