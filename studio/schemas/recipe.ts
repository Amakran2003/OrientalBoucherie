import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recettes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Catégories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de Publication',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'prepTime',
      title: 'Temps de Préparation (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'cookTime',
      title: 'Temps de Cuisson (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'servings',
      title: 'Nombre de Personnes',
      type: 'number',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingrédients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'ingredient', title: 'Ingrédient', type: 'string'},
            {name: 'amount', title: 'Quantité', type: 'string'},
          ],
          preview: {
            select: {
              title: 'ingredient',
              subtitle: 'amount',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'steps',
      title: 'Étapes de Préparation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Titre', type: 'string'},
            {name: 'description', title: 'Description', type: 'blockContent'},
            {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'blockContent',
    }),
    defineField({
      name: 'featured',
      title: 'Recette à la Une',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Produits Liés',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'description',
    },
  },
})