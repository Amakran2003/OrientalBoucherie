import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.SANITY_TOKEN
})

async function listProducts() {
  try {
    console.log('🔍 Fetching products from Sanity...')
    
    const query = `*[_type == "product"] {
      _id,
      name,
      "slug": slug.current,
      featured
    }`
    
    const products = await client.fetch(query)
    
    console.log('\n📦 Products in Sanity:')
    products.forEach(product => {
      console.log(`\nProduct: ${product.name}`)
      console.log(`ID: ${product._id}`)
      console.log(`Slug: ${product.slug}`)
      console.log(`Featured: ${product.featured ? '✅' : '❌'}`)
    })
    
    console.log(`\nTotal products: ${products.length}`)
    
  } catch (error) {
    console.error('❌ Error listing products:', error)
  }
}

listProducts() 