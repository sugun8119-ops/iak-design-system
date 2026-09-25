import * as React from 'react';

/**
 * ProgressSteps — Source-derived (1:85779), 1:90125. 회원가입 step pill 01 이용약관 / 02 기본정보 입력 / 03 가입완료 (61px, 20px text).
 * States: Current · Other.
 */
export interface ProgressStepsProps {
  steps?: string[];
  /** 0-based. */
  current?: number;
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function ProgressSteps(props: ProgressStepsProps): JSX.Element | null;
