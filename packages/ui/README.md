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

## Composite components (0.6)

Dialog and Menu use Radix Primitives for behavior and IAK tokens for appearance. Radix packages are installed as runtime dependencies; React and React DOM remain peer dependencies. Use a native button or a ref-forwarding IAK Button as trigger. Dialog supports controlled open/onOpenChange, size sm/md/lg, initialFocusRef, and closeOnOutside (default false). Escape and the close button always remain available.

Table uses caption, column headers and aria-sort, client-side immutable sorting, loading/error/empty states, and a keyboard-focusable horizontal scroll region. Supply unique column ids and row keys. Controlled sort requires updating sort in onSortChange. Pagination and fixed-height virtualization are available in 0.7. Remote sorting is not implemented. See the shipped component catalog and developer playground for complete props/examples.

### Table navigation (0.7)
Use `pagination={{pageSize:25}}` for complete content and optional controlled `page` (1-based) / `onPageChange`. Use `virtualization={{height:400,rowHeight:56,overscan:4}}` only for fixed-height cells. Pagination wins when both are supplied. Provide a paginated alternative for full text and assistive technology navigation. Virtualization clips long content, retains focused rows, and exposes logical row indices. All data must already exist in the `rows` array; this is not a remote-data adapter.

### Toast notifications (0.8)
Wrap the application in ToastProvider and call useToast inside it. notify returns an ID (or undefined for an empty title or full queue); dismiss(id) and dismissAll remove active/queued notifications. Same IDs are deduplicated until dismissal. The queue holds at most 50 entries and renders 3 at once. Default duration is 5000ms; 0 means manual dismissal. Positive durations have a 1000ms minimum. Pending messages only start their timer when displayed.

Polite announcements are the default. Use assertive priority sparingly. Hover, focus and window blur pause dismissal. Users can press F8 to navigate notifications. Actions require altText and must also be available through a durable UI; do not require users to act before a toast expires. Screen-reader combinations still require validation.


## v0.9 — AlertDialog
IAK 모달·버튼 토큰을 재사용하는 Radix Alert Dialog 기반 확인 UI. 취소 기본 포커스, 비동기 완료 후 닫기, 실패 재시도, 중복 실행 차단을 제공합니다. 처리 중 요청 타임아웃은 앱에서 설정하세요.
