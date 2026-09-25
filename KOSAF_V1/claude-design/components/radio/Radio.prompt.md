Single-select control (`KOSAF/Radio`, Figma 218:614) — use for mutually exclusive options such as 거래 방식 or 배송 방법; controlled by the parent.

```jsx
{['입찰', '정가'].map(v => (
  <Radio key={v} name="deal" value={v} checked={deal === v} onChange={setDeal}>{v}거래</Radio>
))}
```

- 20×20 circle. Unchecked white/#C1C1C1 · Checked same ring + 10px #059B00 dot · Focus 2px #0047ED ring · Disabled white/#D9D9D9 ring.
- Selected differs by shape (dot), not color alone.
