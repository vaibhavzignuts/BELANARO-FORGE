const encodeSegment = (segment: string) => encodeURIComponent(segment);

const joinSegments = (segments: string[]) =>
  segments.map(encodeSegment).join('/');

export const BELANARO_ASSET_ROOT = 'Belanaro forge llp';

export const buildBelanaroAssetPath = (...segments: string[]) => {
  const allSegments = [BELANARO_ASSET_ROOT, ...segments];
  return `/${joinSegments(allSegments)}`;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

