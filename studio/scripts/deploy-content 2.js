import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables
dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Create Sanity client with token
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false
})

async function deployContent() {
  console.log('🚀 Starting content deployment...')

  try {
    // Test connection
    console.log('🔄 Testing connection to Sanity...')
    const test = await client.fetch('*[_type == "recipe"][0...1]')
    console.log('✅ Connected successfully')

    // Get all recipes
    console.log('📝 Fetching recipes...')
    const recipes = await client.fetch('*[_type == "recipe"]')
    console.log(`Found ${recipes.length} recipes`)

    // Get all products
    console.log('📦 Fetching products...')
    const products = await client.fetch('*[_type == "product"]')
    console.log(`Found ${products.length} products`)

    // Get all categories
    console.log('🏷️ Fetching categories...')
    const categories = await client.fetch('*[_type == "category"]')
    console.log(`Found ${categories.length} categories`)

    console.log('✨ Content deployment check completed successfully!')
    console.log('\nYour content is now available in production at:')
    console.log('https://rrwhrsep.api.sanity.io/v1/data/query/production')

  } catch (error) {
    console.error('❌ Deployment failed:', error.message)
    if (error.response?.body) {
      console.error('Error details:', JSON.stringify(error.response.body, null, 2))
    }
  }
}

deployContent() 