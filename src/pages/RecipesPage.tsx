import PageHeader from '../components/layout/PageHeader';
import RecipeFilterBar from '../components/recipes/RecipeFilterBar';
import LoadingIndicator from '../components/ui/LoadingIndicator';
import RecipeGrid from '../components/recipes/RecipeGrid';
import NoRecipesFound from '../components/recipes/NoRecipesFound';
import { useRecipes } from '../hooks/recipes/useRecipes';
import { useRecipeFilters } from '../hooks/recipes/useRecipeFilters';

export default function RecipesPage() {
  // Use custom hooks
  const { recipes, loading, maxValues } = useRecipes();
  const { filters, filteredRecipes, handleFilterChange, resetFilters } = useRecipeFilters(recipes);

  return (
    <>
      <PageHeader 
        title="Nos Recettes" 
        description="Découvrez nos suggestions de recettes pour sublimer nos produits."
      />
      
      <div className="container-custom py-10">
        {/* Recipe filters */}
        <RecipeFilterBar 
          filters={filters}
          onFilterChange={handleFilterChange}
          maxPossiblePrepTime={maxValues.prepTime}
          maxPossibleCookTime={maxValues.cookTime}
          maxPossibleServings={maxValues.servings}
        />
        
        {loading ? (
          <LoadingIndicator />
        ) : filteredRecipes.length > 0 ? (
          <RecipeGrid recipes={filteredRecipes} />
        ) : (
          <NoRecipesFound onReset={resetFilters} />
        )}
      </div>
    </>
  );
}