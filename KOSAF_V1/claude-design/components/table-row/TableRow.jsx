import React from 'react';

/** KOSAF/TableRow — Figma 218:637.
 * Device=Desktop 218:633: 1500×70, #FFF, 1px #DDDDDD, Regular 16 #333 at x=24.
 * Device=Mobile  218:635: 350×50, #FFF, 1px #DDDDDD, Regular 14 #333 at x=16, cells joined " · ". */
export function TableRow({ device = 'desktop', cells = [], columns, header, selected, onClick, width = '100%', style, ...rest }) {
  const mobile = device === 'mobile';
  const base = {
    boxSizing: 'border-box', width, minHeight: mobile ? 'var(--kosaf-table-mobile-row)' : 'var(--kosaf-table-desktop-row)',
    background: header ? 'var(--kosaf-color-bg-subtle)' : selected ? 'var(--kosaf-color-surface-brand-soft)' : 'var(--kosaf-color-surface-default)',
    border: '1px solid var(--kosaf-color-border-default)', fontFamily: 'var(--kosaf-font)', color: 'var(--kosaf-color-text-primary)',
    fontWeight: header ? 500 : 400, cursor: onClick ? 'pointer' : 'default',
  };
  if (mobile) {
    return (
      <div role="row" onClick={onClick} style={{ ...base, display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 14, lineHeight: '20px', ...style }} {...rest}>
        <span role="cell">{cells.map((c, i) => <React.Fragment key={i}>{i ? ' · ' : ''}{c}</React.Fragment>)}</span>
      </div>
    );
  }
  return (
    <div
      role="row"
      onClick={onClick}
      style={{ ...base, display: 'grid', gridTemplateColumns: columns || `repeat(${Math.max(cells.length, 1)}, max-content)`, alignItems: 'center', columnGap: 20, padding: '0 24px', fontSize: 16, lineHeight: '24px', ...style }}
      {...rest}
    >
      {cells.map((c, i) => <div role={header ? 'columnheader' : 'cell'} key={i} style={{ minWidth: 0 }}>{c}</div>)}
    </div>
  );
}
