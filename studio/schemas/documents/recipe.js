/**
 * Recipe schema for Oriental Boucherie
 */

export default {
  name: 'recipe',
  title: 'Recette',
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
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'country',
      title: 'Pays',
      type: 'string',
      options: {
        list: [
          { title: 'Tunisie', value: 'Tunisie' },
          { title: 'Maroc', value: 'Maroc' },
          { title: 'Algérie', value: 'Algérie' },
          { title: 'Liban', value: 'Liban' },
          { title: 'France', value: 'France' },
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'prepTime',
      title: 'Temps de préparation (minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'cookTime',
      title: 'Temps de cuisson (minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'servings',
      title: 'Nombre de portions',
      type: 'number',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'ingredients',
      title: 'Ingrédients',
      type: 'array',
      of: [{type: 'ingredient'}],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'steps',
      title: 'Étapes',
      type: 'array',
      of: [{type: 'step'}],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Corps du texte',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'featured',
      title: 'Mise en avant',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'relatedProducts',
      title: 'Produits associés',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      country: 'country'
    },
    prepare({title, media, country}) {
      return {
        title,
        media,
        subtitle: `par ${country}`
      }
    }
  }
} 