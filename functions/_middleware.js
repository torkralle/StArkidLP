// http と pages.dev からのアクセスを https://st.arkid.jp へ 301（検索エンジンに正規 URL を 1 つに絞らせる）
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'st.arkid.jp' && url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  if (url.hostname === 'starkid-lp.pages.dev') {
    url.hostname = 'st.arkid.jp';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
