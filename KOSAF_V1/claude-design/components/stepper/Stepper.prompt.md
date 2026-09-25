Transaction progress indicator (`KOSAF/Stepper`, Figma 218:642) — use at the top of cart → checkout → complete flows.

```jsx
<Stepper current={1} />
<Stepper steps={['정보입력', '확인', '완료']} current={0} itemWidth={110} />
```

- Three 205×50 blocks, radius 5, 15px gap; Medium 14 text inset 24.
- Inactive #F7F7F7 fill + #707070 text · Current #059B00 fill + white text. Completed steps look identical to upcoming ones in source.
- No connector lines or check icons in source.
