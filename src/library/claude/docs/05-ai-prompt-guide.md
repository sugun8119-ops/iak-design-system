# RAIS · AI / Claude Prompt Guide

Optimisation rules for re-generating any RAIS surface with Claude. The system was named, scoped and tokenised so that an AI can reproduce a consistent screen from a short brief.

---

## 1 · Naming convention (single source of truth)

`Component / Role / Type / State`

| Layer | Allowed values |
|---|---|
| Component | `Button` · `Card` · `Input` · `Badge` · `Toast` · `Sidebar` · `Topbar` · `Modal` · `Table` |
| Role | `Action` · `Status` · `Data` · `Field` · `Nav` · `Notify` · `Metric` · `AI` · `Analytics` · `Info` · `Alert` · `Empty` |
| Type | varies by component (see `docs/01-component-guide.md`) |
| State | `Default` · `Hover` · `Pressed` · `Focused` · `Selected` · `Loading` · `Skeleton` · `Empty` · `Success` · `Warning` · `Error` · `Disabled` |

Use this exact format in prompts, JSON variants, Figma layer names. Claude will pattern-match it.

## 2 · Prompt template

```
SYSTEM
You are a designer working in the RAIS Design System.
Token source: tokens/colors.json, tokens/typography.json, tokens/spacing.json
Component source: docs/01-component-guide.md
State source:    docs/02-state-system.md
Layout source:   docs/03-layout-patterns.md
Direction:       AI-native SaaS · dark-first · Pretendard only · orange single accent.

USER
Build {Layout/Template} for {Feature}.
Compose from: {list of Component / Role / Type tokens}
Surfaces:    {list of state-tokens that must be visible in the output}
Constraints: {any feature-specific rules}
```

## 3 · Component JSON example (Button)

```json
{
  "component": "Button",
  "role": "Action",
  "type": "Primary",
  "size": "Md",
  "state": "Default",
  "props": {
    "label": "New Campaign",
    "iconLeft": "solar:add-circle-bold",
    "iconRight": null,
    "loading": false,
    "disabled": false
  },
  "tokens": {
    "background": "color/action/primary/default",
    "color":      "color/text/on-accent",
    "padding":    "spacing/2 spacing/4",
    "radius":     "radius/md",
    "font":       "type/button/default",
    "shadow":     "shadow/sm",
    "hover":      "color/action/primary/hover",
    "focus":      "border/focus + focus/ring"
  }
}
```

## 4 · Screen JSON example (excerpt)

```json
{
  "template": "Dashboard",
  "page": { "title": "Mailing", "breadcrumb": ["Dashboard","Management","Mailing"] },
  "actions": [
    { "component":"Button","role":"Action","type":"Secondary","label":"Export","iconLeft":"solar:download-minimalistic-bold" },
    { "component":"Button","role":"Action","type":"Primary","label":"New Campaign","iconLeft":"solar:add-circle-bold" }
  ],
  "rows": [
    { "row":"row-4", "items":[
      { "component":"Card","role":"Metric","type":"Highlighted","label":"Sent campaigns","value":"148","delta":"+12%","icon":"solar:letter-bold","data":"blue" },
      { "component":"Card","role":"Metric","type":"Highlighted","label":"Active subscribers","value":"4,289","delta":"-0.4%","icon":"solar:users-group-rounded-bold","data":"info" }
    ]}
  ]
}
```

## 5 · Reusable prompt snippets

| Intent | Prompt |
|---|---|
| **Patch only** | "Apply the following non-destructive patch. Do not redesign the system. Touch only: {list}." |
| **Add component** | "Add `Component / Role / Type` honoring the existing state matrix. Output JSON per `docs/05-ai-prompt-guide.md` §3." |
| **Build screen** | "Compose `Layout / {template}` for `{feature}` using only existing components and tokens." |
| **A11y review** | "Run the accessibility section of `docs/04-qa-checklist.md` against this screen and list violations with token-level fixes." |

## 6 · Output format rules

- HTML output → reference `colors_and_type.css` only (no inline hexes).
- JSON output → use the token paths above, never literal values.
- Markdown output → use the table style of these docs (one-line cells, sentence-case).
- All component examples must include the `state` field, even if `Default`.

## 7 · What NOT to ask Claude to do

- Invent a new accent colour.
- Add an outer glow as focus.
- Mix icon families.
- Use the gem mark as a hero image.
- Bulk-replace tokens — they are versioned in `tokens/*.json`.
