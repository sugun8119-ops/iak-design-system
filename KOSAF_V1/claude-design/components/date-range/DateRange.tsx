import React from 'react';
import { DateField } from '../date-field/DateField.tsx';

/** KOSAF DateRange — two DateFields joined by "~" (order form 1:85780 shows "2022-03-23 ~"). End cannot precede start (native min/max). */
export function DateRange({ start, end, defaultStart, defaultEnd, onChange, width = 287, size = 'lg', disabled, style }) {
  const [s, setS] = React.useState(defaultStart ?? '');
  const [e, setE] = React.useState(defaultEnd ?? '');
  const sv = start !== undefined ? start : s, ev = end !== undefined ? end : e;
  return (
    <div role="group" aria-label="기간" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', ...style }}>
      <DateField aria-label="시작일" value={sv} max={ev || undefined} width={width} size={size} disabled={disabled} onChange={(v) => { if (start === undefined) setS(v); onChange && onChange(v, ev); }} />
      <span aria-hidden="true" style={{ fontFamily: 'var(--kosaf-font)', fontSize: 18, color: 'var(--kosaf-color-text-primary)' }}>~</span>
      <DateField aria-label="종료일" value={ev} min={sv || undefined} width={width} size={size} disabled={disabled} onChange={(v) => { if (end === undefined) setE(v); onChange && onChange(sv, v); }} />
    </div>
  );
}
