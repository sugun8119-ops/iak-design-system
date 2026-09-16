# IAK React UI (preview)

Independent IAK components using the user's RAIS design tokens. This is not Wanted Montage and does not implement its API.

```tsx
import '@iak-design/ui/tokens.css';
import '@iak-design/ui/styles.css';
import { Button, TextField } from '@iak-design/ui';

export default function App() {
  return <><TextField label="Project name" /><Button>Create project</Button></>;
}
```

React 18/19 peer dependency. ESM and TypeScript declarations are included. Tokens, nine local Pretendard fonts, and 97 referenced Eva/Solar SVGs are bundled. The root module uses the `use client` directive for hooks in App Router environments; a dedicated Next.js integration has not been verified.

Components: Button, TextField, Textarea, Select, Checkbox, Switch, Badge, Card, Skeleton, Icon.

This is a preview release distributed as an npm-compatible tarball through GitHub Pages, **not a published npm registry package**. Complex components (Dialog/Menu/DatePicker/Table/Toast manager), light theme, framework adapters and full assistive-technology certification remain out of scope for this release.

IAK asset ownership is unchanged. Pretendard and icon-license files are distributed in `dist/`. See icon-licenses.json for upstream authors, licenses and links. Never claim these are original IAK icon artwork.
