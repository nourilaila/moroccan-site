import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Moroccan Site',
  description: 'Beautiful Moroccan architecture and design',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
