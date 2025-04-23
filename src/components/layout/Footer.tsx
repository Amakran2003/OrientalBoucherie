import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../data';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-primary-500">
              {siteConfig.siteName}
            </h3>
            <p className="text-secondary-300 max-w-xs">
              Boucherie traditionnelle halal, qualité et savoir-faire depuis 8 ans.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-primary-500 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-primary-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-primary-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.recipes')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-secondary-300">{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.contactPhone}`} className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {siteConfig.contactPhone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-secondary-300 hover:text-primary-500 transition-colors duration-300">
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.hours')}</h4>
            <ul className="space-y-2">
              {siteConfig.businessHours.map((item, index) => (
                <li key={index} className="text-secondary-300">
                  <span className="font-medium">{item.day}:</span>
                  <br />
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
            {siteConfig.businessHoursNote && (
              <p className="mt-3 text-xs text-secondary-400 italic">
                {siteConfig.businessHoursNote}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} {siteConfig.siteName}. {t('footer.rights')}.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-secondary-400 hover:text-primary-500 text-sm transition-colors duration-300">
              Politique de Confidentialité
            </Link>
            <Link to="/terms" className="text-secondary-400 hover:text-primary-500 text-sm transition-colors duration-300">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;