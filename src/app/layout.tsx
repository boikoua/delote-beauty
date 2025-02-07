import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import './../styles/globals.scss';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Delote Beauty',
  description: 'Beauty salon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <head>
        <link
          rel="shortcut icon"
          href="./images/logo.png"
          type="image/x-icon"
        />
      </head>
      <body className={cormorantGaramond.className}>
        <Navigation />
        <div className="wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
