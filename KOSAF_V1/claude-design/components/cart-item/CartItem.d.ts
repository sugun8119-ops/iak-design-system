import * as React from 'react';

/**
 * CartItem — Source-derived (1:85779), 1:103945 · 1:104139. 장바구니/주문 line: select, thumb, specs, 주문수량, * 납품기일, * 납품장소 + 배송지 변경, 운임.
 * States: Selectable · Selected · Read-only qty.
 */
export interface CartItemProps {
  imageSrc?: string;
  title?: string;
  price?: string;
  specs?: [string, string][];
  quantity?: number;
  onQuantity?: (n: number) => void;
  editableQuantity?: boolean;
  deliveryDate?: string;
  onDeliveryDate?: (v: string) => void;
  place?: string;
  onChangePlace?: () => void;
  freight?: string;
  freightNote?: string;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (v: boolean) => void;
  onRemove?: () => void;
  device?: 'desktop' | 'mobile';
  style?: React.CSSProperties;
}
export declare function CartItem(props: CartItemProps): JSX.Element | null;
