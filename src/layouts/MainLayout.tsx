import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/utils/ScrollToTop';
import { useThemeStore } from '../stores/themeStore';
import { usePageTracking } from '../hooks/usePageTracking';

const MainLayout: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  
  // Track page views with Google Analytics
  usePageTracking();
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default MainLayout;