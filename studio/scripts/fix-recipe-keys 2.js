#!/usr/bin/env node

/**
 * Script to fix recipe keys in Sanity
 * This script will update all recipes to ensure they have proper _key properties for array items
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

async function fixRecipeKeys() {
  try {
    console.log('🚀 Starting recipe key fix...')
    
    // Fetch all recipes
    const recipes = await client.fetch('*[_type == "recipe"]')
    console.log(`Found ${recipes.length} recipes to fix`)
    
    // Create a map to track processed titles
    const processedTitles = new Map()
    
    // Process each recipe
    for (const recipe of recipes) {
      try {
        console.log(`Processing recipe: ${recipe.title}`)
        
        // Check if we've already processed this title
        if (processedTitles.has(recipe.title)) {
          console.log(`⚠️ Skipping duplicate recipe: ${recipe.title}`)
          continue
        }
        
        // Mark this title as processed
        processedTitles.set(recipe.title, true)
        
        // Fix ingredients array
        const fixedIngredients = (recipe.ingredients || []).map((ingredient, index) => ({
          ...ingredient,
          _key: ingredient._key || `ingredient-${index}-${Date.now()}`
        }))
        
        // Fix steps array
        const fixedSteps = (recipe.steps || []).map((step, index) => ({
          ...step,
          _key: step._key || `step-${index}-${Date.now()}`,
          descriptions: (step.descriptions || []).map((desc, descIndex) => ({
            ...desc,
            _key: desc._key || `step-${index}-desc-${descIndex}-${Date.now()}`
          }))
        }))
        
        // Fix body blocks
        const fixedBody = (recipe.body || []).map((block, index) => ({
          ...block,
          _key: block._key || `block-${index}-${Date.now()}`
        }))
        
        // Fix categories array
        const fixedCategories = (recipe.categories || []).map((category, index) => ({
          ...category,
          _key: category._key || `category-${index}-${Date.now()}`
        }))
        
        // Fix related products array
        const fixedRelatedProducts = (recipe.relatedProducts || []).map((product, index) => ({
          ...product,
          _key: product._key || `product-${index}-${Date.now()}`
        }))
        
        // Update the recipe
        await client
          .patch(recipe._id)
          .set({
            ingredients: fixedIngredients,
            steps: fixedSteps,
            body: fixedBody,
            categories: fixedCategories,
            relatedProducts: fixedRelatedProducts
          })
          .commit()
        
        console.log(`✅ Fixed recipe: ${recipe.title}`)
      } catch (recipeError) {
        console.error(`❌ Error fixing recipe ${recipe.title}:`, recipeError)
        // Continue with next recipe
      }
    }
    
    console.log('✨ Recipe key fix completed!')
  } catch (error) {
    console.error('❌ Error fixing recipes:', error)
  }
}

// Run the fix
fixRecipeKeys() 