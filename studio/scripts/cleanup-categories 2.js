import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

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

async function cleanupCategories() {
  console.log('🧹 Starting category cleanup...')

  try {
    // Check connection
    console.log('🔄 Testing connection to Sanity...')
    await client.fetch('*[_type == "sanity.imageAsset"][0]._id')
    console.log('✅ Connected to Sanity successfully')

    // 1. Find the "Plats Principaux" category
    console.log('🔍 Looking for "Plats Principaux" category...')
    const platsPrincipauxCategory = await client.fetch(
      `*[_type == "category" && title == "Plats Principaux"][0]`
    )

    if (platsPrincipauxCategory) {
      console.log(`✅ Found "Plats Principaux" category with ID: ${platsPrincipauxCategory._id}`)
      
      // 2. Update all recipes that reference this category to remove the reference
      console.log('🔄 Updating recipes to remove category references...')
      const recipesWithCategory = await client.fetch(
        `*[_type == "recipe" && references($categoryId)]`,
        { categoryId: platsPrincipauxCategory._id }
      )
      
      console.log(`📝 Found ${recipesWithCategory.length} recipes with category references`)
      
      for (const recipe of recipesWithCategory) {
        await client
          .patch(recipe._id)
          .set({ categories: [] })
          .commit()
        console.log(`✅ Removed category reference from recipe: ${recipe.title}`)
      }
      
      // 3. Delete the category
      console.log('🗑️ Deleting "Plats Principaux" category...')
      await client.delete(platsPrincipauxCategory._id)
      console.log('✅ Category deleted successfully')
    } else {
      console.log('ℹ️ "Plats Principaux" category not found')
    }
    
    // 4. Update all recipes to remove any category references
    console.log('🔄 Updating all recipes to remove any category references...')
    const allRecipes = await client.fetch(`*[_type == "recipe"]`)
    
    for (const recipe of allRecipes) {
      if (recipe.categories && recipe.categories.length > 0) {
        await client
          .patch(recipe._id)
          .set({ categories: [] })
          .commit()
        console.log(`✅ Removed category references from recipe: ${recipe.title}`)
      }
    }
    
    console.log('✨ Category cleanup completed successfully!')
    
  } catch (error) {
    console.error('❌ Cleanup failed:', error.message)
    if (error.message.includes('permission')) {
      console.log('\n⚠️ Permission error - your token does not have sufficient permissions')
      console.log('Please create a new token with "Editor" permissions at:')
      console.log('https://www.sanity.io/manage/project/rrwhrsep/api')
    }
  }
}

cleanupCategories() 