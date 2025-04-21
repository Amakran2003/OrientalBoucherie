import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutIntro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-6 text-secondary-700 dark:text-secondary-300">
            {t('about.intro')}
          </p>
          
          <p className="mb-6 text-secondary-700 dark:text-secondary-300">
            {t('about.story')}
          </p>
          
          <p className="text-secondary-700 dark:text-secondary-300">
            {t('about.mission')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;