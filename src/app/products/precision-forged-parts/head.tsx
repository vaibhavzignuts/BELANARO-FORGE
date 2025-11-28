import { buildHeadTags } from '@/lib/seo/head';

const title = 'Precision Forged Parts | Custom Closed & Open Die Solutions';
const description =
  'Custom-engineered precision forgings from BELANARO FORGE LLP with controlled grain flow, repeatable heat treatment, and complete machining support.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/products/precision-forged-parts',
  });
}

