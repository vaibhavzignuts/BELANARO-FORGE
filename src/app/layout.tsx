import type { Metadata } from 'next';
import { Inter, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/shared/WhatsAppFloat';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import Header from './components/layout/Header';
import { ThemeProvider } from '@/lib/theme/ThemeProvider';
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from '@/lib/seo/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE,
      contactType: 'sales',
      email: CONTACT_EMAIL,
      areaServed: ['IN', 'US', 'EU', 'AS'],
      availableLanguage: ['en'],
    },
  ],
  sameAs: SOCIAL_PROFILES,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_ADDRESS,
    addressCountry: 'IN',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const metadata: Metadata = {
  title: 'BELANARO FORGE LLP - Precision Forging. Global Strength.',
  description:
    'Leading manufacturer and exporter of bearing rings, auto parts, and precision-forged components from India. Trusted by global OEMs across Europe, USA, Middle East, and Asia.',
  keywords: [
    'belanaroforge',
    'belanaro forge',
    'BELANARO FORGE LLP',
    'forging manufacturer in India',
    'bearing ring exporter',
    'auto parts forging company',
    'precision forged components supplier',
    'custom forging manufacturer',
    'forged flanges India',
    'Rajkot forging',
  ],
  authors: [{ name: 'BELANARO FORGE LLP' }],
  creator: 'BELANARO FORGE LLP',
  publisher: 'BELANARO FORGE LLP',
  metadataBase: new URL('https://www.belanaroforge.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'es-ES': '/es',
      'fr-FR': '/fr',
    },
  },
  openGraph: {
    title: 'BELANARO FORGE LLP - Precision Forging. Global Strength.',
    description:
      'Delivering high-performance bearing rings, auto parts, and precision-forged components from India to the world.',
    url: 'https://www.belanaroforge.com',
    siteName: 'BELANARO FORGE LLP',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BELANARO FORGE LLP',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BELANARO FORGE LLP - Precision Forging. Global Strength.',
    description:
      'Delivering high-performance bearing rings, auto parts, and precision-forged components from India to the world.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppFloat phoneNumber="+918735030126" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
