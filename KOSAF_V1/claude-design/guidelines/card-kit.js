/* KOSAF card kit — shared chrome for component cards (plain JS, no JSX).
   Layout: compact Korean meta header → showcase sections (PC 실제 크기 / 전체 축소 / Mobile) → collapsible API notes. */
(function () {
  var h = React.createElement;
  var PROV = {
    master: { t: 'Figma 마스터', fg: '#059B00', bg: '#EBFFE9' },
    source: { t: '원본 파생', fg: '#0047ED', bg: '#FFFFFF' },
    extension: { t: 'KOSAF 확장', fg: '#707070', bg: '#F7F7F7' },
  };
  var mono = { fontFamily: 'ui-monospace,Menlo,monospace', fontSize: 11, lineHeight: '16px' };
  function KCard(p) {
    var m = p.meta, pv = PROV[m.prov] || PROV.source;
    return h('div', { style: { fontFamily: 'var(--kosaf-font)', color: '#333', padding: '14px 20px 16px', boxSizing: 'border-box' } },
      h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' } },
        h('span', { style: { fontSize: 15, fontWeight: 700, lineHeight: '22px' } }, m.ko || m.name),
        h('span', { style: { fontSize: 11, fontWeight: 500, lineHeight: '16px', padding: '0 6px', borderRadius: 3, border: '1px solid ' + pv.fg, background: pv.bg, color: pv.fg } }, pv.t),
        m.node ? h('span', { style: Object.assign({ color: '#888' }, mono) }, m.node) : null),
      h('div', { style: { fontSize: 13, lineHeight: '19px', color: '#707070', marginTop: 2 } }, m.use,
        m.states ? h('span', { style: { color: '#888' } }, ' · 상태: ' + m.states) : null),
      h('div', { style: { marginTop: 12, paddingTop: 14, borderTop: '1px solid #EAEAEA', display: 'flex', flexDirection: 'column', gap: 16 } }, p.children),
      m.props && m.props.length ? h('details', { style: { marginTop: 14, borderTop: '1px solid #EAEAEA', paddingTop: 8, fontSize: 12, color: '#707070' } },
        h('summary', { style: { cursor: 'pointer', fontWeight: 500, color: '#333' } }, 'Props · 사용 노트 (' + m.name + '.prompt.md)'),
        h('div', { style: { display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 6 } },
          m.props.map(function (x) { return h('code', { key: x, style: Object.assign({ padding: '0 5px', background: '#F7F7F7', border: '1px solid #EAEAEA', borderRadius: 3, color: '#444' }, mono) }, x); }))) : null);
  }
  function KSec(p) {
    return h('section', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
      h('div', { style: { fontSize: 11, fontWeight: 500, lineHeight: '16px', color: '#888' } }, p.label),
      h('div', { style: Object.assign({ display: 'flex', gap: p.gap == null ? 12 : p.gap, flexWrap: 'wrap', alignItems: p.align || 'center' }, p.style) }, p.children));
  }
  /* Whole-component overview, scaled. */
  function KScale(p) {
    var ref = React.useRef(null), st = React.useState(0), hh = st[0], setH = st[1];
    React.useLayoutEffect(function () {
      var el = ref.current; if (!el) return;
      var f = function () { setH(el.offsetHeight * p.s); }; f();
      var ro = new ResizeObserver(f); ro.observe(el); return function () { ro.disconnect(); };
    }, [p.s]);
    return h('div', { style: { width: p.w * p.s, height: hh, overflow: 'hidden', flex: '0 0 auto', border: p.frame ? '1px solid #EAEAEA' : 0 } },
      h('div', { ref: ref, style: { width: p.w, transform: 'scale(' + p.s + ')', transformOrigin: '0 0' } }, p.children));
  }
  /* Real-size (1:1) crop of a wide component so text stays readable. x/y = offset into the component. */
  function KCrop(p) {
    return h('div', { style: { width: p.vw || 660, maxWidth: '100%', height: p.h, overflow: 'hidden', position: 'relative', border: '1px solid #EAEAEA', flex: '0 0 auto' } },
      h('div', { style: { position: 'absolute', left: -(p.x || 0), top: -(p.y || 0), width: p.w } }, p.children));
  }
  /* Mobile viewport frame (390 or given width), content not clipped horizontally. */
  function KPhone(p) {
    return h('div', { style: { width: p.w || 390, border: '1px solid #EAEAEA', background: '#fff', flex: '0 0 auto', overflow: 'hidden' } }, p.children);
  }
  window.KCard = KCard; window.KSec = KSec; window.KScale = KScale; window.KCrop = KCrop; window.KPhone = KPhone;
})();
