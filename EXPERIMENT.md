# このフォークについて（実験版の注記）

これは、ぽっと通話（po-talk/po-talk.github.io、作者：qramo さん）の**非公式の実験フォーク**です。PWA の Web Push 通知が iPhone 実機で届くかを実測するためだけに、田上（Mitsuru-Tagami、potalk-cli の開発者）が個人的に用意したもので、公式の配布ではありません。

## 本家からの変更点（最小限）

- Cloudflare Web Analytics の計測タグを除去（本家の運営者の計測に混ざらないため）
- CNAME（potalk.app）を除去し、公開先を github.io の既定ドメインに変更
- manifest とページタイトルに「PWAプッシュ実験版」と明記
- 追加：`sw.js`（プッシュの受け口）、`push-test.html`（購読テストページ）、`vapid-public.js`（実験用 VAPID 公開鍵）
- appId などネットワークの識別子は本家と同じ（相乗り）。ドメインが異なるため、本家側の仕様により画面には β 表示と「安定版へ」のリンクが出ます

## 注意

- 素材のライセンスは本家の THIRD_PARTY_NOTICES.md に従います。
- 実験結果は本家の作者へ共有する予定です。このフォーク自体は実測が済んだら役目を終えます。
