import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const token = process.env.SANITY_AUTH_TOKEN;

// Check if token exists
if (!token || token === 'your_token_here') {
  console.error('\n❌ No valid SANITY_AUTH_TOKEN found in .env file');
  console.log('\n📝 Please follow these steps:');
  console.log('1. Go to https://www.sanity.io/manage/project/rrwhrsep/api');
  console.log('2. Click "Add API token"');
  console.log('3. Name it "Recipe Steps Fix Token"');
  console.log('4. Choose the "Editor" permission');
  console.log('5. Copy the generated token');
  console.log('6. Update the SANITY_AUTH_TOKEN value in your .env file');
  console.log('\n🔄 Then run this script again');
  process.exit(1);
}

// Create Sanity client with token
const client = createClient({
  projectId: 'rrwhrsep',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token,
  useCdn: false,
});

// Function to convert array description to string
function convertDescriptionToString(description) {
  if (!description) return '';
  
  // If it's already a string, return it
  if (typeof description === 'string') return description;
  
  // If it's an array, convert it to a string
  if (Array.isArray(description)) {
    return description
      .map(block => {
        if (block._type === 'block') {
          return block.children
            .map(child => child.text)
            .join('');
        }
        return '';
      })
      .join('\n\n');
  }
  
  return '';
}

// Fix recipe steps
async function fixRecipeSteps() {
  console.log('🔍 Fetching all recipes...');
  
  try {
    // Fetch all recipes
    const recipes = await client.fetch(`
      *[_type == "recipe"] {
        _id,
        title,
        steps
      }
    `);
    
    console.log(`✅ Found ${recipes.length} recipes to check`);
    
    // Process each recipe
    for (const recipe of recipes) {
      if (!recipe.steps || recipe.steps.length === 0) {
        console.log(`⚠️ Recipe "${recipe.title}" has no steps, skipping`);
        continue;
      }
      
      let hasChanges = false;
      const fixedSteps = recipe.steps.map(step => {
        if (step.description && Array.isArray(step.description)) {
          hasChanges = true;
          return {
            ...step,
            description: convertDescriptionToString(step.description)
          };
        }
        return step;
      });
      
      if (hasChanges) {
        console.log(`🔄 Fixing steps for recipe "${recipe.title}"`);
        
        // Update the recipe
        await client
          .patch(recipe._id)
          .set({ steps: fixedSteps })
          .commit();
        
        console.log(`✅ Fixed steps for recipe "${recipe.title}"`);
      } else {
        console.log(`ℹ️ Recipe "${recipe.title}" has no array descriptions, skipping`);
      }
    }
    
    console.log('\n✅ All recipes processed successfully!');
    
  } catch (error) {
    console.error('\n❌ Error fixing recipe steps:', error.message);
    
    if (error.response?.body) {
      console.error('\nError details:', JSON.stringify(error.response.body, null, 2));
    }
  }
}

// Run the fix function
fixRecipeSteps(); 