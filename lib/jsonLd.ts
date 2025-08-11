/**
 * Helper functions to build JSON‑LD structures for SEO.  These objects can be
 * stringified and injected into `<script type="application/ld+json">` tags.
 */

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Moroccan Design Studio',
    url: 'https://example.com',
    logo: 'https://example.com/logo.png',
    sameAs: ['https://instagram.com', 'https://pinterest.com', 'https://linkedin.com'],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Moroccan Design Studio',
    url: 'https://example.com',
    description: 'An interior design studio blending Moroccan heritage with contemporary minimalism.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://example.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
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

interface ArticleOptions {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
  image?: string;
}

export function articleJsonLd({ title, description, datePublished, dateModified, authorName, url, image }: ArticleOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Moroccan Design Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://example.com/logo.png',
      },
    },
    mainEntityOfPage: url,
    image: image ? [image] : undefined,
  };
}