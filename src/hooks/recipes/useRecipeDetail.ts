import { useState, useEffect } from 'react';
import { getRecipeBySlug } from '../../lib/apiUtils';
import { Recipe } from '../../lib/sanityApi';

export const useRecipeDetail = (slug: string | undefined) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!slug) {
        setLoading(false);
        setError('No recipe slug provided');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const recipeData = await getRecipeBySlug(slug);
        setRecipe(recipeData);
      } catch (err) {
        console.error('Error fetching recipe:', err);
        setError('Failed to load recipe details');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [slug]);

  return { recipe, loading, error };
};