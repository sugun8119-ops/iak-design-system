import React from 'react';

/** KOSAF ProgressSteps (회원가입) — Source-derived from Step_Navi 1:90125 (489×61: 150 / 191 / 150 segments, 20px text, current #059B00 fill + white Bold). Rounded outer pill observed in capture 1:89853. */
export function ProgressSteps({ steps = ['이용약관', '기본정보 입력', '가입완료'], current = 1, device = 'desktop', style }) {
  const m = device === 'mobile';
  return (
    <ol aria-label="가입 단계" style={{ display: 'inline-flex', margin: 0, padding: 0, listStyle: 'none', border: '1px solid var(--kosaf-color-border-default)', borderRadius: m ? 24 : 31, overflow: 'hidden', background: '#fff', fontFamily: 'var(--kosaf-font)', maxWidth: '100%', ...style }}>
      {steps.map((s, i) => {
        const on = i === current;
        return (
          <li key={i} aria-current={on ? 'step' : undefined} style={{ display: 'flex', alignItems: 'center', height: m ? 46 : 61, padding: m ? '0 14px' : '0 24px', whiteSpace: 'nowrap', fontSize: m ? 14 : 20, fontWeight: on ? 700 : 400, color: on ? '#fff' : 'var(--kosaf-color-text-primary)', background: on ? 'var(--kosaf-color-action-primary)' : 'transparent' }}>
            {String(i + 1).padStart(2, '0')} {s}
          </li>
        );
      })}
    </ol>
  );
}
