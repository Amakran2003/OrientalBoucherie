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
import { recipes as tunisianRecipes } from './recipes/tunisian-recipes.js'
import { recipes as lebaneseRecipes } from './recipes/lebanese-recipes.js'
import { recipes as algerianRecipes } from './recipes/algerian-recipes.js'
import { recipes as moroccanRecipes } from './recipes/moroccan-recipes.js'
import { recipes as frenchRecipes } from './recipes/french-recipes.js'

// Load environment variables from .env file
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Check if token is available
if (!process.env.SANITY_AUTH_TOKEN) {
  console.error('❌ No SANITY_AUTH_TOKEN found in environment')
  console.log('Create a .env file in the studio folder with:')
  console.log('SANITY_AUTH_TOKEN=your-token-here')
  console.log('You can create a token at https://www.sanity.io/manage/project/rrwhrsep/api')
  console.log('Make sure to give it "Editor" permissions')
  process.exit(1)
}

// Sanity client configuration
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN
})

// Combine all recipes
const allRecipes = [
  ...tunisianRecipes,
  ...lebaneseRecipes,
  ...algerianRecipes,
  ...moroccanRecipes,
  ...frenchRecipes
]

async function importRecipes() {
  console.log('🚀 Starting recipe import...')
  
  try {
    // Check connection
    console.log('🔄 Testing connection to Sanity...')
    await client.fetch('*[_type == "sanity.imageAsset"][0]._id')
    console.log('✅ Connected to Sanity successfully')
    
    console.log(`📝 Found ${allRecipes.length} recipes to import`)
    
    // Import each recipe
    for (const recipe of allRecipes) {
      // Check if recipe already exists
      const existingRecipe = await client.fetch(
        `*[_type == "recipe" && slug.current == $slug][0]`,
        { slug: recipe.slug.current }
      )
      
      if (existingRecipe) {
        console.log(`ℹ️ Recipe already exists: ${recipe.title}`)
        continue
      }
      
      // Remove categories field if it exists
      const { categories, ...recipeWithoutCategories } = recipe
      
      // Create the recipe
      await client.create({
        ...recipeWithoutCategories,
        _type: 'recipe'
      })
      
      console.log(`✅ Created recipe: ${recipe.title}`)
    }
    
    console.log('✨ Import completed successfully!')
    
  } catch (error) {
    console.error('❌ Import failed:', error.message)
    if (error.message.includes('permission')) {
      console.log('\n⚠️ Permission error - your token does not have sufficient permissions')
      console.log('Please create a new token with "Editor" permissions at:')
      console.log('https://www.sanity.io/manage/project/rrwhrsep/api')
    }
  }
}

importRecipes()