/**
 * قائمة الأسعار لجميع السيرفرات
 * يعدّل مرة واحدة هنا ويتحدث في كل صفحات الموقع تلقائيًا
 */

export type ServerName = 'falcon' | 'shark' | 'hulk' | 'aronium' | 'istar';

export interface PricePlan {
  months: number; // عدد الأشهر
  label: string; // اسم الباقة
  priceSar: number; // السعر بالريال السعودي
  originalPrice?: number; // السعر الأصلي قبل الخصم
  savePercent?: number; // نسبة التوفير
  popular?: boolean; // الأكثر طلباً
  features: string[]; // المميزات
}

export interface ServerPricing {
  server: ServerName;
  displayName: string;
  tagline: string;
  description: string;
  badge?: string; // شارة (مثل "الأقوى")
  plans: PricePlan[];
}

// ⚠️ الأسعار هنا بيانات افتراضية - حدّثها من لوحة Decap CMS لاحقًا
export const SERVER_PRICING: Record<ServerName, ServerPricing> = {
  falcon: {
    server: 'falcon',
    displayName: 'فالكون',
    tagline: 'الأقوى. الأوضح. الأفضل.',
    description: 'سيرفر مخصص للأجهزة الحديثة بدقة 4K و8K بدون أي تقطيع.',
    badge: 'الأكثر طلباً',
    plans: [
      {
        months: 1,
        label: 'شهر واحد',
        priceSar: 45,
        originalPrice: 55,
        savePercent: 18,
        features: ['جودة 4K و 8K', 'بدون تقطيع', 'دعم فني 24/7'],
      },
      {
        months: 3,
        label: '3 أشهر',
        priceSar: 110,
        originalPrice: 165,
        savePercent: 33,
        features: ['جودة 4K و 8K', 'بدون تقطيع', 'دعم فني 24/7'],
        popular: true,
      },
      {
        months: 6,
        label: '6 أشهر',
        priceSar: 199,
        originalPrice: 330,
        savePercent: 40,
        features: ['جودة 4K و 8K', 'بدون تقطيع', 'دعم فني 24/7'],
      },
      {
        months: 12,
        label: '12 شهر',
        priceSar: 349,
        originalPrice: 660,
        savePercent: 47,
        features: ['جودة 4K و 8K', 'بدون تقطيع', 'دعم فني 24/7', 'توفير 311 ريال'],
      },
    ],
  },
  shark: {
    server: 'shark',
    displayName: 'شارك',
    tagline: 'سرعة فائقة. سعر معقول.',
    description: 'سيرفر متوازن بين السعر والأداء، مناسب لمعظم الأجهزة.',
    plans: [
      {
        months: 1,
        label: 'شهر واحد',
        priceSar: 35,
        features: ['جودة Full HD و 4K', 'استقرار ممتاز', 'دعم فني سريع'],
      },
      {
        months: 3,
        label: '3 أشهر',
        priceSar: 89,
        originalPrice: 105,
        savePercent: 15,
        features: ['جودة Full HD و 4K', 'استقرار ممتاز', 'دعم فني سريع'],
        popular: true,
      },
      {
        months: 6,
        label: '6 أشهر',
        priceSar: 159,
        originalPrice: 210,
        savePercent: 24,
        features: ['جودة Full HD و 4K', 'استقرار ممتاز', 'دعم فني سريع'],
      },
      {
        months: 12,
        label: '12 شهر',
        priceSar: 279,
        originalPrice: 420,
        savePercent: 34,
        features: ['جودة Full HD و 4K', 'استقرار ممتاز', 'دعم فني سريع'],
      },
    ],
  },
  hulk: {
    server: 'hulk',
    displayName: 'هالك',
    tagline: 'قوة التحمل. ثبات الأساطير.',
    description: 'سيرفر ثقيل مصمم للمشاهدة الطويلة وبث المباريات بدون انقطاع.',
    badge: 'الأفضل للأجهزة القديمة',
    plans: [
      {
        months: 1,
        label: 'شهر واحد',
        priceSar: 40,
        features: ['جودة HD و Full HD', 'بث مستقر للمباريات', 'دعم فني 24/7'],
      },
      {
        months: 3,
        label: '3 أشهر',
        priceSar: 99,
        originalPrice: 120,
        savePercent: 18,
        features: ['جودة HD و Full HD', 'بث مستقر للمباريات', 'دعم فني 24/7'],
        popular: true,
      },
      {
        months: 6,
        label: '6 أشهر',
        priceSar: 179,
        originalPrice: 240,
        savePercent: 25,
        features: ['جودة HD و Full HD', 'بث مستقر للمباريات', 'دعم فني 24/7'],
      },
      {
        months: 12,
        label: '12 شهر',
        priceSar: 319,
        originalPrice: 480,
        savePercent: 34,
        features: ['جودة HD و Full HD', 'بث مستقر للمباريات', 'دعم فني 24/7'],
      },
    ],
  },
  aronium: {
    server: 'aronium',
    displayName: 'أرونيوم',
    tagline: 'الاختيار الاقتصادي الذكي.',
    description: 'سيرفر مدمج للأجهزة المتوسطة، يقدم تجربة مشاهدة سلسة بسعر مناسب.',
    plans: [
      {
        months: 1,
        label: 'شهر واحد',
        priceSar: 25,
        features: ['جودة HD', 'مناسب للأجهزة المتوسطة', 'دعم فني'],
      },
      {
        months: 3,
        label: '3 أشهر',
        priceSar: 65,
        originalPrice: 75,
        savePercent: 13,
        features: ['جودة HD', 'مناسب للأجهزة المتوسطة', 'دعم فني'],
        popular: true,
      },
      {
        months: 6,
        label: '6 أشهر',
        priceSar: 119,
        originalPrice: 150,
        savePercent: 21,
        features: ['جودة HD', 'مناسب للأجهزة المتوسطة', 'دعم فني'],
      },
      {
        months: 12,
        label: '12 شهر',
        priceSar: 199,
        originalPrice: 300,
        savePercent: 34,
        features: ['جودة HD', 'مناسب للأجهزة المتوسطة', 'دعم فني'],
      },
    ],
  },
  istar: {
    server: 'istar',
    displayName: 'آي ستار',
    tagline: 'النجم الصاعد في عالم IPTV.',
    description: 'سيرفر متطور بسرعة استجابة فائقة، مثالي للأجهزة الذكية.',
    badge: 'جديد',
    plans: [
      {
        months: 1,
        label: 'شهر واحد',
        priceSar: 39,
        features: ['جودة Full HD و 4K', 'سرعة استجابة فائقة', 'دعم فني'],
      },
      {
        months: 3,
        label: '3 أشهر',
        priceSar: 99,
        originalPrice: 117,
        savePercent: 15,
        features: ['جودة Full HD و 4K', 'سرعة استجابة فائقة', 'دعم فني'],
        popular: true,
      },
      {
        months: 6,
        label: '6 أشهر',
        priceSar: 175,
        originalPrice: 234,
        savePercent: 25,
        features: ['جودة Full HD و 4K', 'سرعة استجابة فائقة', 'دعم فني'],
      },
      {
        months: 12,
        label: '12 شهر',
        priceSar: 309,
        originalPrice: 468,
        savePercent: 34,
        features: ['جودة Full HD و 4K', 'سرعة استجابة فائقة', 'دعم فني'],
      },
    ],
  },
};

/**
 * دالة مساعدة: تحويل السعر إلى نص منسّق للعرض
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * دالة مساعدة: حساب نسبة الخصم بين سعرين
 */
export function calcSavePercent(current: number, original: number): number {
  return Math.round(((original - current) / original) * 100);
}
