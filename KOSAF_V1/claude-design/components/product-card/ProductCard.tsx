import React from 'react';
import { Icon } from '../icon/Icon.tsx';
import { Checkbox } from '../checkbox/Checkbox.jsx';

const F = 'var(--kosaf-font)';
const NUM = { fontVariantNumeric: 'tabular-nums' };
const DEAL = { 입찰거래: 'var(--kosaf-color-action-danger)', 정가거래: 'var(--kosaf-color-state-focus)', 계약거래: 'var(--kosaf-color-action-primary)' };

/** Image with an explicit, same-ratio fallback (missing src OR load error). Web refinement: fallback = #F7F7F7 + 1px #EAEAEA + label. */
export function ImageSlot({ src, alt = '', width = '100%', height, ratio = '1 / 1', radius = 10, label = '이미지 준비중', dim, style }) {
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => setFailed(false), [src]);
  const box = { boxSizing: 'border-box', position: 'relative', width, height, aspectRatio: height ? undefined : ratio, borderRadius: radius, overflow: 'hidden', flex: '0 0 auto', ...style };
  if (!src || failed) {
    return (
      <div role="img" aria-label={alt ? alt + ' (' + label + ')' : label} style={{ ...box, background: 'var(--kosaf-color-bg-subtle)', border: '1px solid var(--kosaf-gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: F, fontSize: 12, lineHeight: '18px', color: 'var(--kosaf-color-text-muted)', textAlign: 'center', padding: 6 }}>{label}</span>
      </div>
    );
  }
  return (
    <div style={{ ...box, background: '#fff' }}>
      <img src={src} alt={alt} onError={() => setFailed(true)} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', opacity: dim ? 0.45 : 1 }} />
    </div>
  );
}

export function DealBadge({ type = '정가거래', size = 'md', muted }) {
  const c = muted ? 'var(--kosaf-color-text-disabled)' : DEAL[type] || 'var(--kosaf-color-text-primary)';
  const md = size === 'md';
  return <span style={{ boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', height: md ? 30 : 24, padding: md ? '0 16px' : '0 10px', borderRadius: md ? 10 : 20, border: '1px solid ' + c, background: '#fff', color: c, fontFamily: F, fontSize: md ? 16 : 12, fontWeight: 500, lineHeight: 1, whiteSpace: 'nowrap' }}>{type}</span>;
}

const split = (m) => { const i = m.indexOf(':'); return i < 0 ? [m, ''] : [m.slice(0, i).trim(), m.slice(i + 1).trim()]; };

/** KOSAF ProductCard — Source-derived. desktop = List_Card_02 1:91180 (278 wide: img 278 r10, badge 30 r10, title 24/30, meta 16/24, 278×50 r60 구매하기).
 *  mobile = Card_01 1:91517 (176 wide: img 155 r10 inset 11, badge 24 r20 12/500, title 14, price 16/700).
 *  Web refinement: 2-line title clamp with reserved height, label/value meta grid, tabular prices, image fallback. */
export function ProductCard({ device = 'desktop', imageSrc, title = '사과/부사/특/20kg', price = '10,000', deal = '입찰거래', deadline, meta = ['판매자 : 대야청과', '생산자 : 김원생', '거래수량 : 300', '잔여수량 : 50'], liked, onLike, onCart, onBuy, compare, onCompare, selected, soldOut, style }) {
  const m = device === 'mobile';
  const IMG = m ? 155 : 278;
  const iconBtn = { width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 0, padding: 0, borderRadius: 3, cursor: soldOut ? 'not-allowed' : 'pointer', opacity: soldOut ? 0.4 : 1 };
  const heart = <Icon name="heart" size={m ? 20 : 22} style={{ filter: liked ? 'none' : 'grayscale(1) brightness(1.6)' }} />;
  const fg = soldOut ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-src-text-strong)';
  return (
    <article aria-label={title} style={{ boxSizing: 'border-box', width: m ? 176 : 298, padding: m ? 0 : 8, border: '2px solid ' + (selected ? 'var(--kosaf-color-action-primary)' : 'transparent'), borderRadius: 10, background: '#fff', fontFamily: F, color: fg, display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ position: 'relative', padding: m ? 11 : 0 }}>
        <ImageSlot src={imageSrc} alt={title} width={IMG} height={IMG} dim={soldOut} />
        {compare !== undefined && !m ? <div style={{ position: 'absolute', left: 8, top: 8, padding: '3px 8px', background: '#fff', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 3 }}><Checkbox checked={!!compare} onChange={onCompare} disabled={soldOut} style={{ fontSize: 13 }}>상품비교</Checkbox></div> : null}
        {m ? <div style={{ position: 'absolute', left: 19, top: 19 }}><DealBadge type={deal} size="sm" muted={soldOut} /></div> : null}
        {m ? <button style={{ ...iconBtn, position: 'absolute', right: 15, bottom: 15, background: 'rgba(255,255,255,.85)', borderRadius: 18 }} aria-pressed={!!liked} aria-label="관심상품" onClick={onLike} disabled={soldOut}>{heart}</button> : null}
        {soldOut ? <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', padding: '4px 12px', background: 'var(--kosaf-color-text-secondary)', color: '#fff', borderRadius: 3, fontSize: m ? 12 : 14, fontWeight: 500 }}>판매종료</span> : null}
        {deadline && !m ? <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 34, borderRadius: '0 0 10px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'rgba(255,255,255,.92)', fontSize: 14, fontWeight: 500 }}>입찰 마감시간<span style={{ ...NUM, color: 'var(--kosaf-color-action-danger)' }}>{deadline}</span></div> : null}
      </div>
      <div style={{ padding: m ? '2px 11px 16px' : '14px 0 0', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {!m ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <DealBadge type={deal} muted={soldOut} />
            <span style={{ display: 'flex', marginRight: -6 }}>
              <button style={iconBtn} aria-pressed={!!liked} aria-label="관심상품" onClick={onLike} disabled={soldOut}>{heart}</button>
              <button style={iconBtn} aria-label="장바구니 담기" onClick={onCart} disabled={soldOut}><Icon name="cart" size={22} /></button>
            </span>
          </div>
        ) : null}
        <div title={title} style={{ fontSize: m ? 14 : 24, lineHeight: m ? '21px' : '30px', minHeight: m ? 42 : 60, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', wordBreak: 'keep-all' }}>{title}</div>
        <div style={{ ...NUM, fontSize: m ? 16 : 20, fontWeight: 700, lineHeight: m ? '24px' : '30px', margin: m ? '4px 0 8px' : '4px 0 10px' }}>{price}<span style={{ fontSize: m ? 14 : 16, fontWeight: 500, marginLeft: 2 }}>원</span></div>
        <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 6, fontSize: m ? 13 : 16, lineHeight: m ? '20px' : '24px', color: soldOut ? 'inherit' : 'var(--kosaf-color-text-primary)' }}>
          {meta.map((x, i) => { const [k, v] = split(x); return <React.Fragment key={i}><dt style={{ color: soldOut ? 'inherit' : 'var(--kosaf-color-text-secondary)', whiteSpace: 'nowrap' }}>{k}</dt><dd style={{ ...NUM, margin: 0, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v}</dd></React.Fragment>; })}
        </dl>
        {!m ? <button type="button" disabled={soldOut} onClick={onBuy} style={{ width: 278, height: 50, marginTop: 'auto', paddingTop: 0, position: 'relative', top: 16, marginBottom: 16, borderRadius: 60, border: '1px solid ' + (soldOut ? 'var(--kosaf-color-border-default)' : 'var(--kosaf-color-action-primary)'), background: soldOut ? 'var(--kosaf-gray-100)' : '#fff', color: soldOut ? 'var(--kosaf-color-text-disabled)' : 'var(--kosaf-color-action-primary)', fontFamily: F, fontSize: 18, fontWeight: 500, cursor: soldOut ? 'not-allowed' : 'pointer' }}>{soldOut ? 'Sold Out' : '구매하기'}</button> : null}
      </div>
    </article>
  );
}
