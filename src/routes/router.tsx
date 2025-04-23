import React, { lazy, Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NotFoundPage from '../pages/NotFoundPage';

// Import the home page normally as it's the most critical for first load
import HomePage from '../pages/HomePage';

// Lazy load all other pages
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const RecipesPage = lazy(() => import('../pages/RecipesPage'));
const RecipeDetailPage = lazy(() => import('../pages/RecipeDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'));

// Loading fallback
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-700"></div>
  </div>
);

// Wrap lazy components with Suspense
const withSuspense = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: withSuspense(AboutPage),
      },
      {
        path: 'products',
        element: withSuspense(ProductsPage),
      },
      {
        path: 'products/:categorySlug',
        element: withSuspense(ProductsPage),
      },
      {
        path: 'testimonials',
        element: withSuspense(TestimonialsPage),
      },
      {
        path: 'recipes',
        element: withSuspense(RecipesPage),
      },
      {
        path: 'recipes/:slug',
        element: withSuspense(RecipeDetailPage),
      },
      {
        path: 'contact',
        element: withSuspense(ContactPage),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;