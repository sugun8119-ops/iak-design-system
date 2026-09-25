Single-line text field (`KOSAF/Input`, Figma 218:600) — use for all form entry; Dropdown/Calendar are planned (not built) and should follow the same 45px height and border.

```jsx
<Input placeholder="아이디를 입력하세요" />
<Input errorMessage="필수 입력 항목입니다." />
<Input disabled placeholder="Disabled" />
```

- Master 287×45, radius 5, text inset 14, Regular 14, placeholder #707070.
- Default 1px #DDDDDD · Focus 2px #0047ED · Error 1px #E23736 · Disabled #F7F7F7 fill, #DDDDDD stroke, #A0A0A0 text.
- The error message line (#E23736, 12/16) is a web accessibility addition required by the KOSAF state rules; the Figma variant shows only the stroke.
- No label/helper component exists in source; place a Body S (14/20) label above if needed.
