# 🌐 2bo Velocity Official Site - Modern Design

2bo Velocity は、**2boブランドの公式サイト**です。  
モダンなTailwind CSS + Lucide Iconsを使用した、レスポンシブデザインの美しいサイトです。

---

## ✨ New Features (v2.0)

### 🎨 Design Improvements
- **モダンなUIデザイン**: Tailwind CSSベースのクリーンなデザイン
- **完全レスポンシブ**: スマホ・タブレット・PCで最適表示
- **ハンバーガーメニュー**: モバイルで使いやすいスライドメニュー
- **ガラスモーフィズム**: 透明感のあるモダンなヘッダー
- **スムーズアニメーション**: 洗練されたページ遷移とホバーエフェクト

### 📱 Responsive Features
- **モバイル**: ハンバーガーメニュー、タッチ最適化
- **タブレット**: 2カラムグリッドレイアウト
- **PC**: 3カラムグリッド、ホバーエフェクト

---

## 🎯 Design Philosophy

- **Small**: ミニマルで無駄のないデザイン
- **Fast**: 高速なページロードとスムーズなアニメーション
- **Reliable**: 信頼性の高いレスポンシブレイアウト

---

## 🚀 Quick Start

### Prerequisites
# 🌐 2bo Velocity Official Site

2bo Velocity は、**2boブランドの公式サイト**です。
アプリ紹介を中心に、最新ニュースや開発情報を掲載しています。

---

## 🚀 Purpose

* 2bo アプリの紹介
* ダウンロード / GitHub / SNS への導線
* 最新ニュースの発信
* ブランド情報の掲載

---

## 🌐 Site

* Official: [https://2bo-velocity.com](https://2bo-velocity.com)
* Developer Blog: [https://2bo.dev](https://2bo.dev)
* GitHub: [https://github.com/2bo-velocity](https://github.com/2bo-velocity)
* X: [https://x.com/2bo_velocity](https://x.com/2bo_velocity)

---

## 🧩 Tech Stack

| Technology   | Purpose               |
| ------------ | --------------------- |
| Hugo         | Static Site Generator |
| TailwindCSS  | UI Styling            |
| GitHub Pages | Hosting               |
| Markdown     | Content Management    |

---

## 🎨 Brand Design

2bo ブランドは **白基調 + 青アクセント** を採用しています。

```
Primary Blue : #1E40AF
Accent Blue  : #3B82F6
Base         : White
```

---

## 📂 Project Structure

```
2bo-velocity-site/
├── content/
│   ├── apps/          # アプリ紹介
│   ├── news/          # ニュース記事
│   └── about/         # ブランド情報
├── layouts/
├── static/
├── assets/
├── config.toml
├── tailwind.config.js
├── package.json
└── .gitignore
```

---

## 📱 Content Structure

### Apps

```
content/apps/
```

* 各アプリ紹介ページ
* 機能説明
* GitHubリンク
* ダウンロード情報

---

### News

```
content/news/
```

* リリース情報
* アップデート情報
* 重要なお知らせ

---

## 🛠 Setup (Development)

---

### ① Requirements

#### Hugo (Extended)

```
hugo version
```

Docs:
[https://gohugo.io/](https://gohugo.io/)

---

#### Node.js (LTS)

```
node -v
npm -v
```

---

### ② Install Dependencies

```
npm install
```

---

### ③ Start Development

#### Tailwind Watch

```
npm run watch
```

#### Hugo Local Server

```
hugo server -D
```

---

### 🌐 Local Preview

```
http://localhost:1313
```

---

## 🏗 Production Build

---

### Build Tailwind

```
npm run build
```

---

### Generate Static Site

```
hugo --gc --minify
```

---

Output:

```
/public
```

---

## ☁ Deployment

Deploy using:

* GitHub Pages
* GitHub Actions (Recommended)

---

## ✏ Adding Content

---

### Add App Page

```
hugo new apps/app-name.md
```

---

### Add News Article

```
hugo new news/news-title.md
```

---

### Markdown Template

```
---
title: "Title"
date: 2026-02-09
tags: ["2bo"]
categories: ["Apps"]
---

Content here.
```

---

## 📅 Development Philosophy

2bo Development Standard:

* 📦 Ship Small Tools
* ⚡ Focus on Performance
* 🔁 Continuous Release
* 🧠 Accumulate Development Assets

---

## 🧪 Development Workflow
もしよければ次はさらに実戦寄りにできます👇

* ⭐ GitHub Actions 自動デプロイ付き README
* ⭐ OSS公開向け（スター集めやすい構成）
* ⭐ 企業サイトレベル（SEO / OGP / 構造化データ）

どの方向に寄せます？


---

### During Development

```
npm run watch
hugo server
```

---

### Before Release

```
npm run build
hugo --minify
```

---

## 🔐 License

Copyright © 2bo

---

## ✉ Contact

* GitHub Issues
* X (DM)

---

## 🚀 2bo Vision

Small. Fast. Reliable.
Continuous tool development.
Engineering asset accumulation.

1. **Hugo Extended** (v0.112.0+)
```bash
hugo version
```
[Install Hugo](https://gohugo.io/installation/)

2. **Node.js** (v18+)
```bash
node -v
npm -v
```

---

### Installation

```bash
# 1. Clone repository
git clone https://github.com/2bo-velocity/2bo-velocity-site.git
cd 2bo-velocity-site

# 2. Install dependencies
npm install

# 3. Build Tailwind CSS
npm run build

# 4. Start Hugo development server
hugo server -D
```

**Local preview**: http://localhost:1313

---

## 🛠 Development Workflow

### Development Mode

**Terminal 1: Tailwind Watch**
```bash
npm run watch
```

**Terminal 2: Hugo Server**
```bash
hugo server -D
```

これで、ファイルを編集すると自動的にブラウザがリロードされます。

---

### Production Build

```bash
# Build everything
npm run production
```

生成されたファイルは `/public` ディレクトリに出力されます。

---

## 📂 Project Structure

```
2bo-velocity-site/
├── assets/
│   └── css/
│       └── main.css              # Tailwind CSS source
├── content/
│   ├── apps/                     # アプリ紹介ページ
│   ├── news/                     # ニュース記事
│   └── about/                    # 会社情報
├── layouts/
│   ├── index.html                # トップページ
│   ├── partials/
│   │   ├── header.html           # ヘッダー（レスポンシブナビ）
│   │   ├── hero.html             # ヒーローセクション
│   │   ├── app-cards.html        # アプリカード
│   │   ├── news.html             # ニュースセクション
│   │   └── footer.html           # フッター
│   └── _default/
│       ├── baseof.html           # ベーステンプレート
│       ├── list.html             # リストページ
│       └── single.html           # 詳細ページ
├── static/
│   ├── css/
│   │   └── main.css              # 生成されたCSS
│   ├── js/
│   │   └── menu.js               # メニュー制御JS
│   └── images/                   # 画像ファイル
├── config.toml                   # Hugo設定
├── tailwind.config.js            # Tailwind設定
└── package.json                  # npm設定
```

---

## 🎨 Design System

### Colors

```css
Primary Blue:    #1E40AF
Accent Blue:     #3B82F6
Light Blue:      #DBEAFE
Gray Scale:      #F9FAFB → #111827
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: 700-900 weight
- **Body**: 400-600 weight

### Spacing

- **Mobile**: 16px (4 units)
- **Desktop**: 24px (6 units)
- **Sections**: 80px-112px (20-28 units)

---

## 📝 Content Management

### Add New App

```bash
hugo new apps/my-new-app.md
```

**Frontmatter Example:**
```yaml
---
title: "My New App"
date: 2026-02-10
description: "アプリの説明"
icon: "code"
tags: ["CLI", "Fast"]
github: "https://github.com/2bo-velocity/my-new-app"
---

アプリの詳細説明をここに書きます。
```

---

### Add News Article

```bash
hugo new news/latest-update.md
```

**Frontmatter Example:**
```yaml
---
title: "最新アップデート"
date: 2026-02-10
tags: ["Release", "Update"]
category: "news"
---

記事の本文をここに書きます。
```

---

## 🎯 Component Features

### Header
- ✅ スティッキーヘッダー（スクロール時固定）
- ✅ ガラスモーフィズム効果
- ✅ レスポンシブナビゲーション
- ✅ ハンバーガーメニュー（モバイル）
- ✅ スムーズスクロール

### Hero Section
- ✅ グラデーション背景
- ✅ アニメーション付きテキスト
- ✅ CTA ボタン
- ✅ 統計情報表示
- ✅ コードプレビュー（PC）

### App Cards
- ✅ 3カラムグリッド（PC）
- ✅ 2カラムグリッド（タブレット）
- ✅ 1カラムグリッド（モバイル）
- ✅ ホバーエフェクト
- ✅ カラフルなアイコン

### News Section
- ✅ カード型レイアウト
- ✅ 日付バッジ
- ✅ タグ表示
- ✅ 抜粋表示

### Footer
- ✅ ダークテーマ
- ✅ SNSリンク
- ✅ サイトマップ
- ✅ 4カラムレイアウト

---

## 🔧 Customization

### Change Brand Colors

`tailwind.config.js` を編集:

```javascript
colors: {
  'primary': {
    600: '#YOUR_COLOR',
    // ... other shades
  },
}
```

### Add Custom Animations

`assets/css/main.css` に追加:

```css
@keyframes your-animation {
  from { /* ... */ }
  to { /* ... */ }
}

.animate-your-animation {
  animation: your-animation 1s ease-in-out;
}
```

---

## 🚀 Deployment

### GitHub Pages

1. `.github/workflows/deploy.yml` を作成
2. GitHub Settingsで Pages を有効化
3. Push するだけで自動デプロイ

### Netlify

1. リポジトリを接続
2. Build command: `npm run production`
3. Publish directory: `public`

### Vercel

1. リポジトリをインポート
2. Framework: Hugo
3. デプロイ

---

## 🧪 Testing

### ローカルテスト

```bash
# Development server
hugo server -D

# Production build test
npm run production
cd public
python -m http.server 8000
```

### レスポンシブテスト

- Chrome DevTools (F12)
- モバイルデバイスエミュレータ
- 実機テスト推奨

---

## 📊 Performance

### Lighthouse Scores Target

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimization Tips

- ✅ 画像を最適化（WebP使用）
- ✅ CSSをminify
- ✅ 不要なJSを削除
- ✅ Lazy loading実装

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

Copyright © 2bo. All rights reserved.

---

## 📞 Contact

- **GitHub**: https://github.com/2bo-velocity
- **X (Twitter)**: https://x.com/2bo_velocity
- **Blog**: https://2bo.dev
- **Website**: https://2bo-velocity.com

---

## 🙏 Acknowledgments

- [Hugo](https://gohugo.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Inter Font](https://rsms.me/inter/)

---

**Made with ❤️ by 2bo Team**