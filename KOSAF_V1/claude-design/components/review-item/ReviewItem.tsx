import React from 'react';
import { Rating } from '../rating/Rating.tsx';
import { Button } from '../button/Button.jsx';

const F = 'var(--kosaf-font)';

/** KOSAF ReviewItem — Source-derived from 이용후기 1:93671 (PC) / 1:92154 (Mo) / 판매자shop 이용후기 1:91890: masked author, date, product option, rating, satisfaction tags, body, 수정/삭제/신고하기. */
export function ReviewItem({ author = 'abc***', date = '2023-04-23', product = '사과/부사/특/20kg', rating = 5, tags = [], body = '싱싱하고 맛있는 사과!! 가성비 좋은 사과입니다.', images = [], actions = [], device = 'desktop', style }) {
  const m = device === 'mobile';
  return (
    <article style={{ padding: m ? '16px 0' : '30px 0', borderBottom: '1px solid var(--kosaf-color-border-default)', fontFamily: F, color: 'var(--kosaf-color-text-primary)', display: 'flex', flexDirection: 'column', gap: m ? 6 : 10, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: m ? 'flex-start' : 'center', gap: m ? 0 : 16 }}>
          <span style={{ fontSize: m ? 14 : 16, fontWeight: 500 }}>{author}</span>
          <span style={{ fontSize: m ? 12 : 14, color: 'var(--kosaf-color-text-muted)' }}>{date}</span>
          {!m ? <Rating value={rating} size={18} /> : null}
        </div>
        {actions.map((a) => <Button key={a.label} variant="secondary" size={34} onClick={a.onClick}>{a.label}</Button>)}
      </div>
      {m ? <Rating value={rating} size={16} /> : null}
      <div style={{ fontSize: 14, color: 'var(--kosaf-color-text-secondary)' }}>{product}</div>
      {tags.length ? <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{tags.map((t) => <span key={t} style={{ padding: '2px 10px', border: '1px solid var(--kosaf-color-border-default)', borderRadius: 3, fontSize: 13, color: 'var(--kosaf-color-text-secondary)' }}>{t}</span>)}</div> : null}
      <p style={{ margin: 0, fontSize: m ? 14 : 16, lineHeight: m ? '22px' : '26px' }}>{body}</p>
      {images.length ? <div style={{ display: 'flex', gap: 8 }}>{images.map((s, i) => <img key={i} src={s} alt="" style={{ width: m ? 80 : 100, height: m ? 80 : 100, objectFit: 'cover', borderRadius: 5 }} />)}</div> : null}
    </article>
  );
}
