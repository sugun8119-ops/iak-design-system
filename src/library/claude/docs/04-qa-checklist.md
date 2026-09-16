# RAIS · Screen QA Checklist

Run this before every screen handoff. A screen is not done until every item in **Layout, Typography, Component, State, Accessibility, Responsive** clears.

---

## Layout
- [ ] Page padding = 32, section gap = 32, card gap = 16
- [ ] No off-grid spacing (every gap maps to a `spacing/*` token)
- [ ] Sidebar 280 px (default), topbar 64 px
- [ ] Single primary CTA per surface; secondary actions are outlined or text
- [ ] Card radius matches role (`xl 16` mid · `2xl 24` primary)

## Typography
- [ ] Pretendard only — no Roboto / Barlow / Public Sans
- [ ] Page title uses `type/page/title`; section titles use `type/section/title`
- [ ] Numeric columns use `font-feature-settings: "tnum"`
- [ ] No font sizes below 12 px in product UI
- [ ] No bolding for emphasis in body — use a chip / label

## Component
- [ ] Buttons render correct padding for size (`Md` 8 × 14)
- [ ] Inputs use `surface/field` bg, `md` radius
- [ ] Toast icon plate is **rounded-square** (8 px radius), not circle
- [ ] Badge uses `pill` radius and `status/{role}` @ 14 % bg
- [ ] Icons all from a single family (Eva / Solar solid)
- [ ] No icon family mixing within a screen

## State
- [ ] Hover state defined for every clickable element
- [ ] Focus = border + inset ring (no outer halo)
- [ ] Loading + skeleton state defined where data is async
- [ ] Empty state defined with illustration + primary CTA
- [ ] Error state pairs colour + text + icon (never colour alone)

## Accessibility
- [ ] All text passes WCAG AA contrast on its surface
- [ ] Status communicated by colour + icon + text
- [ ] Keyboard focus visible without mouse hover
- [ ] Hit targets ≥ 44 × 44 on touch
- [ ] All images have `alt`; decorative motifs have `aria-hidden="true"`

## Brand
- [ ] Gem logo only in sidebar / topbar / identity (never as hero)
- [ ] Chrome motif only in hero / analytics header / promo (never as logo)
- [ ] Logo and motif never appear in the same composition
- [ ] No glow / halo / blue-bg on the gem mark

## Responsive
- [ ] Sidebar collapses correctly at 1280 / 960 / 640
- [ ] Metric row-4 reflows to row-2 then row-1
- [ ] Tables become horizontal-scroll inside their card on mobile
- [ ] Modal becomes full-screen sheet at < 640

---

## Sign-off

```
Designer: ____________________      Date: ______________
Engineer: ____________________      Branch / PR: ______________
A11y reviewer: ____________________  Result: pass / fail
```
