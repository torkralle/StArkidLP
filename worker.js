addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
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

  const { type } = body;

  let discordPayload;

  if (type === 'carlease-apply') {
    const { name, university, studentId, email, phone, plan, startDate, duration, area, license, message } = body;

    if (!name || !studentId || !email) {
      return corsResponse(JSON.stringify({ error: 'Required fields missing' }), 400);
    }

    const planLabel = {
      personal: '個人専用プラン（¥15,000 / 月）',
      share:    'シェア駐車場プラン（Coming Soon）',
    }[plan] || plan || '未選択';

    const licenseLabel = {
      yes:       'あり',
      no:        'なし（取得予定なし）',
      acquiring: '取得中・取得予定',
    }[license] || license || '—';

    discordPayload = {
      embeds: [{
        title: '🚗 カーリース申し込みが届きました',
        color: 0x4290b6,
        fields: [
          { name: 'お名前',         value: name,                   inline: true  },
          { name: '大学・学部',     value: university || '—',      inline: true  },
          { name: '学籍番号',       value: studentId,              inline: true  },
          { name: 'メールアドレス', value: email,                  inline: true  },
          { name: '電話番号',       value: phone || '—',           inline: true  },
          { name: '居住エリア',     value: area || '—',            inline: true  },
          { name: '希望プラン',     value: planLabel,              inline: false },
          { name: '利用開始時期',   value: startDate || '—',       inline: true  },
          { name: '契約期間',       value: duration ? `${duration}年` : '—', inline: true },
          { name: '運転免許証',     value: licenseLabel,           inline: true  },
          { name: '質問・備考',     value: message || '—',         inline: false },
        ],
        footer: { text: 'St.Arkid CarLease 申し込みフォーム' },
        timestamp: new Date().toISOString(),
      }],
    };

  } else {
    const { name, company, email, service, message } = body;

    if (!name || !email || !message) {
      return corsResponse(JSON.stringify({ error: 'Required fields missing' }), 400);
    }

    const serviceLabel = {
      rentaldriver: 'レンタルドライバー',
      carlease: 'カーリース',
      offshore: 'オフショア開発',
      other: 'その他',
    }[service] || service || '未選択';

    discordPayload = {
      embeds: [{
        title: '📩 お問い合わせが届きました',
        color: 0x1a1a2e,
        fields: [
          { name: 'お名前',           value: name,             inline: true  },
          { name: '会社名',           value: company || '—',   inline: true  },
          { name: 'メールアドレス',   value: email,            inline: false },
          { name: 'サービス',         value: serviceLabel,     inline: true  },
          { name: 'お問い合わせ内容', value: message,          inline: false },
        ],
        timestamp: new Date().toISOString(),
      }],
    };
  }

  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(discordPayload),
  });

  if (!res.ok) {
    return corsResponse(JSON.stringify({ error: 'Failed to send notification' }), 500);
  }

  return corsResponse(JSON.stringify({ success: true }), 200);
}

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
