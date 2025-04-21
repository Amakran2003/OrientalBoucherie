import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { siteConfig } from '../data';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - {siteConfig.siteName}</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-7xl font-bold text-primary-600 dark:text-primary-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4 text-secondary-900 dark:text-white">Page Not Found</h2>
            <p className="mb-8 text-secondary-700 dark:text-secondary-300">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
              <Button
                variant="primary"
                icon={<Home size={18} />}
              >
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;