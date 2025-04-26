/**
 * Categories for recipes in Oriental Boucherie
 * These match the category references used in recipe collections
 */

export const recipeCategories = [
  {
    _type: 'category',
    _id: 'category-beef',
    title: 'Bœuf',
    slug: {
      _type: 'slug',
      current: 'boeuf'
    },
    description: 'Recettes à base de bœuf, viande rouge et préparations de bœuf.',
  },
  {
    _type: 'category',
    _id: 'category-lamb',
    title: 'Agneau',
    slug: {
      _type: 'slug',
      current: 'agneau'
    },
    description: 'Recettes à base d\'agneau, de mouton et dérivés.',
  },
  {
    _type: 'category',
    _id: 'category-poultry',
    title: 'Volaille',
    slug: {
      _type: 'slug',
      current: 'volaille'
    },
    description: 'Recettes à base de poulet, dinde et autres volailles.',
  },
  {
    _type: 'category',
    _id: 'category-mixed-meat',
    title: 'Viandes mixtes',
    slug: {
      _type: 'slug',
      current: 'viandes-mixtes'
    },
    description: 'Recettes qui utilisent plusieurs types de viandes.',
  },
  {
    _type: 'category',
    _id: 'category-sides',
    title: 'Accompagnements',
    slug: {
      _type: 'slug',
      current: 'accompagnements'
    },
    description: 'Sauces, salades et autres accompagnements pour vos plats principaux.',
  },
  {
    _type: 'category',
    _id: 'category-appetizers',
    title: 'Entrées',
    slug: {
      _type: 'slug',
      current: 'entrees'
    },
    description: 'Entrées, amuse-bouches et petites bouchées pour commencer le repas.',
  },
  {
    _type: 'category',
    _id: 'category-desserts',
    title: 'Desserts',
    slug: {
      _type: 'slug',
      current: 'desserts'
    },
    description: 'Douceurs et desserts pour terminer le repas.',
  },
  {
    _type: 'category',
    _id: 'category-breakfast',
    title: 'Petit-déjeuner',
    slug: {
      _type: 'slug',
      current: 'petit-dejeuner'
    },
    description: 'Recettes idéales pour le petit-déjeuner ou le brunch.',
  }
];

// Export individual categories for easy reference
export const categoryIds = recipeCategories.reduce((acc, category) => {
  acc[category._id] = category._id;
  return acc;
}, {});
