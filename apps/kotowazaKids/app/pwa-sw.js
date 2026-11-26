// 自動生成（gen_sw.py）。手で直さない。
const VERSION = 'c0701186f78c';
const CACHE = 'pwa-' + VERSION;
const CDN_CACHE = 'pwa-cdn';
const FILES = ["./", "assets/AssetManifest.bin", "assets/AssetManifest.bin.json", "assets/FontManifest.json", "assets/NOTICES", "assets/assets/content/words.json", "assets/assets/pics/ame.webp", "assets/assets/pics/ashi.webp", "assets/assets/pics/atama.webp", "assets/assets/pics/buta.webp", "assets/assets/pics/ha.webp", "assets/assets/pics/hachi.webp", "assets/assets/pics/hana.webp", "assets/assets/pics/hana_nose.webp", "assets/assets/pics/hara.webp", "assets/assets/pics/hashi.webp", "assets/assets/pics/hebi.webp", "assets/assets/pics/hi.webp", "assets/assets/pics/hone.webp", "assets/assets/pics/inu.webp", "assets/assets/pics/ishi.webp", "assets/assets/pics/kaeru.webp", "assets/assets/pics/kaki.webp", "assets/assets/pics/kao.webp", "assets/assets/pics/kappa.webp", "assets/assets/pics/kata.webp", "assets/assets/pics/ki.webp", "assets/assets/pics/koban.webp", "assets/assets/pics/koshi.webp", "assets/assets/pics/kubi.webp", "assets/assets/pics/kuchi.webp", "assets/assets/pics/kugi.webp", "assets/assets/pics/mayu.webp", "assets/assets/pics/me.webp", "assets/assets/pics/mimi.webp", "assets/assets/pics/mochi.webp", "assets/assets/pics/mune.webp", "assets/assets/pics/neko.webp", "assets/assets/pics/oni.webp", "assets/assets/pics/sakana.webp", "assets/assets/pics/saru.webp", "assets/assets/pics/shita.webp", "assets/assets/pics/suzume.webp", "assets/assets/pics/tai.webp", "assets/assets/pics/take.webp", "assets/assets/pics/tamago.webp", "assets/assets/pics/te.webp", "assets/assets/pics/tora.webp", "assets/assets/pics/tori.webp", "assets/assets/pics/tsuru.webp", "assets/assets/pics/ude.webp", "assets/assets/pics/uma.webp", "assets/assets/pics/ushi.webp", "assets/assets/pics/yama.webp", "assets/fonts/MaterialIcons-Regular.otf", "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf", "assets/shaders/ink_sparkle.frag", "assets/shaders/stretch_effect.frag", "favicon.png", "flutter.js", "flutter_bootstrap.js", "icons/Icon-192.png", "icons/Icon-512.png", "icons/Icon-maskable-192.png", "icons/Icon-maskable-512.png", "index.html", "main.dart.js", "manifest.json", "version.json"];
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
