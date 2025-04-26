/**
 * Product schema for Oriental Boucherie
 */

export default {
  name: 'product',
  title: 'Produit',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nom du produit',
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
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'pricePerKg',
      title: 'Prix au kg',
      type: 'number',
      description: 'Prix au kilogramme en euros',
    },
    {
      name: 'pricePer100g',
      title: 'Prix aux 100g',
      type: 'number',
      description: 'Prix aux 100 grammes en euros',
    },
    {
      name: 'pricePerUnit',
      title: 'Prix à l\'unité',
      type: 'number',
      description: 'Prix à l\'unité en euros',
    },
    {
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
      description: 'Ce produit est-il actuellement disponible?',
      initialValue: true,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ingredients',
      title: 'Ingrédients',
      type: 'text',
      description: 'Pour les produits préparés',
    },
    {
      name: 'origin',
      title: 'Origine',
      type: 'string',
      description: 'Pays ou région d\'origine',
    },
    {
      name: 'preparationTips',
      title: 'Conseils de préparation',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'relatedRecipes',
      title: 'Recettes associées',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'recipe'}]}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}
