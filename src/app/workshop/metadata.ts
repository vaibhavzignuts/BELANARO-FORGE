import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Workshop | BELANARO FORGE LLP',
  description:
    'Explore BELANARO FORGE LLP workshop capabilities. Space reserved for photo gallery and a quick overview of facilities and processes.',
  alternates: {
    canonical: '/workshop',
  },
  openGraph: {
    title: 'Workshop | BELANARO FORGE LLP',
    description:
      'Explore BELANARO FORGE LLP workshop capabilities. Space reserved for photo gallery and a quick overview of facilities and processes.',
    url: `${SITE_URL}/workshop`,
    type: 'website',
  },
};

