/**
 * معلومات السيرفرات الكاملة - مواصفات + نقاط القوة + الجمهور المستهدف
 */

import type { ServerName } from './pricing';

export interface ServerInfo {
  name: ServerName;
  displayName: string;
  tagline: string;
  description: string;
  specs: {
    quality: string; // أقصى جودة
    uptime: string; // نسبة الثبات
    devices: number; // عدد الأجهزة المتزامنة
    channels: string; // عدد القنوات
    vod: string; // مكتبة الأفلام والمسلسلات
    catchup: string; // مدة الـ Catch-up
  };
  features: string[]; // مميزات رئيسية
  bestFor: string[]; // الجمهور المستهدف
  color: string; // لون البطاقة
  icon: string; // emoji أو رمز
  badge?: string;
}

export const SERVERS: Record<ServerName, ServerInfo> = {
  falcon: {
    name: 'falcon',
    displayName: 'فالكون',
    tagline: 'الأقوى. الأوضح. الأفضل.',
    description: 'سيرفر مخصص للأجهزة الحديثة بدقة 4K و8K بدون أي تقطيع.',
    specs: {
      quality: 'حتى 8K',
      uptime: '99.9%',
      devices: 3,
      channels: '+15,000',
      vod: '+50,000',
      catchup: '7 أيام',
    },
    features: [
      'جودة صورة استثنائية حتى 8K',
      'صفر تقطيع مع اتصال مستقر',
      'دعم فني مخصص لكبار المشتركين',
      'أولوية الوصول للمحتوى الجديد',
      'تحديثات أسبوعية للقنوات',
    ],
    bestFor: [
      'أصحاب أجهزة التلفاز الحديثة (4K/8K)',
      'من يبحثون عن أعلى جودة ممكنة',
      'العائلات الكبيرة (حتى 3 أجهزة)',
      'محبي الأفلام والمسلسلات بجودة سينمائية',
    ],
    color: 'red',
    icon: '🦅',
    badge: 'الأكثر طلباً',
  },
  shark: {
    name: 'shark',
    displayName: 'شارك',
    tagline: 'سرعة فائقة. سعر معقول.',
    description: 'سيرفر متوازن بين السعر والأداء، مناسب لمعظم الأجهزة.',
    specs: {
      quality: 'حتى 4K',
      uptime: '99.8%',
      devices: 2,
      channels: '+15,000',
      vod: '+45,000',
      catchup: '5 أيام',
    },
    features: [
      'توازن مثالي بين السعر والأداء',
      'جودة Full HD و 4K ممتازة',
      'استجابة سريعة للقنوات',
      'دعم فني سريع ومتجاوب',
      'مناسب لمشاهدة المباريات',
    ],
    bestFor: [
      'معظم المشتركين في السعودية والخليج',
      'من يبحث عن أفضل قيمة مقابل السعر',
      'الأجهزة المتوسطة إلى الحديثة',
      'محبي القنوات الرياضية',
    ],
    color: 'amber',
    icon: '🦈',
  },
  hulk: {
    name: 'hulk',
    displayName: 'هالك',
    tagline: 'قوة التحمل. ثبات الأساطير.',
    description: 'سيرفر ثقيل مصمم للمشاهدة الطويلة وبث المباريات بدون انقطاع.',
    specs: {
      quality: 'حتى Full HD',
      uptime: '99.9%',
      devices: 2,
      channels: '+12,000',
      vod: '+40,000',
      catchup: '3 أيام',
    },
    features: [
      'تحمّل ضغط المشاهدة الطويلة',
      'مثالي لبث المباريات الحية',
      'ثبات استثنائي للأجهزة القديمة',
      'تحديث مستمر للقنوات الرياضية',
      'دعم فني متخصص',
    ],
    bestFor: [
      'محبي كرة القدم والمباريات الطويلة',
      'أصحاب الأجهزة القديمة',
      'من يشاهد لساعات متواصلة',
      'من يحتاج سيرفر لا ينقطع أبدًا',
    ],
    color: 'green',
    icon: '💪',
    badge: 'الأفضل للمباريات',
  },
  aronium: {
    name: 'aronium',
    displayName: 'أرونيوم',
    tagline: 'الاختيار الاقتصادي الذكي.',
    description: 'سيرفر مدمج للأجهزة المتوسطة، يقدم تجربة مشاهدة سلسة بسعر مناسب.',
    specs: {
      quality: 'حتى HD',
      uptime: '99.5%',
      devices: 1,
      channels: '+10,000',
      vod: '+30,000',
      catchup: '2 أيام',
    },
    features: [
      'أرخص باقة مع جودة مقبولة',
      'مناسب للأجهزة المتوسطة',
      'سهل التثبيت والاستخدام',
      'دعم فني لكل المشتركين',
      'خيار ممتاز لتجربة الخدمة أولًا',
    ],
    bestFor: [
      'الميزانية المحدودة',
      'من يريد تجربة IPTV أولًا',
      'الأجهزة المتوسطة والقديمة',
      'المشاهدة العائلية البسيطة',
    ],
    color: 'blue',
    icon: '💎',
  },
  istar: {
    name: 'istar',
    displayName: 'آي ستار',
    tagline: 'النجم الصاعد في عالم IPTV.',
    description: 'سيرفر متطور بسرعة استجابة فائقة، مثالي للأجهزة الذكية.',
    specs: {
      quality: 'حتى 4K',
      uptime: '99.7%',
      devices: 2,
      channels: '+13,000',
      vod: '+45,000',
      catchup: '5 أيام',
    },
    features: [
      'سرعة استجابة فائقة للقنوات',
      'مثالي للأجهزة الذكية',
      'جودة صورة ممتازة',
      'تحديثات يومية',
      'دعم فني سريع',
    ],
    bestFor: [
      'أصحاب Apple TV و Android TV',
      'من يقدّر سرعة الاستجابة',
      'محبي المحتوى المتجدد',
      'المستخدمين العصريين',
    ],
    color: 'purple',
    icon: '⭐',
    badge: 'جديد',
  },
};

export const SERVER_ORDER: ServerName[] = ['falcon', 'shark', 'hulk', 'aronium', 'istar'];
