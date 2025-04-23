/**
 * Google Analytics utility functions
 */

// Your Google Analytics measurement ID (should be moved to .env for production)
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

// Initialize Google Analytics
export const initGA = (): void => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found');
    return;
  }

  // Add Google Analytics script tag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  
  function gtag(...args: any[]): void {
    window.dataLayer.push(args);
  }
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // Disable automatic page views to control them manually
  });
};

// Track page view
export const trackPageView = (path: string): void => {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    send_to: GA_MEASUREMENT_ID,
  });
};

// Track custom event
export const trackEvent = (
  eventName: string, 
  eventParams?: Record<string, any>
): void => {
  if (!window.gtag) return;

  window.gtag('event', eventName, eventParams);
};

// Add type definitions for window.gtag and window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}