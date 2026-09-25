import * as React from 'react';

/**
 * MetricCard — Source-derived (1:85779), 1:87886. SmallDataCard: 167×227 r10, 70px #02AC5A icon circle, label, unit, value.
 * States: Static · Clickable.
 */
export interface MetricCardProps {
  label?: string;
  unit?: string;
  value?: string;
  /** e.g. <Icon name="analytics" /> (white-circle icons in source were not all exported). */
  icon?: React.ReactNode;
  /** Default 167. */
  width?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function MetricCard(props: MetricCardProps): JSX.Element | null;
