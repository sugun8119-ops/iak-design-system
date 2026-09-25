# StoryCard

An image-first, borderless story teaser: media, meta and title stacked with a 16px gap, the whole card one link.

**Consumer provides:** `href`, `media` (`tone`: default / mint / light, or `src` + `alt`), `meta` (topic · format, in `meta` style), `title` (in `title`, 22/30). Optional `ctaLabel` (default "이야기 읽기"; `null` hides it) and `as` for the heading level.

States: **Hover** underlines the title and turns the CTA underline 2px `accent`; **Focus** draws the 2px `textPrimary` outline with 4px offset around the card link. `state` forces them for previews only.

**Don't** add a border, background panel, shadow or rounded corners beyond `radius-md` on the image. Don't nest other links inside.

**Missing image (derived-extension):** pass `media: { missing: true }` — or a `src` that fails — to show the dashed missing-image frame with "이미지 없음"; title and link stay intact. Loading: use `Skeleton variant="story"`.
