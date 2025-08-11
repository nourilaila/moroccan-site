import { Locale } from '../i18n';

export interface ProjectMeta {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: 'residential' | 'hospitality' | 'retail';
  thumbnail: string;
}

// In a real application you would parse MDX front matter or query a CMS.  For
// demonstration we define a handful of projects inline with translated titles.
const projectData: Record<Locale, ProjectMeta[]> = {
  en: [
    {
      slug: 'sahara-villa',
      title: 'Sahara Villa',
      location: 'Marrakesh, 2023',
      year: '2023',
      category: 'residential',
      thumbnail: '/images/projects/sahara-villa.jpg',
    },
    {
      slug: 'atlas-riad',
      title: 'Atlas Riad',
      location: 'Fes, 2024',
      year: '2024',
      category: 'hospitality',
      thumbnail: '/images/projects/atlas-riad.jpg',
    },
    {
      slug: 'casablanca-boutique',
      title: 'Casablanca Boutique',
      location: 'Casablanca, 2025',
      year: '2025',
      category: 'retail',
      thumbnail: '/images/projects/casablanca-boutique.jpg',
    },
  ],
  fr: [
    {
      slug: 'sahara-villa',
      title: 'Villa du Sahara',
      location: 'Marrakech, 2023',
      year: '2023',
      category: 'residential',
      thumbnail: '/images/projects/sahara-villa.jpg',
    },
    {
      slug: 'atlas-riad',
      title: 'Riad de l’Atlas',
      location: 'Fès, 2024',
      year: '2024',
      category: 'hospitality',
      thumbnail: '/images/projects/atlas-riad.jpg',
    },
    {
      slug: 'casablanca-boutique',
      title: 'Boutique de Casablanca',
      location: 'Casablanca, 2025',
      year: '2025',
      category: 'retail',
      thumbnail: '/images/projects/casablanca-boutique.jpg',
    },
  ],
  ar: [
    {
      slug: 'sahara-villa',
      title: 'فيلا الصحراء',
      location: 'مراكش، 2023',
      year: '2023',
      category: 'residential',
      thumbnail: '/images/projects/sahara-villa.jpg',
    },
    {
      slug: 'atlas-riad',
      title: 'رياض الأطلس',
      location: 'فاس، 2024',
      year: '2024',
      category: 'hospitality',
      thumbnail: '/images/projects/atlas-riad.jpg',
    },
    {
      slug: 'casablanca-boutique',
      title: 'بوتيك الدار البيضاء',
      location: 'الدار البيضاء، 2025',
      year: '2025',
      category: 'retail',
      thumbnail: '/images/projects/casablanca-boutique.jpg',
    },
  ],
};

export function getProjects(locale: Locale, limit = 3): ProjectMeta[] {
  const list = projectData[locale] ?? projectData.en;
  return limit ? list.slice(0, limit) : list;
}