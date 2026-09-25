import React from 'react';

const F = 'var(--kosaf-font)';

/** KOSAF FilterChip — Source-derived from 통합검색 filter chips (1:97566 capture: pill, selected = #059B00 stroke + text) and applied-filter tags ("사과 ×"). */
export function FilterChip({ selected, onToggle, onRemove, variant = 'toggle', disabled, children, style }) {
  if (variant === 'removable') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: F, fontSize: 16, lineHeight: '24px', color: 'var(--kosaf-color-action-primary)', ...style }}>
        {children}
        <button type="button" aria-label={(typeof children === 'string' ? children : '') + ' 필터 해제'} onClick={onRemove} style={{ width: 24, height: 24, padding: 0, border: 0, background: 'none', cursor: 'pointer', fontSize: 18, lineHeight: '24px', color: 'var(--kosaf-color-text-secondary)' }}>×</button>
      </span>
    );
  }
  return (
    <button type="button" aria-pressed={!!selected} disabled={disabled} onClick={onToggle}
      style={{ boxSizing: 'border-box', height: 44, minWidth: 110, padding: '0 28px', borderRadius: 22, border: '1px solid ' + (selected ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-border-default)'), boxShadow: selected ? 'inset 0 0 0 1px var(--kosaf-color-action-primary)' : 'none', background: disabled ? 'var(--kosaf-color-bg-subtle)' : '#fff', color: disabled ? 'var(--kosaf-color-text-disabled)' : selected ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-primary)', fontFamily: F, fontSize: 16, fontWeight: selected ? 500 : 400, cursor: disabled ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap', ...style }}>
      {children}
    </button>
  );
}
