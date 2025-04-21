import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecipeBySlug } from '../lib/sanityApi';
import { Recipe } from '../lib/sanityApi';
import { urlFor } from '../lib/sanity';
import PageHeader from '../components/layout/PageHeader';
import { PortableText } from '@portabletext/react';

// Portable Text components
const portableTextComponents = {
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

export default function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        if (slug) {
          const recipeData = await getRecipeBySlug(slug);
          setRecipe(recipeData);
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex justify-center items-start">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-700"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen pt-32 pb-20 container-custom">
        <h1 className="text-3xl font-semibold mb-4">Recette introuvable</h1>
        <p>La recette que vous recherchez n'existe pas.</p>
        <Link to="/recipes" className="text-red-700 hover:underline mt-4 inline-block">
          Retour aux recettes
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHeader 
        title={recipe.title} 
        description={recipe.description || "Une recette délicieuse à préparer avec nos produits de qualité."}
      />

      <div className="container-custom py-10">
        <Link to="/recipes" className="text-red-700 hover:underline mb-6 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Toutes les recettes
        </Link>

        {recipe.mainImage && (
          <div className="mb-8">
            <img
              src={urlFor(recipe.mainImage).width(1200).url()}
              alt={recipe.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm text-gray-500 mb-1">Publié le {formatDate(recipe.publishedAt)}</p>
              <h1 className="text-3xl font-semibold">{recipe.title}</h1>
            </div>

            <div className="flex gap-6">
              {recipe.prepTime && (
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Préparation</span>
                  <span className="font-semibold">{recipe.prepTime} min</span>
                </div>
              )}
              {recipe.cookTime && (
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Cuisson</span>
                  <span className="font-semibold">{recipe.cookTime} min</span>
                </div>
              )}
              {recipe.servings && (
                <div className="flex flex-col items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Personnes</span>
                  <span className="font-semibold">{recipe.servings}</span>
                </div>
              )}
            </div>
          </div>

          {recipe.description && (
            <div className="mb-8">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">{recipe.description}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recipe.ingredients && recipe.ingredients.length > 0 && (
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-semibold mb-4">Ingrédients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((item, index) => (
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
            )}

            <div className={`${recipe.ingredients && recipe.ingredients.length > 0 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              {recipe.steps && recipe.steps.length > 0 ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
                  <div className="space-y-6">
                    {recipe.steps.map((step, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center mr-2">
                            {index + 1}
                          </div>
                          <h3 className="font-medium text-lg">{step.title}</h3>
                        </div>
                        {step.description && (
                          <div className="ml-8 text-gray-700 dark:text-gray-300">
                            <PortableText value={step.description} components={portableTextComponents} />
                          </div>
                        )}
                        {step.image && (
                          <div className="mt-3 ml-8">
                            <img 
                              src={urlFor(step.image).width(600).url()}
                              alt={`Étape ${index + 1}`}
                              className="rounded-md"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : recipe.body ? (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Préparation</h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <PortableText value={recipe.body} components={portableTextComponents} />
                  </div>
                </>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">Aucune instruction disponible pour cette recette.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}