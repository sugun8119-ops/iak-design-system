# DEW_V1 · Source observations

Reference: Behance "DEW Webzine — Editorial Web Experience Design" (gallery 110574641), module image
https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/114287110574641.5ff1768d53080.png

## How this was checked
- The Behance page and the image URL could not be fetched as text in this environment.
- The image loaded in a browser frame (1400×8582 px), but its pixels could not be inspected here (no CORS).
- The observations below therefore come from the user's direct inspection (2026-09-25). None are measurements taken by Claude.

## Observed (from the user)
- TYPOGRAPHY label: "Notosans CJK kr / Roboto & Big Calson". The real typeface name is Big Caslon.
- COLORS: 5 swatches — black, mid grey, light grey, white, red.
- Cream and mint appear only as photo backgrounds. They are NOT part of the main palette, so the earlier cream/mint tokens were removed.
- Layout: large serif masthead, sans-serif UI, asymmetric photo editing, thin rules.

## Derived (not in the source)
- Every hex value (#111111 / #8C8C8C / #DADADA / #FFFFFF / #E1261C) and every ramp, semantic color, size, spacing, radius (0), shadow, motion, grid and control height is a derived design value.
- Fonts — specified vs actually rendered:
  - Big Caslon (observed in source only) → Libre Caslon Display / Text (confirmed actual-use family, user-approved 2026-09-25; Google Fonts).
    - Difference: Big Caslon is a high-contrast display cut with heavier thick strokes and wider capitals. Libre Caslon Display is lighter and narrower, so mastheads set in it look thinner and slightly more condensed. Libre Caslon Text is a text cut and has lower contrast still.
    - Big Caslon is no longer in any token. It is recorded here only as the source observation. Swapping it back in would need a licensed file plus a token edit.
  - Roboto (specified) → Roboto (actually rendered; Google Fonts).
  - Noto Sans CJK KR (specified) → Noto Sans KR (actually rendered; Google Fonts).
- Photos: no source images are in the project. Photos are grey placeholders labelled "PHOTO ratio".
- Brand: the DEW wordmark is plain text in the display face. No customer logo was redrawn.
