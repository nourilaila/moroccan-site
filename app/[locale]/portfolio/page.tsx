import type { Locale } from "../../../i18n";
import { getProjects } from "../../../lib/content";
import PortfolioGridClient from "../../../components/PortfolioGridClient";
export default async function PortfolioPage({ params: { locale } }: { params: { locale: Locale }}) {
  const projects = getProjects(locale, 100);
  return (
    <section className="container mx-auto py-16">
      <h1 className="font-heading text-3xl mb-6">Portfolio</h1>
      <PortfolioGridClient projects={projects} locale={locale} />
    </section>
  );
}
