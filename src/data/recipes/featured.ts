// All images are now handled by Sanity CMS
// This file is kept for backward compatibility but uses placeholder images
const PLACEHOLDER_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

export const featuredRecipes = [
  {
    id: 'recipe1',
    title: 'Tajine d\'Agneau aux Pruneaux',
    description: 'Un plat traditionnel marocain avec notre agneau tendre et des épices sélectionnées',
    image: PLACEHOLDER_IMAGE,
    difficulty: 'Moyen',
    prepTime: '30 minutes',
    cookTime: '2 heures',
  },
  {
    id: 'recipe2',
    title: 'Brochettes Marinées',
    description: 'Brochettes de bœuf marinées aux épices orientales',
    image: PLACEHOLDER_IMAGE,
    difficulty: 'Facile',
    prepTime: '20 minutes',
    cookTime: '15 minutes',
  },
  {
    id: 'recipe3',
    title: 'Couscous Royal',
    description: 'Le grand classique avec une sélection de nos meilleures viandes',
    image: PLACEHOLDER_IMAGE,
    difficulty: 'Avancé',
    prepTime: '45 minutes',
    cookTime: '2h30',
  },
];