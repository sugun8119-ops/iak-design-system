import React from 'react';
import { Checkbox } from '../checkbox/Checkbox.jsx';
import { QuantityStepper } from '../quantity-stepper/QuantityStepper.tsx';
import { DateField } from '../date-field/DateField.tsx';
import { CloseX } from '../mobile-menu/MobileMenu.tsx';

const F = 'var(--kosaf-font)';

/** KOSAF CartItem — Source-derived from 장바구니 1:103657/1:103945 and 주문/결제 Mo 1:104139: checkbox, thumb, title, price, 단위/포장·등급/크기·남은수량, 주문수량, * 납품기일, * 납품장소 + 배송지 변경, 운임 (판매자 부담). */
export function CartItem({ imageSrc, title = '프리미엄 부사 꿀사과 5kg', price = '10,000원', specs = [['단위/포장', '10kg 박스'], ['등급/크기', '특상(20개)'], ['남은수량', '300']], quantity, onQuantity, editableQuantity = true, deliveryDate, onDeliveryDate, place = '서울가락시장', onChangePlace, freight = '0원', freightNote = '(판매자 부담)', selectable, selected, onSelect, onRemove, device = 'mobile', style }) {
  const m = device === 'mobile';
  const row = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, minHeight: m ? 39 : 50, fontSize: m ? 15 : 16 };
  const req = (t) => <span style={{ whiteSpace: 'nowrap' }}><span style={{ color: 'var(--kosaf-color-action-danger)' }}>* </span>{t}</span>;
  return (
    <article aria-label={title} style={{ fontFamily: F, color: 'var(--kosaf-color-text-primary)', ...style }}>
      <div style={{ display: 'flex', gap: m ? 12 : 24, alignItems: 'flex-start' }}>
        {selectable ? <Checkbox checked={!!selected} onChange={onSelect} aria-label={title + ' 선택'} style={{ marginTop: m ? 38 : 50 }} /> : null}
        <div style={{ flex: '0 0 ' + (m ? 100 : 120) + 'px', height: m ? 100 : 120, background: 'var(--kosaf-gray-100)', overflow: 'hidden' }}>{imageSrc ? <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : null}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: m ? 14 : 18, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
          <div style={{ fontSize: m ? 16 : 20, fontWeight: 700, margin: '2px 0 4px' }}>{price}</div>
          <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 10, fontSize: m ? 13 : 14, lineHeight: m ? '20px' : '22px' }}>
            {specs.map(([k, v]) => <React.Fragment key={k}><dt style={{ color: 'var(--kosaf-color-text-primary)' }}>{k}</dt><dd style={{ margin: 0 }}>{v}</dd></React.Fragment>)}
          </dl>
        </div>
        {onRemove ? <button type="button" aria-label={title + ' 삭제'} onClick={onRemove} style={{ width: 32, height: 32, background: 'none', border: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><CloseX size={14} /></button> : null}
      </div>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column' }}>
        <div style={row}><span style={{ whiteSpace: 'nowrap' }}>주문수량</span>{editableQuantity ? <QuantityStepper value={quantity ?? 1} onChange={onQuantity} /> : <strong style={{ fontSize: 18, color: 'var(--kosaf-color-text-muted)' }}>{quantity}</strong>}</div>
        <div style={row}>{req('납품기일')}<DateField size="sm" width={160} value={deliveryDate} onChange={onDeliveryDate} aria-label="납품기일" /></div>
        <div style={row}>{req('납품장소')}<span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}><strong style={{ fontSize: m ? 17 : 18, whiteSpace: 'nowrap' }}>{place}</strong><button type="button" onClick={onChangePlace} style={{ height: 32, padding: '0 12px', border: '1px solid var(--kosaf-color-action-primary)', borderRadius: 3, background: '#fff', color: 'var(--kosaf-color-action-primary)', fontFamily: F, fontSize: 14, cursor: 'pointer' }}>배송지 변경</button></span></div>
        <div style={row}><span style={{ whiteSpace: 'nowrap' }}>운임</span><span><span style={{ fontSize: 12, color: 'var(--kosaf-color-text-muted)' }}>{freightNote} </span><strong style={{ fontSize: 18 }}>{freight}</strong></span></div>
      </div>
    </article>
  );
}
