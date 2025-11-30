import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Bearing Rings | Inner & Outer Rings | BELANARO FORGE LLP',
  description:
    'High roundness accuracy and superior surface finish bearing rings. Forged, heat-treated, and precision-machined in-house. Size range: 25 mm to 500+ mm.',
  alternates: {
    canonical: '/products/bearing-rings',
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
    title: 'Bearing Rings | BELANARO FORGE LLP',
    description:
      'High roundness accuracy and superior surface finish bearing rings. Forged, heat-treated, and precision-machined in-house.',
    url: `${SITE_URL}/products/bearing-rings`,
    type: 'website',
  },
};

