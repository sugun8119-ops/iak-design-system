Multi-select control (`KOSAF/Checkbox`, Figma 218:608) — use for agreements, row selection, and filter options.

```jsx
<Checkbox defaultChecked>전체 동의</Checkbox>
<Checkbox state="disabled">선택 불가</Checkbox>
```

- 20×20, radius 3. Unchecked white/#C1C1C1 · Checked #059B00 fill, #C1C1C1 stroke, white "✓" text glyph (Bold 14, as in source 218:605) · Focus white, 2px #0047ED · Disabled #EAEAEA/#C1C1C1.
- Visual box is 20px (source-preserved); include the label in the hit area or pad to 44px on mobile.
