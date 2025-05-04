/**
 * Script to import categories and products into Sanity
 * 
 * Run this script with: sanity exec scripts/import-references.js --with-user-token
 */

import sanityClient from 'part:@sanity/base/client'
import { recipeCategories } from './categories'
import { products } from './products'

const client = sanityClient.withConfig({ apiVersion: '2021-06-07' })

// Function to import data with proper error handling
async function importData(data, dataType) {
  console.log(`Starting import of ${data.length} ${dataType}...`)
  
  let successCount = 0
  let errorCount = 0
  
  for (const item of data) {
    try {
      // Check if the document already exists to avoid duplicates
      const existingDoc = await client.getDocument(item._id)
      
      if (existingDoc) {
        // Update existing document
        await client
          .patch(item._id)
          .set(item)
          .commit()
        console.log(`Updated ${dataType}: ${item.title || item._id}`)
      } else {
        // Create new document
        await client.createIfNotExists(item)
        console.log(`Created ${dataType}: ${item.title || item._id}`)
      }
      
      successCount++
    } catch (error) {
      console.error(`Error importing ${dataType} ${item._id || item.title}:`, error.message)
      errorCount++
    }
  }
  
  console.log(`Import of ${dataType} completed. Success: ${successCount}, Errors: ${errorCount}`)
}

// Main function to run the imports in order
async function runImport() {
  try {
    // First import categories as products depend on them
    await importData(recipeCategories, 'categories')
    
    // Then import products
    await importData(products, 'products')
    
    console.log('All imports completed successfully.')
  } catch (error) {
    console.error('Import process failed:', error.message)
  }
}

// Run the import
runImport()
