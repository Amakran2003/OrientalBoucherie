import React, { useEffect } from 'react';
import { siteConfig } from '../data';
import { SEO } from '../components/utils/SEO';
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
      <SEO
        title="Boucherie Traditionnelle Halal à Vierzon"
        description={siteConfig.siteDescription}
      />

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