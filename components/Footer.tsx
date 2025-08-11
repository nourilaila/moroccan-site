import Link from 'next/link';

interface Props {
  locale: string;
}

/**
 * Site footer with newsletter subscription placeholder, language switcher and
 * social links.  In a complete implementation the newsletter form would post
 * to a server action or external provider.
 */
export default function Footer({ locale }: Props) {
  return (
    <footer className="mt-16 border-t border-bone-100 bg-bone-100 py-8 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="font-heading text-lg text-terracotta-900 mb-2">{locale === 'ar' ? 'النشرة البريدية' : locale === 'fr' ? 'Newsletter' : 'Newsletter'}</h2>
          <p className="max-w-sm">
            {locale === 'ar'
              ? 'اشترك للحصول على تحديثات حول المشاريع الجديدة والمقالات.'
              : locale === 'fr'
              ? 'Inscrivez‑vous pour recevoir des nouvelles sur nos projets et articles.'
              : 'Subscribe to receive updates about new projects and journal entries.'}
          </p>
          <form className="mt-4 flex max-w-md gap-2">
            <input
              type="email"
              placeholder={locale === 'ar' ? 'عنوان البريد الإلكتروني' : locale === 'fr' ? 'Votre email' : 'Your email'}
              className="w-full rounded border border-sand-50 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-terracotta-600"
            />
            <button type="submit" className="rounded bg-terracotta-600 px-4 py-2 text-bone-100 hover:bg-terracotta-900">
              {locale === 'ar' ? 'اشترك' : locale === 'fr' ? 'S’inscrire' : 'Subscribe'}
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2">
          <Link href={`/${locale}/`}>{locale === 'ar' ? 'الرئيسية' : locale === 'fr' ? 'Accueil' : 'Home'}</Link>
          <Link href={`/${locale}/portfolio`}>{locale === 'ar' ? 'المشاريع' : 'Portfolio'}</Link>
          <Link href={`/${locale}/studio`}>{locale === 'ar' ? 'الاستوديو' : 'Studio'}</Link>
          <Link href={`/${locale}/materials`}>{locale === 'ar' ? 'المواد' : locale === 'fr' ? 'Matériaux' : 'Materials'}</Link>
          <Link href={`/${locale}/journal`}>{locale === 'ar' ? 'المدونة' : 'Journal'}</Link>
          <Link href={`/${locale}/contact`}>{locale === 'ar' ? 'اتصل' : locale === 'fr' ? 'Contact' : 'Contact'}</Link>
        </div>
        <div className="flex gap-4 items-start">
          {/* Social links icons: placeholders; you could swap for SVG icons */}
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-terracotta-600">
            Instagram
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest" className="hover:text-terracotta-600">
            Pinterest
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-terracotta-600">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}