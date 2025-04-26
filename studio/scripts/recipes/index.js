/**
 * Index file for all recipe collections for Oriental Boucherie
 * Imports and exports all recipe collections for easy import into Sanity
 */

import { algerianRecipes } from './algerian-recipes';
import { frenchRecipes } from './french-recipes';
import { moroccanRecipes } from './moroccan-recipes';
import { lebaneseRecipes } from './lebanese-recipes';
import { recipes as tunisianRecipes } from './tunisian-recipes';
// Import other recipe collections as they are created
// etc.

// Export all recipe collections in one object
export const allRecipes = [
  ...algerianRecipes,
  ...frenchRecipes,
  ...moroccanRecipes,
  ...lebaneseRecipes,
  ...tunisianRecipes,
  // Add other recipe collections as they are created
  // etc.
];

// Export individual collections for selective imports
export {
  algerianRecipes,
  frenchRecipes,
  moroccanRecipes,
  lebaneseRecipes,
  tunisianRecipes,
  // Export other recipe collections as they are created
  // etc.
};