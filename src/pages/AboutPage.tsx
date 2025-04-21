import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data';
import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
import AboutValues from '../components/about/AboutValues';
import AboutTeam from '../components/about/AboutTeam';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>À Propos - {siteConfig.siteName}</title>
        <meta name="description" content="Découvrez notre histoire, nos valeurs et notre engagement pour la qualité à L'Oriental." />
      </Helmet>
      
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutValues />
        <AboutTeam />
      </main>
    </>
  );
};

export default AboutPage;