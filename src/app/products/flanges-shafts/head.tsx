import { buildHeadTags } from '@/lib/seo/head';

const title = 'Forged Flanges & Shafts | Industrial & Automotive Applications';
const description =
  'Precision-forged flanges, shafts, and hubs manufactured by BELANARO FORGE LLP with concentricity control, ultrasonic testing, and balanced machining.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/products/flanges-shafts',
  });
}

