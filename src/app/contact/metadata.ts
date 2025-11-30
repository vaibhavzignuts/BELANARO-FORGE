import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo/config';

export const metadata: Metadata = {
  title: 'Contact | BELANARO FORGE LLP',
  description:
    "Let's build a strong partnership. Contact BELANARO FORGE LLP for inquiries, collaboration, or partnerships.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | BELANARO FORGE LLP',
    description:
      "Let's build a strong partnership. Contact BELANARO FORGE LLP for inquiries, collaboration, or partnerships.",
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
};

