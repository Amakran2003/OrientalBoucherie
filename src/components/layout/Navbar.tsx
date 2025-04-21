import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import { siteConfig } from '../../data';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/', name: t('nav.home') },
    { to: '/about', name: t('nav.about') },
    { to: '/products', name: t('nav.products') },
    { to: '/commitments', name: t('nav.commitments') },
    { to: '/recipes', name: t('nav.recipes') },
    { to: '/contact', name: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-secondary-950/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold font-display text-primary-600 dark:text-primary-500">
              {siteConfig.siteName}
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `text-base font-medium transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-500 ${
                  isActive ? 'text-primary-600 dark:text-primary-500' : isScrolled ? 'text-secondary-950 dark:text-white' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <LanguageSelector />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 lg:hidden">
          <ThemeToggle />
          <LanguageSelector />
          <button
            onClick={toggleMenu}
            className={`p-2 ${isScrolled ? 'text-secondary-950 dark:text-white' : 'text-white'} focus:outline-none`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-secondary-900 overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `text-lg font-medium p-2 transition-all duration-300 ${
                      isActive ? 'text-primary-600 dark:text-primary-500' : 'text-secondary-950 dark:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;