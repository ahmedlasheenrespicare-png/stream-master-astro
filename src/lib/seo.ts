/**
 * أدوات مساعدة لـ SEO و Schema.org
 */

import { SITE } from '../consts';

export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * بناء URL الكامل من مسار
 */
export function fullUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${cleanPath}`;
}

/**
 * Schema.org: Organization (يضاف مرة واحدة في الـ Layout)
 */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.nameEn,
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  description: SITE.description,
  foundingDate: String(SITE.founded),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'الرياض',
    addressCountry: 'SA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: SITE.email,
    availableLanguage: ['Arabic', 'English'],
  },
  sameAs: Object.values(SITE.social),
};

/**
 * Schema.org: WebSite مع SearchAction
 */
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  inLanguage: 'ar-SA',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

/**
 * Schema.org: Article لمدوّنة
 */
export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: Date;
  modifiedTime?: Date;
  author?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: [fullUrl(opts.image)],
    datePublished: opts.publishedTime.toISOString(),
    dateModified: (opts.modifiedTime ?? opts.publishedTime).toISOString(),
    author: {
      '@type': 'Organization',
      name: opts.author ?? SITE.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/icon-512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url,
    },
    inLanguage: 'ar-SA',
  };
}

/**
 * Schema.org: FAQPage
 */
export function faqSchema(
  faqs: { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema.org: Product لباقة اشتراك
 */
export function productSchema(opts: {
  name: string;
  description: string;
  price: number;
  url: string;
  rating?: { value: number; count: number };
}): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    brand: { '@type': 'Brand', name: SITE.name },
    url: opts.url,
    offers: {
      '@type': 'Offer',
      price: String(opts.price),
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
      url: opts.url,
      seller: { '@type': 'Organization', name: SITE.name },
    },
  };

  if (opts.rating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(opts.rating.value),
      reviewCount: String(opts.rating.count),
      bestRating: '5',
      worstRating: '1',
    };
  }

  return schema;
}

/**
 * Schema.org: BreadcrumbList
 */
export function breadcrumbSchema(
  items: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
