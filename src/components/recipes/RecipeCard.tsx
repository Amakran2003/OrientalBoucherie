import { Link } from 'react-router-dom';
import { Recipe } from '../../lib/sanityApi';
import { urlFor } from '../../lib/sanity';
import { useFormatDate } from '../../hooks/utils/useFormatDate';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { formatDate } = useFormatDate();

  return (
    <Link
      to={`/recipes/${recipe.slug.current}`}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
    >
      {recipe.mainImage ? (
        <div className="h-56 overflow-hidden">
          <img
            src={urlFor(recipe.mainImage).width(600).height(400).url()}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-56 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-400">Image non disponible</span>
        </div>
      )}
      
      <div className="p-5 flex-grow flex flex-col">
        <h2 className="text-xl font-semibold mb-2 group-hover:text-red-700 transition-colors">
          {recipe.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
          {recipe.description || "Découvrez cette délicieuse recette traditionnelle..."}
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-gray-500">
            {formatDate(recipe.publishedAt)}
          </span>
          
          <div className="flex items-center gap-4 text-sm">
            {recipe.prepTime && (
              <span className="flex items-center gap-1" title="Temps de préparation">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recipe.prepTime} min
              </span>
            )}
            
            {recipe.cookTime && (
              <span className="flex items-center gap-1" title="Temps de cuisson">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {recipe.cookTime} min
              </span>
            )}
            
            {recipe.servings && (
              <span className="flex items-center gap-1" title="Nombre de personnes">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.318l-1.318 2.637L8 7.473l2.318 2.159L9.82 12 12 10.342 14.18 12l-.498-2.368L16 7.473l-2.682-.518L12 4.318z" />
                </svg>
                {recipe.servings}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
