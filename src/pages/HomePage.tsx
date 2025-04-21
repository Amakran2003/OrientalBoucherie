import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ProductCategories from '../components/home/ProductCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import FeaturedRecipes from '../components/home/FeaturedRecipes';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.siteName} - Boucherie Traditionnelle Halal à Vierzon</title>
        <meta name="description" content={siteConfig.siteDescription} />
      </Helmet>
      
      <main>
        <HeroSection />
        <IntroSection />
        <ProductCategories />
        <FeaturedProducts />
        <FeaturedRecipes />
        <CallToAction />
      </main>
    </>
  );
};

export default HomePage;