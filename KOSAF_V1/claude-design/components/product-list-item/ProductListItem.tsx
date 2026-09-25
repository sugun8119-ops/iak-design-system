import React from 'react';
import { ImageSlot } from '../product-card/ProductCard.tsx';

const F = 'var(--kosaf-font)';

/** KOSAF ProductListItem — Source-derived from 구매자 마이페이지 mobile order rows (1:87784) and list-type product row 1:94265: thumb + date + 2-line title + price + outline action. */
export function ProductListItem({ imageSrc, status, statusTone = 'default', date, title, price, actionLabel = '상세보기', onAction, device = 'mobile', style }) {
  const m = device === 'mobile';
  const T = m ? 120 : 160;
  return (
    <article style={{ fontFamily: F, color: 'var(--kosaf-src-text-strong)', ...style }}>
      {status ? <div style={{ fontSize: m ? 16 : 18, fontWeight: 500, marginBottom: 10, color: statusTone === 'done' ? 'var(--kosaf-color-action-primary)' : 'var(--kosaf-color-text-secondary)' }}>{status}</div> : null}
      <div style={{ display: 'flex', gap: m ? 20 : 30 }}>
        <ImageSlot src={imageSrc} alt={title} width={m ? 105 : T} height={m ? 105 : T} radius={m ? 5 : 10} />
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {date ? <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: 12, color: 'var(--kosaf-color-text-primary)' }}>{date}</span> : null}
          <span style={{ fontSize: m ? 14 : 18, lineHeight: m ? '20px' : '26px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</span>
          {price ? <span style={{ fontVariantNumeric: 'tabular-nums', fontSize: m ? 18 : 20, fontWeight: 700, lineHeight: '28px' }}>{price}</span> : null}
          {actionLabel ? <button type="button" onClick={onAction} style={{ alignSelf: 'flex-start', marginTop: 4, height: 24, padding: '0 8px', border: '1px solid var(--kosaf-color-action-primary)', borderRadius: 0, background: '#fff', color: 'var(--kosaf-color-action-primary)', fontFamily: F, fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>{actionLabel}</button> : null}
        </div>
      </div>
    </article>
  );
}
