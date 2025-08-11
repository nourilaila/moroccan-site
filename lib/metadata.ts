import type { Metadata } from 'next';

interface MetadataOptions {
  title: string;
  description: string;
  locale: string;
  url: string;
  images?: string[];
}

/**
 * Generates a `Metadata` object for a page.  This helper centralises open
 * graph, Twitter cards and canonical URLs to simplify per‑page declarations.
 */
export function createMetadata({ title, description, locale, url, images = [] }: MetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url.replace(`/${locale}/`, '/en/'),
        fr: url.replace(`/${locale}/`, '/fr/'),
        ar: url.replace(`/${locale}/`, '/ar/'),
      },
    },
    openGraph: {
      title,
      description,
      locale,
      url,
      siteName: 'Moroccan Design Studio',
      images: images.map((img) => ({ url: img, width: 1200, height: 630 })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  };
}