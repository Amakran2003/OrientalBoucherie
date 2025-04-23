export default {
  name: 'featuredProduct',
  title: 'Produits Vedette',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Titre de la section produits vedette',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description courte pour la section',
      rows: 3,
    },
    {
      name: 'products',
      title: 'Produits',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
          options: {
            disableNew: false,
          },
        },
      ],
      description: 'Sélectionnez les produits à mettre en avant',
      validation: (Rule: any) => Rule.max(6).warning('Il est recommandé de limiter le nombre de produits vedette à 6 maximum.')
    },
    {
      name: 'displayOrder',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Détermine l\'ordre d\'affichage des sections sur la page d\'accueil',
      validation: (Rule: any) => Rule.required().integer().positive(),
      initialValue: 1,
    },
    {
      name: 'active',
      title: 'Actif',
      type: 'boolean',
      description: 'Activer ou désactiver l\'affichage de cette section',
      initialValue: true,
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}