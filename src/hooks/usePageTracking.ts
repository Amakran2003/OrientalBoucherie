import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../lib/analytics';

/**
 * Custom hook to track page views in Google Analytics
 * Should be used in a component that's rendered on every page
 */
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when the location changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};