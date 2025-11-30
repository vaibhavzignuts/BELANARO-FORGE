import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Manufacturing | BELANARO FORGE LLP',
  description:
    'Where technology meets strength. Explore BELANARO FORGE LLP manufacturing capabilities: forging hammers, hydraulic presses, ring rolling, CNC, and heat treatment.',
  alternates: {
    canonical: '/manufacturing',
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
    title: 'Manufacturing | BELANARO FORGE LLP',
    description:
      'Where technology meets strength. Explore BELANARO FORGE LLP manufacturing capabilities: forging hammers, hydraulic presses, ring rolling, CNC, and heat treatment.',
    url: `${SITE_URL}/manufacturing`,
    type: 'website',
  },
};

