import * as React from 'react';

/**
 * DescriptionList — Source-derived (1:85779), 1:94245 · 1:87593. Label/value table (상품 속성정보, 발주정보, 주문결제 정보). PC label 293×70 #F7F7F7; Mobile 110 / 50.
 * States: Required label (*).
 */
export interface DescriptionListProps {
  items?: { label: React.ReactNode; value: React.ReactNode; required?: boolean }[];
  device?: 'desktop' | 'mobile';
  labelWidth?: number;
  style?: React.CSSProperties;
}
export declare function DescriptionList(props: DescriptionListProps): JSX.Element | null;
