import { useState, useMemo } from 'react';
import { Product } from '../../lib/sanityApi';
import { ProductFilters } from '../../components/products/ProductFilterBar';

export const useProductFilters = (products: Product[], categorySlug?: string) => {
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    origin: null,
    sortBy: 'name-asc'
  });
  
  // Calculate all unique origins from products
  const origins = useMemo(() => {
    const originSet = new Set<string>();
    products.forEach(product => {
      if (product.origin) {
        originSet.add(product.origin);
      }
    });
    return Array.from(originSet).sort();
  }, [products]);

  // Filter and sort products based on current filters
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category if selected
    if (categorySlug) {
      result = result.filter(product => 
        product.category && 
        typeof product.category === 'object' &&
        product.category !== null &&
        'slug' in product.category && 
        product.category.slug && 
        typeof product.category.slug === 'object' &&
        product.category.slug !== null &&
        'current' in product.category.slug &&
        product.category.slug.current === categorySlug
      );
    }

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) || 
        (product.description?.toLowerCase().includes(searchLower))
      );
    }

    // Filter by origin
    if (filters.origin) {
      result = result.filter(product => product.origin === filters.origin);
    }

    // Sort products
    switch (filters.sortBy) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [products, categorySlug, filters]);

  const handleFilterChange = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      origin: null,
      sortBy: 'name-asc'
    });
  };

  return { 
    filters, 
    filteredProducts, 
    origins, 
    handleFilterChange,
    resetFilters
  };
};
