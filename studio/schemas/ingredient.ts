import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ingredient',
  title: 'Ingrédient',
  type: 'object',
  fields: [
    defineField({
      name: 'ingredient',
      title: 'Ingrédient',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'amount',
      title: 'Quantité',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'ingredient',
      subtitle: 'amount',
    },
  },
})