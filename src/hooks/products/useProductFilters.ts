import { useState, useEffect, useMemo } from 'react';
import { Product } from '../../lib/sanityApi';
import { ProductFilters } from '../../components/products/ProductFilterBar';

export const useProductFilters = (products: Product[], categorySlug?: string) => {
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    priceRange: [0, 1000], // Default range, updated with actual max
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

  // Calculate max price from all products
  const maxPrice = useMemo(() => {
    const prices = products.map(p => p.price);
    const max = Math.max(...prices, 0);
    // Round up to nearest 10 for better UX
    return Math.ceil(max / 10) * 10;
  }, [products]);

  // Update price range when max price changes
  useEffect(() => {
    if (maxPrice > 0 && filters.priceRange[1] === 1000) {
      setFilters(prev => ({
        ...prev,
        priceRange: [prev.priceRange[0], maxPrice]
      }));
    }
  }, [maxPrice]);

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

    // Filter by price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );

    // Filter by origin
    if (filters.origin) {
      result = result.filter(product => product.origin === filters.origin);
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
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
      priceRange: [0, maxPrice],
      origin: null,
      sortBy: 'name-asc'
    });
  };

  return { 
    filters, 
    filteredProducts, 
    origins, 
    maxPrice, 
    handleFilterChange,
    resetFilters
  };
};
