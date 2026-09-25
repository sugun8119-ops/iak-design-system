import React from 'react';

/** KOSAF Rating — KOSAF extension: star vectors were not exported, so stars are the "★" text glyph in --kosaf-color-state-warning (#FFE326, observed yellow stars in 1:87593). Read-only or input (radio group, ←/→). */
export function Rating({ value = 0, onChange, max = 5, size = 18, showValue, readOnly, 'aria-label': ariaLabel = '평점', style }) {
  const [hover, setHover] = React.useState(0);
  const interactive = !readOnly && !!onChange;
  const shown = hover || value;
  const star = (i) => {
    const fill = Math.max(0, Math.min(1, shown - i));
    return (
      <span key={i} aria-hidden="true" style={{ position: 'relative', display: 'inline-block', width: size, fontSize: size, lineHeight: 1, color: 'var(--kosaf-color-border-default)' }}>★
        <span style={{ position: 'absolute', left: 0, top: 0, width: fill * 100 + '%', overflow: 'hidden', color: 'var(--kosaf-color-state-warning)' }}>★</span>
      </span>
    );
  };
  if (!interactive) {
    return <span role="img" aria-label={ariaLabel + ' ' + value + '점 / ' + max + '점'} style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontFamily: 'var(--kosaf-font)', ...style }}>{Array.from({ length: max }, (_, i) => star(i))}{showValue ? <span style={{ marginLeft: 8, fontSize: size, fontWeight: 500, color: 'var(--kosaf-color-text-primary)' }}>{value}</span> : null}</span>;
  }
  return (
    <span role="radiogroup" aria-label={ariaLabel} onMouseLeave={() => setHover(0)} style={{ display: 'inline-flex', gap: 2, ...style }}
      onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); onChange(Math.min(max, value + 1)); } if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); onChange(Math.max(1, value - 1)); } }}>
      {Array.from({ length: max }, (_, i) => (
        <button key={i} type="button" role="radio" aria-checked={value === i + 1} aria-label={i + 1 + '점'} tabIndex={value === i + 1 || (!value && i === 0) ? 0 : -1} onMouseEnter={() => setHover(i + 1)} onClick={() => onChange(i + 1)} style={{ padding: 0, border: 0, background: 'none', cursor: 'pointer', lineHeight: 0 }}>{star(i)}</button>
      ))}
    </span>
  );
}
