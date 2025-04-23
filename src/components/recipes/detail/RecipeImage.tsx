import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../../lib/sanity';

interface RecipeImageProps {
  mainImage?: { _ref: string };
  title: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ mainImage, title }) => {
  return (
    <>
      <Link to="/recipes" className="text-red-700 hover:underline mb-6 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Toutes les recettes
      </Link>

      {mainImage && (
        <div className="mb-8">
          <img
            src={urlFor(mainImage).width(1200).url()}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </>
  );
};

export default RecipeImage;