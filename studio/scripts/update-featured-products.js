#!/usr/bin/env node

/**
 * Script to update products in Sanity to mark them as featured
 * 
 * Usage:
 * 1. Add your token to a .env file in the studio directory:
 *    SANITY_TOKEN=your-token-here
 * 
 * 2. Run with: node scripts/update-featured-products.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables from .env file
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Check if token is available
if (!process.env.SANITY_TOKEN) {
  console.error('❌ No SANITY_TOKEN found in environment')
  console.log('Create a .env file in the studio folder with:')
  console.log('SANITY_TOKEN=your-token-here')
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
  token: process.env.SANITY_TOKEN
})

const featuredProductSlugs = [
  'poulet-entier',
  'entrecote',
  'filet-de-boeuf',
  'merguez-traditionnelles'
]

// Update function
async function updateFeaturedProducts() {
  console.log('🚀 Starting featured products update in Sanity...')

  try {
    // Check connection
    console.log('🔄 Testing connection to Sanity...')
    await client.fetch('*[_type == "sanity.imageAsset"][0]._id')
    console.log('✅ Connected to Sanity successfully')

    // First, reset all products to not featured
    await client
      .patch({
        query: '*[_type == "product"]'
      })
      .set({ featured: false })
      .commit()
    
    console.log('✅ Reset all products to not featured')

    // Then, set specified products as featured
    for (const slug of featuredProductSlugs) {
      try {
        const result = await client
          .patch({
            query: `*[_type == "product" && slug.current == "${slug}"][0]`
          })
          .set({ featured: true })
          .commit()

        if (result) {
          console.log(`✅ Marked "${slug}" as featured`)
        } else {
          console.log(`❌ Product "${slug}" not found`)
        }
      } catch (err) {
        console.error(`❌ Failed to update product "${slug}":`, err.message)
      }
    }

    console.log('\n🎉 Featured products update completed!')
    console.log('\n🔍 You can view your products at https://oriental.sanity.studio/')

  } catch (error) {
    console.error('❌ Update failed:', error.message)
    if (error.message.includes('permission')) {
      console.log('\n⚠️ Permission error - your token does not have sufficient permissions')
      console.log('Please create a new token with "Editor" permissions at:')
      console.log('https://www.sanity.io/manage/project/rrwhrsep/api')
    }
  }
}

updateFeaturedProducts() 