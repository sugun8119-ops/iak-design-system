Single page cell (`KOSAF/PaginationItem`, Figma 218:631) — compose several below tables and review lists with `gap: 12` (master spacing).

```jsx
<nav style={{ display: 'flex', gap: 12 }}>
  {[1, 2, 3].map(n => <PaginationItem key={n} selected={n === page} onClick={() => setPage(n)}>{n}</PaginationItem>)}
</nav>
```

- 42×42, radius 5, Medium 14, 1px #DDDDDD stroke in every state.
- Default white · Hover #F7F7F7 · Selected #059B00 fill + white text · Disabled white + #A0A0A0 text.
- The legacy 23px pagination in Common_진행중 is preserved in Figma only. No first/prev/next arrow icons ship with the system.
