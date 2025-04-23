#!/usr/bin/env node

/**
 * GraphQL Deployment Script for Sanity
 * 
 * This script deploys your GraphQL API using a token with the "Deploy Studio" permission.
 * 
 * Usage:
 * 1. Set SANITY_AUTH_TOKEN in your .env file with a token that has "Deploy Studio" permission
 * 2. Run: node scripts/deploy-graphql.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Get directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') })

const token = process.env.SANITY_AUTH_TOKEN

// Check if token exists
if (!token || token === 'your_token_here') {
  console.error('\n❌ No valid SANITY_AUTH_TOKEN found in .env file')
  console.log('\n📝 Please follow these steps:')
  console.log('1. Go to https://www.sanity.io/manage/project/rrwhrsep/api')
  console.log('2. Click "Add API token"')
  console.log('3. Name it "GraphQL Deployment Token"')
  console.log('4. Choose the "Deploy Studio" permission')
  console.log('5. Copy the generated token')
  console.log('6. Update the SANITY_AUTH_TOKEN value in your .env file')
  console.log('\n🔄 Then run this script again')
  process.exit(1)
}

// Create Sanity client with token
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token,
  useCdn: false,
})

// Deploy GraphQL API
async function deployGraphQL() {
  console.log('🚀 Deploying GraphQL API...\n')
  
  try {
    // Try to deploy the GraphQL API
    const result = await client.request({
      url: '/apis/graphql/production/default',
      method: 'PUT',
      body: {
        enablePlayground: true,
        generateMigrationGuide: false
      }
    })
    
    console.log('✅ GraphQL API deployed successfully!')
    
    // Print helpful deployment messages
    console.log('\n🌐 You can now access your GraphQL API at:')
    console.log(`https://${client.config().projectId}.api.sanity.io/v1/graphql/production/default`)
    
    if (result?.graphqlUrl) {
      console.log('\nGraphQL endpoint:', result.graphqlUrl)
    }
    
    console.log('\n📋 To check your deployed schema, visit:')
    console.log(`https://www.sanity.io/manage/project/${client.config().projectId}/api`)
    
  } catch (error) {
    console.error('\n❌ Failed to deploy GraphQL API:', error.message)
    
    if (error.response?.body) {
      console.error('\nError details:', JSON.stringify(error.response.body, null, 2))
    }
    
    // Provide more specific troubleshooting guidance
    if (error.message.includes('Unauthorized')) {
      console.log('\n🔑 Authentication error:')
      console.log('Your token does not have the necessary permissions.')
      console.log('Make sure you\'ve created a token with the "Deploy Studio" permission.')
    } else if (error.message.includes('schema')) {
      console.log('\n📊 Schema error:')
      console.log('There might be issues with your schema definitions.')
      console.log('Check that your schemas are correctly defined and all references are valid.')
    } else {
      console.log('\n🔍 Troubleshooting suggestions:')
      console.log('1. Verify that your token has the "Deploy Studio" permission')
      console.log('2. Check that your schemas are correctly defined')
      console.log('3. Make sure all schema types are properly registered in schemas/index.ts')
    }
  }
}

// Run the deployment function
deployGraphQL()