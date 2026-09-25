import * as React from 'react';

/**
 * ProductCard — Source-derived (1:85779), 1:91180 · 1:91517. Search result card. PC 278 (List_Card_02) with 상품비교, deal badge, heart/cart, 구매하기 pill; Mobile 176 (Card_01).
 * States: Default · Selected (2px green) · Liked · Sold out.
 */
export interface ProductCardProps {
  device?: 'desktop' | 'mobile';
  /** 1:91190 / 1:91522 samples in assets/products; other photos not supplied. */
  imageSrc?: string;
  title?: string;
  price?: string;
  /** Badge colour: danger / focus / primary. */
  deal?: '입찰거래' | '정가거래' | '계약거래';
  /** 입찰 마감시간 strip (desktop). */
  deadline?: string;
  meta?: string[];
  liked?: boolean;
  onLike?: () => void;
  onCart?: () => void;
  onBuy?: () => void;
  /** Show 상품비교 checkbox when defined. */
  compare?: boolean;
  onCompare?: (v: boolean) => void;
  selected?: boolean;
  soldOut?: boolean;
  style?: React.CSSProperties;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element | null;
export declare function DealBadge(props: { type?: string; size?: 'md' | 'sm'; muted?: boolean }): JSX.Element;
