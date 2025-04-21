import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllCategories, getProductsByCategory, getAllProducts } from '../lib/sanityApi';
import { Category, Product } from '../lib/sanityApi';
import { urlFor } from '../lib/sanity';
import PageHeader from '../components/layout/PageHeader';

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch all categories
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);

        // Fetch products by category or all products if no category selected
        const productsData = categorySlug 
          ? await getProductsByCategory(categorySlug)
          : await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug]);

  return (
    <>
      <PageHeader 
        title="Nos Produits" 
        description="Découvrez notre sélection de viandes de qualité, fraîches et préparées avec savoir-faire."
      />
      
      <div className="container-custom py-10">
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button 
            onClick={() => navigate('/products')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!categorySlug 
              ? 'bg-red-700 text-white' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
          >
            Tous les produits
          </button>
          
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => navigate(`/products/${category.slug.current}`)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categorySlug === category.slug.current
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-700"></div>
          </div>
        ) : products.length > 0 ? (
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
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Aucun produit trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </>
  );
}