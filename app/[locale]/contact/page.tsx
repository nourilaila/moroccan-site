import type { Locale } from "../../../i18n";
import ContactFormClient from "../../../components/ContactFormClient";
export default async function ContactPage({ params: { locale } }: { params: { locale: Locale }}) {
  return (
    <section className="container mx-auto py-16">
      <h1 className="font-heading text-3xl mb-6">{locale === 'ar' ? 'اتصل بنا' : locale === 'fr' ? 'Contact' : 'Contact'}</h1>
      <ContactFormClient locale={locale} />
    </section>
  );
}
