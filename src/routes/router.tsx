import { createHashRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import RecipesPage from '../pages/RecipesPage';
import RecipeDetailPage from '../pages/RecipeDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

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
        element: <AboutPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'products/:categorySlug',
        element: <ProductsPage />,
      },
      {
        path: 'commitments',
        element: <div className="min-h-screen pt-32 pb-20 container-custom">Nos Engagements (Bientôt disponible)</div>,
      },
      {
        path: 'recipes',
        element: <RecipesPage />,
      },
      {
        path: 'recipes/:slug',
        element: <RecipeDetailPage />,
      },
      {
        path: 'contact',
        element: <div className="min-h-screen pt-32 pb-20 container-custom">Contact (Bientôt disponible)</div>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;