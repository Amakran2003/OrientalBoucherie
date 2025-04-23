import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, MapPin, Clock } from 'lucide-react';

/**
 * IntroSection Component
 * 
 * Displays an introduction section with key features and a prominent image.
 * 
 * Features:
 * - Grid layout with responsive design
 * - Animated content entrance
 * - Feature cards with icons
 * - Image with decorative overlay
 * - Dark mode support
 */
const IntroSection: React.FC = () => {
  const { t } = useTranslation();

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2
      } 
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section bg-white dark:bg-secondary-950">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content and feature cards */}
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h2 className="mb-6 text-secondary-900 dark:text-white">
              {t('home.intro.title')}
            </h2>
            <p className="mb-6 text-secondary-700 dark:text-secondary-300">
              {t('home.intro.description')}
            </p>
            
            {/* Feature cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {/* Quality card */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary-100 dark:border-secondary-800"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary-600 dark:text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-500 mb-2">
                  {t('quality.title')}
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  {t('quality.description')}
                </p>
              </motion.div>

              {/* Expertise card */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary-100 dark:border-secondary-800"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-500 mb-2">
                  {t('expertise.title')}
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  {t('expertise.description')}
                </p>
              </motion.div>

              {/* Local card */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-secondary-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary-100 dark:border-secondary-800"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-500 mb-2">
                  {t('local.title')}
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  {t('local.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image section */}
          <motion.div
            className="order-1 md:order-2"
            variants={itemVariants}
          >
            <div className="relative">
              <img 
                src="https://www.datocms-assets.com/44717/1620225044-boucherie.jpg?auto=format&fit=max&w=1200"
                alt="Boucherie traditionnelle" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Decorative overlay - Repositioned to the right on mobile */}
              <div className="absolute -bottom-4 right-4 md:-left-4 bg-primary-600 text-white p-4 md:p-6 rounded-lg">
                <p className="text-lg md:text-xl font-semibold">16 ans</p>
                <p className="text-sm md:text-base">d'excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;