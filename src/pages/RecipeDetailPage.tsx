import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeDetail } from '../hooks/recipes/useRecipeDetail';
import PageHeader from '../components/layout/PageHeader';
import RecipeHeader from '../components/recipes/detail/RecipeHeader';
import RecipeIngredients from '../components/recipes/detail/RecipeIngredients';
import RecipeSteps from '../components/recipes/detail/RecipeSteps';
import RecipeBody from '../components/recipes/detail/RecipeBody';
import RecipeImage from '../components/recipes/detail/RecipeImage';
import RecipeNotFound from '../components/recipes/detail/RecipeNotFound';
import LoadingIndicator from '../components/ui/LoadingIndicator';

export default function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { recipe, loading, error } = useRecipeDetail(slug);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex justify-center items-start">
        <LoadingIndicator size="md" />
      </div>
    );
  }

  // Error or not found state
  if (error || !recipe) {
    return <RecipeNotFound message={error || undefined} />;
  }

  // Determine column span based on whether ingredients exist
  const contentColSpan = recipe.ingredients && recipe.ingredients.length > 0 
    ? 'lg:col-span-2' 
    : 'lg:col-span-3';

  return (
    <>
      <PageHeader 
        title={recipe.title} 
        description={recipe.description || "Une recette délicieuse à préparer avec nos produits de qualité."}
      />

      <div className="container-custom py-10">
        {/* Recipe Image & Back Link */}
        <RecipeImage mainImage={recipe.mainImage} title={recipe.title} />

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          {/* Recipe Header */}
          <RecipeHeader 
            title={recipe.title}
            publishedAt={recipe.publishedAt}
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
          />

          {/* Recipe Description */}
          {recipe.description && (
            <div className="mb-8">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">{recipe.description}</p>
            </div>
          )}

          {/* Recipe Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <RecipeIngredients ingredients={recipe.ingredients} />
            )}

            {/* Steps or Body */}
            {recipe.steps && recipe.steps.length > 0 ? (
              <RecipeSteps steps={recipe.steps} colSpan={contentColSpan} />
            ) : recipe.body ? (
              <RecipeBody body={recipe.body} colSpan={contentColSpan} />
            ) : (
              <div className={contentColSpan}>
                <p className="text-gray-600 dark:text-gray-300">Aucune instruction disponible pour cette recette.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}