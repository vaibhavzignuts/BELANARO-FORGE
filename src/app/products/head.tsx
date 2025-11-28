import { buildHeadTags } from '@/lib/seo/head';

const title = 'Forged Products | Bearing Rings, Auto Parts, Flanges & Shafts';
const description =
  'Browse BELANARO FORGE LLP’s range of bearing rings, automotive forgings, flanges, shafts, and precision-forged components engineered for global OEMs.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/products',
  });
}

