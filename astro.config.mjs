// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// الموقع الرسمي: https://streammasterstore.com
// عند رفعه على Hostinger، استبدل site بدومينك الحقيقي.
export default defineConfig({
  site: 'https://streammasterstore.com',
  trailingSlash: 'always',
  output: 'static',
  build: {
    inlineStylesheets: 'auto', // يحقن CSS الحرج داخل الـ HTML لتجنّب طلب إضافي
    assets: '_assets', // تسميات مختصرة للأصول (مثل: /_assets/css/... بدلاً من /_next/static/...)
  },
  prefetch: {
    prefetchAll: true, // يسبق تحميل الصفحات عند hover على الروابط
    defaultStrategy: 'viewport',
  },
  image: {
    // Astro يبني صورًا محسّنة (AVIF/WebP) تلقائيًا عند استخدام <Image>
    domains: ['streammasterstore.com'],
  },
  integrations: [
    tailwind({
      // نستورد CSS في BaseLayout بدلاً من ذلك للتحكم الكامل
      applyBaseStyles: false,
    }),
    sitemap({
      // يستثني صفحات معينة من sitemap.xml (نضيف /admin/ و /404/)
      filter: (page) =>
        !page.includes('/admin/') && !page.includes('/404/') && !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          // تجميع الـ JS chunks لتسهيل التخزين المؤقت الطويل
          manualChunks: undefined,
        },
      },
    },
    server: {
      // Hostinger يقدّم IP ثابت - فعّل هذا عند الرفع
      // host: '0.0.0.0',
    },
  },
  compressHTML: true, // ضغط HTML في الإنتاج (يحلّ محل Gzip على مستوى Apache)
});
