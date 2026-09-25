Data table row (`KOSAF/TableRow`, Figma 218:637) — stack rows inside a `role="table"` container for product/order lists; switch to `device="mobile"` at 390–391px.

```jsx
<div role="table">
  <TableRow header cells={['상품명', '판매자', '판매단가', '수량', '상태']} columns="2fr 1fr 1fr 80px 100px" />
  <TableRow cells={['양파/태극황/15Kg망', 'abc***', '190,000원', '300', <Badge>판매중</Badge>]} columns="2fr 1fr 1fr 80px 100px" style={{ borderTop: 0 }} />
</div>
<TableRow device="mobile" cells={['상품명', '상태']} />
```

- Desktop master 1500×70, Regular 16, inset 24 · Mobile master 350×50, Regular 14, inset 16 — never scale one into the other.
- 1px #DDDDDD stroke, white fill, radius 0. Stack rows with `borderTop: 0` on followers to avoid double lines.
- `header` (#F7F7F7, Medium), `selected` (#EBFFE9) and `columns` are web conveniences; the Figma set has only the Device property with a single text run.
