import { useState, useMemo } from 'react';
import { Recipe } from '../../lib/sanityApi';
import { RecipeFilters } from '../../components/recipes/RecipeFilterBar';

export const useRecipeFilters = (recipes: Recipe[]) => {
  const [filters, setFilters] = useState<RecipeFilters>({
    search: '',
    maxPrepTime: null,
    maxCookTime: null,
    servings: null,
    country: null,
    sortBy: 'date-desc'
  });

  // Get unique countries from recipes for filter dropdown
  const uniqueCountries = useMemo(() => {
    const countries = recipes
      .map(recipe => recipe.country)
      .filter((country): country is string => !!country);
    return [...new Set(countries)].sort();
  }, [recipes]);

  // Apply filters to recipes
  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(searchLower) || 
        (recipe.description?.toLowerCase().includes(searchLower))
      );
    }

    // Filter by prep time
    if (filters.maxPrepTime !== null) {
      result = result.filter(recipe => 
        recipe.prepTime !== undefined && recipe.prepTime <= filters.maxPrepTime!
      );
    }

    // Filter by cook time
    if (filters.maxCookTime !== null) {
      result = result.filter(recipe => 
        recipe.cookTime !== undefined && recipe.cookTime <= filters.maxCookTime!
      );
    }

    // Filter by servings
    if (filters.servings !== null) {
      result = result.filter(recipe => 
        recipe.servings === filters.servings
      );
    }
    
    // Filter by country - handle case sensitivity and null values
    if (filters.country !== null && filters.country !== '') {
      result = result.filter(recipe => 
        recipe.country && recipe.country.toLowerCase() === filters.country!.toLowerCase()
      );
    }

    // Sort recipes
    switch (filters.sortBy) {
      case 'date-desc':
        result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'date-asc':
        result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case 'prepTime-asc':
        result.sort((a, b) => {
          const aTime = a.prepTime || Number.MAX_SAFE_INTEGER;
          const bTime = b.prepTime || Number.MAX_SAFE_INTEGER;
          return aTime - bTime;
        });
        break;
      case 'cookTime-asc':
        result.sort((a, b) => {
          const aTime = a.cookTime || Number.MAX_SAFE_INTEGER;
          const bTime = b.cookTime || Number.MAX_SAFE_INTEGER;
          return aTime - bTime;
        });
        break;
    }

    return result;
  }, [recipes, filters]);

  const handleFilterChange = (newFilters: RecipeFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      maxPrepTime: null,
      maxCookTime: null,
      servings: null,
      country: null,
      sortBy: 'date-desc'
    });
  };

  return { filters, filteredRecipes, handleFilterChange, resetFilters, uniqueCountries };
};
