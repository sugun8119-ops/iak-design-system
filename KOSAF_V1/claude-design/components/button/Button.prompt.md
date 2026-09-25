Primary action button of KOSAF (`KOSAF/Button`, Figma 218:590) — use for any clickable command; Primary for the main action, Secondary for alternates, Danger for destructive actions.

```jsx
<Button variant="primary" width={164}>구매하기</Button>
<Button variant="secondary">가격협상</Button>
<Button variant="danger" size={34}>삭제</Button>
<Button size={70} fullWidth>구매하기</Button>
```

- Figma master (218:572…): 164×45, radius 5, 1px stroke, label Noto Sans KR Medium 16.
- `variant`: primary #059B00 (hover fill #02AC5A, stroke stays #059B00) · secondary white/#DDDDDD (hover #F7F7F7) · danger #E23736 (hover fill #FF5858, stroke stays #E23736).
- Disabled (all styles): fill #EAEAEA (measured), stroke #DDDDDD, text #A0A0A0 — not opacity. Differs from semantic `surface/disabled` #D9D9D9: recorded source exception.
- Focus: 2px #0047ED stroke, Primary/Secondary only (223:570, 223:572); shown for keyboard `:focus-visible`.
- `size`: 45 is the master; 34/42/50/70 follow the documented height rule. Width is content-driven (pass `width={164}` to match the master).
- White-on-Primary contrast is 3.69:1 (Hover 2.98:1) — source values, not an accessibility-conformance judgement.
