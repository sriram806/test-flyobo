import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/providers';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://flyobo.com'),
  title: {
    default: 'Flyobo - Book Your Dream Vacation',
    template: '%s | Flyobo'
  },
  description: 'Find and book amazing travel packages to destinations worldwide. Best prices guaranteed. Experience luxury travel with Flyobo.',
  keywords: 'travel, vacation, holiday, packages, tours, booking, luxury travel, international flights, hotel booking, travel deals',
  authors: [{ name: 'Flyobo' }],
  creator: 'Flyobo',
  publisher: 'Flyobo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://flyobo.com',
    siteName: 'Flyobo',
    title: 'Flyobo - Book Your Dream Vacation',
    description: 'Find and book amazing travel packages to destinations worldwide. Best prices guaranteed.',
    images: [
      {
        url: '/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Flyobo - Fly Off, Break Out!',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flyobo - Book Your Dream Vacation',
    description: 'Find and book amazing travel packages to destinations worldwide. Best prices guaranteed.',
    images: ['/images/banner.png'],
    creator: '@flyobo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://flyobo.com',
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