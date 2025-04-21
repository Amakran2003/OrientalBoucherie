import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

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

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[75%_center]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://halles-cornouaille.com/wp-content/uploads/2013/11/boucherie-calvez-quimper.jpg)`,
        }}
      />
      
      {/* Content container */}
      <div className="container-custom relative z-10 py-20 md:py-32 px-4">
        <div className="max-w-3xl">
          {/* Animated title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white mb-6"
          >
            L'Oriental
          </motion.h1>
          
          {/* Animated subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          
          {/* Animated CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
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
    </div>
  );
};

export default HeroSection;