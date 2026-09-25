/* @ds-bundle: {"format":4,"namespace":"DEW","components":[{"name":"EditorialHeader"},{"name":"CategoryNav"},{"name":"FeatureStory"},{"name":"StoryCard"},{"name":"MediaCard"},{"name":"EditorialGrid"},{"name":"QuoteBlock"},{"name":"ImageCaption"},{"name":"ArticleMeta"},{"name":"EditorialCTA"},{"name":"Footer"},{"name":"Button"},{"name":"TextField"},{"name":"Textarea"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Badge"},{"name":"Card"},{"name":"Skeleton"},{"name":"Icon"},{"name":"Dialog"},{"name":"Menu"},{"name":"Table"},{"name":"Pagination"},{"name":"Toast"},{"name":"AlertDialog"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function stateClass(s) { return s === 'hover' ? 'is-hover' : s === 'focus' ? 'is-focus' : null; }

  /* internal: self-made media placeholder, a licensed image when src is given,
     or the missing-image state (derived-extension) when `missing` is set or the image fails */
  function Media(p) {
    p = p || {};
    var st = React.useState(false), failed = st[0], setFailed = st[1];
    var tone = p.tone && p.tone !== 'default' ? 'dew-media--' + p.tone : null;
    var ratio = p.ratio === 'portrait' ? 'dew-media--portrait' : p.ratio === 'wide' ? 'dew-media--wide' : null;
    var label = p.label || '미디어 자리표시자';
    if (p.missing || failed) {
      return h('div', { className: cx('dew-media', 'dew-media--missing', ratio), role: 'img', 'aria-label': '이미지를 불러올 수 없음' + (p.label ? ': ' + p.label : '') },
        h('span', { className: 'dew-media__missing', 'aria-hidden': 'true' },
          window.DEW && window.DEW.Icon ? h(window.DEW.Icon, { name: 'image-off', size: 24 }) : null,
          h('span', { className: 'dew-meta' }, p.missingLabel || '이미지 없음')));
    }
    if (p.src) return h('div', { className: cx('dew-media', tone, ratio) }, h('img', { src: p.src, alt: p.alt || '', onError: function () { setFailed(true); } }));
    return h('div', { className: cx('dew-media', tone, ratio), role: 'img', 'aria-label': label });
  }

  function EditorialCTA(p) {
    var dir = p.direction === 'back';
    var arrow = p.arrow || (dir ? '←' : '↗');
    var kids = dir ? [h('span', { key: 'a', 'aria-hidden': 'true' }, arrow), h('span', { key: 'l' }, p.label || p.children)]
                   : [h('span', { key: 'l' }, p.label || p.children), h('span', { key: 'a', 'aria-hidden': 'true' }, arrow)];
    var cls = cx('dew-cta', stateClass(p.state), p.className);
    if (p.as === 'span' || !p.href) return h('span', { className: cls }, kids);
    return h('a', { className: cx('dew', cls), href: p.href, onClick: p.onClick }, kids);
  }

  function ImageCaption(p) {
    var Tag = p.as || 'figcaption';
    return h(Tag, { className: cx('dew', 'dew-caption', 'dew-meta', p.className) },
      h('span', { className: 'dew-caption__text' }, p.caption || p.children),
      p.credit ? h('span', { className: 'dew-caption__credit' }, p.credit) : null);
  }

  function ArticleMeta(p) {
    var items = p.items || [];
    return h('ul', { className: cx('dew', 'dew-articlemeta', 'dew-meta', p.className), 'aria-label': p.label || '글 정보' },
      items.map(function (it, i) { return h('li', { key: i }, it); }));
  }

  function EditorialHeader(p) {
    var links = p.links || [];
    return h('header', { className: cx('dew', 'dew-header', p.className) },
      h('a', { className: 'dew-header__brand', href: p.brandHref || '#' }, p.brand || 'MASTHEAD'),
      h('nav', { className: 'dew-header__nav', 'aria-label': p.navLabel || '주 탐색' },
        links.map(function (l, i) {
          return h('a', { key: i, href: l.href || '#', 'aria-current': l.current ? 'page' : undefined, className: stateClass(l.state) }, l.label);
        })));
  }

  function CategoryNav(p) {
    var items = p.items || [];
    var asButtons = typeof p.onSelect === 'function';
    return h('nav', { className: cx('dew', p.className), 'aria-label': p.label || '카테고리' },
      h('div', { className: 'dew-catnav' },
        items.map(function (it, i) {
          var cls = cx('dew-catnav__item', it.selected && 'is-selected', stateClass(it.state));
          if (asButtons) return h('button', { key: i, type: 'button', className: cls, 'aria-pressed': it.selected ? 'true' : 'false', onClick: function () { p.onSelect(it.value != null ? it.value : it.label, i); } }, it.label);
          return h('a', { key: i, className: cls, href: it.href || '#', 'aria-current': it.selected ? 'true' : undefined }, it.label);
        })));
  }

  function FeatureStory(p) {
    var Title = p.as || 'h1';
    var m = p.media || {};
    return h('section', { className: cx('dew', 'dew-feature', p.className) },
      h('div', { className: 'dew-feature__text' },
        p.eyebrow ? h('p', { className: 'dew-meta dew-eyebrow' }, p.eyebrow) : null,
        h(Title, { className: 'dew-display dew-feature__title' }, p.title),
        p.description ? h('p', { className: 'dew-feature__desc' }, p.description) : null,
        p.cta ? h(EditorialCTA, p.cta) : null),
      h('figure', { className: 'dew-feature__media' },
        h(Media, Object.assign({}, m, { ratio: m.ratio || 'portrait' })),
        m.caption ? h(ImageCaption, { caption: m.caption, credit: m.credit }) : null));
  }

  function StoryCard(p) {
    var Title = p.as || 'h3';
    var m = p.media || {};
    return h('article', { className: cx('dew', 'dew-card', p.className) },
      h('a', { className: cx('dew-card__link', stateClass(p.state)), href: p.href || '#' },
        h(Media, m),
        h('div', { className: 'dew-card__text' },
          p.meta ? h('p', { className: 'dew-meta' }, p.meta) : null,
          h(Title, { className: 'dew-title dew-card__title' }, p.title)),
        p.ctaLabel === null ? null : h(EditorialCTA, { as: 'span', label: p.ctaLabel || '이야기 읽기' })));
  }

  function MediaCard(p) {
    var portrait = p.orientation === 'portrait';
    return h('figure', { className: cx('dew', 'dew-mediacard', p.className) },
      h(Media, { tone: p.tone, ratio: portrait ? 'portrait' : null, label: p.label, src: p.src, alt: p.alt, missing: p.missing, missingLabel: p.missingLabel }),
      p.caption ? h(ImageCaption, { caption: p.caption, credit: p.credit }) : null);
  }

  function EditorialGrid(p) {
    var variant = p.variant === 'feature' ? 'feature' : 'three';
    var items = p.items || [];
    var head = p.title || p.eyebrow || p.cta;
    var HeadTag = p.headingAs || 'h2';
    return h('section', { className: cx('dew', 'dew-grid', 'dew-grid--' + variant, p.className), id: p.id },
      head ? h('div', { className: 'dew-grid__head' },
        h('div', null,
          p.eyebrow ? h('p', { className: 'dew-meta dew-eyebrow' }, p.eyebrow) : null,
          p.title ? h(HeadTag, { className: 'dew-heading' }, p.title) : null),
        p.cta ? h(EditorialCTA, p.cta) : null) : null,
      h('div', { className: 'dew-grid__items' },
        items.map(function (it, i) {
          var props = Object.assign({ key: it.key || i }, it);
          if (variant === 'feature' && i === 0) props.media = Object.assign({ ratio: 'portrait' }, it.media || {});
          return h(StoryCard, props);
        })));
  }

  function QuoteBlock(p) {
    return h('aside', { className: cx('dew', 'dew-quote', p.className) },
      h('blockquote', { className: 'dew-quote__text' }, p.quote || p.children),
      p.cite ? h('p', { className: 'dew-quote__cite' }, p.cite) : null);
  }

  function Footer(p) {
    return h('footer', { className: cx('dew', 'dew-footer', p.className) },
      h('span', { className: 'dew-footer__brand' }, p.brand || 'MASTHEAD'),
      p.note ? h('span', { className: 'dew-meta' }, p.note) : null);
  }

  window.DEW = Object.assign(window.DEW || {}, {
    EditorialHeader: EditorialHeader, CategoryNav: CategoryNav, FeatureStory: FeatureStory,
    StoryCard: StoryCard, MediaCard: MediaCard, EditorialGrid: EditorialGrid, QuoteBlock: QuoteBlock,
    ImageCaption: ImageCaption, ArticleMeta: ArticleMeta, EditorialCTA: EditorialCTA, Footer: Footer
  });
  window.DEW.__Media = Media;
})();

/* ---- DEW common families (IAK coverage list, DEW visual authority) — all derived-extension ---- */
(function () {
  var React = window.React;
  var h = React.createElement;
  var DEW = window.DEW;
  var uid = 0;
  function useId(prefix) { var r = React.useRef(null); if (r.current == null) r.current = (prefix || 'dew') + '-' + (++uid); return r.current; }
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function forced(s) { return s ? 'is-' + s : null; }

  /* ---------- Icon: self-drawn 24px line set, 1.5 stroke, square caps ---------- */
  var P = function (d) { return ['p', d]; };
  var ICONS = {
    'arrow-up-right': [P('M7 17L17 7'), P('M9 7h8v8')],
    'arrow-right': [P('M4 12h16'), P('M14 6l6 6-6 6')],
    'arrow-left': [P('M20 12H4'), P('M10 6l-6 6 6 6')],
    'chevron-down': [P('M6 9l6 6 6-6')],
    'chevron-up': [P('M6 15l6-6 6 6')],
    'chevron-left': [P('M15 5l-7 7 7 7')],
    'chevron-right': [P('M9 5l7 7-7 7')],
    'check': [P('M5 12.5l4.5 4.5L19 7.5')],
    'close': [P('M6 6l12 12'), P('M18 6L6 18')],
    'plus': [P('M12 5v14'), P('M5 12h14')],
    'minus': [P('M5 12h14')],
    'search': [['c', 11, 11, 6], P('M15.5 15.5L20 20')],
    'more': [['r', 5, 11, 2, 2], ['r', 11, 11, 2, 2], ['r', 17, 11, 2, 2]],
    'info': [['c', 12, 12, 9], P('M12 11v6'), P('M12 7.5v1.5')],
    'success': [['c', 12, 12, 9], P('M8 12.5l3 3 5-6')],
    'alert': [P('M12 4l9 16H3z'), P('M12 10v4.5'), P('M12 16.5v1.5')],
    'error': [['c', 12, 12, 9], P('M12 7v6'), P('M12 15.5v1.5')],
    'sort': [P('M8 19V5'), P('M5 8l3-3 3 3'), P('M16 5v14'), P('M13 16l3 3 3-3')],
    'sort-asc': [P('M12 19V5'), P('M7 10l5-5 5 5')],
    'sort-desc': [P('M12 5v14'), P('M7 14l5 5 5-5')],
    'image': [P('M4 5h16v14H4z'), P('M4 16l5-5 4 4 2-2 5 5'), ['c', 15.5, 9, 1.5]],
    'image-off': [P('M4 5h16v14H4z'), P('M4 16l5-5 4 4'), P('M3 3l18 18')],
    'trash': [P('M5 7h14'), P('M10 7V4h4v3'), P('M7 7l1 13h8l1-13')],
    'bookmark': [P('M7 4h10v16l-5-4-5 4z')],
    'download': [P('M12 4v11'), P('M7 10l5 5 5-5'), P('M5 20h14')],
    'refresh': [P('M19 12a7 7 0 1 1-2.05-4.95'), P('M19 4v4h-4')],
    'loader': [P('M12 3a9 9 0 0 1 9 9')]
  };
  function Icon(p) {
    var size = p.size || 20, spec = ICONS[p.name] || ICONS.info;
    var kids = spec.map(function (s, i) {
      if (s[0] === 'p') return h('path', { key: i, d: s[1] });
      if (s[0] === 'c') return h('circle', { key: i, cx: s[1], cy: s[2], r: s[3] });
      return h('rect', { key: i, x: s[1], y: s[2], width: s[3], height: s[4], fill: 'currentColor', stroke: 'none' });
    });
    var a11y = p.label ? { role: 'img', 'aria-label': p.label } : { 'aria-hidden': 'true', focusable: 'false' };
    return h('svg', Object.assign({ className: cx('dew-icon', p.tone && 'dew-icon--' + p.tone, p.spin && 'dew-icon--spin', p.className), width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square', strokeLinejoin: 'miter' }, a11y), kids);
  }
  Icon.names = Object.keys(ICONS);

  /* ---------- Button ---------- */
  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'md';
    var iconOnly = !!p.iconOnly;
    var isz = size === 'sm' ? 16 : 20;
    var lead = p.loading ? h(Icon, { name: 'loader', size: isz, spin: true }) : (p.icon && p.iconPosition !== 'end' ? h(Icon, { name: p.icon, size: isz }) : null);
    var trail = !p.loading && p.icon && p.iconPosition === 'end' ? h(Icon, { name: p.icon, size: isz }) : null;
    var disabled = p.disabled || p.loading;
    return h('button', {
      type: p.type || 'button', id: p.id,
      className: cx('dew', 'dew-btn', 'dew-btn--' + variant, 'dew-btn--' + size, iconOnly && 'dew-btn--icon', p.fullWidth && 'dew-btn--full', p.loading && 'is-loading', forced(p.state), p.className),
      disabled: disabled, 'aria-busy': p.loading ? 'true' : undefined,
      'aria-label': iconOnly ? (p['aria-label'] || p.label) : p['aria-label'],
      'aria-pressed': p.pressed != null ? String(!!p.pressed) : undefined,
      'aria-haspopup': p['aria-haspopup'], 'aria-expanded': p['aria-expanded'], 'aria-controls': p['aria-controls'], 'aria-describedby': p['aria-describedby'],
      onClick: p.onClick, onKeyDown: p.onKeyDown
    }, lead, iconOnly ? null : h('span', { className: 'dew-btn__label' }, p.loading && p.loadingLabel ? p.loadingLabel : (p.label || p.children)), trail);
  }

  /* ---------- Field shell shared by TextField / Textarea / Select ---------- */
  function Field(p, control) {
    var descId = p.description ? p.id + '-desc' : null, errId = p.error ? p.id + '-err' : null;
    return h('div', { className: cx('dew', 'dew-field', p.error && 'is-error', p.disabled && 'is-disabled', p.readOnly && 'is-readonly', p.className) },
      h('label', { className: 'dew-field__label', htmlFor: p.id }, p.label,
        p.required ? h('span', { className: 'dew-field__req' }, ' (필수)') : (p.optional ? h('span', { className: 'dew-field__req' }, ' (선택)') : null),
        p.readOnly ? h('span', { className: 'dew-field__req' }, ' · 읽기 전용') : null),
      p.description ? h('p', { className: 'dew-field__desc dew-meta', id: descId }, p.description) : null,
      control([descId, errId].filter(Boolean).join(' ') || undefined),
      p.error ? h('p', { className: 'dew-field__error', id: errId }, h(Icon, { name: 'error', size: 16, tone: 'accent' }), h('span', null, h('span', { className: 'dew-sr' }, '오류: '), p.error)) : null,
      p.counter ? h('p', { className: 'dew-field__counter dew-meta', 'aria-live': 'polite' }, p.counter) : null);
  }
  function TextField(p) {
    var gen = useId('tf'), id = p.id || gen;
    return Field(Object.assign({}, p, { id: id }), function (describedBy) {
      return h('div', { className: 'dew-input-wrap' },
        p.icon ? h(Icon, { name: p.icon, size: 20, className: 'dew-input-icon' }) : null,
        h('input', { id: id, className: cx('dew-input', p.icon && 'has-icon', forced(p.state)), type: p.type || 'text', name: p.name, placeholder: p.placeholder, defaultValue: p.defaultValue, value: p.value, onChange: p.onChange, readOnly: p.value != null && !p.onChange ? true : p.readOnly, disabled: p.disabled, required: p.required, inputMode: p.inputMode, autoComplete: p.autoComplete, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': describedBy }));
    });
  }
  function Textarea(p) {
    var gen = useId('ta'), id = p.id || gen;
    var len = String(p.value != null ? p.value : (p.defaultValue || '')).length;
    var counter = p.maxLength ? len + ' / ' + p.maxLength + '자' : null;
    return Field(Object.assign({}, p, { id: id, counter: counter }), function (describedBy) {
      return h('textarea', { id: id, className: cx('dew-input', 'dew-textarea', forced(p.state)), rows: p.rows || 4, name: p.name, placeholder: p.placeholder, defaultValue: p.defaultValue, value: p.value, onChange: p.onChange, readOnly: p.readOnly, disabled: p.disabled, required: p.required, maxLength: p.maxLength, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': describedBy });
    });
  }
  function Select(p) {
    var gen = useId('sel'), id = p.id || gen;
    var opts = p.options || [];
    return Field(Object.assign({}, p, { id: id }), function (describedBy) {
      return h('div', { className: 'dew-input-wrap dew-select-wrap' },
        h('select', { id: id, className: cx('dew-input', 'dew-select', forced(p.state)), name: p.name, defaultValue: p.defaultValue != null ? p.defaultValue : (p.placeholder ? '' : undefined), value: p.value, onChange: p.onChange, disabled: p.disabled || p.readOnly, required: p.required, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': describedBy },
          p.placeholder ? h('option', { value: '', disabled: true }, p.placeholder) : null,
          opts.map(function (o, i) { return h('option', { key: i, value: o.value, disabled: o.disabled }, o.label); })),
        h(Icon, { name: 'chevron-down', size: 20, className: 'dew-select-icon' }));
    });
  }

  /* ---------- Checkbox / Switch ---------- */
  function Checkbox(p) {
    var gen = useId('cb'), id = p.id || gen;
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; }, [p.indeterminate]);
    var descId = p.description ? id + '-desc' : null, errId = p.error ? id + '-err' : null;
    return h('div', { className: cx('dew', 'dew-check', p.error && 'is-error', p.disabled && 'is-disabled', p.className) },
      h('label', { className: 'dew-check__row', htmlFor: id },
        h('input', { ref: ref, id: id, type: 'checkbox', className: cx('dew-check__input', forced(p.state)), name: p.name, value: p.value, defaultChecked: p.defaultChecked, checked: p.checked, onChange: p.onChange || (p.checked != null ? function () {} : undefined), disabled: p.disabled, required: p.required, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': [descId, errId].filter(Boolean).join(' ') || undefined }),
        h('span', { className: 'dew-check__box', 'aria-hidden': 'true' }, h(Icon, { name: p.indeterminate ? 'minus' : 'check', size: 16, className: 'dew-check__mark' })),
        h('span', { className: 'dew-check__text' }, h('span', { className: 'dew-check__label' }, p.label),
          p.description ? h('span', { className: 'dew-meta dew-check__desc', id: descId }, p.description) : null)),
      p.error ? h('p', { className: 'dew-field__error', id: errId }, h(Icon, { name: 'error', size: 16, tone: 'accent' }), h('span', null, h('span', { className: 'dew-sr' }, '오류: '), p.error)) : null);
  }
  function Switch(p) {
    var gen = useId('sw'), id = p.id || gen;
    var init = p.checked != null ? p.checked : !!p.defaultChecked;
    var st = React.useState(init), on = p.checked != null ? p.checked : st[0];
    var descId = p.description ? id + '-desc' : null;
    return h('div', { className: cx('dew', 'dew-switch', p.disabled && 'is-disabled', p.className) },
      h('label', { className: 'dew-switch__row', htmlFor: id },
        h('span', { className: 'dew-check__text' }, h('span', { className: 'dew-check__label' }, p.label),
          p.description ? h('span', { className: 'dew-meta dew-check__desc', id: descId }, p.description) : null),
        h('span', { className: 'dew-switch__control' },
          h('input', { id: id, type: 'checkbox', role: 'switch', className: cx('dew-switch__input', forced(p.state)), checked: on, disabled: p.disabled, 'aria-describedby': descId || undefined,
            onChange: function (e) { st[1](e.target.checked); if (p.onChange) p.onChange(e.target.checked); } }),
          h('span', { className: 'dew-switch__track', 'aria-hidden': 'true' }, h('span', { className: 'dew-switch__thumb' })),
          h('span', { className: 'dew-meta dew-switch__state', 'aria-hidden': 'true' }, on ? (p.onLabel || '켜짐') : (p.offLabel || '꺼짐')))));
  }

  /* ---------- Badge ---------- */
  var BADGE_ICON = { info: 'info', success: 'check', warning: 'alert', danger: 'error' };
  function Badge(p) {
    var tone = p.tone || 'neutral';
    var icon = p.icon === null ? null : (p.icon || BADGE_ICON[tone]);
    return h('span', { className: cx('dew', 'dew-badge', 'dew-badge--' + tone, p.className) },
      icon ? h(Icon, { name: icon, size: 16, tone: tone === 'danger' ? 'accent' : null }) : null,
      h('span', null, p.label || p.children));
  }

  /* ---------- Card (utility container; StoryCard stays the editorial teaser) ---------- */
  function Card(p) {
    var Title = p.as || 'h3';
    var horizontal = p.orientation === 'horizontal';
    var interactive = !!p.href && !p.disabled;
    var titleNode = interactive ? h('a', { className: 'dew-ucard__link', href: p.href, 'aria-current': p.selected ? 'true' : undefined }, p.title) : p.title;
    return h('article', { className: cx('dew', 'dew-ucard', 'dew-ucard--' + (p.variant || 'plain'), horizontal && 'dew-ucard--h', interactive && 'is-interactive', p.selected && 'is-selected', p.disabled && 'is-disabled', forced(p.state), p.className), 'aria-disabled': p.disabled ? 'true' : undefined },
      p.media ? h('div', { className: 'dew-ucard__media' }, h(DEW.__Media, p.media)) : null,
      h('div', { className: 'dew-ucard__body' },
        (p.eyebrow || p.selected) ? h('div', { className: 'dew-ucard__top' },
          p.eyebrow ? h('p', { className: 'dew-meta' }, p.eyebrow) : null,
          p.selected ? h(Badge, { tone: 'info', icon: 'check' }, '선택됨') : null) : null,
        p.title ? h(Title, { className: 'dew-title dew-ucard__title' }, titleNode) : null,
        p.description ? h('p', { className: 'dew-ucard__desc' }, p.description) : null,
        p.children,
        p.badges ? h('div', { className: 'dew-ucard__badges' }, p.badges) : null,
        p.footer ? h('div', { className: 'dew-ucard__footer' }, p.footer) : null));
  }

  /* ---------- Skeleton ---------- */
  function Bone(w, hgt, cls, key) { return h('span', { key: key, className: cx('dew-bone', cls), style: { width: w, height: hgt } }); }
  function Skeleton(p) {
    var v = p.variant || 'text';
    var lines = p.lines || 3, kids;
    if (v === 'text') { kids = []; for (var i = 0; i < lines; i++) kids.push(Bone(i === lines - 1 ? '62%' : '100%', 16, 'dew-bone--line', i)); }
    else if (v === 'heading') kids = [Bone('88%', 40, null, 0), Bone('56%', 40, null, 1)];
    else if (v === 'media') kids = [h('span', { key: 0, className: cx('dew-bone', 'dew-bone--media', p.ratio === 'portrait' && 'dew-media--portrait', p.ratio === 'wide' && 'dew-media--wide') })];
    else if (v === 'story') kids = [h('span', { key: 0, className: cx('dew-bone', 'dew-bone--media', p.ratio === 'portrait' && 'dew-media--portrait') }), Bone('40%', 12, null, 1), Bone('82%', 22, null, 2), Bone('96px', 16, null, 3)];
    else if (v === 'feature') kids = [h('span', { key: 0, className: 'dew-skel__featuretext' }, Bone('45%', 12), Bone('92%', 64), Bone('70%', 64), Bone('80%', 16), Bone('60%', 16), Bone('140px', 16)), h('span', { key: 1, className: 'dew-bone dew-bone--media dew-media--portrait' })];
    else if (v === 'row') { kids = []; for (var j = 0; j < (p.cells || 4); j++) kids.push(Bone(j === 0 ? '70%' : '50%', 16, null, j)); }
    else kids = [Bone(p.width || '100%', p.height || 48, null, 0)];
    return h('div', { className: cx('dew', 'dew-skel', 'dew-skel--' + v, p.className), role: p.decorative ? undefined : 'status', 'aria-label': p.decorative ? undefined : (p.label || '불러오는 중'), 'aria-hidden': p.decorative ? 'true' : undefined, style: p.style }, kids);
  }

  /* ---------- Dialog / AlertDialog ---------- */
  function Dialog(p) {
    var titleId = useId('dlg'), descId = titleId + '-d';
    var panel = React.useRef(null);
    React.useEffect(function () {
      if (!p.open || p.inline) return;
      if (panel.current) panel.current.focus();
      function onKey(e) { if (e.key === 'Escape' && p.onClose) p.onClose(); }
      document.addEventListener('keydown', onKey);
      return function () { document.removeEventListener('keydown', onKey); };
    }, [p.open, p.inline]);
    if (!p.open) return null;
    return h('div', { className: cx('dew', 'dew-dialog', p.inline && 'dew-dialog--inline', p.className), onMouseDown: function (e) { if (e.target === e.currentTarget && p.onClose && p.dismissable !== false) p.onClose(); } },
      h('div', { ref: panel, tabIndex: -1, role: p.role || 'dialog', 'aria-modal': p.inline ? undefined : 'true', 'aria-labelledby': titleId, 'aria-describedby': p.description ? descId : undefined, className: cx('dew-dialog__panel', 'dew-dialog__panel--' + (p.size || 'md'), p.tone && 'dew-dialog__panel--' + p.tone) },
        h('div', { className: 'dew-dialog__head' },
          p.icon ? h(Icon, { name: p.icon, size: 24, tone: p.tone === 'danger' ? 'accent' : null, className: 'dew-dialog__icon' }) : null,
          p.eyebrow ? h('p', { className: 'dew-meta dew-eyebrow' }, p.eyebrow) : null,
          h('h2', { id: titleId, className: 'dew-heading dew-dialog__title' }, p.title),
          p.onClose && p.closable !== false ? h(Button, { variant: 'text', iconOnly: true, icon: 'close', label: '닫기', className: 'dew-dialog__close', onClick: p.onClose }) : null),
        p.description ? h('p', { id: descId, className: 'dew-dialog__desc' }, p.description) : null,
        p.children ? h('div', { className: 'dew-dialog__body' }, p.children) : null,
        p.footer ? h('div', { className: 'dew-dialog__foot' }, p.footer) : null));
  }
  function AlertDialog(p) {
    var danger = p.tone !== 'default';
    var err = p.error;
    var errId = useId('ad-err');
    var confirm = err
      ? h(Button, { key: 'o', variant: danger ? 'danger' : 'primary', icon: 'refresh', loading: p.loading, loadingLabel: p.loadingLabel, onClick: p.onRetry || p.onConfirm, 'aria-describedby': errId }, p.retryLabel || '다시 시도')
      : h(Button, { key: 'o', variant: danger ? 'danger' : 'primary', icon: danger ? 'trash' : null, loading: p.loading, loadingLabel: p.loadingLabel, onClick: p.onConfirm }, p.confirmLabel || '확인');
    return h(Dialog, { open: p.open, inline: p.inline, role: 'alertdialog', size: 'sm', tone: danger ? 'danger' : null, icon: danger ? 'alert' : 'info', eyebrow: p.eyebrow, title: p.title, description: p.description, onClose: p.onCancel, closable: false, dismissable: false,
      footer: [h(Button, { key: 'c', variant: 'secondary', onClick: p.onCancel, disabled: p.loading }, p.cancelLabel || '취소'), confirm] },
      err ? h('div', { className: 'dew-alert__error', role: 'alert', id: errId },
        h(Icon, { name: 'error', size: 20, tone: 'accent' }),
        h('div', { className: 'dew-alert__errtext' },
          h('p', { className: 'dew-alert__errtitle' }, h('span', { className: 'dew-sr' }, '오류: '), p.errorTitle || '처리하지 못했습니다'),
          h('p', { className: 'dew-alert__errmsg' }, err))) : null,
      p.children);
  }

  /* ---------- Menu ---------- */
  function Menu(p) {
    var st = React.useState(!!p.defaultOpen), open = p.open != null ? p.open : st[0];
    var menuId = useId('menu'), listRef = React.useRef(null);
    function setOpen(v) { st[1](v); if (p.onOpenChange) p.onOpenChange(v); }
    function onKey(e) {
      var items = listRef.current ? Array.prototype.slice.call(listRef.current.querySelectorAll('[role^="menuitem"]:not([aria-disabled="true"])')) : [];
      var i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); (items[i + 1] || items[0]).focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); (items[i - 1] || items[items.length - 1]).focus(); }
      if (e.key === 'Escape') setOpen(false);
    }
    var items = p.items || [];
    return h('div', { className: cx('dew', 'dew-menu', p.align === 'end' && 'dew-menu--end', p.className) },
      h(Button, { variant: p.triggerVariant || 'secondary', size: p.size || 'md', icon: 'chevron-down', iconPosition: 'end', 'aria-haspopup': 'menu', 'aria-expanded': String(open), 'aria-controls': open ? menuId : undefined, onClick: function () { setOpen(!open); } }, p.label),
      open ? h('ul', { ref: listRef, id: menuId, role: 'menu', 'aria-label': p.menuLabel || (typeof p.label === 'string' ? p.label : '메뉴'), className: cx('dew-menu__list', p.inline && 'dew-menu__list--inline'), onKeyDown: onKey },
        items.map(function (it, i) {
          if (it.separator) return h('li', { key: i, role: 'separator', className: 'dew-menu__sep' });
          var role = it.selected != null ? 'menuitemradio' : 'menuitem';
          return h('li', { key: i, role: role, tabIndex: it.disabled ? -1 : 0, 'aria-disabled': it.disabled ? 'true' : undefined, 'aria-checked': it.selected != null ? String(!!it.selected) : undefined,
            className: cx('dew-menu__item', it.danger && 'is-danger', it.selected && 'is-selected', it.disabled && 'is-disabled', forced(it.state)),
            onClick: function () { if (!it.disabled) { if (it.onSelect) it.onSelect(it); if (p.onSelect) p.onSelect(it); setOpen(false); } },
            onKeyDown: function (e) { if ((e.key === 'Enter' || e.key === ' ') && !it.disabled) { e.preventDefault(); e.currentTarget.click(); } } },
            h('span', { className: 'dew-menu__icon' }, it.selected ? h(Icon, { name: 'check', size: 20 }) : (it.icon ? h(Icon, { name: it.icon, size: 20, tone: it.danger ? 'accent' : null }) : null)),
            h('span', { className: 'dew-menu__text' }, h('span', { className: 'dew-menu__label' }, it.label),
              it.description ? h('span', { className: 'dew-meta' }, it.description) : null,
              it.disabled && it.disabledReason ? h('span', { className: 'dew-meta' }, it.disabledReason) : null));
        })) : null);
  }

  /* ---------- Table ---------- */
  function Table(p) {
    var cols = p.columns || [], rows = p.rows || [], sort = p.sort || {};
    var state = p.state || 'ready';
    function head(c) {
      var active = sort.key === c.key, dir = active ? sort.direction : null;
      var ariaSort = active ? (dir === 'asc' ? 'ascending' : 'descending') : (c.sortable ? 'none' : undefined);
      var inner = c.sortable ? h('button', { type: 'button', className: 'dew-table__sort', onClick: function () { if (p.onSort) p.onSort(c.key, active && dir === 'asc' ? 'desc' : 'asc'); } },
        h('span', null, c.label), h(Icon, { name: active ? (dir === 'asc' ? 'sort-asc' : 'sort-desc') : 'sort', size: 16 }), active ? h('span', { className: 'dew-sr' }, dir === 'asc' ? ' 오름차순 정렬됨' : ' 내림차순 정렬됨') : null) : c.label;
      return h('th', { key: c.key, scope: 'col', 'aria-sort': ariaSort, className: cx(c.align === 'end' && 'is-end', active && 'is-sorted'), style: c.width ? { width: c.width } : null }, inner);
    }
    function cell(r, c) {
      var v = r[c.key];
      var missing = v == null || v === '';
      return h('td', { key: c.key, className: cx(c.align === 'end' && 'is-end', missing && 'is-missing') }, missing ? [h('span', { key: 'd', 'aria-hidden': 'true' }, '—'), h('span', { key: 's', className: 'dew-sr' }, '정보 없음')] : (c.render ? c.render(v, r) : v));
    }
    var body;
    if (state === 'loading') { body = [0, 1, 2].map(function (i) { return h('tr', { key: i }, cols.map(function (c, j) { return h('td', { key: c.key }, h(Skeleton, { variant: 'block', height: 16, width: j === 0 ? '80%' : '56%', decorative: true })); })); }); }
    else if (state === 'empty' || state === 'error' || !rows.length) {
      var err = state === 'error';
      body = h('tr', null, h('td', { colSpan: cols.length, className: 'dew-table__state' },
        h('div', { className: 'dew-table__statebox', role: err ? 'alert' : 'status' },
          h(Icon, { name: err ? 'error' : 'search', size: 24, tone: err ? 'accent' : null }),
          h('p', { className: 'dew-table__statetitle' }, err ? (p.errorTitle || '목록을 불러오지 못했습니다') : (p.emptyTitle || '표시할 항목이 없습니다')),
          h('p', { className: 'dew-meta' }, err ? (p.errorMessage || '잠시 후 다시 시도해 주세요.') : (p.emptyMessage || '필터를 바꾸거나 전체 목록으로 돌아가세요.')),
          err && p.onRetry ? h(Button, { variant: 'secondary', size: 'sm', icon: 'refresh', onClick: p.onRetry }, '다시 시도') : (!err && p.emptyAction ? p.emptyAction : null))));
    } else body = rows.map(function (r, i) { return h('tr', { key: r.id || i, 'aria-selected': r.selected ? 'true' : undefined, className: r.selected ? 'is-selected' : null }, cols.map(function (c) { return cell(r, c); })); });
    return h('div', { className: cx('dew', 'dew-table-wrap', p.className), role: 'region', tabIndex: 0, 'aria-label': (p.caption || '표') + (p.scrollHint !== false ? ' (좁은 화면에서 가로 스크롤)' : ''), 'aria-busy': state === 'loading' ? 'true' : undefined },
      h('table', { className: 'dew-table', style: p.minWidth ? { minWidth: p.minWidth } : null },
        p.caption ? h('caption', null, h('span', { className: 'dew-title' }, p.caption), p.summary ? h('span', { className: 'dew-meta dew-table__summary' }, p.summary) : null) : null,
        h('thead', null, h('tr', null, cols.map(head))),
        h('tbody', null, body)));
  }

  /* ---------- Pagination ---------- */
  function range(page, total, sib) {
    var out = [], s = Math.max(2, page - sib), e = Math.min(total - 1, page + sib);
    out.push(1); if (s > 2) out.push('…'); for (var i = s; i <= e; i++) out.push(i); if (e < total - 1) out.push('…'); if (total > 1) out.push(total);
    return out;
  }
  function Pagination(p) {
    var total = Math.max(1, p.total || 1), page = Math.min(Math.max(1, p.page || 1), total), dis = !!p.disabled;
    function go(n) { return function (e) { if (e) e.preventDefault(); if (!dis && p.onChange) p.onChange(n); }; }
    var href = p.hrefFor || function () { return '#'; };
    function step(dir) {
      var n = dir === 'prev' ? page - 1 : page + 1, off = dis || n < 1 || n > total;
      var kids = dir === 'prev' ? [h(Icon, { key: 'i', name: 'chevron-left', size: 20 }), h('span', { key: 'l' }, '이전')] : [h('span', { key: 'l' }, '다음'), h(Icon, { key: 'i', name: 'chevron-right', size: 20 })];
      return off ? h('span', { className: 'dew-pg__step is-disabled', 'aria-disabled': 'true' }, kids) : h('a', { className: 'dew-pg__step', href: href(n), onClick: go(n), rel: dir }, kids);
    }
    return h('nav', { className: cx('dew', 'dew-pg', dis && 'is-disabled', p.className), 'aria-label': p.label || '페이지 이동', 'aria-busy': dis ? 'true' : undefined },
      step('prev'),
      h('ol', { className: 'dew-pg__pages' }, range(page, total, p.siblingCount == null ? 1 : p.siblingCount).map(function (n, i) {
        if (n === '…') return h('li', { key: 'e' + i, className: 'dew-pg__gap', 'aria-hidden': 'true' }, '…');
        var cur = n === page;
        return h('li', { key: n }, cur ? h('span', { className: 'dew-pg__num is-current', 'aria-current': 'page' }, h('span', { className: 'dew-sr' }, '현재 페이지 '), n)
          : dis ? h('span', { className: 'dew-pg__num is-disabled', 'aria-disabled': 'true' }, n)
          : h('a', { className: 'dew-pg__num', href: href(n), onClick: go(n) }, h('span', { className: 'dew-sr' }, '페이지 '), n));
      })),
      h('p', { className: 'dew-pg__status' }, h('span', { className: 'dew-sr' }, '현재 '), page, h('span', { 'aria-hidden': 'true' }, ' / '), h('span', { className: 'dew-sr' }, '페이지, 전체 '), total),
      step('next'));
  }

  /* ---------- Toast ---------- */
  var TOAST = { info: ['info', '안내'], success: ['check', '완료'], warning: ['alert', '주의'], error: ['error', '오류'] };
  function Toast(p) {
    var tone = p.tone || 'info', t = TOAST[tone];
    var assertive = tone === 'error' || tone === 'warning';
    return h('div', { className: cx('dew', 'dew-toast', 'dew-toast--' + tone, p.className), role: assertive ? 'alert' : 'status', 'aria-live': assertive ? 'assertive' : 'polite' },
      h('span', { className: 'dew-toast__icon' }, h(Icon, { name: t[0], size: 20, tone: tone === 'error' ? 'accent' : null })),
      h('div', { className: 'dew-toast__body' },
        h('p', { className: 'dew-meta dew-toast__tone' }, p.toneLabel || t[1]),
        h('p', { className: 'dew-toast__title' }, p.title),
        p.message ? h('p', { className: 'dew-toast__msg' }, p.message) : null,
        p.action ? h(Button, { variant: 'text', size: 'sm', onClick: p.action.onClick, className: 'dew-toast__action' }, p.action.label) : null),
      p.onClose ? h(Button, { variant: 'text', iconOnly: true, icon: 'close', label: '알림 닫기', size: 'sm', className: 'dew-toast__close', onClick: p.onClose }) : null);
  }
  function ToastRegion(p) { return h('div', { className: cx('dew', 'dew-toasts', p.inline && 'dew-toasts--inline', p.className), 'aria-label': '알림' }, p.children); }
  Toast.Region = ToastRegion;

  Object.assign(DEW, { Button: Button, TextField: TextField, Textarea: Textarea, Select: Select, Checkbox: Checkbox, Switch: Switch, Badge: Badge, Card: Card, Skeleton: Skeleton, Icon: Icon, Dialog: Dialog, Menu: Menu, Table: Table, Pagination: Pagination, Toast: Toast, ToastRegion: ToastRegion, AlertDialog: AlertDialog });
})();
