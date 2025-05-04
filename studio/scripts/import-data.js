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
import { lebaneseRecipes } from './recipes/lebanese-recipes.js'
import { moroccanRecipes } from './recipes/moroccan-recipes.js'
import { frenchRecipes } from './recipes/french-recipes.js'

// Load environment variables from .env file
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Check if token is available
if (!process.env.SANITY_AUTH_TOKEN) {
  console.error('❌ No SANITY_AUTH_TOKEN found in environment')
  console.log('Create a .env file in the studio folder with:')
  console.log('SANITY_AUTH_TOKEN=your-token-here')
  process.exit(1)
}

// Initialize Sanity client
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2023-05-03',
  useCdn: false
})

// Generate a unique key
function generateKey(prefix = '') {
  return `${prefix}${Math.random().toString(36).substring(2, 15)}`
}

// Add keys to arrays in recipe
function addKeysToRecipe(recipe) {
  // Add keys to ingredients
  if (recipe.ingredients) {
    recipe.ingredients = recipe.ingredients.map(ingredient => ({
      ...ingredient,
      _key: generateKey('ing_')
    }))
  }

  // Add keys to steps
  if (recipe.steps) {
    recipe.steps = recipe.steps.map(step => ({
      ...step,
      _key: generateKey('step_'),
      description: Array.isArray(step.description) ? step.description.map(block => ({
        ...block,
        _key: generateKey('block_')
      })) : step.description
    }))
  }

  return recipe
}

// Delete all existing recipes
async function deleteAllRecipes() {
  console.log('🗑️ Deleting all existing recipes...')
  try {
    // Get all recipe IDs
    const recipeIds = await client.fetch('*[_type == "recipe"]._id')
    console.log(`Found ${recipeIds.length} recipes to delete`)
    
    // Delete each recipe
    for (const id of recipeIds) {
      await client.delete(id)
      console.log(`✅ Deleted recipe with ID: ${id}`)
    }
    console.log('✅ All recipes deleted successfully!')
  } catch (error) {
    console.error('❌ Error deleting recipes:', error)
    process.exit(1)
  }
}

// Import recipes
async function importRecipes() {
  console.log('📝 Importing recipes...')
  try {
    // Combine all recipes
    const recipes = [
      ...lebaneseRecipes,
      ...moroccanRecipes,
      ...frenchRecipes
    ]
    
    console.log(`📝 Found ${recipes.length} recipes to import`)
    
    for (const recipe of recipes) {
      // Remove image and product references
      const { mainImage, relatedProducts, ...recipeWithoutRefs } = recipe
      
      // Add keys to arrays
      const recipeWithKeys = addKeysToRecipe(recipeWithoutRefs)
      
      const doc = {
        _type: 'recipe',
        ...recipeWithKeys,
        relatedProducts: [] // Add empty array for relatedProducts
      }
      await client.create(doc)
      console.log(`✅ Imported recipe: ${recipe.title}`)
    }
    console.log('✅ All recipes imported successfully!')
  } catch (error) {
    console.error('❌ Error importing recipes:', error)
    console.error('Error details:', error.response?.body || error)
  }
}

// Run the delete and import process
async function main() {
  await deleteAllRecipes()
  await importRecipes()
}

main()