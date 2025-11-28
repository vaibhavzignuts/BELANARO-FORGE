import { buildHeadTags } from '@/lib/seo/head';

const title = 'Manufacturing Capabilities | Forging, Heat Treatment, CNC';
const description =
  'Explore BELANARO FORGE LLP’s manufacturing infrastructure including forging hammers, hydraulic presses, ring rolling, CNC machining, and heat treatment lines.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/manufacturing',
  });
}

