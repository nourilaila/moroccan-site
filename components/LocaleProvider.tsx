"use client";
import { createContext, useContext, ReactNode } from 'react';

export const LocaleContext = createContext('en');

interface Props {
  locale: string;
  children: ReactNode;
}

/**
 * Provides the current locale to client components via React context.  In
 * addition to the context, the layout itself sets `dir` and `lang` attributes
 * on the `<html>` element.  Client components can call `useLocale()` to
 * consume the locale value.
 */
export default function LocaleProvider({ locale, children }: Props) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}