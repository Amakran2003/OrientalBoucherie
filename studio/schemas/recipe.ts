import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recette',
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
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prepTime',
      title: 'Temps de préparation (minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'cookTime',
      title: 'Temps de cuisson (minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'servings',
      title: 'Nombre de portions',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingrédients',
      type: 'array',
      of: [{type: 'ingredient'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'steps',
      title: 'Étapes',
      type: 'array',
      of: [{type: 'step'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Corps du texte',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'featured',
      title: 'Mise en avant',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Produits associés',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      country: 'country',
    },
    prepare({title, media, country}) {
      return {
        title,
        media,
        subtitle: `par ${country}`,
      }
    },
  },
})