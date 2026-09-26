// IAK KIDS_V1 · Little Everyday v2.2 — template loader. Consuming project: point `base` at the bound _ds/<folder> tree.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = base + '/' + p; document.head.appendChild(l);
  }
  // Bundle components are thin wrappers over window.ZEM → icons.js + zem-ui.js must load first, in order.
  for (const p of ['zem/lib/icons.js', 'zem/lib/zem-ui.js', '_ds_bundle.js']) {
    const s = document.createElement('script'); s.src = base + '/' + p; s.async = false;
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — fix the base path in ds-base.js');
    document.head.appendChild(s);
  }
})();
