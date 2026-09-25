/* KOSAF card kit — shared chrome for component cards (plain JS, no JSX). */
(function () {
  var h = React.createElement;
  var PROV = {
    master: { t: 'Figma master · 218:570', bg: '#EBFFE9', fg: '#059B00' },
    source: { t: 'Source-derived · 1:85779', bg: '#FFFFFF', fg: '#0047ED' },
    extension: { t: 'KOSAF extension', bg: '#F7F7F7', fg: '#707070' },
  };
  var mono = { fontFamily: 'ui-monospace,Menlo,monospace', fontSize: 11, lineHeight: '16px' };
  function KCard(p) {
    var m = p.meta, pv = PROV[m.prov] || PROV.source;
    return h('div', { style: { fontFamily: 'var(--kosaf-font)', color: '#333', padding: '14px 18px 18px' } },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' } },
        h('span', { style: { fontSize: 16, fontWeight: 700 } }, m.name),
        h('span', { style: { fontSize: 11, fontWeight: 500, padding: '1px 8px', borderRadius: 3, border: '1px solid ' + pv.fg, background: pv.bg, color: pv.fg } }, pv.t),
        m.node ? h('span', { style: Object.assign({ color: '#888' }, mono) }, m.node) : null),
      h('div', { style: { fontSize: 13, lineHeight: '19px', color: '#707070', marginTop: 4 } }, m.use),
      h('div', { style: { display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 } },
        (m.props || []).map(function (x) { return h('code', { key: x, style: Object.assign({ padding: '1px 6px', background: '#F7F7F7', border: '1px solid #EAEAEA', borderRadius: 3, color: '#444' }, mono) }, x); })),
      m.states ? h('div', { style: { fontSize: 12, marginTop: 6, color: '#707070' } }, h('b', { style: { color: '#333', fontWeight: 500 } }, 'States '), m.states) : null,
      h('div', { style: { borderTop: '1px solid #DDDDDD', marginTop: 12, paddingTop: 14, display: 'flex', flexDirection: 'column', gap: 14 } }, p.children));
  }
  function KSec(p) {
    return h('section', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
      h('div', { style: { fontSize: 11, fontWeight: 500, letterSpacing: '.02em', color: '#888' } }, p.label),
      h('div', { style: Object.assign({ display: 'flex', gap: p.gap == null ? 12 : p.gap, flexWrap: 'wrap', alignItems: p.align || 'center' }, p.style) }, p.children));
  }
  function KScale(p) {
    var ref = React.useRef(null), st = React.useState(0), hh = st[0], setH = st[1];
    React.useLayoutEffect(function () {
      var el = ref.current; if (!el) return;
      var f = function () { setH(el.offsetHeight * p.s); }; f();
      var ro = new ResizeObserver(f); ro.observe(el); return function () { ro.disconnect(); };
    }, [p.s]);
    return h('div', { style: { width: p.w * p.s, height: hh, overflow: 'hidden', border: p.frame ? '1px solid #EAEAEA' : 0 } },
      h('div', { ref: ref, style: { width: p.w, transform: 'scale(' + p.s + ')', transformOrigin: '0 0' } }, p.children));
  }
  window.KCard = KCard; window.KSec = KSec; window.KScale = KScale;
})();
