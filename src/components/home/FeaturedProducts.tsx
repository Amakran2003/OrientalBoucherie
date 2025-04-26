import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../lib/apiUtils';
import { Product } from '../../lib/sanityApi';
import { urlFor } from '../../lib/sanity';
import LoadingIndicator from '../ui/LoadingIndicator';

// Simple loading component for product images
const ImageLoader = () => (
  <div className="h-56 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
);

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsData = await getFeaturedProducts();
        setProducts(productsData || []);
      } catch (error) {
        console.error('Error fetching featured products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleImageLoaded = (id: string) => {
    setImgLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <LoadingIndicator size="lg" />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return null; // Don't show the section if no featured products
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Nos Produits Vedettes</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez notre sélection de produits de qualité exceptionnelle, préparés avec soin et savoir-faire par notre maître boucher.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div 
              key={product._id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {product.image ? (
                <div className="h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={urlFor(product.image).width(600).height(400).auto('format').quality(80).url()}
                    alt={product.name}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                      imgLoaded[product._id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoaded(product._id)}
                  />
                  {!imgLoaded[product._id] && <ImageLoader />}
                </div>
              ) : (
                <ImageLoader />
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-500">
                    {product.price.toFixed(2)} €
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      /{product.unit}
                    </span>
                  </span>
                  <Link 
                    to={`/products/${product.category?._ref || ''}`}
                    className="text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400 font-medium"
                  >
                    Voir plus
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}