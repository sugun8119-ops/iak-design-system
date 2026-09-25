# Skeleton

Loading placeholders in the `border` tone, with the same geometry as the component they stand in for, so the page doesn't jump when content arrives. A slow pulse; none under `prefers-reduced-motion`.

**Consumer provides:** `variant` (`text` | `heading` | `media` | `story` | `feature` | `row` | `block`), `lines`, `ratio`, `cells`, `width`/`height` (block), `label` (announced via `role="status"`), `decorative` (hide from assistive tech when a parent already announces loading).

**Relationship:** `story` mirrors StoryCard, `feature` mirrors FeatureStory's 5 : 7 split, `row` fills Table loading. Status: **derived-extension**.
