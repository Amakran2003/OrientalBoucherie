// Utility to conditionally use real or mock data
import * as SanityApi from './sanityApi';
import * as MockApi from './sanityApiMock';

// Set to true to use mock data, false to use real Sanity data
const USE_MOCK_DATA = false;

// Simple API cache implementation
const API_CACHE = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

// Wrapper for API functions to add caching
const withCache = <T>(key: string, fetchFn: () => Promise<T>): Promise<T> => {
  const cacheKey = `orb_${key}`;
  
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
export const getAllProducts = () => withCache('all_products', baseApi.getAllProducts);
export const getFeaturedProducts = () => withCache('featured_products', baseApi.getFeaturedProducts);
export const getProductsByCategory = (categoryId: string) => 
  withCache(`products_category_${categoryId}`, () => baseApi.getProductsByCategory(categoryId));
export const getAllCategories = () => withCache('all_categories', baseApi.getAllCategories);
export const getAllRecipes = () => withCache('all_recipes', baseApi.getAllRecipes);
export const getFeaturedRecipes = () => withCache('featured_recipes', baseApi.getFeaturedRecipes);
export const getRecipeBySlug = (slug: string) => 
  withCache(`recipe_${slug}`, () => baseApi.getRecipeBySlug(slug));