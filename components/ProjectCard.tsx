import Link from 'next/link';
import Image from 'next/image';
import type { ProjectMeta } from '../lib/content';

interface Props {
  project: ProjectMeta;
  locale: string;
}

/**
 * Displays a single project thumbnail with a subtle olive overlay on hover.  The
 * card links to the project detail page at `/[locale]/portfolio/[slug]`.  The
 * parent determines the grid layout; the card itself uses `aspect-square` to
 * maintain consistent sizing across breakpoints.
 */
export default function ProjectCard({ project, locale }: Props) {
  return (
    <Link
      href={`/${locale}/portfolio/${project.slug}`}
      className="group relative block h-full w-full overflow-hidden rounded-lg shadow-sm"
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-olive-900/0 transition-colors duration-300 group-hover:bg-olive-900/40" />
      {/* caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-bone-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="font-heading text-lg leading-tight">{project.title}</h3>
        <p className="text-sm">{project.location}</p>
      </div>
    </Link>
  );
}