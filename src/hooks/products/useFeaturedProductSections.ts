import { useState, useEffect } from 'react';
import { getFeaturedProductSections } from '../../lib/sanityApi';
import type { FeaturedProductSection } from '../../lib/sanityApi';

export const useFeaturedProductSections = () => {
  const [sections, setSections] = useState<FeaturedProductSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFeaturedProductSections = async () => {
      setLoading(true);
      try {
        const data = await getFeaturedProductSections();
        setSections(data);
      } catch (err) {
        console.error('Error fetching featured product sections:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch featured product sections'));
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProductSections();
  }, []);

  return { sections, loading, error };
};