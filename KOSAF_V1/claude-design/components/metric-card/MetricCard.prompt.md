SmallDataCard: 167×227 r10, 70px #02AC5A icon circle, label, unit, value. — use it for data display on KOSAF PC (1920) and mobile (390–391) screens.

```jsx
<MetricCard label="여신금액" value="10,000" icon={<Icon name="wallet" size={32} tone="inverse"/>
```

- Provenance: **Source-derived (1:85779)** · node 1:87886. Structure, sizes and colours follow the exported source; behaviour beyond what the screen shows is a KOSAF extension.
- States: Static · Clickable.
- Props: `label`, `unit`, `value`, `icon`, `width`, `onClick`.
- SmallDataCard: 167×227 r10, 70px #02AC5A icon circle, label, unit, value.

- 1.5.0: white circle icons use extension icons with `tone="inverse"`; CSS `filter` recolouring of source SVGs is no longer used (source white-circle glyphs were not all exported).
