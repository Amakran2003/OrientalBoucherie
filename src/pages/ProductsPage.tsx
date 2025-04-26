import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/layout/PageHeader';
import ProductFilterBar from '../components/products/ProductFilterBar';
import { useProducts } from '../hooks/products/useProducts';
import { useCategories } from '../hooks/products/useCategories';
import { useProductFilters } from '../hooks/products/useProductFilters';
import CategoryFilterBar from '../components/products/CategoryFilterBar';
import ProductGrid from '../components/products/ProductGrid';
import NoResults from '../components/products/NoResults';
import LoadingIndicator from '../components/ui/LoadingIndicator';
import { getAllProducts, clearAllCaches } from '../lib/apiUtils';
import { useQueryClient } from '@tanstack/react-query';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  
  // Use custom hooks
  const { products, loading: productsLoading } = useProducts();
  const { categories } = useCategories();
  const { 
    filters, 
    filteredProducts, 
    origins, 
    maxPrice, 
    handleFilterChange,
    resetFilters 
  } = useProductFilters(products, categorySlug);

  // Loading state is true if products are still loading
  const loading = productsLoading;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (slug: string | undefined) => {
    if (slug) {
      navigate(`/products/${slug}`);
    } else {
      navigate('/products');
    }
  };

  const handleRefresh = async () => {
    // Clear all caches
    clearAllCaches();
    // Force refetch products
    await getAllProducts(true);
    // Invalidate React Query cache
    queryClient.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <>
      <Helmet>
        <title>{t('products.title')} | Oriental Boucherie</title>
        <meta name="description" content={t('products.metaDescription')} />
      </Helmet>

      <PageHeader 
        title="Nos Produits" 
        description="Découvrez notre sélection de viandes de qualité, fraîches et préparées avec savoir-faire."
      />
      
      <div className="container-custom py-10">
        {/* Category filters */}
        <CategoryFilterBar 
          categories={categories} 
          currentCategory={categorySlug} 
          onCategoryChange={handleCategoryChange}
        />

        {/* Product filters */}
        <ProductFilterBar 
          filters={filters} 
          onFilterChange={handleFilterChange}
          maxPrice={maxPrice}
          origins={origins}
        />

        {/* Products Content */}
        {loading ? (
          <LoadingIndicator />
        ) : filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <NoResults 
            message="Aucun produit trouvé avec les critères sélectionnés."
            onReset={resetFilters}
            resetButtonText="Réinitialiser les filtres"
          />
        )}

        <div className="flex justify-center mt-8">
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t('common.refresh')}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;