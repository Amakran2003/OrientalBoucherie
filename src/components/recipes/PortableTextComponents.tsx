import { urlFor } from '../../lib/sanity';

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-6">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Image de recette'}
          className="rounded-lg mx-auto"
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-600 mt-2">{value.caption}</p>
        )}
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          target={rel ? '_blank' : undefined}
          className="text-red-700 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};