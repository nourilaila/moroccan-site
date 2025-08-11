"use client";
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '../i18n';
// We avoid pulling in the `clsx` package to reduce bundle size.  Build a class
// string manually.

const labels: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  ar: 'ع',
};

/**
 * Renders a horizontal group of buttons allowing the user to switch between
 * languages.  The component calculates the base pathname (stripping the
 * existing locale segment) and re‑navigates when a new language is selected.
 */
export default function LanguageSwitcher() {
  const pathname = usePathname() || '/en';
  const router = useRouter();
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = locales.includes(segments[0] as any) ? segments[0] : 'en';
  const rest = segments.slice(1).join('/');

  const base = rest ? `/${rest}` : '';

  return (
    <div className="flex gap-2">
      {locales.map((code) => (
        <button
          key={code}
          className={
            'px-2 py-1 text-sm font-medium rounded ' +
            (code === currentLocale
              ? 'bg-terracotta-600 text-bone-100 cursor-default'
              : 'bg-bone-100 text-terracotta-600 hover:bg-terracotta-300')
          }
          onClick={() => {
            if (code === currentLocale) return;
            router.push(`/${code}${base}`);
          }}
        >
          {labels[code]}
        </button>
      ))}
    </div>
  );
}