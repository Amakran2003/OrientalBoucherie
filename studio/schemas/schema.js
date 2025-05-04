// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import your custom document schemas
import recipe from './documents/recipe'
import category from './documents/category'
import product from './documents/product'
// Import other schemas as needed
import ingredient from './ingredient'
import step from './step'
import blockContent from './blockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Your custom document types
    recipe,
    category,
    product,
    // Add other schemas here
    ingredient,
    step,
    blockContent
  ]),
})
