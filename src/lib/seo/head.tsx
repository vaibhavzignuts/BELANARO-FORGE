import { DEFAULT_OG_IMAGE, DEFAULT_TWITTER_IMAGE, SITE_NAME, SITE_URL } from './config';

interface PageHeadOptions {
  title: string;
  description: string;
  urlPath: string;
  image?: string;
}

export function buildHeadTags({
  title,
  description,
  urlPath,
  image = DEFAULT_OG_IMAGE,
}: PageHeadOptions) {
  const url = `${SITE_URL}${urlPath}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_TWITTER_IMAGE} />
    </>
  );
}

