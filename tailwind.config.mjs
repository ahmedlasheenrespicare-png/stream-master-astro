/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/admin/**/*.html',
  ],
  // دعم RTL: نضع dir="rtl" في <html> وهذا يكفي
  theme: {
    extend: {
      colors: {
        // ألوان العلامة التجارية المستخرجة من الموقع الحالي
        brand: {
          bg: '#1a1233', // الخلفية الأساسية (بنفسجي عميق)
          'bg-soft': '#0d0d0d', // خلفية ثانوية (شبه أسود)
          red: '#dc2626', // لون الـ CTA الرئيسي (Tailwind red-600)
          'red-light': '#ef4444',
          amber: '#f59e0b', // لون ثانوي للتأكيد
          'amber-light': '#fbbf24',
        },
      },
      fontFamily: {
        // خطوط عربية نظامية أولاً، ثم خط Tajawal كاحتياطي
        sans: [
          '"Tajawal"',
          '"Cairo"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        // تحسين سلّم الخطوط للعربية
        'fluid-h1': 'clamp(2.25rem, 5vw, 4.5rem)',
        'fluid-h2': 'clamp(1.875rem, 4vw, 3.75rem)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(220,38,38,0.12), transparent 60%)',
        'noise-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.07 0 0 0 0 0.2 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
