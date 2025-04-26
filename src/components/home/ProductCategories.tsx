import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/products/useCategories';
import Button from '../ui/Button';
import LoadingIndicator from '../ui/LoadingIndicator';
import { urlFor } from '../../lib/sanity';

// Use a much simpler and smaller base64 placeholder - just a gray square
const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const ProductCategories: React.FC = () => {
  const { t } = useTranslation();
  const { categories = [], loading } = useCategories();
  // Track images that are loading or have failed
  const [imageStatus, setImageStatus] = useState<Record<string, 'loading' | 'loaded' | 'error'>>({});

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 5, transition: { type: "spring", stiffness: 400 } }
  };

  // Handle image loading state
  const handleImageLoad = (categoryId: string) => {
    setImageStatus(prev => ({ ...prev, [categoryId]: 'loaded' }));
  };

  // Handle image error state
  const handleImageError = (categoryId: string, e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageStatus(prev => ({ ...prev, [categoryId]: 'error' }));
    (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE;
  };

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-secondary-900 dark:text-white"
          >
            {t('home.categories.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-secondary-700 dark:text-secondary-300"
          >
            {t('home.categories.subtitle')}
          </motion.p>
        </div>

        {loading ? (
          <div className="py-12 flex justify-center">
            <LoadingIndicator size="lg" />
          </div>
        ) : categories.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {categories.map((category) => (
              <motion.div
                key={category._id}
                variants={itemVariants}
                className="card group hover:shadow-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  {/* Add preloading placeholder and loading state */}
                  <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-opacity duration-300 ${imageStatus[category._id] === 'loaded' ? 'opacity-0' : 'opacity-100'}`}>
                    {imageStatus[category._id] !== 'error' && (
                      <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                    )}
                  </div>
                  
                  <img
                    src={category.image ? urlFor(category.image).width(800).height(600).url() : PLACEHOLDER_IMAGE}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onLoad={() => handleImageLoad(category._id)}
                    onError={(e) => handleImageError(category._id, e)}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  {category.description && (
                    <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                      {category.description}
                    </p>
                  )}
                  <Link to={`/products/${category.slug.current}`}>
                    <Button
                      variant="secondary"
                      className="group inline-flex items-center"
                    >
                      {t('home.categories.viewAll')}
                      <motion.span
                        variants={arrowVariants}
                        initial="rest"
                        whileHover="hover"
                        className="ml-2"
                      >
                        <ArrowRight size={18} />
                      </motion.span>
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary-700 dark:text-secondary-300">
              {t('home.categories.noCategories')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategories;