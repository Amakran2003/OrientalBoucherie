#!/usr/bin/env node

/**
 * Simple data import script for Sanity
 * This script will import basic categories and products into your Sanity database
 * 
 * Usage:
 * 1. Add your token to a .env file in the studio directory:
 *    SANITY_AUTH_TOKEN=your-token-here
 * 
 * 2. Run with: node scripts/import-data.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables from .env file
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Sanity client configuration
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
})

// Check if token is available
if (!process.env.SANITY_AUTH_TOKEN) {
  console.error('❌ No SANITY_AUTH_TOKEN found in environment')
  console.log('Create a .env file in the studio folder with:')
  console.log('SANITY_AUTH_TOKEN=your-token-here')
  console.log('You can create a token at https://www.sanity.io/manage/project/rrwhrsep/api')
  process.exit(1)
}

// Sample categories
const categories = [
  {
    _id: 'category-beef',
    _type: 'category',
    title: 'Bœuf Halal',
    slug: { _type: 'slug', current: 'beef' },
    description: 'Viande de bœuf halal de première qualité, soigneusement sélectionnée',
    order: 1,
  },
  {
    _id: 'category-lamb',
    _type: 'category',
    title: 'Agneau Halal',
    slug: { _type: 'slug', current: 'lamb' },
    description: 'Agneau tendre et savoureux, préparé selon les traditions',
    order: 2,
  },
  {
    _id: 'category-poultry',
    _type: 'category',
    title: 'Volaille Fraîche',
    slug: { _type: 'slug', current: 'poultry' },
    description: 'Poulet, dinde et autres volailles halal de qualité supérieure',
    order: 3,
  },
  {
    _id: 'category-merguez',
    _type: 'category',
    title: 'Merguez Maison',
    slug: { _type: 'slug', current: 'merguez' },
    description: 'Nos fameuses merguez préparées artisanalement',
    order: 4,
  },
]

// Sample products
const products = [
  {
    _id: 'product-entrecote',
    _type: 'product',
    name: 'Entrecôte',
    slug: { _type: 'slug', current: 'entrecote' },
    description: 'Entrecôte de bœuf halal de qualité supérieure',
    price: 24.99,
    unit: 'kg',
    category: { _type: 'reference', _ref: 'category-beef' },
    origin: 'France',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'product-filet',
    _type: 'product',
    name: 'Filet de bœuf',
    slug: { _type: 'slug', current: 'filet-de-boeuf' },
    description: 'Filet de bœuf tendre et juteux',
    price: 32.99,
    unit: 'kg',
    category: { _type: 'reference', _ref: 'category-beef' },
    origin: 'France',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'product-lamb-chops',
    _type: 'product',
    name: 'Côtelettes d\'agneau',
    slug: { _type: 'slug', current: 'cotelettes-agneau' },
    description: 'Côtelettes d\'agneau tendres et savoureuses',
    price: 25.99,
    unit: 'kg',
    category: { _type: 'reference', _ref: 'category-lamb' },
    origin: 'France',
    isHalal: true,
    featured: false,
  },
  {
    _id: 'product-chicken',
    _type: 'product',
    name: 'Poulet entier',
    slug: { _type: 'slug', current: 'poulet-entier' },
    description: 'Poulet fermier élevé en plein air',
    price: 9.99,
    unit: 'kg',
    category: { _type: 'reference', _ref: 'category-poultry' },
    origin: 'France',
    isHalal: true,
    featured: true,
  },
  {
    _id: 'product-merguez',
    _type: 'product',
    name: 'Merguez traditionnelles',
    slug: { _type: 'slug', current: 'merguez-traditionnelles' },
    description: 'Nos merguez traditionnelles faites maison avec des épices authentiques',
    price: 15.99,
    unit: 'kg',
    category: { _type: 'reference', _ref: 'category-merguez' },
    origin: 'Maison',
    isHalal: true,
    featured: true,
  },
]

// Sample recipes
const recipes = [
  {
    _id: 'recipe-tajine',
    _type: 'recipe',
    title: 'Tajine d\'Agneau aux Pruneaux',
    slug: { _type: 'slug', current: 'tajine-agneau-pruneaux' },
    description: 'Un classique de la cuisine marocaine, tendre et parfumé',
    prepTime: 30,
    cookTime: 120,
    servings: 4,
    publishedAt: new Date('2023-10-12').toISOString(),
    featured: true,
    ingredients: [
      { _type: 'ingredient', ingredient: 'Épaule d\'agneau', amount: '800g' },
      { _type: 'ingredient', ingredient: 'Oignons', amount: '2 grands' },
      { _type: 'ingredient', ingredient: 'Pruneaux', amount: '200g' },
      { _type: 'ingredient', ingredient: 'Miel', amount: '2 cuillères à soupe' },
      { _type: 'ingredient', ingredient: 'Ras el Hanout', amount: '2 cuillères à café' }
    ],
    steps: [
      { 
        _type: 'step',
        title: 'Préparation de la viande', 
        description: [{ 
          _type: 'block', 
          children: [{ _type: 'span', text: 'Couper la viande en morceaux et faire revenir avec les oignons' }],
          style: 'normal'
        }] 
      },
      { 
        _type: 'step',
        title: 'Cuisson lente', 
        description: [{ 
          _type: 'block', 
          children: [{ _type: 'span', text: 'Ajouter les épices et laisser mijoter à feu doux pendant 2 heures' }],
          style: 'normal'
        }] 
      }
    ]
  },
  {
    _id: 'recipe-couscous',
    _type: 'recipe',
    title: 'Couscous Royal',
    slug: { _type: 'slug', current: 'couscous-royal' },
    description: 'Un couscous généreux avec plusieurs viandes et légumes',
    prepTime: 45,
    cookTime: 150,
    servings: 6,
    publishedAt: new Date('2023-11-05').toISOString(),
    featured: true,
    ingredients: [
      { _type: 'ingredient', ingredient: 'Semoule de couscous', amount: '500g' },
      { _type: 'ingredient', ingredient: 'Agneau', amount: '400g' },
      { _type: 'ingredient', ingredient: 'Poulet', amount: '400g' },
      { _type: 'ingredient', ingredient: 'Merguez', amount: '6 pièces' },
      { _type: 'ingredient', ingredient: 'Légumes variés', amount: 'Au choix' }
    ],
    steps: [
      { 
        _type: 'step',
        title: 'Préparation du bouillon', 
        description: [{ 
          _type: 'block', 
          children: [{ _type: 'span', text: 'Faire revenir les viandes puis ajouter les légumes et l\'eau' }],
          style: 'normal'
        }] 
      },
      { 
        _type: 'step',
        title: 'Préparation de la semoule', 
        description: [{ 
          _type: 'block', 
          children: [{ _type: 'span', text: 'Cuire à la vapeur plusieurs fois pour une texture parfaite' }],
          style: 'normal'
        }] 
      }
    ]
  },
  {
    _id: 'recipe-kefta',
    _type: 'recipe',
    title: 'Brochettes de Kefta',
    slug: { _type: 'slug', current: 'brochettes-kefta' },
    description: 'Délicieuses brochettes de viande hachée aux épices',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    publishedAt: new Date('2024-01-15').toISOString(),
    featured: true,
    ingredients: [
      { _type: 'ingredient', ingredient: 'Viande hachée', amount: '600g' },
      { _type: 'ingredient', ingredient: 'Oignon râpé', amount: '1' },
      { _type: 'ingredient', ingredient: 'Persil', amount: '1 bouquet' },
      { _type: 'ingredient', ingredient: 'Cumin', amount: '1 cuillère à café' },
      { _type: 'ingredient', ingredient: 'Paprika', amount: '1 cuillère à café' }
    ],
    steps: [
      { 
        _type: 'step',
        title: 'Préparation de la viande', 
        description: [{ 
          _type: 'block', 
          children: [{ _type: 'span', text: 'Mélanger tous les ingrédients et former les brochettes' }],
          style: 'normal'
        }] 
      },
      { 
        _type: 'step',
        title: 'Cuisson', 
        description: [{ 
          _type: 'block', 
          children: [{ _type: 'span', text: 'Griller sur le barbecue ou à la poêle pendant 3-4 minutes de chaque côté' }],
          style: 'normal'
        }] 
      }
    ]
  }
]

// Import function
async function importData() {
  console.log('🚀 Starting data import to Sanity...')

  try {
    // Check connection
    console.log('🔄 Testing connection to Sanity...')
    await client.fetch('*[_type == "sanity.imageAsset"][0]._id')
    console.log('✅ Connected to Sanity successfully')

    // Import categories first
    console.log('\n📁 Importing categories...')
    for (const category of categories) {
      try {
        await client.createOrReplace(category)
        console.log(`✅ Imported category: ${category.title}`)
      } catch (err) {
        console.error(`❌ Failed to import category ${category.title}:`, err.message)
      }
    }

    // Import products
    console.log('\n📦 Importing products...')
    for (const product of products) {
      try {
        await client.createOrReplace(product)
        console.log(`✅ Imported product: ${product.name}`)
      } catch (err) {
        console.error(`❌ Failed to import product ${product.name}:`, err.message)
      }
    }

    // Import recipes
    console.log('\n📚 Importing recipes...')
    for (const recipe of recipes) {
      try {
        await client.createOrReplace(recipe)
        console.log(`✅ Imported recipe: ${recipe.title}`)
      } catch (err) {
        console.error(`❌ Failed to import recipe ${recipe.title}:`, err.message)
      }
    }

    console.log('\n🎉 Data import completed!')
    console.log('\n🔍 You should now see your data at https://oriental.sanity.studio/')

  } catch (error) {
    console.error('❌ Import failed:', error)
    if (error.message.includes('401')) {
      console.log('\n⚠️ Authentication error - check your SANITY_AUTH_TOKEN')
      console.log('Get a token at: https://www.sanity.io/manage/project/rrwhrsep/api')
    }
  }
}

importData()