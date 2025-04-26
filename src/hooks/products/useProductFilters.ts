import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../lib/apiUtils';
import { Product } from '../../lib/sanityApi';

export interface ProductFilters {
  category?: string;
  search: string;
  priceRange: [number, number];
  origin: string | null;
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

export function useProductFilters(products: Product[] = [], categorySlug?: string) {
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    priceRange: [0, 1000],
    origin: null,
    sortBy: 'name-asc',
    category: categorySlug
  });
  const [forceRefresh, setForceRefresh] = useState(false);

  // Calculate available origins and max price
  const { origins, maxPrice } = useMemo(() => {
    const uniqueOrigins = Array.from(new Set(products.map(p => p.origin).filter(Boolean) as string[]));
    const maxPrice = Math.max(...products.map(p => p.price || 0));
    return { origins: uniqueOrigins, maxPrice };
  }, [products]);

  const filteredProducts = products.filter(product => {
    if (filters.category && product.category?._ref !== filters.category) {
      return false;
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower)
      );
    }
    if (filters.origin && product.origin !== filters.origin) {
      return false;
    }
    if (product.price && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (!filters.sortBy) return 0;
    switch (filters.sortBy) {
      case 'price-asc':
        return (a.price || 0) - (b.price || 0);
      case 'price-desc':
        return (b.price || 0) - (a.price || 0);
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const handleFilterChange = (newFilters: Partial<ProductFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      priceRange: [0, maxPrice],
      origin: null,
      sortBy: 'name-asc',
      category: categorySlug
    });
  };

  const refreshProducts = () => {
    setForceRefresh(prev => !prev);
  };

  return {
    products: filteredProducts,
    filteredProducts,
    filters,
    setFilters,
    isLoading: false,
    error: null,
    refreshProducts,
    origins,
    maxPrice,
    handleFilterChange,
    resetFilters
  };
}
