import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data';
import PageHeader from '../components/layout/PageHeader';
import ContactInfo from '../components/contact/ContactInfo.js';
import ContactMap from '../components/contact/ContactMap';
import ContactForm from '../components/contact/ContactForm.js';
import ContactHours from '../components/contact/ContactHours.js';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contactez-Nous - {siteConfig.siteName}</title>
        <meta name="description" content="Contactez L'Oriental Boucherie à Vierzon. Visitez notre boutique ou appelez-nous." />
      </Helmet>
      
      <PageHeader
        title="Contactez-Nous"
        description="Nous sommes à votre service pour répondre à toutes vos questions et demandes."
      />

      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            <ContactInfo />
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-6">Horaires d'ouverture</h2>
              <ContactHours />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Nous trouver</h2>
          <ContactMap />
        </div>
      </div>
    </>
  );
};

export default ContactPage;