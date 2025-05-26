import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/providers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flyobo - Book Your Dream Vacation',
  description: 'Find and book amazing travel packages to destinations worldwide. Best prices guaranteed.',
  keywords: 'travel, vacation, holiday, packages, tours, booking',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://flyobo.com',
    siteName: 'Flyobo',
    title: 'Flyobo - Book Your Dream Vacation',
    description: 'Find and book amazing travel packages to destinations worldwide. Best prices guaranteed.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
        width: 1200,
        height: 630,
        alt: 'Flyobo - Book Your Dream Vacation',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
        {/* Google Analytics Script */}
        <Script 
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}