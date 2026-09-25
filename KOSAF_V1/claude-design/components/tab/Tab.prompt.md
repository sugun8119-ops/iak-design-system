Boxed segment tab (`KOSAF/Tab`, Figma 218:620) — use to switch between sibling views such as 입찰거래 / 정가거래. Wrap in a `role="tablist"` flex row with `gap: 16` (master spacing).

```jsx
<div role="tablist" style={{ display: 'flex', gap: 16 }}>
  <Tab selected={t === 0} onClick={() => setT(0)}>입찰거래</Tab>
  <Tab selected={t === 1} onClick={() => setT(1)}>정가거래</Tab>
</div>
```

- 124×44, radius 5, Medium 16. Default white/#DDDDDD/#333 · Selected #059B00 fill+stroke, white text (fill + text change, not hue alone).
- Only Default and Selected exist in source — no hover/disabled.
