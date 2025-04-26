// Utility to conditionally use real or mock data
import * as SanityApi from './sanityApi';
import * as MockApi from './sanityApiMock';

// Set to true to use mock data, false to use real Sanity data
const USE_MOCK_DATA = false;

// Simple API cache implementation
const API_CACHE = new Map();
const CACHE_TTL = 30 * 1000; // 30 seconds cache TTL for development
// const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL for production

// Wrapper for API functions to add caching
const withCache = <T>(key: string, fetchFn: () => Promise<T>, forceRefresh = false): Promise<T> => {
  const cacheKey = `orb_${key}`;
  
  // If force refresh is requested, clear existing cache
  if (forceRefresh) {
    localStorage.removeItem(cacheKey);
    API_CACHE.delete(key);
  }
  
  // Check localStorage for cached data
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    try {
      const { data, expiry } = JSON.parse(cachedData);
      if (expiry > Date.now()) {
        return Promise.resolve(data as T);
      }
      // Clear expired cache
      localStorage.removeItem(cacheKey);
    } catch (error) {
      // Invalid JSON, clear cache
      localStorage.removeItem(cacheKey);
    }
  }

  // Check in-memory cache
  if (API_CACHE.has(key)) {
    const { data, expiry } = API_CACHE.get(key);
    if (expiry > Date.now()) {
      return Promise.resolve(data);
    }
    // Clear expired cache
    API_CACHE.delete(key);
  }

  // If no cache or expired, fetch fresh data
  return fetchFn().then(data => {
    // Store in memory cache
    API_CACHE.set(key, {
      data,
      expiry: Date.now() + CACHE_TTL
    });
    
    // Store in localStorage for persistence
    try {
      localStorage.setItem(cacheKey, JSON.stringify({
        data,
        expiry: Date.now() + CACHE_TTL
      }));
    } catch (error) {
      console.warn('Failed to store API data in localStorage:', error);
    }
    
    return data;
  });
};

// Get the base API implementation
const baseApi = USE_MOCK_DATA ? MockApi : SanityApi;

// Export API functions with caching
export const getAllProducts = (forceRefresh = false) => 
  withCache('all_products', baseApi.getAllProducts, forceRefresh);

export const getFeaturedProducts = (forceRefresh = false) => 
  withCache('featured_products', baseApi.getFeaturedProducts, forceRefresh);

export const getProductsByCategory = (categoryId: string, forceRefresh = false) => 
  withCache(`products_category_${categoryId}`, () => baseApi.getProductsByCategory(categoryId), forceRefresh);

export const getAllCategories = (forceRefresh = false) => 
  withCache('all_categories', baseApi.getAllCategories, forceRefresh);

export const getAllRecipes = (forceRefresh = false) => 
  withCache('all_recipes', baseApi.getAllRecipes, forceRefresh);

export const getFeaturedRecipes = (forceRefresh = false) => 
  withCache('featured_recipes', baseApi.getFeaturedRecipes, forceRefresh);

export const getRecipeBySlug = (slug: string, forceRefresh = false) => 
  withCache(`recipe_${slug}`, () => baseApi.getRecipeBySlug(slug), forceRefresh);

// Utility to clear all caches
export const clearAllCaches = () => {
  // Clear localStorage caches
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('orb_')) {
      localStorage.removeItem(key);
    }
  }
  
  // Clear in-memory cache
  API_CACHE.clear();
};