import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export interface ProductFilters {
  search: string;
  priceRange: [number, number];
  origin: string | null;
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

interface ProductFilterBarProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  maxPrice: number;
  origins: string[];
}

const ProductFilterBar: React.FC<ProductFilterBarProps> = ({ 
  filters, 
  onFilterChange, 
  maxPrice, 
  origins 
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...filters.priceRange] as [number, number];
    newPriceRange[index] = Number(e.target.value);
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };

  const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({ ...filters, origin: value === 'all' ? null : value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ 
      ...filters, 
      sortBy: e.target.value as ProductFilters['sortBy'] 
    });
  };

  const clearFilters = () => {
    onFilterChange({
      search: '',
      priceRange: [0, maxPrice],
      origin: null,
      sortBy: 'name-asc'
    });
  };

  return (
    <div className="mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      {/* Search bar - always visible */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Rechercher des produits..."
          value={filters.search}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400"
        >
          <SlidersHorizontal className="h-4 w-4 mr-1" />
          {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
        </button>

        {(filters.search || 
          filters.priceRange[0] > 0 || 
          filters.priceRange[1] < maxPrice ||
          filters.origin !== null ||
          filters.sortBy !== 'name-asc') && (
          <button
            onClick={clearFilters}
            className="flex items-center text-sm font-medium text-red-600 dark:text-red-400"
          >
            <X className="h-4 w-4 mr-1" />
            Effacer les filtres
          </button>
        )}
      </div>

      {/* Expandable filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* Price range filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Fourchette de prix (€)
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min={0}
                max={filters.priceRange[1]}
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
              <span className="text-gray-500">à</span>
              <input
                type="number"
                min={filters.priceRange[0]}
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Origin filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Origine
              </label>
              <select
                value={filters.origin || 'all'}
                onChange={handleOriginChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="all">Toutes origines</option>
                {origins.map(origin => (
                  <option key={origin} value={origin}>{origin}</option>
                ))}
              </select>
            </div>

            {/* Sort by filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Trier par
              </label>
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="name-asc">Nom (A-Z)</option>
                <option value="name-desc">Nom (Z-A)</option>
                <option value="price-asc">Prix (croissant)</option>
                <option value="price-desc">Prix (décroissant)</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductFilterBar;
