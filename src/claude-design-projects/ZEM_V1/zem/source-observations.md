# ZEM_V1 · Source observations

Source: Behance gallery 91978629 (SKT ZEM Kids Service App UI Design), board image `3b6c8a91978629.5e3ff70fe0fca.png`, 1400×6794 webp.
Fetched directly on 2026-09-25 and sampled with canvas. The image was used only for sampling and is not kept or reproduced in the project. Photos, characters (dolphin, rabbit), the ZEM wordmark, original copy, map and gift imagery are **not** copied.

## Observed colour roles (hex = estimated pixel samples)
What is observed here is the colour's ROLE (what it is used for). Each hex is an estimate: the most frequent quantised pixels of a compressed webp, about ±4 per channel. None of these are source spec values.
- Primary periwinkle (hero bg, phone header, CTA circles, timetable block): **#708CF8** (dominant, ~215k px), about #7088F0–#738FF8
- Pale lavender panels: **#C0C4F0**, **#B4BCF0**, #BCC4EC
- Page/card surface: **#FFFFFF**
- Stronger blue button: #4368E2 (point sample)
- Blue accent: **#70A4FC**
- Cyan accent (icon tiles): **#38C8E0**, #7AC5E3 light
- Mint/green (check circles, timetable): **#68D8A8**
- Lime/pale yellow (point icons, soft fills): **#F8F8B8**, #DFF696 light, #A8DC3C in small amounts
- Orange accent (small): #FCB45C
- Violet accent (small): #BC90FC
- Pink/magenta (timetable, small): #F480E4
- Coral/red (tags, timetable): #FC7878, #E46880
- Title ink: #000000 (board typography); secondary text is pale grey-lavender (#D9DBEC on the board)

## Observed (visual, not measured)
- Light UI. White rounded cards with soft, diffuse shadows sit on periwinkle or white.
- Periwinkle app header with a rounded **bottom** edge; brand text is centred and there is an avatar chip.
- List rows have small rounded-square icon tiles (cyan, violet, periwinkle) and a mint/lime check circle on the right.
- Progress bar in periwinkle on a pale track; pill CTA buttons ("수락하기").
- Bottom tab bar with 4 outline icons.
- Kids' mobile flows: mission/reward, schedule and timetable, location/safety, chat, gift.
- The board labels the type as "Nanum Barun Gothic Bold / Regular".

## Derived (not verified; ZEM_V1 decisions)
- Exact font files, hex values and sizes are unconfirmed. Nanum Barun Gothic Regular/Bold files were uploaded and are self-hosted; the board label matches, but the weights and sizes used on the board are still unconfirmed.
- Tints, shades, text contrast colours, state colours, spacing, radius scale, shadows and motion are derived from the measured values above.
- The 10 patterns (Dashboard…Empty) are **ZEM-style derived extensions**. They do not claim to exist in the source.

## Not carried over from the IAK/RAIS copy
Dark theme, IAK orange action colour, Pretendard, the gem brand mark, the chrome motif and RAIS naming are all excluded from active ZEM cards.

## Status
The build is complete. See `zem/coverage.json` (62 items) and `zem/qa.html` (live checks).

## Contrast adjustments (derived)
- Progress fill uses #4368E2 instead of the observed #708CF8, which was 2.56:1 on the pale track.
- Text on the soft periwinkle hover/highlight uses #3150B8, which reaches 5.87:1.
