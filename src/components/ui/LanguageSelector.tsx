import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../stores/languageStore';
import { languages } from '../../data';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const { currentLanguage, setLanguage } = useLanguageStore();

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative group">
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-950 dark:text-white flex items-center gap-1"
        aria-label="Change language"
      >
        <Globe size={20} />
        <span className="text-xs font-medium uppercase">{currentLanguage}</span>
      </motion.button>
      
      <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-secondary-800 rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLanguage === language.code
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-500'
                  : 'text-secondary-950 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-700'
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;