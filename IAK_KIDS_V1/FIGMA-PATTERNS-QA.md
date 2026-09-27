# Figma patterns and accessibility — 2026-09-27

IAK KIDS_V1 / Little Everyday v2.3.2. The existing Leaf / Sky / Purple / Sand palette is unchanged.

## Figma library

File: https://www.figma.com/design/O7wy74Ds5S9rV8WopyCe5d

| Pattern | Page | Component set | States |
|---|---|---|---|
| ChildSwitcher | 20 | 47:8 | ready, selected-second, empty, loading, error, long-text |
| DailyTimeline | 21 | 49:115 | ready, empty, loading, error, long-text |
| FocusSession | 22 | 49:205 | idle, running, paused, timeup, done |
| GoalComposer | 23 | 50:6 | collapsed, expanded, validation |
| MissionFeedback | 24 | 50:105 | ready, complete, undone, empty, loading, error, long-text |

26 public pattern variants; one private native multiline field (__GoalComposer/Textarea, 51:189). Existing Button, TextField, Select and Toggle instances are reused. The private memo field is native because nested TextField control height could not be overridden. External SDS Textarea uses a different token model and was not imported.

3 existing collections: Primitives 70 (includes historical values), Color 62, Dimensions 19. Six dimension variables were added; the checkbox radius now references an actual CSS variable. Active palette code syntax was restored for all 32 values. No palette values changed.

New text styles: IAK KIDS/Pattern/Timer (48/56), BodyStrong (16/26), Meta (14/20), Time (14/24), Selection (12/16), Steps (15/26), Points (20/28). Figma uses Pretendard; web uses the approved NanumBarunGothic. This is an intentional platform distinction.

All five pages passed screenshot review in the real Figma browser editor. Final structural checks: zero unbound solid fills/strokes, zero zero-size text, zero horizontal child overflow. Public action instances are 48px tall. Exact node IDs and changes are in figma-pattern-ledger.json.

These variants are editable visual state specifications, not a wired interactive Figma prototype. Text/boolean properties and nested component properties are available. Source documentation links point to the matching React wrappers. Code Connect publication was not performed; the recorded workspace plan is Pro and these new components have not been published as a team library.

## Browser accessibility checks

Chrome on macOS, actual local templates and existing generated bundle, fresh origin 127.0.0.1:4290 for the final patch:

- ChildSwitcher ArrowRight selects and focuses the next radio; Home returns to the first. Only the selected radio has tabindex=0. Visible focus outline is purple, 3px.
- Goal modal opens from Enter, contains Shift+Tab/Tab focus wrapping, focuses its first invalid field on submit, associates errors through aria-describedby, and Escape restores focus to the opening button.
- FocusSession Enter starts, pauses and resumes with focus on the next action. The timer has aria-live=off; phase changes have a polite status.
- Found and fixed a template integration defect: completing the current mission replaced the focused control and left focus on BODY. The template now waits for the new idle session and focuses Start, or focuses the final completion heading after all missions are done. Pending retries are cancelled on unmount and bounded to 10.
- Three consecutive timer completions verified progression to each next Start and final completion heading. Points reached 200P.
- Mission Space-key undo/recomplete preserved focus and changed 200P -> 100P -> 200P. The repeat-completion message explicitly says points count once.
- Compact pattern buttons increased from 36px to minimum 48px, matching Figma. Final KidActivity main-content button measurement found zero targets below 48px.
- Four embedded 375px mobile cases (all three default templates plus long-text activity) passed without document overflow or pattern buttons below 48px. Scrollbar gutters reduce content width to 360px in two frames. See v232-mobile-regression.json.
- Ten primary text/background pairs pass normal-text contrast >=4.5:1 (minimum 4.60:1). See v232-contrast.json.
- Existing source regression checks pass 21 states, assignment, validation, duplicate completion, undo/recompletion, and unchanged palette hash.

Reduced-motion CSS is present and was inspected statically. This is not a comprehensive accessibility certification: VoiceOver/NVDA, physical touch devices, full Safari keyboard testing and runtime reduced-motion emulation remain unverified. The older Safari long-option Select warning remains recorded in templates/VERIFICATION.md.

## Package scope

v2.3.2 changes CSS dimensions/touch targets, stylesheet cache keys, the KidActivity template's focus recovery and documentation. The previously verified generated component bundle is unchanged because no component JavaScript changed. Claude Design source synchronization is tracked separately in SYNC.md.

