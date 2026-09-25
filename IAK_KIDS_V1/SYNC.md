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

Real-device, Safari and screen-reader testing remain outstanding. Figma native coverage is intentionally distinct from the expanded web pattern collection. Reusable Claude starting-point templates are not registered yet.

## Compatibility

The `zem/` paths and `window.ZEM` namespace remain for import compatibility only. The active product name is IAK KIDS_V1 · Little Everyday. Historical ZEM_V1 content is not the active implementation.
