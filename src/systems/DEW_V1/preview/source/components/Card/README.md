# Card

A general content container for non-story content — notes, guides, issues, settings groups. **StoryCard remains the editorial story teaser**; use Card only when the content is not a story link.

**Consumer provides:** `title`, optional `eyebrow`, `description`, `media` (same props as StoryCard media, incl. `missing`), `badges`, `footer` (Buttons / EditorialCTA), `children`, `href` (whole card becomes one link via the title), `variant` (`plain` top rule · `outlined` surface + `border` hairline · `support` mint plane), `orientation` (`horizontal` = media 5 : text 7, stacks on mobile), `selected`, `disabled`.

- Corners stay 0 (`radius-sm`); no shadows; padding 24 (`space-24`).
- Hover underlines the title; focus draws the 2px `textPrimary` outline around the card; selected adds a 2px inset `textPrimary` rule plus a "선택됨" Badge.
- Long titles wrap — never truncated. Missing image shows the dashed missing-image frame, not an empty box.

**Don't** build a symmetric SaaS tile wall, round the corners, or nest a StoryCard inside a Card. Status: **derived-extension**.
