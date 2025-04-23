// Mock data implementation to use during development
import { Product, Category, Recipe } from './sanityApi';

// Sample categories
export const mockCategories: Category[] = [
  {
    _id: 'beef-category',
    title: 'Bœuf Halal',
    slug: { current: 'beef' },
    description: 'Viande de bœuf halal de première qualité, soigneusement sélectionnée',
    order: 1,
  },
  {
    _id: 'lamb-category',
    title: 'Agneau Halal',
    slug: { current: 'lamb' },
    description: 'Agneau tendre et savoureux, préparé selon les traditions',
    order: 2,
  },
  {
    _id: 'poultry-category',
    title: 'Volaille Fraîche',
    slug: { current: 'poultry' },
    description: 'Poulet, dinde et autres volailles halal de qualité supérieure',
    order: 3,
  },
  {
    _id: 'merguez-category',
    title: 'Merguez Maison',
    slug: { current: 'merguez' },
    description: 'Nos fameuses merguez préparées artisanalement',
    order: 4,
  },
  {
    _id: 'specialty-category',
    title: 'Spécialités Orientales',
    slug: { current: 'specialty' },
    description: 'Découvrez nos préparations orientales traditionnelles',
    order: 5,
  },
  {
    _id: 'epices-category',
    title: 'Épices et Marinades',
    slug: { current: 'epices' },
    description: 'Une sélection d\'épices authentiques et marinades maison',
    order: 6,
  },
];

// Sample products
export const mockProducts: Product[] = [
  {
    _id: 'beef-entrecote',
    name: 'Entrecôte',
    slug: { current: 'entrecote' },
    description: 'Entrecôte de bœuf halal de qualité supérieure',
    price: 24.99,
    unit: 'kg',
    category: { _ref: 'beef-category', title: 'Bœuf Halal' },
    origin: 'France',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'beef-filet',
    name: 'Filet de bœuf',
    slug: { current: 'filet-de-boeuf' },
    description: 'Filet de bœuf tendre et juteux',
    price: 32.99,
    unit: 'kg',
    category: { _ref: 'beef-category', title: 'Bœuf Halal' },
    origin: 'France',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'lamb-gigot',
    name: 'Gigot d\'agneau',
    slug: { current: 'gigot-agneau' },
    description: 'Gigot d\'agneau parfait pour les occasions spéciales',
    price: 21.99,
    unit: 'kg',
    category: { _ref: 'lamb-category', title: 'Agneau Halal' },
    origin: 'France',
    isHalal: true,
    featured: false,
  },
  {
    _id: 'chicken-whole',
    name: 'Poulet entier',
    slug: { current: 'poulet-entier' },
    description: 'Poulet fermier élevé en plein air',
    price: 8.99,
    unit: 'kg',
    category: { _ref: 'poultry-category', title: 'Volaille Fraîche' },
    origin: 'France',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'merguez-classic',
    name: 'Merguez traditionnelles',
    slug: { current: 'merguez-traditionnelles' },
    description: 'Nos merguez traditionnelles faites maison',
    price: 15.99,
    unit: 'kg',
    category: { _ref: 'merguez-category', title: 'Merguez Maison' },
    origin: 'Maison',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'specialty-kefta',
    name: 'Kefta',
    slug: { current: 'kefta' },
    description: 'Viande hachée assaisonnée aux épices orientales',
    price: 17.50,
    unit: 'kg',
    category: { _ref: 'specialty-category', title: 'Spécialités Orientales' },
    origin: 'Maison',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'spice-mix',
    name: 'Mélange d\'épices Ras el Hanout',
    slug: { current: 'ras-el-hanout' },
    description: 'Authentique mélange d\'épices pour viandes et tajines',
    price: 5.99,
    unit: 'piece',
    category: { _ref: 'epices-category', title: 'Épices et Marinades' },
    origin: 'Maroc',
    isHalal: true,
    featured: false,
  }
];

// Sample recipes
export const mockRecipes: Recipe[] = [
  {
    _id: 'recipe-tajine-agneau',
    title: 'Tajine d\'Agneau aux Pruneaux',
    slug: { current: 'tajine-agneau-pruneaux' },
    description: 'Un classique de la cuisine marocaine, tendre et parfumé',
    prepTime: 30,
    cookTime: 120,
    servings: 4,
    publishedAt: '2023-10-12',
    featured: true,
    ingredients: [
      { ingredient: 'Épaule d\'agneau', amount: '800g' },
      { ingredient: 'Oignons', amount: '2 grands' },
      { ingredient: 'Pruneaux', amount: '200g' },
      { ingredient: 'Miel', amount: '2 cuillères à soupe' },
      { ingredient: 'Ras el Hanout', amount: '2 cuillères à café' }
    ],
    steps: [
      { 
        title: 'Préparation de la viande', 
        description: [{ _type: 'block', children: [{ _type: 'span', text: 'Couper la viande en morceaux et faire revenir avec les oignons' }] }] 
      },
      { 
        title: 'Cuisson lente', 
        description: [{ _type: 'block', children: [{ _type: 'span', text: 'Ajouter les épices et laisser mijoter à feu doux pendant 2 heures' }] }] 
      }
    ]
  },
  {
    _id: 'recipe-couscous',
    title: 'Couscous Royal',
    slug: { current: 'couscous-royal' },
    description: 'Un couscous généreux avec plusieurs viandes et légumes',
    prepTime: 45,
    cookTime: 150,
    servings: 6,
    publishedAt: '2023-11-05',
    featured: true,
    ingredients: [
      { ingredient: 'Semoule de couscous', amount: '500g' },
      { ingredient: 'Agneau', amount: '400g' },
      { ingredient: 'Poulet', amount: '400g' },
      { ingredient: 'Merguez', amount: '6 pièces' },
      { ingredient: 'Légumes variés', amount: 'Au choix' }
    ],
    steps: [
      { 
        title: 'Préparation du bouillon', 
        description: [{ _type: 'block', children: [{ _type: 'span', text: 'Faire revenir les viandes puis ajouter les légumes et l\'eau' }] }] 
      },
      { 
        title: 'Préparation de la semoule', 
        description: [{ _type: 'block', children: [{ _type: 'span', text: 'Cuire à la vapeur plusieurs fois pour une texture parfaite' }] }] 
      }
    ]
  },
  {
    _id: 'recipe-kebab',
    title: 'Brochettes de Kefta',
    slug: { current: 'brochettes-kefta' },
    description: 'Délicieuses brochettes de viande hachée aux épices',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    publishedAt: '2024-01-15',
    featured: true,
    ingredients: [
      { ingredient: 'Viande hachée', amount: '600g' },
      { ingredient: 'Oignon râpé', amount: '1' },
      { ingredient: 'Persil', amount: '1 bouquet' },
      { ingredient: 'Cumin', amount: '1 cuillère à café' },
      { ingredient: 'Paprika', amount: '1 cuillère à café' }
    ],
    steps: [
      { 
        title: 'Préparation de la viande', 
        description: [{ _type: 'block', children: [{ _type: 'span', text: 'Mélanger tous les ingrédients et former les brochettes' }] }] 
      },
      { 
        title: 'Cuisson', 
        description: [{ _type: 'block', children: [{ _type: 'span', text: 'Griller sur le barbecue ou à la poêle pendant 3-4 minutes de chaque côté' }] }] 
      }
    ]
  }
];

// Mock API functions
export async function getAllProducts(): Promise<Product[]> {
  return Promise.resolve(mockProducts);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return Promise.resolve(mockProducts.filter(product => product.featured).slice(0, 6));
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return Promise.resolve(mockProducts.filter(
    product => product.category && 
    mockCategories.find(cat => cat._id === product.category!._ref)?.slug.current === categorySlug
  ));
}

export async function getAllCategories(): Promise<Category[]> {
  return Promise.resolve(mockCategories);
}

export async function getAllRecipes(): Promise<Recipe[]> {
  return Promise.resolve(mockRecipes);
}

export async function getFeaturedRecipes(): Promise<Recipe[]> {
  return Promise.resolve(mockRecipes.filter(recipe => recipe.featured).slice(0, 4));
}

export async function getRecipeBySlug(slug: string): Promise<Recipe> {
  const recipe = mockRecipes.find(recipe => recipe.slug.current === slug);
  if (!recipe) {
    throw new Error(`Recipe with slug '${slug}' not found`);
  }
  return Promise.resolve(recipe);
}