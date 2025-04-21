import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: "L'Oriental Boucherie",
  
  projectId: 'rrwhrsep',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
    media(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  document: {
    // Only French language
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'language-en')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'languageVersion') {
        return prev.filter(({ action }) => action !== 'duplicate')
      }
      return prev
    },
  },
})