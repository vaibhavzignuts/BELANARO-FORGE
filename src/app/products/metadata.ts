import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title:
    'Forged Products | Bearing Rings, Auto Parts, Flanges & Shafts | BELANARO FORGE LLP',
  description: `Browse BELANARO FORGE LLP's range of bearing rings, automotive forgings, flanges, shafts, and precision-forged components engineered for global OEMs.`,
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Forged Products | BELANARO FORGE LLP',
    description: `Browse BELANARO FORGE LLP's range of bearing rings, automotive forgings, flanges, shafts, and precision-forged components engineered for global OEMs.`,
    url: `${SITE_URL}/products`,
    type: 'website',
  },
};


