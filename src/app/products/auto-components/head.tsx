import { buildHeadTags } from '@/lib/seo/head';

const title = 'Automotive Forgings | Steering, Drivetrain & Engine Parts';
const description =
  'Closed-die and ring-rolled automotive components from BELANARO FORGE LLP covering steering knuckles, drivetrain parts, engine flanges, and axle assemblies.';

export default function Head() {
  return buildHeadTags({
    title,
    description,
    urlPath: '/products/auto-components',
  });
}

