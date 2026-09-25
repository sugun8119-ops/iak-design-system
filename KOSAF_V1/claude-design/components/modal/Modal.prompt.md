Dialog shell (`KOSAF/Modal`, Figma 218:639) — use for detail views, confirmations and multi-step popups over a page.

```jsx
<Modal open={open} onClose={() => setOpen(false)} title="상세 정보"
  footer={<><Button variant="secondary" width={164} onClick={close}>취소</Button><Button width={164}>확인</Button></>}>
  본문 내용
</Modal>
```

- Master 706×630, white, 1px #DDDDDD, radius 10. Title Bold 22 at (30, 28); 1px #DDDDDD divider at y=82 spanning 646px (30px side insets).
- Master body is empty: body padding (20px), the `footer` action row, and the `rgba(0,0,0,.5)` backdrop are web implementation details, not Figma values.
- `height="auto"` for short confirmations; shrinks to `max-width:100%` on 390px.
- No close-icon asset ships; close with a footer button, Escape or backdrop click.
