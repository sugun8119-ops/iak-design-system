Icon-only control (close, menu, quantity, wishlist toggle, view switch) — always carries a Korean `label`; never render a bare clickable Icon.

```jsx
<IconButton icon="close" label="메뉴 닫기" device="mobile" onClick={close} />
<IconButton icon="heart-outline" label="관심상품" toggle selected={liked} onClick={toggle} />
<IconButton icon="grid" label="카드 보기" toggle selected={view === 'card'} />
```

- Hit area: desktop 36, mobile 44 minimum; `iconSize` 16/20/24.
- States: hover #F7F7F7 · active press #EAEAEA · **selected** #EBFFE9 background + 1px inset #059B00 + brand icon (duotone, or `selectedVariant="solid"`) · focus-visible 2px #0047ED outline · disabled neutral + #A0A0A0, click blocked, overrides forced `state`.
- Source icons keep their colours; the button background carries the state.
- `toggle` adds `aria-pressed`. Source icons keep their Figma colours (disabled fades to 40%).
- KOSAF extension: not a Figma master; existing masters (Search, Button) are not changed.
