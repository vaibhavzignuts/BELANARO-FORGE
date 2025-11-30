import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Flanges & Shafts | Industrial Flanges | BELANARO FORGE LLP',
  description:
    'Industrial and automotive flanges and shafts with perfect concentricity and balance. 100% crack-free and ultrasonic tested. Custom sizes available.',
  alternates: {
    canonical: '/products/flanges-shafts',
  },
  openGraph: {
    title: 'Flanges & Shafts | BELANARO FORGE LLP',
    description:
      'Industrial and automotive flanges and shafts with perfect concentricity and balance. 100% crack-free and ultrasonic tested.',
    url: `${SITE_URL}/products/flanges-shafts`,
    type: 'website',
  },
};

