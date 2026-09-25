Pill-shaped product search field (`KOSAF/Search`, Figma 218:601) — use for the main product/keyword search on list and home screens.

```jsx
<Search onSubmit={(q) => find(q)} />
<Search width="100%" trailing={<Button size={34}>검색</Button>} />
```

- Always 50px tall, radius 25, 2px #059B00 outline; focus switches the outline to #0047ED.
- Default width 579px (desktop); on 390px mobile pass `width="100%"`.
- No magnifier icon is included — the source export ships no icon assets. Pass one via `trailing` if you have the real asset.
