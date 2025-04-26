import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt={t('about.team.imageAlt')}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
              {t('about.team.title')}
            </h2>
            <p className="text-secondary-700 dark:text-secondary-300 mb-6">
              {t('about.team.description')}
            </p>
            <p className="text-secondary-700 dark:text-secondary-300">
              {t('about.team.mission')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;