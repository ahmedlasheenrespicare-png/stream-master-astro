/**
 * الإعدادات العامة للموقع - تُستورد من أي مكان بسهولة
 */

// معلومات الموقع الأساسية
export const SITE = {
  name: 'ستريم ماستر برو',
  nameEn: 'Stream Master Pro',
  domain: 'streammasterstore.com',
  url: 'https://streammasterstore.com',
  description: 'افضل اشتراك IPTV بدون تقطيع في السعودية والخليج - ثبات 99.9%',
  tagline: 'تجربة مشاهدة ذكية تتخطى التوقعات',
  founded: 2022,
  email: 'support@streammasterstore.com',
  whatsapp: '+966500000000', // ضع الرقم الحقيقي هنا
  phone: '+966110000000',
  address: 'الرياض، المملكة العربية السعودية',
  social: {
    twitter: 'https://twitter.com/streammasterpro',
    instagram: 'https://instagram.com/streammasterpro',
    telegram: 'https://t.me/streammasterpro',
    youtube: 'https://youtube.com/@streammasterpro',
  },
} as const;

// إعدادات SEO الافتراضية
export const DEFAULT_SEO = {
  titleTemplate: '%s | ستريم ماستر برو',
  defaultTitle: 'افضل اشتراك IPTV 2026 بدون تقطيع | ستريم ماستر برو',
  description:
    'اشتراك IPTV بدون تقطيع مع أكثر من 15,000 قناة و50,000 فيلم ومسلسل. سيرفرات فالكون وشارك وهالك. ثبات 99.9% ودعم فني 24/7.',
  ogImage: '/images/og-default.png',
  twitterHandle: '@streammasterpro',
  locale: 'ar_SA',
};

// ألوان العلامة التجارية (مكررة هنا للاستخدام في الـ CSS المخصص)
export const BRAND_COLORS = {
  bg: '#1a1233',
  bgSoft: '#0d0d0d',
  red: '#dc2626',
  amber: '#f59e0b',
} as const;

// إعدادات OneSignal (نفس App ID من الموقع الحالي)
export const ONESIGNAL = {
  appId: '393deae4-8700-4bda-a5c1-d767c0917ce2',
} as const;

// روابط التنقل الرئيسية
export const NAV_LINKS = [
  { href: '/', label: 'الرئيسية' },
  { href: '/store/', label: 'المتجر' },
  { href: '/servers/', label: 'السيرفرات' },
  { href: '/world-cup-2026/', label: 'كأس العالم' },
  { href: '/blog/', label: 'المدوّنة' },
  { href: '/faq/', label: 'الأسئلة الشائعة' },
  { href: '/about/', label: 'من نحن' },
] as const;

// روابط الـ Footer
export const FOOTER_LINKS = {
  shop: [
    { href: '/store/', label: 'كل الباقات' },
    { href: '/servers/falcon/', label: 'سيرفر فالكون' },
    { href: '/servers/shark/', label: 'سيرفر شارك' },
    { href: '/servers/hulk/', label: 'سيرفر هالك' },
    { href: '/world-cup-2026/', label: 'باقة كأس العالم' },
  ],
  help: [
    { href: '/faq/', label: 'الأسئلة الشائعة' },
    { href: '/blog/', label: 'المدوّنة' },
    { href: '/status/', label: 'حالة السيرفرات' },
  ],
  legal: [
    { href: '/terms/', label: 'شروط الاستخدام' },
    { href: '/privacy/', label: 'سياسة الخصوصية' },
    { href: '/refund/', label: 'سياسة الاسترداد' },
  ],
} as const;
