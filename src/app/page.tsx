import type { Metadata } from 'next';
import Hero from '@/app/components/home/Hero';
import KeyHighlights from '@/app/components/home/KeyHighlights';
import ProductShowcase from '@/app/components/home/ProductShowcase';
import GlobalReach from '@/app/components/home/GlobalReach';
import CTASection from '@/app/components/home/CTASection';
import { SITE_URL } from '@/lib/seo/config';

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
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'BELANARO FORGE LLP - Precision Forging. Global Strength.',
    description:
      'Delivering high-performance bearing rings, auto parts, and precision-forged components from India to the world.',
    url: SITE_URL,
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
};

export default function Home() {
  return (
    <>
      <Hero />
      <KeyHighlights />
      <ProductShowcase />
      <GlobalReach />
      <CTASection />
    </>
  );
}
