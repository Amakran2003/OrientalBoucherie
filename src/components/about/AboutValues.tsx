import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutValues: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 text-secondary-900 dark:text-white"
        >
          {t('about.values.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary-600 dark:text-primary-500">01</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
              {t('about.values.quality.title')}
            </h3>
            <p className="text-secondary-700 dark:text-secondary-300">
              {t('about.values.quality.description')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary-600 dark:text-primary-500">02</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
              {t('about.values.halal.title')}
            </h3>
            <p className="text-secondary-700 dark:text-secondary-300">
              {t('about.values.halal.description')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary-600 dark:text-primary-500">03</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
              {t('about.values.service.title')}
            </h3>
            <p className="text-secondary-700 dark:text-secondary-300">
              {t('about.values.service.description')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;