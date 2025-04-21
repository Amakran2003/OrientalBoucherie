import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { images } from '../../data';

const AboutTeam: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={images.team}
              alt="Notre équipe de bouchers" 
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-secondary-900 dark:text-white">{t('about.team.title')}</h2>
            <p className="mb-4 text-secondary-700 dark:text-secondary-300">
              {t('about.team.description')}
            </p>
            <p className="mb-4 text-secondary-700 dark:text-secondary-300">
              {t('about.team.expertise')}
            </p>
            <p className="text-secondary-700 dark:text-secondary-300">
              {t('about.team.service')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;