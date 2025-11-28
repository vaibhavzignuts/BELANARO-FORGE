import { buildHeadTags } from '@/lib/seo/head';

const title = 'Bearing Rings Manufacturer | Inner & Outer Rings';
const description =
  'BELANARO FORGE LLP produces defect-free inner and outer bearing rings with tight tolerances, heat treatment, and CNC machining for global bearing OEMs.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/products/bearing-rings',
  });
}

