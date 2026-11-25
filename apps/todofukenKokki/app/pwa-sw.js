// 自動生成（gen_sw.py）。手で直さない。
const VERSION = '040313de1101';
const CACHE = 'pwa-' + VERSION;
const CDN_CACHE = 'pwa-cdn';
const FILES = ["./", "assets/AssetManifest.bin", "assets/AssetManifest.bin.json", "assets/FontManifest.json", "assets/NOTICES", "assets/assets/content/content.json", "assets/assets/content/content_de.json", "assets/assets/content/content_en.json", "assets/assets/content/content_es.json", "assets/assets/content/content_ko.json", "assets/assets/content/content_pt.json", "assets/assets/content/content_zh.json", "assets/assets/flags/ae.png", "assets/assets/flags/ar.png", "assets/assets/flags/at.png", "assets/assets/flags/au.png", "assets/assets/flags/bd.png", "assets/assets/flags/be.png", "assets/assets/flags/br.png", "assets/assets/flags/ca.png", "assets/assets/flags/ch.png", "assets/assets/flags/cl.png", "assets/assets/flags/cn.png", "assets/assets/flags/co.png", "assets/assets/flags/cu.png", "assets/assets/flags/cz.png", "assets/assets/flags/de.png", "assets/assets/flags/dk.png", "assets/assets/flags/eg.png", "assets/assets/flags/es.png", "assets/assets/flags/et.png", "assets/assets/flags/fi.png", "assets/assets/flags/fr.png", "assets/assets/flags/gb.png", "assets/assets/flags/gh.png", "assets/assets/flags/gr.png", "assets/assets/flags/hu.png", "assets/assets/flags/id.png", "assets/assets/flags/ie.png", "assets/assets/flags/in.png", "assets/assets/flags/it.png", "assets/assets/flags/jm.png", "assets/assets/flags/jp.png", "assets/assets/flags/ke.png", "assets/assets/flags/kh.png", "assets/assets/flags/kr.png", "assets/assets/flags/ma.png", "assets/assets/flags/mm.png", "assets/assets/flags/mn.png", "assets/assets/flags/mx.png", "assets/assets/flags/my.png", "assets/assets/flags/ng.png", "assets/assets/flags/nl.png", "assets/assets/flags/no.png", "assets/assets/flags/np.png", "assets/assets/flags/nz.png", "assets/assets/flags/pe.png", "assets/assets/flags/pg.png", "assets/assets/flags/ph.png", "assets/assets/flags/pk.png", "assets/assets/flags/pl.png", "assets/assets/flags/pt.png", "assets/assets/flags/pw.png", "assets/assets/flags/ro.png", "assets/assets/flags/ru.png", "assets/assets/flags/sa.png", "assets/assets/flags/se.png", "assets/assets/flags/sg.png", "assets/assets/flags/sn.png", "assets/assets/flags/td.png", "assets/assets/flags/th.png", "assets/assets/flags/tr.png", "assets/assets/flags/tz.png", "assets/assets/flags/ua.png", "assets/assets/flags/us.png", "assets/assets/flags/ve.png", "assets/assets/flags/vn.png", "assets/assets/flags/za.png", "assets/fonts/MaterialIcons-Regular.otf", "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf", "assets/shaders/ink_sparkle.frag", "assets/shaders/stretch_effect.frag", "drift_worker.js", "favicon.png", "flutter.js", "flutter_bootstrap.js", "icons/Icon-192.png", "icons/Icon-512.png", "icons/Icon-maskable-192.png", "icons/Icon-maskable-512.png", "index.html", "main.dart.js", "manifest.json", "sqlite3.wasm", "version.json"];
const CDN = ["https://www.gstatic.com/flutter-canvaskit/e4b8dca3f1b4ede4c30371002441c88c12187ed6/canvaskit.js", "https://www.gstatic.com/flutter-canvaskit/e4b8dca3f1b4ede4c30371002441c88c12187ed6/canvaskit.wasm", "https://www.gstatic.com/flutter-canvaskit/e4b8dca3f1b4ede4c30371002441c88c12187ed6/chromium/canvaskit.js", "https://www.gstatic.com/flutter-canvaskit/e4b8dca3f1b4ede4c30371002441c88c12187ed6/chromium/canvaskit.wasm"];
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(FILES.map((f) => new Request(f, {cache: 'reload'})));
    const cc = await caches.open(CDN_CACHE);
    await Promise.all(CDN.map(async (u) => {
      try { if (!(await cc.match(u))) { const r = await fetch(u, {mode: 'cors'}); if (r.ok) await cc.put(u, r); } } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('pwa-') && k !== CACHE && k !== CDN_CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === 'https://www.gstatic.com' || url.origin === 'https://fonts.gstatic.com' || url.origin === 'https://fonts.googleapis.com') {
    e.respondWith((async () => {
      const cc = await caches.open(CDN_CACHE);
      const hit = await cc.match(req.url);
      if (hit) return hit;
      const r = await fetch(req); if (r.ok) cc.put(req.url, r.clone()); return r;
    })());
    return;
  }
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    if (req.mode === 'navigate') {
      try { const r = await fetch(req); if (r.ok) return r; } catch (_) {}
      return (await c.match('./')) || (await c.match('index.html'));
    }
    const hit = await c.match(req, {ignoreSearch: true});
    if (hit) return hit;
    try { return await fetch(req); } catch (err) { return (await c.match('index.html')) || Response.error(); }
  })());
});
