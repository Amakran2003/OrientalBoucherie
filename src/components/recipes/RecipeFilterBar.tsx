import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';

export interface RecipeFilters {
  search: string;
  maxPrepTime: number | null;
  maxCookTime: number | null;
  servings: number | null;
  country: string | null;
  sortBy: 'date-desc' | 'date-asc' | 'prepTime-asc' | 'cookTime-asc';
}

interface RecipeFilterBarProps {
  filters: RecipeFilters;
  onFilterChange: (filters: RecipeFilters) => void;
  maxPossiblePrepTime: number;
  maxPossibleCookTime: number;
  maxPossibleServings: number;
  countries: string[];
}

const RecipeFilterBar: React.FC<RecipeFilterBarProps> = ({ 
  filters, 
  onFilterChange, 
  maxPossiblePrepTime,
  maxPossibleCookTime,
  maxPossibleServings,
  countries
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const handlePrepTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? null : Number(e.target.value);
    onFilterChange({ ...filters, maxPrepTime: value });
  };

  const handleCookTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? null : Number(e.target.value);
    onFilterChange({ ...filters, maxCookTime: value });
  };

  const handleServingsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'all' ? null : Number(e.target.value);
    onFilterChange({ ...filters, servings: value });
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'all' ? null : e.target.value;
    onFilterChange({ ...filters, country: value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ 
      ...filters, 
      sortBy: e.target.value as RecipeFilters['sortBy'] 
    });
  };

  const clearFilters = () => {
    onFilterChange({
      search: '',
      maxPrepTime: null,
      maxCookTime: null,
      servings: null,
      country: null,
      sortBy: 'date-desc'
    });
  };

  return (
    <div className="mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      {/* Search bar - always visible */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Rechercher des recettes..."
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
          filters.maxPrepTime !== null || 
          filters.maxCookTime !== null ||
          filters.servings !== null ||
          filters.country !== null ||
          filters.sortBy !== 'date-desc') && (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Prep time filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temps de préparation max (min)
              </label>
              <input
                type="number"
                min={1}
                max={maxPossiblePrepTime}
                value={filters.maxPrepTime ?? ''}
                onChange={handlePrepTimeChange}
                placeholder="Tous"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Cook time filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temps de cuisson max (min)
              </label>
              <input
                type="number"
                min={1}
                max={maxPossibleCookTime}
                value={filters.maxCookTime ?? ''}
                onChange={handleCookTimeChange}
                placeholder="Tous"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            </div>

            {/* Servings filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre de personnes
              </label>
              <select
                value={filters.servings?.toString() || 'all'}
                onChange={handleServingsChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="all">Tous</option>
                {[...Array(maxPossibleServings)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} personne{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            {/* Country filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pays d'origine
              </label>
              <select
                value={filters.country || 'all'}
                onChange={handleCountryChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="all">Tous les pays</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
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
                <option value="date-desc">Plus récents d'abord</option>
                <option value="date-asc">Plus anciens d'abord</option>
                <option value="prepTime-asc">Préparation plus courte</option>
                <option value="cookTime-asc">Cuisson plus courte</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RecipeFilterBar;
