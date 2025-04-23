// deploy-graphql.js
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const schemaPath = path.join(__dirname, '../schemas')

// Load environment variables
dotenv.config()

const token = process.env.SANITY_AUTH_TOKEN

if (!token) {
  console.error('No SANITY_AUTH_TOKEN found in .env file')
  process.exit(1)
}

// Create client with token
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token,
  useCdn: false,
})

// Deploy GraphQL API
async function deployGraphQL() {
  try {
    console.log('Deploying GraphQL API...')
    
    // First let's check if the schema is accessible through the Sanity API
    const types = await client.fetch(`*[_type == "system.group" && _id == "system.group.root"] | order(_key) {
      "types": children[]->{_id, name, type}
    }[0].types`);
    
    console.log('Available schema types:', types ? types.length : 0);
    
    // Now deploy the GraphQL API
    const result = await client.request({
      url: '/apis/graphql/production/default',
      method: 'PUT',
      body: {
        enablePlayground: true,
        generateMigrationGuide: false
      }
    })
    
    console.log('✅ GraphQL API deployed successfully!')
    console.log('Your GraphQL endpoint is:', result?.graphqlUrl)
    
    // Print helpful deployment messages
    console.log('\n🌐 You can now access your deployed GraphQL API at:')
    console.log(`https://${client.config().projectId}.api.sanity.io/v1/graphql/production/default`)
    console.log('\n📋 To check your deployed schema, visit:')
    console.log(`https://www.sanity.io/manage/project/${client.config().projectId}/api`)
    
  } catch (error) {
    console.error('Failed to deploy GraphQL API:', error.message)
    console.error('\nDetails:', error.response?.body || error)
    
    console.log('\n🔍 Troubleshooting suggestions:')
    console.log('1. Make sure your token has GraphQL deployment permissions')
    console.log('2. Check that your schemas are correctly defined')
    console.log('3. Verify that you\'re logged in with an account that has admin access to this project')
    console.log('\nTry executing this manually in the terminal:')
    console.log('cd studio && npx sanity graphql deploy')
  }
}

deployGraphQL()