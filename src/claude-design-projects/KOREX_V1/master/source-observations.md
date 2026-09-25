# KOREX_V1 · Source observations

Source: Behance — "KOREX Brand Website UXUI Design" (https://www.behance.net/gallery/133721087/KOREX-Brand-Website-UXUI-Design)
Image examined: https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/aa4da1133721087.61c41571abe87.png
Access note: the Behance page could not be re-fetched on 2026-09-25. This record uses the user-confirmed observations of the image above. No further fetching.

## Observed (seen in the source image)
| # | Observation | Where it lives in KOREX_V1 |
|---|---|---|
| 1 | Deep-green hero, search panel, sidebar | `--bg-brand`, `--bg-brand-strong`; site hero, search panel, console sidebar |
| 2 | White and light-grey page backgrounds | `--bg-surface`, `--bg-canvas`, `--bg-subtle` |
| 3 | Sans-serif Korean UI, bold headings | `--font-ui`, `--text-display/h1/h2` |
| 4 | Green rectangular search button | Button `variant="primary"`, `--action`, `--radius-xs` |
| 5 | Pill-shaped category chips | Button `variant="chip"`, `--radius-pill` |
| 6 | Mint rectangular category icon tiles | `.kx-icon-tile`, `--bg-mint` |
| 7 | Property card: image left, description right | Card composition "listing", SearchList |
| 8 | Outline CTA | Button `variant="outline"` |
| 9 | Outline heart (save) | heart toggle, `aria-pressed` |

## Derived-design-value (exact value not verifiable)
- All hex values (green 950–400, mint, greys). Chosen to match observed roles and pass WCAG AA for text.
- Font family: Noto Sans KR 100–900 is a substitute; the original typeface was not identified.
- Type sizes, spacing, layout (1280 max, 40/24/16 padding, 12/8/4 columns), radius 2/4/6. Pill is observed, so the system is **not** limited to 2/4/6.
- Shadows (kept flat).

## Derived-extension (not present in source; designed in KOREX style)
- Semantic red / amber / blue and status backgrounds.
- Focus ring (2px outline + 2px offset), motion 140/200/280 ms, reduced 1 ms.
- Line icon set (`master/lib/kx-icons.js`, self-drawn).
- Components beyond the observed ones and their states: TextField, Textarea, Select, Checkbox, Switch, Badge, Skeleton, Dialog, Menu, Table, Pagination, Toast, AlertDialog.
- Patterns: Dashboard, Analytics, Table, Detail, Settings, Billing, AI Chat, Builder, Modal, Empty. These are partner-console screens and are not claimed to exist in the source.
- ProductHome / SearchList / ProductDetail are built from the observations above. Layout details and all content are our own.

## Not reused
Original logo, photographs, copy, and real listing data. Identity is the plain text wordmark "KOREX". All sample content is fictional.
