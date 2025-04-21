import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data';
import Button from '../ui/Button';

const ProductCategories: React.FC = () => {
  const { t } = useTranslation();

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

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="card group hover:shadow-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src="https://www.scherrer-chezlaety.fr/wp-content/uploads/2023/05/viande-locale_1-1024x675.jpg"
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                  {category.description}
                </p>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="inline-block"
                >
                  <Link 
                    to={`/products/${category.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    Voir les produits 
                    <motion.span variants={arrowVariants}>
                      <ArrowRight size={16} className="ml-1" />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="secondary">
              {t('home.categories.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;