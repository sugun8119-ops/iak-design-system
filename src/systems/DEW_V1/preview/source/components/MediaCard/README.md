# MediaCard

A figure: one image at 4:3 (**Landscape**) or 3:4 (**Portrait**) with an ImageCaption beneath.

**Consumer provides:** `orientation`, and either `src` + `alt` (a photo you hold the rights to) or the self-made placeholder (`tone`, `label` as its accessible name); `caption` and `credit`.

- Images take `radius-md` (2px) — never more.
- Crop fashion / culture / lifestyle photography wide and let it run large; whitespace, not frames, separates images.
- Mobile (<768): Portrait falls back to 4:3 so a single image doesn't fill the screen.

**Don't** ship the placeholder shapes as final art, or reuse original DEW photography.

**Missing image (derived-extension):** `missing` (or a failing `src`) shows the dashed frame and keeps the caption, so the reader still gets the image description.
