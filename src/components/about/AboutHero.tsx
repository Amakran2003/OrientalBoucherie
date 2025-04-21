import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageHeader from '../layout/PageHeader';
import { images } from '../../data';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageHeader 
      title={t('about.title')}
      subtitle={t('about.subtitle')}
      backgroundImage={images.about}
    />
  );
};

export default AboutHero;