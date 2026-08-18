/* Layout for the application. */

import type { Metadata } from 'next';
import Cursor from '@/components/Cursor';
import { fonts } from '@/styles/fonts';
import '@/styles/main.css';

export const metadata: Metadata = {
  title: 'The Mystic Framework - Under Development',
  description: 'Under development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fonts}>
      <body className="bg-background text-on-background font-sans antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
