/* @ds-bundle: {"format":4,"namespace":"RAISDesignSystem_019e07","components":[{"name":"AlertDialog","sourcePath":"zem/components/AlertDialog.jsx"},{"name":"Badge","sourcePath":"zem/components/Badge.jsx"},{"name":"Button","sourcePath":"zem/components/Button.jsx"},{"name":"Card","sourcePath":"zem/components/Card.jsx"},{"name":"Checkbox","sourcePath":"zem/components/Checkbox.jsx"},{"name":"Dialog","sourcePath":"zem/components/Dialog.jsx"},{"name":"Icon","sourcePath":"zem/components/Icon.jsx"},{"name":"Menu","sourcePath":"zem/components/Menu.jsx"},{"name":"Pagination","sourcePath":"zem/components/Pagination.jsx"},{"name":"Select","sourcePath":"zem/components/Select.jsx"},{"name":"Skeleton","sourcePath":"zem/components/Skeleton.jsx"},{"name":"Switch","sourcePath":"zem/components/Switch.jsx"},{"name":"Table","sourcePath":"zem/components/Table.jsx"},{"name":"TextField","sourcePath":"zem/components/TextField.jsx"},{"name":"Textarea","sourcePath":"zem/components/Textarea.jsx"},{"name":"Toast","sourcePath":"zem/components/Toast.jsx"},{"name":"ToastProvider","sourcePath":"zem/components/Toast.jsx"},{"name":"ChildSwitcher","sourcePath":"zem/compositions/ChildSwitcher.jsx"},{"name":"DailyTimeline","sourcePath":"zem/compositions/DailyTimeline.jsx"},{"name":"FocusSession","sourcePath":"zem/compositions/FocusSession.jsx"},{"name":"GoalComposer","sourcePath":"zem/compositions/GoalComposer.jsx"},{"name":"MissionFeedback","sourcePath":"zem/compositions/MissionFeedback.jsx"}],"sourceHashes":{"archive/iak/master/lib/card.js":"a770251d6898","archive/iak/master/lib/iak-ui.js":"857deadf8315","archive/iak/master/lib/icons.js":"2389487dca34","archive/iak/master/lib/patterns.js":"bd000d5ed4e0","archive/iak/ui_kits/rais-dashboard/Components.jsx":"fc2ced315ee7","archive/iak/ui_kits/rais-dashboard/Sidebar.jsx":"98e51da1e403","archive/iak/ui_kits/rais-dashboard/TopBar.jsx":"da2db3676a27","iak-kids-v2.2-templates/templates/kid-activity/ds-base.js":"4c103ff05415","iak-kids-v2.2-templates/templates/parent-dashboard/ds-base.js":"4c103ff05415","iak-kids-v2.2-templates/templates/weekly-schedule/ds-base.js":"4c103ff05415","iak-kids-v2.2-templates/zem/lib/icons.js":"9236334bd3cd","iak-kids-v2.2-templates/zem/lib/zem-ui.js":"06dd4725bfd9","zem/components/AlertDialog.jsx":"54d87c441bf0","zem/components/Badge.jsx":"2a16e909d46a","zem/components/Button.jsx":"ce71aea5a01a","zem/components/Card.jsx":"564ddeaae455","zem/components/Checkbox.jsx":"ca3c51ff0f22","zem/components/Dialog.jsx":"5464659ec7b7","zem/components/Icon.jsx":"7c2ee8e15788","zem/components/Menu.jsx":"a6d51f8f262c","zem/components/Pagination.jsx":"7ee9631b3f69","zem/components/Select.jsx":"9cc5485d7982","zem/components/Skeleton.jsx":"4d1363187602","zem/components/Switch.jsx":"e53525d1676a","zem/components/Table.jsx":"cb4aaf3242e9","zem/components/TextField.jsx":"c915bd1eadc0","zem/components/Textarea.jsx":"4ad7c61e007c","zem/components/Toast.jsx":"9326fecaf801","zem/compositions/ChildSwitcher.jsx":"80076d8b854d","zem/compositions/DailyTimeline.jsx":"a39293176070","zem/compositions/FocusSession.jsx":"d5ab1d817b06","zem/compositions/GoalComposer.jsx":"27c4785c96b8","zem/compositions/MissionFeedback.jsx":"35fd715f8dcc","zem/lib/card.js":"baaf1dca1693","zem/lib/contrast.js":"776b4a8729e0","zem/lib/icons.js":"9236334bd3cd","zem/lib/patterns.js":"5e71e3e17fd6","zem/lib/swatches.js":"da00c6a16453","zem/lib/zem-patterns.js":"d1178cf03122","zem/lib/zem-ui.js":"06dd4725bfd9","zem/ui_kits/kits.js":"bc54dde35a2e"},"inlinedExternals":[],"unexposedExports":[{"name":"useToast","sourcePath":"zem/components/Toast.jsx"}]} */

(() => {

const __ds_ns = (window.RAISDesignSystem_019e07 = window.RAISDesignSystem_019e07 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// archive/iak/master/lib/card.js
try { (() => {
/* Master card helper: renders case grids and records which cases actually rendered (window.__IAK_RENDERED). */
(function () {
  const h = React.createElement;
  const TAG = {
    code: 'code',
    'native': 'native attr',
    composition: 'composition',
    'design-only': 'design-only',
    'not-in-source': 'not in source',
    'preview-only': 'preview-only'
  };
  function Case({
    c
  }) {
    return h('figure', {
      className: 'mc-case' + (c.wide ? ' wide' : c.w2 ? ' w2' : ''),
      'data-case': c.id,
      'data-tag': c.tag || 'code'
    }, h('div', {
      className: 'mc-demo' + (c.col ? ' col' : '')
    }, c.el), h('figcaption', {
      className: 'mc-cap'
    }, h('span', null, c.label), h('span', {
      className: 'mc-tag',
      'data-t': c.tag || 'code'
    }, TAG[c.tag || 'code'])));
  }
  function Page({
    spec
  }) {
    React.useEffect(() => {
      const figs = [...document.querySelectorAll('[data-case]')];
      const cases = figs.map(f => {
        const d = f.querySelector('.mc-demo');
        const r = d.getBoundingClientRect();
        return {
          id: f.dataset.case,
          tag: f.dataset.tag,
          rendered: d.childElementCount > 0 && r.height > 0,
          overflowX: d.scrollWidth > d.clientWidth + 1
        };
      });
      window.__IAK_RENDERED = {
        component: spec.name,
        cases,
        notInSource: spec.notInSource || []
      };
      console.log('IAK-CASES ' + JSON.stringify(window.__IAK_RENDERED));
    }, []);
    return h('main', {
      className: 'mc'
    }, h('header', {
      className: 'mc-head'
    }, h('div', {
      className: 'ov'
    }, spec.group || 'Master · Component'), h('h1', null, spec.name), spec.description && h('p', null, spec.description), h('div', {
      className: 'mc-meta'
    }, (spec.meta || []).map((m, i) => h('code', {
      key: i
    }, m)))), spec.sections.map((s, i) => h('section', {
      key: i,
      className: 'mc-sec'
    }, h('header', null, h('h2', null, s.title), s.note && h('p', null, s.note)), h('div', {
      className: 'mc-grid'
    }, s.cases.map(c => h(Case, {
      key: c.id,
      c
    }))))), spec.notInSource && spec.notInSource.length ? h('section', {
      className: 'mc-sec'
    }, h('header', null, h('h2', null, '소스에 없는 상태 · 렌더하지 않음')), h('div', {
      className: 'mc-note'
    }, spec.notInSource.map((n, i) => h('div', {
      key: i
    }, '· ', n)))) : null, spec.footer || null);
  }
  window.IAKCard = {
    mount(spec) {
      ReactDOM.createRoot(document.getElementById('root')).render(h(Page, {
        spec
      }));
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/master/lib/card.js", error: String((e && e.message) || e) }); }

// archive/iak/master/lib/iak-ui.js
try { (() => {
/* IAK UI · Master visual port of uploads/IAK-Master-source/packages/ui/src (index.tsx, composites.tsx, table.tsx, toast.tsx, alert-dialog.tsx).
   Same component names, props and class names. Radix behaviour (Dialog/Menu/Toast/AlertDialog) is replaced by a small
   dependency-free approximation for previews only — production code must use packages/ui.
   Preview-only props (not in source API): `inline` (Dialog, Menu, AlertDialog), `previewState` (AlertDialog, Pagination), ToastView. */
(function () {
  const h = React.createElement,
    IC = () => window.IAK_ICONS || {};
  const cx = (...a) => a.filter(Boolean).join(' ');
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function Glyph({
    name,
    size = 20
  }) {
    const ic = IC()[name];
    return ic ? h('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      'aria-hidden': 'true',
      focusable: 'false',
      dangerouslySetInnerHTML: {
        __html: ic.body
      }
    }) : null;
  }

  /* index.tsx */
  function Icon({
    name,
    size = 20,
    label,
    ...p
  }) {
    const I = IC();
    const ic = has(I, name) ? I[name] : undefined;
    if (!ic) return null;
    return h('svg', {
      ...p,
      width: size,
      height: size,
      viewBox: `0 0 ${ic.width} ${ic.height}`,
      fill: 'currentColor',
      role: label ? 'img' : undefined,
      'aria-label': label,
      'aria-hidden': label ? undefined : true,
      focusable: 'false',
      dangerouslySetInnerHTML: {
        __html: ic.body
      }
    });
  }
  const Button = React.forwardRef(function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    children,
    className,
    type = 'button',
    ...p
  }, ref) {
    return h('button', {
      ...p,
      ref,
      type,
      disabled: disabled || loading,
      'aria-busy': loading || undefined,
      className: cx('iak-button', `iak-button--${variant}`, `iak-button--${size}`, className)
    }, h('span', {
      style: loading ? {
        opacity: 0
      } : undefined
    }, children), loading && h('span', {
      className: 'iak-spinner',
      'aria-hidden': 'true'
    }));
  });
  function useField(id, description, error, describedBy) {
    const uid = React.useId();
    const inputId = id || `iak-${uid}`;
    return {
      inputId,
      helpId: `${inputId}-help`,
      descriptionId: cx(describedBy, (!!error || !!description) && `${inputId}-help`) || undefined
    };
  }
  function FieldShell({
    label,
    inputId,
    helpId,
    description,
    error,
    required,
    children
  }) {
    return h('div', {
      className: 'iak-field'
    }, h('label', {
      htmlFor: inputId
    }, label, required && h('span', {
      'aria-hidden': 'true'
    }, ' *')), children, (error || description) && h('p', {
      id: helpId,
      className: cx('iak-help', !!error && 'iak-error')
    }, error || description));
  }
  function fieldFactory(tag, extra) {
    return React.forwardRef(function Field({
      label,
      description,
      error,
      id,
      className,
      required,
      'aria-describedby': db,
      children,
      ...p
    }, ref) {
      const f = useField(id, description, error, db);
      const props = {
        ...p,
        id: f.inputId,
        ref,
        required,
        'aria-describedby': f.descriptionId,
        'aria-invalid': error ? true : p['aria-invalid'],
        className: cx('iak-input', extra, className)
      };
      if (tag === 'textarea') props.rows = p.rows || 4;
      return h(FieldShell, {
        ...f,
        label,
        description,
        error,
        required
      }, h(tag, props, tag === 'select' ? children : undefined));
    });
  }
  const TextField = fieldFactory('input'),
    Textarea = fieldFactory('textarea', 'iak-textarea'),
    Select = fieldFactory('select');
  const Checkbox = React.forwardRef(function Checkbox({
    label,
    className,
    ...p
  }, ref) {
    return h('label', {
      className: cx('iak-control', className)
    }, h('input', {
      ...p,
      type: 'checkbox',
      ref
    }), h('span', null, label));
  });
  const Switch = React.forwardRef(function Switch({
    label,
    className,
    ...p
  }, ref) {
    return h('label', {
      className: cx('iak-control', 'iak-switch', className)
    }, h('input', {
      ...p,
      type: 'checkbox',
      role: 'switch',
      ref
    }), h('span', {
      className: 'iak-switch-track',
      'aria-hidden': 'true'
    }), h('span', null, label));
  });
  function Badge({
    tone = 'neutral',
    className,
    children,
    ...p
  }) {
    return h('span', {
      ...p,
      className: cx('iak-badge', `iak-badge--${tone}`, className)
    }, children);
  }
  function Card({
    title,
    footer,
    children,
    className,
    ...p
  }) {
    const id = React.useId();
    return h('section', {
      ...p,
      'aria-labelledby': title ? id : p['aria-labelledby'],
      className: cx('iak-card', className)
    }, title && h('h2', {
      id
    }, title), h('div', null, children), footer && h('footer', null, footer));
  }
  function Skeleton({
    width = '100%',
    height = 20,
    circle = false,
    style,
    className,
    ...p
  }) {
    return h('span', {
      ...p,
      'aria-hidden': 'true',
      className: cx('iak-skeleton', className),
      style: {
        width,
        height,
        borderRadius: circle ? '50%' : undefined,
        ...style
      }
    });
  }

  /* focus helpers for overlay approximations */
  function useModalFocus(open, ref, initialFocusRef, onClose, lockEsc) {
    React.useEffect(() => {
      if (!open) return;
      const prev = document.activeElement;
      const node = ref.current;
      const t = setTimeout(() => {
        if (initialFocusRef && initialFocusRef.current) initialFocusRef.current.focus();else {
          const f = node && node.querySelector(FOCUSABLE);
          f && f.focus();
        }
      }, 0);
      const key = e => {
        if (e.key === 'Escape') {
          if (lockEsc && lockEsc()) return;
          e.preventDefault();
          onClose();
        }
        if (e.key === 'Tab' && node) {
          const els = [...node.querySelectorAll(FOCUSABLE)];
          if (!els.length) return;
          const a = els[0],
            z = els[els.length - 1];
          if (e.shiftKey && document.activeElement === a) {
            e.preventDefault();
            z.focus();
          } else if (!e.shiftKey && document.activeElement === z) {
            e.preventDefault();
            a.focus();
          }
        }
      };
      document.addEventListener('keydown', key);
      return () => {
        clearTimeout(t);
        document.removeEventListener('keydown', key);
        prev && prev.focus && prev.focus();
      };
    }, [open]);
  }
  function portal(node, inline) {
    return inline ? node : ReactDOM.createPortal(node, document.body);
  }

  /* composites.tsx */
  function Dialog({
    trigger,
    title,
    description,
    children,
    footer,
    open,
    defaultOpen,
    onOpenChange,
    initialFocusRef,
    closeOnOutside = false,
    closeLabel = '닫기',
    size = 'md',
    inline = false
  }) {
    const [inner, setInner] = React.useState(!!defaultOpen);
    const isOpen = inline || (open !== undefined ? open : inner);
    const set = v => {
      if (open === undefined) setInner(v);
      onOpenChange && onOpenChange(v);
    };
    const ref = React.useRef(null),
      tid = React.useId();
    useModalFocus(isOpen && !inline, ref, initialFocusRef, () => set(false));
    const content = h(React.Fragment, null, h('div', {
      className: 'iak-dialog-overlay',
      onClick: () => {
        if (closeOnOutside) set(false);
      }
    }), h('div', {
      ref,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': tid,
      className: `iak-dialog iak-dialog--${size}`
    }, h('div', {
      className: 'iak-dialog-heading'
    }, h('h2', {
      id: tid,
      className: 'iak-dialog-title'
    }, title), h('button', {
      type: 'button',
      className: 'iak-dialog-close',
      'aria-label': closeLabel,
      onClick: () => set(false)
    }, h(Glyph, {
      name: 'eva:close-fill'
    }))), description && h('p', {
      className: 'iak-dialog-description'
    }, description), h('div', {
      className: 'iak-dialog-body'
    }, children), footer && h('div', {
      className: 'iak-dialog-footer'
    }, footer)));
    return h(React.Fragment, null, trigger && !inline && React.cloneElement(trigger, {
      onClick: () => set(true),
      'aria-haspopup': 'dialog'
    }), isOpen && portal(content, inline));
  }
  function Menu({
    trigger,
    label,
    items,
    align = 'end',
    open,
    onOpenChange,
    inline = false,
    highlightedId
  }) {
    const [inner, setInner] = React.useState(false);
    const isOpen = inline || (open !== undefined ? open : inner);
    const set = v => {
      if (open === undefined) setInner(v);
      onOpenChange && onOpenChange(v);
    };
    const [hi, setHi] = React.useState(highlightedId || null);
    const listRef = React.useRef(null),
      trig = React.useRef(null),
      anchor = React.useRef(null);
    const [pos, setPos] = React.useState(null);
    React.useLayoutEffect(() => {
      if (!isOpen || inline || !anchor.current) return;
      const place = () => {
        const r = anchor.current.getBoundingClientRect(),
          vw = document.documentElement.clientWidth;
        const st = {
          position: 'fixed',
          top: r.bottom + 6
        };
        if (align === 'start') st.left = Math.max(16, r.left);else if (align === 'center') {
          st.left = r.left + r.width / 2;
          st.transform = 'translateX(-50%)';
        } else st.right = Math.max(16, vw - r.right);
        setPos(st);
      };
      place();
      window.addEventListener('scroll', place, true);
      window.addEventListener('resize', place);
      return () => {
        window.removeEventListener('scroll', place, true);
        window.removeEventListener('resize', place);
      };
    }, [isOpen]);
    const enabled = items.filter(i => !i.disabled);
    React.useEffect(() => {
      if (isOpen && !inline) {
        setHi(enabled[0] && enabled[0].id);
        const out = e => {
          if (listRef.current && !listRef.current.contains(e.target) && anchor.current && !anchor.current.contains(e.target)) set(false);
        };
        document.addEventListener('mousedown', out);
        return () => document.removeEventListener('mousedown', out);
      }
    }, [isOpen]);
    React.useEffect(() => {
      if (isOpen && !inline && hi && listRef.current) {
        const el = listRef.current.querySelector(`[data-id="${hi}"]`);
        el && el.focus();
      }
    }, [hi, isOpen]);
    const key = e => {
      const idx = enabled.findIndex(i => i.id === hi);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHi(enabled[(idx + 1) % enabled.length].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHi(enabled[(idx - 1 + enabled.length) % enabled.length].id);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setHi(enabled[0].id);
      } else if (e.key === 'End') {
        e.preventDefault();
        setHi(enabled[enabled.length - 1].id);
      } else if (e.key === 'Escape' || e.key === 'Tab') {
        set(false);
        if (e.key === 'Escape' && trig.current) trig.current.focus();
      }
    };
    const list = h('div', {
      ref: listRef,
      style: inline ? undefined : pos || {
        position: 'fixed',
        visibility: 'hidden'
      },
      role: 'menu',
      'aria-label': label,
      className: cx('iak-menu', inline && 'iak-menu--inline'),
      'data-align': align,
      onKeyDown: key
    }, items.map(item => h(React.Fragment, {
      key: item.id
    }, item.separatorBefore && h('div', {
      role: 'separator',
      className: 'iak-menu-separator'
    }), h('div', {
      role: 'menuitem',
      tabIndex: -1,
      'data-id': item.id,
      className: 'iak-menu-item',
      'data-danger': item.danger || undefined,
      'data-disabled': item.disabled || undefined,
      'aria-disabled': item.disabled || undefined,
      'data-highlighted': hi === item.id && !item.disabled ? '' : undefined,
      onMouseEnter: () => !item.disabled && setHi(item.id),
      onClick: () => {
        if (item.disabled) return;
        item.onSelect && item.onSelect();
        set(false);
      }
    }, item.label))));
    if (inline) return list;
    return h('span', {
      className: 'iak-menu-anchor',
      ref: anchor
    }, React.cloneElement(trigger, {
      ref: trig,
      'aria-haspopup': 'menu',
      'aria-expanded': isOpen,
      onClick: () => set(!isOpen),
      onKeyDown: e => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          set(true);
        }
      }
    }), isOpen && ReactDOM.createPortal(list, document.body));
  }

  /* table.tsx */
  const integer = (v, fb, min = 1) => Number.isFinite(v) ? Math.max(min, Math.floor(v)) : fb;
  function Pagination({
    page,
    pageCount,
    onPageChange,
    disabled = false,
    label = '페이지 탐색',
    previewState
  }) {
    const count = integer(pageCount, 1),
      current = Math.min(integer(page, 1), count);
    return h('nav', {
      className: 'iak-pagination',
      'aria-label': label,
      'data-preview-state': previewState
    }, h('button', {
      type: 'button',
      disabled: disabled || current === 1,
      onClick: () => onPageChange(1),
      'aria-label': '첫 페이지'
    }, '«'), h('button', {
      type: 'button',
      disabled: disabled || current === 1,
      onClick: () => onPageChange(current - 1)
    }, '이전'), h('span', {
      'aria-current': 'page'
    }, `${current} / ${count} 페이지`), h('button', {
      type: 'button',
      disabled: disabled || current === count,
      onClick: () => onPageChange(current + 1)
    }, '다음'), h('button', {
      type: 'button',
      disabled: disabled || current === count,
      onClick: () => onPageChange(count),
      'aria-label': '마지막 페이지'
    }, '»'));
  }
  const collator = new Intl.Collator('ko', {
    numeric: true,
    sensitivity: 'base'
  });
  function Table({
    caption,
    columns,
    rows,
    rowKey,
    sort,
    defaultSort,
    onSortChange,
    loading = false,
    error,
    emptyMessage = '표시할 항목이 없습니다.',
    loadingMessage = '데이터를 불러오는 중입니다.',
    minWidth = 560,
    pagination,
    virtualization
  }) {
    const [iSort, setISort] = React.useState(defaultSort),
      [iPage, setIPage] = React.useState(1),
      [scrollTop, setScrollTop] = React.useState(0);
    const viewport = React.useRef(null);
    const activeSort = sort === undefined ? iSort : sort;
    const sorted = React.useMemo(() => {
      const c = columns.find(c => activeSort && c.id === activeSort.columnId);
      if (!c || !c.sortValue || !activeSort) return rows;
      return [...rows].sort((a, b) => {
        const x = c.sortValue(a),
          y = c.sortValue(b);
        if (x == null) return y == null ? 0 : 1;
        if (y == null) return -1;
        const n = typeof x === 'number' && typeof y === 'number' ? x - y : collator.compare(String(x), String(y));
        return (activeSort.direction === 'ascending' ? 1 : -1) * (Number.isNaN(n) ? 0 : n);
      });
    }, [columns, rows, activeSort]);
    const size = integer(pagination && pagination.pageSize != null ? pagination.pageSize : rows.length, 10),
      pageCount = Math.max(1, Math.ceil(rows.length / size));
    const page = pagination ? Math.min(integer(pagination.page != null ? pagination.page : iPage, 1), pageCount) : 1,
      startIndex = pagination ? (page - 1) * size : 0;
    const visibleRows = pagination ? sorted.slice(startIndex, startIndex + size) : sorted;
    const virtual = !!virtualization && !pagination,
      height = integer(virtualization && virtualization.height || 400, 400, 160),
      rowHeight = integer(virtualization && virtualization.rowHeight || 56, 56, 40),
      overscan = Math.min(50, integer(virtualization && virtualization.overscan != null ? virtualization.overscan : 4, 4, 0));
    const changePage = n => {
      if (!pagination || pagination.page === undefined) setIPage(n);
      pagination && pagination.onPageChange && pagination.onPageChange(n);
      if (viewport.current) viewport.current.scrollTop = 0;
    };
    const bodyOffset = 96;
    const first = virtual ? Math.max(0, Math.min(Math.max(0, visibleRows.length - 1), Math.floor(Math.max(0, scrollTop - bodyOffset) / rowHeight) - overscan)) : 0;
    const end = virtual ? Math.min(visibleRows.length, first + Math.ceil(height / rowHeight) + 2 * overscan + 1) : visibleRows.length;
    const state = loading ? loadingMessage : error || (!rows.length ? emptyMessage : undefined);
    const cells = [];
    let cursor = 0;
    const spacer = (a, b) => {
      if (b > a) cells.push(h('tr', {
        key: 'sp' + a,
        'aria-hidden': 'true',
        className: 'iak-table-spacer'
      }, h('td', {
        colSpan: Math.max(1, columns.length),
        style: {
          height: (b - a) * rowHeight
        }
      })));
    };
    for (let i = first; i < end; i++) {
      const row = visibleRows[i];
      if (virtual) spacer(cursor, i);
      cells.push(h('tr', {
        key: 'r' + rowKey(row),
        'aria-rowindex': virtual || pagination ? startIndex + i + 2 : undefined
      }, columns.map(c => h('td', {
        key: c.id,
        style: {
          textAlign: c.align || 'left'
        }
      }, virtual ? h('div', {
        className: 'iak-table-virtual-cell',
        style: {
          height: rowHeight
        }
      }, c.cell(row)) : c.cell(row)))));
      cursor = i + 1;
    }
    if (virtual) spacer(cursor, visibleRows.length);
    const toggle = id => {
      const next = {
        columnId: id,
        direction: activeSort && activeSort.columnId === id && activeSort.direction === 'ascending' ? 'descending' : 'ascending'
      };
      if (sort === undefined) setISort(next);
      onSortChange && onSortChange(next);
      if (pagination) changePage(1);
    };
    const range = rows.length ? `${startIndex + 1}–${startIndex + visibleRows.length} / ${rows.length}개` : '0개';
    return h('div', {
      className: 'iak-table-root'
    }, h('div', {
      ref: viewport,
      className: cx('iak-table-scroll', virtual && 'iak-table-virtual'),
      style: virtual ? {
        maxHeight: height
      } : undefined,
      role: 'region',
      'aria-label': `${caption} · 스크롤`,
      tabIndex: 0,
      onScroll: virtual ? e => setScrollTop(e.currentTarget.scrollTop) : undefined
    }, h('table', {
      className: 'iak-table',
      style: {
        minWidth
      },
      'aria-busy': loading || undefined,
      'aria-rowcount': !state && (virtual || pagination) ? rows.length + 1 : undefined
    }, h('caption', null, caption), h('thead', null, h('tr', null, columns.map(c => h('th', {
      key: c.id,
      scope: 'col',
      style: {
        textAlign: c.align || 'left'
      },
      'aria-sort': c.sortValue && activeSort && activeSort.columnId === c.id ? activeSort.direction : undefined
    }, c.sortValue ? h('button', {
      type: 'button',
      disabled: loading || !!error,
      className: 'iak-table-sort',
      onClick: () => toggle(c.id)
    }, c.header, h('span', {
      'aria-hidden': 'true'
    }, activeSort && activeSort.columnId === c.id ? activeSort.direction === 'ascending' ? '↑' : '↓' : '↕'), h('span', {
      className: 'iak-sr-only'
    }, ' 정렬')) : c.header)))), h('tbody', null, state ? h('tr', null, h('td', {
      className: 'iak-table-state',
      colSpan: Math.max(columns.length, 1)
    }, state)) : cells))), pagination && h('div', {
      className: 'iak-table-paging'
    }, h('span', null, range), h(Pagination, {
      page,
      pageCount,
      onPageChange: changePage,
      disabled: loading || !!error,
      label: `${caption} 페이지 탐색`
    })), h('p', {
      className: 'iak-sr-only',
      role: 'status'
    }, state || (pagination ? `${page} / ${pageCount} 페이지, ${range}` : `${rows.length}개 항목`)));
  }

  /* toast.tsx */
  const labels = {
    success: '성공',
    warning: '주의',
    error: '오류',
    info: '안내'
  };
  const toneIcons = {
    success: 'eva:checkmark-circle-2-fill',
    warning: 'eva:alert-triangle-fill',
    error: 'eva:alert-circle-outline',
    info: 'eva:info-fill'
  };
  const durationValue = n => n === 0 ? Infinity : Number.isFinite(n) && n > 0 ? Math.max(1000, n) : 5000;
  function ToastView({
    title,
    description,
    tone = 'info',
    action,
    onClose,
    previewState
  }) {
    return h('li', {
      className: `iak-toast iak-toast--${tone}`,
      role: 'status'
    }, h('span', {
      className: 'iak-toast-icon'
    }, h(Glyph, {
      name: toneIcons[tone]
    })), h('div', {
      className: 'iak-toast-content'
    }, h('div', {
      className: 'iak-toast-title'
    }, h('span', {
      className: 'iak-sr-only'
    }, labels[tone] + ': '), title), description && h('div', {
      className: 'iak-toast-description'
    }, description), action && h('button', {
      type: 'button',
      className: 'iak-toast-action',
      'aria-label': action.altText,
      onClick: action.onClick
    }, action.label)), h('button', {
      type: 'button',
      'aria-label': `${title} 알림 닫기`,
      className: 'iak-toast-close',
      'data-preview-state': previewState,
      onClick: onClose
    }, h(Glyph, {
      name: 'eva:close-fill',
      size: 18
    })));
  }
  const ToastCtx = React.createContext(null);
  function ToastProvider({
    children,
    duration = 5000,
    label = '알림',
    container
  }) {
    const [entries, setEntries] = React.useState([]);
    const cur = React.useRef([]),
      counter = React.useRef(0),
      timers = React.useRef({});
    const commit = n => {
      cur.current = n;
      setEntries(n);
    };
    const dismiss = React.useCallback(id => {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
      commit(cur.current.filter(e => e.id !== id));
    }, []);
    const notify = React.useCallback(o => {
      if (!o.title || !o.title.trim()) return undefined;
      if (o.id && cur.current.some(e => e.id === o.id)) return o.id;
      if (cur.current.length >= 50) return undefined;
      const id = o.id || `toast-${++counter.current}`;
      commit([...cur.current, {
        ...o,
        id
      }]);
      return id;
    }, []);
    const dismissAll = React.useCallback(() => {
      Object.values(timers.current).forEach(clearTimeout);
      timers.current = {};
      commit([]);
    }, []);
    const visible = entries.slice(0, 3);
    React.useEffect(() => {
      visible.forEach(e => {
        if (timers.current[e.id]) return;
        const d = durationValue(e.duration != null ? e.duration : duration);
        if (d !== Infinity) timers.current[e.id] = setTimeout(() => dismiss(e.id), d);
      });
    });
    const api = React.useMemo(() => ({
      notify,
      dismiss,
      dismissAll
    }), []);
    const vp = h('ol', {
      className: 'iak-toast-viewport',
      'aria-label': `${label} (F8)`,
      tabIndex: -1
    }, visible.map(e => h(ToastView, {
      key: e.id,
      ...e,
      onClose: () => dismiss(e.id)
    })));
    return h(ToastCtx.Provider, {
      value: api
    }, children, container ? vp : ReactDOM.createPortal(vp, document.body));
  }
  function useToast() {
    const c = React.useContext(ToastCtx);
    if (!c) throw new Error('useToast must be used inside ToastProvider');
    return c;
  }

  /* alert-dialog.tsx */
  function AlertDialog({
    trigger,
    title,
    description,
    confirmLabel = '확인',
    cancelLabel = '취소',
    danger = false,
    onConfirm,
    errorMessage = '작업을 완료하지 못했습니다. 다시 시도해 주세요.',
    inline = false,
    previewState
  }) {
    const [open, setOpen] = React.useState(false),
      [pending, setPending] = React.useState(previewState === 'pending'),
      [error, setError] = React.useState(previewState === 'error');
    const busy = React.useRef(false),
      cancel = React.useRef(null),
      ref = React.useRef(null),
      tid = React.useId(),
      did = React.useId();
    const isOpen = inline || open;
    useModalFocus(isOpen && !inline, ref, cancel, () => {
      setError(false);
      setOpen(false);
    }, () => busy.current);
    async function confirm() {
      if (busy.current || inline) return;
      busy.current = true;
      setPending(true);
      setError(false);
      try {
        await onConfirm();
        setOpen(false);
      } catch (e) {
        setError(true);
        requestAnimationFrame(() => cancel.current && cancel.current.focus());
      } finally {
        busy.current = false;
        setPending(false);
      }
    }
    const content = h(React.Fragment, null, h('div', {
      className: 'iak-dialog-overlay'
    }), h('div', {
      ref,
      role: 'alertdialog',
      'aria-modal': 'true',
      'aria-labelledby': tid,
      'aria-describedby': did,
      'aria-busy': pending || undefined,
      className: 'iak-dialog iak-dialog--sm'
    }, h('h2', {
      id: tid,
      className: 'iak-dialog-title'
    }, title), h('p', {
      id: did,
      className: 'iak-dialog-description'
    }, description), error && h('p', {
      role: 'alert',
      className: 'iak-error'
    }, errorMessage), pending && h('p', {
      role: 'status',
      className: 'iak-alert-status'
    }, '처리 중입니다.'), h('div', {
      className: 'iak-dialog-footer'
    }, h(Button, {
      ref: cancel,
      variant: 'secondary',
      disabled: pending,
      onClick: () => {
        if (!busy.current) {
          setError(false);
          setOpen(false);
        }
      }
    }, cancelLabel), h(Button, {
      variant: danger ? 'danger' : 'primary',
      loading: pending,
      onClick: e => {
        e.preventDefault();
        confirm();
      }
    }, confirmLabel))));
    return h(React.Fragment, null, trigger && !inline && React.cloneElement(trigger, {
      onClick: () => setOpen(true),
      'aria-haspopup': 'dialog'
    }), isOpen && portal(content, inline));
  }
  window.IAK = {
    Icon,
    Button,
    TextField,
    Textarea,
    Select,
    Checkbox,
    Switch,
    Badge,
    Card,
    Skeleton,
    Dialog,
    Menu,
    Table,
    Pagination,
    ToastProvider,
    useToast,
    AlertDialog,
    preview: {
      ToastView,
      Glyph
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/master/lib/iak-ui.js", error: String((e && e.message) || e) }); }

// archive/iak/master/lib/icons.js
try { (() => {
/* IAK icon data — 97 SVGs verbatim from uploads/IAK-Master-source/data/developer/icons.json (Eva/Solar). 9 names unresolved. */
window.IAK_ICONS = {
  "eva:alert-circle-outline": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8\"/><circle cx=\"12\" cy=\"16\" r=\"1\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:alert-triangle-fill": {
    "body": "<path fill=\"currentColor\" d=\"M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66a3 3 0 0 0-.05-3.04M12 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-downward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5l.15.09l.13.07a1 1 0 0 0 .72 0l.13-.07l.15-.09l6-5a1 1 0 0 0 .13-1.41\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-back-fill": {
    "body": "<path fill=\"currentColor\" d=\"M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-downward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-forward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-upward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15a1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-upward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5l-.15-.09l-.13-.07a1 1 0 0 0-.72 0l-.13.07l-.15.09l-6 5a1 1 0 0 0-.13 1.41\"/>",
    "width": 24,
    "height": 24
  },
  "eva:bookmark-fill": {
    "body": "<path fill=\"currentColor\" d=\"M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86a1 1 0 0 1-1 0l-5.67-3.21l-5.33 3.2A1 1 0 0 1 6 21\"/>",
    "width": 24,
    "height": 24
  },
  "eva:calendar-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M8 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:checkmark-circle-2-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:checkmark-fill": {
    "body": "<path fill=\"currentColor\" d=\"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:chevron-right-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32\"/>",
    "width": 24,
    "height": 24
  },
  "eva:close-circle-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:close-fill": {
    "body": "<path fill=\"currentColor\" d=\"m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:copy-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3\"/>",
    "width": 24,
    "height": 24
  },
  "eva:copy-outline": {
    "body": "<path fill=\"currentColor\" d=\"M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z\"/><path fill=\"currentColor\" d=\"M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:download-fill": {
    "body": "<rect width=\"16\" height=\"2\" x=\"4\" y=\"18\" fill=\"currentColor\" rx=\"1\" ry=\"1\"/><rect width=\"4\" height=\"2\" x=\"3\" y=\"17\" fill=\"currentColor\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 18)\"/><rect width=\"4\" height=\"2\" x=\"17\" y=\"17\" fill=\"currentColor\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 19 18)\"/><path fill=\"currentColor\" d=\"M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2\"/><path fill=\"currentColor\" d=\"M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:edit-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71M16 10.68L13.32 8l1.95-2L18 8.73Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:email-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:external-link-fill": {
    "body": "<path fill=\"currentColor\" d=\"M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" d=\"M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2\"/>",
    "width": 24,
    "height": 24
  },
  "eva:file-text-fill": {
    "body": "<path fill=\"currentColor\" d=\"m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:flash-fill": {
    "body": "<path fill=\"currentColor\" d=\"M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44\"/>",
    "width": 24,
    "height": 24
  },
  "eva:funnel-fill": {
    "body": "<path fill=\"currentColor\" d=\"M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49a1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9a1 1 0 0 1-.41.1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:home-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10 14h4v7h-4z\"/><path fill=\"currentColor\" d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44\"/>",
    "width": 24,
    "height": 24
  },
  "eva:info-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:layers-fill": {
    "body": "<path fill=\"currentColor\" d=\"m3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81\"/><path fill=\"currentColor\" d=\"m20.71 10.66l-1.83-.78l-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85\"/><path fill=\"currentColor\" d=\"m20.71 15.1l-1.56-.68l-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76l-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87\"/>",
    "width": 24,
    "height": 24
  },
  "eva:link-fill": {
    "body": "<path fill=\"currentColor\" d=\"M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1\"/><path fill=\"currentColor\" d=\"M9 16H7.21A4.13 4.13 0 0 1 3 12.37A4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2m14-4.76A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63A4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76\"/>",
    "width": 24,
    "height": 24
  },
  "eva:more-horizontal-fill": {
    "body": "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"5\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>",
    "width": 24,
    "height": 24
  },
  "eva:plus-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2\"/>",
    "width": 24,
    "height": 24
  },
  "eva:refresh-fill": {
    "body": "<path fill=\"currentColor\" d=\"M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19A7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7a7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83a1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06a.3.3 0 0 0 .1-.06a.8.8 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.3 1.3 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.2 9.2 0 0 0 12.18 3A9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25\"/>",
    "width": 24,
    "height": 24
  },
  "eva:search-fill": {
    "body": "<path fill=\"currentColor\" d=\"m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6\"/>",
    "width": 24,
    "height": 24
  },
  "solar:add-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:alt-arrow-down-bold": {
    "body": "<path fill=\"currentColor\" d=\"M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:asteroid-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M2 12C2 6.47715 6.47715 2 12 2C14.1266 2 16.0982 2.66383 17.7188 3.79559C16.7998 4.94874 16.25 6.41105 16.25 7.99974C16.25 11.2675 18.5713 13.9914 21.6545 14.6155C20.5047 18.8698 16.6179 22 12 22C11.3615 22 10.7369 21.9402 10.1316 21.8258C10.5287 20.9653 10.75 20.0075 10.75 19C10.75 15.2721 7.7279 12.25 3.99998 12.25C3.31014 12.25 2.64323 12.3537 2.0147 12.5469C2.00494 12.3658 2 12.1835 2 12ZM16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16ZM10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z\" clip-rule=\"evenodd\"/><path d=\"M17.75 7.99974C17.75 6.76899 18.1726 5.63896 18.8812 4.74396C20.8021 6.56624 22 9.14322 22 12C22 12.3861 21.9781 12.7672 21.9355 13.1419C19.5463 12.6503 17.75 10.534 17.75 7.99974Z\"/><path d=\"M8.65778 21.4278C5.40825 20.2758 2.93116 17.4914 2.21252 14.0605L2.32447 14.0228C2.84969 13.8461 3.41284 13.75 3.99998 13.75C6.89948 13.75 9.24998 16.1005 9.24998 19C9.24998 19.8351 9.05555 20.6226 8.71017 21.3218L8.65778 21.4278Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:atom-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M17.0016 6.99793C15.8625 5.85879 14.6653 4.86861 13.4619 4.04619C14.8393 3.34512 16.1436 2.92369 17.2752 2.79313C18.7023 2.62848 19.7567 2.93171 20.4123 3.58732C21.0679 4.24294 21.3711 5.29736 21.2065 6.72444C21.0759 7.85601 20.6545 9.16032 19.9534 10.5378C19.131 9.3343 18.1408 8.13709 17.0016 6.99793Z\"/><path fill-rule=\"evenodd\" d=\"M15.941 8.05859C17.2144 9.33197 18.2826 10.6744 19.1196 11.9995C18.2827 13.3245 17.2145 14.6668 15.9412 15.94C14.6677 17.2135 13.3253 18.2818 12.0002 19.1187C10.6751 18.2818 9.33276 17.2135 8.05941 15.9402C6.78608 14.6668 5.71785 13.3245 4.88094 11.9995C5.71788 10.6743 6.78618 9.33188 8.05961 8.05845C9.3329 6.78516 10.6752 5.71695 12.0002 4.88005C13.3253 5.71697 14.6676 6.78523 15.941 8.05859ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z\" clip-rule=\"evenodd\"/><path d=\"M13.4619 19.9526C14.6654 19.1301 15.8626 18.1399 17.0018 17.0007C18.1409 15.8616 19.131 14.6646 19.9534 13.4612C20.6544 14.8386 21.0758 16.1428 21.2063 17.2743C21.3709 18.7013 21.0677 19.7557 20.4121 20.4113C19.7565 21.0669 18.7021 21.3701 17.2751 21.2055C16.1435 21.075 14.8393 20.6536 13.4619 19.9526Z\"/><path d=\"M6.99875 17.0008C8.13786 18.14 9.33502 19.1301 10.5384 19.9525C9.16109 20.6535 7.8569 21.0749 6.72543 21.2054C5.29844 21.37 4.24408 21.0668 3.5885 20.4112C2.93291 19.7556 2.62968 18.7012 2.79429 17.2742C2.92481 16.1428 3.34616 14.8386 4.04711 13.4612C4.86952 14.6646 5.85966 15.8617 6.99875 17.0008Z\"/><path d=\"M4.04708 10.5377C4.86953 9.33424 5.85975 8.13699 6.99895 6.99779C8.13801 5.85872 9.33511 4.8686 10.5385 4.04621C9.16108 3.3452 7.85682 2.9238 6.72531 2.79326C5.29828 2.62863 4.2439 2.93186 3.5883 3.58746C2.93269 4.24307 2.62946 5.29747 2.7941 6.72453C2.92465 7.85606 3.34606 9.16034 4.04708 10.5377Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:bag-2-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.25014 6.01489C8.25005 6.00994 8.25 6.00498 8.25 6V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.75 6.00994 15.7499 6.0149C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.19239 6.96288 6.05353 8.25014 6.01489ZM9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 5.99999 14.25 6.00001 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90177 6 9.82526 6 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5ZM15.7399 10.8768C15.6718 10.4682 15.2854 10.1922 14.8768 10.2603C14.4682 10.3284 14.1922 10.7148 14.2603 11.1234L15.2603 17.1234C15.3284 17.532 15.7148 17.808 16.1234 17.7399C16.532 17.6718 16.808 17.2854 16.7399 16.8768L15.7399 10.8768ZM9.12317 10.2603C8.71459 10.1922 8.32817 10.4682 8.26007 10.8768L7.26007 16.8768C7.19198 17.2854 7.46799 17.6718 7.87657 17.7399C8.28515 17.808 8.67157 17.532 8.73966 17.1234L9.73966 11.1234C9.80776 10.7148 9.53174 10.3284 9.12317 10.2603Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:bell-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z\"/><path d=\"M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:book-2-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M4.72718 2.71244C5.03258 2.41324 5.46135 2.21816 6.27103 2.11151C7.10452 2.00172 8.2092 2 9.7931 2H14.2069C15.7908 2 16.8955 2.00172 17.729 2.11151C18.5387 2.21816 18.9674 2.41324 19.2728 2.71244C19.5782 3.01165 19.7773 3.43172 19.8862 4.22499C19.9982 5.04159 20 6.12387 20 7.67568V15.5135L7.34563 15.5135C6.44305 15.5132 5.82716 15.513 5.29899 15.6517C4.82674 15.7756 4.38867 15.9781 4 16.2442V7.67568C4 6.12387 4.00176 5.04159 4.11382 4.225C4.22268 3.43172 4.42179 3.01165 4.72718 2.71244ZM7.58621 5.78378C7.12914 5.78378 6.75862 6.1468 6.75862 6.59459C6.75862 7.04239 7.12914 7.40541 7.58621 7.40541H16.4138C16.8709 7.40541 17.2414 7.04239 17.2414 6.59459C17.2414 6.1468 16.8709 5.78378 16.4138 5.78378H7.58621ZM6.75862 10.3784C6.75862 9.93058 7.12914 9.56757 7.58621 9.56757H13.1034C13.5605 9.56757 13.931 9.93058 13.931 10.3784C13.931 10.8262 13.5605 11.1892 13.1034 11.1892H7.58621C7.12914 11.1892 6.75862 10.8262 6.75862 10.3784Z\" clip-rule=\"evenodd\"/><path d=\"M7.47341 17.1351C6.39395 17.1351 6.01657 17.1421 5.72738 17.218C4.93365 17.4264 4.30088 18.0044 4.02952 18.7558C4.0463 19.1382 4.07259 19.4746 4.11382 19.775C4.22268 20.5683 4.42179 20.9884 4.72718 21.2876C5.03258 21.5868 5.46135 21.7818 6.27103 21.8885C7.10452 21.9983 8.2092 22 9.7931 22H14.2069C15.7908 22 16.8955 21.9983 17.729 21.8885C18.5387 21.7818 18.9674 21.5868 19.2728 21.2876C19.4894 21.0753 19.6526 20.8023 19.768 20.3784H7.58621C7.12914 20.3784 6.75862 20.0154 6.75862 19.5676C6.75862 19.1198 7.12914 18.7568 7.58621 18.7568H19.9704C19.9909 18.2908 19.9972 17.7564 19.9991 17.1351H7.47341Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:book-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M6.27103 2.11151C5.46135 2.21816 5.03258 2.41324 4.72718 2.71244C4.42179 3.01165 4.22268 3.43172 4.11382 4.225C4.00176 5.04159 4 6.12387 4 7.67568V16.2442C4.38867 15.9781 4.82674 15.7756 5.29899 15.6517C5.82716 15.513 6.44305 15.5132 7.34563 15.5135L20 15.5135V7.67568C20 6.12387 19.9982 5.04159 19.8862 4.22499C19.7773 3.43172 19.5782 3.01165 19.2728 2.71244C18.9674 2.41324 18.5387 2.21816 17.729 2.11151C16.8955 2.00172 15.7908 2 14.2069 2H9.7931C8.2092 2 7.10452 2.00172 6.27103 2.11151ZM6.75862 6.59459C6.75862 6.1468 7.12914 5.78378 7.58621 5.78378H16.4138C16.8709 5.78378 17.2414 6.1468 17.2414 6.59459C17.2414 7.04239 16.8709 7.40541 16.4138 7.40541H7.58621C7.12914 7.40541 6.75862 7.04239 6.75862 6.59459ZM7.58621 9.56757C7.12914 9.56757 6.75862 9.93058 6.75862 10.3784C6.75862 10.8262 7.12914 11.1892 7.58621 11.1892H13.1034C13.5605 11.1892 13.931 10.8262 13.931 10.3784C13.931 9.93058 13.5605 9.56757 13.1034 9.56757H7.58621Z\" clip-rule=\"evenodd\"/><path d=\"M7.47341 17.1351H8.68965H13.1034H19.9991C19.9956 18.2657 19.9776 19.1088 19.8862 19.775C19.7773 20.5683 19.5782 20.9884 19.2728 21.2876C18.9674 21.5868 18.5387 21.7818 17.729 21.8885C16.8955 21.9983 15.7908 22 14.2069 22H9.7931C8.2092 22 7.10452 21.9983 6.27103 21.8885C5.46135 21.7818 5.03258 21.5868 4.72718 21.2876C4.42179 20.9884 4.22268 20.5683 4.11382 19.775C4.07259 19.4746 4.0463 19.1382 4.02952 18.7558C4.30088 18.0044 4.93365 17.4264 5.72738 17.218C6.01657 17.1421 6.39395 17.1351 7.47341 17.1351Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:bookmark-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:card-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M14.0002 4H10.0002C6.22893 4 4.34331 4 3.17174 5.17157C2.32819 6.01511 2.09201 7.22882 2.02588 9.25H21.9744C21.9083 7.22882 21.6721 6.01511 20.8286 5.17157C19.657 4 17.7714 4 14.0002 4Z\"/><path fill-rule=\"evenodd\" d=\"M22 12C22 15.7712 21.9997 17.6566 20.8281 18.8281C19.6566 19.9997 17.7712 20 14 20H10C6.22876 20 4.34345 19.9997 3.17188 18.8281C2.0003 17.6566 2 15.7712 2 12C2 11.5581 2.00007 11.142 2.00195 10.75H21.998C21.9999 11.142 22 11.5581 22 12ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H6ZM12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16C11.75 16.4142 12.0858 16.75 12.5 16.75H14C14.4142 16.75 14.75 16.4142 14.75 16C14.75 15.5858 14.4142 15.25 14 15.25H12.5Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:chart-2-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M17.2929 2.29289C17 2.58579 17 3.05719 17 4V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17V4C21 3.05719 21 2.58579 20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289Z\"/><path d=\"M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z\"/><path d=\"M3.29289 9.29289C3 9.58579 3 10.0572 3 11V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289Z\"/><path d=\"M3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:chart-square-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM17 12.25C17.4142 12.25 17.75 12.5858 17.75 13V18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18V13C16.25 12.5858 16.5858 12.25 17 12.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V6ZM7 8.25C7.41421 8.25 7.75 8.58579 7.75 9V18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V9C6.25 8.58579 6.58579 8.25 7 8.25Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:chat-round-line-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:chat-square-bold": {
    "body": "<path fill=\"currentColor\" d=\"M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:check-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:checklist-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.04832 2.48826C8.33094 2.79108 8.31458 3.26567 8.01176 3.54829L3.72605 7.54829C3.57393 7.69027 3.36967 7.76267 3.1621 7.74818C2.95453 7.7337 2.7623 7.63363 2.63138 7.4719L1.41709 5.9719C1.15647 5.64996 1.20618 5.17769 1.52813 4.91707C1.85007 4.65645 2.32234 4.70616 2.58296 5.0281L3.29089 5.90261L6.98829 2.45171C7.2911 2.16909 7.76569 2.18545 8.04832 2.48826ZM11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H22C22.4142 4.25 22.75 4.58579 22.75 5C22.75 5.41422 22.4142 5.75 22 5.75H12C11.5858 5.75 11.25 5.41422 11.25 5ZM8.04832 9.48826C8.33094 9.79108 8.31458 10.2657 8.01176 10.5483L3.72605 14.5483C3.57393 14.6903 3.36967 14.7627 3.1621 14.7482C2.95453 14.7337 2.7623 14.6336 2.63138 14.4719L1.41709 12.9719C1.15647 12.65 1.20618 12.1777 1.52813 11.9171C1.85007 11.6564 2.32234 11.7062 2.58296 12.0281L3.29089 12.9026L6.98829 9.45171C7.2911 9.16909 7.76569 9.18545 8.04832 9.48826ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12ZM8.04832 16.4883C8.33094 16.7911 8.31458 17.2657 8.01176 17.5483L3.72605 21.5483C3.57393 21.6903 3.36967 21.7627 3.1621 21.7482C2.95453 21.7337 2.7623 21.6336 2.63138 21.4719L1.41709 19.9719C1.15647 19.65 1.20618 19.1777 1.52813 18.9171C1.85007 18.6564 2.32234 18.7062 2.58296 19.0281L3.29089 19.9026L6.98829 16.4517C7.2911 16.1691 7.76569 16.1855 8.04832 16.4883ZM11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H22C22.4142 18.25 22.75 18.5858 22.75 19C22.75 19.4142 22.4142 19.75 22 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:clock-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V12C11.25 12.1989 11.3291 12.3896 11.4697 12.5303L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L12.75 11.6895V8C12.75 7.58579 12.4142 7.25 12 7.25Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:close-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:cursor-bold": {
    "body": "<path fill=\"currentColor\" d=\"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:danger-triangle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:document-add-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z\"/><path d=\"M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z\"/><path fill-rule=\"evenodd\" d=\"M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.9812 19.6756 20.9997 17.8316 21 14.1801L18.1817 16.9984C17.9119 17.2683 17.691 17.4894 17.4415 17.6841C17.1491 17.9121 16.8328 18.1076 16.4981 18.2671C16.2124 18.4032 15.9159 18.502 15.5538 18.6225L13.2421 19.3931C12.4935 19.6426 11.6682 19.4478 11.1102 18.8898C10.5523 18.3318 10.3574 17.5065 10.607 16.7579L10.8805 15.9375L11.3556 14.5121L11.3775 14.4463C11.4981 14.0842 11.5968 13.7876 11.7329 13.5019C11.8924 13.1672 12.0879 12.8509 12.316 12.5586C12.5106 12.309 12.7317 12.0881 13.0017 11.8183L17.0081 7.81188L18.12 6.70004L18.2472 6.57282C18.9626 5.85741 19.9003 5.49981 20.838 5.5C20.6867 4.46945 20.3941 3.73727 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:document-text-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H8Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:dollar-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748Z\"/><path d=\"M12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z\"/><path fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:download-minimalistic-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z\"/><path d=\"M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:flame-bold": {
    "body": "<path fill=\"currentColor\" d=\"M20 15.0002C20 19.2547 17.3819 21.1216 15.3588 21.7512C14.9274 21.8854 14.6438 21.3825 14.9019 21.0116C15.7823 19.7464 16.8 17.8161 16.8 16.0002C16.8 14.0496 15.1559 11.7467 13.8721 10.3263C13.5786 10.0016 13.0667 10.2164 13.0507 10.6539C12.9976 12.1031 12.7689 14.042 11.7828 15.5616C11.6241 15.8062 11.2872 15.8264 11.1063 15.5977C10.7982 15.208 10.4901 14.7267 10.182 14.3464C10.016 14.1416 9.71604 14.1388 9.52461 14.32C8.77825 15.0267 7.73333 16.1288 7.73333 17.5002C7.73333 18.4301 8.0936 19.405 8.50007 20.1893C8.72368 20.6208 8.32607 21.1402 7.89573 20.9144C6.11307 19.9789 4 18.0838 4 15.0002C4 11.8538 8.31029 7.49503 9.95605 3.37712C10.2157 2.72733 11.0161 2.42199 11.5727 2.84603C14.9439 5.41409 20 10.3783 20 15.0002Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:gallery-remove-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z\"/><path fill-rule=\"evenodd\" d=\"M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM16.0303 3.96967C15.7374 3.67678 15.2626 3.67678 14.9697 3.96967C14.6768 4.26256 14.6768 4.73744 14.9697 5.03033L16.4393 6.5L14.9697 7.96967C14.6768 8.26256 14.6768 8.73744 14.9697 9.03033C15.2626 9.32322 15.7374 9.32322 16.0303 9.03033L17.5 7.56066L18.9697 9.03033C19.2626 9.32322 19.7374 9.32322 20.0303 9.03033C20.3232 8.73744 20.3232 8.26256 20.0303 7.96967L18.5607 6.5L20.0303 5.03033C20.3232 4.73744 20.3232 4.26256 20.0303 3.96967C19.7374 3.67678 19.2626 3.67678 18.9697 3.96967L17.5 5.43934L16.0303 3.96967Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:gallery-wide-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M18.5116 10.0771C18.5116 10.8157 17.8869 11.4146 17.1163 11.4146C16.3457 11.4146 15.7209 10.8157 15.7209 10.0771C15.7209 9.33841 16.3457 8.7396 17.1163 8.7396C17.8869 8.7396 18.5116 9.33841 18.5116 10.0771Z\"/><path fill-rule=\"evenodd\" d=\"M18.0363 5.53245C16.9766 5.39588 15.6225 5.39589 13.9129 5.39591H10.0871C8.37751 5.39589 7.02343 5.39588 5.9637 5.53245C4.87308 5.673 3.99033 5.96913 3.29418 6.63641C2.59803 7.30369 2.28908 8.14982 2.14245 9.19521C1.99997 10.211 1.99999 11.5089 2 13.1475V13.2482C1.99999 14.8868 1.99997 16.1847 2.14245 17.2005C2.28908 18.2459 2.59803 19.092 3.29418 19.7593C3.99033 20.4266 4.87307 20.7227 5.9637 20.8633C7.02344 20.9998 8.37751 20.9998 10.0871 20.9998H13.9129C15.6225 20.9998 16.9766 20.9998 18.0363 20.8633C19.1269 20.7227 20.0097 20.4266 20.7058 19.7593C21.402 19.092 21.7109 18.2459 21.8575 17.2005C22 16.1847 22 14.8868 22 13.2482V13.1476C22 11.5089 22 10.211 21.8575 9.19521C21.7109 8.14982 21.402 7.30369 20.7058 6.63641C20.0097 5.96913 19.1269 5.673 18.0363 5.53245ZM6.14963 6.858C5.21373 6.97861 4.67452 7.20479 4.28084 7.58215C3.88716 7.9595 3.65119 8.47635 3.52536 9.37343C3.42443 10.093 3.40184 10.9923 3.3968 12.1686L3.86764 11.7737C4.99175 10.8309 6.68596 10.885 7.74215 11.8974L11.7326 15.7223C12.1321 16.1053 12.7611 16.1575 13.2234 15.8461L13.5008 15.6593C14.8313 14.763 16.6314 14.8668 17.8402 15.9096L20.2479 17.9866C20.3463 17.7226 20.4206 17.4075 20.4746 17.0223C20.6032 16.106 20.6047 14.8981 20.6047 13.1979C20.6047 11.4976 20.6032 10.2897 20.4746 9.37343C20.3488 8.47635 20.1128 7.9595 19.7192 7.58215C19.3255 7.20479 18.7863 6.97861 17.8504 6.858C16.8944 6.7348 15.6343 6.73338 13.8605 6.73338H10.1395C8.36575 6.73338 7.10559 6.7348 6.14963 6.858Z\" clip-rule=\"evenodd\"/><path d=\"M17.0863 2.61039C16.2265 2.49997 15.1318 2.49998 13.7672 2.5H10.6775C9.31284 2.49998 8.21815 2.49997 7.35834 2.61039C6.46796 2.72473 5.72561 2.96835 5.13682 3.53075C4.79725 3.8551 4.56856 4.22833 4.41279 4.64928C4.91699 4.41928 5.48704 4.28374 6.12705 4.20084C7.21143 4.06037 8.597 4.06038 10.3463 4.06039H14.2612C16.0105 4.06038 17.396 4.06037 18.4804 4.20084C19.0394 4.27325 19.545 4.38581 20 4.56638C19.8454 4.17917 19.625 3.83365 19.3078 3.53075C18.719 2.96835 17.9767 2.72473 17.0863 2.61039Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:graph-up-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75H15.1893L13.1768 12.7626C13.0791 12.8602 12.9209 12.8602 12.8232 12.7626L11.2374 11.1768C10.554 10.4934 9.44598 10.4934 8.76256 11.1768L6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L9.82322 12.2374C9.92085 12.1398 10.0791 12.1398 10.1768 12.2374L11.7626 13.8232C12.446 14.5066 13.554 14.5066 14.2374 13.8232L16.25 11.8107V12.5C16.25 12.9142 16.5858 13.25 17 13.25C17.4142 13.25 17.75 12.9142 17.75 12.5V10C17.75 9.58579 17.4142 9.25 17 9.25H14.5C14.0858 9.25 13.75 9.58579 13.75 10Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:history-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891ZM11.9999 7.24992C12.4141 7.24992 12.7499 7.58571 12.7499 7.99992V11.6893L15.0302 13.9696C15.3231 14.2625 15.3231 14.7374 15.0302 15.0302C14.7373 15.3231 14.2624 15.3231 13.9696 15.0302L11.2499 12.3106V7.99992C11.2499 7.58571 11.5857 7.24992 11.9999 7.24992Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:home-2-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:inbox-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.8063 19.2647 21.9744 17.3219 21.9966 13.75H18.8397C17.8659 13.75 17.6113 13.766 17.3975 13.8644C17.1838 13.9627 17.0059 14.1456 16.3722 14.8849L15.7667 15.5913L15.6794 15.6933C15.1773 16.2803 14.7796 16.7453 14.2292 16.9984C13.6789 17.2515 13.067 17.2509 12.2945 17.2501L12.1603 17.25H11.8397L11.7055 17.2501C10.933 17.2509 10.3211 17.2515 9.77076 16.9984C9.22038 16.7453 8.82271 16.2803 8.32058 15.6933L8.23327 15.5913L7.62784 14.8849C6.9941 14.1456 6.81622 13.9627 6.60245 13.8644C6.38869 13.766 6.13407 13.75 5.16026 13.75H2.00339C2.02561 17.3219 2.19367 19.2647 3.46447 20.5355Z\"/><path d=\"M20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.25H5.16026L5.29454 12.2499H5.29455C6.06705 12.2491 6.67886 12.2485 7.22924 12.5016C7.77961 12.7547 8.17729 13.2197 8.67941 13.8067L8.76673 13.9087L9.37216 14.6151C10.0059 15.3544 10.1838 15.5373 10.3975 15.6356C10.6113 15.734 10.8659 15.75 11.8397 15.75H12.1603C13.1341 15.75 13.3887 15.734 13.6025 15.6356C13.8162 15.5373 13.9941 15.3544 14.6278 14.6151L15.2333 13.9087L15.3206 13.8067C15.8227 13.2197 16.2204 12.7547 16.7708 12.5016C17.3211 12.2485 17.933 12.2491 18.7055 12.2499L18.8397 12.25H22L22 12C22 7.28595 22 4.92893 20.5355 3.46447Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:info-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:layers-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z\"/><path fill-rule=\"evenodd\" d=\"M2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C10.7661 4 9.77318 4.39718 7.7873 5.19153L4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8Z\" clip-rule=\"evenodd\"/><path d=\"M19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12.4935 2 12C2 11.5551 2.80681 11.1885 4.42043 10.5388L7.56143 11.7952C9.41007 12.535 10.572 13 12 13C13.428 13 14.5899 12.535 16.4386 11.7952L19.5796 10.5388C21.1932 11.1885 22 11.5551 22 12C22 12.4935 21.0071 12.8907 19.0212 13.6851Z\"/><path d=\"M19.0212 17.6849L16.2127 18.8083C14.2268 19.6026 13.2339 19.9998 12 19.9998C10.7661 19.9998 9.77318 19.6026 7.7873 18.8083L4.97883 17.6849C2.99294 16.8905 2 16.4934 2 15.9998C2 15.5549 2.80681 15.1883 4.42043 14.5386L7.56143 15.795C9.41007 16.5348 10.572 16.9998 12 16.9998C13.428 16.9998 14.5899 16.5348 16.4386 15.795L19.5796 14.5386C21.1932 15.1883 22 15.5549 22 15.9998C22 16.4934 21.0071 16.8905 19.0212 17.6849Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:layers-minimalistic-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M7.62442 4.4489C9.50121 3.69796 10.6208 3.25 12 3.25C13.3792 3.25 14.4988 3.69796 16.3756 4.4489L19.3451 5.6367C20.2996 6.01851 21.0728 6.32776 21.6035 6.60601C21.8721 6.74683 22.1323 6.90648 22.333 7.09894C22.5392 7.29668 22.75 7.59658 22.75 8C22.75 8.40342 22.5392 8.70332 22.333 8.90106C22.1323 9.09352 21.8721 9.25317 21.6035 9.39399C21.0728 9.67223 20.2996 9.98148 19.3451 10.3633L16.3756 11.5511C14.4988 12.302 13.3792 12.75 12 12.75C10.6208 12.75 9.50121 12.302 7.62443 11.5511L4.65495 10.3633C3.70037 9.98149 2.9272 9.67223 2.39647 9.39399C2.12786 9.25317 1.86765 9.09352 1.66701 8.90106C1.46085 8.70332 1.25 8.40342 1.25 8C1.25 7.59658 1.46085 7.29668 1.66701 7.09894C1.86765 6.90648 2.12786 6.74683 2.39647 6.60601C2.92721 6.32776 3.70037 6.01851 4.65496 5.63669L7.62442 4.4489Z\"/><path fill-rule=\"evenodd\" d=\"M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415L2.49913 11.4402L2.50261 11.4432C2.50702 11.4471 2.51522 11.4541 2.52722 11.4641C2.55123 11.4842 2.59042 11.5161 2.64479 11.5581C2.75354 11.6422 2.92289 11.7663 3.1528 11.9154C3.61265 12.2136 4.31419 12.6115 5.25737 12.9887L8.06584 14.1121C10.0907 14.922 10.9396 15.25 12 15.25C13.0604 15.25 13.9093 14.922 15.9342 14.1121L18.7426 12.9887C19.6858 12.6115 20.3874 12.2136 20.8472 11.9154C21.0771 11.7663 21.2465 11.6422 21.3552 11.5581C21.4096 11.5161 21.4488 11.4842 21.4728 11.4641C21.4848 11.4541 21.493 11.4471 21.4974 11.4432L21.4995 11.4415C21.5 11.441 21.5006 11.4405 21.5011 11.44C21.8095 11.1652 22.2823 11.1915 22.5583 11.4992C22.8349 11.8075 22.8092 12.2817 22.5008 12.5583L22 12C22.5008 12.5583 22.501 12.5581 22.5008 12.5583L22.4994 12.5595L22.4977 12.5611L22.493 12.5652L22.4793 12.5772C22.4682 12.5868 22.4532 12.5997 22.4341 12.6155C22.3961 12.6473 22.3422 12.6911 22.2724 12.745C22.1329 12.8528 21.9299 13.001 21.6634 13.1739C21.1303 13.5196 20.3424 13.9644 19.2997 14.3814L16.4912 15.5048C16.4524 15.5204 16.4138 15.5358 16.3756 15.5511C14.4988 16.302 13.3792 16.75 12 16.75C10.6208 16.75 9.50121 16.302 7.62442 15.5511C7.58619 15.5358 7.54763 15.5204 7.50875 15.5048L4.70029 14.3814C3.65759 13.9644 2.86971 13.5196 2.33662 13.1739C2.07005 13.001 1.86705 12.8528 1.72757 12.745C1.65782 12.6911 1.60392 12.6473 1.56587 12.6155C1.54684 12.5997 1.53177 12.5868 1.52066 12.5772L1.50696 12.5652L1.50233 12.5611L1.50057 12.5595L1.4995 12.5586C1.49934 12.5584 1.49919 12.5583 2 12L1.4995 12.5586C1.19116 12.282 1.16512 11.8075 1.44171 11.4992C1.71775 11.1915 2.19075 11.1654 2.49913 11.4402M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415V11.4415ZM2.49896 15.4401C2.19058 15.1652 1.71775 15.1915 1.44171 15.4992L2.49896 15.4401ZM2.49896 15.4401L2.50261 15.4432C2.50702 15.4471 2.51522 15.4541 2.52722 15.4641C2.55123 15.4842 2.59042 15.5161 2.64479 15.5581C2.75354 15.6422 2.92289 15.7663 3.1528 15.9154C3.61265 16.2136 4.31419 16.6114 5.25737 16.9887L8.06584 18.1121C10.0907 18.922 10.9396 19.25 12 19.25C13.0604 19.25 13.9093 18.922 15.9342 18.1121L18.7426 16.9887C19.6858 16.6114 20.3874 16.2136 20.8472 15.9154C21.0771 15.7663 21.2465 15.6422 21.3552 15.5581C21.4096 15.5161 21.4488 15.4842 21.4728 15.4641C21.4848 15.4541 21.493 15.4471 21.4974 15.4432L21.4995 15.4415C21.5 15.441 21.5006 15.4405 21.5011 15.44C21.8095 15.1652 22.2823 15.1915 22.5583 15.4992C22.8349 15.8075 22.8092 16.2817 22.5008 16.5583L22.0166 16.0185C22.5008 16.5583 22.501 16.5581 22.5008 16.5583L22.4994 16.5595L22.4977 16.5611L22.493 16.5652L22.4793 16.5772C22.4682 16.5868 22.4532 16.5997 22.4341 16.6155C22.3961 16.6473 22.3422 16.6911 22.2724 16.745C22.1329 16.8528 21.9299 17.001 21.6634 17.1739C21.1303 17.5196 20.3424 17.9644 19.2997 18.3814L16.4912 19.5048C16.4524 19.5204 16.4138 19.5358 16.3756 19.5511C14.4988 20.302 13.3792 20.75 12 20.75C10.6208 20.75 9.50121 20.302 7.62443 19.5511C7.58619 19.5358 7.54763 19.5204 7.50875 19.5048L4.70029 18.3814C3.65759 17.9644 2.86971 17.5196 2.33662 17.1739C2.07005 17.001 1.86705 16.8528 1.72757 16.745C1.65782 16.6911 1.60392 16.6473 1.56587 16.6155C1.54684 16.5997 1.53177 16.5868 1.52066 16.5772L1.50696 16.5652L1.50233 16.5611L1.50057 16.5595L1.4995 16.5586C1.49934 16.5584 1.49919 16.5583 2 16L1.4995 16.5586C1.19116 16.282 1.16512 15.8075 1.44171 15.4992\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:letter-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:link-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z\"/><path d=\"M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:list-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H9C9.41421 16.25 9.75 16.5858 9.75 17C9.75 17.4142 9.41421 17.75 9 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:monitor-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8 17C5.17157 17 3.75736 17 2.87868 16.1213C2.30938 15.552 2.10893 14.7579 2.03835 13.5H21.9616C21.8911 14.7579 21.6906 15.552 21.1213 16.1213C20.2426 17 18.8284 17 16 17H12.75V21H16C16.4142 21 16.75 21.3358 16.75 21.75C16.75 22.1642 16.4142 22.5 16 22.5H8C7.58579 22.5 7.25 22.1642 7.25 21.75C7.25 21.3358 7.58579 21 8 21H11.25V17H8Z\"/><path d=\"M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.0494 21.9935 12.5H2.00652C2 12.0494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:moon-bold": {
    "body": "<path fill=\"currentColor\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:palette-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6ZM7 19.75C7.41421 19.75 7.75 19.4142 7.75 19C7.75 18.5858 7.41421 18.25 7 18.25H5C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H7Z\" clip-rule=\"evenodd\"/><path d=\"M19.0599 10.6144L13.2219 16.704C12.492 17.4653 12.1271 17.8459 11.8135 17.7199C11.5 17.5939 11.5 17.0666 11.5 16.0119L11.5 7.7738C11.5012 7.11381 11.7633 6.48107 12.2291 6.01357L13.2839 4.95882L13.7141 4.62987C14.7183 3.86212 15.2204 3.47825 15.7673 3.3603C16.2175 3.26322 16.6857 3.29236 17.1204 3.4445C17.6484 3.62934 18.099 4.0725 19.0003 4.95883C19.9999 5.95839 20.4997 6.45818 20.685 7.03056C20.843 7.51871 20.847 8.04366 20.6964 8.53417C20.5199 9.10931 20.0332 9.61101 19.0599 10.6144Z\"/><path d=\"M12.7897 22H17.8994C19.2995 22 19.9996 22 20.5344 21.7275C21.0048 21.4878 21.3872 21.1054 21.6269 20.635C21.8994 20.1002 21.8994 19.4001 21.8994 18C21.8994 16.5999 21.8994 15.8998 21.6269 15.365C21.3872 14.8946 21.0048 14.5122 20.5344 14.2725C19.9996 14 19.2995 14 17.8994 14H17.6797L11.878 19.798C11.636 20.0399 11.5 20.3391 11.5 20.6813C11.5 21.3936 12.0774 22 12.7897 22Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:pen-2-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z\" clip-rule=\"evenodd\"/><path d=\"M11.5201 14.929L11.5201 14.9289L17.4368 9.01225C16.6315 8.6771 15.6777 8.12656 14.7757 7.22455C13.8736 6.32238 13.323 5.36846 12.9879 4.56312L7.07106 10.4799L7.07101 10.48C6.60932 10.9417 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.04356 16.8833C3.94194 17.1882 4.02128 17.5243 4.2485 17.7515C4.47573 17.9787 4.81182 18.0581 5.11667 17.9564L8.38334 16.8676C9.00281 16.6611 9.31256 16.5578 9.60398 16.4189C9.94775 16.2551 10.2727 16.0543 10.5729 15.8201C10.8275 15.6215 11.0584 15.3907 11.5201 14.929Z\"/><path d=\"M19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142L13.9199 3.63105C13.9296 3.6604 13.9397 3.69015 13.9502 3.72028C14.2103 4.47 14.701 5.45281 15.6243 6.37602C16.5475 7.29923 17.5303 7.78999 18.28 8.05009C18.31 8.0605 18.3396 8.07054 18.3688 8.08021L19.0786 7.37044Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:play-bold": {
    "body": "<path fill=\"currentColor\" d=\"M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:play-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:question-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:refresh-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z\"/><path d=\"M20.8411 10.4666C20.549 10.1778 20.0789 10.1778 19.7867 10.4666L18.1005 12.1333C17.8841 12.3471 17.8184 12.6703 17.9339 12.9517C18.0495 13.233 18.3235 13.4167 18.6277 13.4167H19.5268C19.1455 17.2462 15.8759 20.25 11.8828 20.25C9.10026 20.25 6.66586 18.7903 5.31796 16.6061C5.10042 16.2536 4.63833 16.1442 4.28583 16.3618C3.93334 16.5793 3.82393 17.0414 4.04146 17.3939C5.65407 20.007 8.56406 21.75 11.8828 21.75C16.6906 21.75 20.6475 18.0892 21.0331 13.4167H22.0002C22.3043 13.4167 22.5783 13.233 22.6939 12.9517C22.8095 12.6703 22.7437 12.3471 22.5274 12.1333L20.8411 10.4666Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:ruler-bold": {
    "body": "<path fill=\"currentColor\" d=\"M2 15.6157C2 16.463 2.68179 17.1448 4.04537 18.5083L5.49167 19.9546C6.85525 21.3182 7.53704 22 8.38426 22C9.23148 22 9.91327 21.3182 11.2769 19.9546L19.9546 11.2769C21.3182 9.91327 22 9.23148 22 8.38426C22 7.53704 21.3182 6.85525 19.9546 5.49167L18.5083 4.04537C17.1448 2.68179 16.463 2 15.6157 2C14.8623 2 14.2396 2.53926 13.1519 3.61778C13.1817 3.63981 13.2103 3.66433 13.2373 3.69135L14.6515 5.10556C14.9444 5.39846 14.9444 5.87333 14.6515 6.16622C14.3586 6.45912 13.8837 6.45912 13.5908 6.16622L12.1766 4.75201C12.1494 4.7248 12.1247 4.69601 12.1026 4.66595L11.0299 5.73861C11.06 5.76077 11.0888 5.78545 11.116 5.81267L13.2373 7.93399C13.5302 8.22688 13.5302 8.70176 13.2373 8.99465C12.9444 9.28754 12.4695 9.28754 12.1766 8.99465L10.0553 6.87333C10.0281 6.84612 10.0034 6.81733 9.98125 6.78726L8.90859 7.85993C8.93865 7.88209 8.96744 7.90678 8.99465 7.93399L10.4089 9.3482C10.7018 9.6411 10.7018 10.116 10.4089 10.4089C10.116 10.7018 9.6411 10.7018 9.3482 10.4089L7.93399 8.99465C7.90678 8.96744 7.88209 8.93865 7.85993 8.90859L6.78727 9.98125C6.81733 10.0034 6.84612 10.0281 6.87333 10.0553L8.99465 12.1766C9.28754 12.4695 9.28754 12.9444 8.99465 13.2373C8.70176 13.5302 8.22688 13.5302 7.93399 13.2373L5.81267 11.116C5.78545 11.0888 5.76077 11.06 5.73861 11.0299L4.66595 12.1026C4.69601 12.1247 4.7248 12.1494 4.75201 12.1766L6.16622 13.5908C6.45912 13.8837 6.45912 14.3586 6.16622 14.6515C5.87333 14.9444 5.39846 14.9444 5.10556 14.6515L3.69135 13.2373C3.66433 13.2103 3.63981 13.1817 3.61778 13.1519C2.53926 14.2396 2 14.8623 2 15.6157Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:ruler-cross-pen-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M4.04537 5.49167L5.49167 4.04537C6.85525 2.68179 7.53704 2 8.38426 2C9.23148 2 9.91327 2.68179 11.2769 4.04537L8.86636 6.45586L4.04537 11.2769L4.04536 11.2768C2.68179 9.91327 2 9.23148 2 8.38426C2 7.53704 2.68179 6.85525 4.04537 5.49167L4.04537 5.49167Z\"/><path d=\"M19.9546 18.5083L18.5083 19.9546C17.1448 21.3182 16.463 22 15.6157 22C14.7685 22 14.0867 21.3182 12.7232 19.9546L12.7231 19.9546L17.5441 15.1336L19.9546 12.7231C21.3182 14.0867 22 14.7685 22 15.6157C22 16.463 21.3182 17.1448 19.9546 18.5083Z\"/><path d=\"M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z\"/><path d=\"M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:scale-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18C16.75 18.4142 16.4142 18.75 16 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18ZM15.3553 6.30984C13.1338 5.89672 10.8663 5.89672 8.64474 6.30984L8.16897 6.39831C7.2887 6.562 6.76942 7.59158 7.10085 8.51607L7.84525 10.5925C7.95314 10.8934 8.2437 11.0592 8.52553 10.9806C8.70281 10.9311 8.88073 10.8855 9.05918 10.8437L8.41984 8.854C8.26351 8.36748 8.49027 7.83168 8.92632 7.65725C9.36237 7.48283 9.84259 7.73584 9.99892 8.22236L10.7514 10.5641C12.3304 10.41 13.9267 10.5488 15.4746 10.9806C15.7564 11.0592 16.047 10.8934 16.1548 10.5925L16.8992 8.51607C17.2307 7.59158 16.7114 6.562 15.8311 6.39831L15.3553 6.30984Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:settings-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:shield-check-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM15.0595 10.4995C15.3353 10.1905 15.3085 9.71642 14.9995 9.44055C14.6905 9.16467 14.2164 9.19151 13.9405 9.50049L10.9286 12.8739L10.0595 11.9005C9.78358 11.5915 9.30947 11.5647 9.00049 11.8405C8.69151 12.1164 8.66467 12.5905 8.94055 12.8995L10.3691 14.4995C10.5114 14.6589 10.7149 14.75 10.9286 14.75C11.1422 14.75 11.3457 14.6589 11.488 14.4995L15.0595 10.4995Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:shield-warning-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167V11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914V10.4167ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:smartphone-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.0516 2H11.9484C10.2682 1.99999 8.93732 1.99997 7.89575 2.14245C6.82382 2.28908 5.95621 2.59803 5.27199 3.29418C4.58778 3.99033 4.28413 4.87308 4.14001 5.9637C3.99997 7.02343 3.99999 8.37751 4 10.087V13.9129C3.99999 15.6225 3.99997 16.9766 4.14001 18.0363C4.28413 19.1269 4.58778 20.0097 5.27199 20.7058C5.95621 21.402 6.82382 21.7109 7.89575 21.8575C8.93731 22 10.2682 22 11.9484 22H12.0516C13.7318 22 15.0627 22 16.1043 21.8575C17.1762 21.7109 18.0438 21.402 18.728 20.7058C19.4122 20.0097 19.7159 19.1269 19.86 18.0363C20 16.9766 20 15.6225 20 13.913V10.0871C20 8.37754 20 7.02343 19.86 5.9637C19.7159 4.87308 19.4122 3.99033 18.728 3.29418C18.0438 2.59803 17.1762 2.28908 16.1043 2.14245C15.0627 1.99997 13.7318 1.99999 12.0516 2ZM8.57143 18.5116C8.57143 18.1263 8.87843 17.814 9.25714 17.814H14.7429C15.1216 17.814 15.4286 18.1263 15.4286 18.5116C15.4286 18.8969 15.1216 19.2093 14.7429 19.2093H9.25714C8.87843 19.2093 8.57143 18.8969 8.57143 18.5116Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:square-double-alt-arrow-right-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12ZM7.96967 9.53033C7.67678 9.23744 7.67678 8.76256 7.96967 8.46967C8.26256 8.17678 8.73744 8.17678 9.03033 8.46967L12.0303 11.4697C12.3232 11.7626 12.3232 12.2374 12.0303 12.5303L9.03033 15.5303C8.73744 15.8232 8.26256 15.8232 7.96967 15.5303C7.67678 15.2374 7.67678 14.7626 7.96967 14.4697L10.4393 12L7.96967 9.53033ZM11.9697 8.46967C11.6768 8.76256 11.6768 9.23744 11.9697 9.53033L14.4393 12L11.9697 14.4697C11.6768 14.7626 11.6768 15.2374 11.9697 15.5303C12.2626 15.8232 12.7374 15.8232 13.0303 15.5303L16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697L13.0303 8.46967C12.7374 8.17678 12.2626 8.17678 11.9697 8.46967Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:sun-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z\"/><path fill-rule=\"evenodd\" d=\"M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:tag-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.5916 20.6555 9.24711 17.9665 6.55812L16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.5988 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816ZM10.1234 7.27098C10.911 8.05856 10.911 9.33549 10.1234 10.1231C9.33581 10.9107 8.05888 10.9107 7.27129 10.1231C6.48371 9.33549 6.48371 8.05856 7.27129 7.27098C8.05888 6.48339 9.33581 6.48339 10.1234 7.27098ZM19.0511 12.0511L12.0721 19.0303C11.7792 19.3232 11.3043 19.3232 11.0114 19.0303C10.7185 18.7375 10.7185 18.2626 11.0114 17.9697L17.9904 10.9904C18.2833 10.6975 18.7582 10.6975 19.0511 10.9904C19.344 11.2833 19.344 11.7582 19.0511 12.0511Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:target-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.2479 2C6.30929 2.36618 2.36618 6.30929 2 11.2479H4.98056C5.39592 11.2479 5.73264 11.5846 5.73264 12C5.73264 12.4154 5.39592 12.7521 4.98056 12.7521H2C2.36618 17.6907 6.30929 21.6338 11.2479 22V19.0194C11.2479 18.6041 11.5846 18.2674 12 18.2674C12.4154 18.2674 12.7521 18.6041 12.7521 19.0194V22C17.6907 21.6338 21.6338 17.6907 22 12.7521H19.0194C18.6041 12.7521 18.2674 12.4154 18.2674 12C18.2674 11.5846 18.6041 11.2479 19.0194 11.2479H22C21.6338 6.30929 17.6907 2.36618 12.7521 2V4.98056C12.7521 5.39592 12.4154 5.73264 12 5.73264C11.5846 5.73264 11.2479 5.39592 11.2479 4.98056V2ZM9.24236 12C9.24236 11.5846 9.57908 11.2479 9.99444 11.2479H11.2479V9.99444C11.2479 9.57908 11.5846 9.24236 12 9.24236C12.4154 9.24236 12.7521 9.57908 12.7521 9.99444V11.2479H14.0056C14.4209 11.2479 14.7576 11.5846 14.7576 12C14.7576 12.4154 14.4209 12.7521 14.0056 12.7521H12.7521V14.0056C12.7521 14.4209 12.4154 14.7576 12 14.7576C11.5846 14.7576 11.2479 14.4209 11.2479 14.0056V12.7521H9.99444C9.57908 12.7521 9.24236 12.4154 9.24236 12Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:test-tube-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8.26697 1.61845C8.47776 1.26188 8.9377 1.14371 9.29427 1.35449L10.126 1.84619L19.3731 7.15338C19.7324 7.35957 19.8564 7.81794 19.6503 8.17719C19.4441 8.53644 18.9857 8.66053 18.6264 8.45434L17.7828 7.97013L16.278 10.5675L16.2762 10.5665L13.7181 9.09467C13.3591 8.8881 12.9006 9.01169 12.694 9.37072C12.4875 9.72975 12.611 10.1883 12.9701 10.3948L15.526 11.8654L14.5646 13.525L14.5628 13.5239L10.3598 11.1057C10.0008 10.8991 9.54227 11.0227 9.3357 11.3818C9.12913 11.7408 9.25272 12.1993 9.61175 12.4059L13.8126 14.8229L12.927 16.3515L12.9252 16.3505L10.3125 14.8472C9.95348 14.6407 9.49497 14.7643 9.2884 15.1233C9.08183 15.4823 9.20542 15.9408 9.56445 16.1474L12.1751 17.6494L11.0558 19.5814C9.7158 21.8943 6.74803 22.6868 4.42709 21.3514C2.10615 20.0161 1.31093 17.0585 2.65093 14.7456L9.37268 3.14332L9.36682 3.13989L8.53093 2.64574C8.17436 2.43495 8.05618 1.97502 8.26697 1.61845Z\"/><path d=\"M20 16.9999C21.1046 16.9999 22 16.0672 22 14.9166C22 14.1967 21.217 13.2358 20.6309 12.6174C20.2839 12.2512 19.7161 12.2512 19.3691 12.6174C18.783 13.2358 18 14.1967 18 14.9166C18 16.0672 18.8954 16.9999 20 16.9999Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:text-bold": {
    "body": "<g fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.934 2h8.132c.886 0 1.65 0 2.262.082c.655.088 1.284.287 1.793.797c.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061c-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v17a1 1 0 1 1-2 0V4H8c-.971 0-1.599.002-2.061.064c-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262c.088-.655.287-1.284.797-1.793c.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 21h10\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:text-field-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM6.81782 7.78733C7.11779 7.74992 7.48429 7.74996 7.88383 7.75H10.1162C10.5157 7.74996 10.8822 7.74992 11.1822 7.78733C11.5109 7.82833 11.8612 7.9242 12.1624 8.19187C12.2138 8.23753 12.2625 8.28618 12.3081 8.33756C12.5758 8.63878 12.6717 8.98915 12.7127 9.31782C12.7501 9.61779 12.7501 9.98428 12.75 10.3838L12.75 10.425C12.75 10.8392 12.4142 11.175 12 11.175C11.5858 11.175 11.25 10.8392 11.25 10.425C11.25 9.97047 11.2486 9.69931 11.2242 9.50348C11.1998 9.30765 10.9965 9.2758 10.9965 9.2758C10.8007 9.25137 10.5295 9.25001 10.075 9.25001H9.75001V14.75H11C11.4142 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 11.4142 16.25 11 16.25H7.00001C6.58579 16.25 6.25001 15.9142 6.25001 15.5C6.25001 15.0858 6.58579 14.75 7.00001 14.75H8.25001V9.25001H7.925C7.47047 9.25001 7.19931 9.25137 7.00348 9.2758C7.00348 9.2758 6.80023 9.30765 6.7758 9.50348C6.75137 9.69931 6.75001 9.97047 6.75001 10.425C6.75001 10.8392 6.41422 11.175 6.00001 11.175C5.58579 11.175 5.25001 10.8392 5.25001 10.425L5.25 10.3838C5.24996 9.98428 5.24992 9.61779 5.28733 9.31782C5.32833 8.98915 5.4242 8.63878 5.69187 8.33756C5.73753 8.28618 5.78618 8.23753 5.83756 8.19187C6.13878 7.9242 6.48915 7.82833 6.81782 7.78733Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:transmission-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4C6 4.83934 5.48296 5.55793 4.75 5.85462V11.25H11.25V5.85462C10.517 5.55793 10 4.83934 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.83934 13.483 5.55793 12.75 5.85462V11.25H16C16.964 11.25 17.6116 11.2484 18.0946 11.1835C18.5561 11.1214 18.7536 11.0142 18.8839 10.8839C19.0142 10.7536 19.1214 10.5561 19.1835 10.0946C19.2484 9.61157 19.25 8.96401 19.25 8V5.85462C18.517 5.55793 18 4.83934 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4C22 4.83934 21.483 5.55793 20.75 5.85462V8.05199C20.75 8.95048 20.7501 9.6997 20.6701 10.2945C20.5857 10.9223 20.4 11.4891 19.9445 11.9445C19.4891 12.4 18.9223 12.5857 18.2945 12.6701C17.6997 12.7501 16.9505 12.75 16.052 12.75L12.75 12.75L12.75 18.1454C13.483 18.4421 14 19.1607 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 19.1607 10.517 18.4421 11.25 18.1454V12.75H4.75V18.1454C5.48296 18.4421 6 19.1607 6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 19.1607 2.51704 18.4421 3.25 18.1454V5.85462C2.51704 5.55793 2 4.83934 2 4Z\"/><path fill-rule=\"evenodd\" d=\"M17.25 15C17.25 14.5858 17.5858 14.25 18 14.25H20.2857C21.6612 14.25 22.75 15.3839 22.75 16.75C22.75 17.8285 22.0713 18.7624 21.1086 19.1077L22.6396 21.6084C22.8559 21.9616 22.7449 22.4234 22.3916 22.6396C22.0384 22.8559 21.5766 22.7449 21.3604 22.3916L19.4369 19.25H18.75V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V15ZM18.75 17.75H20.2857C20.8038 17.75 21.25 17.3169 21.25 16.75C21.25 16.1831 20.8038 15.75 20.2857 15.75H18.75V17.75Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:trash-bin-trash-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z\"/><path fill-rule=\"evenodd\" d=\"M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:users-group-rounded-bold": {
    "body": "<g fill=\"currentColor\"><circle cx=\"9.001\" cy=\"6\" r=\"4\"/><ellipse cx=\"9.001\" cy=\"17.001\" rx=\"7\" ry=\"4\"/><path d=\"M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z\"/><path d=\"M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-5-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M13 15.4C13 13.3258 13 12.2887 13.659 11.6444C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 11.6444C22 12.2887 22 13.3258 22 15.4V17.6C22 19.6742 22 20.7113 21.341 21.3556C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.3556C13 20.7113 13 19.6742 13 17.6V15.4Z\"/><path d=\"M2 8.6C2 10.6742 2 11.7113 2.65901 12.3556C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 12.3556C11 11.7113 11 10.6742 11 8.6V6.4C11 4.32582 11 3.28873 10.341 2.64437C9.68198 2 8.62132 2 6.5 2C4.37868 2 3.31802 2 2.65901 2.64437C2 3.28873 2 4.32582 2 6.4V8.6Z\"/><path d=\"M13 5.5C13 4.4128 13 3.8692 13.1713 3.44041C13.3996 2.86867 13.8376 2.41443 14.389 2.17761C14.8024 2 15.3266 2 16.375 2H18.625C19.6734 2 20.1976 2 20.611 2.17761C21.1624 2.41443 21.6004 2.86867 21.8287 3.44041C22 3.8692 22 4.4128 22 5.5C22 6.5872 22 7.1308 21.8287 7.55959C21.6004 8.13133 21.1624 8.58557 20.611 8.82239C20.1976 9 19.6734 9 18.625 9H16.375C15.3266 9 14.8024 9 14.389 8.82239C13.8376 8.58557 13.3996 8.13133 13.1713 7.55959C13 7.1308 13 6.5872 13 5.5Z\"/><path d=\"M2 18.5C2 19.5872 2 20.1308 2.17127 20.5596C2.39963 21.1313 2.83765 21.5856 3.38896 21.8224C3.80245 22 4.32663 22 5.375 22H7.625C8.67337 22 9.19755 22 9.61104 21.8224C10.1624 21.5856 10.6004 21.1313 10.8287 20.5596C11 20.1308 11 19.5872 11 18.5C11 17.4128 11 16.8692 10.8287 16.4404C10.6004 15.8687 10.1624 15.4144 9.61104 15.1776C9.19755 15 8.67337 15 7.625 15H5.375C4.32663 15 3.80245 15 3.38896 15.1776C2.83765 15.4144 2.39963 15.8687 2.17127 16.4404C2 16.8692 2 17.4128 2 18.5Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-add-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M17.5 2.75C17.9142 2.75 18.25 3.08579 18.25 3.5V5.75H20.5C20.9142 5.75 21.25 6.08579 21.25 6.5C21.25 6.91421 20.9142 7.25 20.5 7.25H18.25V9.5C18.25 9.91421 17.9142 10.25 17.5 10.25C17.0858 10.25 16.75 9.91421 16.75 9.5V7.25H14.5C14.0858 7.25 13.75 6.91421 13.75 6.5C13.75 6.08579 14.0858 5.75 14.5 5.75H16.75V3.5C16.75 3.08579 17.0858 2.75 17.5 2.75Z\" clip-rule=\"evenodd\"/><path d=\"M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z\"/><path d=\"M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z\"/><path d=\"M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z\"/><path d=\"M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z\"/><path d=\"M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z\"/><path d=\"M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z\"/></g>",
    "width": 24,
    "height": 24
  }
};
window.IAK_ICONS_UNRESOLVED = ["solar:bank-bold", "solar:focus-bold", "solar:gem-bold", "solar:magic-stick-3-bold", "solar:magic-stick-bold", "solar:percent-circle-bold", "solar:shapes-bold", "solar:square-bold", "solar:square-bold-duotone"];
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/master/lib/icons.js", error: String((e && e.message) || e) }); }

// archive/iak/master/lib/patterns.js
try { (() => {
/* IAK Master · 10 patterns rendered with IAK components. Fictional data only. */
(function () {
  const h = React.createElement,
    F = React.Fragment;
  const {
    Icon,
    Button,
    TextField,
    Textarea,
    Select,
    Checkbox,
    Switch,
    Badge,
    Card,
    Skeleton,
    Dialog,
    Menu,
    Table,
    Pagination,
    AlertDialog
  } = IAK;
  const TV = IAK.preview.ToastView;
  const BASE = window.IAK_ASSET_BASE || '../../assets/';
  /* ---------- data ---------- */
  const months = ['4월', '5월', '6월', '7월', '8월', '9월'];
  const rev = [182, 204, 196, 231, 248, 263],
    prev = [160, 171, 180, 190, 205, 214];
  const owners = ['김하늘', '이서준', '박민지', '최도윤', null, '정유나'];
  const PN = ['브랜드 리뉴얼', '이벤트 페이지', '파트너 온보딩', '가을 캠페인', '고객 설문 2차', '요금제 개편', '뉴스레터 10월', '모바일 앱 v2', '지원 센터 개편', '연말 리포트', '랜딩 A/B 테스트', '가격 페이지'];
  const ST = ['진행 중', '검토 중', '완료', '보류'],
    TONE = {
      '진행 중': 'info',
      '검토 중': 'warning',
      '완료': 'success',
      '보류': 'neutral'
    };
  const projects = PN.map((n, i) => ({
    id: 'PRJ-' + (412 + i),
    name: n,
    owner: owners[i % 6],
    status: ST[i % 4],
    tasks: i * 7 % 23 + 1,
    due: '2026-' + String(10 + i % 3).padStart(2, '0') + '-' + String(3 + i * 2).padStart(2, '0'),
    budget: i % 5 === 3 ? null : 1200000 + i * 350000
  }));
  const won = v => v == null ? h('span', {
    className: 'miss'
  }, '—') : '₩' + v.toLocaleString('ko-KR');
  const miss = (v, t) => v == null || v === '' ? h('span', {
    className: 'miss'
  }, t || '—') : v;
  /* ---------- charts (data role = blue) ---------- */
  function Bars({
    data,
    labels,
    height = 180,
    a11y
  }) {
    const W = 600,
      H = height,
      max = Math.max(...data.flat()) * 1.15,
      bw = W / labels.length;
    return h('svg', {
      className: 'chart',
      viewBox: `0 0 ${W} ${H + 24}`,
      role: 'img',
      'aria-label': a11y
    }, [0, .5, 1].map(g => h('line', {
      key: g,
      x1: 0,
      x2: W,
      y1: H - H * g,
      y2: H - H * g,
      stroke: 'var(--border-subtle)'
    })), labels.map((l, i) => h('g', {
      key: l
    }, data.map((s, j) => {
      const v = s[i],
        bh = v / max * H,
        x = i * bw + bw * .2 + j * (bw * .3);
      return h('rect', {
        key: j,
        x,
        y: H - bh,
        width: bw * .26,
        height: bh,
        rx: 4,
        fill: j ? 'var(--rais-grey-600)' : 'var(--rais-info)'
      });
    }), h('text', {
      x: i * bw + bw / 2,
      y: H + 18,
      textAnchor: 'middle',
      fill: 'var(--fg-secondary)',
      fontSize: 12
    }, l))));
  }
  function Line({
    series,
    labels,
    height = 200,
    a11y
  }) {
    const W = 600,
      H = height,
      max = Math.max(...series.flat()) * 1.1,
      step = W / (labels.length - 1);
    const pts = s => s.map((v, i) => `${i * step},${H - v / max * H}`).join(' ');
    return h('svg', {
      className: 'chart',
      viewBox: `0 -8 ${W} ${H + 32}`,
      role: 'img',
      'aria-label': a11y,
      preserveAspectRatio: 'none'
    }, [0, .5, 1].map(g => h('line', {
      key: g,
      x1: 0,
      x2: W,
      y1: H - H * g,
      y2: H - H * g,
      stroke: 'var(--border-subtle)'
    })), h('polygon', {
      points: `0,${H} ${pts(series[0])} ${W},${H}`,
      fill: 'color-mix(in srgb,var(--rais-info) 14%,transparent)'
    }), series.map((s, j) => h('polyline', {
      key: j,
      points: pts(s),
      fill: 'none',
      stroke: j ? 'var(--rais-grey-500)' : 'var(--rais-info)',
      strokeWidth: j ? 2 : 3,
      strokeDasharray: j ? '6 6' : undefined,
      vectorEffect: 'non-scaling-stroke'
    })), labels.map((l, i) => h('text', {
      key: l,
      x: Math.min(W - 14, Math.max(14, i * step)),
      y: H + 22,
      textAnchor: 'middle',
      fill: 'var(--fg-secondary)',
      fontSize: 12
    }, l)));
  }
  const Legend = items => h('div', {
    className: 'legend'
  }, items.map(([c, l]) => h('span', {
    key: l
  }, h('i', {
    style: {
      background: c
    }
  }), l)));
  /* ---------- shell ---------- */
  const NAV = [['dashboard', '대시보드', 'eva:home-fill'], ['analytics', '분석', 'solar:chart-2-bold'], ['table', '프로젝트', 'solar:list-bold'], ['chat', 'AI 어시스턴트', 'solar:chat-round-line-bold'], ['builder', '빌더', 'solar:widget-add-bold'], ['billing', '결제', 'solar:card-bold'], ['settings', '설정', 'solar:settings-bold']];
  function Shell({
    active,
    title,
    children,
    state
  }) {
    const [nav, setNav] = React.useState(false);
    return h('div', {
      className: 'ps',
      'data-nav': nav ? 'open' : undefined
    }, h('aside', {
      className: 'ps-side',
      'aria-label': '주 메뉴'
    }, h('div', {
      className: 'ps-brand'
    }, h('img', {
      src: BASE + 'iak-mark.png',
      alt: 'IAK'
    }), h('div', null, h('b', null, 'IAK STUDIO'), h('small', {
      className: 'muted'
    }, 'Master V1'))), h('nav', {
      className: 'ps-nav'
    }, h('div', {
      className: 'ov'
    }, '워크스페이스'), NAV.map(([k, l, ic]) => h('a', {
      key: k,
      href: `?p=${k}&s=default`,
      'aria-current': active === k ? 'page' : undefined,
      title: l
    }, h(Icon, {
      name: ic,
      size: 20
    }), h('span', null, l))))), nav && h('div', {
      className: 'ps-scrim',
      onClick: () => setNav(false)
    }), h('div', {
      className: 'ps-main'
    }, h('header', {
      className: 'ps-top'
    }, h('button', {
      type: 'button',
      className: 'ps-icon-btn ps-menu-btn',
      'aria-label': '메뉴 열기',
      onClick: () => setNav(!nav)
    }, h(Icon, {
      name: 'solar:list-bold'
    })), h('div', {
      className: 'grow'
    }, h('div', {
      className: 'search'
    }, h('input', {
      className: 'iak-input',
      type: 'search',
      placeholder: '프로젝트, 고객, 문서 검색',
      'aria-label': '검색'
    }))), h('button', {
      type: 'button',
      className: 'ps-icon-btn',
      'aria-label': '알림 3개'
    }, h(Icon, {
      name: 'solar:bell-bold'
    }), h('span', {
      className: 'ps-dot'
    })), h('img', {
      className: 'ps-avatar',
      src: BASE + 'avatar-sample.jpg',
      alt: '내 계정'
    })), h('main', {
      className: 'ps-body',
      'data-state': state
    }, children)));
  }
  const Head = (t, d, actions) => h('div', {
    className: 'ps-head'
  }, h('div', null, h('h1', null, t), d && h('p', null, d)), actions && h('div', {
    className: 'ps-actions'
  }, actions));
  const ErrBanner = (msg, retry = true) => h('div', {
    className: 'banner',
    role: 'alert'
  }, h('span', {
    className: 'ic'
  }, h(Icon, {
    name: 'eva:alert-circle-outline'
  })), h('div', {
    className: 'stack',
    style: {
      gap: 8,
      flex: 1
    }
  }, h('b', {
    className: 'strong'
  }, '데이터를 불러오지 못했습니다'), h('span', {
    className: 'muted'
  }, msg), retry && h('div', null, h(Button, {
    variant: 'secondary',
    size: 'sm'
  }, h(Icon, {
    name: 'eva:refresh-fill',
    size: 16
  }), '다시 시도'))));
  const Empty = (icon, t, d, action) => h('div', {
    className: 'empty'
  }, h('div', {
    className: 'plate'
  }, h(Icon, {
    name: icon,
    size: 24
  })), h('h2', null, t), h('p', null, d), action && h('div', {
    className: 'row',
    style: {
      justifyContent: 'center'
    }
  }, action));
  const SkCard = (cls, lines = 2) => h('div', {
    className: cls
  }, h(Card, {
    'aria-busy': 'true'
  }, h(Skeleton, {
    height: 14,
    width: '40%'
  }), h('div', {
    style: {
      height: 12
    }
  }), h(Skeleton, {
    height: 32,
    width: '60%'
  }), lines > 2 && h(F, null, h('div', {
    style: {
      height: 12
    }
  }), h(Skeleton, {
    height: 160
  }))));
  const Kpi = (t, v, d, up, cls = 's3 m2') => h('div', {
    className: cls
  }, h(Card, {
    title: t
  }, h('div', {
    className: 'kpi'
  }, v), d && h('div', {
    className: 'delta ' + (up ? 'up' : 'down')
  }, h(Icon, {
    name: up ? 'eva:arrow-upward-fill' : 'eva:arrow-downward-fill',
    size: 16
  }), d)));
  const pCols = compact => [{
    id: 'name',
    header: '프로젝트',
    cell: r => h('a', {
      href: '?p=detail&s=default'
    }, r.name),
    sortValue: r => r.name
  }, {
    id: 'owner',
    header: '담당',
    cell: r => miss(r.owner, '미지정')
  }, {
    id: 'status',
    header: '상태',
    cell: r => h(Badge, {
      tone: TONE[r.status]
    }, r.status),
    sortValue: r => r.status
  }, {
    id: 'due',
    header: '마감',
    cell: r => r.due,
    sortValue: r => r.due
  }, ...(compact ? [] : [{
    id: 'budget',
    header: '예산',
    cell: r => won(r.budget),
    sortValue: r => r.budget,
    align: 'right'
  }]), {
    id: 'act',
    header: '',
    cell: r => h(Menu, {
      label: r.name + ' 작업',
      trigger: h(Button, {
        variant: 'text',
        size: 'sm',
        'aria-label': r.name + ' 작업'
      }, h(Icon, {
        name: 'eva:more-horizontal-fill',
        size: 20
      })),
      items: [{
        id: 'open',
        label: '열기',
        onSelect() {}
      }, {
        id: 'dup',
        label: '복제',
        onSelect() {}
      }, {
        id: 'arc',
        label: '보관',
        danger: true,
        separatorBefore: true,
        onSelect() {}
      }]
    }),
    align: 'right'
  }];
  /* ---------- screens ---------- */
  const S = {};
  S.dashboard = {
    label: 'Dashboard',
    states: ['default', 'loading', 'empty', 'error'],
    render(s) {
      const act = h(F, null, h(Button, {
        variant: 'secondary'
      }, h(Icon, {
        name: 'eva:download-fill',
        size: 16
      }), '내보내기'), h(Button, null, h(Icon, {
        name: 'eva:plus-fill',
        size: 16
      }), '새 프로젝트'));
      return h(Shell, {
        active: 'dashboard',
        state: s
      }, Head('안녕하세요, 하늘 님', '2026년 9월 25일 · 워크스페이스 “노을 스튜디오”', act), s === 'error' && ErrBanner('매출 집계 서비스 응답이 지연되고 있습니다. 표시된 값은 09:00 기준입니다.'), s === 'empty' ? Empty('solar:layers-bold', '아직 프로젝트가 없습니다', '첫 프로젝트를 만들면 매출, 진행률, 최근 활동이 이곳에 표시됩니다.', h(Button, null, h(Icon, {
        name: 'eva:plus-fill',
        size: 16
      }), '첫 프로젝트 만들기')) : s === 'loading' ? h('div', {
        className: 'ps-grid',
        'aria-busy': 'true',
        'aria-label': '대시보드를 불러오는 중'
      }, SkCard('s3 m2'), SkCard('s3 m2'), SkCard('s3 m2'), SkCard('s3 m2'), SkCard('s8', 3), SkCard('s4', 3)) : h('div', {
        className: 'ps-grid'
      }, Kpi('월 매출', '₩2.63억', '+6.0% 전월 대비', true), Kpi('진행 프로젝트', '12', '+2 이번 주', true), Kpi('평균 응답', '3.4시간', '+0.6시간', false), s === 'error' ? h('div', {
        className: 's3 m2'
      }, h(Card, {
        title: '전환율'
      }, h('div', {
        className: 'kpi miss'
      }, '—'), h('span', {
        className: 'muted',
        style: {
          font: 'var(--text-caption)'
        }
      }, '집계 실패'))) : Kpi('전환율', '4.8%', '+0.3%p', true), h('div', {
        className: 's8'
      }, h(Card, {
        title: '월별 매출 (백만 원)',
        footer: Legend([['var(--rais-info)', '2026'], ['var(--rais-grey-600)', '2025']])
      }, h(Bars, {
        data: [rev, prev],
        labels: months,
        a11y: '4월~9월 매출, 9월 263백만 원으로 최고'
      }))), h('div', {
        className: 's4'
      }, h(Card, {
        title: '최근 활동'
      }, h('ul', {
        className: 'list'
      }, [['김하늘', '브랜드 리뉴얼 시안 v3 업로드', '12분 전'], ['이서준', '가을 캠페인 예산 승인 요청', '1시간 전'], ['박민지', '파트너 온보딩 체크리스트 완료', '어제'], ['최도윤', '뉴스레터 10월 초안 작성', '어제']].map(([n, t, w]) => h('li', {
        key: t
      }, h('span', {
        className: 'ava'
      }, n[0]), h('div', {
        className: 'stack',
        style: {
          gap: 2
        }
      }, h('span', null, t), h('span', {
        className: 'muted',
        style: {
          font: 'var(--text-caption)'
        }
      }, n + ' · ' + w))))))), h('div', {
        className: 's12'
      }, h(Table, {
        caption: '진행 중인 프로젝트',
        columns: pCols(true),
        rows: projects.slice(0, 5),
        rowKey: r => r.id
      }))));
    }
  };
  S.analytics = {
    label: 'Analytics',
    states: ['default', 'loading', 'empty', 'error'],
    render(s) {
      const filters = h('div', {
        className: 'ps-grid'
      }, h('div', {
        className: 's3 m2'
      }, h(Select, {
        label: '기간',
        defaultValue: '6m'
      }, h('option', {
        value: '6m'
      }, '최근 6개월'), h('option', null, '최근 30일'))), h('div', {
        className: 's3 m2'
      }, h(Select, {
        label: '채널'
      }, h('option', null, '전체 채널'), h('option', null, '검색'), h('option', null, '파트너'))), h('div', {
        className: 's3 m2'
      }, h(Select, {
        label: '세그먼트',
        defaultValue: s === 'empty' ? 'ent' : ''
      }, h('option', {
        value: ''
      }, '전체'), h('option', {
        value: 'ent'
      }, '엔터프라이즈 · 해외'))));
      const seg = [['검색', 42], ['파트너', 27], ['직접 방문', 18], ['뉴스레터', 9], ['기타', 4]];
      return h(Shell, {
        active: 'analytics',
        state: s
      }, Head('분석', '채널별 유입과 전환을 비교합니다.', h(Button, {
        variant: 'secondary'
      }, h(Icon, {
        name: 'eva:download-fill',
        size: 16
      }), 'CSV 내보내기')), filters, s === 'error' ? ErrBanner('분석 쿼리 시간이 초과되었습니다. 기간을 줄이거나 다시 시도해 주세요.') : s === 'empty' ? Empty('eva:funnel-fill', '조건에 맞는 데이터가 없습니다', '“엔터프라이즈 · 해외” 세그먼트에는 선택한 기간의 방문 기록이 없습니다.', h(Button, {
        variant: 'secondary'
      }, '필터 초기화')) : s === 'loading' ? h('div', {
        className: 'ps-grid',
        'aria-busy': 'true'
      }, SkCard('s8', 3), SkCard('s4', 3), SkCard('s12', 3)) : h('div', {
        className: 'ps-grid'
      }, h('div', {
        className: 's8'
      }, h(Card, {
        title: '방문 추이 (천 회)',
        footer: Legend([['var(--rais-info)', '이번 기간'], ['var(--rais-grey-500)', '이전 기간']])
      }, h(Line, {
        series: [[38, 44, 41, 52, 58, 63], [33, 35, 37, 40, 42, 45]],
        labels: months,
        a11y: '방문 수 38천에서 63천으로 증가'
      }))), h('div', {
        className: 's4'
      }, h(Card, {
        title: '채널 비중'
      }, h('div', {
        className: 'stack g16'
      }, seg.map(([l, v]) => h('div', {
        key: l,
        className: 'stack',
        style: {
          gap: 6
        }
      }, h('div', {
        className: 'row between'
      }, h('span', null, l), h('span', {
        className: 'num strong'
      }, v + '%')), h('div', {
        className: 'bar',
        role: 'img',
        'aria-label': l + ' ' + v + '%'
      }, h('i', {
        style: {
          width: v + '%'
        }
      }))))))), h('div', {
        className: 's12'
      }, h(Table, {
        caption: '채널별 성과',
        defaultSort: {
          columnId: 'conv',
          direction: 'descending'
        },
        rows: seg.map(([l, v], i) => ({
          id: l,
          ch: l,
          visits: v * 1480,
          conv: [5.2, 6.8, 3.1, 4.4, null][i]
        })),
        rowKey: r => r.id,
        columns: [{
          id: 'ch',
          header: '채널',
          cell: r => r.ch
        }, {
          id: 'visits',
          header: '방문',
          cell: r => r.visits.toLocaleString('ko-KR'),
          sortValue: r => r.visits,
          align: 'right'
        }, {
          id: 'conv',
          header: '전환율',
          cell: r => r.conv == null ? h('span', {
            className: 'miss'
          }, '표본 부족') : r.conv + '%',
          sortValue: r => r.conv,
          align: 'right'
        }]
      }))));
    }
  };
  S.table = {
    label: 'Table',
    states: ['default', 'loading', 'empty', 'error', 'long-text'],
    render(s) {
      const rows = s === 'empty' ? [] : s === 'long-text' ? [{
        ...projects[0],
        name: '2026 하반기 통합 브랜드 리뉴얼 및 파트너 온보딩 캠페인 — 지역별 현지화 포함 (서울·부산·제주)',
        owner: null,
        budget: null
      }, ...projects.slice(1, 6)] : projects;
      return h(Shell, {
        active: 'table',
        state: s
      }, Head('프로젝트', rows.length + '개 프로젝트', h(Button, null, h(Icon, {
        name: 'eva:plus-fill',
        size: 16
      }), '새 프로젝트')), h('div', {
        className: 'ps-grid'
      }, h('div', {
        className: 's6 t8'
      }, h(TextField, {
        label: '검색',
        type: 'search',
        placeholder: '프로젝트 이름',
        defaultValue: s === 'empty' ? '제주 워크숍' : ''
      })), h('div', {
        className: 's3 m2'
      }, h(Select, {
        label: '상태'
      }, h('option', null, '전체'), ST.map(x => h('option', {
        key: x
      }, x)))), h('div', {
        className: 's3 m2'
      }, h(Select, {
        label: '담당'
      }, h('option', null, '전체'), h('option', null, '미지정')))), h(Table, {
        caption: '프로젝트 목록',
        columns: pCols(false),
        rows,
        rowKey: r => r.id,
        loading: s === 'loading',
        error: s === 'error' ? '목록을 불러오지 못했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요.' : undefined,
        emptyMessage: '“제주 워크숍”과 일치하는 프로젝트가 없습니다.',
        pagination: {
          pageSize: 8
        },
        minWidth: 720
      }));
    }
  };
  S.detail = {
    label: 'Detail',
    states: ['default', 'loading', 'missing-data', 'error'],
    render(s) {
      const m = s === 'missing-data',
        p = projects[m ? 4 : 0];
      if (s === 'error') return h(Shell, {
        active: 'table',
        state: s
      }, h('a', {
        href: '?p=table&s=default',
        className: 'row',
        style: {
          gap: 4,
          font: 'var(--text-caption)'
        }
      }, h(Icon, {
        name: 'eva:arrow-ios-back-fill',
        size: 16
      }), '프로젝트 목록'), Empty('solar:shield-warning-bold', '이 프로젝트를 볼 권한이 없습니다', '워크스페이스 관리자에게 “뷰어” 이상의 권한을 요청하세요.', h(Button, {
        variant: 'secondary'
      }, '권한 요청')));
      const act = h(F, null, h(Button, {
        variant: 'secondary'
      }, h(Icon, {
        name: 'eva:edit-fill',
        size: 16
      }), '편집'), h(Menu, {
        label: '프로젝트 작업',
        trigger: h(Button, {
          variant: 'secondary',
          'aria-label': '더보기',
          style: {
            padding: '0 8px'
          }
        }, h(Icon, {
          name: 'eva:more-horizontal-fill'
        })),
        items: [{
          id: 'dup',
          label: '복제',
          onSelect() {}
        }, {
          id: 'link',
          label: '링크 복사',
          onSelect() {}
        }, {
          id: 'arc',
          label: '보관',
          danger: true,
          separatorBefore: true,
          onSelect() {}
        }]
      }));
      return h(Shell, {
        active: 'table',
        state: s
      }, h('a', {
        href: '?p=table&s=default',
        className: 'row',
        style: {
          gap: 4,
          font: 'var(--text-caption)'
        }
      }, h(Icon, {
        name: 'eva:arrow-ios-back-fill',
        size: 16
      }), '프로젝트 목록'), s === 'loading' ? h('div', {
        className: 'ps-grid',
        'aria-busy': 'true'
      }, h('div', {
        className: 's12'
      }, h(Skeleton, {
        height: 40,
        width: '40%'
      })), SkCard('s8', 3), SkCard('s4', 3)) : h(F, null, Head(p.name, p.id + ' · 생성 2026-08-02', act), h('div', {
        className: 'row'
      }, h(Badge, {
        tone: TONE[p.status]
      }, p.status), m ? h(Badge, {
        tone: 'warning'
      }, h(Icon, {
        name: 'eva:alert-triangle-fill',
        size: 16
      }), '필수 정보 2개 누락') : h(Badge, null, '마감 ' + p.due)), h('div', {
        className: 'ps-grid'
      }, h('div', {
        className: 's8'
      }, h(Card, {
        title: '개요'
      }, h('dl', {
        className: 'dl'
      }, h('dt', null, '담당'), h('dd', null, miss(m ? null : p.owner, '미지정')), h('dt', null, '고객'), h('dd', null, m ? miss(null, '미입력') : '노을상사 (가상)'), h('dt', null, '예산'), h('dd', null, won(m ? null : p.budget)), h('dt', null, '기간'), h('dd', null, '2026-08-02 → ' + p.due), h('dt', null, '설명'), h('dd', null, m ? miss(null, '설명이 없습니다. 편집에서 추가하세요.') : '기존 브랜드 가이드를 디지털 채널 중심으로 재정비하고, 파트너용 키트를 새로 제작합니다.')))), h('div', {
        className: 's4'
      }, h(Card, {
        title: '진행률'
      }, h('div', {
        className: 'kpi'
      }, m ? '0%' : '68%'), h('div', {
        className: 'bar',
        style: {
          marginTop: 12
        }
      }, h('i', {
        style: {
          width: m ? '0%' : '68%'
        }
      })), h('p', {
        className: 'muted',
        style: {
          marginTop: 8,
          font: 'var(--text-caption)'
        }
      }, m ? '작업이 아직 없습니다.' : '작업 17 / 25 완료'))), h('div', {
        className: 's12'
      }, h(Card, {
        title: '활동'
      }, m ? h('p', {
        className: 'muted'
      }, '기록된 활동이 없습니다.') : h('ul', {
        className: 'list'
      }, [['시안 v3 업로드', '김하늘', '오늘 09:12'], ['예산 승인', '정유나', '어제 17:40'], ['킥오프 미팅 기록 추가', '이서준', '8월 2일']].map(([t, n, w]) => h('li', {
        key: t
      }, h('span', {
        className: 'tl-dot'
      }), h('div', {
        className: 'stack',
        style: {
          gap: 2
        }
      }, h('span', null, t), h('span', {
        className: 'muted',
        style: {
          font: 'var(--text-caption)'
        }
      }, n + ' · ' + w))))))))));
    }
  };
  S.settings = {
    label: 'Settings',
    states: ['default', 'saving', 'error', 'success'],
    render(s) {
      const e = s === 'error';
      return h(Shell, {
        active: 'settings',
        state: s
      }, Head('설정', '워크스페이스 정보와 알림을 관리합니다.'), e && h('div', {
        className: 'banner',
        role: 'alert'
      }, h('span', {
        className: 'ic'
      }, h(Icon, {
        name: 'eva:alert-circle-outline'
      })), h('div', null, h('b', {
        className: 'strong'
      }, '2개 항목을 확인해 주세요'), h('div', {
        className: 'muted'
      }, '오류가 있는 필드를 수정한 뒤 다시 저장하세요.'))), h('div', {
        className: 'ps-grid'
      }, h('div', {
        className: 's8'
      }, h(Card, {
        title: '워크스페이스',
        footer: h('div', {
          className: 'row',
          style: {
            justifyContent: 'flex-end'
          }
        }, h(Button, {
          variant: 'secondary',
          disabled: s === 'saving'
        }, '취소'), h(Button, {
          loading: s === 'saving'
        }, '변경 사항 저장'))
      }, h('div', {
        className: 'stack g16'
      }, h(TextField, {
        label: '워크스페이스 이름',
        defaultValue: e ? '' : '노을 스튜디오',
        required: true,
        error: e ? '이름을 입력해 주세요.' : undefined,
        disabled: s === 'saving'
      }), h(TextField, {
        label: '청구 이메일',
        type: 'email',
        defaultValue: e ? 'billing@noeul' : 'billing@noeul.example',
        error: e ? '올바른 이메일 형식이 아닙니다.' : undefined,
        description: e ? undefined : '청구서와 결제 알림을 받습니다.',
        disabled: s === 'saving'
      }), h(Select, {
        label: '기본 언어',
        defaultValue: 'ko',
        disabled: s === 'saving'
      }, h('option', {
        value: 'ko'
      }, '한국어'), h('option', {
        value: 'en'
      }, 'English')), h(Textarea, {
        label: '소개',
        rows: 3,
        defaultValue: '브랜드와 캠페인을 함께 만드는 팀입니다.',
        disabled: s === 'saving'
      })))), h('div', {
        className: 's4'
      }, h(Card, {
        title: '알림'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 4
        }
      }, h(Switch, {
        label: '이메일 요약 (매일 오전 9시)',
        defaultChecked: true,
        disabled: s === 'saving'
      }), h(Switch, {
        label: '결제 실패 즉시 알림',
        defaultChecked: true,
        disabled: s === 'saving'
      }), h(Switch, {
        label: '주간 리포트',
        disabled: s === 'saving'
      }), h('div', {
        style: {
          height: 8
        }
      }), h(Checkbox, {
        label: '업무 시간 외 알림 끄기',
        defaultChecked: true,
        disabled: s === 'saving'
      }))))), s === 'success' && h('ol', {
        className: 'iak-toast-viewport'
      }, h(TV, {
        tone: 'success',
        title: '설정을 저장했습니다.',
        description: '모든 멤버에게 즉시 적용됩니다.'
      })));
    }
  };
  S.billing = {
    label: 'Billing',
    states: ['default', 'loading', 'error', 'empty'],
    render(s) {
      const inv = s === 'empty' ? [] : [['INV-2609', '2026-09-01', 490000, '결제 완료'], ['INV-2608', '2026-08-01', 490000, '결제 완료'], ['INV-2607', '2026-07-01', 390000, '결제 완료'], ['INV-2606', '2026-06-01', 390000, '환불']].map(([id, d, a, st]) => ({
        id,
        d,
        a,
        st
      }));
      return h(Shell, {
        active: 'billing',
        state: s
      }, Head('결제', '요금제, 사용량, 청구서를 확인합니다.'), s === 'error' && h('div', {
        className: 'banner',
        role: 'alert'
      }, h('span', {
        className: 'ic'
      }, h(Icon, {
        name: 'solar:danger-triangle-bold'
      })), h('div', {
        className: 'stack',
        style: {
          gap: 8,
          flex: 1
        }
      }, h('b', {
        className: 'strong'
      }, '10월 자동 결제에 실패했습니다'), h('span', {
        className: 'muted'
      }, '카드(가상) •••• 4021의 유효기간이 만료되었습니다. 10월 8일까지 결제 수단을 변경하지 않으면 편집 기능이 제한됩니다.'), h('div', null, h(Button, {
        size: 'sm'
      }, '결제 수단 변경')))), s === 'loading' ? h('div', {
        className: 'ps-grid',
        'aria-busy': 'true'
      }, SkCard('s5', 3), SkCard('s7', 3), SkCard('s12', 3)) : h('div', {
        className: 'ps-grid'
      }, h('div', {
        className: 's5'
      }, h(Card, {
        title: '현재 요금제',
        footer: '다음 결제일 2026-10-01'
      }, h('div', {
        className: 'row between'
      }, h('div', null, h('div', {
        className: 'kpi'
      }, 'Team'), h('span', {
        className: 'muted'
      }, '월 ₩490,000 · 멤버 20명')), h(Badge, {
        tone: s === 'error' ? 'error' : 'success'
      }, s === 'error' ? '결제 실패' : '활성')), h('div', {
        className: 'row',
        style: {
          marginTop: 16
        }
      }, h(Button, {
        variant: 'secondary'
      }, '요금제 변경'), h(Button, {
        variant: 'text'
      }, '해지 안내')))), h('div', {
        className: 's7'
      }, h(Card, {
        title: '이번 달 사용량'
      }, h('div', {
        className: 'stack g16'
      }, [['멤버', '14 / 20명', 70], ['저장 공간', '82 / 100GB', 82], ['AI 크레딧', '9,200 / 10,000', 92]].map(([l, v, p]) => h('div', {
        key: l,
        className: 'stack',
        style: {
          gap: 6
        }
      }, h('div', {
        className: 'row between'
      }, h('span', null, l), h('span', {
        className: 'num'
      }, v, p >= 90 && h(Badge, {
        tone: 'warning',
        style: {
          marginLeft: 8
        }
      }, '한도 임박'))), h('div', {
        className: 'bar'
      }, h('i', {
        style: {
          width: p + '%'
        }
      }))))))), h('div', {
        className: 's12'
      }, h(Table, {
        caption: '청구서',
        rows: inv,
        rowKey: r => r.id,
        emptyMessage: '아직 발행된 청구서가 없습니다. 첫 청구서는 2026-10-01에 발행됩니다.',
        columns: [{
          id: 'id',
          header: '번호',
          cell: r => r.id
        }, {
          id: 'd',
          header: '발행일',
          cell: r => r.d,
          sortValue: r => r.d
        }, {
          id: 'a',
          header: '금액',
          cell: r => '₩' + r.a.toLocaleString('ko-KR'),
          align: 'right',
          sortValue: r => r.a
        }, {
          id: 'st',
          header: '상태',
          cell: r => h(Badge, {
            tone: r.st === '환불' ? 'neutral' : 'success'
          }, r.st)
        }, {
          id: 'dl',
          header: '',
          align: 'right',
          cell: r => h(Button, {
            variant: 'text',
            size: 'sm',
            'aria-label': r.id + ' PDF 다운로드'
          }, h(Icon, {
            name: 'eva:download-fill',
            size: 16
          }), 'PDF')
        }]
      }))));
    }
  };
  S.chat = {
    label: 'AI Chat',
    states: ['default', 'streaming', 'empty', 'error'],
    render(s) {
      const threads = ['가을 캠페인 카피 초안', '채널 성과 요약', '온보딩 메일 톤 조정', '청구서 문의 답변'];
      const log = s === 'empty' ? null : [h('div', {
        key: 1,
        className: 'bubble me'
      }, '9월 채널 성과를 세 줄로 요약해 줘.'), h('div', {
        key: 2,
        className: 'bubble'
      }, '1. 검색 유입이 42%로 가장 높고 전월 대비 +6%입니다.', h('br'), '2. 파트너 채널 전환율이 6.8%로 가장 효율적입니다.', h('br'), '3. 뉴스레터는 방문 비중 9%로 개선 여지가 있습니다.'), h('div', {
        key: 3,
        className: 'bubble me'
      }, '파트너 채널 예산을 늘리면 어떤 위험이 있어?'), s === 'streaming' ? h('div', {
        key: 4,
        className: 'bubble',
        role: 'status',
        'aria-live': 'polite'
      }, h('span', {
        className: 'is-streaming'
      }, '표본이 5개 파트너에 집중되어 있어, 예산을 늘리면 특정 파트너 의존도가 ')) : s === 'error' ? h('div', {
        key: 4,
        className: 'banner',
        role: 'alert'
      }, h('span', {
        className: 'ic'
      }, h(Icon, {
        name: 'eva:alert-circle-outline'
      })), h('div', {
        className: 'stack',
        style: {
          gap: 8
        }
      }, h('span', null, '응답을 생성하지 못했습니다. 입력한 내용은 유지됩니다.'), h('div', null, h(Button, {
        variant: 'secondary',
        size: 'sm'
      }, h(Icon, {
        name: 'eva:refresh-fill',
        size: 16
      }), '다시 생성')))) : h('div', {
        key: 4,
        className: 'bubble'
      }, '파트너 5곳이 전환의 80%를 차지해 의존도가 커집니다. 단계적으로 20%씩 증액하며 주간 전환율을 확인하는 방식을 권합니다.')];
      return h(Shell, {
        active: 'chat',
        state: s
      }, Head('AI 어시스턴트', '가상 예시 대화 · 실제 모델에 연결되어 있지 않습니다.'), h('div', {
        className: 'chat'
      }, h('div', {
        className: 'threads'
      }, h(Card, {
        title: '대화'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 4
        }
      }, h(Button, {
        variant: 'secondary',
        size: 'sm'
      }, h(Icon, {
        name: 'eva:plus-fill',
        size: 16
      }), '새 대화'), h('ul', {
        className: 'list'
      }, threads.map((t, i) => h('li', {
        key: t
      }, h('a', {
        href: '#',
        style: {
          color: i === 1 && s !== 'empty' ? 'var(--accent)' : 'var(--fg-primary)',
          textDecoration: 'none'
        }
      }, t))))))), h(Card, {
        title: s === 'empty' ? '새 대화' : '채널 성과 요약'
      }, h('div', {
        className: 'stack g24',
        style: {
          minHeight: 380
        }
      }, s === 'empty' ? h('div', {
        className: 'stack',
        style: {
          alignItems: 'center',
          textAlign: 'center',
          padding: '48px 0',
          gap: 16
        }
      }, h('div', {
        className: 'empty plate',
        style: {
          padding: 0,
          border: 0
        }
      }, h(Icon, {
        name: 'solar:chat-round-line-bold',
        size: 24
      })), h('h2', {
        style: {
          font: 'var(--text-h2)',
          color: 'var(--fg-strong)'
        }
      }, '무엇을 도와드릴까요?'), h('div', {
        className: 'row',
        style: {
          justifyContent: 'center'
        }
      }, ['이번 달 매출 요약', '지연 프로젝트 찾기', '고객 답장 초안'].map(t => h(Button, {
        key: t,
        variant: 'secondary',
        size: 'sm'
      }, t)))) : h('div', {
        className: 'chat-log'
      }, log), h('div', {
        className: 'stack',
        style: {
          gap: 8
        }
      }, h(Textarea, {
        label: '메시지',
        rows: 2,
        placeholder: '질문을 입력하세요',
        disabled: s === 'streaming'
      }), h('div', {
        className: 'row between'
      }, h('span', {
        className: 'muted',
        style: {
          font: 'var(--text-caption)'
        }
      }, 'AI 응답은 부정확할 수 있습니다.'), s === 'streaming' ? h(Button, {
        variant: 'secondary'
      }, '생성 중지') : h(Button, null, '보내기')))))));
    }
  };
  S.builder = {
    label: 'Builder',
    states: ['default', 'selected', 'dragging', 'empty'],
    render(s) {
      const blocks = s === 'empty' ? [] : [['hero', 'solar:gallery-wide-bold', '헤더 이미지'], ['text', 'solar:text-bold', '제목과 본문'], ['cta', 'solar:cursor-bold', '행동 버튼'], ['form', 'solar:text-field-bold', '문의 폼']];
      const sel = s === 'selected' || s === 'dragging' ? 'cta' : null;
      return h(Shell, {
        active: 'builder',
        state: s
      }, Head('랜딩 페이지 빌더', '가을 캠페인 · 초안 저장됨 09:40', h(F, null, h(Button, {
        variant: 'secondary'
      }, h(Icon, {
        name: 'solar:play-bold',
        size: 16
      }), '미리보기'), h(Button, null, '게시'))), h('div', {
        className: 'builder'
      }, h('div', {
        className: 'pal-wrap'
      }, h(Card, {
        title: '블록'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 8
        }
      }, [['solar:gallery-wide-bold', '이미지'], ['solar:text-bold', '텍스트'], ['solar:cursor-bold', '버튼'], ['solar:text-field-bold', '폼'], ['solar:widget-5-bold', '카드 그리드']].map(([ic, l]) => h('div', {
        key: l,
        className: 'pal',
        draggable: true
      }, h(Icon, {
        name: ic,
        size: 20
      }), l))))), h(Card, {
        title: '캔버스'
      }, h('div', {
        className: 'stack',
        role: 'listbox',
        'aria-label': '페이지 블록'
      }, blocks.length ? blocks.map(([id, ic, l], i) => h(F, {
        key: id
      }, s === 'dragging' && i === 2 && h('div', {
        className: 'drop on'
      }, '여기에 놓기'), h('div', {
        className: 'block',
        role: 'option',
        'aria-selected': sel === id,
        'data-dragging': s === 'dragging' && id === 'cta' ? '' : undefined,
        tabIndex: 0
      }, h(Icon, {
        name: ic
      }), h('span', {
        style: {
          flex: 1
        }
      }, l), h('span', {
        className: 'muted',
        style: {
          font: 'var(--text-caption)'
        }
      }, '#' + (i + 1))))) : h('div', {
        className: 'drop',
        style: {
          height: 240
        }
      }, '왼쪽에서 블록을 끌어 놓거나 ', h(Button, {
        variant: 'text',
        size: 'sm'
      }, '템플릿 불러오기')))), h('div', {
        className: 'props'
      }, h(Card, {
        title: '속성'
      }, sel ? h('div', {
        className: 'stack g16'
      }, h(TextField, {
        label: '버튼 문구',
        defaultValue: '무료로 시작하기'
      }), h(Select, {
        label: '스타일',
        defaultValue: 'primary'
      }, h('option', {
        value: 'primary'
      }, 'primary'), h('option', {
        value: 'secondary'
      }, 'secondary')), h(TextField, {
        label: '링크',
        defaultValue: 'https://example.com/start'
      }), h(Switch, {
        label: '새 탭에서 열기'
      })) : h('p', {
        className: 'muted'
      }, s === 'empty' ? '블록을 추가하면 속성이 표시됩니다.' : '블록을 선택하세요.')))));
    }
  };
  S.modal = {
    label: 'Modal',
    states: ['dialog', 'confirm', 'pending', 'error'],
    render(s) {
      const bg = h('div', {
        className: 'ghost',
        'aria-hidden': 'true'
      }, h(Table, {
        caption: '프로젝트 목록',
        columns: pCols(true),
        rows: projects.slice(0, 6),
        rowKey: r => r.id
      }));
      const d = s === 'dialog' ? h(Dialog, {
        inline: true,
        title: '새 프로젝트',
        description: '기본 정보만 입력하면 바로 시작할 수 있습니다.',
        footer: h(F, null, h(Button, {
          variant: 'secondary'
        }, '취소'), h(Button, null, '만들기'))
      }, h('div', {
        className: 'stack g16'
      }, h(TextField, {
        label: '프로젝트 이름',
        required: true,
        placeholder: '예: 겨울 캠페인'
      }), h(Select, {
        label: '담당'
      }, owners.filter(Boolean).map(o => h('option', {
        key: o
      }, o))), h(Textarea, {
        label: '설명',
        rows: 3
      }))) : h(AlertDialog, {
        inline: true,
        danger: s !== 'error',
        title: s === 'error' ? '프로젝트를 보관할까요?' : '프로젝트 3개를 삭제할까요?',
        description: s === 'error' ? '보관함에서 다시 복원할 수 있습니다.' : '삭제한 프로젝트와 파일은 복원할 수 없습니다.',
        confirmLabel: s === 'error' ? '보관' : '삭제',
        previewState: s === 'pending' ? 'pending' : s === 'error' ? 'error' : undefined,
        onConfirm() {}
      });
      return h(Shell, {
        active: 'table',
        state: s
      }, Head('프로젝트', '12개 프로젝트'), bg, d);
    }
  };
  S.empty = {
    label: 'Empty',
    states: ['first-run', 'no-results', 'no-access'],
    render(s) {
      const m = {
        'first-run': ['solar:widget-add-bold', '워크스페이스가 준비되었습니다', '팀원을 초대하고 첫 프로젝트를 만들어 보세요. 샘플 데이터로 먼저 둘러볼 수도 있습니다.', h(F, null, h(Button, null, h(Icon, {
          name: 'eva:plus-fill',
          size: 16
        }), '첫 프로젝트 만들기'), h(Button, {
          variant: 'secondary'
        }, '샘플 데이터 보기'))],
        'no-results': ['eva:search-fill', '“제주 워크숍” 검색 결과가 없습니다', '철자를 확인하거나 필터를 줄여 보세요. 보관된 프로젝트는 검색에 포함되지 않습니다.', h(Button, {
          variant: 'secondary'
        }, '필터 초기화')],
        'no-access': ['solar:shield-warning-bold', '접근 권한이 필요합니다', '이 영역은 관리자만 볼 수 있습니다. 필요하면 워크스페이스 관리자에게 요청하세요.', h(Button, {
          variant: 'secondary'
        }, '권한 요청')]
      }[s];
      return h(Shell, {
        active: 'dashboard',
        state: s
      }, s === 'first-run' ? h('div', {
        className: 'iak-card motif',
        style: {
          minHeight: 160,
          justifyContent: 'center'
        }
      }, h('img', {
        className: 'deco',
        src: BASE + 'graphic-motif-chrome.jpg',
        alt: ''
      }), h('div', {
        style: {
          position: 'relative',
          maxWidth: 520
        }
      }, h('div', {
        className: 'ov'
      }, '시작하기'), h('h1', {
        style: {
          font: 'var(--text-h1)',
          color: 'var(--fg-strong)',
          marginTop: 8
        }
      }, '노을 스튜디오에 오신 것을 환영합니다'))) : Head(s === 'no-results' ? '프로젝트' : '감사 로그'), Empty(m[0], m[1], m[2], m[3]));
    }
  };
  S.detail.label = 'Detail';
  window.IAK_PATTERNS = S;
  window.IAK_mountPattern = function (el, p, s) {
    const def = S[p] || S.dashboard;
    const st = def.states.includes(s) ? s : def.states[0];
    document.title = 'IAK · ' + def.label + ' · ' + st;
    ReactDOM.createRoot(el).render(h(() => def.render(st)));
    return {
      p: S[p] ? p : 'dashboard',
      s: st
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/master/lib/patterns.js", error: String((e && e.message) || e) }); }

// archive/iak/ui_kits/rais-dashboard/Components.jsx
try { (() => {
// MetricCard, Stepper, Toast, Button, Field, Chip
const MetricCard = ({
  label,
  value,
  delta,
  deltaDir,
  sub,
  icon,
  glow
}) => /*#__PURE__*/React.createElement("div", {
  className: "metric-card"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric-head"
}, /*#__PURE__*/React.createElement("div", {
  className: "metric-icon " + (glow || "")
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: icon,
  width: "22"
})), /*#__PURE__*/React.createElement("button", {
  className: "icon-btn sm"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "eva:more-horizontal-fill",
  width: "18"
}))), /*#__PURE__*/React.createElement("div", {
  className: "metric-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "metric-value"
}, value), /*#__PURE__*/React.createElement("div", {
  className: "metric-foot"
}, /*#__PURE__*/React.createElement("span", {
  className: "delta " + deltaDir
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: deltaDir === "up" ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill",
  width: "14"
}), delta), /*#__PURE__*/React.createElement("span", {
  className: "metric-sub"
}, sub)));
const Stepper = ({
  steps,
  active
}) => /*#__PURE__*/React.createElement("div", {
  className: "stepper"
}, steps.map((s, i) => {
  const state = i < active ? "done" : i === active ? "active" : "idle";
  return /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step " + state
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-num"
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "step-label"
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "step-sep"
  }));
}));
const Toast = ({
  severity,
  message,
  onClose
}) => {
  const icons = {
    info: "solar:info-circle-bold",
    success: "eva:checkmark-fill",
    warning: "solar:danger-triangle-bold",
    error: "solar:close-circle-bold",
    default: "solar:info-circle-bold"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "toast t-" + (severity || "default")
  }, /*#__PURE__*/React.createElement("span", {
    className: "toast-icon"
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: icons[severity || "default"],
    width: "16"
  })), /*#__PURE__*/React.createElement("span", {
    className: "toast-msg"
  }, message), /*#__PURE__*/React.createElement("button", {
    className: "toast-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("iconify-icon", {
    icon: "solar:close-circle-bold",
    width: "20"
  })));
};
const Button = ({
  variant = "contained",
  color = "primary",
  size = "md",
  children,
  onClick,
  disabled,
  glow
}) => /*#__PURE__*/React.createElement("button", {
  className: `btn btn-${variant} btn-${color} btn-${size}` + (glow ? " btn-glow" : ""),
  onClick: onClick,
  disabled: disabled
}, children);
const Field = ({
  label,
  placeholder,
  value,
  state
}) => /*#__PURE__*/React.createElement("div", {
  className: "field " + (state || "")
}, label && /*#__PURE__*/React.createElement("span", {
  className: "field-label"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "field-ctrl"
}, /*#__PURE__*/React.createElement("span", null, value || /*#__PURE__*/React.createElement("span", {
  className: "field-placeholder"
}, placeholder))));
const Chip = ({
  tone = "default",
  children,
  removable
}) => /*#__PURE__*/React.createElement("span", {
  className: "chip chip-" + tone
}, children, removable && /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:close-circle-bold",
  width: "14"
}));
Object.assign(window, {
  MetricCard,
  Stepper,
  Toast,
  Button,
  Field,
  Chip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/ui_kits/rais-dashboard/Components.jsx", error: String((e && e.message) || e) }); }

// archive/iak/ui_kits/rais-dashboard/Sidebar.jsx
try { (() => {
// Sidebar.jsx — fixed left nav, 280px wide
const SidebarItem = ({
  icon,
  label,
  active,
  sub,
  badge
}) => /*#__PURE__*/React.createElement("div", {
  className: "side-item" + (active ? " active" : "") + (sub ? " sub" : "")
}, icon && /*#__PURE__*/React.createElement("iconify-icon", {
  icon: icon,
  width: sub ? 18 : 22
}), /*#__PURE__*/React.createElement("span", {
  className: "side-label"
}, label), badge && /*#__PURE__*/React.createElement("span", {
  className: "side-badge"
}, badge));
const SidebarSection = ({
  title,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "side-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "rais-overline side-section-title"
}, title), children);
const Sidebar = () => /*#__PURE__*/React.createElement("aside", {
  className: "sidebar"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/iak-mark.png",
  alt: "",
  className: "brand-mark"
}), /*#__PURE__*/React.createElement("div", {
  className: "brand-word"
}, /*#__PURE__*/React.createElement("div", {
  className: "brand-name"
}, "IAK STUDIO"), /*#__PURE__*/React.createElement("div", {
  className: "brand-tier"
}, "RAIS \xB7 Pro"))), /*#__PURE__*/React.createElement("div", {
  className: "org"
}, /*#__PURE__*/React.createElement("div", {
  className: "org-avatar"
}, "RA"), /*#__PURE__*/React.createElement("div", {
  className: "org-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "org-name"
}, "Rais Workspace"), /*#__PURE__*/React.createElement("div", {
  className: "org-role"
}, "Free")), /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "eva:arrow-ios-downward-fill",
  width: "18",
  style: {
    color: "var(--fg-secondary)"
  }
})), /*#__PURE__*/React.createElement(SidebarSection, {
  title: "OVERVIEW"
}, /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:widget-bold",
  label: "App"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:chart-2-bold",
  label: "Analytics",
  active: true
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:bag-2-bold",
  label: "E-commerce"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:bank-bold",
  label: "Banking"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:book-2-bold",
  label: "Booking"
})), /*#__PURE__*/React.createElement(SidebarSection, {
  title: "MANAGEMENT"
}, /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:users-group-rounded-bold",
  label: "User"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:chat-round-line-bold",
  label: "Mailing",
  badge: "2"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:bell-bold",
  label: "Push alarm"
}), /*#__PURE__*/React.createElement(SidebarItem, {
  icon: "solar:settings-bold",
  label: "Settings"
})), /*#__PURE__*/React.createElement("div", {
  className: "upsell"
}, /*#__PURE__*/React.createElement("div", {
  className: "upsell-title"
}, "Pro plan"), /*#__PURE__*/React.createElement("div", {
  className: "upsell-body"
}, "Unlock advanced reporting and Slack integration."), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-contained btn-sm"
}, "Upgrade")));
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/ui_kits/rais-dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// archive/iak/ui_kits/rais-dashboard/TopBar.jsx
try { (() => {
// TopBar.jsx
const TopBar = ({
  onToast
}) => /*#__PURE__*/React.createElement("header", {
  className: "topbar"
}, /*#__PURE__*/React.createElement("div", {
  className: "search"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "eva:search-fill",
  width: "20",
  style: {
    color: "var(--fg-muted)"
  }
}), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search\u2026"
}), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("div", {
  className: "topbar-right"
}, /*#__PURE__*/React.createElement("button", {
  className: "icon-btn",
  title: "Languages"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "circle-flags:us",
  width: "22"
})), /*#__PURE__*/React.createElement("button", {
  className: "icon-btn",
  title: "Theme"
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:moon-bold",
  width: "20"
})), /*#__PURE__*/React.createElement("button", {
  className: "icon-btn dot",
  title: "Notifications",
  onClick: onToast
}, /*#__PURE__*/React.createElement("iconify-icon", {
  icon: "solar:bell-bold",
  width: "20"
}), /*#__PURE__*/React.createElement("span", {
  className: "bell-dot"
})), /*#__PURE__*/React.createElement("div", {
  className: "avatar-wrap"
}, /*#__PURE__*/React.createElement("img", {
  className: "avatar",
  src: "../../assets/avatar-sample.jpg",
  alt: ""
}), /*#__PURE__*/React.createElement("span", {
  className: "avatar-status"
}))));
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/iak/ui_kits/rais-dashboard/TopBar.jsx", error: String((e && e.message) || e) }); }

// iak-kids-v2.2-templates/templates/kid-activity/ds-base.js
try { (() => {
// IAK KIDS_V1 · Little Everyday v2.2 — template loader. Consuming project: point `base` at the bound _ds/<folder> tree.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  // Bundle components are thin wrappers over window.ZEM → icons.js + zem-ui.js must load first, in order.
  for (const p of ['zem/lib/icons.js', 'zem/lib/zem-ui.js', '_ds_bundle.js']) {
    const s = document.createElement('script');
    s.src = base + '/' + p;
    s.async = false;
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — fix the base path in ds-base.js');
    document.head.appendChild(s);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "iak-kids-v2.2-templates/templates/kid-activity/ds-base.js", error: String((e && e.message) || e) }); }

// iak-kids-v2.2-templates/templates/parent-dashboard/ds-base.js
try { (() => {
// IAK KIDS_V1 · Little Everyday v2.2 — template loader. Consuming project: point `base` at the bound _ds/<folder> tree.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  // Bundle components are thin wrappers over window.ZEM → icons.js + zem-ui.js must load first, in order.
  for (const p of ['zem/lib/icons.js', 'zem/lib/zem-ui.js', '_ds_bundle.js']) {
    const s = document.createElement('script');
    s.src = base + '/' + p;
    s.async = false;
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — fix the base path in ds-base.js');
    document.head.appendChild(s);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "iak-kids-v2.2-templates/templates/parent-dashboard/ds-base.js", error: String((e && e.message) || e) }); }

// iak-kids-v2.2-templates/templates/weekly-schedule/ds-base.js
try { (() => {
// IAK KIDS_V1 · Little Everyday v2.2 — template loader. Consuming project: point `base` at the bound _ds/<folder> tree.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  // Bundle components are thin wrappers over window.ZEM → icons.js + zem-ui.js must load first, in order.
  for (const p of ['zem/lib/icons.js', 'zem/lib/zem-ui.js', '_ds_bundle.js']) {
    const s = document.createElement('script');
    s.src = base + '/' + p;
    s.async = false;
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — fix the base path in ds-base.js');
    document.head.appendChild(s);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "iak-kids-v2.2-templates/templates/weekly-schedule/ds-base.js", error: String((e && e.message) || e) }); }

// iak-kids-v2.2-templates/zem/lib/icons.js
try { (() => {
/* Generic function icons (Eva/Solar open-source sets) — 97 SVGs carried from the project icon file. Generic glyphs only; no ZEM source icon artwork copied. */
window.ZEM_ICONS = {
  "eva:alert-circle-outline": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8\"/><circle cx=\"12\" cy=\"16\" r=\"1\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:alert-triangle-fill": {
    "body": "<path fill=\"currentColor\" d=\"M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66a3 3 0 0 0-.05-3.04M12 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-downward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5l.15.09l.13.07a1 1 0 0 0 .72 0l.13-.07l.15-.09l6-5a1 1 0 0 0 .13-1.41\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-back-fill": {
    "body": "<path fill=\"currentColor\" d=\"M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-downward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-forward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-upward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15a1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-upward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5l-.15-.09l-.13-.07a1 1 0 0 0-.72 0l-.13.07l-.15.09l-6 5a1 1 0 0 0-.13 1.41\"/>",
    "width": 24,
    "height": 24
  },
  "eva:bookmark-fill": {
    "body": "<path fill=\"currentColor\" d=\"M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86a1 1 0 0 1-1 0l-5.67-3.21l-5.33 3.2A1 1 0 0 1 6 21\"/>",
    "width": 24,
    "height": 24
  },
  "eva:calendar-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M8 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:checkmark-circle-2-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:checkmark-fill": {
    "body": "<path fill=\"currentColor\" d=\"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:chevron-right-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32\"/>",
    "width": 24,
    "height": 24
  },
  "eva:close-circle-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:close-fill": {
    "body": "<path fill=\"currentColor\" d=\"m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:copy-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3\"/>",
    "width": 24,
    "height": 24
  },
  "eva:copy-outline": {
    "body": "<path fill=\"currentColor\" d=\"M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z\"/><path fill=\"currentColor\" d=\"M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:download-fill": {
    "body": "<rect width=\"16\" height=\"2\" x=\"4\" y=\"18\" fill=\"currentColor\" rx=\"1\" ry=\"1\"/><rect width=\"4\" height=\"2\" x=\"3\" y=\"17\" fill=\"currentColor\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 18)\"/><rect width=\"4\" height=\"2\" x=\"17\" y=\"17\" fill=\"currentColor\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 19 18)\"/><path fill=\"currentColor\" d=\"M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2\"/><path fill=\"currentColor\" d=\"M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:edit-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71M16 10.68L13.32 8l1.95-2L18 8.73Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:email-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:external-link-fill": {
    "body": "<path fill=\"currentColor\" d=\"M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" d=\"M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2\"/>",
    "width": 24,
    "height": 24
  },
  "eva:file-text-fill": {
    "body": "<path fill=\"currentColor\" d=\"m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:flash-fill": {
    "body": "<path fill=\"currentColor\" d=\"M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44\"/>",
    "width": 24,
    "height": 24
  },
  "eva:funnel-fill": {
    "body": "<path fill=\"currentColor\" d=\"M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49a1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9a1 1 0 0 1-.41.1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:home-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10 14h4v7h-4z\"/><path fill=\"currentColor\" d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44\"/>",
    "width": 24,
    "height": 24
  },
  "eva:info-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:layers-fill": {
    "body": "<path fill=\"currentColor\" d=\"m3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81\"/><path fill=\"currentColor\" d=\"m20.71 10.66l-1.83-.78l-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85\"/><path fill=\"currentColor\" d=\"m20.71 15.1l-1.56-.68l-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76l-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87\"/>",
    "width": 24,
    "height": 24
  },
  "eva:link-fill": {
    "body": "<path fill=\"currentColor\" d=\"M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1\"/><path fill=\"currentColor\" d=\"M9 16H7.21A4.13 4.13 0 0 1 3 12.37A4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2m14-4.76A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63A4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76\"/>",
    "width": 24,
    "height": 24
  },
  "eva:more-horizontal-fill": {
    "body": "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"5\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>",
    "width": 24,
    "height": 24
  },
  "eva:plus-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2\"/>",
    "width": 24,
    "height": 24
  },
  "eva:refresh-fill": {
    "body": "<path fill=\"currentColor\" d=\"M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19A7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7a7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83a1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06a.3.3 0 0 0 .1-.06a.8.8 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.3 1.3 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.2 9.2 0 0 0 12.18 3A9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25\"/>",
    "width": 24,
    "height": 24
  },
  "eva:search-fill": {
    "body": "<path fill=\"currentColor\" d=\"m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6\"/>",
    "width": 24,
    "height": 24
  },
  "solar:add-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:alt-arrow-down-bold": {
    "body": "<path fill=\"currentColor\" d=\"M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:asteroid-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M2 12C2 6.47715 6.47715 2 12 2C14.1266 2 16.0982 2.66383 17.7188 3.79559C16.7998 4.94874 16.25 6.41105 16.25 7.99974C16.25 11.2675 18.5713 13.9914 21.6545 14.6155C20.5047 18.8698 16.6179 22 12 22C11.3615 22 10.7369 21.9402 10.1316 21.8258C10.5287 20.9653 10.75 20.0075 10.75 19C10.75 15.2721 7.7279 12.25 3.99998 12.25C3.31014 12.25 2.64323 12.3537 2.0147 12.5469C2.00494 12.3658 2 12.1835 2 12ZM16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16ZM10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z\" clip-rule=\"evenodd\"/><path d=\"M17.75 7.99974C17.75 6.76899 18.1726 5.63896 18.8812 4.74396C20.8021 6.56624 22 9.14322 22 12C22 12.3861 21.9781 12.7672 21.9355 13.1419C19.5463 12.6503 17.75 10.534 17.75 7.99974Z\"/><path d=\"M8.65778 21.4278C5.40825 20.2758 2.93116 17.4914 2.21252 14.0605L2.32447 14.0228C2.84969 13.8461 3.41284 13.75 3.99998 13.75C6.89948 13.75 9.24998 16.1005 9.24998 19C9.24998 19.8351 9.05555 20.6226 8.71017 21.3218L8.65778 21.4278Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:atom-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M17.0016 6.99793C15.8625 5.85879 14.6653 4.86861 13.4619 4.04619C14.8393 3.34512 16.1436 2.92369 17.2752 2.79313C18.7023 2.62848 19.7567 2.93171 20.4123 3.58732C21.0679 4.24294 21.3711 5.29736 21.2065 6.72444C21.0759 7.85601 20.6545 9.16032 19.9534 10.5378C19.131 9.3343 18.1408 8.13709 17.0016 6.99793Z\"/><path fill-rule=\"evenodd\" d=\"M15.941 8.05859C17.2144 9.33197 18.2826 10.6744 19.1196 11.9995C18.2827 13.3245 17.2145 14.6668 15.9412 15.94C14.6677 17.2135 13.3253 18.2818 12.0002 19.1187C10.6751 18.2818 9.33276 17.2135 8.05941 15.9402C6.78608 14.6668 5.71785 13.3245 4.88094 11.9995C5.71788 10.6743 6.78618 9.33188 8.05961 8.05845C9.3329 6.78516 10.6752 5.71695 12.0002 4.88005C13.3253 5.71697 14.6676 6.78523 15.941 8.05859ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z\" clip-rule=\"evenodd\"/><path d=\"M13.4619 19.9526C14.6654 19.1301 15.8626 18.1399 17.0018 17.0007C18.1409 15.8616 19.131 14.6646 19.9534 13.4612C20.6544 14.8386 21.0758 16.1428 21.2063 17.2743C21.3709 18.7013 21.0677 19.7557 20.4121 20.4113C19.7565 21.0669 18.7021 21.3701 17.2751 21.2055C16.1435 21.075 14.8393 20.6536 13.4619 19.9526Z\"/><path d=\"M6.99875 17.0008C8.13786 18.14 9.33502 19.1301 10.5384 19.9525C9.16109 20.6535 7.8569 21.0749 6.72543 21.2054C5.29844 21.37 4.24408 21.0668 3.5885 20.4112C2.93291 19.7556 2.62968 18.7012 2.79429 17.2742C2.92481 16.1428 3.34616 14.8386 4.04711 13.4612C4.86952 14.6646 5.85966 15.8617 6.99875 17.0008Z\"/><path d=\"M4.04708 10.5377C4.86953 9.33424 5.85975 8.13699 6.99895 6.99779C8.13801 5.85872 9.33511 4.8686 10.5385 4.04621C9.16108 3.3452 7.85682 2.9238 6.72531 2.79326C5.29828 2.62863 4.2439 2.93186 3.5883 3.58746C2.93269 4.24307 2.62946 5.29747 2.7941 6.72453C2.92465 7.85606 3.34606 9.16034 4.04708 10.5377Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:bag-2-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.25014 6.01489C8.25005 6.00994 8.25 6.00498 8.25 6V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.75 6.00994 15.7499 6.0149C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.19239 6.96288 6.05353 8.25014 6.01489ZM9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 5.99999 14.25 6.00001 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90177 6 9.82526 6 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5ZM15.7399 10.8768C15.6718 10.4682 15.2854 10.1922 14.8768 10.2603C14.4682 10.3284 14.1922 10.7148 14.2603 11.1234L15.2603 17.1234C15.3284 17.532 15.7148 17.808 16.1234 17.7399C16.532 17.6718 16.808 17.2854 16.7399 16.8768L15.7399 10.8768ZM9.12317 10.2603C8.71459 10.1922 8.32817 10.4682 8.26007 10.8768L7.26007 16.8768C7.19198 17.2854 7.46799 17.6718 7.87657 17.7399C8.28515 17.808 8.67157 17.532 8.73966 17.1234L9.73966 11.1234C9.80776 10.7148 9.53174 10.3284 9.12317 10.2603Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:bell-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z\"/><path d=\"M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:book-2-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M4.72718 2.71244C5.03258 2.41324 5.46135 2.21816 6.27103 2.11151C7.10452 2.00172 8.2092 2 9.7931 2H14.2069C15.7908 2 16.8955 2.00172 17.729 2.11151C18.5387 2.21816 18.9674 2.41324 19.2728 2.71244C19.5782 3.01165 19.7773 3.43172 19.8862 4.22499C19.9982 5.04159 20 6.12387 20 7.67568V15.5135L7.34563 15.5135C6.44305 15.5132 5.82716 15.513 5.29899 15.6517C4.82674 15.7756 4.38867 15.9781 4 16.2442V7.67568C4 6.12387 4.00176 5.04159 4.11382 4.225C4.22268 3.43172 4.42179 3.01165 4.72718 2.71244ZM7.58621 5.78378C7.12914 5.78378 6.75862 6.1468 6.75862 6.59459C6.75862 7.04239 7.12914 7.40541 7.58621 7.40541H16.4138C16.8709 7.40541 17.2414 7.04239 17.2414 6.59459C17.2414 6.1468 16.8709 5.78378 16.4138 5.78378H7.58621ZM6.75862 10.3784C6.75862 9.93058 7.12914 9.56757 7.58621 9.56757H13.1034C13.5605 9.56757 13.931 9.93058 13.931 10.3784C13.931 10.8262 13.5605 11.1892 13.1034 11.1892H7.58621C7.12914 11.1892 6.75862 10.8262 6.75862 10.3784Z\" clip-rule=\"evenodd\"/><path d=\"M7.47341 17.1351C6.39395 17.1351 6.01657 17.1421 5.72738 17.218C4.93365 17.4264 4.30088 18.0044 4.02952 18.7558C4.0463 19.1382 4.07259 19.4746 4.11382 19.775C4.22268 20.5683 4.42179 20.9884 4.72718 21.2876C5.03258 21.5868 5.46135 21.7818 6.27103 21.8885C7.10452 21.9983 8.2092 22 9.7931 22H14.2069C15.7908 22 16.8955 21.9983 17.729 21.8885C18.5387 21.7818 18.9674 21.5868 19.2728 21.2876C19.4894 21.0753 19.6526 20.8023 19.768 20.3784H7.58621C7.12914 20.3784 6.75862 20.0154 6.75862 19.5676C6.75862 19.1198 7.12914 18.7568 7.58621 18.7568H19.9704C19.9909 18.2908 19.9972 17.7564 19.9991 17.1351H7.47341Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:book-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M6.27103 2.11151C5.46135 2.21816 5.03258 2.41324 4.72718 2.71244C4.42179 3.01165 4.22268 3.43172 4.11382 4.225C4.00176 5.04159 4 6.12387 4 7.67568V16.2442C4.38867 15.9781 4.82674 15.7756 5.29899 15.6517C5.82716 15.513 6.44305 15.5132 7.34563 15.5135L20 15.5135V7.67568C20 6.12387 19.9982 5.04159 19.8862 4.22499C19.7773 3.43172 19.5782 3.01165 19.2728 2.71244C18.9674 2.41324 18.5387 2.21816 17.729 2.11151C16.8955 2.00172 15.7908 2 14.2069 2H9.7931C8.2092 2 7.10452 2.00172 6.27103 2.11151ZM6.75862 6.59459C6.75862 6.1468 7.12914 5.78378 7.58621 5.78378H16.4138C16.8709 5.78378 17.2414 6.1468 17.2414 6.59459C17.2414 7.04239 16.8709 7.40541 16.4138 7.40541H7.58621C7.12914 7.40541 6.75862 7.04239 6.75862 6.59459ZM7.58621 9.56757C7.12914 9.56757 6.75862 9.93058 6.75862 10.3784C6.75862 10.8262 7.12914 11.1892 7.58621 11.1892H13.1034C13.5605 11.1892 13.931 10.8262 13.931 10.3784C13.931 9.93058 13.5605 9.56757 13.1034 9.56757H7.58621Z\" clip-rule=\"evenodd\"/><path d=\"M7.47341 17.1351H8.68965H13.1034H19.9991C19.9956 18.2657 19.9776 19.1088 19.8862 19.775C19.7773 20.5683 19.5782 20.9884 19.2728 21.2876C18.9674 21.5868 18.5387 21.7818 17.729 21.8885C16.8955 21.9983 15.7908 22 14.2069 22H9.7931C8.2092 22 7.10452 21.9983 6.27103 21.8885C5.46135 21.7818 5.03258 21.5868 4.72718 21.2876C4.42179 20.9884 4.22268 20.5683 4.11382 19.775C4.07259 19.4746 4.0463 19.1382 4.02952 18.7558C4.30088 18.0044 4.93365 17.4264 5.72738 17.218C6.01657 17.1421 6.39395 17.1351 7.47341 17.1351Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:bookmark-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:card-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M14.0002 4H10.0002C6.22893 4 4.34331 4 3.17174 5.17157C2.32819 6.01511 2.09201 7.22882 2.02588 9.25H21.9744C21.9083 7.22882 21.6721 6.01511 20.8286 5.17157C19.657 4 17.7714 4 14.0002 4Z\"/><path fill-rule=\"evenodd\" d=\"M22 12C22 15.7712 21.9997 17.6566 20.8281 18.8281C19.6566 19.9997 17.7712 20 14 20H10C6.22876 20 4.34345 19.9997 3.17188 18.8281C2.0003 17.6566 2 15.7712 2 12C2 11.5581 2.00007 11.142 2.00195 10.75H21.998C21.9999 11.142 22 11.5581 22 12ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H6ZM12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16C11.75 16.4142 12.0858 16.75 12.5 16.75H14C14.4142 16.75 14.75 16.4142 14.75 16C14.75 15.5858 14.4142 15.25 14 15.25H12.5Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:chart-2-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M17.2929 2.29289C17 2.58579 17 3.05719 17 4V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17V4C21 3.05719 21 2.58579 20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289Z\"/><path d=\"M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z\"/><path d=\"M3.29289 9.29289C3 9.58579 3 10.0572 3 11V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289Z\"/><path d=\"M3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:chart-square-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM17 12.25C17.4142 12.25 17.75 12.5858 17.75 13V18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18V13C16.25 12.5858 16.5858 12.25 17 12.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V6ZM7 8.25C7.41421 8.25 7.75 8.58579 7.75 9V18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V9C6.25 8.58579 6.58579 8.25 7 8.25Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:chat-round-line-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:chat-square-bold": {
    "body": "<path fill=\"currentColor\" d=\"M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:check-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:checklist-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.04832 2.48826C8.33094 2.79108 8.31458 3.26567 8.01176 3.54829L3.72605 7.54829C3.57393 7.69027 3.36967 7.76267 3.1621 7.74818C2.95453 7.7337 2.7623 7.63363 2.63138 7.4719L1.41709 5.9719C1.15647 5.64996 1.20618 5.17769 1.52813 4.91707C1.85007 4.65645 2.32234 4.70616 2.58296 5.0281L3.29089 5.90261L6.98829 2.45171C7.2911 2.16909 7.76569 2.18545 8.04832 2.48826ZM11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H22C22.4142 4.25 22.75 4.58579 22.75 5C22.75 5.41422 22.4142 5.75 22 5.75H12C11.5858 5.75 11.25 5.41422 11.25 5ZM8.04832 9.48826C8.33094 9.79108 8.31458 10.2657 8.01176 10.5483L3.72605 14.5483C3.57393 14.6903 3.36967 14.7627 3.1621 14.7482C2.95453 14.7337 2.7623 14.6336 2.63138 14.4719L1.41709 12.9719C1.15647 12.65 1.20618 12.1777 1.52813 11.9171C1.85007 11.6564 2.32234 11.7062 2.58296 12.0281L3.29089 12.9026L6.98829 9.45171C7.2911 9.16909 7.76569 9.18545 8.04832 9.48826ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12ZM8.04832 16.4883C8.33094 16.7911 8.31458 17.2657 8.01176 17.5483L3.72605 21.5483C3.57393 21.6903 3.36967 21.7627 3.1621 21.7482C2.95453 21.7337 2.7623 21.6336 2.63138 21.4719L1.41709 19.9719C1.15647 19.65 1.20618 19.1777 1.52813 18.9171C1.85007 18.6564 2.32234 18.7062 2.58296 19.0281L3.29089 19.9026L6.98829 16.4517C7.2911 16.1691 7.76569 16.1855 8.04832 16.4883ZM11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H22C22.4142 18.25 22.75 18.5858 22.75 19C22.75 19.4142 22.4142 19.75 22 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:clock-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V12C11.25 12.1989 11.3291 12.3896 11.4697 12.5303L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L12.75 11.6895V8C12.75 7.58579 12.4142 7.25 12 7.25Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:close-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:cursor-bold": {
    "body": "<path fill=\"currentColor\" d=\"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:danger-triangle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:document-add-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z\"/><path d=\"M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z\"/><path fill-rule=\"evenodd\" d=\"M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.9812 19.6756 20.9997 17.8316 21 14.1801L18.1817 16.9984C17.9119 17.2683 17.691 17.4894 17.4415 17.6841C17.1491 17.9121 16.8328 18.1076 16.4981 18.2671C16.2124 18.4032 15.9159 18.502 15.5538 18.6225L13.2421 19.3931C12.4935 19.6426 11.6682 19.4478 11.1102 18.8898C10.5523 18.3318 10.3574 17.5065 10.607 16.7579L10.8805 15.9375L11.3556 14.5121L11.3775 14.4463C11.4981 14.0842 11.5968 13.7876 11.7329 13.5019C11.8924 13.1672 12.0879 12.8509 12.316 12.5586C12.5106 12.309 12.7317 12.0881 13.0017 11.8183L17.0081 7.81188L18.12 6.70004L18.2472 6.57282C18.9626 5.85741 19.9003 5.49981 20.838 5.5C20.6867 4.46945 20.3941 3.73727 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:document-text-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H8Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:dollar-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748Z\"/><path d=\"M12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z\"/><path fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:download-minimalistic-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z\"/><path d=\"M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:flame-bold": {
    "body": "<path fill=\"currentColor\" d=\"M20 15.0002C20 19.2547 17.3819 21.1216 15.3588 21.7512C14.9274 21.8854 14.6438 21.3825 14.9019 21.0116C15.7823 19.7464 16.8 17.8161 16.8 16.0002C16.8 14.0496 15.1559 11.7467 13.8721 10.3263C13.5786 10.0016 13.0667 10.2164 13.0507 10.6539C12.9976 12.1031 12.7689 14.042 11.7828 15.5616C11.6241 15.8062 11.2872 15.8264 11.1063 15.5977C10.7982 15.208 10.4901 14.7267 10.182 14.3464C10.016 14.1416 9.71604 14.1388 9.52461 14.32C8.77825 15.0267 7.73333 16.1288 7.73333 17.5002C7.73333 18.4301 8.0936 19.405 8.50007 20.1893C8.72368 20.6208 8.32607 21.1402 7.89573 20.9144C6.11307 19.9789 4 18.0838 4 15.0002C4 11.8538 8.31029 7.49503 9.95605 3.37712C10.2157 2.72733 11.0161 2.42199 11.5727 2.84603C14.9439 5.41409 20 10.3783 20 15.0002Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:gallery-remove-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z\"/><path fill-rule=\"evenodd\" d=\"M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM16.0303 3.96967C15.7374 3.67678 15.2626 3.67678 14.9697 3.96967C14.6768 4.26256 14.6768 4.73744 14.9697 5.03033L16.4393 6.5L14.9697 7.96967C14.6768 8.26256 14.6768 8.73744 14.9697 9.03033C15.2626 9.32322 15.7374 9.32322 16.0303 9.03033L17.5 7.56066L18.9697 9.03033C19.2626 9.32322 19.7374 9.32322 20.0303 9.03033C20.3232 8.73744 20.3232 8.26256 20.0303 7.96967L18.5607 6.5L20.0303 5.03033C20.3232 4.73744 20.3232 4.26256 20.0303 3.96967C19.7374 3.67678 19.2626 3.67678 18.9697 3.96967L17.5 5.43934L16.0303 3.96967Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:gallery-wide-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M18.5116 10.0771C18.5116 10.8157 17.8869 11.4146 17.1163 11.4146C16.3457 11.4146 15.7209 10.8157 15.7209 10.0771C15.7209 9.33841 16.3457 8.7396 17.1163 8.7396C17.8869 8.7396 18.5116 9.33841 18.5116 10.0771Z\"/><path fill-rule=\"evenodd\" d=\"M18.0363 5.53245C16.9766 5.39588 15.6225 5.39589 13.9129 5.39591H10.0871C8.37751 5.39589 7.02343 5.39588 5.9637 5.53245C4.87308 5.673 3.99033 5.96913 3.29418 6.63641C2.59803 7.30369 2.28908 8.14982 2.14245 9.19521C1.99997 10.211 1.99999 11.5089 2 13.1475V13.2482C1.99999 14.8868 1.99997 16.1847 2.14245 17.2005C2.28908 18.2459 2.59803 19.092 3.29418 19.7593C3.99033 20.4266 4.87307 20.7227 5.9637 20.8633C7.02344 20.9998 8.37751 20.9998 10.0871 20.9998H13.9129C15.6225 20.9998 16.9766 20.9998 18.0363 20.8633C19.1269 20.7227 20.0097 20.4266 20.7058 19.7593C21.402 19.092 21.7109 18.2459 21.8575 17.2005C22 16.1847 22 14.8868 22 13.2482V13.1476C22 11.5089 22 10.211 21.8575 9.19521C21.7109 8.14982 21.402 7.30369 20.7058 6.63641C20.0097 5.96913 19.1269 5.673 18.0363 5.53245ZM6.14963 6.858C5.21373 6.97861 4.67452 7.20479 4.28084 7.58215C3.88716 7.9595 3.65119 8.47635 3.52536 9.37343C3.42443 10.093 3.40184 10.9923 3.3968 12.1686L3.86764 11.7737C4.99175 10.8309 6.68596 10.885 7.74215 11.8974L11.7326 15.7223C12.1321 16.1053 12.7611 16.1575 13.2234 15.8461L13.5008 15.6593C14.8313 14.763 16.6314 14.8668 17.8402 15.9096L20.2479 17.9866C20.3463 17.7226 20.4206 17.4075 20.4746 17.0223C20.6032 16.106 20.6047 14.8981 20.6047 13.1979C20.6047 11.4976 20.6032 10.2897 20.4746 9.37343C20.3488 8.47635 20.1128 7.9595 19.7192 7.58215C19.3255 7.20479 18.7863 6.97861 17.8504 6.858C16.8944 6.7348 15.6343 6.73338 13.8605 6.73338H10.1395C8.36575 6.73338 7.10559 6.7348 6.14963 6.858Z\" clip-rule=\"evenodd\"/><path d=\"M17.0863 2.61039C16.2265 2.49997 15.1318 2.49998 13.7672 2.5H10.6775C9.31284 2.49998 8.21815 2.49997 7.35834 2.61039C6.46796 2.72473 5.72561 2.96835 5.13682 3.53075C4.79725 3.8551 4.56856 4.22833 4.41279 4.64928C4.91699 4.41928 5.48704 4.28374 6.12705 4.20084C7.21143 4.06037 8.597 4.06038 10.3463 4.06039H14.2612C16.0105 4.06038 17.396 4.06037 18.4804 4.20084C19.0394 4.27325 19.545 4.38581 20 4.56638C19.8454 4.17917 19.625 3.83365 19.3078 3.53075C18.719 2.96835 17.9767 2.72473 17.0863 2.61039Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:graph-up-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75H15.1893L13.1768 12.7626C13.0791 12.8602 12.9209 12.8602 12.8232 12.7626L11.2374 11.1768C10.554 10.4934 9.44598 10.4934 8.76256 11.1768L6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L9.82322 12.2374C9.92085 12.1398 10.0791 12.1398 10.1768 12.2374L11.7626 13.8232C12.446 14.5066 13.554 14.5066 14.2374 13.8232L16.25 11.8107V12.5C16.25 12.9142 16.5858 13.25 17 13.25C17.4142 13.25 17.75 12.9142 17.75 12.5V10C17.75 9.58579 17.4142 9.25 17 9.25H14.5C14.0858 9.25 13.75 9.58579 13.75 10Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:history-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891ZM11.9999 7.24992C12.4141 7.24992 12.7499 7.58571 12.7499 7.99992V11.6893L15.0302 13.9696C15.3231 14.2625 15.3231 14.7374 15.0302 15.0302C14.7373 15.3231 14.2624 15.3231 13.9696 15.0302L11.2499 12.3106V7.99992C11.2499 7.58571 11.5857 7.24992 11.9999 7.24992Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:home-2-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:inbox-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.8063 19.2647 21.9744 17.3219 21.9966 13.75H18.8397C17.8659 13.75 17.6113 13.766 17.3975 13.8644C17.1838 13.9627 17.0059 14.1456 16.3722 14.8849L15.7667 15.5913L15.6794 15.6933C15.1773 16.2803 14.7796 16.7453 14.2292 16.9984C13.6789 17.2515 13.067 17.2509 12.2945 17.2501L12.1603 17.25H11.8397L11.7055 17.2501C10.933 17.2509 10.3211 17.2515 9.77076 16.9984C9.22038 16.7453 8.82271 16.2803 8.32058 15.6933L8.23327 15.5913L7.62784 14.8849C6.9941 14.1456 6.81622 13.9627 6.60245 13.8644C6.38869 13.766 6.13407 13.75 5.16026 13.75H2.00339C2.02561 17.3219 2.19367 19.2647 3.46447 20.5355Z\"/><path d=\"M20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.25H5.16026L5.29454 12.2499H5.29455C6.06705 12.2491 6.67886 12.2485 7.22924 12.5016C7.77961 12.7547 8.17729 13.2197 8.67941 13.8067L8.76673 13.9087L9.37216 14.6151C10.0059 15.3544 10.1838 15.5373 10.3975 15.6356C10.6113 15.734 10.8659 15.75 11.8397 15.75H12.1603C13.1341 15.75 13.3887 15.734 13.6025 15.6356C13.8162 15.5373 13.9941 15.3544 14.6278 14.6151L15.2333 13.9087L15.3206 13.8067C15.8227 13.2197 16.2204 12.7547 16.7708 12.5016C17.3211 12.2485 17.933 12.2491 18.7055 12.2499L18.8397 12.25H22L22 12C22 7.28595 22 4.92893 20.5355 3.46447Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:info-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:layers-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z\"/><path fill-rule=\"evenodd\" d=\"M2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C10.7661 4 9.77318 4.39718 7.7873 5.19153L4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8Z\" clip-rule=\"evenodd\"/><path d=\"M19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12.4935 2 12C2 11.5551 2.80681 11.1885 4.42043 10.5388L7.56143 11.7952C9.41007 12.535 10.572 13 12 13C13.428 13 14.5899 12.535 16.4386 11.7952L19.5796 10.5388C21.1932 11.1885 22 11.5551 22 12C22 12.4935 21.0071 12.8907 19.0212 13.6851Z\"/><path d=\"M19.0212 17.6849L16.2127 18.8083C14.2268 19.6026 13.2339 19.9998 12 19.9998C10.7661 19.9998 9.77318 19.6026 7.7873 18.8083L4.97883 17.6849C2.99294 16.8905 2 16.4934 2 15.9998C2 15.5549 2.80681 15.1883 4.42043 14.5386L7.56143 15.795C9.41007 16.5348 10.572 16.9998 12 16.9998C13.428 16.9998 14.5899 16.5348 16.4386 15.795L19.5796 14.5386C21.1932 15.1883 22 15.5549 22 15.9998C22 16.4934 21.0071 16.8905 19.0212 17.6849Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:layers-minimalistic-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M7.62442 4.4489C9.50121 3.69796 10.6208 3.25 12 3.25C13.3792 3.25 14.4988 3.69796 16.3756 4.4489L19.3451 5.6367C20.2996 6.01851 21.0728 6.32776 21.6035 6.60601C21.8721 6.74683 22.1323 6.90648 22.333 7.09894C22.5392 7.29668 22.75 7.59658 22.75 8C22.75 8.40342 22.5392 8.70332 22.333 8.90106C22.1323 9.09352 21.8721 9.25317 21.6035 9.39399C21.0728 9.67223 20.2996 9.98148 19.3451 10.3633L16.3756 11.5511C14.4988 12.302 13.3792 12.75 12 12.75C10.6208 12.75 9.50121 12.302 7.62443 11.5511L4.65495 10.3633C3.70037 9.98149 2.9272 9.67223 2.39647 9.39399C2.12786 9.25317 1.86765 9.09352 1.66701 8.90106C1.46085 8.70332 1.25 8.40342 1.25 8C1.25 7.59658 1.46085 7.29668 1.66701 7.09894C1.86765 6.90648 2.12786 6.74683 2.39647 6.60601C2.92721 6.32776 3.70037 6.01851 4.65496 5.63669L7.62442 4.4489Z\"/><path fill-rule=\"evenodd\" d=\"M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415L2.49913 11.4402L2.50261 11.4432C2.50702 11.4471 2.51522 11.4541 2.52722 11.4641C2.55123 11.4842 2.59042 11.5161 2.64479 11.5581C2.75354 11.6422 2.92289 11.7663 3.1528 11.9154C3.61265 12.2136 4.31419 12.6115 5.25737 12.9887L8.06584 14.1121C10.0907 14.922 10.9396 15.25 12 15.25C13.0604 15.25 13.9093 14.922 15.9342 14.1121L18.7426 12.9887C19.6858 12.6115 20.3874 12.2136 20.8472 11.9154C21.0771 11.7663 21.2465 11.6422 21.3552 11.5581C21.4096 11.5161 21.4488 11.4842 21.4728 11.4641C21.4848 11.4541 21.493 11.4471 21.4974 11.4432L21.4995 11.4415C21.5 11.441 21.5006 11.4405 21.5011 11.44C21.8095 11.1652 22.2823 11.1915 22.5583 11.4992C22.8349 11.8075 22.8092 12.2817 22.5008 12.5583L22 12C22.5008 12.5583 22.501 12.5581 22.5008 12.5583L22.4994 12.5595L22.4977 12.5611L22.493 12.5652L22.4793 12.5772C22.4682 12.5868 22.4532 12.5997 22.4341 12.6155C22.3961 12.6473 22.3422 12.6911 22.2724 12.745C22.1329 12.8528 21.9299 13.001 21.6634 13.1739C21.1303 13.5196 20.3424 13.9644 19.2997 14.3814L16.4912 15.5048C16.4524 15.5204 16.4138 15.5358 16.3756 15.5511C14.4988 16.302 13.3792 16.75 12 16.75C10.6208 16.75 9.50121 16.302 7.62442 15.5511C7.58619 15.5358 7.54763 15.5204 7.50875 15.5048L4.70029 14.3814C3.65759 13.9644 2.86971 13.5196 2.33662 13.1739C2.07005 13.001 1.86705 12.8528 1.72757 12.745C1.65782 12.6911 1.60392 12.6473 1.56587 12.6155C1.54684 12.5997 1.53177 12.5868 1.52066 12.5772L1.50696 12.5652L1.50233 12.5611L1.50057 12.5595L1.4995 12.5586C1.49934 12.5584 1.49919 12.5583 2 12L1.4995 12.5586C1.19116 12.282 1.16512 11.8075 1.44171 11.4992C1.71775 11.1915 2.19075 11.1654 2.49913 11.4402M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415V11.4415ZM2.49896 15.4401C2.19058 15.1652 1.71775 15.1915 1.44171 15.4992L2.49896 15.4401ZM2.49896 15.4401L2.50261 15.4432C2.50702 15.4471 2.51522 15.4541 2.52722 15.4641C2.55123 15.4842 2.59042 15.5161 2.64479 15.5581C2.75354 15.6422 2.92289 15.7663 3.1528 15.9154C3.61265 16.2136 4.31419 16.6114 5.25737 16.9887L8.06584 18.1121C10.0907 18.922 10.9396 19.25 12 19.25C13.0604 19.25 13.9093 18.922 15.9342 18.1121L18.7426 16.9887C19.6858 16.6114 20.3874 16.2136 20.8472 15.9154C21.0771 15.7663 21.2465 15.6422 21.3552 15.5581C21.4096 15.5161 21.4488 15.4842 21.4728 15.4641C21.4848 15.4541 21.493 15.4471 21.4974 15.4432L21.4995 15.4415C21.5 15.441 21.5006 15.4405 21.5011 15.44C21.8095 15.1652 22.2823 15.1915 22.5583 15.4992C22.8349 15.8075 22.8092 16.2817 22.5008 16.5583L22.0166 16.0185C22.5008 16.5583 22.501 16.5581 22.5008 16.5583L22.4994 16.5595L22.4977 16.5611L22.493 16.5652L22.4793 16.5772C22.4682 16.5868 22.4532 16.5997 22.4341 16.6155C22.3961 16.6473 22.3422 16.6911 22.2724 16.745C22.1329 16.8528 21.9299 17.001 21.6634 17.1739C21.1303 17.5196 20.3424 17.9644 19.2997 18.3814L16.4912 19.5048C16.4524 19.5204 16.4138 19.5358 16.3756 19.5511C14.4988 20.302 13.3792 20.75 12 20.75C10.6208 20.75 9.50121 20.302 7.62443 19.5511C7.58619 19.5358 7.54763 19.5204 7.50875 19.5048L4.70029 18.3814C3.65759 17.9644 2.86971 17.5196 2.33662 17.1739C2.07005 17.001 1.86705 16.8528 1.72757 16.745C1.65782 16.6911 1.60392 16.6473 1.56587 16.6155C1.54684 16.5997 1.53177 16.5868 1.52066 16.5772L1.50696 16.5652L1.50233 16.5611L1.50057 16.5595L1.4995 16.5586C1.49934 16.5584 1.49919 16.5583 2 16L1.4995 16.5586C1.19116 16.282 1.16512 15.8075 1.44171 15.4992\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:letter-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:link-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z\"/><path d=\"M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:list-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H9C9.41421 16.25 9.75 16.5858 9.75 17C9.75 17.4142 9.41421 17.75 9 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:monitor-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8 17C5.17157 17 3.75736 17 2.87868 16.1213C2.30938 15.552 2.10893 14.7579 2.03835 13.5H21.9616C21.8911 14.7579 21.6906 15.552 21.1213 16.1213C20.2426 17 18.8284 17 16 17H12.75V21H16C16.4142 21 16.75 21.3358 16.75 21.75C16.75 22.1642 16.4142 22.5 16 22.5H8C7.58579 22.5 7.25 22.1642 7.25 21.75C7.25 21.3358 7.58579 21 8 21H11.25V17H8Z\"/><path d=\"M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.0494 21.9935 12.5H2.00652C2 12.0494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:moon-bold": {
    "body": "<path fill=\"currentColor\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:palette-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6ZM7 19.75C7.41421 19.75 7.75 19.4142 7.75 19C7.75 18.5858 7.41421 18.25 7 18.25H5C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H7Z\" clip-rule=\"evenodd\"/><path d=\"M19.0599 10.6144L13.2219 16.704C12.492 17.4653 12.1271 17.8459 11.8135 17.7199C11.5 17.5939 11.5 17.0666 11.5 16.0119L11.5 7.7738C11.5012 7.11381 11.7633 6.48107 12.2291 6.01357L13.2839 4.95882L13.7141 4.62987C14.7183 3.86212 15.2204 3.47825 15.7673 3.3603C16.2175 3.26322 16.6857 3.29236 17.1204 3.4445C17.6484 3.62934 18.099 4.0725 19.0003 4.95883C19.9999 5.95839 20.4997 6.45818 20.685 7.03056C20.843 7.51871 20.847 8.04366 20.6964 8.53417C20.5199 9.10931 20.0332 9.61101 19.0599 10.6144Z\"/><path d=\"M12.7897 22H17.8994C19.2995 22 19.9996 22 20.5344 21.7275C21.0048 21.4878 21.3872 21.1054 21.6269 20.635C21.8994 20.1002 21.8994 19.4001 21.8994 18C21.8994 16.5999 21.8994 15.8998 21.6269 15.365C21.3872 14.8946 21.0048 14.5122 20.5344 14.2725C19.9996 14 19.2995 14 17.8994 14H17.6797L11.878 19.798C11.636 20.0399 11.5 20.3391 11.5 20.6813C11.5 21.3936 12.0774 22 12.7897 22Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:pen-2-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z\" clip-rule=\"evenodd\"/><path d=\"M11.5201 14.929L11.5201 14.9289L17.4368 9.01225C16.6315 8.6771 15.6777 8.12656 14.7757 7.22455C13.8736 6.32238 13.323 5.36846 12.9879 4.56312L7.07106 10.4799L7.07101 10.48C6.60932 10.9417 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.04356 16.8833C3.94194 17.1882 4.02128 17.5243 4.2485 17.7515C4.47573 17.9787 4.81182 18.0581 5.11667 17.9564L8.38334 16.8676C9.00281 16.6611 9.31256 16.5578 9.60398 16.4189C9.94775 16.2551 10.2727 16.0543 10.5729 15.8201C10.8275 15.6215 11.0584 15.3907 11.5201 14.929Z\"/><path d=\"M19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142L13.9199 3.63105C13.9296 3.6604 13.9397 3.69015 13.9502 3.72028C14.2103 4.47 14.701 5.45281 15.6243 6.37602C16.5475 7.29923 17.5303 7.78999 18.28 8.05009C18.31 8.0605 18.3396 8.07054 18.3688 8.08021L19.0786 7.37044Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:play-bold": {
    "body": "<path fill=\"currentColor\" d=\"M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:play-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:question-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:refresh-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z\"/><path d=\"M20.8411 10.4666C20.549 10.1778 20.0789 10.1778 19.7867 10.4666L18.1005 12.1333C17.8841 12.3471 17.8184 12.6703 17.9339 12.9517C18.0495 13.233 18.3235 13.4167 18.6277 13.4167H19.5268C19.1455 17.2462 15.8759 20.25 11.8828 20.25C9.10026 20.25 6.66586 18.7903 5.31796 16.6061C5.10042 16.2536 4.63833 16.1442 4.28583 16.3618C3.93334 16.5793 3.82393 17.0414 4.04146 17.3939C5.65407 20.007 8.56406 21.75 11.8828 21.75C16.6906 21.75 20.6475 18.0892 21.0331 13.4167H22.0002C22.3043 13.4167 22.5783 13.233 22.6939 12.9517C22.8095 12.6703 22.7437 12.3471 22.5274 12.1333L20.8411 10.4666Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:ruler-bold": {
    "body": "<path fill=\"currentColor\" d=\"M2 15.6157C2 16.463 2.68179 17.1448 4.04537 18.5083L5.49167 19.9546C6.85525 21.3182 7.53704 22 8.38426 22C9.23148 22 9.91327 21.3182 11.2769 19.9546L19.9546 11.2769C21.3182 9.91327 22 9.23148 22 8.38426C22 7.53704 21.3182 6.85525 19.9546 5.49167L18.5083 4.04537C17.1448 2.68179 16.463 2 15.6157 2C14.8623 2 14.2396 2.53926 13.1519 3.61778C13.1817 3.63981 13.2103 3.66433 13.2373 3.69135L14.6515 5.10556C14.9444 5.39846 14.9444 5.87333 14.6515 6.16622C14.3586 6.45912 13.8837 6.45912 13.5908 6.16622L12.1766 4.75201C12.1494 4.7248 12.1247 4.69601 12.1026 4.66595L11.0299 5.73861C11.06 5.76077 11.0888 5.78545 11.116 5.81267L13.2373 7.93399C13.5302 8.22688 13.5302 8.70176 13.2373 8.99465C12.9444 9.28754 12.4695 9.28754 12.1766 8.99465L10.0553 6.87333C10.0281 6.84612 10.0034 6.81733 9.98125 6.78726L8.90859 7.85993C8.93865 7.88209 8.96744 7.90678 8.99465 7.93399L10.4089 9.3482C10.7018 9.6411 10.7018 10.116 10.4089 10.4089C10.116 10.7018 9.6411 10.7018 9.3482 10.4089L7.93399 8.99465C7.90678 8.96744 7.88209 8.93865 7.85993 8.90859L6.78727 9.98125C6.81733 10.0034 6.84612 10.0281 6.87333 10.0553L8.99465 12.1766C9.28754 12.4695 9.28754 12.9444 8.99465 13.2373C8.70176 13.5302 8.22688 13.5302 7.93399 13.2373L5.81267 11.116C5.78545 11.0888 5.76077 11.06 5.73861 11.0299L4.66595 12.1026C4.69601 12.1247 4.7248 12.1494 4.75201 12.1766L6.16622 13.5908C6.45912 13.8837 6.45912 14.3586 6.16622 14.6515C5.87333 14.9444 5.39846 14.9444 5.10556 14.6515L3.69135 13.2373C3.66433 13.2103 3.63981 13.1817 3.61778 13.1519C2.53926 14.2396 2 14.8623 2 15.6157Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:ruler-cross-pen-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M4.04537 5.49167L5.49167 4.04537C6.85525 2.68179 7.53704 2 8.38426 2C9.23148 2 9.91327 2.68179 11.2769 4.04537L8.86636 6.45586L4.04537 11.2769L4.04536 11.2768C2.68179 9.91327 2 9.23148 2 8.38426C2 7.53704 2.68179 6.85525 4.04537 5.49167L4.04537 5.49167Z\"/><path d=\"M19.9546 18.5083L18.5083 19.9546C17.1448 21.3182 16.463 22 15.6157 22C14.7685 22 14.0867 21.3182 12.7232 19.9546L12.7231 19.9546L17.5441 15.1336L19.9546 12.7231C21.3182 14.0867 22 14.7685 22 15.6157C22 16.463 21.3182 17.1448 19.9546 18.5083Z\"/><path d=\"M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z\"/><path d=\"M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:scale-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18C16.75 18.4142 16.4142 18.75 16 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18ZM15.3553 6.30984C13.1338 5.89672 10.8663 5.89672 8.64474 6.30984L8.16897 6.39831C7.2887 6.562 6.76942 7.59158 7.10085 8.51607L7.84525 10.5925C7.95314 10.8934 8.2437 11.0592 8.52553 10.9806C8.70281 10.9311 8.88073 10.8855 9.05918 10.8437L8.41984 8.854C8.26351 8.36748 8.49027 7.83168 8.92632 7.65725C9.36237 7.48283 9.84259 7.73584 9.99892 8.22236L10.7514 10.5641C12.3304 10.41 13.9267 10.5488 15.4746 10.9806C15.7564 11.0592 16.047 10.8934 16.1548 10.5925L16.8992 8.51607C17.2307 7.59158 16.7114 6.562 15.8311 6.39831L15.3553 6.30984Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:settings-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:shield-check-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM15.0595 10.4995C15.3353 10.1905 15.3085 9.71642 14.9995 9.44055C14.6905 9.16467 14.2164 9.19151 13.9405 9.50049L10.9286 12.8739L10.0595 11.9005C9.78358 11.5915 9.30947 11.5647 9.00049 11.8405C8.69151 12.1164 8.66467 12.5905 8.94055 12.8995L10.3691 14.4995C10.5114 14.6589 10.7149 14.75 10.9286 14.75C11.1422 14.75 11.3457 14.6589 11.488 14.4995L15.0595 10.4995Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:shield-warning-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167V11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914V10.4167ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:smartphone-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.0516 2H11.9484C10.2682 1.99999 8.93732 1.99997 7.89575 2.14245C6.82382 2.28908 5.95621 2.59803 5.27199 3.29418C4.58778 3.99033 4.28413 4.87308 4.14001 5.9637C3.99997 7.02343 3.99999 8.37751 4 10.087V13.9129C3.99999 15.6225 3.99997 16.9766 4.14001 18.0363C4.28413 19.1269 4.58778 20.0097 5.27199 20.7058C5.95621 21.402 6.82382 21.7109 7.89575 21.8575C8.93731 22 10.2682 22 11.9484 22H12.0516C13.7318 22 15.0627 22 16.1043 21.8575C17.1762 21.7109 18.0438 21.402 18.728 20.7058C19.4122 20.0097 19.7159 19.1269 19.86 18.0363C20 16.9766 20 15.6225 20 13.913V10.0871C20 8.37754 20 7.02343 19.86 5.9637C19.7159 4.87308 19.4122 3.99033 18.728 3.29418C18.0438 2.59803 17.1762 2.28908 16.1043 2.14245C15.0627 1.99997 13.7318 1.99999 12.0516 2ZM8.57143 18.5116C8.57143 18.1263 8.87843 17.814 9.25714 17.814H14.7429C15.1216 17.814 15.4286 18.1263 15.4286 18.5116C15.4286 18.8969 15.1216 19.2093 14.7429 19.2093H9.25714C8.87843 19.2093 8.57143 18.8969 8.57143 18.5116Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:square-double-alt-arrow-right-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12ZM7.96967 9.53033C7.67678 9.23744 7.67678 8.76256 7.96967 8.46967C8.26256 8.17678 8.73744 8.17678 9.03033 8.46967L12.0303 11.4697C12.3232 11.7626 12.3232 12.2374 12.0303 12.5303L9.03033 15.5303C8.73744 15.8232 8.26256 15.8232 7.96967 15.5303C7.67678 15.2374 7.67678 14.7626 7.96967 14.4697L10.4393 12L7.96967 9.53033ZM11.9697 8.46967C11.6768 8.76256 11.6768 9.23744 11.9697 9.53033L14.4393 12L11.9697 14.4697C11.6768 14.7626 11.6768 15.2374 11.9697 15.5303C12.2626 15.8232 12.7374 15.8232 13.0303 15.5303L16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697L13.0303 8.46967C12.7374 8.17678 12.2626 8.17678 11.9697 8.46967Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:sun-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z\"/><path fill-rule=\"evenodd\" d=\"M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:tag-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.5916 20.6555 9.24711 17.9665 6.55812L16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.5988 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816ZM10.1234 7.27098C10.911 8.05856 10.911 9.33549 10.1234 10.1231C9.33581 10.9107 8.05888 10.9107 7.27129 10.1231C6.48371 9.33549 6.48371 8.05856 7.27129 7.27098C8.05888 6.48339 9.33581 6.48339 10.1234 7.27098ZM19.0511 12.0511L12.0721 19.0303C11.7792 19.3232 11.3043 19.3232 11.0114 19.0303C10.7185 18.7375 10.7185 18.2626 11.0114 17.9697L17.9904 10.9904C18.2833 10.6975 18.7582 10.6975 19.0511 10.9904C19.344 11.2833 19.344 11.7582 19.0511 12.0511Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:target-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.2479 2C6.30929 2.36618 2.36618 6.30929 2 11.2479H4.98056C5.39592 11.2479 5.73264 11.5846 5.73264 12C5.73264 12.4154 5.39592 12.7521 4.98056 12.7521H2C2.36618 17.6907 6.30929 21.6338 11.2479 22V19.0194C11.2479 18.6041 11.5846 18.2674 12 18.2674C12.4154 18.2674 12.7521 18.6041 12.7521 19.0194V22C17.6907 21.6338 21.6338 17.6907 22 12.7521H19.0194C18.6041 12.7521 18.2674 12.4154 18.2674 12C18.2674 11.5846 18.6041 11.2479 19.0194 11.2479H22C21.6338 6.30929 17.6907 2.36618 12.7521 2V4.98056C12.7521 5.39592 12.4154 5.73264 12 5.73264C11.5846 5.73264 11.2479 5.39592 11.2479 4.98056V2ZM9.24236 12C9.24236 11.5846 9.57908 11.2479 9.99444 11.2479H11.2479V9.99444C11.2479 9.57908 11.5846 9.24236 12 9.24236C12.4154 9.24236 12.7521 9.57908 12.7521 9.99444V11.2479H14.0056C14.4209 11.2479 14.7576 11.5846 14.7576 12C14.7576 12.4154 14.4209 12.7521 14.0056 12.7521H12.7521V14.0056C12.7521 14.4209 12.4154 14.7576 12 14.7576C11.5846 14.7576 11.2479 14.4209 11.2479 14.0056V12.7521H9.99444C9.57908 12.7521 9.24236 12.4154 9.24236 12Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:test-tube-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8.26697 1.61845C8.47776 1.26188 8.9377 1.14371 9.29427 1.35449L10.126 1.84619L19.3731 7.15338C19.7324 7.35957 19.8564 7.81794 19.6503 8.17719C19.4441 8.53644 18.9857 8.66053 18.6264 8.45434L17.7828 7.97013L16.278 10.5675L16.2762 10.5665L13.7181 9.09467C13.3591 8.8881 12.9006 9.01169 12.694 9.37072C12.4875 9.72975 12.611 10.1883 12.9701 10.3948L15.526 11.8654L14.5646 13.525L14.5628 13.5239L10.3598 11.1057C10.0008 10.8991 9.54227 11.0227 9.3357 11.3818C9.12913 11.7408 9.25272 12.1993 9.61175 12.4059L13.8126 14.8229L12.927 16.3515L12.9252 16.3505L10.3125 14.8472C9.95348 14.6407 9.49497 14.7643 9.2884 15.1233C9.08183 15.4823 9.20542 15.9408 9.56445 16.1474L12.1751 17.6494L11.0558 19.5814C9.7158 21.8943 6.74803 22.6868 4.42709 21.3514C2.10615 20.0161 1.31093 17.0585 2.65093 14.7456L9.37268 3.14332L9.36682 3.13989L8.53093 2.64574C8.17436 2.43495 8.05618 1.97502 8.26697 1.61845Z\"/><path d=\"M20 16.9999C21.1046 16.9999 22 16.0672 22 14.9166C22 14.1967 21.217 13.2358 20.6309 12.6174C20.2839 12.2512 19.7161 12.2512 19.3691 12.6174C18.783 13.2358 18 14.1967 18 14.9166C18 16.0672 18.8954 16.9999 20 16.9999Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:text-bold": {
    "body": "<g fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.934 2h8.132c.886 0 1.65 0 2.262.082c.655.088 1.284.287 1.793.797c.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061c-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v17a1 1 0 1 1-2 0V4H8c-.971 0-1.599.002-2.061.064c-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262c.088-.655.287-1.284.797-1.793c.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 21h10\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:text-field-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM6.81782 7.78733C7.11779 7.74992 7.48429 7.74996 7.88383 7.75H10.1162C10.5157 7.74996 10.8822 7.74992 11.1822 7.78733C11.5109 7.82833 11.8612 7.9242 12.1624 8.19187C12.2138 8.23753 12.2625 8.28618 12.3081 8.33756C12.5758 8.63878 12.6717 8.98915 12.7127 9.31782C12.7501 9.61779 12.7501 9.98428 12.75 10.3838L12.75 10.425C12.75 10.8392 12.4142 11.175 12 11.175C11.5858 11.175 11.25 10.8392 11.25 10.425C11.25 9.97047 11.2486 9.69931 11.2242 9.50348C11.1998 9.30765 10.9965 9.2758 10.9965 9.2758C10.8007 9.25137 10.5295 9.25001 10.075 9.25001H9.75001V14.75H11C11.4142 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 11.4142 16.25 11 16.25H7.00001C6.58579 16.25 6.25001 15.9142 6.25001 15.5C6.25001 15.0858 6.58579 14.75 7.00001 14.75H8.25001V9.25001H7.925C7.47047 9.25001 7.19931 9.25137 7.00348 9.2758C7.00348 9.2758 6.80023 9.30765 6.7758 9.50348C6.75137 9.69931 6.75001 9.97047 6.75001 10.425C6.75001 10.8392 6.41422 11.175 6.00001 11.175C5.58579 11.175 5.25001 10.8392 5.25001 10.425L5.25 10.3838C5.24996 9.98428 5.24992 9.61779 5.28733 9.31782C5.32833 8.98915 5.4242 8.63878 5.69187 8.33756C5.73753 8.28618 5.78618 8.23753 5.83756 8.19187C6.13878 7.9242 6.48915 7.82833 6.81782 7.78733Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:transmission-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4C6 4.83934 5.48296 5.55793 4.75 5.85462V11.25H11.25V5.85462C10.517 5.55793 10 4.83934 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.83934 13.483 5.55793 12.75 5.85462V11.25H16C16.964 11.25 17.6116 11.2484 18.0946 11.1835C18.5561 11.1214 18.7536 11.0142 18.8839 10.8839C19.0142 10.7536 19.1214 10.5561 19.1835 10.0946C19.2484 9.61157 19.25 8.96401 19.25 8V5.85462C18.517 5.55793 18 4.83934 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4C22 4.83934 21.483 5.55793 20.75 5.85462V8.05199C20.75 8.95048 20.7501 9.6997 20.6701 10.2945C20.5857 10.9223 20.4 11.4891 19.9445 11.9445C19.4891 12.4 18.9223 12.5857 18.2945 12.6701C17.6997 12.7501 16.9505 12.75 16.052 12.75L12.75 12.75L12.75 18.1454C13.483 18.4421 14 19.1607 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 19.1607 10.517 18.4421 11.25 18.1454V12.75H4.75V18.1454C5.48296 18.4421 6 19.1607 6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 19.1607 2.51704 18.4421 3.25 18.1454V5.85462C2.51704 5.55793 2 4.83934 2 4Z\"/><path fill-rule=\"evenodd\" d=\"M17.25 15C17.25 14.5858 17.5858 14.25 18 14.25H20.2857C21.6612 14.25 22.75 15.3839 22.75 16.75C22.75 17.8285 22.0713 18.7624 21.1086 19.1077L22.6396 21.6084C22.8559 21.9616 22.7449 22.4234 22.3916 22.6396C22.0384 22.8559 21.5766 22.7449 21.3604 22.3916L19.4369 19.25H18.75V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V15ZM18.75 17.75H20.2857C20.8038 17.75 21.25 17.3169 21.25 16.75C21.25 16.1831 20.8038 15.75 20.2857 15.75H18.75V17.75Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:trash-bin-trash-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z\"/><path fill-rule=\"evenodd\" d=\"M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:users-group-rounded-bold": {
    "body": "<g fill=\"currentColor\"><circle cx=\"9.001\" cy=\"6\" r=\"4\"/><ellipse cx=\"9.001\" cy=\"17.001\" rx=\"7\" ry=\"4\"/><path d=\"M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z\"/><path d=\"M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-5-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M13 15.4C13 13.3258 13 12.2887 13.659 11.6444C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 11.6444C22 12.2887 22 13.3258 22 15.4V17.6C22 19.6742 22 20.7113 21.341 21.3556C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.3556C13 20.7113 13 19.6742 13 17.6V15.4Z\"/><path d=\"M2 8.6C2 10.6742 2 11.7113 2.65901 12.3556C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 12.3556C11 11.7113 11 10.6742 11 8.6V6.4C11 4.32582 11 3.28873 10.341 2.64437C9.68198 2 8.62132 2 6.5 2C4.37868 2 3.31802 2 2.65901 2.64437C2 3.28873 2 4.32582 2 6.4V8.6Z\"/><path d=\"M13 5.5C13 4.4128 13 3.8692 13.1713 3.44041C13.3996 2.86867 13.8376 2.41443 14.389 2.17761C14.8024 2 15.3266 2 16.375 2H18.625C19.6734 2 20.1976 2 20.611 2.17761C21.1624 2.41443 21.6004 2.86867 21.8287 3.44041C22 3.8692 22 4.4128 22 5.5C22 6.5872 22 7.1308 21.8287 7.55959C21.6004 8.13133 21.1624 8.58557 20.611 8.82239C20.1976 9 19.6734 9 18.625 9H16.375C15.3266 9 14.8024 9 14.389 8.82239C13.8376 8.58557 13.3996 8.13133 13.1713 7.55959C13 7.1308 13 6.5872 13 5.5Z\"/><path d=\"M2 18.5C2 19.5872 2 20.1308 2.17127 20.5596C2.39963 21.1313 2.83765 21.5856 3.38896 21.8224C3.80245 22 4.32663 22 5.375 22H7.625C8.67337 22 9.19755 22 9.61104 21.8224C10.1624 21.5856 10.6004 21.1313 10.8287 20.5596C11 20.1308 11 19.5872 11 18.5C11 17.4128 11 16.8692 10.8287 16.4404C10.6004 15.8687 10.1624 15.4144 9.61104 15.1776C9.19755 15 8.67337 15 7.625 15H5.375C4.32663 15 3.80245 15 3.38896 15.1776C2.83765 15.4144 2.39963 15.8687 2.17127 16.4404C2 16.8692 2 17.4128 2 18.5Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-add-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M17.5 2.75C17.9142 2.75 18.25 3.08579 18.25 3.5V5.75H20.5C20.9142 5.75 21.25 6.08579 21.25 6.5C21.25 6.91421 20.9142 7.25 20.5 7.25H18.25V9.5C18.25 9.91421 17.9142 10.25 17.5 10.25C17.0858 10.25 16.75 9.91421 16.75 9.5V7.25H14.5C14.0858 7.25 13.75 6.91421 13.75 6.5C13.75 6.08579 14.0858 5.75 14.5 5.75H16.75V3.5C16.75 3.08579 17.0858 2.75 17.5 2.75Z\" clip-rule=\"evenodd\"/><path d=\"M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z\"/><path d=\"M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z\"/><path d=\"M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z\"/><path d=\"M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z\"/><path d=\"M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z\"/><path d=\"M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z\"/></g>",
    "width": 24,
    "height": 24
  }
};
window.ZEM_ICONS_UNRESOLVED = ["solar:bank-bold", "solar:focus-bold", "solar:gem-bold", "solar:magic-stick-3-bold", "solar:magic-stick-bold", "solar:percent-circle-bold", "solar:shapes-bold", "solar:square-bold", "solar:square-bold-duotone"];
})(); } catch (e) { __ds_ns.__errors.push({ path: "iak-kids-v2.2-templates/zem/lib/icons.js", error: String((e && e.message) || e) }); }

// iak-kids-v2.2-templates/zem/lib/zem-ui.js
try { (() => {
/* IAK KIDS_V1 · Little Everyday UI — window.ZEM namespace kept for compatibility (same component API as v1). Styling in zem-ui.css (semantic --iak-kids-* roles). Overlay behaviour is a dependency-free approximation for previews. */
(function () {
  const h = React.createElement,
    IC = () => window.ZEM_ICONS || {};
  const cx = (...a) => a.filter(Boolean).join(' ');
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function Glyph({
    name,
    size = 20
  }) {
    const ic = IC()[name];
    return ic ? h('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      'aria-hidden': 'true',
      focusable: 'false',
      dangerouslySetInnerHTML: {
        __html: ic.body
      }
    }) : null;
  }

  /* index.tsx */
  function Icon({
    name,
    size = 20,
    label,
    ...p
  }) {
    const I = IC();
    const ic = has(I, name) ? I[name] : undefined;
    if (!ic) return null;
    return h('svg', {
      ...p,
      width: size,
      height: size,
      viewBox: `0 0 ${ic.width} ${ic.height}`,
      fill: 'currentColor',
      role: label ? 'img' : undefined,
      'aria-label': label,
      'aria-hidden': label ? undefined : true,
      focusable: 'false',
      dangerouslySetInnerHTML: {
        __html: ic.body
      }
    });
  }
  const Button = React.forwardRef(function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    children,
    className,
    type = 'button',
    ...p
  }, ref) {
    return h('button', {
      ...p,
      ref,
      type,
      disabled: disabled || loading,
      'aria-busy': loading || undefined,
      className: cx('zem-button', `zem-button--${variant}`, `zem-button--${size}`, className)
    }, h('span', {
      style: loading ? {
        opacity: 0
      } : undefined
    }, children), loading && h('span', {
      className: 'zem-spinner',
      'aria-hidden': 'true'
    }));
  });
  function useField(id, description, error, describedBy) {
    const uid = React.useId();
    const inputId = id || `zem-${uid}`;
    return {
      inputId,
      helpId: `${inputId}-help`,
      descriptionId: cx(describedBy, (!!error || !!description) && `${inputId}-help`) || undefined
    };
  }
  function FieldShell({
    label,
    inputId,
    helpId,
    description,
    error,
    required,
    children
  }) {
    return h('div', {
      className: 'zem-field'
    }, h('label', {
      htmlFor: inputId
    }, label, required && h('span', {
      'aria-hidden': 'true'
    }, ' *')), children, (error || description) && h('p', {
      id: helpId,
      className: cx('zem-help', !!error && 'zem-error')
    }, error || description));
  }
  function fieldFactory(tag, extra) {
    return React.forwardRef(function Field({
      label,
      description,
      error,
      id,
      className,
      required,
      'aria-describedby': db,
      children,
      ...p
    }, ref) {
      const f = useField(id, description, error, db);
      const props = {
        ...p,
        id: f.inputId,
        ref,
        required,
        'aria-describedby': f.descriptionId,
        'aria-invalid': error ? true : p['aria-invalid'],
        className: cx('zem-input', extra, className)
      };
      if (tag === 'textarea') props.rows = p.rows || 4;
      return h(FieldShell, {
        ...f,
        label,
        description,
        error,
        required
      }, h(tag, props, tag === 'select' ? children : undefined));
    });
  }
  const TextField = fieldFactory('input'),
    Textarea = fieldFactory('textarea', 'zem-textarea'),
    Select = fieldFactory('select');
  const Checkbox = React.forwardRef(function Checkbox({
    label,
    className,
    ...p
  }, ref) {
    return h('label', {
      className: cx('zem-control', className)
    }, h('input', {
      ...p,
      type: 'checkbox',
      ref
    }), h('span', null, label));
  });
  const Switch = React.forwardRef(function Switch({
    label,
    className,
    ...p
  }, ref) {
    return h('label', {
      className: cx('zem-control', 'zem-switch', className)
    }, h('input', {
      ...p,
      type: 'checkbox',
      role: 'switch',
      ref
    }), h('span', {
      className: 'zem-switch-track',
      'aria-hidden': 'true'
    }), h('span', null, label));
  });
  function Badge({
    tone = 'neutral',
    className,
    children,
    ...p
  }) {
    return h('span', {
      ...p,
      className: cx('zem-badge', `zem-badge--${tone}`, className)
    }, children);
  }
  function Card({
    title,
    footer,
    children,
    className,
    ...p
  }) {
    const id = React.useId();
    return h('section', {
      ...p,
      'aria-labelledby': title ? id : p['aria-labelledby'],
      className: cx('zem-card', className)
    }, title && h('h2', {
      id
    }, title), h('div', null, children), footer && h('footer', null, footer));
  }
  function Skeleton({
    width = '100%',
    height = 20,
    circle = false,
    style,
    className,
    ...p
  }) {
    return h('span', {
      ...p,
      'aria-hidden': 'true',
      className: cx('zem-skeleton', className),
      style: {
        width,
        height,
        borderRadius: circle ? '50%' : undefined,
        ...style
      }
    });
  }

  /* focus helpers for overlay approximations */
  function useModalFocus(open, ref, initialFocusRef, onClose, lockEsc) {
    React.useEffect(() => {
      if (!open) return;
      const prev = document.activeElement;
      const node = ref.current;
      const t = setTimeout(() => {
        if (initialFocusRef && initialFocusRef.current) initialFocusRef.current.focus();else {
          const f = node && node.querySelector(FOCUSABLE);
          f && f.focus();
        }
      }, 0);
      const key = e => {
        if (e.key === 'Escape') {
          if (lockEsc && lockEsc()) return;
          e.preventDefault();
          onClose();
        }
        if (e.key === 'Tab' && node) {
          const els = [...node.querySelectorAll(FOCUSABLE)];
          if (!els.length) return;
          const a = els[0],
            z = els[els.length - 1];
          if (e.shiftKey && document.activeElement === a) {
            e.preventDefault();
            z.focus();
          } else if (!e.shiftKey && document.activeElement === z) {
            e.preventDefault();
            a.focus();
          }
        }
      };
      document.addEventListener('keydown', key);
      return () => {
        clearTimeout(t);
        document.removeEventListener('keydown', key);
        prev && prev.focus && prev.focus();
      };
    }, [open]);
  }
  function portal(node, inline) {
    return inline ? node : ReactDOM.createPortal(node, document.body);
  }

  /* composites.tsx */
  function Dialog({
    trigger,
    title,
    description,
    children,
    footer,
    open,
    defaultOpen,
    onOpenChange,
    initialFocusRef,
    closeOnOutside = false,
    closeLabel = '닫기',
    size = 'md',
    inline = false
  }) {
    const [inner, setInner] = React.useState(!!defaultOpen);
    const isOpen = inline || (open !== undefined ? open : inner);
    const set = v => {
      if (open === undefined) setInner(v);
      onOpenChange && onOpenChange(v);
    };
    const ref = React.useRef(null),
      tid = React.useId();
    useModalFocus(isOpen && !inline, ref, initialFocusRef, () => set(false));
    const content = h(React.Fragment, null, h('div', {
      className: 'zem-dialog-overlay',
      onClick: () => {
        if (closeOnOutside) set(false);
      }
    }), h('div', {
      ref,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': tid,
      className: `zem-dialog zem-dialog--${size}`
    }, h('div', {
      className: 'zem-dialog-heading'
    }, h('h2', {
      id: tid,
      className: 'zem-dialog-title'
    }, title), h('button', {
      type: 'button',
      className: 'zem-dialog-close',
      'aria-label': closeLabel,
      onClick: () => set(false)
    }, h(Glyph, {
      name: 'eva:close-fill'
    }))), description && h('p', {
      className: 'zem-dialog-description'
    }, description), h('div', {
      className: 'zem-dialog-body'
    }, children), footer && h('div', {
      className: 'zem-dialog-footer'
    }, footer)));
    return h(React.Fragment, null, trigger && !inline && React.cloneElement(trigger, {
      onClick: () => set(true),
      'aria-haspopup': 'dialog'
    }), isOpen && portal(content, inline));
  }
  function Menu({
    trigger,
    label,
    items,
    align = 'end',
    open,
    onOpenChange,
    inline = false,
    highlightedId
  }) {
    const [inner, setInner] = React.useState(false);
    const isOpen = inline || (open !== undefined ? open : inner);
    const set = v => {
      if (open === undefined) setInner(v);
      onOpenChange && onOpenChange(v);
    };
    const [hi, setHi] = React.useState(highlightedId || null);
    const listRef = React.useRef(null),
      trig = React.useRef(null),
      anchor = React.useRef(null);
    const [pos, setPos] = React.useState(null);
    React.useLayoutEffect(() => {
      if (!isOpen || inline || !anchor.current) return;
      const place = () => {
        const r = anchor.current.getBoundingClientRect(),
          vw = document.documentElement.clientWidth;
        const st = {
          position: 'fixed',
          top: r.bottom + 6
        };
        if (align === 'start') st.left = Math.max(16, r.left);else if (align === 'center') {
          st.left = r.left + r.width / 2;
          st.transform = 'translateX(-50%)';
        } else st.right = Math.max(16, vw - r.right);
        setPos(st);
      };
      place();
      window.addEventListener('scroll', place, true);
      window.addEventListener('resize', place);
      return () => {
        window.removeEventListener('scroll', place, true);
        window.removeEventListener('resize', place);
      };
    }, [isOpen]);
    const enabled = items.filter(i => !i.disabled);
    React.useEffect(() => {
      if (isOpen && !inline) {
        setHi(enabled[0] && enabled[0].id);
        const out = e => {
          if (listRef.current && !listRef.current.contains(e.target) && anchor.current && !anchor.current.contains(e.target)) set(false);
        };
        document.addEventListener('mousedown', out);
        return () => document.removeEventListener('mousedown', out);
      }
    }, [isOpen]);
    React.useEffect(() => {
      if (isOpen && !inline && hi && listRef.current) {
        const el = listRef.current.querySelector(`[data-id="${hi}"]`);
        el && el.focus();
      }
    }, [hi, isOpen]);
    const key = e => {
      const idx = enabled.findIndex(i => i.id === hi);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHi(enabled[(idx + 1) % enabled.length].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHi(enabled[(idx - 1 + enabled.length) % enabled.length].id);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setHi(enabled[0].id);
      } else if (e.key === 'End') {
        e.preventDefault();
        setHi(enabled[enabled.length - 1].id);
      } else if (e.key === 'Escape' || e.key === 'Tab') {
        set(false);
        if (e.key === 'Escape' && trig.current) trig.current.focus();
      }
    };
    const list = h('div', {
      ref: listRef,
      style: inline ? undefined : pos || {
        position: 'fixed',
        visibility: 'hidden'
      },
      role: 'menu',
      'aria-label': label,
      className: cx('zem-menu', inline && 'zem-menu--inline'),
      'data-align': align,
      onKeyDown: key
    }, items.map(item => h(React.Fragment, {
      key: item.id
    }, item.separatorBefore && h('div', {
      role: 'separator',
      className: 'zem-menu-separator'
    }), h('div', {
      role: 'menuitem',
      tabIndex: -1,
      'data-id': item.id,
      className: 'zem-menu-item',
      'data-danger': item.danger || undefined,
      'data-disabled': item.disabled || undefined,
      'aria-disabled': item.disabled || undefined,
      'data-highlighted': hi === item.id && !item.disabled ? '' : undefined,
      onMouseEnter: () => !item.disabled && setHi(item.id),
      onClick: () => {
        if (item.disabled) return;
        item.onSelect && item.onSelect();
        set(false);
      }
    }, item.label))));
    if (inline) return list;
    return h('span', {
      className: 'zem-menu-anchor',
      ref: anchor
    }, React.cloneElement(trigger, {
      ref: trig,
      'aria-haspopup': 'menu',
      'aria-expanded': isOpen,
      onClick: () => set(!isOpen),
      onKeyDown: e => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          set(true);
        }
      }
    }), isOpen && ReactDOM.createPortal(list, document.body));
  }

  /* table.tsx */
  const integer = (v, fb, min = 1) => Number.isFinite(v) ? Math.max(min, Math.floor(v)) : fb;
  function Pagination({
    page,
    pageCount,
    onPageChange,
    disabled = false,
    label = '페이지 탐색',
    previewState
  }) {
    const count = integer(pageCount, 1),
      current = Math.min(integer(page, 1), count);
    return h('nav', {
      className: 'zem-pagination',
      'aria-label': label,
      'data-preview-state': previewState
    }, h('button', {
      type: 'button',
      disabled: disabled || current === 1,
      onClick: () => onPageChange(1),
      'aria-label': '첫 페이지'
    }, '«'), h('button', {
      type: 'button',
      disabled: disabled || current === 1,
      onClick: () => onPageChange(current - 1)
    }, '이전'), h('span', {
      'aria-current': 'page'
    }, `${current} / ${count} 페이지`), h('button', {
      type: 'button',
      disabled: disabled || current === count,
      onClick: () => onPageChange(current + 1)
    }, '다음'), h('button', {
      type: 'button',
      disabled: disabled || current === count,
      onClick: () => onPageChange(count),
      'aria-label': '마지막 페이지'
    }, '»'));
  }
  const collator = new Intl.Collator('ko', {
    numeric: true,
    sensitivity: 'base'
  });
  function Table({
    caption,
    columns,
    rows,
    rowKey,
    sort,
    defaultSort,
    onSortChange,
    loading = false,
    error,
    emptyMessage = '표시할 항목이 없습니다.',
    loadingMessage = '데이터를 불러오는 중입니다.',
    minWidth = 560,
    pagination,
    virtualization
  }) {
    const [iSort, setISort] = React.useState(defaultSort),
      [iPage, setIPage] = React.useState(1),
      [scrollTop, setScrollTop] = React.useState(0);
    const viewport = React.useRef(null);
    const activeSort = sort === undefined ? iSort : sort;
    const sorted = React.useMemo(() => {
      const c = columns.find(c => activeSort && c.id === activeSort.columnId);
      if (!c || !c.sortValue || !activeSort) return rows;
      return [...rows].sort((a, b) => {
        const x = c.sortValue(a),
          y = c.sortValue(b);
        if (x == null) return y == null ? 0 : 1;
        if (y == null) return -1;
        const n = typeof x === 'number' && typeof y === 'number' ? x - y : collator.compare(String(x), String(y));
        return (activeSort.direction === 'ascending' ? 1 : -1) * (Number.isNaN(n) ? 0 : n);
      });
    }, [columns, rows, activeSort]);
    const size = integer(pagination && pagination.pageSize != null ? pagination.pageSize : rows.length, 10),
      pageCount = Math.max(1, Math.ceil(rows.length / size));
    const page = pagination ? Math.min(integer(pagination.page != null ? pagination.page : iPage, 1), pageCount) : 1,
      startIndex = pagination ? (page - 1) * size : 0;
    const visibleRows = pagination ? sorted.slice(startIndex, startIndex + size) : sorted;
    const virtual = !!virtualization && !pagination,
      height = integer(virtualization && virtualization.height || 400, 400, 160),
      rowHeight = integer(virtualization && virtualization.rowHeight || 56, 56, 40),
      overscan = Math.min(50, integer(virtualization && virtualization.overscan != null ? virtualization.overscan : 4, 4, 0));
    const changePage = n => {
      if (!pagination || pagination.page === undefined) setIPage(n);
      pagination && pagination.onPageChange && pagination.onPageChange(n);
      if (viewport.current) viewport.current.scrollTop = 0;
    };
    const bodyOffset = 96;
    const first = virtual ? Math.max(0, Math.min(Math.max(0, visibleRows.length - 1), Math.floor(Math.max(0, scrollTop - bodyOffset) / rowHeight) - overscan)) : 0;
    const end = virtual ? Math.min(visibleRows.length, first + Math.ceil(height / rowHeight) + 2 * overscan + 1) : visibleRows.length;
    const state = loading ? loadingMessage : error || (!rows.length ? emptyMessage : undefined);
    const cells = [];
    let cursor = 0;
    const spacer = (a, b) => {
      if (b > a) cells.push(h('tr', {
        key: 'sp' + a,
        'aria-hidden': 'true',
        className: 'zem-table-spacer'
      }, h('td', {
        colSpan: Math.max(1, columns.length),
        style: {
          height: (b - a) * rowHeight
        }
      })));
    };
    for (let i = first; i < end; i++) {
      const row = visibleRows[i];
      if (virtual) spacer(cursor, i);
      cells.push(h('tr', {
        key: 'r' + rowKey(row),
        'aria-rowindex': virtual || pagination ? startIndex + i + 2 : undefined
      }, columns.map(c => h('td', {
        key: c.id,
        style: {
          textAlign: c.align || 'left'
        }
      }, virtual ? h('div', {
        className: 'zem-table-virtual-cell',
        style: {
          height: rowHeight
        }
      }, c.cell(row)) : c.cell(row)))));
      cursor = i + 1;
    }
    if (virtual) spacer(cursor, visibleRows.length);
    const toggle = id => {
      const next = {
        columnId: id,
        direction: activeSort && activeSort.columnId === id && activeSort.direction === 'ascending' ? 'descending' : 'ascending'
      };
      if (sort === undefined) setISort(next);
      onSortChange && onSortChange(next);
      if (pagination) changePage(1);
    };
    const range = rows.length ? `${startIndex + 1}–${startIndex + visibleRows.length} / ${rows.length}개` : '0개';
    return h('div', {
      className: 'zem-table-root'
    }, h('div', {
      ref: viewport,
      className: cx('zem-table-scroll', virtual && 'zem-table-virtual'),
      style: virtual ? {
        maxHeight: height
      } : undefined,
      role: 'region',
      'aria-label': `${caption} · 스크롤`,
      tabIndex: 0,
      onScroll: virtual ? e => setScrollTop(e.currentTarget.scrollTop) : undefined
    }, h('table', {
      className: 'zem-table',
      style: {
        minWidth
      },
      'aria-busy': loading || undefined,
      'aria-rowcount': !state && (virtual || pagination) ? rows.length + 1 : undefined
    }, h('caption', null, caption), h('thead', null, h('tr', null, columns.map(c => h('th', {
      key: c.id,
      scope: 'col',
      style: {
        textAlign: c.align || 'left'
      },
      'aria-sort': c.sortValue && activeSort && activeSort.columnId === c.id ? activeSort.direction : undefined
    }, c.sortValue ? h('button', {
      type: 'button',
      disabled: loading || !!error,
      className: 'zem-table-sort',
      onClick: () => toggle(c.id)
    }, c.header, h('span', {
      'aria-hidden': 'true'
    }, activeSort && activeSort.columnId === c.id ? activeSort.direction === 'ascending' ? '↑' : '↓' : '↕'), h('span', {
      className: 'zem-sr-only'
    }, ' 정렬')) : c.header)))), h('tbody', null, state ? h('tr', null, h('td', {
      className: 'zem-table-state',
      colSpan: Math.max(columns.length, 1)
    }, state)) : cells))), pagination && h('div', {
      className: 'zem-table-paging'
    }, h('span', null, range), h(Pagination, {
      page,
      pageCount,
      onPageChange: changePage,
      disabled: loading || !!error,
      label: `${caption} 페이지 탐색`
    })), h('p', {
      className: 'zem-sr-only',
      role: 'status'
    }, state || (pagination ? `${page} / ${pageCount} 페이지, ${range}` : `${rows.length}개 항목`)));
  }

  /* toast.tsx */
  const labels = {
    success: '성공',
    warning: '주의',
    error: '오류',
    info: '안내'
  };
  const toneIcons = {
    success: 'eva:checkmark-circle-2-fill',
    warning: 'eva:alert-triangle-fill',
    error: 'eva:alert-circle-outline',
    info: 'eva:info-fill'
  };
  const durationValue = n => n === 0 ? Infinity : Number.isFinite(n) && n > 0 ? Math.max(1000, n) : 5000;
  function ToastView({
    title,
    description,
    tone = 'info',
    action,
    onClose,
    previewState
  }) {
    return h('li', {
      className: `zem-toast zem-toast--${tone}`,
      role: 'status'
    }, h('span', {
      className: 'zem-toast-icon'
    }, h(Glyph, {
      name: toneIcons[tone]
    })), h('div', {
      className: 'zem-toast-content'
    }, h('div', {
      className: 'zem-toast-title'
    }, h('span', {
      className: 'zem-sr-only'
    }, labels[tone] + ': '), title), description && h('div', {
      className: 'zem-toast-description'
    }, description), action && h('button', {
      type: 'button',
      className: 'zem-toast-action',
      'aria-label': action.altText,
      onClick: action.onClick
    }, action.label)), h('button', {
      type: 'button',
      'aria-label': `${title} 알림 닫기`,
      className: 'zem-toast-close',
      'data-preview-state': previewState,
      onClick: onClose
    }, h(Glyph, {
      name: 'eva:close-fill',
      size: 18
    })));
  }
  const ToastCtx = React.createContext(null);
  function ToastProvider({
    children,
    duration = 5000,
    label = '알림',
    container
  }) {
    const [entries, setEntries] = React.useState([]);
    const cur = React.useRef([]),
      counter = React.useRef(0),
      timers = React.useRef({});
    const commit = n => {
      cur.current = n;
      setEntries(n);
    };
    const dismiss = React.useCallback(id => {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
      commit(cur.current.filter(e => e.id !== id));
    }, []);
    const notify = React.useCallback(o => {
      if (!o.title || !o.title.trim()) return undefined;
      if (o.id && cur.current.some(e => e.id === o.id)) return o.id;
      if (cur.current.length >= 50) return undefined;
      const id = o.id || `toast-${++counter.current}`;
      commit([...cur.current, {
        ...o,
        id
      }]);
      return id;
    }, []);
    const dismissAll = React.useCallback(() => {
      Object.values(timers.current).forEach(clearTimeout);
      timers.current = {};
      commit([]);
    }, []);
    const visible = entries.slice(0, 3);
    React.useEffect(() => {
      visible.forEach(e => {
        if (timers.current[e.id]) return;
        const d = durationValue(e.duration != null ? e.duration : duration);
        if (d !== Infinity) timers.current[e.id] = setTimeout(() => dismiss(e.id), d);
      });
    });
    const api = React.useMemo(() => ({
      notify,
      dismiss,
      dismissAll
    }), []);
    const vp = h('ol', {
      className: 'zem-toast-viewport',
      'aria-label': `${label} (F8)`,
      tabIndex: -1
    }, visible.map(e => h(ToastView, {
      key: e.id,
      ...e,
      onClose: () => dismiss(e.id)
    })));
    return h(ToastCtx.Provider, {
      value: api
    }, children, container ? vp : ReactDOM.createPortal(vp, document.body));
  }
  function useToast() {
    const c = React.useContext(ToastCtx);
    if (!c) throw new Error('useToast must be used inside ToastProvider');
    return c;
  }

  /* alert-dialog.tsx */
  function AlertDialog({
    trigger,
    title,
    description,
    confirmLabel = '확인',
    cancelLabel = '취소',
    danger = false,
    onConfirm,
    errorMessage = '작업을 완료하지 못했습니다. 다시 시도해 주세요.',
    inline = false,
    previewState
  }) {
    const [open, setOpen] = React.useState(false),
      [pending, setPending] = React.useState(previewState === 'pending'),
      [error, setError] = React.useState(previewState === 'error');
    const busy = React.useRef(false),
      cancel = React.useRef(null),
      ref = React.useRef(null),
      tid = React.useId(),
      did = React.useId();
    const isOpen = inline || open;
    useModalFocus(isOpen && !inline, ref, cancel, () => {
      setError(false);
      setOpen(false);
    }, () => busy.current);
    async function confirm() {
      if (busy.current || inline) return;
      busy.current = true;
      setPending(true);
      setError(false);
      try {
        await onConfirm();
        setOpen(false);
      } catch (e) {
        setError(true);
        requestAnimationFrame(() => cancel.current && cancel.current.focus());
      } finally {
        busy.current = false;
        setPending(false);
      }
    }
    const content = h(React.Fragment, null, h('div', {
      className: 'zem-dialog-overlay'
    }), h('div', {
      ref,
      role: 'alertdialog',
      'aria-modal': 'true',
      'aria-labelledby': tid,
      'aria-describedby': did,
      'aria-busy': pending || undefined,
      className: 'zem-dialog zem-dialog--sm'
    }, h('h2', {
      id: tid,
      className: 'zem-dialog-title'
    }, title), h('p', {
      id: did,
      className: 'zem-dialog-description'
    }, description), error && h('p', {
      role: 'alert',
      className: 'zem-error'
    }, errorMessage), pending && h('p', {
      role: 'status',
      className: 'zem-alert-status'
    }, '처리 중입니다.'), h('div', {
      className: 'zem-dialog-footer'
    }, h(Button, {
      ref: cancel,
      variant: 'secondary',
      disabled: pending,
      onClick: () => {
        if (!busy.current) {
          setError(false);
          setOpen(false);
        }
      }
    }, cancelLabel), h(Button, {
      variant: danger ? 'danger' : 'primary',
      loading: pending,
      onClick: e => {
        e.preventDefault();
        confirm();
      }
    }, confirmLabel))));
    return h(React.Fragment, null, trigger && !inline && React.cloneElement(trigger, {
      onClick: () => setOpen(true),
      'aria-haspopup': 'dialog'
    }), isOpen && portal(content, inline));
  }
  window.ZEM = {
    Icon,
    Button,
    TextField,
    Textarea,
    Select,
    Checkbox,
    Switch,
    Badge,
    Card,
    Skeleton,
    Dialog,
    Menu,
    Table,
    Pagination,
    ToastProvider,
    useToast,
    AlertDialog,
    preview: {
      ToastView,
      Glyph
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "iak-kids-v2.2-templates/zem/lib/zem-ui.js", error: String((e && e.message) || e) }); }

// zem/components/AlertDialog.jsx
try { (() => {
// AlertDialog — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function AlertDialog(props) {
  const C = window.ZEM && window.ZEM.AlertDialog;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { AlertDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/AlertDialog.jsx", error: String((e && e.message) || e) }); }

// zem/components/Badge.jsx
try { (() => {
// Badge — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Badge(props) {
  const C = window.ZEM && window.ZEM.Badge;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Badge.jsx", error: String((e && e.message) || e) }); }

// zem/components/Button.jsx
try { (() => {
// Button — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Button(props) {
  const C = window.ZEM && window.ZEM.Button;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Button.jsx", error: String((e && e.message) || e) }); }

// zem/components/Card.jsx
try { (() => {
// Card — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Card(props) {
  const C = window.ZEM && window.ZEM.Card;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Card.jsx", error: String((e && e.message) || e) }); }

// zem/components/Checkbox.jsx
try { (() => {
// Checkbox — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Checkbox(props) {
  const C = window.ZEM && window.ZEM.Checkbox;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Checkbox.jsx", error: String((e && e.message) || e) }); }

// zem/components/Dialog.jsx
try { (() => {
// Dialog — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Dialog(props) {
  const C = window.ZEM && window.ZEM.Dialog;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Dialog.jsx", error: String((e && e.message) || e) }); }

// zem/components/Icon.jsx
try { (() => {
// Icon — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Icon(props) {
  const C = window.ZEM && window.ZEM.Icon;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Icon.jsx", error: String((e && e.message) || e) }); }

// zem/components/Menu.jsx
try { (() => {
// Menu — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Menu(props) {
  const C = window.ZEM && window.ZEM.Menu;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Menu.jsx", error: String((e && e.message) || e) }); }

// zem/components/Pagination.jsx
try { (() => {
// Pagination — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Pagination(props) {
  const C = window.ZEM && window.ZEM.Pagination;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Pagination.jsx", error: String((e && e.message) || e) }); }

// zem/components/Select.jsx
try { (() => {
// Select — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Select(props) {
  const C = window.ZEM && window.ZEM.Select;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Select.jsx", error: String((e && e.message) || e) }); }

// zem/components/Skeleton.jsx
try { (() => {
// Skeleton — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Skeleton(props) {
  const C = window.ZEM && window.ZEM.Skeleton;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Skeleton.jsx", error: String((e && e.message) || e) }); }

// zem/components/Switch.jsx
try { (() => {
// Switch — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Switch(props) {
  const C = window.ZEM && window.ZEM.Switch;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Switch.jsx", error: String((e && e.message) || e) }); }

// zem/components/Table.jsx
try { (() => {
// Table — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Table(props) {
  const C = window.ZEM && window.ZEM.Table;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Table.jsx", error: String((e && e.message) || e) }); }

// zem/components/TextField.jsx
try { (() => {
// TextField — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function TextField(props) {
  const C = window.ZEM && window.ZEM.TextField;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/TextField.jsx", error: String((e && e.message) || e) }); }

// zem/components/Textarea.jsx
try { (() => {
// Textarea — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Textarea(props) {
  const C = window.ZEM && window.ZEM.Textarea;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Textarea.jsx", error: String((e && e.message) || e) }); }

// zem/components/Toast.jsx
try { (() => {
// Toast — thin export of the IAK KIDS_V1 UI (zem/lib/zem-ui.js). Requires zem/lib/icons.js for glyphs.
function Toast(props) {
  const C = window.ZEM && window.ZEM.preview.ToastView;
  return C ? React.createElement(C, props) : null;
}
function ToastProvider(props) {
  return React.createElement(window.ZEM.ToastProvider, props);
}
function useToast() {
  return window.ZEM.useToast();
}
Object.assign(__ds_scope, { Toast, ToastProvider, useToast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/components/Toast.jsx", error: String((e && e.message) || e) }); }

// zem/compositions/ChildSwitcher.jsx
try { (() => {
// ChildSwitcher — thin export of the v2.3 composition pattern (implementation: zem/lib/zem-patterns.js → window.ZEM_PATTERNS). Requires icons.js + zem-ui.js + zem-patterns.js.
function ChildSwitcher(props) {
  const C = window.ZEM_PATTERNS && window.ZEM_PATTERNS.ChildSwitcher;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { ChildSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/compositions/ChildSwitcher.jsx", error: String((e && e.message) || e) }); }

// zem/compositions/DailyTimeline.jsx
try { (() => {
// DailyTimeline — thin export of the v2.3 composition pattern (implementation: zem/lib/zem-patterns.js → window.ZEM_PATTERNS). Requires icons.js + zem-ui.js + zem-patterns.js.
function DailyTimeline(props) {
  const C = window.ZEM_PATTERNS && window.ZEM_PATTERNS.DailyTimeline;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { DailyTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/compositions/DailyTimeline.jsx", error: String((e && e.message) || e) }); }

// zem/compositions/FocusSession.jsx
try { (() => {
// FocusSession — thin export of the v2.3 composition pattern (implementation: zem/lib/zem-patterns.js → window.ZEM_PATTERNS). Requires icons.js + zem-ui.js + zem-patterns.js.
function FocusSession(props) {
  const C = window.ZEM_PATTERNS && window.ZEM_PATTERNS.FocusSession;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { FocusSession });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/compositions/FocusSession.jsx", error: String((e && e.message) || e) }); }

// zem/compositions/GoalComposer.jsx
try { (() => {
// GoalComposer — thin export of the v2.3 composition pattern (implementation: zem/lib/zem-patterns.js → window.ZEM_PATTERNS). Requires icons.js + zem-ui.js + zem-patterns.js.
function GoalComposer(props) {
  const C = window.ZEM_PATTERNS && window.ZEM_PATTERNS.GoalComposer;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { GoalComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/compositions/GoalComposer.jsx", error: String((e && e.message) || e) }); }

// zem/compositions/MissionFeedback.jsx
try { (() => {
// MissionFeedback — thin export of the v2.3 composition pattern (implementation: zem/lib/zem-patterns.js → window.ZEM_PATTERNS). Requires icons.js + zem-ui.js + zem-patterns.js.
function MissionFeedback(props) {
  const C = window.ZEM_PATTERNS && window.ZEM_PATTERNS.MissionFeedback;
  return C ? React.createElement(C, props) : null;
}
Object.assign(__ds_scope, { MissionFeedback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/compositions/MissionFeedback.jsx", error: String((e && e.message) || e) }); }

// zem/lib/card.js
try { (() => {
/* ZEM card helper: renders case grids and records which cases actually rendered (window.__ZEM_RENDERED). */
(function () {
  const h = React.createElement;
  const TAG = {
    code: 'code',
    'native': 'native attr',
    composition: 'composition',
    'design-only': 'design-only',
    'not-in-source': 'not in source',
    'preview-only': 'preview-only'
  };
  function Case({
    c
  }) {
    return h('figure', {
      className: 'mc-case' + (c.wide ? ' wide' : c.w2 ? ' w2' : ''),
      'data-case': c.id,
      'data-tag': c.tag || 'code'
    }, h('div', {
      className: 'mc-demo' + (c.col ? ' col' : '')
    }, c.el), h('figcaption', {
      className: 'mc-cap'
    }, h('span', null, c.label), h('span', {
      className: 'mc-tag',
      'data-t': c.tag || 'code'
    }, TAG[c.tag || 'code'])));
  }
  function Page({
    spec
  }) {
    React.useEffect(() => {
      const figs = [...document.querySelectorAll('[data-case]')];
      const cases = figs.map(f => {
        const d = f.querySelector('.mc-demo');
        const r = d.getBoundingClientRect();
        return {
          id: f.dataset.case,
          tag: f.dataset.tag,
          rendered: d.childElementCount > 0 && r.height > 0,
          overflowX: d.scrollWidth > d.clientWidth + 1
        };
      });
      window.__ZEM_RENDERED = {
        component: spec.name,
        cases,
        notInSource: spec.notInSource || []
      };
      console.log('ZEM-CASES ' + JSON.stringify(window.__ZEM_RENDERED));
    }, []);
    return h('main', {
      className: 'mc'
    }, h('header', {
      className: 'mc-head'
    }, h('div', {
      className: 'ov'
    }, spec.group || 'IAK KIDS · Component'), h('h1', null, spec.name), spec.description && h('p', null, spec.description), h('div', {
      className: 'mc-meta'
    }, (spec.meta || []).map((m, i) => h('code', {
      key: i
    }, m)))), spec.sections.map((s, i) => h('section', {
      key: i,
      className: 'mc-sec'
    }, h('header', null, h('h2', null, s.title), s.note && h('p', null, s.note)), h('div', {
      className: 'mc-grid'
    }, s.cases.map(c => h(Case, {
      key: c.id,
      c
    }))))), spec.notInSource && spec.notInSource.length ? h('section', {
      className: 'mc-sec'
    }, h('header', null, h('h2', null, '소스에 없는 상태 · 렌더하지 않음')), h('div', {
      className: 'mc-note'
    }, spec.notInSource.map((n, i) => h('div', {
      key: i
    }, '· ', n)))) : null, spec.footer || null);
  }
  window.ZEMCard = {
    mount(spec) {
      ReactDOM.createRoot(document.getElementById('root')).render(h(Page, {
        spec
      }));
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/card.js", error: String((e && e.message) || e) }); }

// zem/lib/contrast.js
try { (() => {
/* live WCAG contrast annotate for swatch cards */
window.ZEMContrast = {
  lum(c) {
    const m = c.match(/\d+(\.\d+)?/g).map(Number);
    const f = v => {
      v /= 255;
      return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
    };
    return .2126 * f(m[0]) + .7152 * f(m[1]) + .0722 * f(m[2]);
  },
  ratio(a, b) {
    const x = this.lum(a),
      y = this.lum(b);
    return (Math.max(x, y) + .05) / (Math.min(x, y) + .05);
  },
  hex(c) {
    const m = c.match(/\d+/g).slice(0, 3).map(Number);
    return '#' + m.map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  },
  annotate() {
    document.querySelectorAll('.sw').forEach(f => {
      const c = getComputedStyle(f.querySelector('i')).backgroundColor;
      f.querySelector('.hx').textContent = this.hex(c);
      const w = this.ratio(c, 'rgb(255,255,255)'),
        k = this.ratio(c, 'rgb(31,36,64)');
      f.querySelector('.cr').textContent = 'white ' + w.toFixed(1) + ' · ink ' + k.toFixed(1);
    });
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/contrast.js", error: String((e && e.message) || e) }); }

// zem/lib/icons.js
try { (() => {
/* Generic function icons (Eva/Solar open-source sets) — 97 SVGs carried from the project icon file. Generic glyphs only; no ZEM source icon artwork copied. */
window.ZEM_ICONS = {
  "eva:alert-circle-outline": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8\"/><circle cx=\"12\" cy=\"16\" r=\"1\" fill=\"currentColor\"/><path fill=\"currentColor\" d=\"M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:alert-triangle-fill": {
    "body": "<path fill=\"currentColor\" d=\"M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66a3 3 0 0 0-.05-3.04M12 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-downward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5l.15.09l.13.07a1 1 0 0 0 .72 0l.13-.07l.15-.09l6-5a1 1 0 0 0 .13-1.41\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-back-fill": {
    "body": "<path fill=\"currentColor\" d=\"M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-downward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-forward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-ios-upward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15a1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15\"/>",
    "width": 24,
    "height": 24
  },
  "eva:arrow-upward-fill": {
    "body": "<path fill=\"currentColor\" d=\"M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5l-.15-.09l-.13-.07a1 1 0 0 0-.72 0l-.13.07l-.15.09l-6 5a1 1 0 0 0-.13 1.41\"/>",
    "width": 24,
    "height": 24
  },
  "eva:bookmark-fill": {
    "body": "<path fill=\"currentColor\" d=\"M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86a1 1 0 0 1-1 0l-5.67-3.21l-5.33 3.2A1 1 0 0 1 6 21\"/>",
    "width": 24,
    "height": 24
  },
  "eva:calendar-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M8 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:checkmark-circle-2-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:checkmark-fill": {
    "body": "<path fill=\"currentColor\" d=\"M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:chevron-right-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32\"/>",
    "width": 24,
    "height": 24
  },
  "eva:close-circle-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:close-fill": {
    "body": "<path fill=\"currentColor\" d=\"m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:copy-fill": {
    "body": "<path fill=\"currentColor\" d=\"M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3\"/>",
    "width": 24,
    "height": 24
  },
  "eva:copy-outline": {
    "body": "<path fill=\"currentColor\" d=\"M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z\"/><path fill=\"currentColor\" d=\"M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:download-fill": {
    "body": "<rect width=\"16\" height=\"2\" x=\"4\" y=\"18\" fill=\"currentColor\" rx=\"1\" ry=\"1\"/><rect width=\"4\" height=\"2\" x=\"3\" y=\"17\" fill=\"currentColor\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 5 18)\"/><rect width=\"4\" height=\"2\" x=\"17\" y=\"17\" fill=\"currentColor\" rx=\"1\" ry=\"1\" transform=\"rotate(-90 19 18)\"/><path fill=\"currentColor\" d=\"M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2\"/><path fill=\"currentColor\" d=\"M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:edit-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71M16 10.68L13.32 8l1.95-2L18 8.73Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:email-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:external-link-fill": {
    "body": "<path fill=\"currentColor\" d=\"M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" d=\"M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2\"/>",
    "width": 24,
    "height": 24
  },
  "eva:file-text-fill": {
    "body": "<path fill=\"currentColor\" d=\"m19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67M9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4Z\"/>",
    "width": 24,
    "height": 24
  },
  "eva:flash-fill": {
    "body": "<path fill=\"currentColor\" d=\"M11.11 23a1 1 0 0 1-.34-.06a1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38a1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44\"/>",
    "width": 24,
    "height": 24
  },
  "eva:funnel-fill": {
    "body": "<path fill=\"currentColor\" d=\"M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49a1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9a1 1 0 0 1-.41.1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:home-fill": {
    "body": "<path fill=\"currentColor\" d=\"M10 14h4v7h-4z\"/><path fill=\"currentColor\" d=\"M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44\"/>",
    "width": 24,
    "height": 24
  },
  "eva:info-fill": {
    "body": "<path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0Zm-1-7a1 1 0 1 1 1-1a1 1 0 0 1-1 1\"/>",
    "width": 24,
    "height": 24
  },
  "eva:layers-fill": {
    "body": "<path fill=\"currentColor\" d=\"m3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81\"/><path fill=\"currentColor\" d=\"m20.71 10.66l-1.83-.78l-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85\"/><path fill=\"currentColor\" d=\"m20.71 15.1l-1.56-.68l-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76l-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87\"/>",
    "width": 24,
    "height": 24
  },
  "eva:link-fill": {
    "body": "<path fill=\"currentColor\" d=\"M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1\"/><path fill=\"currentColor\" d=\"M9 16H7.21A4.13 4.13 0 0 1 3 12.37A4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2m14-4.76A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63A4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76\"/>",
    "width": 24,
    "height": 24
  },
  "eva:more-horizontal-fill": {
    "body": "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"12\" r=\"2\" fill=\"currentColor\"/><circle cx=\"5\" cy=\"12\" r=\"2\" fill=\"currentColor\"/>",
    "width": 24,
    "height": 24
  },
  "eva:plus-fill": {
    "body": "<path fill=\"currentColor\" d=\"M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2\"/>",
    "width": 24,
    "height": 24
  },
  "eva:refresh-fill": {
    "body": "<path fill=\"currentColor\" d=\"M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19A7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7a7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83a1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06a.3.3 0 0 0 .1-.06a.8.8 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.3 1.3 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.2 9.2 0 0 0 12.18 3A9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25\"/>",
    "width": 24,
    "height": 24
  },
  "eva:search-fill": {
    "body": "<path fill=\"currentColor\" d=\"m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6\"/>",
    "width": 24,
    "height": 24
  },
  "solar:add-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:alt-arrow-down-bold": {
    "body": "<path fill=\"currentColor\" d=\"M12.3704 15.8351L18.8001 9.20467C19.2013 8.79094 18.9581 8 18.4297 8H5.5703C5.04189 8 4.79869 8.79094 5.1999 9.20467L11.6296 15.8351C11.8427 16.0549 12.1573 16.0549 12.3704 15.8351Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:asteroid-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M2 12C2 6.47715 6.47715 2 12 2C14.1266 2 16.0982 2.66383 17.7188 3.79559C16.7998 4.94874 16.25 6.41105 16.25 7.99974C16.25 11.2675 18.5713 13.9914 21.6545 14.6155C20.5047 18.8698 16.6179 22 12 22C11.3615 22 10.7369 21.9402 10.1316 21.8258C10.5287 20.9653 10.75 20.0075 10.75 19C10.75 15.2721 7.7279 12.25 3.99998 12.25C3.31014 12.25 2.64323 12.3537 2.0147 12.5469C2.00494 12.3658 2 12.1835 2 12ZM16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16ZM10.5 11C11.8807 11 13 9.88071 13 8.5C13 7.11929 11.8807 6 10.5 6C9.11929 6 8 7.11929 8 8.5C8 9.88071 9.11929 11 10.5 11Z\" clip-rule=\"evenodd\"/><path d=\"M17.75 7.99974C17.75 6.76899 18.1726 5.63896 18.8812 4.74396C20.8021 6.56624 22 9.14322 22 12C22 12.3861 21.9781 12.7672 21.9355 13.1419C19.5463 12.6503 17.75 10.534 17.75 7.99974Z\"/><path d=\"M8.65778 21.4278C5.40825 20.2758 2.93116 17.4914 2.21252 14.0605L2.32447 14.0228C2.84969 13.8461 3.41284 13.75 3.99998 13.75C6.89948 13.75 9.24998 16.1005 9.24998 19C9.24998 19.8351 9.05555 20.6226 8.71017 21.3218L8.65778 21.4278Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:atom-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M17.0016 6.99793C15.8625 5.85879 14.6653 4.86861 13.4619 4.04619C14.8393 3.34512 16.1436 2.92369 17.2752 2.79313C18.7023 2.62848 19.7567 2.93171 20.4123 3.58732C21.0679 4.24294 21.3711 5.29736 21.2065 6.72444C21.0759 7.85601 20.6545 9.16032 19.9534 10.5378C19.131 9.3343 18.1408 8.13709 17.0016 6.99793Z\"/><path fill-rule=\"evenodd\" d=\"M15.941 8.05859C17.2144 9.33197 18.2826 10.6744 19.1196 11.9995C18.2827 13.3245 17.2145 14.6668 15.9412 15.94C14.6677 17.2135 13.3253 18.2818 12.0002 19.1187C10.6751 18.2818 9.33276 17.2135 8.05941 15.9402C6.78608 14.6668 5.71785 13.3245 4.88094 11.9995C5.71788 10.6743 6.78618 9.33188 8.05961 8.05845C9.3329 6.78516 10.6752 5.71695 12.0002 4.88005C13.3253 5.71697 14.6676 6.78523 15.941 8.05859ZM12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z\" clip-rule=\"evenodd\"/><path d=\"M13.4619 19.9526C14.6654 19.1301 15.8626 18.1399 17.0018 17.0007C18.1409 15.8616 19.131 14.6646 19.9534 13.4612C20.6544 14.8386 21.0758 16.1428 21.2063 17.2743C21.3709 18.7013 21.0677 19.7557 20.4121 20.4113C19.7565 21.0669 18.7021 21.3701 17.2751 21.2055C16.1435 21.075 14.8393 20.6536 13.4619 19.9526Z\"/><path d=\"M6.99875 17.0008C8.13786 18.14 9.33502 19.1301 10.5384 19.9525C9.16109 20.6535 7.8569 21.0749 6.72543 21.2054C5.29844 21.37 4.24408 21.0668 3.5885 20.4112C2.93291 19.7556 2.62968 18.7012 2.79429 17.2742C2.92481 16.1428 3.34616 14.8386 4.04711 13.4612C4.86952 14.6646 5.85966 15.8617 6.99875 17.0008Z\"/><path d=\"M4.04708 10.5377C4.86953 9.33424 5.85975 8.13699 6.99895 6.99779C8.13801 5.85872 9.33511 4.8686 10.5385 4.04621C9.16108 3.3452 7.85682 2.9238 6.72531 2.79326C5.29828 2.62863 4.2439 2.93186 3.5883 3.58746C2.93269 4.24307 2.62946 5.29747 2.7941 6.72453C2.92465 7.85606 3.34606 9.16034 4.04708 10.5377Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:bag-2-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.25014 6.01489C8.25005 6.00994 8.25 6.00498 8.25 6V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.75 6.00994 15.7499 6.0149C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.19239 6.96288 6.05353 8.25014 6.01489ZM9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 5.99999 14.25 6.00001 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90177 6 9.82526 6 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5ZM15.7399 10.8768C15.6718 10.4682 15.2854 10.1922 14.8768 10.2603C14.4682 10.3284 14.1922 10.7148 14.2603 11.1234L15.2603 17.1234C15.3284 17.532 15.7148 17.808 16.1234 17.7399C16.532 17.6718 16.808 17.2854 16.7399 16.8768L15.7399 10.8768ZM9.12317 10.2603C8.71459 10.1922 8.32817 10.4682 8.26007 10.8768L7.26007 16.8768C7.19198 17.2854 7.46799 17.6718 7.87657 17.7399C8.28515 17.808 8.67157 17.532 8.73966 17.1234L9.73966 11.1234C9.80776 10.7148 9.53174 10.3284 9.12317 10.2603Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:bell-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z\"/><path d=\"M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:book-2-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M4.72718 2.71244C5.03258 2.41324 5.46135 2.21816 6.27103 2.11151C7.10452 2.00172 8.2092 2 9.7931 2H14.2069C15.7908 2 16.8955 2.00172 17.729 2.11151C18.5387 2.21816 18.9674 2.41324 19.2728 2.71244C19.5782 3.01165 19.7773 3.43172 19.8862 4.22499C19.9982 5.04159 20 6.12387 20 7.67568V15.5135L7.34563 15.5135C6.44305 15.5132 5.82716 15.513 5.29899 15.6517C4.82674 15.7756 4.38867 15.9781 4 16.2442V7.67568C4 6.12387 4.00176 5.04159 4.11382 4.225C4.22268 3.43172 4.42179 3.01165 4.72718 2.71244ZM7.58621 5.78378C7.12914 5.78378 6.75862 6.1468 6.75862 6.59459C6.75862 7.04239 7.12914 7.40541 7.58621 7.40541H16.4138C16.8709 7.40541 17.2414 7.04239 17.2414 6.59459C17.2414 6.1468 16.8709 5.78378 16.4138 5.78378H7.58621ZM6.75862 10.3784C6.75862 9.93058 7.12914 9.56757 7.58621 9.56757H13.1034C13.5605 9.56757 13.931 9.93058 13.931 10.3784C13.931 10.8262 13.5605 11.1892 13.1034 11.1892H7.58621C7.12914 11.1892 6.75862 10.8262 6.75862 10.3784Z\" clip-rule=\"evenodd\"/><path d=\"M7.47341 17.1351C6.39395 17.1351 6.01657 17.1421 5.72738 17.218C4.93365 17.4264 4.30088 18.0044 4.02952 18.7558C4.0463 19.1382 4.07259 19.4746 4.11382 19.775C4.22268 20.5683 4.42179 20.9884 4.72718 21.2876C5.03258 21.5868 5.46135 21.7818 6.27103 21.8885C7.10452 21.9983 8.2092 22 9.7931 22H14.2069C15.7908 22 16.8955 21.9983 17.729 21.8885C18.5387 21.7818 18.9674 21.5868 19.2728 21.2876C19.4894 21.0753 19.6526 20.8023 19.768 20.3784H7.58621C7.12914 20.3784 6.75862 20.0154 6.75862 19.5676C6.75862 19.1198 7.12914 18.7568 7.58621 18.7568H19.9704C19.9909 18.2908 19.9972 17.7564 19.9991 17.1351H7.47341Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:book-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M6.27103 2.11151C5.46135 2.21816 5.03258 2.41324 4.72718 2.71244C4.42179 3.01165 4.22268 3.43172 4.11382 4.225C4.00176 5.04159 4 6.12387 4 7.67568V16.2442C4.38867 15.9781 4.82674 15.7756 5.29899 15.6517C5.82716 15.513 6.44305 15.5132 7.34563 15.5135L20 15.5135V7.67568C20 6.12387 19.9982 5.04159 19.8862 4.22499C19.7773 3.43172 19.5782 3.01165 19.2728 2.71244C18.9674 2.41324 18.5387 2.21816 17.729 2.11151C16.8955 2.00172 15.7908 2 14.2069 2H9.7931C8.2092 2 7.10452 2.00172 6.27103 2.11151ZM6.75862 6.59459C6.75862 6.1468 7.12914 5.78378 7.58621 5.78378H16.4138C16.8709 5.78378 17.2414 6.1468 17.2414 6.59459C17.2414 7.04239 16.8709 7.40541 16.4138 7.40541H7.58621C7.12914 7.40541 6.75862 7.04239 6.75862 6.59459ZM7.58621 9.56757C7.12914 9.56757 6.75862 9.93058 6.75862 10.3784C6.75862 10.8262 7.12914 11.1892 7.58621 11.1892H13.1034C13.5605 11.1892 13.931 10.8262 13.931 10.3784C13.931 9.93058 13.5605 9.56757 13.1034 9.56757H7.58621Z\" clip-rule=\"evenodd\"/><path d=\"M7.47341 17.1351H8.68965H13.1034H19.9991C19.9956 18.2657 19.9776 19.1088 19.8862 19.775C19.7773 20.5683 19.5782 20.9884 19.2728 21.2876C18.9674 21.5868 18.5387 21.7818 17.729 21.8885C16.8955 21.9983 15.7908 22 14.2069 22H9.7931C8.2092 22 7.10452 21.9983 6.27103 21.8885C5.46135 21.7818 5.03258 21.5868 4.72718 21.2876C4.42179 20.9884 4.22268 20.5683 4.11382 19.775C4.07259 19.4746 4.0463 19.1382 4.02952 18.7558C4.30088 18.0044 4.93365 17.4264 5.72738 17.218C6.01657 17.1421 6.39395 17.1351 7.47341 17.1351Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:bookmark-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:card-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M14.0002 4H10.0002C6.22893 4 4.34331 4 3.17174 5.17157C2.32819 6.01511 2.09201 7.22882 2.02588 9.25H21.9744C21.9083 7.22882 21.6721 6.01511 20.8286 5.17157C19.657 4 17.7714 4 14.0002 4Z\"/><path fill-rule=\"evenodd\" d=\"M22 12C22 15.7712 21.9997 17.6566 20.8281 18.8281C19.6566 19.9997 17.7712 20 14 20H10C6.22876 20 4.34345 19.9997 3.17188 18.8281C2.0003 17.6566 2 15.7712 2 12C2 11.5581 2.00007 11.142 2.00195 10.75H21.998C21.9999 11.142 22 11.5581 22 12ZM6 15.25C5.58579 15.25 5.25 15.5858 5.25 16C5.25 16.4142 5.58579 16.75 6 16.75H10C10.4142 16.75 10.75 16.4142 10.75 16C10.75 15.5858 10.4142 15.25 10 15.25H6ZM12.5 15.25C12.0858 15.25 11.75 15.5858 11.75 16C11.75 16.4142 12.0858 16.75 12.5 16.75H14C14.4142 16.75 14.75 16.4142 14.75 16C14.75 15.5858 14.4142 15.25 14 15.25H12.5Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:chart-2-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M17.2929 2.29289C17 2.58579 17 3.05719 17 4V17C17 17.9428 17 18.4142 17.2929 18.7071C17.5858 19 18.0572 19 19 19C19.9428 19 20.4142 19 20.7071 18.7071C21 18.4142 21 17.9428 21 17V4C21 3.05719 21 2.58579 20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289Z\"/><path d=\"M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z\"/><path d=\"M3.29289 9.29289C3 9.58579 3 10.0572 3 11V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289Z\"/><path d=\"M3 21.25C2.58579 21.25 2.25 21.5858 2.25 22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22C21.75 21.5858 21.4142 21.25 21 21.25H3Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:chart-square-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM17 12.25C17.4142 12.25 17.75 12.5858 17.75 13V18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18V13C16.25 12.5858 16.5858 12.25 17 12.25ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V6ZM7 8.25C7.41421 8.25 7.75 8.58579 7.75 9V18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V9C6.25 8.58579 6.58579 8.25 7 8.25Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:chat-round-line-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:chat-square-bold": {
    "body": "<path fill=\"currentColor\" d=\"M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:check-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:checklist-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8.04832 2.48826C8.33094 2.79108 8.31458 3.26567 8.01176 3.54829L3.72605 7.54829C3.57393 7.69027 3.36967 7.76267 3.1621 7.74818C2.95453 7.7337 2.7623 7.63363 2.63138 7.4719L1.41709 5.9719C1.15647 5.64996 1.20618 5.17769 1.52813 4.91707C1.85007 4.65645 2.32234 4.70616 2.58296 5.0281L3.29089 5.90261L6.98829 2.45171C7.2911 2.16909 7.76569 2.18545 8.04832 2.48826ZM11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H22C22.4142 4.25 22.75 4.58579 22.75 5C22.75 5.41422 22.4142 5.75 22 5.75H12C11.5858 5.75 11.25 5.41422 11.25 5ZM8.04832 9.48826C8.33094 9.79108 8.31458 10.2657 8.01176 10.5483L3.72605 14.5483C3.57393 14.6903 3.36967 14.7627 3.1621 14.7482C2.95453 14.7337 2.7623 14.6336 2.63138 14.4719L1.41709 12.9719C1.15647 12.65 1.20618 12.1777 1.52813 11.9171C1.85007 11.6564 2.32234 11.7062 2.58296 12.0281L3.29089 12.9026L6.98829 9.45171C7.2911 9.16909 7.76569 9.18545 8.04832 9.48826ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12ZM8.04832 16.4883C8.33094 16.7911 8.31458 17.2657 8.01176 17.5483L3.72605 21.5483C3.57393 21.6903 3.36967 21.7627 3.1621 21.7482C2.95453 21.7337 2.7623 21.6336 2.63138 21.4719L1.41709 19.9719C1.15647 19.65 1.20618 19.1777 1.52813 18.9171C1.85007 18.6564 2.32234 18.7062 2.58296 19.0281L3.29089 19.9026L6.98829 16.4517C7.2911 16.1691 7.76569 16.1855 8.04832 16.4883ZM11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H22C22.4142 18.25 22.75 18.5858 22.75 19C22.75 19.4142 22.4142 19.75 22 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:clock-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V12C11.25 12.1989 11.3291 12.3896 11.4697 12.5303L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L12.75 11.6895V8C12.75 7.58579 12.4142 7.25 12 7.25Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:close-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:cursor-bold": {
    "body": "<path fill=\"currentColor\" d=\"M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:danger-triangle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:document-add-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z\"/><path d=\"M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z\"/><path fill-rule=\"evenodd\" d=\"M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.9812 19.6756 20.9997 17.8316 21 14.1801L18.1817 16.9984C17.9119 17.2683 17.691 17.4894 17.4415 17.6841C17.1491 17.9121 16.8328 18.1076 16.4981 18.2671C16.2124 18.4032 15.9159 18.502 15.5538 18.6225L13.2421 19.3931C12.4935 19.6426 11.6682 19.4478 11.1102 18.8898C10.5523 18.3318 10.3574 17.5065 10.607 16.7579L10.8805 15.9375L11.3556 14.5121L11.3775 14.4463C11.4981 14.0842 11.5968 13.7876 11.7329 13.5019C11.8924 13.1672 12.0879 12.8509 12.316 12.5586C12.5106 12.309 12.7317 12.0881 13.0017 11.8183L17.0081 7.81188L18.12 6.70004L18.2472 6.57282C18.9626 5.85741 19.9003 5.49981 20.838 5.5C20.6867 4.46945 20.3941 3.73727 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:document-text-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H8Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:dollar-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M11.25 7.84748C10.3141 8.10339 9.75 8.82154 9.75 9.5C9.75 10.1785 10.3141 10.8966 11.25 11.1525V7.84748Z\"/><path d=\"M12.75 12.8475V16.1525C13.6859 15.8966 14.25 15.1785 14.25 14.5C14.25 13.8215 13.6859 13.1034 12.75 12.8475Z\"/><path fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.82154 13.6859 8.10339 12.75 7.84748V11.3167C14.3804 11.6087 15.75 12.8336 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.1785 10.3141 15.8966 11.25 16.1525V12.6833C9.61957 12.3913 8.25 11.1664 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:download-minimalistic-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z\"/><path d=\"M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:flame-bold": {
    "body": "<path fill=\"currentColor\" d=\"M20 15.0002C20 19.2547 17.3819 21.1216 15.3588 21.7512C14.9274 21.8854 14.6438 21.3825 14.9019 21.0116C15.7823 19.7464 16.8 17.8161 16.8 16.0002C16.8 14.0496 15.1559 11.7467 13.8721 10.3263C13.5786 10.0016 13.0667 10.2164 13.0507 10.6539C12.9976 12.1031 12.7689 14.042 11.7828 15.5616C11.6241 15.8062 11.2872 15.8264 11.1063 15.5977C10.7982 15.208 10.4901 14.7267 10.182 14.3464C10.016 14.1416 9.71604 14.1388 9.52461 14.32C8.77825 15.0267 7.73333 16.1288 7.73333 17.5002C7.73333 18.4301 8.0936 19.405 8.50007 20.1893C8.72368 20.6208 8.32607 21.1402 7.89573 20.9144C6.11307 19.9789 4 18.0838 4 15.0002C4 11.8538 8.31029 7.49503 9.95605 3.37712C10.2157 2.72733 11.0161 2.42199 11.5727 2.84603C14.9439 5.41409 20 10.3783 20 15.0002Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:gallery-remove-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M21.9998 12.6978C21.9983 14.1674 21.9871 15.4165 21.9036 16.4414C21.8067 17.6308 21.6081 18.6246 21.1636 19.45C20.9676 19.814 20.7267 20.1401 20.4334 20.4334C19.601 21.2657 18.5405 21.6428 17.1966 21.8235C15.8835 22 14.2007 22 12.0534 22H11.9466C9.79929 22 8.11646 22 6.80345 21.8235C5.45951 21.6428 4.39902 21.2657 3.56664 20.4334C2.82871 19.6954 2.44763 18.777 2.24498 17.6376C2.04591 16.5184 2.00949 15.1259 2.00192 13.3967C2 12.9569 2 12.4917 2 12.0009V11.9466C1.99999 9.79929 1.99998 8.11646 2.17651 6.80345C2.3572 5.45951 2.73426 4.39902 3.56664 3.56664C4.39902 2.73426 5.45951 2.3572 6.80345 2.17651C7.97111 2.01952 9.47346 2.00215 11.302 2.00024C11.6873 1.99983 12 2.31236 12 2.69767C12 3.08299 11.6872 3.3952 11.3019 3.39561C9.44749 3.39757 8.06751 3.41446 6.98937 3.55941C5.80016 3.7193 5.08321 4.02339 4.5533 4.5533C4.02339 5.08321 3.7193 5.80016 3.55941 6.98937C3.39683 8.19866 3.39535 9.7877 3.39535 12C3.39535 12.2702 3.39535 12.5314 3.39567 12.7844L4.32696 11.9696C5.17465 11.2278 6.45225 11.2704 7.24872 12.0668L11.2392 16.0573C11.8785 16.6966 12.8848 16.7837 13.6245 16.2639L13.9019 16.0689C14.9663 15.3209 16.4064 15.4076 17.3734 16.2779L20.0064 18.6476C20.2714 18.091 20.4288 17.3597 20.5128 16.3281C20.592 15.3561 20.6029 14.1755 20.6044 12.6979C20.6048 12.3126 20.917 12 21.3023 12C21.6876 12 22.0002 12.3125 21.9998 12.6978Z\"/><path fill-rule=\"evenodd\" d=\"M17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11ZM16.0303 3.96967C15.7374 3.67678 15.2626 3.67678 14.9697 3.96967C14.6768 4.26256 14.6768 4.73744 14.9697 5.03033L16.4393 6.5L14.9697 7.96967C14.6768 8.26256 14.6768 8.73744 14.9697 9.03033C15.2626 9.32322 15.7374 9.32322 16.0303 9.03033L17.5 7.56066L18.9697 9.03033C19.2626 9.32322 19.7374 9.32322 20.0303 9.03033C20.3232 8.73744 20.3232 8.26256 20.0303 7.96967L18.5607 6.5L20.0303 5.03033C20.3232 4.73744 20.3232 4.26256 20.0303 3.96967C19.7374 3.67678 19.2626 3.67678 18.9697 3.96967L17.5 5.43934L16.0303 3.96967Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:gallery-wide-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M18.5116 10.0771C18.5116 10.8157 17.8869 11.4146 17.1163 11.4146C16.3457 11.4146 15.7209 10.8157 15.7209 10.0771C15.7209 9.33841 16.3457 8.7396 17.1163 8.7396C17.8869 8.7396 18.5116 9.33841 18.5116 10.0771Z\"/><path fill-rule=\"evenodd\" d=\"M18.0363 5.53245C16.9766 5.39588 15.6225 5.39589 13.9129 5.39591H10.0871C8.37751 5.39589 7.02343 5.39588 5.9637 5.53245C4.87308 5.673 3.99033 5.96913 3.29418 6.63641C2.59803 7.30369 2.28908 8.14982 2.14245 9.19521C1.99997 10.211 1.99999 11.5089 2 13.1475V13.2482C1.99999 14.8868 1.99997 16.1847 2.14245 17.2005C2.28908 18.2459 2.59803 19.092 3.29418 19.7593C3.99033 20.4266 4.87307 20.7227 5.9637 20.8633C7.02344 20.9998 8.37751 20.9998 10.0871 20.9998H13.9129C15.6225 20.9998 16.9766 20.9998 18.0363 20.8633C19.1269 20.7227 20.0097 20.4266 20.7058 19.7593C21.402 19.092 21.7109 18.2459 21.8575 17.2005C22 16.1847 22 14.8868 22 13.2482V13.1476C22 11.5089 22 10.211 21.8575 9.19521C21.7109 8.14982 21.402 7.30369 20.7058 6.63641C20.0097 5.96913 19.1269 5.673 18.0363 5.53245ZM6.14963 6.858C5.21373 6.97861 4.67452 7.20479 4.28084 7.58215C3.88716 7.9595 3.65119 8.47635 3.52536 9.37343C3.42443 10.093 3.40184 10.9923 3.3968 12.1686L3.86764 11.7737C4.99175 10.8309 6.68596 10.885 7.74215 11.8974L11.7326 15.7223C12.1321 16.1053 12.7611 16.1575 13.2234 15.8461L13.5008 15.6593C14.8313 14.763 16.6314 14.8668 17.8402 15.9096L20.2479 17.9866C20.3463 17.7226 20.4206 17.4075 20.4746 17.0223C20.6032 16.106 20.6047 14.8981 20.6047 13.1979C20.6047 11.4976 20.6032 10.2897 20.4746 9.37343C20.3488 8.47635 20.1128 7.9595 19.7192 7.58215C19.3255 7.20479 18.7863 6.97861 17.8504 6.858C16.8944 6.7348 15.6343 6.73338 13.8605 6.73338H10.1395C8.36575 6.73338 7.10559 6.7348 6.14963 6.858Z\" clip-rule=\"evenodd\"/><path d=\"M17.0863 2.61039C16.2265 2.49997 15.1318 2.49998 13.7672 2.5H10.6775C9.31284 2.49998 8.21815 2.49997 7.35834 2.61039C6.46796 2.72473 5.72561 2.96835 5.13682 3.53075C4.79725 3.8551 4.56856 4.22833 4.41279 4.64928C4.91699 4.41928 5.48704 4.28374 6.12705 4.20084C7.21143 4.06037 8.597 4.06038 10.3463 4.06039H14.2612C16.0105 4.06038 17.396 4.06037 18.4804 4.20084C19.0394 4.27325 19.545 4.38581 20 4.56638C19.8454 4.17917 19.625 3.83365 19.3078 3.53075C18.719 2.96835 17.9767 2.72473 17.0863 2.61039Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:graph-up-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75H15.1893L13.1768 12.7626C13.0791 12.8602 12.9209 12.8602 12.8232 12.7626L11.2374 11.1768C10.554 10.4934 9.44598 10.4934 8.76256 11.1768L6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L9.82322 12.2374C9.92085 12.1398 10.0791 12.1398 10.1768 12.2374L11.7626 13.8232C12.446 14.5066 13.554 14.5066 14.2374 13.8232L16.25 11.8107V12.5C16.25 12.9142 16.5858 13.25 17 13.25C17.4142 13.25 17.75 12.9142 17.75 12.5V10C17.75 9.58579 17.4142 9.25 17 9.25H14.5C14.0858 9.25 13.75 9.58579 13.75 10Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:history-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891ZM11.9999 7.24992C12.4141 7.24992 12.7499 7.58571 12.7499 7.99992V11.6893L15.0302 13.9696C15.3231 14.2625 15.3231 14.7374 15.0302 15.0302C14.7373 15.3231 14.2624 15.3231 13.9696 15.0302L11.2499 12.3106V7.99992C11.2499 7.58571 11.5857 7.24992 11.9999 7.24992Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:home-2-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:inbox-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.8063 19.2647 21.9744 17.3219 21.9966 13.75H18.8397C17.8659 13.75 17.6113 13.766 17.3975 13.8644C17.1838 13.9627 17.0059 14.1456 16.3722 14.8849L15.7667 15.5913L15.6794 15.6933C15.1773 16.2803 14.7796 16.7453 14.2292 16.9984C13.6789 17.2515 13.067 17.2509 12.2945 17.2501L12.1603 17.25H11.8397L11.7055 17.2501C10.933 17.2509 10.3211 17.2515 9.77076 16.9984C9.22038 16.7453 8.82271 16.2803 8.32058 15.6933L8.23327 15.5913L7.62784 14.8849C6.9941 14.1456 6.81622 13.9627 6.60245 13.8644C6.38869 13.766 6.13407 13.75 5.16026 13.75H2.00339C2.02561 17.3219 2.19367 19.2647 3.46447 20.5355Z\"/><path d=\"M20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12L2.00001 12.25H5.16026L5.29454 12.2499H5.29455C6.06705 12.2491 6.67886 12.2485 7.22924 12.5016C7.77961 12.7547 8.17729 13.2197 8.67941 13.8067L8.76673 13.9087L9.37216 14.6151C10.0059 15.3544 10.1838 15.5373 10.3975 15.6356C10.6113 15.734 10.8659 15.75 11.8397 15.75H12.1603C13.1341 15.75 13.3887 15.734 13.6025 15.6356C13.8162 15.5373 13.9941 15.3544 14.6278 14.6151L15.2333 13.9087L15.3206 13.8067C15.8227 13.2197 16.2204 12.7547 16.7708 12.5016C17.3211 12.2485 17.933 12.2491 18.7055 12.2499L18.8397 12.25H22L22 12C22 7.28595 22 4.92893 20.5355 3.46447Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:info-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:layers-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z\"/><path fill-rule=\"evenodd\" d=\"M2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C10.7661 4 9.77318 4.39718 7.7873 5.19153L4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8Z\" clip-rule=\"evenodd\"/><path d=\"M19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12.4935 2 12C2 11.5551 2.80681 11.1885 4.42043 10.5388L7.56143 11.7952C9.41007 12.535 10.572 13 12 13C13.428 13 14.5899 12.535 16.4386 11.7952L19.5796 10.5388C21.1932 11.1885 22 11.5551 22 12C22 12.4935 21.0071 12.8907 19.0212 13.6851Z\"/><path d=\"M19.0212 17.6849L16.2127 18.8083C14.2268 19.6026 13.2339 19.9998 12 19.9998C10.7661 19.9998 9.77318 19.6026 7.7873 18.8083L4.97883 17.6849C2.99294 16.8905 2 16.4934 2 15.9998C2 15.5549 2.80681 15.1883 4.42043 14.5386L7.56143 15.795C9.41007 16.5348 10.572 16.9998 12 16.9998C13.428 16.9998 14.5899 16.5348 16.4386 15.795L19.5796 14.5386C21.1932 15.1883 22 15.5549 22 15.9998C22 16.4934 21.0071 16.8905 19.0212 17.6849Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:layers-minimalistic-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M7.62442 4.4489C9.50121 3.69796 10.6208 3.25 12 3.25C13.3792 3.25 14.4988 3.69796 16.3756 4.4489L19.3451 5.6367C20.2996 6.01851 21.0728 6.32776 21.6035 6.60601C21.8721 6.74683 22.1323 6.90648 22.333 7.09894C22.5392 7.29668 22.75 7.59658 22.75 8C22.75 8.40342 22.5392 8.70332 22.333 8.90106C22.1323 9.09352 21.8721 9.25317 21.6035 9.39399C21.0728 9.67223 20.2996 9.98148 19.3451 10.3633L16.3756 11.5511C14.4988 12.302 13.3792 12.75 12 12.75C10.6208 12.75 9.50121 12.302 7.62443 11.5511L4.65495 10.3633C3.70037 9.98149 2.9272 9.67223 2.39647 9.39399C2.12786 9.25317 1.86765 9.09352 1.66701 8.90106C1.46085 8.70332 1.25 8.40342 1.25 8C1.25 7.59658 1.46085 7.29668 1.66701 7.09894C1.86765 6.90648 2.12786 6.74683 2.39647 6.60601C2.92721 6.32776 3.70037 6.01851 4.65496 5.63669L7.62442 4.4489Z\"/><path fill-rule=\"evenodd\" d=\"M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415L2.49913 11.4402L2.50261 11.4432C2.50702 11.4471 2.51522 11.4541 2.52722 11.4641C2.55123 11.4842 2.59042 11.5161 2.64479 11.5581C2.75354 11.6422 2.92289 11.7663 3.1528 11.9154C3.61265 12.2136 4.31419 12.6115 5.25737 12.9887L8.06584 14.1121C10.0907 14.922 10.9396 15.25 12 15.25C13.0604 15.25 13.9093 14.922 15.9342 14.1121L18.7426 12.9887C19.6858 12.6115 20.3874 12.2136 20.8472 11.9154C21.0771 11.7663 21.2465 11.6422 21.3552 11.5581C21.4096 11.5161 21.4488 11.4842 21.4728 11.4641C21.4848 11.4541 21.493 11.4471 21.4974 11.4432L21.4995 11.4415C21.5 11.441 21.5006 11.4405 21.5011 11.44C21.8095 11.1652 22.2823 11.1915 22.5583 11.4992C22.8349 11.8075 22.8092 12.2817 22.5008 12.5583L22 12C22.5008 12.5583 22.501 12.5581 22.5008 12.5583L22.4994 12.5595L22.4977 12.5611L22.493 12.5652L22.4793 12.5772C22.4682 12.5868 22.4532 12.5997 22.4341 12.6155C22.3961 12.6473 22.3422 12.6911 22.2724 12.745C22.1329 12.8528 21.9299 13.001 21.6634 13.1739C21.1303 13.5196 20.3424 13.9644 19.2997 14.3814L16.4912 15.5048C16.4524 15.5204 16.4138 15.5358 16.3756 15.5511C14.4988 16.302 13.3792 16.75 12 16.75C10.6208 16.75 9.50121 16.302 7.62442 15.5511C7.58619 15.5358 7.54763 15.5204 7.50875 15.5048L4.70029 14.3814C3.65759 13.9644 2.86971 13.5196 2.33662 13.1739C2.07005 13.001 1.86705 12.8528 1.72757 12.745C1.65782 12.6911 1.60392 12.6473 1.56587 12.6155C1.54684 12.5997 1.53177 12.5868 1.52066 12.5772L1.50696 12.5652L1.50233 12.5611L1.50057 12.5595L1.4995 12.5586C1.49934 12.5584 1.49919 12.5583 2 12L1.4995 12.5586C1.19116 12.282 1.16512 11.8075 1.44171 11.4992C1.71775 11.1915 2.19075 11.1654 2.49913 11.4402M2.50053 11.4415C2.50053 11.4415 2.50053 11.4415 2.50053 11.4415V11.4415ZM2.49896 15.4401C2.19058 15.1652 1.71775 15.1915 1.44171 15.4992L2.49896 15.4401ZM2.49896 15.4401L2.50261 15.4432C2.50702 15.4471 2.51522 15.4541 2.52722 15.4641C2.55123 15.4842 2.59042 15.5161 2.64479 15.5581C2.75354 15.6422 2.92289 15.7663 3.1528 15.9154C3.61265 16.2136 4.31419 16.6114 5.25737 16.9887L8.06584 18.1121C10.0907 18.922 10.9396 19.25 12 19.25C13.0604 19.25 13.9093 18.922 15.9342 18.1121L18.7426 16.9887C19.6858 16.6114 20.3874 16.2136 20.8472 15.9154C21.0771 15.7663 21.2465 15.6422 21.3552 15.5581C21.4096 15.5161 21.4488 15.4842 21.4728 15.4641C21.4848 15.4541 21.493 15.4471 21.4974 15.4432L21.4995 15.4415C21.5 15.441 21.5006 15.4405 21.5011 15.44C21.8095 15.1652 22.2823 15.1915 22.5583 15.4992C22.8349 15.8075 22.8092 16.2817 22.5008 16.5583L22.0166 16.0185C22.5008 16.5583 22.501 16.5581 22.5008 16.5583L22.4994 16.5595L22.4977 16.5611L22.493 16.5652L22.4793 16.5772C22.4682 16.5868 22.4532 16.5997 22.4341 16.6155C22.3961 16.6473 22.3422 16.6911 22.2724 16.745C22.1329 16.8528 21.9299 17.001 21.6634 17.1739C21.1303 17.5196 20.3424 17.9644 19.2997 18.3814L16.4912 19.5048C16.4524 19.5204 16.4138 19.5358 16.3756 19.5511C14.4988 20.302 13.3792 20.75 12 20.75C10.6208 20.75 9.50121 20.302 7.62443 19.5511C7.58619 19.5358 7.54763 19.5204 7.50875 19.5048L4.70029 18.3814C3.65759 17.9644 2.86971 17.5196 2.33662 17.1739C2.07005 17.001 1.86705 16.8528 1.72757 16.745C1.65782 16.6911 1.60392 16.6473 1.56587 16.6155C1.54684 16.5997 1.53177 16.5868 1.52066 16.5772L1.50696 16.5652L1.50233 16.5611L1.50057 16.5595L1.4995 16.5586C1.49934 16.5584 1.49919 16.5583 2 16L1.4995 16.5586C1.19116 16.282 1.16512 15.8075 1.44171 15.4992\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:letter-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:link-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M15.7285 3.88396C17.1629 2.44407 19.2609 2.41383 20.4224 3.57981C21.586 4.74798 21.5547 6.85922 20.1194 8.30009L17.6956 10.7333C17.4033 11.0268 17.4042 11.5017 17.6976 11.794C17.9911 12.0863 18.466 12.0854 18.7583 11.7919L21.1821 9.35869C23.0934 7.43998 23.3334 4.37665 21.4851 2.5212C19.6346 0.663551 16.5781 0.905664 14.6658 2.82536L9.81817 7.69182C7.90688 9.61053 7.66692 12.6739 9.51519 14.5293C9.80751 14.8228 10.2824 14.8237 10.5758 14.5314C10.8693 14.2391 10.8702 13.7642 10.5779 13.4707C9.41425 12.3026 9.44559 10.1913 10.8809 8.75042L15.7285 3.88396Z\"/><path d=\"M14.4851 9.47074C14.1928 9.17728 13.7179 9.17636 13.4244 9.46868C13.131 9.76101 13.1301 10.2359 13.4224 10.5293C14.586 11.6975 14.5547 13.8087 13.1194 15.2496L8.27178 20.1161C6.83745 21.556 4.73937 21.5863 3.57791 20.4203C2.41424 19.2521 2.44559 17.1408 3.88089 15.6999L6.30473 13.2667C6.59706 12.9732 6.59614 12.4984 6.30268 12.206C6.00922 11.9137 5.53434 11.9146 5.24202 12.2081L2.81818 14.6413C0.906876 16.5601 0.666916 19.6234 2.51519 21.4789C4.36567 23.3365 7.42221 23.0944 9.33449 21.1747L14.1821 16.3082C16.0934 14.3895 16.3334 11.3262 14.4851 9.47074Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:list-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H9C9.41421 16.25 9.75 16.5858 9.75 17C9.75 17.4142 9.41421 17.75 9 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:monitor-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8 17C5.17157 17 3.75736 17 2.87868 16.1213C2.30938 15.552 2.10893 14.7579 2.03835 13.5H21.9616C21.8911 14.7579 21.6906 15.552 21.1213 16.1213C20.2426 17 18.8284 17 16 17H12.75V21H16C16.4142 21 16.75 21.3358 16.75 21.75C16.75 22.1642 16.4142 22.5 16 22.5H8C7.58579 22.5 7.25 22.1642 7.25 21.75C7.25 21.3358 7.58579 21 8 21H11.25V17H8Z\"/><path d=\"M10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V11C22 11.5516 22 12.0494 21.9935 12.5H2.00652C2 12.0494 2 11.5516 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:moon-bold": {
    "body": "<path fill=\"currentColor\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:palette-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6ZM7 19.75C7.41421 19.75 7.75 19.4142 7.75 19C7.75 18.5858 7.41421 18.25 7 18.25H5C4.58579 18.25 4.25 18.5858 4.25 19C4.25 19.4142 4.58579 19.75 5 19.75H7Z\" clip-rule=\"evenodd\"/><path d=\"M19.0599 10.6144L13.2219 16.704C12.492 17.4653 12.1271 17.8459 11.8135 17.7199C11.5 17.5939 11.5 17.0666 11.5 16.0119L11.5 7.7738C11.5012 7.11381 11.7633 6.48107 12.2291 6.01357L13.2839 4.95882L13.7141 4.62987C14.7183 3.86212 15.2204 3.47825 15.7673 3.3603C16.2175 3.26322 16.6857 3.29236 17.1204 3.4445C17.6484 3.62934 18.099 4.0725 19.0003 4.95883C19.9999 5.95839 20.4997 6.45818 20.685 7.03056C20.843 7.51871 20.847 8.04366 20.6964 8.53417C20.5199 9.10931 20.0332 9.61101 19.0599 10.6144Z\"/><path d=\"M12.7897 22H17.8994C19.2995 22 19.9996 22 20.5344 21.7275C21.0048 21.4878 21.3872 21.1054 21.6269 20.635C21.8994 20.1002 21.8994 19.4001 21.8994 18C21.8994 16.5999 21.8994 15.8998 21.6269 15.365C21.3872 14.8946 21.0048 14.5122 20.5344 14.2725C19.9996 14 19.2995 14 17.8994 14H17.6797L11.878 19.798C11.636 20.0399 11.5 20.3391 11.5 20.6813C11.5 21.3936 12.0774 22 12.7897 22Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:pen-2-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M3.25 22C3.25 21.5858 3.58579 21.25 4 21.25H20C20.4142 21.25 20.75 21.5858 20.75 22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22Z\" clip-rule=\"evenodd\"/><path d=\"M11.5201 14.929L11.5201 14.9289L17.4368 9.01225C16.6315 8.6771 15.6777 8.12656 14.7757 7.22455C13.8736 6.32238 13.323 5.36846 12.9879 4.56312L7.07106 10.4799L7.07101 10.48C6.60932 10.9417 6.37846 11.1725 6.17992 11.4271C5.94571 11.7273 5.74491 12.0522 5.58107 12.396C5.44219 12.6874 5.33894 12.9972 5.13245 13.6167L4.04356 16.8833C3.94194 17.1882 4.02128 17.5243 4.2485 17.7515C4.47573 17.9787 4.81182 18.0581 5.11667 17.9564L8.38334 16.8676C9.00281 16.6611 9.31256 16.5578 9.60398 16.4189C9.94775 16.2551 10.2727 16.0543 10.5729 15.8201C10.8275 15.6215 11.0584 15.3907 11.5201 14.929Z\"/><path d=\"M19.0786 7.37044C20.3071 6.14188 20.3071 4.14999 19.0786 2.92142C17.85 1.69286 15.8581 1.69286 14.6296 2.92142L13.9199 3.63105C13.9296 3.6604 13.9397 3.69015 13.9502 3.72028C14.2103 4.47 14.701 5.45281 15.6243 6.37602C16.5475 7.29923 17.5303 7.78999 18.28 8.05009C18.31 8.0605 18.3396 8.07054 18.3688 8.08021L19.0786 7.37044Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:play-bold": {
    "body": "<path fill=\"currentColor\" d=\"M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:play-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:question-circle-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:refresh-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z\"/><path d=\"M20.8411 10.4666C20.549 10.1778 20.0789 10.1778 19.7867 10.4666L18.1005 12.1333C17.8841 12.3471 17.8184 12.6703 17.9339 12.9517C18.0495 13.233 18.3235 13.4167 18.6277 13.4167H19.5268C19.1455 17.2462 15.8759 20.25 11.8828 20.25C9.10026 20.25 6.66586 18.7903 5.31796 16.6061C5.10042 16.2536 4.63833 16.1442 4.28583 16.3618C3.93334 16.5793 3.82393 17.0414 4.04146 17.3939C5.65407 20.007 8.56406 21.75 11.8828 21.75C16.6906 21.75 20.6475 18.0892 21.0331 13.4167H22.0002C22.3043 13.4167 22.5783 13.233 22.6939 12.9517C22.8095 12.6703 22.7437 12.3471 22.5274 12.1333L20.8411 10.4666Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:ruler-bold": {
    "body": "<path fill=\"currentColor\" d=\"M2 15.6157C2 16.463 2.68179 17.1448 4.04537 18.5083L5.49167 19.9546C6.85525 21.3182 7.53704 22 8.38426 22C9.23148 22 9.91327 21.3182 11.2769 19.9546L19.9546 11.2769C21.3182 9.91327 22 9.23148 22 8.38426C22 7.53704 21.3182 6.85525 19.9546 5.49167L18.5083 4.04537C17.1448 2.68179 16.463 2 15.6157 2C14.8623 2 14.2396 2.53926 13.1519 3.61778C13.1817 3.63981 13.2103 3.66433 13.2373 3.69135L14.6515 5.10556C14.9444 5.39846 14.9444 5.87333 14.6515 6.16622C14.3586 6.45912 13.8837 6.45912 13.5908 6.16622L12.1766 4.75201C12.1494 4.7248 12.1247 4.69601 12.1026 4.66595L11.0299 5.73861C11.06 5.76077 11.0888 5.78545 11.116 5.81267L13.2373 7.93399C13.5302 8.22688 13.5302 8.70176 13.2373 8.99465C12.9444 9.28754 12.4695 9.28754 12.1766 8.99465L10.0553 6.87333C10.0281 6.84612 10.0034 6.81733 9.98125 6.78726L8.90859 7.85993C8.93865 7.88209 8.96744 7.90678 8.99465 7.93399L10.4089 9.3482C10.7018 9.6411 10.7018 10.116 10.4089 10.4089C10.116 10.7018 9.6411 10.7018 9.3482 10.4089L7.93399 8.99465C7.90678 8.96744 7.88209 8.93865 7.85993 8.90859L6.78727 9.98125C6.81733 10.0034 6.84612 10.0281 6.87333 10.0553L8.99465 12.1766C9.28754 12.4695 9.28754 12.9444 8.99465 13.2373C8.70176 13.5302 8.22688 13.5302 7.93399 13.2373L5.81267 11.116C5.78545 11.0888 5.76077 11.06 5.73861 11.0299L4.66595 12.1026C4.69601 12.1247 4.7248 12.1494 4.75201 12.1766L6.16622 13.5908C6.45912 13.8837 6.45912 14.3586 6.16622 14.6515C5.87333 14.9444 5.39846 14.9444 5.10556 14.6515L3.69135 13.2373C3.66433 13.2103 3.63981 13.1817 3.61778 13.1519C2.53926 14.2396 2 14.8623 2 15.6157Z\"/>",
    "width": 24,
    "height": 24
  },
  "solar:ruler-cross-pen-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M4.04537 5.49167L5.49167 4.04537C6.85525 2.68179 7.53704 2 8.38426 2C9.23148 2 9.91327 2.68179 11.2769 4.04537L8.86636 6.45586L4.04537 11.2769L4.04536 11.2768C2.68179 9.91327 2 9.23148 2 8.38426C2 7.53704 2.68179 6.85525 4.04537 5.49167L4.04537 5.49167Z\"/><path d=\"M19.9546 18.5083L18.5083 19.9546C17.1448 21.3182 16.463 22 15.6157 22C14.7685 22 14.0867 21.3182 12.7232 19.9546L12.7231 19.9546L17.5441 15.1336L19.9546 12.7231C21.3182 14.0867 22 14.7685 22 15.6157C22 16.463 21.3182 17.1448 19.9546 18.5083Z\"/><path d=\"M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z\"/><path d=\"M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:scale-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10ZM7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18C16.75 18.4142 16.4142 18.75 16 18.75H8C7.58579 18.75 7.25 18.4142 7.25 18ZM15.3553 6.30984C13.1338 5.89672 10.8663 5.89672 8.64474 6.30984L8.16897 6.39831C7.2887 6.562 6.76942 7.59158 7.10085 8.51607L7.84525 10.5925C7.95314 10.8934 8.2437 11.0592 8.52553 10.9806C8.70281 10.9311 8.88073 10.8855 9.05918 10.8437L8.41984 8.854C8.26351 8.36748 8.49027 7.83168 8.92632 7.65725C9.36237 7.48283 9.84259 7.73584 9.99892 8.22236L10.7514 10.5641C12.3304 10.41 13.9267 10.5488 15.4746 10.9806C15.7564 11.0592 16.047 10.8934 16.1548 10.5925L16.8992 8.51607C17.2307 7.59158 16.7114 6.562 15.8311 6.39831L15.3553 6.30984Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:settings-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:shield-check-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM15.0595 10.4995C15.3353 10.1905 15.3085 9.71642 14.9995 9.44055C14.6905 9.16467 14.2164 9.19151 13.9405 9.50049L10.9286 12.8739L10.0595 11.9005C9.78358 11.5915 9.30947 11.5647 9.00049 11.8405C8.69151 12.1164 8.66467 12.5905 8.94055 12.8995L10.3691 14.4995C10.5114 14.6589 10.7149 14.75 10.9286 14.75C11.1422 14.75 11.3457 14.6589 11.488 14.4995L15.0595 10.4995Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:shield-warning-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167V11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914V10.4167ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:smartphone-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12.0516 2H11.9484C10.2682 1.99999 8.93732 1.99997 7.89575 2.14245C6.82382 2.28908 5.95621 2.59803 5.27199 3.29418C4.58778 3.99033 4.28413 4.87308 4.14001 5.9637C3.99997 7.02343 3.99999 8.37751 4 10.087V13.9129C3.99999 15.6225 3.99997 16.9766 4.14001 18.0363C4.28413 19.1269 4.58778 20.0097 5.27199 20.7058C5.95621 21.402 6.82382 21.7109 7.89575 21.8575C8.93731 22 10.2682 22 11.9484 22H12.0516C13.7318 22 15.0627 22 16.1043 21.8575C17.1762 21.7109 18.0438 21.402 18.728 20.7058C19.4122 20.0097 19.7159 19.1269 19.86 18.0363C20 16.9766 20 15.6225 20 13.913V10.0871C20 8.37754 20 7.02343 19.86 5.9637C19.7159 4.87308 19.4122 3.99033 18.728 3.29418C18.0438 2.59803 17.1762 2.28908 16.1043 2.14245C15.0627 1.99997 13.7318 1.99999 12.0516 2ZM8.57143 18.5116C8.57143 18.1263 8.87843 17.814 9.25714 17.814H14.7429C15.1216 17.814 15.4286 18.1263 15.4286 18.5116C15.4286 18.8969 15.1216 19.2093 14.7429 19.2093H9.25714C8.87843 19.2093 8.57143 18.8969 8.57143 18.5116Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:square-double-alt-arrow-right-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12ZM7.96967 9.53033C7.67678 9.23744 7.67678 8.76256 7.96967 8.46967C8.26256 8.17678 8.73744 8.17678 9.03033 8.46967L12.0303 11.4697C12.3232 11.7626 12.3232 12.2374 12.0303 12.5303L9.03033 15.5303C8.73744 15.8232 8.26256 15.8232 7.96967 15.5303C7.67678 15.2374 7.67678 14.7626 7.96967 14.4697L10.4393 12L7.96967 9.53033ZM11.9697 8.46967C11.6768 8.76256 11.6768 9.23744 11.9697 9.53033L14.4393 12L11.9697 14.4697C11.6768 14.7626 11.6768 15.2374 11.9697 15.5303C12.2626 15.8232 12.7374 15.8232 13.0303 15.5303L16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697L13.0303 8.46967C12.7374 8.17678 12.2626 8.17678 11.9697 8.46967Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:sun-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z\"/><path fill-rule=\"evenodd\" d=\"M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:tag-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.5916 20.6555 9.24711 17.9665 6.55812L16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.5988 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816ZM10.1234 7.27098C10.911 8.05856 10.911 9.33549 10.1234 10.1231C9.33581 10.9107 8.05888 10.9107 7.27129 10.1231C6.48371 9.33549 6.48371 8.05856 7.27129 7.27098C8.05888 6.48339 9.33581 6.48339 10.1234 7.27098ZM19.0511 12.0511L12.0721 19.0303C11.7792 19.3232 11.3043 19.3232 11.0114 19.0303C10.7185 18.7375 10.7185 18.2626 11.0114 17.9697L17.9904 10.9904C18.2833 10.6975 18.7582 10.6975 19.0511 10.9904C19.344 11.2833 19.344 11.7582 19.0511 12.0511Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:target-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M11.2479 2C6.30929 2.36618 2.36618 6.30929 2 11.2479H4.98056C5.39592 11.2479 5.73264 11.5846 5.73264 12C5.73264 12.4154 5.39592 12.7521 4.98056 12.7521H2C2.36618 17.6907 6.30929 21.6338 11.2479 22V19.0194C11.2479 18.6041 11.5846 18.2674 12 18.2674C12.4154 18.2674 12.7521 18.6041 12.7521 19.0194V22C17.6907 21.6338 21.6338 17.6907 22 12.7521H19.0194C18.6041 12.7521 18.2674 12.4154 18.2674 12C18.2674 11.5846 18.6041 11.2479 19.0194 11.2479H22C21.6338 6.30929 17.6907 2.36618 12.7521 2V4.98056C12.7521 5.39592 12.4154 5.73264 12 5.73264C11.5846 5.73264 11.2479 5.39592 11.2479 4.98056V2ZM9.24236 12C9.24236 11.5846 9.57908 11.2479 9.99444 11.2479H11.2479V9.99444C11.2479 9.57908 11.5846 9.24236 12 9.24236C12.4154 9.24236 12.7521 9.57908 12.7521 9.99444V11.2479H14.0056C14.4209 11.2479 14.7576 11.5846 14.7576 12C14.7576 12.4154 14.4209 12.7521 14.0056 12.7521H12.7521V14.0056C12.7521 14.4209 12.4154 14.7576 12 14.7576C11.5846 14.7576 11.2479 14.4209 11.2479 14.0056V12.7521H9.99444C9.57908 12.7521 9.24236 12.4154 9.24236 12Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:test-tube-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M8.26697 1.61845C8.47776 1.26188 8.9377 1.14371 9.29427 1.35449L10.126 1.84619L19.3731 7.15338C19.7324 7.35957 19.8564 7.81794 19.6503 8.17719C19.4441 8.53644 18.9857 8.66053 18.6264 8.45434L17.7828 7.97013L16.278 10.5675L16.2762 10.5665L13.7181 9.09467C13.3591 8.8881 12.9006 9.01169 12.694 9.37072C12.4875 9.72975 12.611 10.1883 12.9701 10.3948L15.526 11.8654L14.5646 13.525L14.5628 13.5239L10.3598 11.1057C10.0008 10.8991 9.54227 11.0227 9.3357 11.3818C9.12913 11.7408 9.25272 12.1993 9.61175 12.4059L13.8126 14.8229L12.927 16.3515L12.9252 16.3505L10.3125 14.8472C9.95348 14.6407 9.49497 14.7643 9.2884 15.1233C9.08183 15.4823 9.20542 15.9408 9.56445 16.1474L12.1751 17.6494L11.0558 19.5814C9.7158 21.8943 6.74803 22.6868 4.42709 21.3514C2.10615 20.0161 1.31093 17.0585 2.65093 14.7456L9.37268 3.14332L9.36682 3.13989L8.53093 2.64574C8.17436 2.43495 8.05618 1.97502 8.26697 1.61845Z\"/><path d=\"M20 16.9999C21.1046 16.9999 22 16.0672 22 14.9166C22 14.1967 21.217 13.2358 20.6309 12.6174C20.2839 12.2512 19.7161 12.2512 19.3691 12.6174C18.783 13.2358 18 14.1967 18 14.9166C18 16.0672 18.8954 16.9999 20 16.9999Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:text-bold": {
    "body": "<g fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M7.934 2h8.132c.886 0 1.65 0 2.262.082c.655.088 1.284.287 1.793.797c.51.51.709 1.138.797 1.793C21 5.284 21 6.048 21 6.934V7.95a1 1 0 1 1-2 0V7c0-.971-.002-1.599-.064-2.061c-.059-.434-.153-.57-.229-.646s-.212-.17-.646-.229C17.6 4.002 16.971 4 16 4h-3v17a1 1 0 1 1-2 0V4H8c-.971 0-1.599.002-2.061.064c-.434.059-.57.153-.646.229s-.17.212-.229.646C5.002 5.4 5 6.029 5 7v.95a1 1 0 1 1-2 0V6.934c0-.886 0-1.65.082-2.262c.088-.655.287-1.284.797-1.793c.51-.51 1.138-.709 1.793-.797C6.284 2 7.048 2 7.934 2\" clip-rule=\"evenodd\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 21h10\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:text-field-bold": {
    "body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM6.81782 7.78733C7.11779 7.74992 7.48429 7.74996 7.88383 7.75H10.1162C10.5157 7.74996 10.8822 7.74992 11.1822 7.78733C11.5109 7.82833 11.8612 7.9242 12.1624 8.19187C12.2138 8.23753 12.2625 8.28618 12.3081 8.33756C12.5758 8.63878 12.6717 8.98915 12.7127 9.31782C12.7501 9.61779 12.7501 9.98428 12.75 10.3838L12.75 10.425C12.75 10.8392 12.4142 11.175 12 11.175C11.5858 11.175 11.25 10.8392 11.25 10.425C11.25 9.97047 11.2486 9.69931 11.2242 9.50348C11.1998 9.30765 10.9965 9.2758 10.9965 9.2758C10.8007 9.25137 10.5295 9.25001 10.075 9.25001H9.75001V14.75H11C11.4142 14.75 11.75 15.0858 11.75 15.5C11.75 15.9142 11.4142 16.25 11 16.25H7.00001C6.58579 16.25 6.25001 15.9142 6.25001 15.5C6.25001 15.0858 6.58579 14.75 7.00001 14.75H8.25001V9.25001H7.925C7.47047 9.25001 7.19931 9.25137 7.00348 9.2758C7.00348 9.2758 6.80023 9.30765 6.7758 9.50348C6.75137 9.69931 6.75001 9.97047 6.75001 10.425C6.75001 10.8392 6.41422 11.175 6.00001 11.175C5.58579 11.175 5.25001 10.8392 5.25001 10.425L5.25 10.3838C5.24996 9.98428 5.24992 9.61779 5.28733 9.31782C5.32833 8.98915 5.4242 8.63878 5.69187 8.33756C5.73753 8.28618 5.78618 8.23753 5.83756 8.19187C6.13878 7.9242 6.48915 7.82833 6.81782 7.78733Z\" clip-rule=\"evenodd\"/>",
    "width": 24,
    "height": 24
  },
  "solar:transmission-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4C6 4.83934 5.48296 5.55793 4.75 5.85462V11.25H11.25V5.85462C10.517 5.55793 10 4.83934 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 4.83934 13.483 5.55793 12.75 5.85462V11.25H16C16.964 11.25 17.6116 11.2484 18.0946 11.1835C18.5561 11.1214 18.7536 11.0142 18.8839 10.8839C19.0142 10.7536 19.1214 10.5561 19.1835 10.0946C19.2484 9.61157 19.25 8.96401 19.25 8V5.85462C18.517 5.55793 18 4.83934 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4C22 4.83934 21.483 5.55793 20.75 5.85462V8.05199C20.75 8.95048 20.7501 9.6997 20.6701 10.2945C20.5857 10.9223 20.4 11.4891 19.9445 11.9445C19.4891 12.4 18.9223 12.5857 18.2945 12.6701C17.6997 12.7501 16.9505 12.75 16.052 12.75L12.75 12.75L12.75 18.1454C13.483 18.4421 14 19.1607 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 19.1607 10.517 18.4421 11.25 18.1454V12.75H4.75V18.1454C5.48296 18.4421 6 19.1607 6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 19.1607 2.51704 18.4421 3.25 18.1454V5.85462C2.51704 5.55793 2 4.83934 2 4Z\"/><path fill-rule=\"evenodd\" d=\"M17.25 15C17.25 14.5858 17.5858 14.25 18 14.25H20.2857C21.6612 14.25 22.75 15.3839 22.75 16.75C22.75 17.8285 22.0713 18.7624 21.1086 19.1077L22.6396 21.6084C22.8559 21.9616 22.7449 22.4234 22.3916 22.6396C22.0384 22.8559 21.5766 22.7449 21.3604 22.3916L19.4369 19.25H18.75V22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V15ZM18.75 17.75H20.2857C20.8038 17.75 21.25 17.3169 21.25 16.75C21.25 16.1831 20.8038 15.75 20.2857 15.75H18.75V17.75Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:trash-bin-trash-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z\"/><path fill-rule=\"evenodd\" d=\"M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z\" clip-rule=\"evenodd\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:users-group-rounded-bold": {
    "body": "<g fill=\"currentColor\"><circle cx=\"9.001\" cy=\"6\" r=\"4\"/><ellipse cx=\"9.001\" cy=\"17.001\" rx=\"7\" ry=\"4\"/><path d=\"M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z\"/><path d=\"M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-5-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M13 15.4C13 13.3258 13 12.2887 13.659 11.6444C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 11.6444C22 12.2887 22 13.3258 22 15.4V17.6C22 19.6742 22 20.7113 21.341 21.3556C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.3556C13 20.7113 13 19.6742 13 17.6V15.4Z\"/><path d=\"M2 8.6C2 10.6742 2 11.7113 2.65901 12.3556C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 12.3556C11 11.7113 11 10.6742 11 8.6V6.4C11 4.32582 11 3.28873 10.341 2.64437C9.68198 2 8.62132 2 6.5 2C4.37868 2 3.31802 2 2.65901 2.64437C2 3.28873 2 4.32582 2 6.4V8.6Z\"/><path d=\"M13 5.5C13 4.4128 13 3.8692 13.1713 3.44041C13.3996 2.86867 13.8376 2.41443 14.389 2.17761C14.8024 2 15.3266 2 16.375 2H18.625C19.6734 2 20.1976 2 20.611 2.17761C21.1624 2.41443 21.6004 2.86867 21.8287 3.44041C22 3.8692 22 4.4128 22 5.5C22 6.5872 22 7.1308 21.8287 7.55959C21.6004 8.13133 21.1624 8.58557 20.611 8.82239C20.1976 9 19.6734 9 18.625 9H16.375C15.3266 9 14.8024 9 14.389 8.82239C13.8376 8.58557 13.3996 8.13133 13.1713 7.55959C13 7.1308 13 6.5872 13 5.5Z\"/><path d=\"M2 18.5C2 19.5872 2 20.1308 2.17127 20.5596C2.39963 21.1313 2.83765 21.5856 3.38896 21.8224C3.80245 22 4.32663 22 5.375 22H7.625C8.67337 22 9.19755 22 9.61104 21.8224C10.1624 21.5856 10.6004 21.1313 10.8287 20.5596C11 20.1308 11 19.5872 11 18.5C11 17.4128 11 16.8692 10.8287 16.4404C10.6004 15.8687 10.1624 15.4144 9.61104 15.1776C9.19755 15 8.67337 15 7.625 15H5.375C4.32663 15 3.80245 15 3.38896 15.1776C2.83765 15.4144 2.39963 15.8687 2.17127 16.4404C2 16.8692 2 17.4128 2 18.5Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-add-bold": {
    "body": "<g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M17.5 2.75C17.9142 2.75 18.25 3.08579 18.25 3.5V5.75H20.5C20.9142 5.75 21.25 6.08579 21.25 6.5C21.25 6.91421 20.9142 7.25 20.5 7.25H18.25V9.5C18.25 9.91421 17.9142 10.25 17.5 10.25C17.0858 10.25 16.75 9.91421 16.75 9.5V7.25H14.5C14.0858 7.25 13.75 6.91421 13.75 6.5C13.75 6.08579 14.0858 5.75 14.5 5.75H16.75V3.5C16.75 3.08579 17.0858 2.75 17.5 2.75Z\" clip-rule=\"evenodd\"/><path d=\"M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z\"/><path d=\"M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z\"/><path d=\"M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z\"/></g>",
    "width": 24,
    "height": 24
  },
  "solar:widget-bold": {
    "body": "<g fill=\"currentColor\"><path d=\"M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z\"/><path d=\"M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z\"/><path d=\"M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z\"/><path d=\"M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z\"/></g>",
    "width": 24,
    "height": 24
  }
};
window.ZEM_ICONS_UNRESOLVED = ["solar:bank-bold", "solar:focus-bold", "solar:gem-bold", "solar:magic-stick-3-bold", "solar:magic-stick-bold", "solar:percent-circle-bold", "solar:shapes-bold", "solar:square-bold", "solar:square-bold-duotone"];
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/icons.js", error: String((e && e.message) || e) }); }

// zem/lib/patterns.js
try { (() => {
/* IAK KIDS_V1 · 10 patterns — Kids/Friendly compositions of the 16 components (examples, not external service screens). */
(function () {
  const h = React.createElement,
    F = React.Fragment;
  const {
    Icon,
    Button,
    TextField,
    Textarea,
    Select,
    Checkbox,
    Switch,
    Badge,
    Card,
    Skeleton,
    Dialog,
    Menu,
    Table,
    Pagination,
    AlertDialog
  } = ZEM;
  const TV = ZEM.preview.ToastView;
  /* ---------- data ---------- */
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const usage = [92, 78, 105, 64, 88, 140, 120],
    goal = 90;
  const kids = ['민서', '도윤'];
  const MN = ['줄넘기 100번', '영어 단어 20개 외우기', '방 정리하기', '독서 20분', '수학 학습지 2장', '화분에 물 주기', '피아노 연습 30분', '가족에게 편지 쓰기', '일기 쓰기', '신발 정리하기', '자전거 타기 20분', '동생과 보드게임'];
  const ST = ['진행 중', '확인 대기', '완료', '놓침'],
    TONE = {
      '진행 중': 'info',
      '확인 대기': 'warning',
      '완료': 'success',
      '놓침': 'error'
    };
  const missions = MN.map((n, i) => ({
    id: 'M-' + (101 + i),
    name: n,
    kid: i % 5 === 4 ? null : kids[i % 2],
    status: ST[i % 4],
    due: '9월 ' + (22 + i % 7) + '일',
    point: i % 6 === 5 ? null : (i % 4 + 1) * 50
  }));
  const miss = (v, t) => v == null || v === '' ? h('span', {
    className: 'miss'
  }, t || '—') : v;
  const pt = v => v == null ? h('span', {
    className: 'miss'
  }, '미정') : v + 'P';
  /* ---------- charts (data: primary = within goal, accent = over goal, error line = limit) ---------- */
  function Bars({
    data,
    labels,
    height = 160,
    a11y,
    line
  }) {
    const W = 600,
      H = height,
      max = Math.max(...data, line || 0) * 1.15,
      bw = W / labels.length;
    return h('svg', {
      className: 'chart',
      viewBox: `0 0 ${W} ${H + 24}`,
      role: 'img',
      'aria-label': a11y
    }, line && h('line', {
      x1: 0,
      x2: W,
      y1: H - line / max * H,
      y2: H - line / max * H,
      stroke: 'var(--iak-kids-status-error-foreground)',
      strokeDasharray: '6 6',
      strokeWidth: 2
    }), labels.map((l, i) => {
      const v = data[i],
        bh = v / max * H,
        over = line && v > line;
      return h('g', {
        key: l
      }, h('rect', {
        x: i * bw + bw * .25,
        y: H - bh,
        width: bw * .5,
        height: bh,
        rx: 10,
        fill: over ? 'var(--iak-kids-accent-default)' : 'var(--iak-kids-primary-default)'
      }), h('text', {
        x: i * bw + bw / 2,
        y: H + 18,
        textAnchor: 'middle',
        fill: 'var(--zem-fg-2)',
        fontSize: 13,
        fontWeight: 700
      }, l));
    }));
  }
  const Legend = items => h('div', {
    className: 'legend'
  }, items.map(([c, l]) => h('span', {
    key: l
  }, h('i', {
    style: {
      background: c
    }
  }), l)));
  /* ---------- shell ---------- */
  const NAV = [['dashboard', '홈', 'eva:home-fill'], ['analytics', '리포트', 'solar:chart-2-bold'], ['table', '미션', 'solar:checklist-bold'], ['builder', '일정', 'eva:calendar-fill'], ['chat', '채팅', 'solar:chat-round-line-bold'], ['billing', '요금제', 'solar:card-bold'], ['settings', '설정', 'solar:settings-bold']];
  const TABS = [['dashboard', '홈', 'eva:home-fill'], ['builder', '일정', 'eva:calendar-fill'], ['table', '미션', 'solar:checklist-bold'], ['settings', '더보기', 'eva:more-horizontal-fill']];
  function Shell({
    active,
    title,
    hero,
    sub,
    children,
    state,
    back
  }) {
    return h('div', {
      className: 'zs'
    }, h('nav', {
      className: 'zs-rail',
      'aria-label': '주 메뉴'
    }, h('div', {
      className: 'wm'
    }, 'Little Everyday'), NAV.map(([k, l, ic]) => h('a', {
      key: k,
      href: `?p=${k}&s=default`,
      'aria-current': active === k ? 'page' : undefined
    }, h(Icon, {
      name: ic,
      size: 22
    }), h('span', null, l)))), h('div', {
      className: 'zs-main'
    }, h('header', {
      className: 'zs-header'
    }, h('div', {
      className: 'zs-top'
    }, back ? h('a', {
      className: 'zs-ib',
      href: '?p=table&s=default',
      'aria-label': '뒤로'
    }, h(Icon, {
      name: 'eva:arrow-ios-back-fill',
      size: 24
    })) : h('span', {
      className: 'zs-ib',
      'aria-hidden': 'true'
    }), h('div', {
      className: 'grow'
    }, title), h('button', {
      type: 'button',
      className: 'zs-ib',
      'aria-label': '알림 2개'
    }, h(Icon, {
      name: 'solar:bell-bold',
      size: 22
    }), h('span', {
      className: 'zs-dot'
    }))), h('div', {
      className: 'zs-hero'
    }, h('span', {
      className: 'zs-chip'
    }, h('i', null, '민'), '민서 · 초등 3학년'), hero && h('h1', null, hero), sub && h('p', null, sub))), h('main', {
      className: 'zs-body',
      'data-state': state
    }, children)), h('nav', {
      className: 'zs-tabbar',
      'aria-label': '하단 탭'
    }, TABS.map(([k, l, ic]) => h('a', {
      key: k,
      href: `?p=${k}&s=default`,
      'aria-current': active === k ? 'page' : undefined
    }, h(Icon, {
      name: ic,
      size: 24
    }), l))));
  }
  const Err = (t, msg, retry = true) => h('div', {
    className: 'banner',
    role: 'alert'
  }, h('span', {
    className: 'ic'
  }, h(Icon, {
    name: 'eva:alert-circle-outline'
  })), h('div', {
    className: 'stack',
    style: {
      gap: 6,
      flex: 1
    }
  }, h('b', null, t), h('span', {
    className: 'muted'
  }, msg), retry && h('div', null, h(Button, {
    variant: 'secondary',
    size: 'sm'
  }, h(Icon, {
    name: 'eva:refresh-fill',
    size: 16
  }), '다시 시도'))));
  const Empty = (icon, t, d, action) => h('div', {
    className: 'empty'
  }, h('div', {
    className: 'plate'
  }, h(Icon, {
    name: icon,
    size: 32
  })), h('h2', null, t), h('p', null, d), action && h('div', {
    className: 'row',
    style: {
      justifyContent: 'center'
    }
  }, action));
  const SkCard = (cls, big) => h('div', {
    className: cls
  }, h(Card, {
    'aria-busy': 'true'
  }, h(Skeleton, {
    height: 16,
    width: '45%'
  }), h(Skeleton, {
    height: 28,
    width: '70%'
  }), big && h(Skeleton, {
    height: 140
  })));
  const Row = (tile, ic, t, s, right) => h('li', {
    key: t
  }, h('span', {
    className: 'tile ' + tile
  }, h(Icon, {
    name: ic,
    size: 20
  })), h('div', {
    className: 't'
  }, h('b', null, t), h('span', null, s)), right);
  const Done = k => h('span', {
    className: 'done' + (k === 'todo' ? ' todo' : k === 'lime' ? ' lime' : ''),
    'aria-label': k === 'todo' ? '미완료' : '완료'
  }, h(Icon, {
    name: k === 'todo' ? 'eva:arrow-ios-forward-fill' : 'eva:checkmark-fill',
    size: 16
  }));
  const mCols = compact => [{
    id: 'name',
    header: '미션',
    cell: r => h('a', {
      href: '?p=detail&s=default'
    }, r.name),
    sortValue: r => r.name
  }, {
    id: 'kid',
    header: '자녀',
    cell: r => miss(r.kid, '미지정')
  }, {
    id: 'status',
    header: '상태',
    cell: r => h(Badge, {
      tone: TONE[r.status]
    }, r.status),
    sortValue: r => r.status
  }, ...(compact ? [] : [{
    id: 'due',
    header: '마감',
    cell: r => r.due,
    sortValue: r => r.due
  }, {
    id: 'point',
    header: '보상',
    cell: r => pt(r.point),
    sortValue: r => r.point,
    align: 'right'
  }]), {
    id: 'act',
    header: '',
    align: 'right',
    cell: r => h(Menu, {
      label: r.name + ' 작업',
      trigger: h(Button, {
        variant: 'text',
        size: 'sm',
        'aria-label': r.name + ' 작업'
      }, h(Icon, {
        name: 'eva:more-horizontal-fill',
        size: 20
      })),
      items: [{
        id: 'edit',
        label: '수정',
        onSelect() {}
      }, {
        id: 'done',
        label: '완료 확인',
        onSelect() {}
      }, {
        id: 'del',
        label: '삭제',
        danger: true,
        separatorBefore: true,
        onSelect() {}
      }]
    })
  }];
  /* ---------- screens ---------- */
  const S = {};
  S.dashboard = {
    label: 'Dashboard',
    states: ['default', 'loading', 'empty', 'error'],
    render(s) {
      return h(Shell, {
        active: 'dashboard',
        title: '홈',
        hero: s === 'empty' ? '아직 오늘 일정이 없어요' : '지금은 자유 시간이에요',
        sub: s === 'empty' ? '일정과 미션을 추가해 보세요' : '오후 3:00 – 4:30 · 34분 남음',
        state: s
      }, s === 'error' && Err('기기 상태를 불러오지 못했어요', '민서의 휴대폰이 오프라인이에요. 마지막 동기화 오후 2:48.'), s === 'loading' ? h('div', {
        className: 'zs-grid',
        'aria-busy': 'true',
        'aria-label': '홈을 불러오는 중'
      }, SkCard('t4 d4'), SkCard('t4 d4'), SkCard('t8 d4'), SkCard('t8 d8', true), SkCard('t8 d4', true)) : s === 'empty' ? h(F, null, h(Card, null, h('div', {
        className: 'row between'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 4
        }
      }, h('b', {
        style: {
          font: 'var(--zem-text-title)'
        }
      }, '자유 모드'), h('span', {
        className: 'muted cap'
      }, '제한 없이 사용 중')), h('span', {
        className: 'tile soft'
      }, h(Icon, {
        name: 'solar:clock-circle-bold',
        size: 20
      })))), Empty('eva:calendar-fill', '오늘 일정이 비어 있어요', '학원·숙제·놀이 시간을 추가하면 이곳에 순서대로 보여요.', h(F, null, h(Button, null, h(Icon, {
        name: 'eva:plus-fill',
        size: 18
      }), '일정 추가'), h(Button, {
        variant: 'secondary'
      }, '미션 만들기')))) : h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 't8 d4'
      }, h(Card, null, h('div', {
        className: 'row between'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 4
        }
      }, h('b', {
        style: {
          font: 'var(--zem-text-h2)'
        }
      }, '자유 시간'), h('span', {
        className: 'muted cap'
      }, '오후 3:00 – 4:30')), h('span', {
        className: 'tile peri'
      }, h(Icon, {
        name: 'solar:clock-circle-bold',
        size: 20
      }))), h('div', {
        className: 'prog',
        role: 'progressbar',
        'aria-valuenow': 62,
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-label': '자유 시간 경과'
      }, h('i', {
        style: {
          width: '62%'
        }
      })), h('div', {
        className: 'row between cap'
      }, h('span', {
        className: 'muted'
      }, '56분 사용'), h('b', null, '34분 남음')))), h('div', {
        className: 't4 d4'
      }, h(Card, {
        title: '이번 주 미션'
      }, h('div', {
        className: 'kpi'
      }, '3 / 5'), h('div', {
        className: 'prog'
      }, h('i', {
        style: {
          width: '60%'
        }
      })), h('span', {
        className: 'muted cap'
      }, '보상 150P 적립'))), h('div', {
        className: 't4 d4'
      }, h(Card, {
        title: '오늘 사용 시간'
      }, s === 'error' ? h(F, null, h('div', {
        className: 'kpi miss'
      }, '—'), h('span', {
        className: 'muted cap'
      }, '동기화 실패')) : h(F, null, h('div', {
        className: 'kpi'
      }, '1시간 28분'), h(Badge, {
        tone: 'success'
      }, '목표 이내')))), h('div', {
        className: 't8 d8'
      }, h(Card, {
        title: '오늘 일정'
      }, h('ul', {
        className: 'rows'
      }, Row('cyan', 'eva:calendar-fill', '수학 학원', '오후 1:00 – 2:30', Done('done')), Row('peri', 'solar:clock-circle-bold', '자유 시간', '오후 3:00 – 4:30', h(Badge, {
        tone: 'info'
      }, '지금')), Row('violet', 'solar:book-bold', '영어 학원', '오후 5:00 – 6:00', Done('todo')), Row('lime', 'solar:target-bold', '미션 · 줄넘기 100번', '오늘까지 · 50P', Done('lime'))))), h('div', {
        className: 't8 d4'
      }, h(Card, {
        title: '이번 주 사용 (분)',
        footer: Legend([['var(--iak-kids-primary-default)', '목표 이내'], ['var(--iak-kids-accent-default)', '목표 초과'], ['var(--iak-kids-status-error-foreground)', '목표 90분']])
      }, h(Bars, {
        data: usage,
        labels: days,
        line: goal,
        a11y: '요일별 사용 시간, 토요일 140분 최고, 목표 90분'
      })))));
    }
  };
  S.analytics = {
    label: 'Analytics',
    states: ['default', 'loading', 'empty', 'error'],
    render(s) {
      const cats = [['학습', 38, 'cyan'], ['동영상', 27, 'peri'], ['게임', 18, 'violet'], ['메시지', 12, 'mint'], ['기타', 5, 'soft']];
      return h(Shell, {
        active: 'analytics',
        title: '사용 리포트',
        hero: '이번 주 리포트',
        sub: '9월 22일 – 28일',
        state: s
      }, h(Card, null, h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 'm2 t3 d3'
      }, h(Select, {
        label: '기간',
        defaultValue: 'w'
      }, h('option', {
        value: 'w'
      }, '이번 주'), h('option', null, '지난 4주'))), h('div', {
        className: 'm2 t3 d3'
      }, h(Select, {
        label: '자녀',
        defaultValue: s === 'empty' ? 'd' : 'm'
      }, h('option', {
        value: 'm'
      }, '민서'), h('option', {
        value: 'd'
      }, '도윤 (새 기기)'))))), s === 'error' ? Err('리포트를 만들지 못했어요', '집계 서버 응답이 늦어요. 잠시 후 다시 시도해 주세요.') : s === 'empty' ? Empty('solar:chart-2-bold', '아직 리포트가 없어요', '도윤의 기기는 어제 연결되었어요. 하루 이상 사용 기록이 쌓이면 리포트가 만들어져요.', h(Button, {
        variant: 'secondary'
      }, '민서 리포트 보기')) : s === 'loading' ? h('div', {
        className: 'zs-grid',
        'aria-busy': 'true'
      }, SkCard('t8 d8', true), SkCard('t8 d4', true), SkCard('t8 d12', true)) : h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 't8 d8'
      }, h(Card, {
        title: '요일별 사용 시간 (분)'
      }, h(Bars, {
        data: usage,
        labels: days,
        line: goal,
        a11y: '주간 사용 시간'
      }), h('div', {
        className: 'row between cap'
      }, h('span', {
        className: 'muted'
      }, '하루 평균'), h('b', {
        className: 'num'
      }, '98분')))), h('div', {
        className: 't8 d4'
      }, h(Card, {
        title: '앱 종류별'
      }, h('div', {
        className: 'stack g16'
      }, cats.map(([l, v, c]) => h('div', {
        key: l,
        className: 'row',
        style: {
          flexWrap: 'nowrap'
        }
      }, h('span', {
        className: 'tile ' + c,
        style: {
          width: 32,
          height: 32,
          borderRadius: 8
        }
      }, h(Icon, {
        name: 'solar:smartphone-bold',
        size: 16
      })), h('div', {
        className: 'stack',
        style: {
          gap: 6,
          flex: 1
        }
      }, h('div', {
        className: 'row between'
      }, h('span', null, l), h('b', {
        className: 'num'
      }, v + '%')), h('div', {
        className: 'prog',
        role: 'img',
        'aria-label': l + ' ' + v + '%'
      }, h('i', {
        style: {
          width: v + '%'
        }
      })))))))), h('div', {
        className: 't8 d12'
      }, h(Table, {
        caption: '자주 쓴 앱',
        minWidth: 420,
        defaultSort: {
          columnId: 'min',
          direction: 'descending'
        },
        rowKey: r => r.a,
        rows: [{
          a: '단어 퀴즈',
          c: '학습',
          min: 142
        }, {
          a: '동영상 앱',
          c: '동영상',
          min: 118
        }, {
          a: '블록 퍼즐',
          c: '게임',
          min: 86
        }, {
          a: '가족 메신저',
          c: '메시지',
          min: 54
        }, {
          a: '그림판',
          c: null,
          min: 21
        }],
        columns: [{
          id: 'a',
          header: '앱',
          cell: r => r.a,
          sortValue: r => r.a
        }, {
          id: 'c',
          header: '종류',
          cell: r => miss(r.c, '분류 없음')
        }, {
          id: 'min',
          header: '사용(분)',
          cell: r => r.min,
          sortValue: r => r.min,
          align: 'right'
        }]
      }))));
    }
  };
  S.table = {
    label: 'Table',
    states: ['default', 'loading', 'empty', 'error', 'long-text'],
    render(s) {
      const rows = s === 'empty' ? [] : s === 'long-text' ? [{
        ...missions[0],
        name: '토요일 오전에 할머니 댁 가기 전까지 방 정리하고 장난감 상자 세 개를 종류별로 나누어 담기',
        kid: null,
        point: null
      }, ...missions.slice(1, 6)] : missions;
      return h(Shell, {
        active: 'table',
        title: '미션',
        hero: '미션 목록',
        sub: rows.length + '개 · 이번 주',
        state: s
      }, h(Card, null, h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 't4 d6'
      }, h(TextField, {
        label: '검색',
        type: 'search',
        placeholder: '미션 이름',
        defaultValue: s === 'empty' ? '수영장' : ''
      })), h('div', {
        className: 'm2 t2 d3'
      }, h(Select, {
        label: '상태'
      }, h('option', null, '전체'), ST.map(x => h('option', {
        key: x
      }, x)))), h('div', {
        className: 'm2 t2 d3'
      }, h(Select, {
        label: '자녀'
      }, h('option', null, '전체'), kids.map(k => h('option', {
        key: k
      }, k)))))), h('div', {
        className: 'row between'
      }, h('b', null, '전체 미션'), h(Button, {
        size: 'sm'
      }, h(Icon, {
        name: 'eva:plus-fill',
        size: 16
      }), '미션 추가')), h(Table, {
        caption: '미션 목록',
        columns: mCols(false),
        rows,
        rowKey: r => r.id,
        loading: s === 'loading',
        error: s === 'error' ? '미션을 불러오지 못했어요. 네트워크 상태를 확인해 주세요.' : undefined,
        emptyMessage: '“수영장”과 일치하는 미션이 없어요.',
        pagination: {
          pageSize: 6
        },
        minWidth: 640
      }));
    }
  };
  S.detail = {
    label: 'Detail',
    states: ['default', 'loading', 'missing-data', 'error'],
    render(s) {
      const m = s === 'missing-data',
        p = missions[m ? 4 : 0];
      if (s === 'error') return h(Shell, {
        active: 'table',
        title: '미션 상세',
        back: true,
        state: s
      }, Empty('solar:shield-warning-bold', '이 미션을 볼 수 없어요', '다른 보호자가 만든 비공개 미션이에요. 보호자 권한을 요청해 주세요.', h(Button, {
        variant: 'secondary'
      }, '권한 요청')));
      return h(Shell, {
        active: 'table',
        title: '미션 상세',
        back: true,
        hero: s === 'loading' ? null : p.name,
        sub: s === 'loading' ? null : p.id + ' · 9월 20일 생성',
        state: s
      }, s === 'loading' ? h('div', {
        className: 'zs-grid',
        'aria-busy': 'true'
      }, SkCard('t8 d8', true), SkCard('t8 d4', true)) : h(F, null, h('div', {
        className: 'row'
      }, h(Badge, {
        tone: TONE[p.status]
      }, p.status), m ? h(Badge, {
        tone: 'warning'
      }, h(Icon, {
        name: 'eva:alert-triangle-fill',
        size: 14
      }), '필수 정보 2개 없음') : h(Badge, null, '마감 ' + p.due)), h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 't8 d8'
      }, h(Card, {
        title: '미션 정보',
        footer: h('div', {
          className: 'row',
          style: {
            justifyContent: 'flex-end'
          }
        }, h(Button, {
          variant: 'secondary'
        }, h(Icon, {
          name: 'eva:edit-fill',
          size: 16
        }), '수정'), h(Button, null, '완료 확인'))
      }, h('dl', {
        className: 'dl'
      }, h('dt', null, '자녀'), h('dd', null, miss(m ? null : p.kid, '미지정')), h('dt', null, '보상'), h('dd', null, pt(m ? null : p.point)), h('dt', null, '마감'), h('dd', null, p.due + ' 오후 8:00'), h('dt', null, '인증 방법'), h('dd', null, '사진 1장'), h('dt', null, '메모'), h('dd', null, m ? miss(null, '메모가 없어요. 수정에서 추가하세요.') : '앞마당에서 쉬지 않고 100번! 중간에 쉬면 처음부터 다시 세기로 했어요.')))), h('div', {
        className: 't8 d4'
      }, h(Card, {
        title: '진행률'
      }, h('div', {
        className: 'kpi'
      }, m ? '0%' : '70%'), h('div', {
        className: 'prog'
      }, h('i', {
        style: {
          width: m ? '0%' : '70%'
        }
      })), h('span', {
        className: 'muted cap'
      }, m ? '기록이 아직 없어요' : '주 5회 중 3.5회 달성'))), h('div', {
        className: 't8 d12'
      }, h(Card, {
        title: '기록'
      }, m ? h('p', {
        className: 'muted'
      }, '기록된 활동이 없어요.') : h('ul', {
        className: 'rows'
      }, Row('mint', 'eva:checkmark-fill', '사진 인증 올림', '민서 · 오늘 오후 4:12', null), Row('soft', 'solar:chat-round-line-bold', '“내일은 120번 할래요!”', '민서 · 어제 저녁 7:40', null), Row('peri', 'eva:plus-fill', '미션 생성', '엄마 · 9월 20일', null)))))));
    }
  };
  S.settings = {
    label: 'Settings',
    states: ['default', 'saving', 'error', 'success'],
    render(s) {
      const e = s === 'error',
        d = s === 'saving';
      return h(Shell, {
        active: 'settings',
        title: '설정',
        hero: '민서의 기기 설정',
        sub: '사용 시간 · 알림 · 기본 정보',
        state: s
      }, e && h('div', {
        className: 'banner',
        role: 'alert'
      }, h('span', {
        className: 'ic'
      }, h(Icon, {
        name: 'eva:alert-circle-outline'
      })), h('div', null, h('b', null, '2개 항목을 확인해 주세요'), h('div', {
        className: 'muted'
      }, '오류가 있는 칸을 고친 뒤 다시 저장하세요.'))), h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 't8 d7'
      }, h(Card, {
        title: '기본 정보',
        footer: h('div', {
          className: 'row',
          style: {
            justifyContent: 'flex-end'
          }
        }, h(Button, {
          variant: 'secondary',
          disabled: d
        }, '취소'), h(Button, {
          loading: d
        }, '저장'))
      }, h('div', {
        className: 'stack g16'
      }, h(TextField, {
        label: '자녀 이름',
        defaultValue: e ? '' : '민서',
        required: true,
        error: e ? '이름을 입력해 주세요.' : undefined,
        disabled: d
      }), h(TextField, {
        label: '하루 사용 목표 (분)',
        type: 'number',
        defaultValue: e ? '-10' : '90',
        error: e ? '1분 이상으로 입력해 주세요.' : undefined,
        description: e ? undefined : '목표를 넘으면 보호자에게 알려요.',
        disabled: d
      }), h(Select, {
        label: '잠자기 모드 시작',
        defaultValue: '21',
        disabled: d
      }, h('option', {
        value: '21'
      }, '오후 9:00'), h('option', {
        value: '22'
      }, '오후 10:00')), h(Textarea, {
        label: '메모',
        rows: 3,
        defaultValue: '주말에는 30분 더 허용.',
        disabled: d
      })))), h('div', {
        className: 't8 d5'
      }, h(Card, {
        title: '알림'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 2
        }
      }, h(Switch, {
        label: '목표 시간 초과 알림',
        defaultChecked: true,
        disabled: d
      }), h(Switch, {
        label: '미션 인증 도착 알림',
        defaultChecked: true,
        disabled: d
      }), h(Switch, {
        label: '주간 리포트 받기',
        disabled: d
      }), h(Checkbox, {
        label: '밤 10시 이후 알림 끄기',
        defaultChecked: true,
        disabled: d
      }))))), s === 'success' && h('ol', {
        className: 'zem-toast-viewport'
      }, h(TV, {
        tone: 'success',
        title: '설정을 저장했어요',
        description: '민서의 기기에 바로 적용돼요.'
      })));
    }
  };
  S.billing = {
    label: 'Billing',
    states: ['default', 'loading', 'error', 'empty'],
    render(s) {
      const inv = s === 'empty' ? [] : [['B-0925', '9월 25일', 4900, '결제 완료'], ['B-0825', '8월 25일', 4900, '결제 완료'], ['B-0725', '7월 25일', 4900, '결제 완료'], ['B-0625', '6월 25일', 0, '무료 체험']].map(([id, d, a, st]) => ({
        id,
        d,
        a,
        st
      }));
      return h(Shell, {
        active: 'billing',
        title: '요금제',
        hero: '가족 요금제',
        sub: '월 4,900원 · 자녀 2명 (가상)',
        state: s
      }, s === 'error' && h('div', {
        className: 'banner',
        role: 'alert'
      }, h('span', {
        className: 'ic'
      }, h(Icon, {
        name: 'solar:danger-triangle-bold'
      })), h('div', {
        className: 'stack',
        style: {
          gap: 6,
          flex: 1
        }
      }, h('b', null, '10월 자동 결제에 실패했어요'), h('span', {
        className: 'muted'
      }, '등록한 카드(가상) •••• 1234의 유효기간이 지났어요. 10월 2일까지 바꾸지 않으면 리포트 기능이 멈춰요.'), h('div', null, h(Button, {
        size: 'sm'
      }, '결제 수단 변경')))), s === 'loading' ? h('div', {
        className: 'zs-grid',
        'aria-busy': 'true'
      }, SkCard('t8 d5', true), SkCard('t8 d7', true), SkCard('t8 d12', true)) : h('div', {
        className: 'zs-grid'
      }, h('div', {
        className: 't8 d5'
      }, h(Card, {
        title: '현재 요금제',
        footer: '다음 결제일 10월 25일'
      }, h('div', {
        className: 'row between'
      }, h('div', null, h('div', {
        className: 'kpi'
      }, '가족'), h('span', {
        className: 'muted'
      }, '월 4,900원')), h(Badge, {
        tone: s === 'error' ? 'error' : 'success'
      }, s === 'error' ? '결제 실패' : '이용 중')), h('div', {
        className: 'row'
      }, h(Button, {
        variant: 'secondary'
      }, '요금제 변경'), h(Button, {
        variant: 'text'
      }, '해지 안내')))), h('div', {
        className: 't8 d7'
      }, h(Card, {
        title: '이번 달 포인트'
      }, h('div', {
        className: 'stack g16'
      }, [['미션 보상 지급', '750 / 1,000P', 75], ['선물 교환', '2 / 3회', 66], ['사진 인증 저장', '4.6 / 5GB', 92]].map(([l, v, p]) => h('div', {
        key: l,
        className: 'stack',
        style: {
          gap: 6
        }
      }, h('div', {
        className: 'row between'
      }, h('span', null, l), h('span', {
        className: 'num strong'
      }, v, p >= 90 && h(Badge, {
        tone: 'warning',
        style: {
          marginLeft: 8
        }
      }, '거의 다 씀'))), h('div', {
        className: 'prog'
      }, h('i', {
        style: {
          width: p + '%'
        }
      }))))))), h('div', {
        className: 't8 d12'
      }, h(Table, {
        caption: '결제 내역',
        minWidth: 480,
        rows: inv,
        rowKey: r => r.id,
        emptyMessage: '아직 결제 내역이 없어요. 첫 결제는 무료 체험이 끝나는 10월 25일이에요.',
        columns: [{
          id: 'id',
          header: '번호',
          cell: r => r.id
        }, {
          id: 'd',
          header: '날짜',
          cell: r => r.d
        }, {
          id: 'a',
          header: '금액',
          cell: r => r.a.toLocaleString('ko-KR') + '원',
          align: 'right',
          sortValue: r => r.a
        }, {
          id: 'st',
          header: '상태',
          cell: r => h(Badge, {
            tone: r.st === '무료 체험' ? 'info' : 'success'
          }, r.st)
        }]
      }))));
    }
  };
  S.chat = {
    label: 'AI Chat',
    states: ['default', 'streaming', 'empty', 'error'],
    render(s) {
      const log = s === 'empty' ? null : [h('div', {
        key: 1,
        className: 'bubble me'
      }, '민서 이번 주 일정 중에 빈 시간 알려줘.'), h('div', {
        key: 2,
        className: 'bubble'
      }, '수요일 오후 3시–5시, 금요일 오후 4시 이후가 비어 있어요. 수요일에는 영어 단어 미션을 넣어 볼까요?'), h('div', {
        key: 3,
        className: 'bubble me'
      }, '금요일에 줄넘기 미션 추가해 줘.'), s === 'streaming' ? h('div', {
        key: 4,
        className: 'bubble',
        role: 'status',
        'aria-live': 'polite'
      }, '금요일 오후 4:30에 “줄넘기 100번” 미션을 만들고 있어요. 보상은 ') : s === 'error' ? h('div', {
        key: 4,
        className: 'banner',
        role: 'alert'
      }, h('span', {
        className: 'ic'
      }, h(Icon, {
        name: 'eva:alert-circle-outline'
      })), h('div', {
        className: 'stack',
        style: {
          gap: 6
        }
      }, h('span', null, '답변을 만들지 못했어요. 입력한 내용은 그대로 있어요.'), h('div', null, h(Button, {
        variant: 'secondary',
        size: 'sm'
      }, h(Icon, {
        name: 'eva:refresh-fill',
        size: 16
      }), '다시 시도')))) : h('div', {
        key: 4,
        className: 'bubble'
      }, '금요일 오후 4:30 “줄넘기 100번” 미션을 추가했어요. 보상은 50P로 설정했어요.')];
      return h(Shell, {
        active: 'chat',
        title: '일정 도우미',
        hero: s === 'empty' ? '무엇을 도와드릴까요?' : '일정 도우미',
        sub: '가상 예시 대화 · 실제 AI에 연결되어 있지 않아요',
        state: s
      }, h('div', {
        className: 'chat'
      }, h('div', {
        className: 'threads'
      }, h(Card, {
        title: '대화'
      }, h(Button, {
        variant: 'secondary',
        size: 'sm'
      }, h(Icon, {
        name: 'eva:plus-fill',
        size: 16
      }), '새 대화'), h('ul', {
        className: 'rows'
      }, ['이번 주 빈 시간', '주말 가족 일정', '미션 보상 정하기'].map((t, i) => h('li', {
        key: t
      }, h('a', {
        href: '#',
        style: {
          color: i === 0 && s !== 'empty' ? 'var(--zem-action)' : 'var(--zem-fg)',
          fontWeight: 700,
          textDecoration: 'none'
        }
      }, t)))))), h(Card, null, h('div', {
        className: 'stack g20',
        style: {
          minHeight: 360
        }
      }, s === 'empty' ? h('div', {
        className: 'stack',
        style: {
          alignItems: 'center',
          textAlign: 'center',
          padding: '32px 0',
          gap: 14
        }
      }, h('div', {
        className: 'empty',
        style: {
          padding: 0,
          boxShadow: 'none'
        }
      }, h('div', {
        className: 'plate'
      }, h(Icon, {
        name: 'solar:chat-round-line-bold',
        size: 32
      }))), h('p', {
        className: 'muted'
      }, '일정, 미션, 사용 시간에 대해 물어보세요.'), h('div', {
        className: 'row',
        style: {
          justifyContent: 'center'
        }
      }, ['오늘 일정 요약', '빈 시간 찾기', '미션 추천'].map(t => h(Button, {
        key: t,
        variant: 'secondary',
        size: 'sm'
      }, t)))) : h('div', {
        className: 'chat-log'
      }, log), h('div', {
        className: 'stack',
        style: {
          gap: 8
        }
      }, h(Textarea, {
        label: '메시지',
        rows: 2,
        placeholder: '질문을 입력하세요',
        disabled: s === 'streaming'
      }), h('div', {
        className: 'row between'
      }, h('span', {
        className: 'muted cap'
      }, '답변이 정확하지 않을 수 있어요.'), s === 'streaming' ? h(Button, {
        variant: 'secondary'
      }, '멈추기') : h(Button, null, '보내기')))))));
    }
  };
  S.builder = {
    label: 'Builder',
    states: ['default', 'selected', 'dragging', 'empty'],
    render(s) {
      const blocks = s === 'empty' ? [] : [['b1', 'cyan', 'eva:calendar-fill', '수학 학원', '월·수 오후 1:00'], ['b2', 'violet', 'solar:book-bold', '독서 20분', '매일 저녁 8:00'], ['b3', 'lime', 'solar:target-bold', '줄넘기 미션', '금 오후 4:30'], ['b4', 'peri', 'solar:moon-bold', '잠자기 모드', '매일 오후 9:00']];
      const sel = s === 'selected' || s === 'dragging' ? 'b3' : null;
      return h(Shell, {
        active: 'builder',
        title: '일정',
        hero: '주간 일정 만들기',
        sub: '초안 · 오후 3:40 자동 저장',
        state: s
      }, h('div', {
        className: 'row'
      }, h(Button, {
        variant: 'secondary',
        size: 'sm'
      }, h(Icon, {
        name: 'solar:play-bold',
        size: 16
      }), '미리보기'), h(Button, {
        size: 'sm'
      }, '적용하기')), h('div', {
        className: 'builder'
      }, h('div', null, h(Card, {
        title: '블록'
      }, h('div', {
        className: 'stack',
        style: {
          gap: 8
        }
      }, [['eva:calendar-fill', '학원·수업'], ['solar:target-bold', '미션'], ['solar:clock-circle-bold', '자유 시간'], ['solar:moon-bold', '잠자기 모드']].map(([ic, l]) => h('div', {
        key: l,
        className: 'pal',
        draggable: true
      }, h(Icon, {
        name: ic,
        size: 20
      }), l))))), h(Card, {
        title: '이번 주'
      }, h('div', {
        className: 'stack',
        role: 'listbox',
        'aria-label': '일정 블록'
      }, blocks.length ? blocks.map(([id, c, ic, l, t], i) => h(F, {
        key: id
      }, s === 'dragging' && i === 1 && h('div', {
        className: 'drop on'
      }, '여기에 놓기'), h('div', {
        className: 'block',
        role: 'option',
        'aria-selected': sel === id,
        'data-dragging': s === 'dragging' && id === 'b3' ? '' : undefined,
        tabIndex: 0
      }, h('span', {
        className: 'tile ' + c
      }, h(Icon, {
        name: ic,
        size: 20
      })), h('div', {
        className: 'stack',
        style: {
          gap: 2,
          flex: 1
        }
      }, h('b', null, l), h('span', {
        className: 'muted cap'
      }, t)), h(Icon, {
        name: 'eva:more-horizontal-fill',
        size: 20
      })))) : h('div', {
        className: 'drop',
        style: {
          minHeight: 220
        }
      }, '왼쪽 블록을 끌어 놓거나', h(Button, {
        variant: 'text',
        size: 'sm'
      }, '지난주 일정 불러오기')))), h('div', {
        className: 'props'
      }, h(Card, {
        title: '속성'
      }, sel ? h('div', {
        className: 'stack g16'
      }, h(TextField, {
        label: '이름',
        defaultValue: '줄넘기 미션'
      }), h(Select, {
        label: '요일',
        defaultValue: 'fri'
      }, h('option', {
        value: 'fri'
      }, '금요일'), h('option', null, '토요일')), h(TextField, {
        label: '시작 시간',
        type: 'time',
        defaultValue: '16:30'
      }), h(Switch, {
        label: '매주 반복',
        defaultChecked: true
      })) : h('p', {
        className: 'muted'
      }, s === 'empty' ? '블록을 추가하면 속성이 보여요.' : '블록을 선택하세요.')))));
    }
  };
  S.modal = {
    label: 'Modal',
    states: ['dialog', 'confirm', 'pending', 'error'],
    render(s) {
      const bg = h('div', {
        className: 'ghost',
        'aria-hidden': 'true'
      }, h(Table, {
        caption: '미션 목록',
        columns: mCols(true),
        rows: missions.slice(0, 5),
        rowKey: r => r.id,
        minWidth: 320
      }));
      const d = s === 'dialog' ? h(Dialog, {
        inline: true,
        title: '새 미션 만들기',
        description: '이름과 마감만 정하면 바로 보낼 수 있어요.',
        footer: h(F, null, h(Button, {
          variant: 'secondary'
        }, '취소'), h(Button, null, '보내기'))
      }, h('div', {
        className: 'stack g16'
      }, h(TextField, {
        label: '미션 이름',
        required: true,
        placeholder: '예: 줄넘기 100번'
      }), h(Select, {
        label: '자녀'
      }, kids.map(k => h('option', {
        key: k
      }, k))), h(Textarea, {
        label: '메모',
        rows: 2
      }))) : h(AlertDialog, {
        inline: true,
        danger: s !== 'error',
        title: s === 'error' ? '미션을 보관할까요?' : '미션 3개를 삭제할까요?',
        description: s === 'error' ? '보관함에서 다시 꺼낼 수 있어요.' : '삭제한 미션과 인증 사진은 되돌릴 수 없어요.',
        confirmLabel: s === 'error' ? '보관' : '삭제',
        errorMessage: '보관하지 못했어요. 잠시 후 다시 시도해 주세요.',
        previewState: s === 'pending' ? 'pending' : s === 'error' ? 'error' : undefined,
        onConfirm() {}
      });
      return h(Shell, {
        active: 'table',
        title: '미션',
        hero: '미션 목록',
        sub: '12개 · 이번 주',
        state: s
      }, bg, h('div', {
        className: 'zem-stage',
        style: {
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          borderRadius: 0,
          background: 'transparent'
        }
      }, d));
    }
  };
  S.empty = {
    label: 'Empty',
    states: ['first-run', 'no-results', 'no-access'],
    render(s) {
      const m = {
        'first-run': ['solar:smartphone-bold', '자녀 기기를 연결해 주세요', '자녀 휴대폰에서 초대 코드를 입력하면 일정·미션·사용 시간을 함께 볼 수 있어요.', h(F, null, h(Button, null, '초대 코드 만들기'), h(Button, {
          variant: 'secondary'
        }, '연결 방법 보기')), '환영해요!', '먼저 자녀 기기를 연결해요'],
        'no-results': ['eva:search-fill', '“수영장” 검색 결과가 없어요', '철자를 확인하거나 다른 말로 찾아보세요. 보관한 미션은 검색되지 않아요.', h(Button, {
          variant: 'secondary'
        }, '검색 초기화'), '미션', '검색 결과'],
        'no-access': ['solar:shield-warning-bold', '보호자 권한이 필요해요', '이 기능은 대표 보호자만 쓸 수 있어요. 대표 보호자에게 권한을 요청하세요.', h(Button, {
          variant: 'secondary'
        }, '권한 요청'), '가족 관리', '권한 없음']
      }[s];
      return h(Shell, {
        active: 'dashboard',
        title: m[4],
        hero: m[5],
        state: s
      }, Empty(m[0], m[1], m[2], m[3]));
    }
  };
  window.ZEM_PATTERNS = S;
  window.ZEM_SHELL = {
    Shell,
    Row,
    Done,
    Empty,
    Err,
    SkCard,
    Bars,
    Legend,
    miss,
    pt,
    missions
  };
  window.ZEM_mountPattern = function (el, p, s) {
    const def = S[p] || S.dashboard;
    const st = def.states.includes(s) ? s : def.states[0];
    document.title = 'IAK KIDS_V1 · ' + def.label + ' · ' + st;
    ReactDOM.createRoot(el).render(h(() => def.render(st)));
    return {
      p: S[p] ? p : 'dashboard',
      s: st
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/patterns.js", error: String((e && e.message) || e) }); }

// zem/lib/swatches.js
try { (() => {
/* IAK KIDS_V1 · swatch renderer for colour token cards. Reads live computed values; contrast measured in-browser (WCAG 2.x). */
(function () {
  const C = {
    rgb(v) {
      const d = document.createElement('i');
      d.style.color = v;
      document.body.appendChild(d);
      const c = getComputedStyle(d).color;
      d.remove();
      return c;
    },
    parts(c) {
      return c.match(/[\d.]+/g).map(Number);
    },
    hex(c) {
      const m = this.parts(c);
      let s = '#' + m.slice(0, 3).map(v => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase();
      if (m.length > 3 && m[3] < 1) s += Math.round(m[3] * 255).toString(16).padStart(2, '0').toUpperCase();
      return s;
    },
    lum(c) {
      const m = this.parts(c);
      const f = v => {
        v /= 255;
        return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4);
      };
      return .2126 * f(m[0]) + .7152 * f(m[1]) + .0722 * f(m[2]);
    },
    ratio(a, b) {
      const x = this.lum(a),
        y = this.lum(b);
      return (Math.max(x, y) + .05) / (Math.min(x, y) + .05);
    }
  };
  window.IAKSwatch = C;
  function esc(s) {
    return String(s).replace(/[&<>"]/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;'
    })[m]);
  }
  window.IAKSwatches = function (el, groups) {
    const res = [];
    el.innerHTML = groups.map(g => `<section class="mc-sec"><header><h2>${esc(g.title)}</h2>${g.note ? `<p>${esc(g.note)}</p>` : ''}</header><div class="sws">${g.items.map(it => {
      const [tok, label, pair, min, role] = it;
      return `<figure class="sw" data-tok="${tok}" data-pair="${pair || ''}" data-min="${min || ''}"><i style="background:var(--iak-kids-${tok})">${pair ? `<b style="color:var(--iak-kids-${pair})">가Aa</b>` : ''}</i><figcaption><b>${esc(label)}</b><code>--iak-kids-${tok}</code><span class="hx"></span>${role ? `<span class="rl">${esc(role)}</span>` : ''}<span class="cr"></span></figcaption></figure>`;
    }).join('')}</div></section>`).join('');
    el.querySelectorAll('.sw').forEach(f => {
      const bg = C.rgb(`var(--iak-kids-${f.dataset.tok})`);
      f.querySelector('.hx').textContent = C.hex(bg);
      const p = f.dataset.pair;
      if (p) {
        const fg = C.rgb(`var(--iak-kids-${p})`);
        const r = C.ratio(bg, fg),
          min = +f.dataset.min || 4.5,
          ok = r >= min;
        f.querySelector('.cr').innerHTML = `<span class="zem-badge zem-badge--${ok ? 'success' : 'error'}">${ok ? '통과' : '미달'} ${r.toFixed(2)}:1 (≥${min})</span><span class="rl" style="font-size:11px">vs ${p}</span>`;
        res.push({
          bg: f.dataset.tok,
          fg: p,
          ratio: +r.toFixed(2),
          min,
          pass: ok
        });
      }
    });
    window.__IAK_CONTRAST = (window.__IAK_CONTRAST || []).concat(res);
    return res;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/swatches.js", error: String((e && e.message) || e) }); }

// zem/lib/zem-patterns.js
try { (() => {
/* IAK KIDS_V1 · Little Everyday v2.3 — composition patterns. Compose window.ZEM base components (Button/Badge/Select/TextField/Textarea/Switch/Skeleton/Icon) — no new primitives, no new colours.
   Exposed as window.ZEM_PATTERNS; the bundle's .jsx files are thin wrappers. Load AFTER zem-ui.js. If the DS bundle namespace predates v2.3, missing pattern names are filled in (compat). */
(function () {
  // ChildSwitcher — v2.3 composition pattern. Composes ZEM Button/Icon/Skeleton (window.ZEM). Radiogroup with roving tabindex.
  function ChildSwitcher({
    kids = [],
    value,
    defaultValue,
    onChange,
    label = '자녀 선택',
    state = 'ready',
    onRetry,
    onAdd,
    addLabel = '자녀 추가',
    emptyTitle = '연결된 자녀가 없어요',
    emptyText = '자녀 기기를 연결하면 사용 시간과 요청을 여기서 볼 수 있어요.',
    className
  }) {
    const h = React.createElement,
      Z = window.ZEM || {};
    const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : kids[0] && kids[0].id);
    const refs = React.useRef([]);
    const cur = value !== undefined ? value : inner;
    const pick = id => {
      if (value === undefined) setInner(id);
      onChange && onChange(id);
    };
    const cls = 'zp-kids' + (className ? ' ' + className : '');
    if (state === 'loading') return h('div', {
      className: cls,
      'aria-busy': 'true',
      'aria-label': label + ' 불러오는 중'
    }, [0, 1].map(i => h(Z.Skeleton, {
      key: i,
      width: 168,
      height: 56,
      style: {
        borderRadius: 16,
        flex: 'none'
      }
    })));
    if (state === 'error') return h('div', {
      className: 'zp-alert',
      role: 'alert'
    }, h(Z.Icon, {
      name: 'eva:alert-circle-outline',
      size: 20
    }), h('div', {
      className: 'zp-stack',
      style: {
        gap: 6,
        flex: 1
      }
    }, h('b', null, '자녀 목록을 불러오지 못했어요'), h('span', {
      className: 'zp-cap'
    }, '연결 상태를 확인한 뒤 다시 시도해 주세요. 입력한 내용은 그대로 있어요.'), onRetry && h('div', null, h(Z.Button, {
      size: 'sm',
      variant: 'secondary',
      onClick: onRetry
    }, '다시 시도'))));
    if (!kids.length) return h('div', {
      className: 'zp-empty'
    }, h('b', null, emptyTitle), h('span', {
      className: 'zp-cap'
    }, emptyText), onAdd && h(Z.Button, {
      size: 'sm',
      onClick: onAdd
    }, h(Z.Icon, {
      name: 'eva:plus-fill',
      size: 18
    }), addLabel));
    const idx = Math.max(0, kids.findIndex(k => k.id === cur));
    const onKey = (e, i) => {
      const n = kids.length;
      let t = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') t = (i + 1) % n;else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') t = (i - 1 + n) % n;else if (e.key === 'Home') t = 0;else if (e.key === 'End') t = n - 1;
      if (t === null) return;
      e.preventDefault();
      pick(kids[t].id);
      const el = refs.current[t];
      el && el.focus();
    };
    return h('div', {
      role: 'radiogroup',
      'aria-label': label,
      className: cls
    }, kids.map((k, i) => {
      const sel = i === idx;
      return h('button', {
        key: k.id,
        ref: el => {
          refs.current[i] = el;
        },
        type: 'button',
        role: 'radio',
        'aria-checked': sel,
        tabIndex: sel ? 0 : -1,
        className: 'zp-kid',
        title: k.name + (k.meta ? ' · ' + k.meta : ''),
        onClick: () => pick(k.id),
        onKeyDown: e => onKey(e, i)
      }, h('span', {
        className: 'ava',
        'aria-hidden': 'true'
      }, k.initial || String(k.name || '?').slice(0, 1)), h('span', {
        className: 'zp-kid-t'
      }, h('b', null, k.name), sel ? h('span', {
        className: 'zp-kid-sel'
      }, '보는 중' + (k.meta ? ' · ' + k.meta : '')) : h('span', null, k.meta || '')));
    }));
  }

  // DailyTimeline — v2.3 composition pattern. time · title · duration · status text (완료/지금/예정) + optional sub-steps. Composes ZEM Badge/Icon/Button/Skeleton.
  function DailyTimeline({
    items = [],
    state = 'ready',
    onRetry,
    onSelect,
    label = '오늘 일정',
    showSteps = 'current',
    emptyTitle = '오늘은 일정이 없어요',
    emptyText = '일정을 추가하면 시간 순서대로 보여요.',
    className
  }) {
    const h = React.createElement,
      Z = window.ZEM || {};
    const LABEL = {
        done: '완료',
        current: '지금',
        upcoming: '예정'
      },
      TONE = {
        done: 'success',
        current: 'info',
        upcoming: 'neutral'
      };
    const fmt = m => {
      if (m == null || m === '') return null;
      m = +m;
      const hh = Math.floor(m / 60),
        mm = m % 60;
      return (hh ? hh + '시간' : '') + (hh && mm ? ' ' : '') + (mm ? mm + '분' : '') || '0분';
    };
    const cls = 'zp-tl' + (className ? ' ' + className : '');
    if (state === 'loading') return h('div', {
      className: 'zp-stack',
      'aria-busy': 'true',
      'aria-label': label + ' 불러오는 중'
    }, [0, 1, 2].map(i => h('div', {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '56px minmax(0,1fr)',
        gap: 12
      }
    }, h(Z.Skeleton, {
      height: 16
    }), h(Z.Skeleton, {
      height: 48
    }))));
    if (state === 'error') return h('div', {
      className: 'zp-alert',
      role: 'alert'
    }, h(Z.Icon, {
      name: 'eva:alert-circle-outline',
      size: 20
    }), h('div', {
      className: 'zp-stack',
      style: {
        gap: 6,
        flex: 1
      }
    }, h('b', null, label + '을 불러오지 못했어요'), h('span', {
      className: 'zp-cap'
    }, '잠시 후 다시 시도해 주세요.'), onRetry && h('div', null, h(Z.Button, {
      size: 'sm',
      variant: 'secondary',
      onClick: onRetry
    }, '다시 시도'))));
    if (!items.length) return h('div', {
      className: 'zp-empty'
    }, h('b', null, emptyTitle), h('span', {
      className: 'zp-cap'
    }, emptyText));
    return h('ol', {
      className: cls,
      'aria-label': label
    }, items.map(it => {
      const st = LABEL[it.status] ? it.status : 'upcoming';
      const meta = [fmt(it.duration), it.note].filter(Boolean).join(' · ');
      const withSteps = it.steps && it.steps.length && (showSteps === 'all' || showSteps === 'current' && st === 'current');
      const card = h('div', {
        className: 'zp-tl-card'
      }, h('div', {
        className: 'zp-tl-row'
      }, h('span', {
        className: 'zp-tl-title'
      }, it.title), h(Z.Badge, {
        tone: TONE[st]
      }, LABEL[st])), meta && h('span', {
        className: 'zp-tl-meta'
      }, meta), withSteps ? h('ol', {
        className: 'zp-steps',
        'aria-label': it.title + ' 단계'
      }, it.steps.map((s, j) => h('li', {
        key: j,
        'data-done': !!s.done
      }, h('span', {
        className: 'zp-step-mark',
        'aria-hidden': 'true'
      }, s.done ? h(Z.Icon, {
        name: 'eva:checkmark-fill',
        size: 14
      }) : null), h('span', null, s.title, h('span', {
        className: 'zp-sr'
      }, s.done ? ' · 완료' : ' · 남음'))))) : null);
      return h('li', {
        key: it.id,
        'data-status': st,
        'aria-current': st === 'current' ? 'step' : undefined
      }, h('span', {
        className: 'zp-tl-time'
      }, it.time || ''), h('span', {
        className: 'zp-tl-rail',
        'aria-hidden': 'true'
      }, h('span', {
        className: 'zp-tl-dot'
      }, st === 'done' ? h(Z.Icon, {
        name: 'eva:checkmark-fill',
        size: 12
      }) : null)), h('div', {
        className: 'zp-tl-body'
      }, onSelect && !withSteps ? h('button', {
        type: 'button',
        className: 'zp-tl-btn',
        onClick: () => onSelect(it.id)
      }, card) : card));
    }));
  }

  // FocusSession — v2.3 composition pattern. Number (mm:ss) + progress bar. idle → running ⇄ paused → timeup/done; reset anytime.
  // Screen readers: role=timer with aria-live off (no per-second announcements). A polite status speaks only on state changes and once at 1 minute left.
  function FocusSession({
    title,
    durationSec = 600,
    steps,
    resetKey,
    initialPhase = 'idle',
    initialElapsedSec = 0,
    label = '지금 할 일',
    onStart,
    onPause,
    onResume,
    onComplete,
    onReset,
    className
  }) {
    const h = React.createElement,
      Z = window.ZEM || {};
    const [phase, setPhase] = React.useState(initialPhase);
    const [elapsed, setElapsed] = React.useState(Math.min(initialElapsedSec, durationSec));
    const [msg, setMsg] = React.useState('');
    const firstBtn = React.useRef(null),
      wantFocus = React.useRef(false),
      warned = React.useRef(false),
      mounted = React.useRef(false);
    React.useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      setPhase(initialPhase);
      setElapsed(Math.min(initialElapsedSec, durationSec));
      setMsg('');
      warned.current = false;
    }, [resetKey]);
    React.useEffect(() => {
      if (phase !== 'running') return;
      const t0 = Date.now(),
        e0 = elapsed;
      const id = setInterval(() => {
        const e = Math.min(durationSec, e0 + Math.floor((Date.now() - t0) / 1000));
        setElapsed(e);
        if (!warned.current && durationSec > 90 && durationSec - e <= 60 && e < durationSec) {
          warned.current = true;
          setMsg('1분 남았어요.');
        }
        if (e >= durationSec) {
          clearInterval(id);
          setPhase('timeup');
          setMsg('시간이 다 됐어요. 끝냈으면 완료를 눌러요.');
        }
      }, 250);
      return () => clearInterval(id);
    }, [phase]);
    React.useEffect(() => {
      if (wantFocus.current && firstBtn.current) {
        firstBtn.current.focus();
        wantFocus.current = false;
      }
    }, [phase]);
    const left = Math.max(0, durationSec - elapsed),
      mm = String(Math.floor(left / 60)).padStart(2, '0'),
      ss = String(left % 60).padStart(2, '0');
    const pct = durationSec ? Math.round(elapsed / durationSec * 100) : 0,
      mins = Math.round(durationSec / 60);
    const go = (p, m, cb) => {
      wantFocus.current = true;
      setPhase(p);
      setMsg(m);
      cb && cb();
    };
    const act = {
      start: () => go('running', (title || '') + ' 시작! ' + mins + '분 동안 해요.', onStart),
      pause: () => go('paused', '일시정지 · ' + Math.ceil(left / 60) + '분 남았어요.', onPause),
      resume: () => go('running', '다시 시작했어요.', onResume),
      done: () => go('done', (title || '') + ' 완료!', () => onComplete && onComplete({
        elapsedSec: elapsed
      })),
      reset: () => {
        warned.current = false;
        setElapsed(0);
        go('idle', '처음으로 되돌렸어요.', onReset);
      }
    };
    const B = (k, t, v, first) => h(Z.Button, {
      key: k,
      variant: v,
      ref: first ? firstBtn : undefined,
      onClick: act[k]
    }, t);
    const btns = {
      idle: [B('start', '시작', 'primary', 1)],
      running: [B('pause', '일시정지', 'secondary', 1), B('done', '완료', 'primary'), B('reset', '초기화', 'text')],
      paused: [B('resume', '재개', 'primary', 1), B('done', '완료', 'secondary'), B('reset', '초기화', 'text')],
      timeup: [B('done', '완료', 'primary', 1), B('reset', '초기화', 'text')],
      done: [B('reset', '다시 하기', 'secondary', 1)]
    }[phase] || [];
    const ST = {
      idle: ['neutral', '준비'],
      running: ['info', '진행 중'],
      paused: ['warning', '일시정지'],
      timeup: ['warning', '시간 끝'],
      done: ['success', '완료']
    }[phase] || ['neutral', '준비'];
    return h('section', {
      className: 'zp-focus' + (className ? ' ' + className : ''),
      'data-phase': phase,
      'aria-label': label + (title ? ' · ' + title : '')
    }, h('div', {
      className: 'zp-focus-top'
    }, h('div', {
      className: 'zp-stack',
      style: {
        gap: 2,
        flex: '1 1 200px'
      }
    }, h('span', {
      className: 'zp-cap'
    }, label), h('h3', {
      className: 'zp-h'
    }, title)), h(Z.Badge, {
      tone: ST[0]
    }, ST[1])), h('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, h('span', {
      className: 'zp-clock',
      role: 'timer',
      'aria-live': 'off',
      'aria-atomic': 'true',
      'aria-label': '남은 시간 ' + Math.floor(left / 60) + '분 ' + left % 60 + '초'
    }, mm + ':' + ss), h('span', {
      className: 'zp-cap'
    }, '/ ' + mins + '분')), h('div', {
      className: 'zp-bar',
      role: 'progressbar',
      'aria-label': '집중 진행률',
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-valuenow': pct,
      'aria-valuetext': mins + '분 중 ' + Math.floor(elapsed / 60) + '분 지남'
    }, h('i', {
      style: {
        width: pct + '%'
      }
    })), steps && steps.length ? h('ol', {
      className: 'zp-steps',
      'aria-label': '단계'
    }, steps.map((s, j) => h('li', {
      key: j,
      'data-done': !!s.done
    }, h('span', {
      className: 'zp-step-mark',
      'aria-hidden': 'true'
    }, s.done ? h(Z.Icon, {
      name: 'eva:checkmark-fill',
      size: 14
    }) : null), h('span', null, s.title, h('span', {
      className: 'zp-sr'
    }, s.done ? ' · 완료' : ' · 남음'))))) : null, h('div', {
      className: 'zp-actions'
    }, btns), h('div', {
      className: 'zp-sr',
      role: 'status',
      'aria-live': 'polite'
    }, msg));
  }

  // GoalComposer — v2.3 composition pattern. Title + repeat first; details behind a disclosure. Validation on submit keeps values and focuses the first error.
  function GoalComposer({
    kids,
    defaultValue,
    defaultExpanded = false,
    showErrors = false,
    maxTitle = 30,
    submitLabel = '목표 만들기',
    cancelLabel = '취소',
    onSubmit,
    onCancel,
    demoNote = '데모: 저장하면 이 화면의 메모리에만 추가되고 서버로 보내지 않아요.',
    className
  }) {
    const h = React.createElement,
      Z = window.ZEM || {};
    const uid = React.useId().replace(/:/g, '');
    const init = () => ({
      title: '',
      repeat: '',
      kid: kids && kids.length === 1 ? String(kids[0].id) : '',
      time: 'any',
      points: '',
      reminder: false,
      memo: '',
      ...(defaultValue || {})
    });
    const [v, setV] = React.useState(init);
    const [err, setErr] = React.useState({});
    const [open, setOpen] = React.useState(defaultExpanded);
    const [sum, setSum] = React.useState('');
    const refs = {
      title: React.useRef(null),
      repeat: React.useRef(null),
      kid: React.useRef(null),
      points: React.useRef(null)
    };
    const needKid = kids && kids.length > 1;
    const validate = x => {
      const e = {},
        t = x.title.trim();
      if (!t) e.title = '목표 이름을 입력해 주세요.';else if (t.length > maxTitle) e.title = '목표 이름은 ' + maxTitle + '자 이내로 줄여 주세요. (지금 ' + t.length + '자)';
      if (!x.repeat) e.repeat = '반복 주기를 골라 주세요.';
      if (needKid && !x.kid) e.kid = '누구의 목표인지 골라 주세요.';
      if (x.points !== '' && (!/^\d+$/.test(String(x.points)) || +x.points > 500)) e.points = '포인트는 0–500 사이의 숫자로 입력해 주세요.';
      return e;
    };
    React.useEffect(() => {
      if (showErrors) {
        const e = validate(v);
        setErr(e);
        if (e.points) setOpen(true);
        const n = Object.keys(e).length;
        setSum(n ? n + '개 항목을 확인해 주세요.' : '');
      }
    }, [showErrors]);
    const set = k => ev => {
      const val = ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value;
      setV(s => ({
        ...s,
        [k]: val
      }));
      if (err[k]) setErr(s => {
        const n = {
          ...s
        };
        delete n[k];
        return n;
      });
    };
    const submit = ev => {
      ev.preventDefault();
      const e = validate(v),
        keys = ['title', 'repeat', 'kid', 'points'].filter(k => e[k]);
      setErr(e);
      if (keys.length) {
        setSum(keys.length + '개 항목을 확인해 주세요.');
        const k = keys[0];
        if (k === 'points' && !open) setOpen(true);
        setTimeout(() => {
          const el = refs[k].current;
          el && el.focus();
        }, 0);
        return;
      }
      setSum('');
      onSubmit && onSubmit({
        ...v,
        title: v.title.trim(),
        points: v.points === '' ? null : +v.points
      });
      setV(init());
      setOpen(defaultExpanded);
    };
    const opt = a => a.map(([val, l]) => h('option', {
      key: val,
      value: val
    }, l));
    const tlen = v.title.trim().length;
    return h('form', {
      className: 'zp-goal' + (className ? ' ' + className : ''),
      noValidate: true,
      onSubmit: submit
    }, sum ? h('div', {
      className: 'zp-errsum',
      role: 'status',
      'aria-live': 'polite'
    }, sum) : null, h(Z.TextField, {
      ref: refs.title,
      label: '목표 이름',
      required: true,
      value: v.title,
      onChange: set('title'),
      placeholder: '예: 저녁 먹고 양치하기',
      error: err.title,
      description: err.title ? undefined : tlen + ' / ' + maxTitle + '자',
      autoComplete: 'off'
    }), h(Z.Select, {
      ref: refs.repeat,
      label: '반복',
      required: true,
      value: v.repeat,
      onChange: set('repeat'),
      error: err.repeat
    }, opt([['', '선택하세요'], ['daily', '매일'], ['weekdays', '평일'], ['weekend', '주말'], ['weekly', '일주일에 한 번']])), needKid ? h(Z.Select, {
      ref: refs.kid,
      label: '누구의 목표인가요?',
      required: true,
      value: v.kid,
      onChange: set('kid'),
      error: err.kid
    }, opt([['', '선택하세요'], ...kids.map(k => [String(k.id), k.name])])) : null, h('button', {
      type: 'button',
      className: 'zp-disclose',
      'aria-expanded': open,
      'aria-controls': uid + '-more',
      onClick: () => setOpen(o => !o)
    }, h('span', {
      style: {
        flex: 1
      }
    }, '상세 설정 (선택)'), h(Z.Icon, {
      name: 'eva:arrow-ios-downward-fill',
      size: 20
    })), open ? h('div', {
      id: uid + '-more',
      className: 'zp-details'
    }, h('div', {
      className: 'zp-grid2'
    }, h(Z.Select, {
      label: '시간대',
      value: v.time,
      onChange: set('time')
    }, opt([['any', '언제든'], ['morning', '아침'], ['afternoon', '오후'], ['evening', '저녁']])), h(Z.TextField, {
      ref: refs.points,
      label: '완료 포인트',
      inputMode: 'numeric',
      value: v.points,
      onChange: set('points'),
      placeholder: '예: 50',
      error: err.points,
      description: err.points ? undefined : '비워 두면 포인트 미정'
    })), h(Z.Switch, {
      label: '시간이 되면 알림 받기',
      checked: !!v.reminder,
      onChange: set('reminder')
    }), h(Z.Textarea, {
      label: '메모',
      value: v.memo,
      onChange: set('memo'),
      rows: 3,
      placeholder: '아이에게 보여줄 한마디'
    })) : null, demoNote ? h('span', {
      className: 'zp-cap'
    }, demoNote) : null, h('div', {
      className: 'zp-actions',
      style: {
        justifyContent: 'flex-end'
      }
    }, onCancel ? h(Z.Button, {
      variant: 'secondary',
      onClick: onCancel,
      style: {
        flex: '0 1 auto'
      }
    }, cancelLabel) : null, h(Z.Button, {
      type: 'submit',
      style: {
        flex: '0 1 auto'
      }
    }, submitLabel)));
  }

  // MissionFeedback — v2.3 composition pattern. Complete / undo, progress, points. Points are DERIVED from the completed set, so a mission can never be rewarded twice.
  function MissionFeedback({
    missions = [],
    completedIds,
    defaultCompletedIds = [],
    onChange,
    title = '오늘의 미션',
    pointsLabel = '오늘 포인트',
    state = 'ready',
    onRetry,
    emptyTitle = '오늘은 미션이 없어요',
    emptyText = '보호자가 미션을 보내면 이곳에 바로 보여요.',
    className
  }) {
    const h = React.createElement,
      Z = window.ZEM || {};
    const [inner, setInner] = React.useState(defaultCompletedIds);
    const ids = completedIds !== undefined ? completedIds : inner;
    const done = new Set(ids);
    const ever = React.useRef(null);
    if (!ever.current) ever.current = new Set(ids);
    const [note, setNote] = React.useState(null);
    const total = set => missions.reduce((a, m) => a + (set.has(m.id) && m.points != null ? m.points : 0), 0);
    const toggle = m => {
      const next = new Set(done),
        was = next.has(m.id);
      was ? next.delete(m.id) : next.add(m.id);
      const kind = was ? 'undo' : ever.current.has(m.id) ? 'redo' : 'done';
      ever.current.add(m.id);
      const p = total(next),
        pt = m.points != null ? m.points + 'P' : '포인트 미정';
      const text = kind === 'done' ? '‘' + m.title + '’ 완료! +' + pt + ' · ' + pointsLabel + ' ' + p + 'P' : kind === 'redo' ? '‘' + m.title + '’ 다시 완료 · 포인트는 한 번만 반영돼요 · ' + pointsLabel + ' ' + p + 'P' : '‘' + m.title + '’ 완료를 취소했어요 · ' + pointsLabel + ' ' + p + 'P';
      setNote({
        id: m.id,
        kind,
        text,
        n: Date.now()
      });
      const arr = missions.filter(x => next.has(x.id)).map(x => x.id);
      if (completedIds === undefined) setInner(arr);
      onChange && onChange({
        completedIds: arr,
        points: p,
        changedId: m.id,
        action: kind
      });
    };
    const cls = 'zp-mf' + (className ? ' ' + className : '');
    if (state === 'loading') return h('div', {
      className: cls,
      'aria-busy': 'true',
      'aria-label': title + ' 불러오는 중'
    }, h(Z.Skeleton, {
      height: 20,
      width: '50%'
    }), h(Z.Skeleton, {
      height: 12
    }), [0, 1, 2].map(i => h(Z.Skeleton, {
      key: i,
      height: 48
    })));
    if (state === 'error') return h('div', {
      className: 'zp-alert',
      role: 'alert'
    }, h(Z.Icon, {
      name: 'eva:alert-circle-outline',
      size: 20
    }), h('div', {
      className: 'zp-stack',
      style: {
        gap: 6,
        flex: 1
      }
    }, h('b', null, '미션을 불러오지 못했어요'), h('span', {
      className: 'zp-cap'
    }, '완료한 기록은 사라지지 않아요. 다시 시도해 주세요.'), onRetry && h('div', null, h(Z.Button, {
      size: 'sm',
      variant: 'secondary',
      onClick: onRetry
    }, '다시 시도'))));
    if (!missions.length) return h('div', {
      className: 'zp-empty'
    }, h('b', null, emptyTitle), h('span', {
      className: 'zp-cap'
    }, emptyText));
    const n = missions.filter(m => done.has(m.id)).length,
      pct = Math.round(n / missions.length * 100),
      all = n === missions.length,
      pts = total(done);
    const nm = note && missions.find(m => m.id === note.id);
    return h('section', {
      className: cls,
      'aria-label': title
    }, h('div', {
      className: 'zp-mf-sum'
    }, h('div', {
      className: 'zp-stack',
      style: {
        gap: 2
      }
    }, h('b', null, title), h('span', {
      className: 'zp-cap'
    }, all ? '모두 끝냈어요! ' + missions.length + '개 완료' : missions.length + '개 중 ' + n + '개 완료')), h('span', {
      className: 'zp-mf-pts'
    }, pointsLabel + ' ' + pts + 'P')), h('div', {
      className: 'zp-bar',
      role: 'progressbar',
      'aria-label': '미션 진행률',
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-valuenow': pct,
      'aria-valuetext': missions.length + '개 중 ' + n + '개 완료'
    }, h('i', {
      style: {
        width: pct + '%'
      }
    })), note && nm ? h('div', {
      key: note.n,
      className: 'zp-mf-note zp-pop',
      'data-tone': note.kind === 'undo' ? 'info' : 'success'
    }, h(Z.Icon, {
      name: note.kind === 'undo' ? 'eva:info-fill' : 'eva:checkmark-circle-2-fill',
      size: 20
    }), h('span', null, note.text), note.kind !== 'undo' ? h(Z.Button, {
      size: 'sm',
      variant: 'secondary',
      onClick: () => toggle(nm)
    }, '되돌리기') : null) : null, h('ul', {
      className: 'zp-mf-list'
    }, missions.map(m => {
      const d = done.has(m.id);
      return h('li', {
        key: m.id,
        'data-done': d
      }, h('span', {
        className: 'done' + (d ? '' : ' todo'),
        'aria-hidden': 'true'
      }, d ? h(Z.Icon, {
        name: 'eva:checkmark-fill',
        size: 16
      }) : null), h('div', {
        className: 'zp-mf-t'
      }, h('b', null, m.title), h('span', {
        className: m.points == null ? 'miss' : undefined
      }, (d ? '완료 · ' : '') + (m.points != null ? m.points + 'P' : '포인트 미정'))), h(Z.Button, {
        size: 'sm',
        variant: d ? 'secondary' : 'primary',
        'aria-pressed': d,
        'aria-label': m.title + (d ? ' 완료 취소' : ' 완료하기'),
        onClick: () => toggle(m)
      }, d ? '완료 취소' : '완료하기'));
    })), h('div', {
      className: 'zp-sr',
      role: 'status',
      'aria-live': 'polite'
    }, note ? note.text : ''));
  }
  window.ZEM_PATTERNS = {
    ChildSwitcher,
    DailyTimeline,
    FocusSession,
    GoalComposer,
    MissionFeedback
  };
  var NS = window.RAISDesignSystem_019e07;
  if (NS) {
    for (var k in window.ZEM_PATTERNS) {
      if (!NS[k]) NS[k] = window.ZEM_PATTERNS[k];
    }
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/zem-patterns.js", error: String((e && e.message) || e) }); }

// zem/lib/zem-ui.js
try { (() => {
/* IAK KIDS_V1 · Little Everyday UI — window.ZEM namespace kept for compatibility (same component API as v1). Styling in zem-ui.css (semantic --iak-kids-* roles). Overlay behaviour is a dependency-free approximation for previews. */
(function () {
  const h = React.createElement,
    IC = () => window.ZEM_ICONS || {};
  const cx = (...a) => a.filter(Boolean).join(' ');
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  function Glyph({
    name,
    size = 20
  }) {
    const ic = IC()[name];
    return ic ? h('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      'aria-hidden': 'true',
      focusable: 'false',
      dangerouslySetInnerHTML: {
        __html: ic.body
      }
    }) : null;
  }

  /* index.tsx */
  function Icon({
    name,
    size = 20,
    label,
    ...p
  }) {
    const I = IC();
    const ic = has(I, name) ? I[name] : undefined;
    if (!ic) return null;
    return h('svg', {
      ...p,
      width: size,
      height: size,
      viewBox: `0 0 ${ic.width} ${ic.height}`,
      fill: 'currentColor',
      role: label ? 'img' : undefined,
      'aria-label': label,
      'aria-hidden': label ? undefined : true,
      focusable: 'false',
      dangerouslySetInnerHTML: {
        __html: ic.body
      }
    });
  }
  const Button = React.forwardRef(function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    children,
    className,
    type = 'button',
    ...p
  }, ref) {
    return h('button', {
      ...p,
      ref,
      type,
      disabled: disabled || loading,
      'aria-busy': loading || undefined,
      className: cx('zem-button', `zem-button--${variant}`, `zem-button--${size}`, className)
    }, h('span', {
      style: loading ? {
        opacity: 0
      } : undefined
    }, children), loading && h('span', {
      className: 'zem-spinner',
      'aria-hidden': 'true'
    }));
  });
  function useField(id, description, error, describedBy) {
    const uid = React.useId();
    const inputId = id || `zem-${uid}`;
    return {
      inputId,
      helpId: `${inputId}-help`,
      descriptionId: cx(describedBy, (!!error || !!description) && `${inputId}-help`) || undefined
    };
  }
  function FieldShell({
    label,
    inputId,
    helpId,
    description,
    error,
    required,
    children
  }) {
    return h('div', {
      className: 'zem-field'
    }, h('label', {
      htmlFor: inputId
    }, label, required && h('span', {
      'aria-hidden': 'true'
    }, ' *')), children, (error || description) && h('p', {
      id: helpId,
      className: cx('zem-help', !!error && 'zem-error')
    }, error || description));
  }
  function fieldFactory(tag, extra) {
    return React.forwardRef(function Field({
      label,
      description,
      error,
      id,
      className,
      required,
      'aria-describedby': db,
      children,
      ...p
    }, ref) {
      const f = useField(id, description, error, db);
      const props = {
        ...p,
        id: f.inputId,
        ref,
        required,
        'aria-describedby': f.descriptionId,
        'aria-invalid': error ? true : p['aria-invalid'],
        className: cx('zem-input', extra, className)
      };
      if (tag === 'textarea') props.rows = p.rows || 4;
      return h(FieldShell, {
        ...f,
        label,
        description,
        error,
        required
      }, h(tag, props, tag === 'select' ? children : undefined));
    });
  }
  const TextField = fieldFactory('input'),
    Textarea = fieldFactory('textarea', 'zem-textarea'),
    Select = fieldFactory('select');
  const Checkbox = React.forwardRef(function Checkbox({
    label,
    className,
    ...p
  }, ref) {
    return h('label', {
      className: cx('zem-control', className)
    }, h('input', {
      ...p,
      type: 'checkbox',
      ref
    }), h('span', null, label));
  });
  const Switch = React.forwardRef(function Switch({
    label,
    className,
    ...p
  }, ref) {
    return h('label', {
      className: cx('zem-control', 'zem-switch', className)
    }, h('input', {
      ...p,
      type: 'checkbox',
      role: 'switch',
      ref
    }), h('span', {
      className: 'zem-switch-track',
      'aria-hidden': 'true'
    }), h('span', null, label));
  });
  function Badge({
    tone = 'neutral',
    className,
    children,
    ...p
  }) {
    return h('span', {
      ...p,
      className: cx('zem-badge', `zem-badge--${tone}`, className)
    }, children);
  }
  function Card({
    title,
    footer,
    children,
    className,
    ...p
  }) {
    const id = React.useId();
    return h('section', {
      ...p,
      'aria-labelledby': title ? id : p['aria-labelledby'],
      className: cx('zem-card', className)
    }, title && h('h2', {
      id
    }, title), h('div', null, children), footer && h('footer', null, footer));
  }
  function Skeleton({
    width = '100%',
    height = 20,
    circle = false,
    style,
    className,
    ...p
  }) {
    return h('span', {
      ...p,
      'aria-hidden': 'true',
      className: cx('zem-skeleton', className),
      style: {
        width,
        height,
        borderRadius: circle ? '50%' : undefined,
        ...style
      }
    });
  }

  /* focus helpers for overlay approximations */
  function useModalFocus(open, ref, initialFocusRef, onClose, lockEsc) {
    React.useEffect(() => {
      if (!open) return;
      const prev = document.activeElement;
      const node = ref.current;
      const t = setTimeout(() => {
        if (initialFocusRef && initialFocusRef.current) initialFocusRef.current.focus();else {
          const f = node && node.querySelector(FOCUSABLE);
          f && f.focus();
        }
      }, 0);
      const key = e => {
        if (e.key === 'Escape') {
          if (lockEsc && lockEsc()) return;
          e.preventDefault();
          onClose();
        }
        if (e.key === 'Tab' && node) {
          const els = [...node.querySelectorAll(FOCUSABLE)];
          if (!els.length) return;
          const a = els[0],
            z = els[els.length - 1];
          if (e.shiftKey && document.activeElement === a) {
            e.preventDefault();
            z.focus();
          } else if (!e.shiftKey && document.activeElement === z) {
            e.preventDefault();
            a.focus();
          }
        }
      };
      document.addEventListener('keydown', key);
      return () => {
        clearTimeout(t);
        document.removeEventListener('keydown', key);
        prev && prev.focus && prev.focus();
      };
    }, [open]);
  }
  function portal(node, inline) {
    return inline ? node : ReactDOM.createPortal(node, document.body);
  }

  /* composites.tsx */
  function Dialog({
    trigger,
    title,
    description,
    children,
    footer,
    open,
    defaultOpen,
    onOpenChange,
    initialFocusRef,
    closeOnOutside = false,
    closeLabel = '닫기',
    size = 'md',
    inline = false
  }) {
    const [inner, setInner] = React.useState(!!defaultOpen);
    const isOpen = inline || (open !== undefined ? open : inner);
    const set = v => {
      if (open === undefined) setInner(v);
      onOpenChange && onOpenChange(v);
    };
    const ref = React.useRef(null),
      tid = React.useId();
    useModalFocus(isOpen && !inline, ref, initialFocusRef, () => set(false));
    const content = h(React.Fragment, null, h('div', {
      className: 'zem-dialog-overlay',
      onClick: () => {
        if (closeOnOutside) set(false);
      }
    }), h('div', {
      ref,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': tid,
      className: `zem-dialog zem-dialog--${size}`
    }, h('div', {
      className: 'zem-dialog-heading'
    }, h('h2', {
      id: tid,
      className: 'zem-dialog-title'
    }, title), h('button', {
      type: 'button',
      className: 'zem-dialog-close',
      'aria-label': closeLabel,
      onClick: () => set(false)
    }, h(Glyph, {
      name: 'eva:close-fill'
    }))), description && h('p', {
      className: 'zem-dialog-description'
    }, description), h('div', {
      className: 'zem-dialog-body'
    }, children), footer && h('div', {
      className: 'zem-dialog-footer'
    }, footer)));
    return h(React.Fragment, null, trigger && !inline && React.cloneElement(trigger, {
      onClick: () => set(true),
      'aria-haspopup': 'dialog'
    }), isOpen && portal(content, inline));
  }
  function Menu({
    trigger,
    label,
    items,
    align = 'end',
    open,
    onOpenChange,
    inline = false,
    highlightedId
  }) {
    const [inner, setInner] = React.useState(false);
    const isOpen = inline || (open !== undefined ? open : inner);
    const set = v => {
      if (open === undefined) setInner(v);
      onOpenChange && onOpenChange(v);
    };
    const [hi, setHi] = React.useState(highlightedId || null);
    const listRef = React.useRef(null),
      trig = React.useRef(null),
      anchor = React.useRef(null);
    const [pos, setPos] = React.useState(null);
    React.useLayoutEffect(() => {
      if (!isOpen || inline || !anchor.current) return;
      const place = () => {
        const r = anchor.current.getBoundingClientRect(),
          vw = document.documentElement.clientWidth;
        const st = {
          position: 'fixed',
          top: r.bottom + 6
        };
        if (align === 'start') st.left = Math.max(16, r.left);else if (align === 'center') {
          st.left = r.left + r.width / 2;
          st.transform = 'translateX(-50%)';
        } else st.right = Math.max(16, vw - r.right);
        setPos(st);
      };
      place();
      window.addEventListener('scroll', place, true);
      window.addEventListener('resize', place);
      return () => {
        window.removeEventListener('scroll', place, true);
        window.removeEventListener('resize', place);
      };
    }, [isOpen]);
    const enabled = items.filter(i => !i.disabled);
    React.useEffect(() => {
      if (isOpen && !inline) {
        setHi(enabled[0] && enabled[0].id);
        const out = e => {
          if (listRef.current && !listRef.current.contains(e.target) && anchor.current && !anchor.current.contains(e.target)) set(false);
        };
        document.addEventListener('mousedown', out);
        return () => document.removeEventListener('mousedown', out);
      }
    }, [isOpen]);
    React.useEffect(() => {
      if (isOpen && !inline && hi && listRef.current) {
        const el = listRef.current.querySelector(`[data-id="${hi}"]`);
        el && el.focus();
      }
    }, [hi, isOpen]);
    const key = e => {
      const idx = enabled.findIndex(i => i.id === hi);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHi(enabled[(idx + 1) % enabled.length].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHi(enabled[(idx - 1 + enabled.length) % enabled.length].id);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setHi(enabled[0].id);
      } else if (e.key === 'End') {
        e.preventDefault();
        setHi(enabled[enabled.length - 1].id);
      } else if (e.key === 'Escape' || e.key === 'Tab') {
        set(false);
        if (e.key === 'Escape' && trig.current) trig.current.focus();
      }
    };
    const list = h('div', {
      ref: listRef,
      style: inline ? undefined : pos || {
        position: 'fixed',
        visibility: 'hidden'
      },
      role: 'menu',
      'aria-label': label,
      className: cx('zem-menu', inline && 'zem-menu--inline'),
      'data-align': align,
      onKeyDown: key
    }, items.map(item => h(React.Fragment, {
      key: item.id
    }, item.separatorBefore && h('div', {
      role: 'separator',
      className: 'zem-menu-separator'
    }), h('div', {
      role: 'menuitem',
      tabIndex: -1,
      'data-id': item.id,
      className: 'zem-menu-item',
      'data-danger': item.danger || undefined,
      'data-disabled': item.disabled || undefined,
      'aria-disabled': item.disabled || undefined,
      'data-highlighted': hi === item.id && !item.disabled ? '' : undefined,
      onMouseEnter: () => !item.disabled && setHi(item.id),
      onClick: () => {
        if (item.disabled) return;
        item.onSelect && item.onSelect();
        set(false);
      }
    }, item.label))));
    if (inline) return list;
    return h('span', {
      className: 'zem-menu-anchor',
      ref: anchor
    }, React.cloneElement(trigger, {
      ref: trig,
      'aria-haspopup': 'menu',
      'aria-expanded': isOpen,
      onClick: () => set(!isOpen),
      onKeyDown: e => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          set(true);
        }
      }
    }), isOpen && ReactDOM.createPortal(list, document.body));
  }

  /* table.tsx */
  const integer = (v, fb, min = 1) => Number.isFinite(v) ? Math.max(min, Math.floor(v)) : fb;
  function Pagination({
    page,
    pageCount,
    onPageChange,
    disabled = false,
    label = '페이지 탐색',
    previewState
  }) {
    const count = integer(pageCount, 1),
      current = Math.min(integer(page, 1), count);
    return h('nav', {
      className: 'zem-pagination',
      'aria-label': label,
      'data-preview-state': previewState
    }, h('button', {
      type: 'button',
      disabled: disabled || current === 1,
      onClick: () => onPageChange(1),
      'aria-label': '첫 페이지'
    }, '«'), h('button', {
      type: 'button',
      disabled: disabled || current === 1,
      onClick: () => onPageChange(current - 1)
    }, '이전'), h('span', {
      'aria-current': 'page'
    }, `${current} / ${count} 페이지`), h('button', {
      type: 'button',
      disabled: disabled || current === count,
      onClick: () => onPageChange(current + 1)
    }, '다음'), h('button', {
      type: 'button',
      disabled: disabled || current === count,
      onClick: () => onPageChange(count),
      'aria-label': '마지막 페이지'
    }, '»'));
  }
  const collator = new Intl.Collator('ko', {
    numeric: true,
    sensitivity: 'base'
  });
  function Table({
    caption,
    columns,
    rows,
    rowKey,
    sort,
    defaultSort,
    onSortChange,
    loading = false,
    error,
    emptyMessage = '표시할 항목이 없습니다.',
    loadingMessage = '데이터를 불러오는 중입니다.',
    minWidth = 560,
    pagination,
    virtualization
  }) {
    const [iSort, setISort] = React.useState(defaultSort),
      [iPage, setIPage] = React.useState(1),
      [scrollTop, setScrollTop] = React.useState(0);
    const viewport = React.useRef(null);
    const activeSort = sort === undefined ? iSort : sort;
    const sorted = React.useMemo(() => {
      const c = columns.find(c => activeSort && c.id === activeSort.columnId);
      if (!c || !c.sortValue || !activeSort) return rows;
      return [...rows].sort((a, b) => {
        const x = c.sortValue(a),
          y = c.sortValue(b);
        if (x == null) return y == null ? 0 : 1;
        if (y == null) return -1;
        const n = typeof x === 'number' && typeof y === 'number' ? x - y : collator.compare(String(x), String(y));
        return (activeSort.direction === 'ascending' ? 1 : -1) * (Number.isNaN(n) ? 0 : n);
      });
    }, [columns, rows, activeSort]);
    const size = integer(pagination && pagination.pageSize != null ? pagination.pageSize : rows.length, 10),
      pageCount = Math.max(1, Math.ceil(rows.length / size));
    const page = pagination ? Math.min(integer(pagination.page != null ? pagination.page : iPage, 1), pageCount) : 1,
      startIndex = pagination ? (page - 1) * size : 0;
    const visibleRows = pagination ? sorted.slice(startIndex, startIndex + size) : sorted;
    const virtual = !!virtualization && !pagination,
      height = integer(virtualization && virtualization.height || 400, 400, 160),
      rowHeight = integer(virtualization && virtualization.rowHeight || 56, 56, 40),
      overscan = Math.min(50, integer(virtualization && virtualization.overscan != null ? virtualization.overscan : 4, 4, 0));
    const changePage = n => {
      if (!pagination || pagination.page === undefined) setIPage(n);
      pagination && pagination.onPageChange && pagination.onPageChange(n);
      if (viewport.current) viewport.current.scrollTop = 0;
    };
    const bodyOffset = 96;
    const first = virtual ? Math.max(0, Math.min(Math.max(0, visibleRows.length - 1), Math.floor(Math.max(0, scrollTop - bodyOffset) / rowHeight) - overscan)) : 0;
    const end = virtual ? Math.min(visibleRows.length, first + Math.ceil(height / rowHeight) + 2 * overscan + 1) : visibleRows.length;
    const state = loading ? loadingMessage : error || (!rows.length ? emptyMessage : undefined);
    const cells = [];
    let cursor = 0;
    const spacer = (a, b) => {
      if (b > a) cells.push(h('tr', {
        key: 'sp' + a,
        'aria-hidden': 'true',
        className: 'zem-table-spacer'
      }, h('td', {
        colSpan: Math.max(1, columns.length),
        style: {
          height: (b - a) * rowHeight
        }
      })));
    };
    for (let i = first; i < end; i++) {
      const row = visibleRows[i];
      if (virtual) spacer(cursor, i);
      cells.push(h('tr', {
        key: 'r' + rowKey(row),
        'aria-rowindex': virtual || pagination ? startIndex + i + 2 : undefined
      }, columns.map(c => h('td', {
        key: c.id,
        style: {
          textAlign: c.align || 'left'
        }
      }, virtual ? h('div', {
        className: 'zem-table-virtual-cell',
        style: {
          height: rowHeight
        }
      }, c.cell(row)) : c.cell(row)))));
      cursor = i + 1;
    }
    if (virtual) spacer(cursor, visibleRows.length);
    const toggle = id => {
      const next = {
        columnId: id,
        direction: activeSort && activeSort.columnId === id && activeSort.direction === 'ascending' ? 'descending' : 'ascending'
      };
      if (sort === undefined) setISort(next);
      onSortChange && onSortChange(next);
      if (pagination) changePage(1);
    };
    const range = rows.length ? `${startIndex + 1}–${startIndex + visibleRows.length} / ${rows.length}개` : '0개';
    return h('div', {
      className: 'zem-table-root'
    }, h('div', {
      ref: viewport,
      className: cx('zem-table-scroll', virtual && 'zem-table-virtual'),
      style: virtual ? {
        maxHeight: height
      } : undefined,
      role: 'region',
      'aria-label': `${caption} · 스크롤`,
      tabIndex: 0,
      onScroll: virtual ? e => setScrollTop(e.currentTarget.scrollTop) : undefined
    }, h('table', {
      className: 'zem-table',
      style: {
        minWidth
      },
      'aria-busy': loading || undefined,
      'aria-rowcount': !state && (virtual || pagination) ? rows.length + 1 : undefined
    }, h('caption', null, caption), h('thead', null, h('tr', null, columns.map(c => h('th', {
      key: c.id,
      scope: 'col',
      style: {
        textAlign: c.align || 'left'
      },
      'aria-sort': c.sortValue && activeSort && activeSort.columnId === c.id ? activeSort.direction : undefined
    }, c.sortValue ? h('button', {
      type: 'button',
      disabled: loading || !!error,
      className: 'zem-table-sort',
      onClick: () => toggle(c.id)
    }, c.header, h('span', {
      'aria-hidden': 'true'
    }, activeSort && activeSort.columnId === c.id ? activeSort.direction === 'ascending' ? '↑' : '↓' : '↕'), h('span', {
      className: 'zem-sr-only'
    }, ' 정렬')) : c.header)))), h('tbody', null, state ? h('tr', null, h('td', {
      className: 'zem-table-state',
      colSpan: Math.max(columns.length, 1)
    }, state)) : cells))), pagination && h('div', {
      className: 'zem-table-paging'
    }, h('span', null, range), h(Pagination, {
      page,
      pageCount,
      onPageChange: changePage,
      disabled: loading || !!error,
      label: `${caption} 페이지 탐색`
    })), h('p', {
      className: 'zem-sr-only',
      role: 'status'
    }, state || (pagination ? `${page} / ${pageCount} 페이지, ${range}` : `${rows.length}개 항목`)));
  }

  /* toast.tsx */
  const labels = {
    success: '성공',
    warning: '주의',
    error: '오류',
    info: '안내'
  };
  const toneIcons = {
    success: 'eva:checkmark-circle-2-fill',
    warning: 'eva:alert-triangle-fill',
    error: 'eva:alert-circle-outline',
    info: 'eva:info-fill'
  };
  const durationValue = n => n === 0 ? Infinity : Number.isFinite(n) && n > 0 ? Math.max(1000, n) : 5000;
  function ToastView({
    title,
    description,
    tone = 'info',
    action,
    onClose,
    previewState
  }) {
    return h('li', {
      className: `zem-toast zem-toast--${tone}`,
      role: 'status'
    }, h('span', {
      className: 'zem-toast-icon'
    }, h(Glyph, {
      name: toneIcons[tone]
    })), h('div', {
      className: 'zem-toast-content'
    }, h('div', {
      className: 'zem-toast-title'
    }, h('span', {
      className: 'zem-sr-only'
    }, labels[tone] + ': '), title), description && h('div', {
      className: 'zem-toast-description'
    }, description), action && h('button', {
      type: 'button',
      className: 'zem-toast-action',
      'aria-label': action.altText,
      onClick: action.onClick
    }, action.label)), h('button', {
      type: 'button',
      'aria-label': `${title} 알림 닫기`,
      className: 'zem-toast-close',
      'data-preview-state': previewState,
      onClick: onClose
    }, h(Glyph, {
      name: 'eva:close-fill',
      size: 18
    })));
  }
  const ToastCtx = React.createContext(null);
  function ToastProvider({
    children,
    duration = 5000,
    label = '알림',
    container
  }) {
    const [entries, setEntries] = React.useState([]);
    const cur = React.useRef([]),
      counter = React.useRef(0),
      timers = React.useRef({});
    const commit = n => {
      cur.current = n;
      setEntries(n);
    };
    const dismiss = React.useCallback(id => {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
      commit(cur.current.filter(e => e.id !== id));
    }, []);
    const notify = React.useCallback(o => {
      if (!o.title || !o.title.trim()) return undefined;
      if (o.id && cur.current.some(e => e.id === o.id)) return o.id;
      if (cur.current.length >= 50) return undefined;
      const id = o.id || `toast-${++counter.current}`;
      commit([...cur.current, {
        ...o,
        id
      }]);
      return id;
    }, []);
    const dismissAll = React.useCallback(() => {
      Object.values(timers.current).forEach(clearTimeout);
      timers.current = {};
      commit([]);
    }, []);
    const visible = entries.slice(0, 3);
    React.useEffect(() => {
      visible.forEach(e => {
        if (timers.current[e.id]) return;
        const d = durationValue(e.duration != null ? e.duration : duration);
        if (d !== Infinity) timers.current[e.id] = setTimeout(() => dismiss(e.id), d);
      });
    });
    const api = React.useMemo(() => ({
      notify,
      dismiss,
      dismissAll
    }), []);
    const vp = h('ol', {
      className: 'zem-toast-viewport',
      'aria-label': `${label} (F8)`,
      tabIndex: -1
    }, visible.map(e => h(ToastView, {
      key: e.id,
      ...e,
      onClose: () => dismiss(e.id)
    })));
    return h(ToastCtx.Provider, {
      value: api
    }, children, container ? vp : ReactDOM.createPortal(vp, document.body));
  }
  function useToast() {
    const c = React.useContext(ToastCtx);
    if (!c) throw new Error('useToast must be used inside ToastProvider');
    return c;
  }

  /* alert-dialog.tsx */
  function AlertDialog({
    trigger,
    title,
    description,
    confirmLabel = '확인',
    cancelLabel = '취소',
    danger = false,
    onConfirm,
    errorMessage = '작업을 완료하지 못했습니다. 다시 시도해 주세요.',
    inline = false,
    previewState
  }) {
    const [open, setOpen] = React.useState(false),
      [pending, setPending] = React.useState(previewState === 'pending'),
      [error, setError] = React.useState(previewState === 'error');
    const busy = React.useRef(false),
      cancel = React.useRef(null),
      ref = React.useRef(null),
      tid = React.useId(),
      did = React.useId();
    const isOpen = inline || open;
    useModalFocus(isOpen && !inline, ref, cancel, () => {
      setError(false);
      setOpen(false);
    }, () => busy.current);
    async function confirm() {
      if (busy.current || inline) return;
      busy.current = true;
      setPending(true);
      setError(false);
      try {
        await onConfirm();
        setOpen(false);
      } catch (e) {
        setError(true);
        requestAnimationFrame(() => cancel.current && cancel.current.focus());
      } finally {
        busy.current = false;
        setPending(false);
      }
    }
    const content = h(React.Fragment, null, h('div', {
      className: 'zem-dialog-overlay'
    }), h('div', {
      ref,
      role: 'alertdialog',
      'aria-modal': 'true',
      'aria-labelledby': tid,
      'aria-describedby': did,
      'aria-busy': pending || undefined,
      className: 'zem-dialog zem-dialog--sm'
    }, h('h2', {
      id: tid,
      className: 'zem-dialog-title'
    }, title), h('p', {
      id: did,
      className: 'zem-dialog-description'
    }, description), error && h('p', {
      role: 'alert',
      className: 'zem-error'
    }, errorMessage), pending && h('p', {
      role: 'status',
      className: 'zem-alert-status'
    }, '처리 중입니다.'), h('div', {
      className: 'zem-dialog-footer'
    }, h(Button, {
      ref: cancel,
      variant: 'secondary',
      disabled: pending,
      onClick: () => {
        if (!busy.current) {
          setError(false);
          setOpen(false);
        }
      }
    }, cancelLabel), h(Button, {
      variant: danger ? 'danger' : 'primary',
      loading: pending,
      onClick: e => {
        e.preventDefault();
        confirm();
      }
    }, confirmLabel))));
    return h(React.Fragment, null, trigger && !inline && React.cloneElement(trigger, {
      onClick: () => setOpen(true),
      'aria-haspopup': 'dialog'
    }), isOpen && portal(content, inline));
  }
  window.ZEM = {
    Icon,
    Button,
    TextField,
    Textarea,
    Select,
    Checkbox,
    Switch,
    Badge,
    Card,
    Skeleton,
    Dialog,
    Menu,
    Table,
    Pagination,
    ToastProvider,
    useToast,
    AlertDialog,
    preview: {
      ToastView,
      Glyph
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/lib/zem-ui.js", error: String((e && e.message) || e) }); }

// zem/ui_kits/kits.js
try { (() => {
/* IAK KIDS_V1 · 3 UI kits (parent / schedule / activity). Kids/Friendly samples, fictional data. */
(function () {
  const h = React.createElement,
    F = React.Fragment;
  const {
    Icon,
    Button,
    TextField,
    Select,
    Checkbox,
    Switch,
    Badge,
    Card,
    Dialog,
    Table,
    ToastProvider,
    useToast
  } = ZEM;
  const {
    Shell,
    Row,
    Done,
    Empty,
    Bars,
    Legend,
    miss
  } = ZEM_SHELL;
  const q = new URLSearchParams(location.search);
  /* ---------- parent ---------- */
  function Parent() {
    const t = useToast();
    const p = q.get('p') || 'dashboard';
    const [req, setReq] = React.useState([{
      id: 1,
      kid: '민서',
      what: '게임 30분 더 하기',
      why: '숙제 다 했어요'
    }, {
      id: 2,
      kid: '도윤',
      what: '영상 앱 사용',
      why: '학교 과제 영상 보기'
    }, {
      id: 3,
      kid: '민서',
      what: '친구 집에서 저녁까지 놀기 — 오후 7시 전에 귀가할게요',
      why: null
    }]);
    const act = (r, ok) => {
      setReq(req.filter(x => x.id !== r.id));
      t.notify({
        tone: ok ? 'success' : 'info',
        title: ok ? `${r.kid}의 요청을 수락했어요` : '요청을 거절했어요',
        description: r.what
      });
    };
    const [sw, setSw] = React.useState({
      night: true,
      loc: true,
      app: false
    });
    if (p === 'settings') return h(Shell, {
      active: 'settings',
      title: '보호 설정',
      hero: '아이별 보호 규칙',
      sub: '민서 · 도윤'
    }, h(Card, {
      title: '사용 규칙'
    }, h('div', {
      className: 'stack g16'
    }, h(Switch, {
      label: '밤 10시 이후 잠금',
      checked: sw.night,
      onChange: e => setSw({
        ...sw,
        night: e.target.checked
      })
    }), h(Switch, {
      label: '등·하교 위치 알림',
      checked: sw.loc,
      onChange: e => setSw({
        ...sw,
        loc: e.target.checked
      })
    }), h(Switch, {
      label: '새 앱 설치 시 보호자 승인 받기',
      checked: sw.app,
      onChange: e => setSw({
        ...sw,
        app: e.target.checked
      })
    }))), h(Card, {
      title: '하루 사용 목표'
    }, h(Select, {
      label: '민서',
      defaultValue: '90'
    }, h('option', {
      value: '60'
    }, '1시간'), h('option', {
      value: '90'
    }, '1시간 30분'), h('option', {
      value: '120'
    }, '2시간')), h('div', {
      className: 'row',
      style: {
        justifyContent: 'flex-end'
      }
    }, h(Button, {
      onClick: () => t.notify({
        tone: 'success',
        title: '설정을 저장했어요'
      })
    }, '저장'))));
    return h(Shell, {
      active: 'dashboard',
      title: '부모 홈',
      hero: req.length ? `확인할 요청 ${req.length}개` : '모든 요청을 확인했어요',
      sub: '오늘 오후 3:12 기준'
    }, h('div', {
      className: 'zs-grid'
    }, ...[['민서', '1시간 28분', 62, 'success', '목표 이내'], ['도윤', '2시간 10분', 100, 'warning', '목표 초과']].map(([n, u, v, tone, b]) => h('div', {
      key: n,
      className: 't4 d6'
    }, h(Card, null, h('div', {
      className: 'row between'
    }, h('div', {
      className: 'row'
    }, h('span', {
      className: 'ava'
    }, n[0]), h('b', null, n)), h(Badge, {
      tone
    }, b)), h('div', {
      className: 'kpi'
    }, u), h('div', {
      className: 'prog',
      role: 'progressbar',
      'aria-valuenow': v,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-label': n + ' 사용 목표 대비'
    }, h('i', {
      style: {
        width: v + '%'
      }
    }))))), h('div', {
      className: 't8 d12'
    }, h(Card, {
      title: '자녀 요청'
    }, req.length ? h('ul', {
      className: 'rows'
    }, req.map(r => Row(r.kid === '민서' ? 'cyan' : 'violet', 'solar:chat-round-line-bold', r.what, r.kid + ' · ' + (r.why || '사유 없음'), h('div', {
      className: 'row',
      style: {
        flexWrap: 'nowrap'
      }
    }, h(Button, {
      size: 'sm',
      variant: 'secondary',
      onClick: () => act(r, false)
    }, '거절'), h(Button, {
      size: 'sm',
      onClick: () => act(r, true)
    }, '수락'))))) : Empty('eva:checkmark-circle-2-fill', '새 요청이 없어요', '아이가 요청을 보내면 이곳에 바로 보여요.')))));
  }
  /* ---------- schedule ---------- */
  const DAYS = ['월', '화', '수', '목', '금'],
    SLOTS = ['1시', '3시', '5시'];
  const TONE = {
    학원: 'var(--zem-cyan-100)',
    숙제: 'var(--zem-lime-100)',
    놀이: 'var(--zem-mint-100)',
    운동: 'var(--zem-violet-100)'
  };
  function Schedule() {
    const t = useToast();
    const [items, setItems] = React.useState([{
      d: 0,
      s: 0,
      t: '수학 학원',
      k: '학원'
    }, {
      d: 1,
      s: 1,
      t: '줄넘기',
      k: '운동'
    }, {
      d: 2,
      s: 0,
      t: '영어 학원',
      k: '학원'
    }, {
      d: 2,
      s: 2,
      t: '독서 20분',
      k: '숙제'
    }, {
      d: 3,
      s: 1,
      t: '놀이터',
      k: '놀이'
    }, {
      d: 4,
      s: 2,
      t: '피아노',
      k: '학원'
    }]);
    const [open, setOpen] = React.useState(false),
      [name, setName] = React.useState(''),
      [err, setErr] = React.useState(''),
      [form, setForm] = React.useState({
        d: '0',
        s: '1',
        k: '숙제'
      });
    const save = () => {
      if (!name.trim()) {
        setErr('일정 이름을 입력해 주세요.');
        return;
      }
      setItems([...items, {
        d: +form.d,
        s: +form.s,
        t: name.trim(),
        k: form.k
      }]);
      setOpen(false);
      setName('');
      setErr('');
      t.notify({
        tone: 'success',
        title: '일정을 추가했어요',
        description: name.trim()
      });
    };
    const cell = (d, s) => items.filter(i => i.d === d && i.s === s);
    return h(Shell, {
      active: 'builder',
      title: '일정',
      hero: '이번 주 시간표',
      sub: `${items.length}개 일정 · 9월 넷째 주`
    }, h(Card, {
      title: '주간 시간표',
      footer: Legend(Object.entries(TONE).map(([k, c]) => [c, k]))
    }, h('div', {
      className: 'tt',
      role: 'table',
      'aria-label': '주간 시간표'
    }, h('div', {
      className: 'h'
    }), DAYS.map(d => h('div', {
      key: d,
      className: 'h'
    }, d)), SLOTS.map((sl, si) => h(F, {
      key: sl
    }, h('div', {
      className: 'h',
      style: {
        alignSelf: 'center'
      }
    }, sl), DAYS.map((d, di) => h('div', {
      key: d,
      style: {
        background: cell(di, si).length ? TONE[cell(di, si)[0].k] : 'var(--iak-kids-background-canvas)',
        fontWeight: 700,
        overflowWrap: 'anywhere'
      }
    }, cell(di, si).map(i => i.t).join(' · ')))))), h('div', {
      className: 'row',
      style: {
        justifyContent: 'flex-end'
      }
    }, h(Dialog, {
      open,
      onOpenChange: v => {
        setOpen(v);
        if (!v) setErr('');
      },
      trigger: h(Button, null, h(Icon, {
        name: 'eva:plus-fill',
        size: 18
      }), '일정 추가'),
      title: '일정 추가',
      description: '요일과 시간을 고르면 시간표에 바로 들어가요.',
      footer: h(F, null, h(Button, {
        variant: 'secondary',
        onClick: () => setOpen(false)
      }, '취소'), h(Button, {
        onClick: save
      }, '추가'))
    }, h('div', {
      className: 'stack'
    }, h(TextField, {
      label: '일정 이름',
      value: name,
      onChange: e => {
        setName(e.target.value);
        setErr('');
      },
      error: err || undefined,
      placeholder: '예: 미술 학원'
    }), h('div', {
      className: 'row',
      style: {
        flexWrap: 'nowrap'
      }
    }, h(Select, {
      label: '요일',
      value: form.d,
      onChange: e => setForm({
        ...form,
        d: e.target.value
      })
    }, DAYS.map((d, i) => h('option', {
      key: d,
      value: i
    }, d))), h(Select, {
      label: '시간',
      value: form.s,
      onChange: e => setForm({
        ...form,
        s: e.target.value
      })
    }, SLOTS.map((s, i) => h('option', {
      key: s,
      value: i
    }, s)))), h(Select, {
      label: '종류',
      value: form.k,
      onChange: e => setForm({
        ...form,
        k: e.target.value
      })
    }, Object.keys(TONE).map(k => h('option', {
      key: k
    }, k))))))), h(Card, {
      title: '오늘'
    }, h('ul', {
      className: 'rows'
    }, cell(2, 0).concat(cell(2, 2)).map((i, n) => Row(n ? 'lime' : 'cyan', n ? 'solar:book-bold' : 'eva:calendar-fill', i.t, SLOTS[i.s] + ' · ' + i.k, Done(n ? 'todo' : 'done'))))));
  }
  /* ---------- activity (kid) ---------- */
  function Activity() {
    const t = useToast();
    const p = q.get('p') || 'dashboard';
    const [m, setM] = React.useState([{
      id: 1,
      n: '줄넘기 100번',
      pt: 50,
      done: true
    }, {
      id: 2,
      n: '영어 단어 20개 외우기',
      pt: 100,
      done: false
    }, {
      id: 3,
      n: '방 정리하고 사진 보내기',
      pt: 50,
      done: false
    }, {
      id: 4,
      n: '가족에게 오늘 있었던 일 이야기하기',
      pt: null,
      done: false
    }]);
    const done = m.filter(x => x.done).length,
      pts = m.filter(x => x.done).reduce((a, x) => a + (x.pt || 0), 0);
    const toggle = x => {
      setM(m.map(y => y.id === x.id ? {
        ...y,
        done: !y.done
      } : y));
      if (!x.done) t.notify({
        tone: 'success',
        title: '미션 완료! 보호자 확인을 기다려요',
        description: x.n
      });
    };
    if (p === 'analytics') return h(Shell, {
      active: 'analytics',
      title: '나의 기록',
      hero: '이번 주 잘하고 있어요',
      sub: '미션 12개 완료 · 600P'
    }, h(Card, {
      title: '요일별 미션 완료',
      footer: Legend([['var(--iak-kids-primary-default)', '완료 개수']])
    }, h(Bars, {
      data: [2, 1, 3, 2, 1, 2, 1],
      labels: ['월', '화', '수', '목', '금', '토', '일'],
      a11y: '요일별 미션 완료 개수, 수요일 3개 최고'
    })));
    return h(Shell, {
      active: 'dashboard',
      title: '오늘의 미션',
      hero: `${m.length}개 중 ${done}개 완료`,
      sub: `오늘 모은 포인트 ${pts}P`
    }, h(Card, null, h('div', {
      className: 'row between'
    }, h('b', {
      style: {
        font: 'var(--zem-text-title)'
      }
    }, '진행률'), h('b', {
      className: 'num'
    }, Math.round(done / m.length * 100) + '%')), h('div', {
      className: 'prog',
      role: 'progressbar',
      'aria-valuenow': Math.round(done / m.length * 100),
      'aria-valuemin': 0,
      'aria-valuemax': 100,
      'aria-label': '미션 진행률'
    }, h('i', {
      style: {
        width: done / m.length * 100 + '%',
        transition: 'width var(--zem-motion-slow) var(--zem-ease)'
      }
    }))), h(Card, {
      title: '미션'
    }, h('ul', {
      className: 'rows'
    }, m.map(x => h('li', {
      key: x.id
    }, h('span', {
      className: 'tile ' + (x.done ? 'mint' : 'lime')
    }, h(Icon, {
      name: 'solar:target-bold',
      size: 20
    })), h('div', {
      className: 't'
    }, h('b', null, x.n), h('span', null, x.pt == null ? miss(null, '포인트 미정') : x.pt + 'P')), h(Button, {
      size: 'sm',
      variant: x.done ? 'secondary' : 'primary',
      'aria-pressed': x.done,
      onClick: () => toggle(x)
    }, x.done ? '완료됨' : '완료하기'))))));
  }
  const KITS = {
    parent: Parent,
    schedule: Schedule,
    activity: Activity
  };
  window.ZEM_mountKit = function (el, k) {
    ReactDOM.createRoot(el).render(h(ToastProvider, null, h(KITS[k] || Parent)));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "zem/ui_kits/kits.js", error: String((e && e.message) || e) }); }

__ds_ns.AlertDialog = __ds_scope.AlertDialog;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastProvider = __ds_scope.ToastProvider;

__ds_ns.ChildSwitcher = __ds_scope.ChildSwitcher;

__ds_ns.DailyTimeline = __ds_scope.DailyTimeline;

__ds_ns.FocusSession = __ds_scope.FocusSession;

__ds_ns.GoalComposer = __ds_scope.GoalComposer;

__ds_ns.MissionFeedback = __ds_scope.MissionFeedback;

})();
