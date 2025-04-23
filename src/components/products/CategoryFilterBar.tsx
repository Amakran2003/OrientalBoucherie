import React from 'react';
import { Category } from '../../lib/sanityApi';

interface CategoryFilterBarProps {
  categories: Category[];
  currentCategory?: string;
  onCategoryChange: (categorySlug: string | undefined) => void;
}

const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({ 
  categories, 
  currentCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <button 
        onClick={() => onCategoryChange(undefined)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!currentCategory 
          ? 'bg-red-700 text-white' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
      >
        Tous les produits
      </button>
      
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => onCategoryChange(category.slug.current)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentCategory === category.slug.current
              ? 'bg-red-700 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterBar;
