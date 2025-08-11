import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

interface Props {
  locale: string;
}

/**
 * Primary site header containing the brand mark, navigation links and language
 * selector.  Navigation labels are translated manually here for brevity; in a
 * full implementation they would come from your i18n messages.
 */
export default function Header({ locale }: Props) {
  const nav: { href: string; label: string }[] = (() => {
    switch (locale) {
      case 'fr':
        return [
          { href: `/${locale}/portfolio`, label: 'Portfolio' },
          { href: `/${locale}/studio`, label: 'Studio' },
          { href: `/${locale}/materials`, label: 'Matériaux' },
          { href: `/${locale}/journal`, label: 'Journal' },
          { href: `/${locale}/contact`, label: 'Contact' },
        ];
      case 'ar':
        return [
          { href: `/${locale}/portfolio`, label: 'المشاريع' },
          { href: `/${locale}/studio`, label: 'الاستوديو' },
          { href: `/${locale}/materials`, label: 'المواد' },
          { href: `/${locale}/journal`, label: 'المدونة' },
          { href: `/${locale}/contact`, label: 'اتصل' },
        ];
      default:
        return [
          { href: `/${locale}/portfolio`, label: 'Portfolio' },
          { href: `/${locale}/studio`, label: 'Studio' },
          { href: `/${locale}/materials`, label: 'Materials' },
          { href: `/${locale}/journal`, label: 'Journal' },
          { href: `/${locale}/contact`, label: 'Contact' },
        ];
    }
  })();

  return (
    <header className="relative z-50 border-b border-bone-100 bg-sand-50 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={`/${locale}`}> 
          <span className="font-heading text-2xl text-terracotta-900">Studio</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          {nav.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-terracotta-600">
              {label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}