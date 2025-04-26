import { client } from './sanity';

// Types
export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  price: number;
  unit: 'kg' | 'piece' | 'g';
  image?: { _ref: string };
  category?: { _ref: string; title: string };
  origin?: string;
  isHalal: boolean;
  featured: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  image?: { _ref: string };
  order: number;
}

export interface Recipe {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  mainImage?: { _ref: string };
  description?: string;
  body?: any[];
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  country: string;
  ingredients?: { ingredient: string; amount: string }[];
  steps?: { title: string; description: string; image?: { _ref: string } }[];
  keywords?: string[];
  publishedAt: string;
  featured: boolean;
}

export interface FeaturedProductSection {
  _id: string;
  title: string;
  description?: string;
  products: Product[];
  displayOrder: number;
  active: boolean;
}

// Helper function to handle API fetch errors
async function safeQuery<T>(query: string, params?: any): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error(`Error executing Sanity query: ${error instanceof Error ? error.message : String(error)}`);
    // Return empty array or object depending on expected type
    return (Array.isArray(query) ? [] : {}) as T;
  }
}

// Fetch all products
export async function getAllProducts(): Promise<Product[]> {
  return safeQuery<Product[]>(`
    *[_type == "product"] | order(name asc) {
      _id,
      name,
      slug,
      description,
      price,
      unit,
      image,
      category->{_id, title, slug},
      origin,
      isHalal,
      featured
    }
  `);
}

// Fetch featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  return safeQuery<Product[]>(`
    *[_type == "product" && featured == true] | order(name asc) {
      _id,
      name,
      slug,
      description,
      price,
      unit,
      image,
      category->{_id, title, slug},
      origin,
      isHalal,
      featured
    }[0...6]
  `);
}

// Fetch products by category
export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return safeQuery<Product[]>(`
    *[_type == "product" && category->slug.current == $categorySlug] | order(name asc) {
      _id,
      name,
      slug,
      description,
      price,
      unit,
      image,
      category->{_id, title, slug},
      origin,
      isHalal,
      featured
    }
  `, { categorySlug });
}

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  return safeQuery<Category[]>(`
    *[_type == "category"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      image,
      order
    }
  `);
}

// Fetch all recipes
export async function getAllRecipes(): Promise<Recipe[]> {
  return safeQuery<Recipe[]>(`
    *[_type == "recipe"] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      mainImage,
      description,
      prepTime,
      cookTime,
      servings,
      country,
      ingredients,
      steps,
      keywords,
      featured,
      publishedAt
    }
  `);
}

// Fetch featured recipes
export async function getFeaturedRecipes(): Promise<Recipe[]> {
  return safeQuery<Recipe[]>(`
    *[_type == "recipe" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      description,
      publishedAt,
      prepTime,
      cookTime,
      servings,
      country,
      featured
    }[0...4]
  `);
}

// Fetch a single recipe by slug with all details
export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const recipe = await client.fetch<Recipe | null>(`
      *[_type == "recipe" && slug.current == $slug][0] {
        _id,
        _createdAt,
        title,
        slug,
        mainImage,
        description,
        body,
        publishedAt,
        prepTime,
        cookTime,
        servings,
        country,
        ingredients,
        steps,
        featured
      }
    `, { slug });
    
    return recipe;
  } catch (error) {
    console.error(`Error fetching recipe with slug "${slug}":`, error);
    return null;
  }
}

// Fetch featured product sections
export async function getFeaturedProductSections(): Promise<FeaturedProductSection[]> {
  return safeQuery<FeaturedProductSection[]>(`
    *[_type == "featuredProduct" && active == true] | order(displayOrder asc) {
      _id,
      title,
      description,
      products[]-> {
        _id,
        name,
        slug,
        description,
        price,
        unit,
        image,
        category->{_id, title, slug},
        origin,
        isHalal,
        featured
      },
      displayOrder,
      active
    }
  `);
}