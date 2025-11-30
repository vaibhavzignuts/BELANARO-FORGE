import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Automotive Components | Auto Parts Forging | BELANARO FORGE LLP',
  description:
    'Critical automotive forgings through closed-die and ring-rolling processes. Steering knuckles, suspension arms, gear/differential parts, yokes, and axles.',
  alternates: {
    canonical: '/products/auto-components',
  },
  openGraph: {
    title: 'Automotive Components | BELANARO FORGE LLP',
    description:
      'Critical automotive forgings through closed-die and ring-rolling processes for optimal strength and reliability.',
    url: `${SITE_URL}/products/auto-components`,
    type: 'website',
  },
};

