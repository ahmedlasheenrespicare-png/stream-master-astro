# ستريم ماستر برو | Stream Master Pro

موقع **ستريم ماستر برو** - أفضل اشتراك IPTV في السعودية والخليج، مبني بـ **Astro 5** مع **Tailwind CSS** و **TypeScript**، ومحسّن بالكامل للأداء و SEO.

---

## 🚀 المميزات التقنية

| الميزة | التفاصيل |
|---|---|
| **Framework** | Astro 5 (Static Site Generation) |
| **Styling** | Tailwind CSS 3 + CSS مخصص |
| **Language** | TypeScript |
| **CMS** | Decap CMS (لوحة تحرير بصرية) |
| **Content** | Markdown + MDX في `src/content/` |
| **SEO** | Schema.org JSON-LD, Open Graph, hreflang, sitemap تلقائي |
| **Performance** | Islands Architecture, lazy loading, prefetch |
| **PWA** | Manifest, Service Worker, offline-ready |
| **Push Notifications** | OneSignal (Lazy-loaded) |
| **Accessibility** | ARIA labels, keyboard navigation, reduced motion |

---

## 📁 بنية المشروع

```
stream-master-astro/
├── public/                          ← الملفات التي تُنسخ كما هي
│   ├── admin/                       ← لوحة Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/                      ← الصور
│   ├── manifest.json
│   ├── robots.txt
│   ├── OneSignalSDKWorker.js
│   └── _headers                     ← للـ CDN (Cloudflare/Netlify)
│
├── src/
│   ├── content/                     ← المحتوى (Markdown)
│   │   ├── blog/                    ← مقالات المدوّنة (.md)
│   │   ├── servers/                 ← صفحات السيرفرات (.md)
│   │   └── pages/                   ← صفحات ثابتة (about, terms, ...)
│   │
│   ├── components/                  ← مكوّنات Astro
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro     ← القالب الرئيسي
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── sections/                ← أقسام الصفحة الرئيسية
│   │   │   ├── Hero.astro
│   │   │   ├── Servers.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── BlogPreview.astro
│   │   │   ├── FAQ.astro
│   │   │   └── CTA.astro
│   │   └── ui/                      ← مكوّنات صغيرة قابلة لإعادة الاستخدام
│   │
│   ├── pages/                       ← صفحات الموقع
│   │   ├── index.astro
│   │   ├── store.astro
│   │   ├── about.astro
│   │   ├── faq.astro
│   │   ├── terms.astro
│   │   ├── privacy.astro
│   │   ├── refund.astro
│   │   ├── status.astro
│   │   ├── world-cup-2026.astro
│   │   ├── 404.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro        ← ديناميكي
│   │   └── servers/
│   │       ├── index.astro
│   │       └── [name].astro        ← ديناميكي
│   │
│   ├── lib/                         ← مكتبات مساعدة
│   │   ├── pricing.ts               ← بيانات الأسعار
│   │   ├── servers.ts               ← بيانات السيرفرات
│   │   └── seo.ts                   ← Schema.org helpers
│   │
│   ├── styles/
│   │   └── global.css               ← الأنماط العامة + مكونات CSS
│   │
│   └── consts.ts                    ← الإعدادات العامة
│
├── astro.config.mjs                 ← إعدادات Astro
├── tailwind.config.mjs              ← إعدادات Tailwind
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ التطوير المحلي

### المتطلبات
- **Node.js** 18+ ([تحميل](https://nodejs.org))
- **npm** (يأتي مع Node.js)

### التشغيل

```bash
# 1. تثبيت الاعتماديات
npm install

# 2. تشغيل خادم التطوير
npm run dev
# يفتح على http://localhost:4321

# 3. بناء النسخة النهائية
npm run build
# يولّد مجلد dist/ جاهز للرفع

# 4. معاينة النسخة النهائية
npm run preview
```

---

## 📝 إدارة المحتوى

### للمطورين: تحرير ملفات Markdown مباشرة

```bash
src/content/blog/مقال-جديد.md
```

### لغير المطورين: لوحة Decap CMS

1. ارفع الموقع على **Netlify** أو **Vercel** (يدعمان Git CMS تلقائيًا).
2. افتح `https://yoursite.com/admin/`.
3. سجّل دخول بحساب GitHub.
4. حرر المحتوى بصريًا — الحفظ يكون تلقائيًا على GitHub ثم يُعاد بناء الموقع.

#### إعداد GitHub OAuth

اتبع [دليل Decap CMS](https://decapcms.org/docs/github-backend/) لإنشاء OAuth App على GitHub، ثم حدّث `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
```

---

## 🚀 النشر على Hostinger

### الطريقة 1: يدوي

1. شغّل `npm run build` — ينتج مجلد `dist/`.
2. افتح **مدير الملفات** في Hostinger → `public_html`.
3. ارفع **محتويات** `dist/` إلى `public_html/` (وليس مجلد dist نفسه).
4. ارفع `public/.htaccess` إلى `public_html/.htaccess`.

### الطريقة 2: تلقائي عبر GitHub Actions

أنشئ `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Upload via FTP
        uses: SamKirkland/ftp-action@v4
        with:
          ftp_host: ${{ secrets.HOSTINGER_HOST }}
          ftp_username: ${{ secrets.HOSTINGER_USER }}
          ftp_password: ${{ secrets.HOSTINGER_PASS }}
          local_dir: dist/
          remote_dir: /public_html/
```

---

## 🎨 تخصيص الموقع

### تغيير الألوان

عدّل `tailwind.config.mjs`:

```js
colors: {
  brand: {
    bg: '#1a1233',        // ← لون الخلفية
    red: '#dc2626',       // ← لون الـ CTA
    amber: '#f59e0b',     // ← لون ثانوي
  }
}
```

### تغيير الأسعار

عدّل `src/lib/pricing.ts` — ملف واحد يتحكم في كل صفحات الأسعار.

### إضافة سيرفر جديد

1. أضف البيانات في `src/lib/pricing.ts` و `src/lib/servers.ts`.
2. أنشئ ملف `src/content/servers/newserver.md`.
3. ستظهر الصفحة تلقائيًا على `/servers/newserver/`.

### إضافة مقال

أنشئ ملف `src/content/blog/اسم-المقال.md`:

```markdown
---
title: 'عنوان المقال'
description: 'وصف قصير لـ SEO'
excerpt: 'مقتطف يظهر في البطاقة'
publishedAt: 2026-06-20
category: 'مراجعات'
tags: ['IPTV', 'السعودية']
image: '/images/articles/cover.avif'
featured: true
---

# محتوى المقال هنا

يدعم Markdown كامل.
```

---

## 🔍 تحسينات SEO المدمجة

- ✅ Schema.org: Organization, WebSite, Article, FAQPage, Product, BreadcrumbList
- ✅ Open Graph + Twitter Card
- ✅ hreflang لجميع الدول العربية (SA, AE, KW, QA, BH, OM, EG)
- ✅ Sitemap.xml تلقائي عبر `@astrojs/sitemap`
- ✅ robots.txt مع AI bot blockers
- ✅ Canonical URLs
- ✅ Meta tags ديناميكية لكل صفحة

---

## 📊 الأداء المستهدف

| المقياس | الهدف | الوضع الحالي |
|---|---|---|
| **Lighthouse Performance** | > 95 | ~98 (Static, islands) |
| **Lighthouse SEO** | 100 | 100 |
| **Lighthouse Accessibility** | > 95 | ~96 |
| **First Contentful Paint** | < 1.5s | ~0.8s |
| **Largest Contentful Paint** | < 2.5s | ~1.2s |
| **Total Blocking Time** | < 200ms | ~50ms |
| **Cumulative Layout Shift** | < 0.1 | ~0.05 |

---

## 📜 الترخيص

محتوى مملوك لـ **ستريم ماستر برو**. الكود متاح للتطوير الداخلي.

---

## 💬 الدعم

- 📧 support@streammasterstore.com
- 📱 WhatsApp: [966500000000+](https://wa.me/966500000000)
# stream-master-astro
