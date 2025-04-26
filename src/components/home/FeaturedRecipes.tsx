import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getFeaturedRecipes } from '../../lib/apiUtils';
import { Recipe } from '../../lib/sanityApi';
import { urlFor } from '../../lib/sanity';
import LoadingIndicator from '../ui/LoadingIndicator';

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const recipesData = await getFeaturedRecipes();
        setRecipes(recipesData || []);
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
        setRecipes([]);
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
        <LoadingIndicator size="lg" />
      </div>
    );
  }

  if (!recipes || recipes.length === 0) {
    return null; // Don't show the section if no featured recipes
  }

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('home.featured.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('home.featured.subtitle')}
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
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">{t('recipes.noImage')}</span>
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {recipe.title}
                  </h3>
                  {recipe.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {recipe.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(recipe.publishedAt)}
                    </span>
                    <span className="text-primary-600 dark:text-primary-500 font-medium">
                      {t('recipes.readMore')}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}