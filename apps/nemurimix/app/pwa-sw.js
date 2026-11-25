// 自動生成（gen_sw.py）。手で直さない。
const VERSION = 'c3004d4965de';
const CACHE = 'pwa-' + VERSION;
const CDN_CACHE = 'pwa-cdn';
const FILES = ["./", "assets/AssetManifest.bin", "assets/AssetManifest.bin.json", "assets/FontManifest.json", "assets/NOTICES", "assets/fonts/MaterialIcons-Regular.otf", "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf", "assets/shaders/ink_sparkle.frag", "assets/shaders/stretch_effect.frag", "favicon.png", "flutter.js", "flutter_bootstrap.js", "icons/Icon-192.png", "icons/Icon-512.png", "icons/Icon-maskable-192.png", "icons/Icon-maskable-512.png", "index.html", "main.dart.js", "manifest.json", "version.json"];
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
  if (url.origin === self.location.origin && url.pathname.includes('/assets/assets/sounds/')) {
    e.respondWith(audioResponse(req));
    return;
  }
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

const AUDIO_CACHE = 'audio-v1';
async function audioResponse(req) {
  const key = new URL(req.url).pathname;
  const c = await caches.open(AUDIO_CACHE);
  let full = await c.match(key);
  if (!full) {
    const r = await fetch(key);
    if (!r.ok) return r;
    await c.put(key, r.clone());
    full = r;
  }
  const range = req.headers.get('range');
  const m = range && /bytes=(\d*)-(\d*)/.exec(range);
  if (!m) return full;
  const buf = await full.arrayBuffer();
  const size = buf.byteLength;
  let start = m[1] === '' ? Math.max(0, size - Number(m[2])) : Number(m[1]);
  let end = m[1] !== '' && m[2] !== '' ? Math.min(Number(m[2]), size - 1) : size - 1;
  if (start >= size) return new Response(null, {status: 416, headers: {'Content-Range': `bytes */${size}`}});
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': full.headers.get('Content-Type') || 'audio/wav',
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes',
    },
  });
}
