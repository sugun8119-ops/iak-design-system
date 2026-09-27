# 2026-09-27 v2.3.2 — current status

Figma now includes five composition families and 26 state variants, plus a private multiline field. All five pages passed real-editor visual review and final width/binding audits. Targeted keyboard QA found and fixed lost focus after completing the current activity. Compact pattern buttons now have a 48px minimum height. Ten normal-text contrast pairs pass >=4.5:1. Full evidence and limits: FIGMA-PATTERNS-QA.md.

The v2.3.1 source cleanup and actual regenerated bundle were downloaded and verified in the previous step: SHA-256 55ed8ad1ec8cce75c783aa41cba40a5888106aae122cbd3833d00d781dc10929. It contains no legacy loader self-injection. Timeline badge screenshots and 45 fresh generated-bundle cases passed then. The v2.3.2 changes do not modify component JavaScript or that bundle.

Claude Design v2.3.2 synchronization is verified from the newly downloaded v2.3.2-sync-proof.zip: all six runtime files are byte-identical to commit 1f5708d. The QA document differs only in its final newline from that commit; the existing Claude QA harness uses equivalent readiness checks (state, loaded Nanum font, no placeholder) and was left untouched. See tests/browser-2026-09-27/v232-claude-source-verification.json. Historical entries below describe earlier checkpoints and do not override this current status.

---

# 2026-09-27 runtime recovery and browser QA

The exported bundle contained three legacy `iak-kids-v2.2-templates/templates/*/ds-base.js` entrypoints. Each injected `_ds_bundle.js` again, causing recursive loading and unresponsive tabs. Removed those entrypoints from the local handoff. Also made explicit `?state=` overrides win over template default props; the QA harness now checks the actual rendered state and waits for the font styles.

Chrome browser verification: 63 template state/viewport cases (375, 834, 1440) without horizontal overflow or targets below the harness's 36px height threshold. This is not a 44px target audit. Real click checks passed child switching (including arrow keys), request approval, goal validation/save, schedule validation/save, timer start/pause/resume/completion and mission undo/recompletion.

Visual review found a wrapping status badge at 375px. Added `flex-shrink:0;white-space:nowrap` to timeline badges. Post-fix screenshot confirmation remains pending because browser control detached. Figma is still the previous native library. Claude project sources must exclude the legacy entrypoint copies on regeneration; this local bundle patch alone does not change Claude's generator inputs.

Earlier blocked status below is historical and superseded by the checks above. Screen-reader, real-device, Safari and complete keyboard-flow testing remain unperformed.

---

# IAK KIDS_V1 · v2.3 review handoff

Downloaded from the existing Claude Design project on 2026-09-26. This is a review candidate, not a visually verified release.

- Added ChildSwitcher, DailyTimeline, FocusSession, GoalComposer and MissionFeedback.
- Updated parent dashboard, weekly schedule and child activity templates.
- Manifest: 69 cards, 22 exported components, 3 templates; startingPoints remains empty.
- Palette is byte-identical to v2.2; existing fonts and compatibility namespaces are retained.
- Browser visual and interaction verification is blocked by repeated browser-control timeouts, including a single template. The cause is undetermined; this does not establish a source-code defect.
- Figma remains at its previous native library version. No v2.3 patterns were written to Figma.
- Safari long-option Select warning remains unresolved by evidence. Do not interpret the prior flex change as a verified fix.
- See `IAK-KIDS-v2.3-verification.json` and `zem/docs/qa-v2.3.md` for the verification boundary. Earlier results below apply to v2.2 only.

---

# IAK KIDS_V1 · v2.2 synchronization

Synced on 2026-09-26 from the latest Claude Design handoff.

- Claude: https://claude.ai/design/p/46c1af8b-ed1c-400c-847f-d2e7639aa42e
- Figma: https://www.figma.com/design/O7wy74Ds5S9rV8WopyCe5d
- Entry point: `zem/index.html`; live checks: `zem/qa.html`.
- 62 documentation/preview cards and 62 semantic color roles.
- Figma common library: 16 component families, 69 variants. Checkbox radius 6px; selected navigation bottom indicator 3px; badge accent and neutral added.
- Figma uses Pretendard; web uses Nanum Barun Gothic 400/700. Body 16/26 and caption 13/20 are shared. Figma cover Display 48/60 is documentation typography, not the web product display token.
- The web library adds 10 responsive patterns and 3 UI kits. These are not all native Figma components or one-to-one copies of the Figma mobile examples.

## Verification

Fresh Chrome run of the extracted package: 140/140 component cases rendered, 120/120 pattern/state/viewport cases without horizontal overflow, 66/66 contrast pairs passed, no failing QA cells (including 3 UI kits at 1440/834/375 widths). All 62 manifest card paths and static HTML references resolve.

Disabled text is 4.43:1 against its disabled background; the internal target is 3:1 and does not represent the 4.5:1 ordinary-text requirement. Documentation was corrected in both Claude and this package without changing the palette.

Font files match SHA-256 of NAVER's official download. `fonts/OFL.txt` contains the current official license notice retrieved from NAVER; the official ZIP itself has no license file.

Real-device, Safari and screen-reader testing remain outstanding. Figma native coverage is intentionally distinct from the expanded web pattern collection. Three Claude @template entries are registered in the Templates group. The separate startingPoints field remains empty by platform behavior. See templates/README.md.

## Compatibility

The `zem/` paths and `window.ZEM` namespace remain for import compatibility only. The active product name is IAK KIDS_V1 · Little Everyday. Historical ZEM_V1 content is not the active implementation.

## 2026-09-26 template handoff verification

Downloaded templates were opened locally in Chrome. Parent request approval updates 3→2; child mission completion updates 1→2; weekly schedule creation updates 6→7. Template navigation links are placeholders to connect in each consuming project.

Safari QA: 140/140 rendered, 120/120 pattern cases without document overflow, 66/66 contrast pairs. The long-option Select component preview still reports a width warning; do not treat Safari QA as entirely clean. Physical-device and screen-reader checks remain unperformed.
