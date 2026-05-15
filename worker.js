export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return corsResponse('', 204);
    }

    if (request.method !== 'POST') {
      return corsResponse(JSON.stringify({ error: 'Method not allowed' }), 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return corsResponse(JSON.stringify({ error: 'Invalid JSON' }), 400);
    }

    const { name, company, email, service, message } = body;

    if (!name || !email || !message) {
      return corsResponse(JSON.stringify({ error: 'Required fields missing' }), 400);
    }

    const serviceLabel = {
      rentaldriver: 'レンタルドライバー',
      carlease: 'カーリース',
      offshore: 'オフショア開発',
      other: 'その他',
    }[service] ?? service ?? '未選択';

    const discordPayload = {
      embeds: [
        {
          title: '📩 お問い合わせが届きました',
          color: 0x1a1a2e,
          fields: [
            { name: 'お名前', value: name, inline: true },
            { name: '会社名', value: company || '—', inline: true },
            { name: 'メールアドレス', value: email, inline: false },
            { name: 'サービス', value: serviceLabel, inline: true },
            { name: 'お問い合わせ内容', value: message, inline: false },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const res = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload),
    });

    if (!res.ok) {
      return corsResponse(JSON.stringify({ error: 'Failed to send notification' }), 500);
    }

    return corsResponse(JSON.stringify({ success: true }), 200);
  },
};

function corsResponse(body, status) {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
