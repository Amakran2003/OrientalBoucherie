import React from 'react';
import { useFormatDate } from '../../../hooks/utils/useFormatDate';

interface RecipeHeaderProps {
  title: string;
  publishedAt: string;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({
  title,
  publishedAt,
  prepTime,
  cookTime,
  servings,
}) => {
  const { formatDate } = useFormatDate();

  return (
    <div className="flex flex-wrap gap-4 justify-between items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
      <div>
        <p className="text-sm text-gray-500 mb-1">Publié le {formatDate(publishedAt)}</p>
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>

      <div className="flex gap-6">
        {prepTime && (
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Préparation</span>
            <span className="font-semibold">{prepTime} min</span>
          </div>
        )}
        {cookTime && (
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Cuisson</span>
            <span className="font-semibold">{cookTime} min</span>
          </div>
        )}
        {servings && (
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">Personnes</span>
            <span className="font-semibold">{servings}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;