export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = typeof locales[number];

/**
 * The default locale used when a pathname does not start with a supported locale.  This
 * value is mirrored in `middleware.ts` to perform automatic redirects.
 */
export const defaultLocale: Locale = 'en';

/**
 * Load translation messages for a given locale.  Messages live in `messages.ts`
 * alongside your pages.  This helper returns a typed record of strings
 * corresponding to UI labels.
 */
export async function loadMessages(locale: Locale) {
  // Dynamically import the locale dictionary.  This pattern enables code splitting
  // and prevents bundling all languages into the initial payload.
  return (await import(`./messages/${locale}.ts`)).default;
}

/**
 * Derive the locale from a pathname (e.g. `/en/studio`).  If no locale prefix
 * exists, return `undefined`.
 */
export function getLocaleFromPath(path: string): Locale | undefined {
  const first = path.split('/')[1] as Locale;
  return locales.includes(first) ? first : undefined;
}