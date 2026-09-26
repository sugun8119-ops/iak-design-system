// IAK KIDS_V1 · Little Everyday v2.3 — template loader. Consuming project: point `base` at the bound _ds/<folder> tree.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = base + '/' + p; document.head.appendChild(l);
  }
  // Bundle components are thin wrappers over window.ZEM → icons.js + zem-ui.js must load first, in order. zem-patterns.js (v2.3 patterns) loads last and fills the namespace if the bundle predates v2.3.
  for (const p of ['zem/lib/icons.js', 'zem/lib/zem-ui.js', '_ds_bundle.js', 'zem/lib/zem-patterns.js']) {
    const s = document.createElement('script'); s.src = base + '/' + p; s.async = false;
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — fix the base path in ds-base.js');
    document.head.appendChild(s);
  }
})();
