import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedRecipes } from '../../lib/sanityApi';
import { Recipe } from '../../lib/sanityApi';
import { urlFor } from '../../lib/sanity';
import { motion } from 'framer-motion';

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const recipesData = await getFeaturedRecipes();
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-700"></div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return null; // Don't show the section if no featured recipes
  }

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Nos Recettes Inspirantes</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explorez nos recettes traditionnelles et innovantes pour sublimer nos produits et régaler vos convives.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {recipes.map((recipe) => (
            <motion.div 
              key={recipe._id}
              variants={itemVariants}
            >
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
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-red-700 transition-colors">
                    {recipe.title}
                  </h3>
                  
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
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Link
            to="/recipes"
            className="inline-flex items-center px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-md transition-colors"
          >
            Voir toutes nos recettes
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}