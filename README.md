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
