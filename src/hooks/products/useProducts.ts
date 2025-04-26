import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../../lib/apiUtils';
import { Product } from '../../lib/sanityApi';

export const useProducts = () => {
  const { data: products = [], isLoading: loading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(),
  });

  return { products, loading, error };
};
