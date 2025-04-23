import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * 
 * This component resets the scroll position to the top when the route changes.
 * It doesn't render anything, it just implements the side effect.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'smooth' for animated scrolling
    });
  }, [pathname]);
  
  // This component doesn't render anything
  return null;
};

export default ScrollToTop;
