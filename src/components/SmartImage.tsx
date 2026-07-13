import type { ImgHTMLAttributes, SyntheticEvent } from 'react';

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'onError'> & {
  alt: string;
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK_SRC = '/images/hero_wine.webp';

const toPngFallback = (src?: string) => {
  if (!src || !src.endsWith('.webp')) return undefined;
  return src.replace(/\.webp$/, '.png');
};

export const SmartImage = ({
  src,
  alt,
  fallbackSrc,
  loading = 'lazy',
  decoding = 'async',
  ...imageProps
}: SmartImageProps) => {
  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const image = event.currentTarget;
    const triedSources = new Set((image.dataset.triedSources ?? '').split('|').filter(Boolean));
    triedSources.add(image.src);
    triedSources.add(image.currentSrc);

    const nextSource = [toPngFallback(src), fallbackSrc, DEFAULT_FALLBACK_SRC].find((candidate) => {
      if (!candidate) return false;
      const absoluteCandidate = new URL(candidate, window.location.href).href;
      return !triedSources.has(candidate) && !triedSources.has(absoluteCandidate);
    });

    image.dataset.triedSources = Array.from(triedSources).join('|');

    if (nextSource) {
      image.src = nextSource;
      return;
    }

    image.style.visibility = 'hidden';
  };

  return (
    <img
      src={src ?? fallbackSrc ?? DEFAULT_FALLBACK_SRC}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      {...imageProps}
    />
  );
};
