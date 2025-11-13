'use client';

import Image from 'next/image';
import { GalleryImage } from '@/lib/assetPaths';

type GalleryGridProps = {
  images: GalleryImage[];
  className?: string;
  imageClassName?: string;
  itemClassName?: string;
  columns?: {
    base?: 1 | 2 | 3 | 4;
    sm?: 1 | 2 | 3 | 4;
    md?: 1 | 2 | 3 | 4;
    lg?: 1 | 2 | 3 | 4;
  };
};

const classNames = (...values: Array<string | undefined>) =>
  values.filter(Boolean).join(' ');

const columnClass = (value: 1 | 2 | 3 | 4, prefix?: string) => {
  const map: Record<1 | 2 | 3 | 4, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  const base = map[value];
  return prefix ? `${prefix}:${base}` : base;
};

const GalleryGrid = ({
  images,
  className,
  imageClassName,
  itemClassName,
  columns,
}: GalleryGridProps) => {
  const baseCols = columns?.base ?? 1;
  const smCols = columns?.sm ?? 2;
  const mdCols = columns?.md ?? 3;
  const lgCols = columns?.lg ?? 3;

  return (
    <div
      className={classNames(
        'grid gap-6',
        columnClass(baseCols),
        columnClass(smCols, 'sm'),
        columnClass(mdCols, 'md'),
        columnClass(lgCols, 'lg'),
        className
      )}
    >
      {images.map((image) => (
        <div
          key={image.src}
          className={classNames(
            'group relative overflow-hidden rounded-xl border border-steel-800 bg-steel-950',
            itemClassName
          )}
        >
          <div className="relative h-0 pb-[75%]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={classNames(
                'object-cover transition-transform duration-500 group-hover:scale-105',
                imageClassName
              )}
              sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
