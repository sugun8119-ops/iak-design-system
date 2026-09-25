import React from 'react';

const F = 'var(--kosaf-font)';

/** KOSAF FileUpload — Source-derived from 첨부파일2 1:89966 (field 360×45 r3 + "찾아보기" 99×45 r3 #F8F8F8, 16/500). Uses the native file picker; upload itself is a demo. */
export function FileUpload({ files, defaultFiles = [], onChange, accept, multiple, maxSizeMB = 4, buttonLabel = '찾아보기', placeholder = '', width = 360, disabled, error, id, style }) {
  const [inner, setInner] = React.useState(defaultFiles);
  const list = files !== undefined ? files : inner;
  const ref = React.useRef(null);
  const set = (next) => { if (files === undefined) setInner(next); onChange && onChange(next); };
  const add = (e) => {
    const picked = Array.from(e.target.files || []).map((f) => ({ name: f.name, size: f.size, tooLarge: f.size > maxSizeMB * 1048576 }));
    set(multiple ? list.concat(picked) : picked.slice(0, 1));
    e.target.value = '';
  };
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: F, ...style }}>
      <div style={{ boxSizing: 'border-box', width, maxWidth: '100%', minHeight: 45, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, padding: '6px 14px', border: '1px solid ' + (error ? 'var(--kosaf-color-action-danger)' : 'var(--kosaf-color-border-default)'), borderRadius: 3, background: disabled ? 'var(--kosaf-color-bg-subtle)' : '#fff' }}>
        {list.length ? list.map((f, i) => (
          <span key={f.name + i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, color: f.tooLarge ? 'var(--kosaf-color-action-danger)' : 'var(--kosaf-color-text-primary)' }}>
            {f.name}
            <button type="button" aria-label={f.name + ' 삭제'} disabled={disabled} onClick={() => set(list.filter((_, j) => j !== i))} style={{ width: 16, height: 16, borderRadius: 8, border: 0, padding: 0, background: 'var(--kosaf-src-text-strong)', color: '#fff', fontSize: 11, lineHeight: '16px', cursor: 'pointer' }}>×</button>
          </span>
        )) : <span style={{ fontSize: 14, color: 'var(--kosaf-color-text-muted)' }}>{placeholder}</span>}
      </div>
      <input ref={ref} id={id} type="file" accept={accept} multiple={multiple} disabled={disabled} onChange={add} style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} tabIndex={-1} />
      <button type="button" disabled={disabled} onClick={() => ref.current && ref.current.click()} style={{ flex: '0 0 99px', height: 45, border: '1px solid var(--kosaf-color-border-default)', borderRadius: 3, background: 'var(--kosaf-src-file-btn)', fontFamily: F, fontSize: 16, fontWeight: 500, color: 'var(--kosaf-color-text-primary)', cursor: disabled ? 'not-allowed' : 'pointer' }}>{buttonLabel}</button>
    </div>
  );
}
