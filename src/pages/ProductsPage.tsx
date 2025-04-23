import { useNavigate, useParams } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import ProductFilterBar from '../components/products/ProductFilterBar';
import { useProducts } from '../hooks/products/useProducts';
import { useCategories } from '../hooks/products/useCategories';
import { useProductFilters } from '../hooks/products/useProductFilters';
import CategoryFilterBar from '../components/products/CategoryFilterBar';
import ProductGrid from '../components/products/ProductGrid';
import NoResults from '../components/products/NoResults';
import LoadingIndicator from '../components/ui/LoadingIndicator';

export default function ProductsPage() {
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

  const handleCategoryChange = (slug: string | undefined) => {
    if (slug) {
      navigate(`/products/${slug}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <>
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
      </div>
    </>
  );
}