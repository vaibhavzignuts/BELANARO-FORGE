import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Precision Forged Parts | Custom Forgings | BELANARO FORGE LLP',
  description:
    'Custom-engineered precision forgings produced as per client specifications and tolerances. From prototypes to bulk volumes. Up to 50 kg per piece.',
  alternates: {
    canonical: '/products/precision-forged-parts',
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
    title: 'Precision Forged Parts | BELANARO FORGE LLP',
    description:
      'Custom-engineered precision forgings produced as per client specifications and tolerances with batch-to-batch repeatability.',
    url: `${SITE_URL}/products/precision-forged-parts`,
    type: 'website',
  },
};

