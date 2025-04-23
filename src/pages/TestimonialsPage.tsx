import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { siteConfig } from '../data';
import PageHeader from '../components/layout/PageHeader';

const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add Featurable bundle script if it doesn't exist
    if (!document.querySelector('script[src="https://featurable.com/assets/bundle.js"]')) {
      const script = document.createElement('script');
      script.src = "https://featurable.com/assets/bundle.js";
      script.defer = true;
      script.setAttribute('charset', 'UTF-8');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Témoignages - {siteConfig.siteName}</title>
        <meta name="description" content="Découvrez ce que nos clients pensent de L'Oriental. Témoignages et avis de notre clientèle." />
      </Helmet>
      
      <main>
        <PageHeader 
          title="Témoignages de nos clients" 
          description="Découvrez les expériences de nos clients et ce qu'ils pensent de nos services et produits."
          backgroundImage="https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=2670&auto=format&fit=crop"
        />
        
        {/* Google Reviews Section with Featurable */}
        <section className="py-16 bg-white dark:bg-secondary-950">
          <div className="container-custom">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-3"
              >
                Nos avis Google
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Découvrez les avis authentiques de nos clients sur Google et l'expérience qu'ils ont vécue avec nos produits et services.
              </motion.p>
            </div>
            
            {/* Featurable Widget */}
            <div id="featurable-0b8d8f47-c220-4207-889b-73afc2cba77a" data-featurable-async></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TestimonialsPage;