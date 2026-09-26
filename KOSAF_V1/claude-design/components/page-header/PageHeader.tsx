import React from 'react';

const F = 'var(--kosaf-font)';

/** KOSAF PageHeader — KOSAF extension (1.4.0). Title → description → actions hierarchy consolidated from the kits' page heads.
 *  Work screens: align="left". Completion / notice screens: align="center". No marketing scale: PC 40 (or 30 inside SideNav layouts), Mobile 22. */
export function PageHeader({ title, description, actions, align = 'left', device = 'desktop', size = 40, level = 1, style }) {
  const m = device === 'mobile';
  const c = align === 'center';
  const stack = m || c;
  const Tag = 'h' + Math.min(Math.max(level, 1), 3);
  return (
    <header style={{ display: 'flex', flexDirection: stack ? 'column' : 'row', alignItems: c ? 'center' : stack ? 'stretch' : 'flex-end', justifyContent: 'space-between', gap: m ? 12 : 20, textAlign: align, marginBottom: m ? 20 : 30, fontFamily: F, ...style }}>
      <div style={{ flex: stack ? '0 0 auto' : 1, minWidth: 0, maxWidth: c ? 960 : undefined }}>
        {React.createElement(Tag, { style: { margin: 0, fontSize: m ? 22 : size, fontWeight: 700, lineHeight: 1.3, color: 'var(--kosaf-color-text-primary)', wordBreak: 'keep-all', overflowWrap: 'anywhere' } }, title)}
        {description ? <p style={{ margin: m ? '6px 0 0' : '10px 0 0', fontSize: m ? 14 : 18, lineHeight: m ? '20px' : '28px', color: 'var(--kosaf-color-text-secondary)', wordBreak: 'keep-all', overflowWrap: 'anywhere', textWrap: 'pretty' }}>{description}</p> : null}
      </div>
      {actions ? <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, justifyContent: c ? 'center' : m ? 'flex-start' : 'flex-end', flex: '0 0 auto' }}>{actions}</div> : null}
    </header>
  );
}
