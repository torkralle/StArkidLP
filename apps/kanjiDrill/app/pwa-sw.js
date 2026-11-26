// 自動生成（gen_sw.py）。手で直さない。
const VERSION = '4831d0a426dd';
const CACHE = 'pwa-' + VERSION;
const CDN_CACHE = 'pwa-cdn';
const FILES = ["./", "assets/AssetManifest.bin", "assets/AssetManifest.bin.json", "assets/FontManifest.json", "assets/NOTICES", "assets/assets/content/content.json", "assets/assets/figures/hitsujun_0515a_9.svg", "assets/assets/figures/hitsujun_05272_11.svg", "assets/assets/figures/hitsujun_05275_11.svg", "assets/assets/figures/hitsujun_05584_10.svg", "assets/assets/figures/hitsujun_056f0_7.svg", "assets/assets/figures/hitsujun_0596e_12.svg", "assets/assets/figures/hitsujun_059ff_7.svg", "assets/assets/figures/hitsujun_05ba3_4.svg", "assets/assets/figures/hitsujun_05c04_8.svg", "assets/assets/figures/hitsujun_05ef6_6.svg", "assets/assets/figures/hitsujun_05fd8_4.svg", "assets/assets/figures/hitsujun_05fe0_5.svg", "assets/assets/figures/hitsujun_06069_7.svg", "assets/assets/figures/hitsujun_062e1_4.svg", "assets/assets/figures/hitsujun_0656c_9.svg", "assets/assets/figures/hitsujun_066ae_11.svg", "assets/assets/figures/hitsujun_0679a_5.svg", "assets/assets/figures/hitsujun_068d2_5.svg", "assets/assets/figures/hitsujun_06a39_5.svg", "assets/assets/figures/hitsujun_06bb5_6.svg", "assets/assets/figures/hitsujun_07687_6.svg", "assets/assets/figures/hitsujun_076df_9.svg", "assets/assets/figures/hitsujun_078c1_6.svg", "assets/assets/figures/hitsujun_07a40_11.svg", "assets/assets/figures/hitsujun_08056_10.svg", "assets/assets/figures/hitsujun_080ba_5.svg", "assets/assets/figures/hitsujun_080cc_6.svg", "assets/assets/figures/hitsujun_08178_5.svg", "assets/assets/figures/hitsujun_0820c_4.svg", "assets/assets/figures/hitsujun_082e5_4.svg", "assets/assets/figures/hitsujun_08535_4.svg", "assets/assets/figures/hitsujun_088c5_7.svg", "assets/assets/figures/hitsujun_08a0e_8.svg", "assets/assets/figures/hitsujun_08a33_8.svg", "assets/assets/figures/hitsujun_08a5e_8.svg", "assets/assets/figures/hitsujun_08aa0_8.svg", "assets/assets/figures/hitsujun_08b66_13.svg", "assets/assets/figures/hitsujun_08cc3_7.svg", "assets/assets/figures/hitsujun_0965b_4.svg", "assets/assets/figures/hitsujun_09810_5.svg", "assets/fonts/MaterialIcons-Regular.otf", "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf", "assets/shaders/ink_sparkle.frag", "assets/shaders/stretch_effect.frag", "drift_worker.js", "favicon.png", "flutter.js", "flutter_bootstrap.js", "icons/Icon-192.png", "icons/Icon-512.png", "icons/Icon-maskable-192.png", "icons/Icon-maskable-512.png", "index.html", "main.dart.js", "manifest.json", "sqlite3.wasm", "version.json"];
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
