import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

/**
 * Tailwind configuration defining the studio's colour palette and typographic scales.
 * Colours are derived from the brand tokens specified in the design brief.  We avoid
 * hard‑coding fonts in components by exposing CSS variables on the `<html>` element.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx,md}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terracotta: {
          900: '#7B3E2E',
          700: '#8B4E3E',
          600: '#B35E44',
          300: '#DFA58F',
        },
        olive: {
          900: '#2F3C2C',
          600: '#586B4A',
          300: '#7A8B6A',
        },
        sand: {
          50: '#F6F1EA',
          300: '#E8D5C0',
        },
        bone: {
          100: '#F2EAE0',
        },
        ink: {
          900: '#1E1B16',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        arabicHeading: ['var(--font-arabic-heading)', 'Amiri', 'serif'],
        arabicBody: ['var(--font-arabic-body)', 'Noto Kufi Arabic', 'sans-serif'],
      },
      // Custom container sizes to maintain generous margins on large screens
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Adds a `focus-visible` variant for better keyboard accessibility
    plugin(({ addVariant }) => {
      addVariant('focus-visible', '&:focus-visible');
    }),
  ],
};

export default config;