import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en';
import fr from './fr';
import es from './es';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      fr,
      es,
    },
    lng: 'fr',
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;