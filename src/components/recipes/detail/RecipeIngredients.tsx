import React from 'react';

interface Ingredient {
  ingredient: string;
  amount: string;
}

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
      <ul className="space-y-2">
        {ingredients.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-red-700 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
            </svg>
            <span className="text-gray-800 dark:text-gray-200">
              <strong>{item.amount}</strong> {item.ingredient}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;