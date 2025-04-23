import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
// Import hero image directly
import heroImage from '/images/hero.webp';

/**
 * HeroSection Component
 * 
 * The main landing section of the homepage featuring a full-screen background image,
 * headline, subtitle, and call-to-action button.
 * 
 * Features:
 * - Responsive full-screen design
 * - Animated text and button entrance
 * - Overlay gradient for better text readability
 * - Scroll indicator animation
 */
const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  useEffect(() => {
    // Create a link for preloading the hero image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = heroImage;
    preloadLink.type = 'image/webp';
    preloadLink.fetchPriority = 'high';
    document.head.appendChild(preloadLink);

    // Delay animations until after first paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        setAnimationsEnabled(true);
      }, 0);
    });

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay - no transition to improve initial render */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[55%_center] sm:bg-[75%_center]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0.0, 0.0, 0.90, 0.85), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        }}
      />
      
      {/* Ajout d'un filtre mat léger pour améliorer la visibilité */}
      <div className="absolute inset-0 z-0 bg-black/30 backdrop-brightness-90 backdrop-saturate-75"></div>
      
      {/* Content container */}
      <div className="container-custom relative z-10 py-20 md:py-32 px-4">
        <div className="max-w-3xl">
          {/* Title - no animation initially for faster LCP */}
          <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            L'Oriental
          </h1>
          
          {/* Subtitle - non-motion version for initial paint, critical for LCP */}
          <p id="main-subtitle" className="text-xl md:text-2xl mb-8 text-white/90">
            {t('home.hero.subtitle')}
          </p>
          
          {/* CTA button - no animation initially for faster first paint */}
          <div>
            <Link to="/products">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                className="shadow-lg"
              >
                {t('home.hero.cta')}
              </Button>
            </Link>
          </div>

          {/* Add animations after initial render */}
          {animationsEnabled && (
            <style>{`
              #main-subtitle {
                animation: fadeInUp 0.6s ease-out 0.2s both;
              }

              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          )}
        </div>
      </div>
      
      {/* Scroll indicator - only show after animations are enabled */}
      {animationsEnabled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight size={30} className="text-white transform rotate-90" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;