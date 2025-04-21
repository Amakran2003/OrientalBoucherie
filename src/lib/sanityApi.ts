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
  title: string;
  slug: { current: string };
  mainImage?: { _ref: string };
  description?: string;
  body?: any[];
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  ingredients?: { ingredient: string; amount: string }[];
  steps?: { title: string; description: any[]; image?: { _ref: string } }[];
  publishedAt: string;
  featured: boolean;
}

// Fetch all products
export async function getAllProducts(): Promise<Product[]> {
  return await client.fetch(`
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
  return await client.fetch(`
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
  return await client.fetch(`
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
  return await client.fetch(`
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
  return await client.fetch(`
    *[_type == "recipe"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      description,
      publishedAt,
      prepTime,
      cookTime,
      servings,
      featured
    }
  `);
}

// Fetch featured recipes
export async function getFeaturedRecipes(): Promise<Recipe[]> {
  return await client.fetch(`
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
      featured
    }[0...4]
  `);
}

// Fetch a single recipe by slug with all details
export async function getRecipeBySlug(slug: string): Promise<Recipe> {
  return await client.fetch(`
    *[_type == "recipe" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      description,
      body,
      publishedAt,
      prepTime,
      cookTime,
      servings,
      ingredients,
      steps,
      featured
    }
  `, { slug });
}