통합검색 table: grouped 2-level header (상품정보/거래정보), 14 columns, 구매하기 link, heart/cart, sold-out row — use it for data display on KOSAF PC (1920) and mobile (390–391) screens.

```jsx
<ProductTable rows={ROWS}/>
```

- Provenance: **Source-derived (1:85779)** · node 1:97566. Structure, sizes and colours follow the exported source; behaviour beyond what the screen shows is a KOSAF extension.
- States: Row default · First (bold) · Disabled · Liked.
- Props: `rows`, `columns`, `device`, `onBuy`, `onLike`, `onCart`, `highlightFirst`.
- 통합검색 table: grouped 2-level header (상품정보/거래정보), 14 columns, 구매하기 link, heart/cart, sold-out row. Mobile = stacked list.

## 1.4.0 (web refinement, reference: Mobbin table)
- 상품명 left; 거래물량/거래단가 right + tabular-nums (`numericAlign="center"` restores source centring). Header text, columns and 50+50 header heights unchanged.
- `sort` + `onSort` → sort buttons on qty/price/deadline with aria-sort.
- `selectable` + `selectedKeys` + `onSelectChange` → 48px checkbox column, selected row #EBFFE9.
- `state="loading" | "error"` (+ `onRetry`); empty rows → empty message. For search 0 results prefer `EmptyState variant="noResults"`.
- Mobile: stacked list, price right/tabular; wide table stays in its own horizontal scroll wrapper.
