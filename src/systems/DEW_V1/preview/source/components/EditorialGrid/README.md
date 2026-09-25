# EditorialGrid

A set of StoryCards in one of two editorial rhythms, with an optional section head.

**Consumer provides:** `variant` (`feature` | `three`), `items[]` (StoryCard props), and optionally `eyebrow`, `title` (set in `heading`), `cta`, `id` (anchor target for CategoryNav links).

- **Feature** — one large story on 7 columns (portrait image, title in `heading`) beside two supporting stories stacked on 5. Use for the top of a list or a themed issue.
- **ThreeColumn** — three equal columns. Desktop 3 → tablet 2 → mobile 1.
- Gutter 24 desktop / 20 tablet; stacked stories on mobile are 32 apart.
- Section head: eyebrow (`textPrimary` text, `accent` rule before it) + heading on the left, CTA on the right; stacks on mobile.

**Don't** fill rows with more than three columns, add card borders, or turn it into a symmetric SaaS tile wall.
