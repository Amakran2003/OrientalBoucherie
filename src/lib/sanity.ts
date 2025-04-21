import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Configuration for Sanity client
export const client = createClient({
  projectId: 'rrwhrsep', // Your Sanity project ID
  dataset: 'production',
  useCdn: true, // Set to false if you want to ensure fresh content
  apiVersion: '2023-05-03', // Use a date format like YYYY-MM-DD
});

// Image URL builder to easily work with Sanity images
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}