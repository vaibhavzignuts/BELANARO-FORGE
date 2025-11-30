import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Precision Forged Parts | Custom Forgings | BELANARO FORGE LLP',
  description:
    'Custom-engineered precision forgings produced as per client specifications and tolerances. From prototypes to bulk volumes. Up to 50 kg per piece.',
  alternates: {
    canonical: '/products/precision-forged-parts',
  },
  openGraph: {
    title: 'Precision Forged Parts | BELANARO FORGE LLP',
    description:
      'Custom-engineered precision forgings produced as per client specifications and tolerances with batch-to-batch repeatability.',
    url: `${SITE_URL}/products/precision-forged-parts`,
    type: 'website',
  },
};

