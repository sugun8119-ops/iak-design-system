# KPOP_V1 · Component Guide

기존 핵심 12종 + 케이스 보완 Toast 1종.

- MobileShell: App header; scroll content; bottom navigation. width=320..480; state=ready|empty|error. Reading view scales to 680 on wide screens; gallery may show 390px frame.
- AppHeader: Generic wordmark; section label. variant=brand|back. Back returns to feed; header does not obscure keyboard focus.
- CategoryTabs: Category buttons and selected underline. selected=all|music|culture|stage. Buttons expose aria-pressed; filtering is immediate and preserves focus.
- FeatureStory: Original media; category; title; metadata. variant=hero|detail; state=ready|media-missing. Dark overlay behind white text; alt text if informative; link has explicit title.
- StoryCard: Media thumbnail; category; title; reading time. variant=list|grid; state=ready|saved|media-missing. Single descriptive link; avoid nested actions inside links.
- AuthorMeta: Initial avatar; generic author; date. variant=compact|full. Do not use real artist identity in demonstration content.
- RankingRow: Rank; title; generic collection; trend text. trend=up|down|new. Rank and trend use text, not color alone.
- ScheduleRow: Date; event title; time. state=upcoming|ended. State uses label; event data is fictional in preview.
- ReactionBar: Save button; local count or confirmation. saved=true|false. Save exposes aria-pressed and live status; no implied server persistence.
- BottomNav: Discover; category feed; story links. active=discover|feed|story. Use nav and aria-current=page; always show text labels.
- Button: Label; optional leading icon. variant=primary|secondary|quiet; state=default|hover|pressed|focus|disabled. Enter/Space activates; disabled prevents input; visible 2px focus ring.
- Field: Visible label; input; help/error. state=default|focus|error|disabled. Label linked to input; error text with aria-describedby; never placeholder-only.
- Toast: Severity label; message; dismiss button. severity=info|success|warning|error|neutral. role=status for info/success/neutral, role=alert for warning/error; explicit dismiss; no automatic timeout; no focus stealing; local demo only.

컴포넌트는 프로젝트 토큰에 바인딩한다. Figma 네이티브 라이브러리는 편집용이며 HTML 런타임과 자동 동기화되지 않는다.
