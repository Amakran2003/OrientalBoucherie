/**
 * Recipe and product category schema for Oriental Boucherie
 */

export default {
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'parentCategory',
      title: 'Catégorie parente',
      type: 'reference',
      to: [{type: 'category'}],
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
