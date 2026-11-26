// 自動生成（gen_sw.py）。手で直さない。
const VERSION = 'efd477b07689';
const CACHE = 'pwa-' + VERSION;
const CDN_CACHE = 'pwa-cdn';
const FILES = ["./", "assets/AssetManifest.bin", "assets/AssetManifest.bin.json", "assets/FontManifest.json", "assets/NOTICES", "assets/assets/content/content.json", "assets/assets/figures/mark_bus_senyo.svg", "assets/assets/figures/mark_chuosen_hasen.svg", "assets/assets/figures/mark_chuosen_jissen_shiro.svg", "assets/assets/figures/mark_curb_hasen.svg", "assets/assets/figures/mark_curb_jissen.svg", "assets/assets/figures/mark_doryutai.svg", "assets/assets/figures/mark_hamidashi_kinshi.svg", "assets/assets/figures/mark_odanhodo_ari.svg", "assets/assets/figures/mark_rosokutai.svg", "assets/assets/figures/mark_rosokutai_chuteisha_kinshi.svg", "assets/assets/figures/mark_rosokutai_hokosha.svg", "assets/assets/figures/mark_saiko_40.svg", "assets/assets/figures/mark_shinkohobetsu.svg", "assets/assets/figures/mark_shinro_henko_kinshi.svg", "assets/assets/figures/mark_tachiiri_kinshi.svg", "assets/assets/figures/mark_teishi_kinshi.svg", "assets/assets/figures/mark_tenkai_kinshi.svg", "assets/assets/figures/mark_zenpo_yusen.svg", "assets/assets/figures/scene_ame_yoru.svg", "assets/assets/figures/scene_bus_teiryujo.svg", "assets/assets/figures/scene_chusha_kage.svg", "assets/assets/figures/scene_curve_kudari.svg", "assets/assets/figures/scene_fumikiri_jutai.svg", "assets/assets/figures/scene_kanjo_kousaten.svg", "assets/assets/figures/scene_kosoku_goryu.svg", "assets/assets/figures/scene_kousaten_jutai.svg", "assets/assets/figures/scene_migisetsu_taikousha.svg", "assets/assets/figures/scene_odanhodo_taikou_teishi.svg", "assets/assets/figures/scene_oikoshi_kiiro.svg", "assets/assets/figures/scene_sasetsu_makikomi.svg", "assets/assets/figures/scene_semai_ikichigai.svg", "assets/assets/figures/scene_shokasen.svg", "assets/assets/figures/scene_tsugakuro.svg", "assets/assets/figures/scene_yusen_doro_kousaten.svg", "assets/assets/figures/sig_aka.svg", "assets/assets/figures/sig_aka_hidari_chokushin.svg", "assets/assets/figures/sig_aka_migi_yajirushi.svg", "assets/assets/figures/sig_aka_tenmetsu.svg", "assets/assets/figures/sig_ao.svg", "assets/assets/figures/sig_ki.svg", "assets/assets/figures/sig_ki_tenmetsu.svg", "assets/assets/figures/sign_chuosen.svg", "assets/assets/figures/sign_chusha_ka.svg", "assets/assets/figures/sign_chusha_kinshi.svg", "assets/assets/figures/sign_chusha_kinshi_8_20.svg", "assets/assets/figures/sign_chuteisha_kinshi.svg", "assets/assets/figures/sign_gentsuki_komawari.svg", "assets/assets/figures/sign_gentsuki_nidankai.svg", "assets/assets/figures/sign_hojo_kuikinai.svg", "assets/assets/figures/sign_hokosha_senyo.svg", "assets/assets/figures/sign_hokosha_tsukodome.svg", "assets/assets/figures/sign_ichiji_teishi.svg", "assets/assets/figures/sign_ichiji_teishi_mae.svg", "assets/assets/figures/sign_ippo_tsuko.svg", "assets/assets/figures/sign_jidosha_senyo.svg", "assets/assets/figures/sign_jidosha_tsukodome.svg", "assets/assets/figures/sign_jikan_seigen_chusha.svg", "assets/assets/figures/sign_jitensha_hokosha_senyo.svg", "assets/assets/figures/sign_jitensha_odantai.svg", "assets/assets/figures/sign_jitensha_senyo.svg", "assets/assets/figures/sign_jitensha_tsukodome.svg", "assets/assets/figures/sign_jokou.svg", "assets/assets/figures/sign_juryo_seigen.svg", "assets/assets/figures/sign_kanjo_migimawari.svg", "assets/assets/figures/sign_kei_dobutsu.svg", "assets/assets/figures/sign_kei_fukuin_genshou.svg", "assets/assets/figures/sign_kei_fumikiri.svg", "assets/assets/figures/sign_kei_gakko.svg", "assets/assets/figures/sign_kei_goryu.svg", "assets/assets/figures/sign_kei_jujiro.svg", "assets/assets/figures/sign_kei_kanjo.svg", "assets/assets/figures/sign_kei_koji.svg", "assets/assets/figures/sign_kei_kudari.svg", "assets/assets/figures/sign_kei_migi_kukyoku.svg", "assets/assets/figures/sign_kei_nihoko.svg", "assets/assets/figures/sign_kei_nobori.svg", "assets/assets/figures/sign_kei_rakuseki.svg", "assets/assets/figures/sign_kei_shasensu_genshou.svg", "assets/assets/figures/sign_kei_shingoki.svg", "assets/assets/figures/sign_kei_sonota.svg", "assets/assets/figures/sign_kei_suberiyasui.svg", "assets/assets/figures/sign_kei_t.svg", "assets/assets/figures/sign_kei_yokokaze.svg", "assets/assets/figures/sign_keiteki_kukan.svg", "assets/assets/figures/sign_keiteki_narase.svg", "assets/assets/figures/sign_nirin_tsukodome.svg", "assets/assets/figures/sign_ochushadan_kinshi.svg", "assets/assets/figures/sign_odan_hodo.svg", "assets/assets/figures/sign_ogata_kamotsu_tsukodome.svg", "assets/assets/figures/sign_saidaihaba.svg", "assets/assets/figures/sign_saiko_30.svg", "assets/assets/figures/sign_saiko_40_owari.svg", "assets/assets/figures/sign_saiko_50.svg", "assets/assets/figures/sign_saitei_30.svg", "assets/assets/figures/sign_shaon_tsukodome.svg", "assets/assets/figures/sign_shaon_tsukodome_keisharyo.svg", "assets/assets/figures/sign_shinnyu_kinshi.svg", "assets/assets/figures/sign_shitei_hoko_chokushin.svg", "assets/assets/figures/sign_shitei_hoko_hidari.svg", "assets/assets/figures/sign_shitei_hoko_migi.svg", "assets/assets/figures/sign_takasa_seigen.svg", "assets/assets/figures/sign_teisha_ka.svg", "assets/assets/figures/sign_teishisen.svg", "assets/assets/figures/sign_tenkai_kinshi.svg", "assets/assets/figures/sign_yusen_doro.svg", "assets/fonts/MaterialIcons-Regular.otf", "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf", "assets/shaders/ink_sparkle.frag", "assets/shaders/stretch_effect.frag", "drift_worker.js", "favicon.png", "flutter.js", "flutter_bootstrap.js", "icons/Icon-192.png", "icons/Icon-512.png", "icons/Icon-maskable-192.png", "icons/Icon-maskable-512.png", "index.html", "main.dart.js", "manifest.json", "sqlite3.wasm", "version.json"];
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
