// st.arkid.jp の静的配信の前段。http を https へ 301 し（正規 URL を 1 つに絞る）、それ以外は静的ファイルを返す
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
