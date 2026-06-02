# হযরত আলীর বুকশেলফ 📚

একটি minimal, monochrome ব্যক্তিগত বুকলাইব্রেরি — React (Vite) দিয়ে তৈরি।

## ⚡ লোকাল রান

```bash
npm install
npm run dev
```

## 🔧 বই যোগ করুন

`src/data/books.json` ফাইলটি এডিট করুন:

```json
{
  "id": "unique-slug",
  "title": "বইয়ের নাম",
  "author": "লেখক",
  "cover": "image-url",
  "description": "সংক্ষিপ্ত বর্ণনা",
  "categories": ["ধর্ম", "দর্শন"],
  "status": "পড়ছি | পড়া শেষ | পড়বো",
  "storeLink": "https://external-link",
  "review": "আমার ব্যক্তিগত রিভিউ",
  "year": 2024,
  "priority": 1
}
```

## 🚀 GitHub Pages Deploy

```bash
npm run build
```

তারপর `dist/` ফোল্ডারটি GitHub Pages-এ push করুন।

অথবা, GitHub Actions দিয়ে auto-deploy করতে:

Settings → Pages → Source: **GitHub Actions** → Vite workflow নির্বাচন করুন।

## 📁 স্ট্রাকচার

```
src/
├── components/
│   ├── Header.jsx
│   ├── BookCard.jsx
│   └── FilterBar.jsx
├── pages/
│   ├── Home.jsx
│   └── BookDetail.jsx
├── data/
│   └── books.json   ← শুধু এই ফাইল এডিট করুন
├── utils/
│   └── sorting.js
├── App.jsx
├── main.jsx
└── index.css
```
