import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Corporate Social Responsibility | CSR | BELANARO FORGE LLP',
  description:
    'BELANARO FORGE LLP CSR initiatives: education, healthcare, environmental conservation, rural development, women empowerment, and farmer support.',
  alternates: {
    canonical: '/csr',
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
    title: 'Corporate Social Responsibility | BELANARO FORGE LLP',
    description:
      'BELANARO FORGE LLP CSR initiatives focused on sustainable development, social welfare, and environmental stewardship.',
    url: `${SITE_URL}/csr`,
    type: 'website',
  },
};

