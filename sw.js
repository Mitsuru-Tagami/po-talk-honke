// PWAプッシュ実験版の Service Worker。
// 役割は「受け口」だけ：push が届いたら通知を表示し、タップでアプリを開く。
// 在室の検知や送信は行わない（それは利用者側の送信役ユニットの担当）。
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { body: event.data ? event.data.text() : '' };
  }
  const title = data.title || '☎️ ぽっと通話（実験版）';
  const options = {
    body: data.body || '',
    icon: 'images/icon-512.png',
    tag: 'pot-pwa-test',
    data: { url: data.url || './' },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil((async () => {
    const wins = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) {
      if ('focus' in w) {
        try { await w.navigate(target); } catch { /* 遷移できなくてもフォーカスはする */ }
        return w.focus();
      }
    }
    return clients.openWindow(target);
  })());
});
