/**
 * Content Collections - نظام إدارة المحتوى في Astro
 * يحدد Schema لكل نوع محتوى مع validation تلقائي
 */

import { defineCollection, z } from 'astro:content';

// =====================================================================
// 1. مدوّنة (Blog)
// =====================================================================
const blog = defineCollection({
  type: 'content', // ملفات .md / .mdx
  schema: z.object({
    title: z.string().min(5).max(120),
    description: z.string().min(20).max(200),
    excerpt: z.string().min(10).max(300),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('فريق ستريم ماستر'),
    category: z.enum([
      'مراجعات',
      'أدلة',
      'أخبار',
      'مقارنات',
      'البطولات',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.number().optional(), // دقائق
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// =====================================================================
// 2. سيرفرات (Servers) - صفحة كاملة لكل سيرفر
// =====================================================================
const servers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.enum(['falcon', 'shark', 'hulk', 'aronium', 'istar']),
    displayName: z.string(),
    tagline: z.string(),
    icon: z.string(),
    color: z.enum(['red', 'amber', 'green', 'blue', 'purple']),
    badge: z.string().optional(),
    order: z.number().default(0),
    specs: z.object({
      quality: z.string(),
      uptime: z.string(),
      devices: z.number(),
      channels: z.string(),
      vod: z.string(),
      catchup: z.string(),
    }),
    bestFor: z.array(z.string()),
    features: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

// =====================================================================
// 3. صفحات ثابتة (Pages) - الشروط، الخصوصية، عن الموقع
// =====================================================================
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedAt: z.coerce.date(),
    showInFooter: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// =====================================================================
// 4. عروض (Offers) - للعروض الترويجية
// =====================================================================
const offers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    code: z.string().optional(), // كود الخصم
    discountPercent: z.number().optional(),
    validUntil: z.coerce.date().optional(),
    server: z
      .enum(['falcon', 'shark', 'hulk', 'aronium', 'istar'])
      .optional(),
    active: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

// =====================================================================
// تصدير المجموعات
// =====================================================================
export const collections = {
  blog,
  servers,
  pages,
  offers,
};
