import { buildHeadTags } from '@/lib/seo/head';

const title = 'Contact BELANARO FORGE LLP | Precision Forging Manufacturer';
const description =
  'Request quotes, share drawings, or speak with BELANARO FORGE LLP about precision-forged components, bearing rings, and automotive parts.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/contact',
  });
}

