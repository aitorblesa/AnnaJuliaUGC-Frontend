import { Metadata } from 'next';
import { Jost } from 'next/font/google';

import './globals.css';
import { query } from '@/lib/strapi';

const jost = Jost({
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
});

// Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-jost antialiased`}>
        {children}
      </body>
    </html>
  );
}
