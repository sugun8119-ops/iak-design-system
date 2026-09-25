import React from 'react';
import { Icon } from '../icon/Icon.tsx';
import { Checkbox } from '../checkbox/Checkbox.jsx';

const F = 'var(--kosaf-font)';
const DEAL = { 입찰거래: 'var(--kosaf-color-action-danger)', 정가거래: 'var(--kosaf-color-state-focus)', 계약거래: 'var(--kosaf-color-action-primary)' };

export function DealBadge({ type = '정가거래', size = 'md', muted }) {
  const c = muted ? 'var(--kosaf-color-text-disabled)' : DEAL[type] || 'var(--kosaf-color-text-primary)';
  const md = size === 'md';
  return <span style={{ display: 'inline-flex', alignItems: 'center', height: md ? 30 : 24, padding: md ? '0 16px' : '0 12px', borderRadius: md ? 10 : 20, border: '1px solid ' + c, background: '#fff', color: c, fontFamily: F, fontSize: md ? 16 : 12, fontWeight: 500, whiteSpace: 'nowrap' }}>{type}</span>;
}

/** KOSAF ProductCard — Source-derived. desktop = List_Card_02 1:91180 (278×582: img 278 r10, badge 94×30 r10, title 24/30, meta 16/24, 278×50 r60 구매하기).
 *  mobile = Card_01 1:91517 (176×354: img 155 r10 inset 11, badge 73×24 r20 12/500, title 14, price 16/700). */
export function ProductCard({ device = 'desktop', imageSrc, title = '사과/부사/특/20kg', price = '10,000', deal = '입찰거래', deadline, meta = ['판매자 : 대야청과', '생산자 : 김원생', '거래수량 : 300', '잔여수량 : 50'], liked, onLike, onCart, onBuy, compare, onCompare, selected, soldOut, style }) {
  const m = device === 'mobile';
  const W = m ? 176 : 278, IMG = m ? 155 : 278;
  const iconBtn = { width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 0, padding: 0, cursor: 'pointer', opacity: soldOut ? 0.4 : 1 };
  return (
    <article aria-label={title} style={{ boxSizing: 'border-box', width: W + (m ? 0 : 20), padding: m ? 0 : 9, border: selected ? '2px solid var(--kosaf-color-action-primary)' : '2px solid transparent', borderRadius: 10, background: '#fff', fontFamily: F, color: soldOut ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-src-text-strong)', ...style }}>
      <div style={{ position: 'relative', width: m ? W : IMG, padding: m ? 11 : 0, boxSizing: 'border-box' }}>
        <div style={{ width: IMG, height: IMG, borderRadius: 10, overflow: 'hidden', background: 'var(--kosaf-gray-100)', opacity: soldOut ? 0.45 : 1 }}>
          {imageSrc ? <img src={imageSrc} alt="" width={IMG} height={IMG} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'var(--kosaf-color-text-muted)' }}>상품 이미지</div>}
        </div>
        {compare !== undefined && !m ? <div style={{ position: 'absolute', left: 8, top: 8, padding: '2px 8px', background: '#fff', border: '1px solid var(--kosaf-color-border-strong)', borderRadius: 3 }}><Checkbox checked={!!compare} onChange={onCompare} disabled={soldOut} style={{ fontSize: 13 }}>상품비교</Checkbox></div> : null}
        {m ? <div style={{ position: 'absolute', left: 21, top: 21 }}><DealBadge type={deal} size="sm" muted={soldOut} /></div> : null}
        {m ? <button style={{ ...iconBtn, position: 'absolute', left: 95, top: 130 }} aria-pressed={!!liked} aria-label="관심상품" onClick={onLike}><Icon name="heart" size={22} style={{ filter: liked ? 'none' : 'grayscale(1) brightness(1.6)' }} /></button> : null}
        {deadline && !m ? <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,.9)', fontSize: 14, fontWeight: 500 }}>입찰 마감시간&nbsp;<span style={{ color: 'var(--kosaf-color-action-danger)' }}>{deadline}</span></div> : null}
      </div>
      <div style={{ padding: m ? '10px 11px 16px 14px' : '0', marginTop: m ? 0 : 14 }}>
        {!m ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <DealBadge type={deal} muted={soldOut} />
            <span style={{ display: 'flex' }}>
              <button style={iconBtn} aria-pressed={!!liked} aria-label="관심상품" onClick={onLike}><Icon name="heart" size={22} style={{ filter: liked ? 'none' : 'grayscale(1) brightness(1.6)' }} /></button>
              <button style={iconBtn} aria-label="장바구니 담기" onClick={onCart} disabled={soldOut}><Icon name="cart" size={22} /></button>
            </span>
          </div>
        ) : null}
        <div style={{ fontSize: m ? 14 : 24, lineHeight: m ? '21px' : '30px' }}>{title}</div>
        <div style={{ fontSize: m ? 16 : 20, fontWeight: 700, lineHeight: m ? '25px' : '30px', margin: m ? '6px 0 8px' : '4px 0 10px' }}>{price}{m ? '원' : <span style={{ fontSize: 16, fontWeight: 500 }}> 원</span>}</div>
        <div style={{ fontSize: m ? 14 : 16, lineHeight: m ? '20px' : '24px', color: soldOut ? 'inherit' : 'var(--kosaf-color-text-primary)', whiteSpace: 'pre-line' }}>{meta.join('\n')}</div>
        {!m ? <button type="button" disabled={soldOut} onClick={onBuy} style={{ width: 278, height: 50, marginTop: 16, borderRadius: 60, border: '1px solid ' + (soldOut ? 'var(--kosaf-color-border-default)' : 'var(--kosaf-color-action-primary)'), background: '#fff', color: soldOut ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-action-primary)', fontFamily: F, fontSize: 18, fontWeight: 500, cursor: soldOut ? 'not-allowed' : 'pointer' }}>{soldOut ? 'Sold Out' : '구매하기'}</button> : null}
      </div>
    </article>
  );
}
