import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ibrahimdobarialaw.com'),
  title: {
    default: 'Dobaria Law PC | Immigration & Family Lawyers in Lansdale, PA',
    template: 'Dobaria Law PC | %s',
  },
  description: 'Trusted immigration, family, business & real estate counsel serving Philadelphia & Montgomery County for 45+ years. Free consultation. Se habla español.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dobaria Law PC',
    title: 'Dobaria Law PC | Immigration & Family Lawyers in Lansdale, PA',
    description: 'Trusted immigration, family, business & real estate counsel serving Philadelphia & Montgomery County for 45+ years.',
    url: 'https://ibrahimdobarialaw.com',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'Dobaria Law PC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dobaria Law PC | Immigration & Family Lawyers in Lansdale, PA',
    description: 'Trusted immigration, family, business & real estate counsel serving Philadelphia & Montgomery County for 45+ years.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ibrahimdobarialaw.com',
  },
};

import LenisProvider from '@/components/LenisProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
