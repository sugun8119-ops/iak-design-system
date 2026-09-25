import React from 'react';
import { Icon } from '../icon/Icon.tsx';

const F = 'var(--kosaf-font)';

/** KOSAF Accordion (FAQ) — Source-derived from 고객센터_FAQ 1:90254: Q rows "[배송] 배송기간은…", answer panel (A) on #F7F7F7. Button + aria-expanded; ↑/↓/Home/End move between headers. */
export function Accordion({ items = [], defaultOpen = [], multiple = false, device = 'desktop', marker = true, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const refs = React.useRef([]);
  const m = device === 'mobile';
  const toggle = (i) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : multiple ? o.concat(i) : [i]));
  const key = (e, i) => {
    const n = e.key === 'ArrowDown' ? i + 1 : e.key === 'ArrowUp' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? items.length - 1 : null;
    if (n === null) return; e.preventDefault(); const t = refs.current[(n + items.length) % items.length]; t && t.focus();
  };
  const mk = (c, color) => <span aria-hidden="true" style={{ flex: '0 0 auto', width: m ? 20 : 28, fontSize: m ? 18 : 22, fontWeight: 700, color }}>{c}</span>;
  return (
    <div style={{ borderTop: '2px solid var(--kosaf-color-text-primary)', fontFamily: F, ...style }}>
      {items.map((it, i) => {
        const on = open.includes(i); const id = 'kacc-' + i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--kosaf-color-border-default)' }}>
            <h3 style={{ margin: 0 }}>
              <button ref={(el) => (refs.current[i] = el)} type="button" aria-expanded={on} aria-controls={id} onClick={() => toggle(i)} onKeyDown={(e) => key(e, i)}
                style={{ width: '100%', minHeight: m ? 60 : 80, display: 'flex', alignItems: 'center', gap: m ? 12 : 20, padding: m ? '0 16px' : '0 30px', background: 'none', border: 0, cursor: 'pointer', fontFamily: F, fontSize: m ? 15 : 18, fontWeight: 500, color: 'var(--kosaf-color-text-primary)', textAlign: 'left' }}>
                {marker ? mk('Q', 'var(--kosaf-color-action-primary)') : null}
                <span style={{ flex: 1 }}>{it.title}</span>
                <Icon name="navigate" size={20} rotate={on ? 90 : -90} />
              </button>
            </h3>
            {on ? (
              <div id={id} role="region" style={{ display: 'flex', gap: m ? 12 : 20, padding: m ? '16px' : '30px', background: 'var(--kosaf-color-bg-subtle)', fontSize: m ? 14 : 16, lineHeight: m ? '22px' : '26px', color: 'var(--kosaf-color-text-secondary)', whiteSpace: 'pre-line' }}>
                {marker ? mk('A', 'var(--kosaf-color-text-muted)') : null}<div>{it.content}</div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
