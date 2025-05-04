/**
 * Index file for all recipe collections for Oriental Boucherie
 * This file makes it easy to import all recipes into Sanity
 */

import { frenchRecipes } from './french-recipes';
import { moroccanRecipes } from './moroccan-recipes';
import { lebaneseRecipes } from './lebanese-recipes';

// Export all recipes in a single object
export const allRecipes = {
  french: frenchRecipes,
  moroccan: moroccanRecipes,
  lebanese: lebaneseRecipes,
};

// Export individual collections for selective imports
export {
  frenchRecipes,
  moroccanRecipes,
  lebaneseRecipes,
};