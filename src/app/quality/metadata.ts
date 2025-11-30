import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Quality | BELANARO FORGE LLP',
  description:
    'Zero-defect manufacturing philosophy at BELANARO FORGE LLP with material testing, dimensional inspections, hardness and metallurgical checks, and traceable batch reports.',
  alternates: {
    canonical: '/quality',
  },
  openGraph: {
    title: 'Quality | BELANARO FORGE LLP',
    description:
      'Zero-defect manufacturing philosophy at BELANARO FORGE LLP with material testing, dimensional inspections, hardness and metallurgical checks, and traceable batch reports.',
    url: `${SITE_URL}/quality`,
    type: 'website',
  },
};

