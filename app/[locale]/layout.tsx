import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import '../globals.css';
import { locales, Locale } from '../../i18n';
import LocaleProvider from '../../components/LocaleProvider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface LayoutProps {
  children: ReactNode;
  params: { locale: Locale };
}

/**
 * Locale-specific layout that sets the `lang` and `dir`
 * attributes, and injects the header and footer.  The
 * `LocaleProvider` propagates the current locale to client components.
 */
export default function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = params;
  if (!locales.includes(locale)) {
    return notFound();
  }
  return (
    <div lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <LocaleProvider locale={locale}>
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </LocaleProvider>
    </div>
  );
}