// st.arkid.jp の静的配信の前段。http を https へ 301 し（正規 URL を 1 つに絞る）、それ以外は静的ファイルを返す
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    // Search Console の確認ファイルは .html 付きの URL のまま 200 で返す（静的配信だと /google… へ 307 になり確認に失敗しうる）
    if (/^\/google[0-9a-f]+\.html$/.test(url.pathname)) {
      url.pathname = url.pathname.slice(0, -5);
      const res = await env.ASSETS.fetch(new Request(url.toString(), request));
      return new Response(res.body, { status: res.status, headers: { 'content-type': 'text/html; charset=utf-8' } });
    }
    return env.ASSETS.fetch(request);
  },
};
