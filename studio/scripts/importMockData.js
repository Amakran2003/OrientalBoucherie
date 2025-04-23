/**
 * Import mock data into Sanity
 * 
 * This script imports the mock categories, products, and recipes into your Sanity dataset.
 * 
 * Usage: 
 * 1. Make sure you're in the studio directory
 * 2. Run: node --experimental-json-modules scripts/importMockData.js
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the mock data
const mockDataPath = path.join(__dirname, '../../src/lib/sanityApiMock.ts');
const mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

// Extract data using regex (simple approach to avoid transpiling TS)
function extractMockData(content, varName) {
  const regex = new RegExp(`export const ${varName}\\s*=\\s*(\\[.*?\\])`, 's');
  const match = content.match(regex);
  if (match && match[1]) {
    // Safety evaluation of the array literal
    return eval(`(${match[1]})`);
  }
  return [];
}

const mockCategories = extractMockData(mockDataContent, 'mockCategories');
const mockProducts = extractMockData(mockDataContent, 'mockProducts');
const mockRecipes = extractMockData(mockDataContent, 'mockRecipes');

// Configure the client
const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  token: process.env.SANITY_AUTH_TOKEN, // Get this from sanity.io/manage
  apiVersion: '2023-05-03',
  useCdn: false
});

// Function to create a document if it doesn't exist
async function createIfNotExists(doc, type) {
  // Extract ID and remove fields that shouldn't be in the document
  const { _id, _type, ...docData } = doc;
  
  // Check if document with this ID already exists
  try {
    const existingDoc = await client.getDocument(_id);
    if (existingDoc) {
      console.log(`Document ${_id} already exists, updating...`);
      return client.patch(_id).set(docData).commit();
    }
  } catch (err) {
    if (err.statusCode !== 404) {
      throw err;
    }
    // Document doesn't exist, create it
    console.log(`Creating ${type} document: ${_id}`);
    return client.create({
      _id,
      _type: type,
      ...docData
    });
  }
}

// Upload placeholder images and return references
async function uploadPlaceholderImages() {
  const imageMap = {};
  const categories = ['beef', 'lamb', 'poultry', 'merguez', 'specialty', 'epices'];
  
  for (const category of categories) {
    try {
      // Use a placeholder image from the public folder
      const imagePath = path.join(__dirname, '../../public/images/categories', `${category}.jpg`);
      if (fs.existsSync(imagePath)) {
        const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
          filename: `${category}.jpg`
        });
        imageMap[category] = imageAsset._id;
        console.log(`Uploaded image for ${category}: ${imageAsset._id}`);
      } else {
        console.log(`No image found for ${category}, using default`);
        // If specific image not found, use a default
        const defaultImagePath = path.join(__dirname, '../../public/images/placeholder.jpg');
        if (fs.existsSync(defaultImagePath)) {
          const imageAsset = await client.assets.upload('image', fs.createReadStream(defaultImagePath), {
            filename: 'placeholder.jpg'
          });
          imageMap[category] = imageAsset._id;
        }
      }
    } catch (error) {
      console.error(`Error uploading image for ${category}:`, error);
    }
  }
  
  return imageMap;
}

// Import the data
async function importData() {
  console.log('Starting data import...');
  
  try {
    // Upload images first
    console.log('Uploading placeholder images...');
    const imageMap = await uploadPlaceholderImages();
    
    // Import categories
    console.log('Importing categories...');
    for (const category of mockCategories) {
      // Add image reference if available
      const imageRef = imageMap[category.slug.current];
      const categoryDoc = {
        ...category,
        _type: 'category',
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef
          }
        } : undefined
      };
      await createIfNotExists(categoryDoc, 'category');
    }
    
    // Import products
    console.log('Importing products...');
    for (const product of mockProducts) {
      // Convert category reference
      const categoryRef = { 
        _type: 'reference',
        _ref: product.category._ref
      };
      
      // Use category image as product image for demo
      const categorySlug = mockCategories.find(c => c._id === product.category._ref)?.slug.current;
      const imageRef = categorySlug ? imageMap[categorySlug] : null;
      
      const productDoc = {
        ...product,
        _type: 'product',
        category: categoryRef,
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef
          }
        } : undefined
      };
      await createIfNotExists(productDoc, 'product');
    }
    
    // Import recipes
    console.log('Importing recipes...');
    for (const recipe of mockRecipes) {
      // Use a random category image for recipe
      const randomCategorySlug = Object.keys(imageMap)[Math.floor(Math.random() * Object.keys(imageMap).length)];
      const imageRef = imageMap[randomCategorySlug];
      
      const recipeDoc = {
        ...recipe,
        _type: 'recipe',
        mainImage: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef
          }
        } : undefined
      };
      await createIfNotExists(recipeDoc, 'recipe');
    }
    
    console.log('Data import completed successfully!');
    
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import
importData();