import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { languages } from '../data';

type LanguageState = {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      currentLanguage: 'fr',
      setLanguage: (lang: string) => set({ currentLanguage: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);