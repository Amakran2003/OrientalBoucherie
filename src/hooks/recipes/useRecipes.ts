import { useState, useEffect, useMemo } from 'react';
import { getAllRecipes } from '../../lib/apiUtils';
import { Recipe } from '../../lib/sanityApi';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const recipesData = await getAllRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Calculate max values for filters
  const maxValues = useMemo(() => {
    if (recipes.length === 0) return { prepTime: 120, cookTime: 180, servings: 8 };
    
    return {
      prepTime: Math.max(...recipes.filter(r => r.prepTime).map(r => r.prepTime || 0)),
      cookTime: Math.max(...recipes.filter(r => r.cookTime).map(r => r.cookTime || 0)),
      servings: Math.max(...recipes.filter(r => r.servings).map(r => r.servings || 0))
    };
  }, [recipes]);

  return { recipes, loading, maxValues };
};
