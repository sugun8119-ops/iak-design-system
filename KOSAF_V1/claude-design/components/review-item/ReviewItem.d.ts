import * as React from 'react';

/**
 * ReviewItem — Source-derived (1:85779), 1:93671 · 1:92154. 이용후기 row: masked author, date, rating, option, satisfaction tags, body, actions.
 * States: With/without actions & images.
 */
export interface ReviewItemProps {
  author?: string;
  date?: string;
  product?: string;
  rating?: number;
  /** e.g. 품질 만족 / 배송 만족 / 포장상태 만족. */
  tags?: string[];
  body?: string;
  images?: string[];
  /** 수정 · 삭제 · 신고하기. */
  actions?: { label: string; onClick?: () => void }[];
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function ReviewItem(props: ReviewItemProps): JSX.Element | null;
