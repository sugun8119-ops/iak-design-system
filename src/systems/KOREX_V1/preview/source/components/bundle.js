/* @ds-bundle: {"format":4,"namespace":"KOREX","components":[{"name":"GlobalHeader"},{"name":"HeroSearch"},{"name":"SearchBar"},{"name":"CategoryNav"},{"name":"FilterPanel"},{"name":"ProductCard"},{"name":"ImageCard"},{"name":"ContentGrid"},{"name":"BrandStatement"},{"name":"CTA"},{"name":"Footer"},{"name":"Button"},{"name":"TextField"},{"name":"Textarea"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Badge"},{"name":"Card"},{"name":"Skeleton"},{"name":"Icon"},{"name":"Dialog"},{"name":"Menu"},{"name":"Table"},{"name":"Pagination"},{"name":"Toast"},{"name":"AlertDialog"}]} */
(function () {
  var React = window.React, h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function stateClass(s) { return s === 'hover' ? 'is-hover' : s === 'focus' ? 'is-focus' : s === 'pressed' ? 'is-pressed' : null; }
  var uid = 0;
  function useId(given, prefix) {
    var r = React.useRef(null);
    if (r.current == null) r.current = given || (prefix + '-' + (++uid));
    return r.current;
  }
  function useControlled(value, initial) {
    var st = React.useState(initial);
    var controlled = value !== undefined && value !== null;
    return [controlled ? value : st[0], function (v) { if (!controlled) st[1](v); }];
  }
  function sr(text) { return h('span', { className: 'kx-sr' }, text); }

  /* ---------- Icon (derived-extension: KOREX had only the text arrow "↗") ---------- */
  var PATHS = {
    'arrow-up-right': ['M6 14 14 6', 'M8 6h6v6'],
    'search': ['M13.2 13.2 17 17', 'C9 9 5.5'],
    'check': ['M4.5 10.5l4 4 7-8.5'],
    'close': ['M5 5l10 10', 'M15 5 5 15'],
    'chevron-down': ['M5 8l5 5 5-5'],
    'chevron-up': ['M5 12l5-5 5 5'],
    'chevron-left': ['M12 5 7 10l5 5'],
    'chevron-right': ['M8 5l5 5-5 5'],
    'alert': ['R3 3 14 14', 'M10 6.5V11', 'M10 13.3v.4'],
    'info': ['R3 3 14 14', 'M10 9v5', 'M10 6.3v.4'],
    'minus': ['M5 10h10'],
    'plus': ['M10 4v12', 'M4 10h12'],
    'image-off': ['R3 4 14 12', 'M3 13l4.5-4 3.5 3', 'M3 3l14 14'],
    'sort': ['M7 8l3-3 3 3', 'M7 12l3 3 3-3'],
    'sort-asc': ['M10 15V5', 'M6 9l4-4 4 4'],
    'sort-desc': ['M10 5v10', 'M6 11l4 4 4-4'],
    'more': ['D5 10', 'D10 10', 'D15 10'],
    'refresh': ['M15.5 8A6 6 0 1 0 16 11', 'M15.5 3.5V8H11'],
    'trash': ['M4 6h12', 'M8 6V4h4v2', 'M6 6l1 10h6l1-10'],
    'spinner': ['M10 3a7 7 0 1 1-7 7']
  };
  var ICON_NAMES = Object.keys(PATHS);
  function Icon(p) {
    var size = p.size || 20, list = PATHS[p.name] || PATHS.info;
    var kids = list.map(function (d, i) {
      if (d[0] === 'C') { var c = d.slice(1).trim().split(' ').map(Number); return h('circle', { key: i, cx: c[0], cy: c[1], r: c[2] }); }
      if (d[0] === 'R') { var r = d.slice(1).trim().split(' ').map(Number); return h('rect', { key: i, x: r[0], y: r[1], width: r[2], height: r[3], rx: 1 }); }
      if (d[0] === 'D') { var q = d.slice(1).trim().split(' ').map(Number); return h('circle', { key: i, cx: q[0], cy: q[1], r: 1.4, fill: 'currentColor', stroke: 'none' }); }
      return h('path', { key: i, d: d });
    });
    var a = p.label ? { role: 'img', 'aria-label': p.label } : { 'aria-hidden': 'true', focusable: 'false' };
    return h('svg', Object.assign({
      className: cx('kx-icon', p.name === 'spinner' && 'kx-spin', p.className), width: size, height: size, viewBox: '0 0 20 20',
      fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square', strokeLinejoin: 'miter'
    }, a), kids);
  }

  /* ---------- Skeleton (derived-extension) ---------- */
  function Skeleton(p) {
    var variant = p.variant || 'text';
    var lines = p.lines || (variant === 'text' ? 3 : 1);
    var parts = [];
    if (variant === 'media') parts.push(h('span', { key: 'm', className: cx('kx-skel', 'kx-skel-media', p.tall && 'kx-skel-tall') }));
    else if (variant === 'block') parts.push(h('span', { key: 'b', className: 'kx-skel kx-skel-block', style: { height: p.height || 48, width: p.width } }));
    else for (var i = 0; i < lines; i++) parts.push(h('span', { key: i, className: cx('kx-skel', 'kx-skel-line', p.size === 'title' && 'kx-skel-title', p.size === 'display' && 'kx-skel-display'), style: { width: i === lines - 1 && lines > 1 ? '62%' : (p.width || '100%') } }));
    return h('div', { className: cx('kx', 'kx-skeleton', p.className), role: p.silent ? undefined : 'status', 'aria-live': p.silent ? undefined : 'polite' },
      p.silent ? null : sr(p.label || '불러오는 중'), h('span', { 'aria-hidden': 'true', className: 'kx-skel-stack' }, parts));
  }

  /* internal: self-drawn media placeholder (replace with licensed photography) */
  function Media(p) {
    if (p.missing) {
      return h('div', { className: cx('kx-media', 'kx-media-missing', p.tall && 'kx-media-tall'), role: 'img', 'aria-label': p.missingLabel || '이미지 없음' },
        h(Icon, { name: 'image-off', size: 24 }), h('span', { className: 'kx-media-missing-text', 'aria-hidden': 'true' }, p.missingLabel || '이미지 준비 중'));
    }
    return h('div', {
      className: cx('kx-media', p.tone && p.tone !== 'default' && 'kx-media-' + p.tone, p.tall && 'kx-media-tall'),
      role: 'img', 'aria-label': p.label || '미디어 자리표시자'
    });
  }

  /* ---------- existing KOREX components ---------- */
  function CTA(p) {
    var variant = p.variant || 'primary';
    var cls = cx('kx', 'kx-cta', 'kx-cta-' + variant, stateClass(p.state), p.className);
    if (p.href) return h('a', { className: cls, href: p.href }, p.children);
    return h('button', { type: p.type || 'button', className: cls, onClick: p.onClick, disabled: p.disabled }, p.children);
  }

  function GlobalHeader(p) {
    var links = p.links || [];
    return h('header', { className: cx('kx', 'kx-header', p.className) },
      h('a', { className: 'kx-brand', href: p.brandHref || '#' }, p.brand || 'BRAND'),
      h('nav', { 'aria-label': p.navLabel || '주 탐색' },
        links.map(function (l, i) {
          return h('a', { key: i, href: l.href || '#', 'aria-current': l.current ? 'page' : undefined }, l.label);
        })));
  }

  function SearchBar(p) {
    var id = useId(p.id, 'kx-q');
    var st = React.useState(p.defaultValue || '');
    var controlled = p.value != null;
    var val = controlled ? p.value : st[0];
    function change(e) { if (!controlled) st[1](e.target.value); if (p.onChange) p.onChange(e.target.value); }
    function submit(e) { e.preventDefault(); if (p.onSubmit) p.onSubmit(val); }
    return h('form', { className: cx('kx', 'kx-search', p.className), role: 'search', onSubmit: submit },
      h('label', { htmlFor: id, className: 'kx-search-label' }, p.label || '검색'),
      h('div', { className: 'kx-search-row' },
        h('input', {
          id: id, type: 'search', className: cx('kx-input', p.state === 'focus' && 'is-focus'),
          value: val, onChange: change, placeholder: p.placeholder, autoComplete: 'off', disabled: p.disabled
        }),
        h(CTA, { type: 'submit', disabled: p.disabled }, p.buttonLabel || '찾기 ↗')));
  }

  function HeroSearch(p) {
    return h('section', { className: cx('kx', 'kx-hero', p.className) },
      h('div', null,
        p.meta ? h('p', { className: 'kx-meta' }, p.meta) : null,
        h('h1', { className: 'kx-display' }, p.title),
        p.text ? h('p', { className: 'kx-hero-text' }, p.text) : null,
        h(SearchBar, Object.assign({ label: '검색' }, p.search || {}))),
      h(Media, { tall: true, tone: 'mint', missing: p.imageMissing, label: p.mediaLabel || '히어로 미디어 자리표시자' }));
  }

  function CategoryNav(p) {
    var items = p.items || [];
    var st = React.useState(p.defaultSelected != null ? p.defaultSelected : (items[0] && items[0].value));
    var sel = p.selected != null ? p.selected : st[0];
    return h('nav', { className: cx('kx', 'kx-catnav', p.className), 'aria-label': p.label || '카테고리' },
      h('ul', null, items.map(function (it, i) {
        var on = it.value === sel;
        var cls = cx('kx-catnav-item', stateClass(it.state));
        if (it.href) return h('li', { key: i }, h('a', { className: cls, href: it.href, 'aria-current': on ? 'page' : undefined }, it.label));
        return h('li', { key: i }, h('button', {
          type: 'button', className: cls, 'aria-pressed': on ? 'true' : 'false',
          onClick: function () { if (p.selected == null) st[1](it.value); if (p.onSelect) p.onSelect(it.value); }
        }, it.label));
      })));
  }

  function FilterPanel(p) {
    var id = useId(p.id, 'kx-filter');
    var options = p.options || [];
    var allValue = p.allValue || 'all';
    var st = React.useState(p.defaultValue || allValue);
    var controlled = p.value != null;
    var val = controlled ? p.value : st[0];
    var count = p.count;
    var countText = p.countLabel ? p.countLabel(count) : (count + '개 결과');
    function set(v) { if (!controlled) st[1](v); if (p.onChange) p.onChange(v); }
    return h('div', { className: cx('kx', 'kx-filter', val !== allValue && 'is-active', count === 0 && 'is-empty', p.className) },
      h('label', { htmlFor: id }, p.label || '분류',
        h('select', { id: id, className: 'kx-select', value: val, disabled: p.disabled, onChange: function (e) { set(e.target.value); } },
          options.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); }))),
      h(CTA, { variant: 'secondary', disabled: p.disabled, onClick: function () { set(allValue); if (p.onReset) p.onReset(); } }, p.resetLabel || '초기화'),
      h('p', { className: 'kx-filter-count', role: 'status', 'aria-live': 'polite' }, countText));
  }

  function ProductCard(p) {
    if (p.loading) {
      return h('article', { className: cx('kx', 'kx-card', 'is-loading', p.className), 'aria-busy': 'true' },
        h(Skeleton, { variant: 'media', silent: true }),
        h('div', { className: 'kx-card-text' }, h(Skeleton, { lines: 1, width: '40%', silent: true }), h(Skeleton, { lines: 1, size: 'title', width: '70%', silent: true })),
        sr(p.loadingLabel || '제품 정보를 불러오는 중'));
    }
    var titleText = typeof p.title === 'string' ? p.title : undefined;
    return h('article', { className: cx('kx', 'kx-card', p.className) },
      h('a', { className: cx('kx-card-link', stateClass(p.state)), href: p.href || '#' },
        h(Media, { tone: p.media, missing: p.imageMissing, label: p.mediaLabel || (titleText ? titleText + '의 미디어 자리표시자' : '제품 미디어 자리표시자') }),
        h('div', { className: 'kx-card-text' },
          p.category ? h('p', { className: 'kx-meta' }, p.category) : null,
          h('h3', { className: 'kx-title' }, p.title))));
  }

  function ImageCard(p) {
    return h('figure', { className: cx('kx', 'kx-imagecard', p.className) },
      h(Media, { tone: p.media, tall: p.tall, missing: p.imageMissing, label: p.mediaLabel || '이미지 자리표시자' }),
      p.caption ? h('figcaption', { className: 'kx-meta' }, p.caption) : null);
  }

  function ContentGrid(p) {
    var kids = React.Children.toArray(p.children);
    if (p.empty || kids.length === 0) {
      return h('div', { className: cx('kx', 'kx-empty', p.className), role: 'status' },
        h('h2', { className: 'kx-heading' }, p.emptyTitle || '일치하는 항목이 없습니다.'),
        h('p', null, p.emptyText || '다른 검색어를 입력하거나 필터를 초기화해 주세요.'),
        p.emptyAction ? h('div', { className: 'kx-empty-action' }, p.emptyAction) : null);
    }
    return h('div', { className: cx('kx', 'kx-grid', p.className), 'aria-busy': p.busy ? 'true' : undefined }, kids);
  }

  function BrandStatement(p) {
    return h('section', { className: cx('kx', 'kx-statement', p.className) },
      h('div', { className: 'kx-statement-inner' },
        p.meta ? h('p', { className: 'kx-meta' }, p.meta) : null,
        h('h2', { className: 'kx-heading' }, p.title),
        p.children ? h('p', { className: 'kx-statement-body' }, p.children) : null));
  }

  function Footer(p) {
    return h('footer', { className: cx('kx', 'kx-footer', p.className) },
      h('span', { className: 'kx-footer-brand' }, p.brand || 'BRAND'),
      p.note ? h('span', { className: 'kx-meta' }, p.note) : null);
  }

  /* ---------- IAK coverage families, drawn in KOREX style ---------- */
  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'md';
    var busy = !!p.loading, off = !!p.disabled || busy;
    var cls = cx('kx', 'kx-btn', 'kx-btn-' + variant, 'kx-btn-' + size, stateClass(p.state), busy && 'is-loading', p.iconOnly && 'kx-btn-icon', p.block && 'kx-btn-block', p.className);
    var iconSize = size === 'sm' ? 16 : 20;
    var content = [
      busy ? h(Icon, { key: 'sp', name: 'spinner', size: iconSize }) : (p.icon ? h(Icon, { key: 'i', name: p.icon, size: iconSize }) : null),
      p.iconOnly ? h('span', { key: 'l', className: 'kx-sr' }, p.label) : h('span', { key: 'l', className: 'kx-btn-label' }, busy && p.loadingLabel ? p.loadingLabel : p.children),
      !busy && p.iconEnd ? h(Icon, { key: 'e', name: p.iconEnd, size: iconSize }) : null
    ];
    if (p.href && !off) return h('a', { className: cls, href: p.href, 'aria-label': p.iconOnly ? p.label : undefined }, content);
    return h('button', {
      type: p.type || 'button', className: cls, onClick: off ? undefined : p.onClick, disabled: off,
      'aria-busy': busy ? 'true' : undefined, 'aria-pressed': p.pressed != null ? String(!!p.pressed) : undefined,
      'aria-haspopup': p.haspopup, 'aria-expanded': p.expanded, 'aria-controls': p.controls, id: p.id, ref: p.buttonRef,
      onKeyDown: p.onKeyDown
    }, content);
  }

  function Field(p) {
    var descId = p.description ? p.id + '-desc' : null, msgId = (p.error || p.success) ? p.id + '-msg' : null;
    return h('div', { className: cx('kx', 'kx-field', p.error && 'is-error', p.success && 'is-success', p.disabled && 'is-disabled', p.readOnly && 'is-readonly', p.className) },
      h('div', { className: 'kx-field-head' },
        h('label', { htmlFor: p.id, className: 'kx-label' }, p.label,
          p.required ? h('span', { className: 'kx-req' }, ' 필수') : null,
          p.readOnly ? h('span', { className: 'kx-req' }, ' 읽기 전용') : null),
        p.counter ? h('span', { className: 'kx-counter', 'aria-live': 'polite' }, p.counter) : null),
      p.description ? h('p', { id: descId, className: 'kx-help' }, p.description) : null,
      p.render([descId, msgId].filter(Boolean).join(' ') || undefined),
      p.error ? h('p', { id: msgId, className: 'kx-msg kx-msg-error' }, h(Icon, { name: 'alert', size: 16 }), h('span', null, h('strong', null, '오류 '), p.error)) : null,
      !p.error && p.success ? h('p', { id: msgId, className: 'kx-msg kx-msg-success' }, h(Icon, { name: 'check', size: 16 }), h('span', null, p.success)) : null);
  }

  function TextField(p) {
    var id = useId(p.id, 'kx-tf');
    var v = useControlled(p.value, p.defaultValue || '');
    return h(Field, Object.assign({}, p, { id: id, render: function (desc) {
      return h('input', {
        id: id, type: p.type || 'text', className: cx('kx-input', 'kx-control', p.size === 'sm' && 'kx-control-sm', p.state === 'focus' && 'is-focus'),
        value: v[0], placeholder: p.placeholder, required: p.required, readOnly: p.readOnly, disabled: p.disabled,
        'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': desc, autoComplete: p.autoComplete || 'off', inputMode: p.inputMode,
        onChange: function (e) { v[1](e.target.value); if (p.onChange) p.onChange(e.target.value); }
      });
    } }));
  }

  function Textarea(p) {
    var id = useId(p.id, 'kx-ta');
    var v = useControlled(p.value, p.defaultValue || '');
    var counter = p.maxLength ? (v[0].length + ' / ' + p.maxLength + '자') : null;
    return h(Field, Object.assign({}, p, { id: id, counter: counter, render: function (desc) {
      return h('textarea', {
        id: id, className: cx('kx-input', 'kx-control', 'kx-textarea', p.state === 'focus' && 'is-focus'), rows: p.rows || 4,
        value: v[0], placeholder: p.placeholder, required: p.required, readOnly: p.readOnly, disabled: p.disabled, maxLength: p.maxLength,
        'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': desc,
        onChange: function (e) { v[1](e.target.value); if (p.onChange) p.onChange(e.target.value); }
      });
    } }));
  }

  function Select(p) {
    var id = useId(p.id, 'kx-sel');
    var v = useControlled(p.value, p.defaultValue != null ? p.defaultValue : '');
    return h(Field, Object.assign({}, p, { id: id, render: function (desc) {
      return h('div', { className: 'kx-select-wrap' },
        h('select', {
          id: id, className: cx('kx-select', 'kx-control', p.state === 'focus' && 'is-focus'), value: v[0], required: p.required, disabled: p.disabled || p.readOnly,
          'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': desc,
          onChange: function (e) { v[1](e.target.value); if (p.onChange) p.onChange(e.target.value); }
        },
          p.placeholder ? h('option', { value: '', disabled: true }, p.placeholder) : null,
          (p.options || []).map(function (o) { return h('option', { key: o.value, value: o.value, disabled: o.disabled }, o.label); })),
        h(Icon, { name: 'chevron-down', className: 'kx-select-icon' }));
    } }));
  }

  function Checkbox(p) {
    var id = useId(p.id, 'kx-cb');
    var v = useControlled(p.checked, !!p.defaultChecked);
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; });
    var descId = p.description ? id + '-desc' : null, msgId = p.error ? id + '-msg' : null;
    var on = v[0];
    return h('div', { className: cx('kx', 'kx-check', p.error && 'is-error', p.disabled && 'is-disabled', p.className) },
      h('div', { className: 'kx-check-row' },
        h('span', { className: cx('kx-check-box', on && 'is-on', p.indeterminate && 'is-mixed', p.state === 'focus' && 'is-focus') },
          h('input', {
            ref: ref, id: id, type: 'checkbox', className: 'kx-check-input', checked: on, disabled: p.disabled, required: p.required,
            'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': [descId, msgId].filter(Boolean).join(' ') || undefined,
            onChange: function (e) { v[1](e.target.checked); if (p.onChange) p.onChange(e.target.checked); }
          }),
          p.indeterminate ? h(Icon, { name: 'minus', size: 16 }) : (on ? h(Icon, { name: 'check', size: 16 }) : null)),
        h('label', { htmlFor: id, className: 'kx-check-label' }, p.label, p.required ? h('span', { className: 'kx-req' }, ' 필수') : null)),
      p.description ? h('p', { id: descId, className: 'kx-help kx-check-help' }, p.description) : null,
      p.error ? h('p', { id: msgId, className: 'kx-msg kx-msg-error kx-check-help' }, h(Icon, { name: 'alert', size: 16 }), h('span', null, h('strong', null, '오류 '), p.error)) : null);
  }

  function Switch(p) {
    var id = useId(p.id, 'kx-sw');
    var v = useControlled(p.checked, !!p.defaultChecked);
    var on = v[0];
    function toggle() { if (p.disabled || p.loading) return; v[1](!on); if (p.onChange) p.onChange(!on); }
    return h('div', { className: cx('kx', 'kx-switch', p.disabled && 'is-disabled', p.className) },
      h('div', { className: 'kx-switch-text' },
        h('span', { id: id + '-label', className: 'kx-label', onClick: toggle }, p.label),
        p.description ? h('p', { id: id + '-desc', className: 'kx-help' }, p.description) : null),
      h('button', {
        id: id, type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', 'aria-labelledby': id + '-label',
        'aria-describedby': p.description ? id + '-desc' : undefined, disabled: p.disabled, 'aria-busy': p.loading ? 'true' : undefined,
        className: cx('kx-switch-btn', on && 'is-on', stateClass(p.state)), onClick: toggle
      },
        h('span', { className: 'kx-switch-track', 'aria-hidden': 'true' }, h('span', { className: 'kx-switch-thumb' }, p.loading ? h(Icon, { name: 'spinner', size: 12 }) : null)),
        h('span', { className: 'kx-switch-state', 'aria-hidden': 'true' }, on ? (p.onLabel || '켜짐') : (p.offLabel || '꺼짐'))));
  }

  var TONE_ICON = { success: 'check', warning: 'alert', error: 'close', info: 'info' };
  var TONE_WORD = { neutral: '일반', brand: '브랜드', info: '안내', success: '완료', warning: '주의', error: '오류' };
  function Badge(p) {
    var tone = p.tone || 'neutral';
    var icon = p.icon === false ? null : (p.icon || TONE_ICON[tone]);
    var title = typeof p.children === 'string' ? p.children : undefined;
    return h('span', { className: cx('kx', 'kx-badge', 'kx-badge-' + tone, p.size === 'sm' && 'kx-badge-sm', p.className), title: title },
      icon ? h(Icon, { name: icon, size: 12 }) : null,
      h('span', { className: 'kx-badge-text' }, p.children));
  }

  function Card(p) {
    var variant = p.variant || 'outlined';
    if (p.loading) {
      return h('article', { className: cx('kx', 'kx-cardbox', 'kx-cardbox-' + variant, p.className), 'aria-busy': 'true' },
        p.media !== false ? h(Skeleton, { variant: 'media', silent: true }) : null,
        h(Skeleton, { lines: 1, width: '35%', silent: true }), h(Skeleton, { lines: 1, size: 'title', width: '80%', silent: true }), h(Skeleton, { lines: 2, silent: true }),
        sr(p.loadingLabel || '카드 내용을 불러오는 중'));
    }
    var titleText = typeof p.title === 'string' ? p.title : undefined;
    var title = p.href ? h('a', { href: p.href, className: 'kx-cardbox-link' }, p.title) : p.title;
    return h('article', { className: cx('kx', 'kx-cardbox', 'kx-cardbox-' + variant, p.href && 'is-link', p.selected && 'is-selected', stateClass(p.state), p.className), 'aria-current': p.selected ? 'true' : undefined },
      p.selected ? h(Badge, { tone: 'brand', icon: 'check', className: 'kx-cardbox-flag' }, p.selectedLabel || '선택됨') : null,
      p.media ? h(Media, { tone: p.media.tone, tall: p.media.tall, missing: p.media.missing, label: p.media.label || (titleText ? titleText + ' 이미지 자리표시자' : undefined) }) : null,
      p.meta ? h('p', { className: 'kx-meta' }, p.meta) : null,
      h('h3', { className: 'kx-title kx-clamp2', title: titleText }, title),
      p.children ? h('div', { className: 'kx-cardbox-body' }, p.children) : null,
      p.footer ? h('div', { className: 'kx-cardbox-foot' }, p.footer) : null);
  }

  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function Dialog(p) {
    var id = useId(p.id, 'kx-dlg');
    var panel = React.useRef(null);
    React.useEffect(function () {
      if (!p.open || p.contained || !panel.current) return;
      var prev = document.activeElement;
      var first = panel.current.querySelector('[data-autofocus]') || panel.current;
      first.focus();
      return function () { if (prev && prev.focus) prev.focus(); };
    }, [p.open, p.contained]);
    if (!p.open) return null;
    function close() { if (p.onClose && !p.busy) p.onClose(); }
    function keys(e) {
      if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
      if (e.key !== 'Tab' || !panel.current) return;
      var f = panel.current.querySelectorAll(FOCUSABLE); if (!f.length) return;
      var a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
    return h('div', { className: cx('kx', 'kx-overlay', p.contained && 'is-contained', p.className), onMouseDown: function (e) { if (e.target === e.currentTarget && p.dismissible !== false) close(); } },
      h('div', {
        ref: panel, role: p.role || 'dialog', 'aria-modal': 'true', 'aria-labelledby': id + '-t', 'aria-describedby': p.description ? id + '-d' : undefined,
        tabIndex: -1, className: cx('kx-dialog', 'kx-dialog-' + (p.size || 'md')), onKeyDown: keys
      },
        h('div', { className: 'kx-dialog-head' },
          p.icon || null,
          h('div', { className: 'kx-dialog-titles' },
            h('h2', { id: id + '-t', className: 'kx-title' }, p.title),
            p.description ? h('p', { id: id + '-d', className: 'kx-dialog-desc' }, p.description) : null),
          p.hideClose ? null : h(Button, { variant: 'ghost', size: 'md', iconOnly: true, icon: 'close', label: p.closeLabel || '닫기', onClick: close, className: 'kx-dialog-close' })),
        p.children ? h('div', { className: 'kx-dialog-body' }, p.children) : null,
        p.footer ? h('div', { className: 'kx-dialog-foot' }, p.footer) : null));
  }

  function AlertDialog(p) {
    var danger = p.tone !== 'neutral';
    return h(Dialog, {
      open: p.open, contained: p.contained, size: 'sm', role: 'alertdialog', title: p.title, description: p.description,
      onClose: p.onCancel, dismissible: false, hideClose: true, busy: p.loading, className: p.className,
      icon: h('span', { className: cx('kx-alert-mark', danger && 'is-danger') }, h(Icon, { name: danger ? 'alert' : 'info', size: 20 })),
      footer: [
        h(Button, { key: 'c', variant: 'secondary', onClick: p.onCancel, disabled: p.loading, className: 'kx-alert-cancel' }, p.cancelLabel || '취소'),
        h(Button, { key: 'o', variant: danger ? 'danger' : 'primary', icon: danger ? 'trash' : undefined, loading: p.loading, loadingLabel: p.loadingLabel || '처리 중…', onClick: p.onConfirm }, p.confirmLabel || '확인')
      ]
    }, p.error ? h('p', { className: 'kx-msg kx-msg-error', role: 'alert' }, h(Icon, { name: 'alert', size: 16 }), h('span', null, h('strong', null, '오류 '), p.error)) : p.children);
  }

  function Menu(p) {
    var id = useId(p.id, 'kx-menu');
    var o = useControlled(p.open, !!p.defaultOpen);
    var open = o[0];
    var wrap = React.useRef(null), trig = React.useRef(null);
    var items = p.items || [];
    function setOpen(v) { o[1](v); if (p.onOpenChange) p.onOpenChange(v); }
    React.useEffect(function () {
      if (!open || p.inline) return;
      function away(e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); }
      document.addEventListener('mousedown', away);
      return function () { document.removeEventListener('mousedown', away); };
    });
    function move(e) {
      var list = wrap.current ? Array.prototype.slice.call(wrap.current.querySelectorAll('[role^="menuitem"]:not([aria-disabled="true"])')) : [];
      var i = list.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); (list[i + 1] || list[0]).focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); (list[i - 1] || list[list.length - 1]).focus(); }
      else if (e.key === 'Home') { e.preventDefault(); list[0] && list[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); list[list.length - 1] && list[list.length - 1].focus(); }
      else if (e.key === 'Escape') { setOpen(false); if (trig.current) trig.current.focus(); }
    }
    return h('div', { className: cx('kx', 'kx-menu', p.inline && 'is-inline', p.className), ref: wrap, onKeyDown: move },
      h(Button, {
        id: id + '-btn', variant: p.triggerVariant || 'secondary', size: p.size || 'md', iconEnd: 'chevron-down', haspopup: 'menu', expanded: open ? 'true' : 'false', controls: open ? id : undefined,
        buttonRef: trig, disabled: p.disabled, onClick: function () { setOpen(!open); },
        onKeyDown: function (e) { if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true); } }
      }, p.label),
      open ? h('ul', { id: id, role: 'menu', 'aria-labelledby': id + '-btn', className: 'kx-menu-list' }, items.map(function (it, i) {
        if (it.divider) return h('li', { key: 'd' + i, role: 'separator', className: 'kx-menu-sep' });
        var selectable = it.selected != null;
        return h('li', { key: i, role: 'none' }, h('button', {
          type: 'button', role: selectable ? 'menuitemradio' : 'menuitem', 'aria-checked': selectable ? String(!!it.selected) : undefined,
          'aria-disabled': it.disabled ? 'true' : undefined, tabIndex: -1,
          className: cx('kx-menu-item', it.danger && 'is-danger', it.selected && 'is-selected', stateClass(it.state)),
          onClick: function () { if (it.disabled) return; if (p.onSelect) p.onSelect(it.value); if (!p.inline) setOpen(false); }
        },
          h('span', { className: 'kx-menu-icon' }, it.selected ? h(Icon, { name: 'check', size: 16 }) : (it.icon ? h(Icon, { name: it.icon, size: 16 }) : null)),
          h('span', { className: 'kx-menu-text' }, h('span', { className: 'kx-menu-label' }, it.label), it.description ? h('span', { className: 'kx-menu-desc' }, it.description) : null),
          it.disabled && it.disabledReason ? h('span', { className: 'kx-menu-desc kx-menu-note' }, it.disabledReason) : null));
      })) : null);
  }

  function isMissing(v) { return v === null || v === undefined || v === ''; }
  function Table(p) {
    var cols = p.columns || [];
    var s = useControlled(p.sort, p.defaultSort || null);
    var sort = s[0];
    var rows = (p.rows || []).slice();
    if (sort && !p.sort && !p.manualSort) {
      rows.sort(function (a, b) {
        var x = a[sort.key], y = b[sort.key];
        if (isMissing(x)) return 1; if (isMissing(y)) return -1;
        var r = (typeof x === 'number' && typeof y === 'number') ? x - y : String(x).localeCompare(String(y), 'ko', { numeric: true });
        return sort.dir === 'desc' ? -r : r;
      });
    }
    function toggle(key) {
      var next = !sort || sort.key !== key ? { key: key, dir: 'asc' } : { key: key, dir: sort.dir === 'asc' ? 'desc' : 'asc' };
      s[1](next); if (p.onSortChange) p.onSortChange(next);
    }
    var head = h('thead', null, h('tr', null, cols.map(function (c) {
      var active = sort && sort.key === c.key;
      var ariaSort = c.sortable ? (active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined;
      return h('th', { key: c.key, scope: 'col', 'aria-sort': ariaSort, className: cx(c.align === 'end' && 'is-end'), style: { width: c.width } },
        c.sortable ? h('button', { type: 'button', className: cx('kx-th-sort', active && 'is-active'), onClick: function () { toggle(c.key); }, disabled: p.state === 'loading' },
          h('span', null, c.label), h(Icon, { name: active ? (sort.dir === 'asc' ? 'sort-asc' : 'sort-desc') : 'sort', size: 16 }),
          sr(active ? (sort.dir === 'asc' ? ' 오름차순 정렬됨' : ' 내림차순 정렬됨') : ' 정렬 가능')) : c.label);
    })));
    var body;
    var span = cols.length;
    if (p.state === 'loading') {
      body = h('tbody', null, Array.apply(null, Array(p.loadingRows || 3)).map(function (_, i) {
        return h('tr', { key: i, 'aria-hidden': 'true' }, cols.map(function (c, j) { return h('td', { key: c.key }, h('span', { className: 'kx-skel kx-skel-line', style: { width: (j === 0 ? 70 : 45 + ((i + j) % 3) * 15) + '%' } })); }));
      }));
    } else if (p.state === 'error' || p.state === 'empty' || rows.length === 0) {
      var isErr = p.state === 'error';
      body = h('tbody', null, h('tr', null, h('td', { colSpan: span, className: 'kx-table-msg' },
        h('div', { role: isErr ? 'alert' : 'status', className: cx('kx-table-state', isErr && 'is-error') },
          h(Icon, { name: isErr ? 'alert' : 'search', size: 24 }),
          h('div', null,
            h('p', { className: 'kx-table-state-title' }, isErr ? (p.errorTitle || '표를 불러오지 못했습니다.') : (p.emptyTitle || '표시할 항목이 없습니다.')),
            h('p', { className: 'kx-help' }, isErr ? (p.errorText || '잠시 후 다시 시도해 주세요.') : (p.emptyText || '조건을 바꾸거나 초기화해 주세요.'))),
          isErr && p.onRetry ? h(Button, { variant: 'secondary', size: 'sm', icon: 'refresh', onClick: p.onRetry }, p.retryLabel || '다시 시도') : (!isErr && p.emptyAction ? p.emptyAction : null)))));
    } else {
      body = h('tbody', null, rows.map(function (r, i) {
        var key = p.rowKey ? r[p.rowKey] : i;
        return h('tr', { key: key, 'aria-selected': p.selectedKey != null ? String(key === p.selectedKey) : undefined, className: cx(p.selectedKey != null && key === p.selectedKey && 'is-selected') }, cols.map(function (c, j) {
          var v = r[c.key];
          var cell = isMissing(v) ? [h('span', { key: 'm', 'aria-hidden': 'true', className: 'kx-missing' }, '—'), h('span', { key: 's', className: 'kx-sr' }, '값 없음')]
            : (c.render ? c.render(v, r) : v);
          var Tag = j === 0 && p.rowHeader !== false ? 'th' : 'td';
          return h(Tag, { key: c.key, scope: Tag === 'th' ? 'row' : undefined, className: cx(c.align === 'end' && 'is-end', c.truncate && 'is-truncate'), title: c.truncate && typeof v === 'string' ? v : undefined },
            c.truncate ? h('span', { className: 'kx-trunc' }, cell) : cell);
        }));
      }));
    }
    var table = h('table', { className: 'kx-table', style: { minWidth: p.minWidth }, 'aria-busy': p.state === 'loading' ? 'true' : undefined },
      p.caption ? h('caption', { className: cx(p.captionHidden && 'kx-sr') }, p.caption) : null, head, body);
    return h('div', { className: cx('kx', 'kx-table-block', p.className) },
      p.state === 'loading' ? h('p', { className: 'kx-sr', role: 'status' }, '표를 불러오는 중') : null,
      h('div', { className: 'kx-table-wrap', tabIndex: p.minWidth ? 0 : undefined, role: p.minWidth ? 'region' : undefined, 'aria-label': p.minWidth ? (p.caption || '표') + ' — 좌우로 스크롤' : undefined }, table),
      p.minWidth ? h('p', { className: 'kx-table-hint' }, h(Icon, { name: 'chevron-right', size: 16 }), '좁은 화면에서는 표를 좌우로 스크롤하세요') : null);
  }

  function pageList(page, total) {
    if (total <= 7) { var a = []; for (var i = 1; i <= total; i++) a.push(i); return a; }
    var out = [1];
    var lo = Math.max(2, page - 1), hi = Math.min(total - 1, page + 1);
    if (page <= 3) { lo = 2; hi = 4; } if (page >= total - 2) { lo = total - 3; hi = total - 1; }
    if (lo > 2) out.push('…l');
    for (var j = lo; j <= hi; j++) out.push(j);
    if (hi < total - 1) out.push('…r');
    out.push(total); return out;
  }
  function Pagination(p) {
    var total = Math.max(1, p.total || 1);
    var cur = useControlled(p.page, p.defaultPage || 1);
    var page = Math.min(Math.max(1, cur[0]), total);
    var off = !!p.disabled;
    function go(n) { if (off || n < 1 || n > total || n === page) return; cur[1](n); if (p.onChange) p.onChange(n); }
    return h('nav', { className: cx('kx', 'kx-pager', off && 'is-disabled', p.className), 'aria-label': p.label || '페이지 이동' },
      h(Button, { variant: 'secondary', size: 'md', icon: 'chevron-left', disabled: off || page === 1, onClick: function () { go(page - 1); }, className: 'kx-pager-step' }, p.prevLabel || '이전'),
      h('ol', { className: 'kx-pager-list' }, pageList(page, total).map(function (n) {
        if (typeof n === 'string') return h('li', { key: n, className: 'kx-pager-gap', 'aria-hidden': 'true' }, '…');
        var on = n === page;
        return h('li', { key: n }, h('button', {
          type: 'button', className: cx('kx-pager-num', on && 'is-current'), 'aria-current': on ? 'page' : undefined, disabled: off,
          'aria-label': n + '페이지', onClick: function () { go(n); }
        }, n));
      })),
      h('p', { className: 'kx-pager-status' }, page + ' / ' + total + ' 페이지'),
      h(Button, { variant: 'secondary', size: 'md', iconEnd: 'chevron-right', disabled: off || page === total, onClick: function () { go(page + 1); }, className: 'kx-pager-step' }, p.nextLabel || '다음'));
  }

  function Toast(p) {
    var tone = p.tone || 'info';
    return h('div', { className: cx('kx', 'kx-toast', 'kx-toast-' + tone, p.inline && 'is-inline', p.className), role: tone === 'error' ? 'alert' : 'status', 'aria-live': tone === 'error' ? 'assertive' : 'polite' },
      h('span', { className: 'kx-toast-mark' }, h(Icon, { name: TONE_ICON[tone], size: 20 })),
      h('div', { className: 'kx-toast-body' },
        h('p', { className: 'kx-toast-tone' }, p.toneLabel || TONE_WORD[tone]),
        p.title ? h('p', { className: 'kx-toast-title' }, p.title) : null,
        p.children ? h('p', { className: 'kx-toast-text' }, p.children) : null,
        p.action ? h('div', { className: 'kx-toast-action' }, p.action) : null),
      p.onClose ? h(Button, { variant: 'ghost', iconOnly: true, icon: 'close', label: p.closeLabel || '알림 닫기', onClick: p.onClose, className: 'kx-toast-close' }) : null);
  }

  window.KOREX = Object.assign(window.KOREX || {}, {
    GlobalHeader: GlobalHeader, HeroSearch: HeroSearch, SearchBar: SearchBar, CategoryNav: CategoryNav,
    FilterPanel: FilterPanel, ProductCard: ProductCard, ImageCard: ImageCard, ContentGrid: ContentGrid,
    BrandStatement: BrandStatement, CTA: CTA, Footer: Footer,
    Button: Button, TextField: TextField, Textarea: Textarea, Select: Select, Checkbox: Checkbox, Switch: Switch,
    Badge: Badge, Card: Card, Skeleton: Skeleton, Icon: Icon, Dialog: Dialog, Menu: Menu, Table: Table,
    Pagination: Pagination, Toast: Toast, AlertDialog: AlertDialog, ICON_NAMES: ICON_NAMES
  });
})();
