import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produits',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Prix (€)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Unité',
      type: 'string',
      options: {
        list: [
          {title: 'au Kilo', value: 'kg'},
          {title: 'à la Pièce', value: 'piece'},
          {title: 'au Gramme', value: 'g'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'origin',
      title: 'Origine',
      type: 'string',
    }),
    defineField({
      name: 'isHalal',
      title: 'Halal',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Produit Vedette',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
      unit: 'unit',
    },
    prepare({title, media, price, unit}) {
      return {
        title,
        media,
        subtitle: price ? `${price}€/${unit}` : '',
      }
    },
  },
})