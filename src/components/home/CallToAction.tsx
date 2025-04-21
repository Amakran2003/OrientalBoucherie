import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 bg-cover bg-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://st4.depositphotos.com/14670260/23926/i/450/depositphotos_239266870-stock-photo-steak-raw-barbecue-rib-eye.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4"
        >
          <h2 className="text-white mb-4">{t('home.cta.title')}</h2>
          <p className="text-white/90 text-lg mb-8">{t('home.cta.subtitle')}</p>
          <Link to="/products">
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              className="shadow-lg"
            >
              {t('home.cta.button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;