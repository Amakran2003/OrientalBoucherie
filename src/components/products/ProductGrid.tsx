import React from 'react';
import { Product } from '../../lib/sanityApi';
import { urlFor } from '../../lib/sanity';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product._id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          {product.image && (
            <div className="h-48 overflow-hidden">
              <img
                src={urlFor(product.image).width(500).height(300).url()}
                alt={product.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              {product.isHalal && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Halal</span>
              )}
            </div>
            {product.description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
            )}
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-red-700">
                {product.price} €<span className="text-sm text-gray-600 dark:text-gray-400">/{product.unit}</span>
              </div>
              {product.origin && (
                <div className="text-xs text-gray-500">Origine: {product.origin}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
