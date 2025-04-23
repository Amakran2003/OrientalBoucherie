import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration for Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03', 
  useCdn: true, // Uses the cached API CDN
  token: import.meta.env.VITE_SANITY_TOKEN, // Only needed for authenticated requests
});

// Image URL builder to easily work with Sanity images
const builder = imageUrlBuilder(client);

// Interface to match all the methods used in our components
interface ImageUrlBuilder {
  width: (w: number) => ImageUrlBuilder;
  height: (h: number) => ImageUrlBuilder;
  auto: (mode: string) => ImageUrlBuilder;
  quality: (q: number) => ImageUrlBuilder;
  url: () => string;
}

// Placeholder image builder that implements the ImageUrlBuilder interface correctly
const createPlaceholderImageBuilder = (): ImageUrlBuilder => {
  const placeholder: ImageUrlBuilder = {
    width: () => placeholder,
    height: () => placeholder,
    auto: () => placeholder,
    quality: () => placeholder,
    url: () => 'https://via.placeholder.com/400x300?text=No+Image'
  };
  return placeholder;
};

// Make sure urlFor always returns a consistent type with all required methods
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  if (!source) {
    return createPlaceholderImageBuilder();
  }
  return builder.image(source) as unknown as ImageUrlBuilder;
}