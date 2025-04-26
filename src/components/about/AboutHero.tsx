import React from 'react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../layout/PageHeader';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageHeader 
      title={t('about.title')}
      description={t('about.subtitle')}
      backgroundImage="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
    />
  );
};

export default AboutHero;