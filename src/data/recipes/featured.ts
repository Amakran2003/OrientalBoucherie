import { images } from '../config/images';

export const featuredRecipes = [
  {
    id: 'recipe1',
    title: 'Tajine d\'Agneau aux Pruneaux',
    description: 'Un plat traditionnel marocain avec notre agneau tendre et des épices sélectionnées',
    image: images.recipes.tajine,
    difficulty: 'Moyen',
    prepTime: '30 minutes',
    cookTime: '2 heures',
  },
  {
    id: 'recipe2',
    title: 'Brochettes Marinées',
    description: 'Brochettes de bœuf marinées aux épices orientales',
    image: images.recipes.brochettes,
    difficulty: 'Facile',
    prepTime: '20 minutes',
    cookTime: '15 minutes',
  },
  {
    id: 'recipe3',
    title: 'Couscous Royal',
    description: 'Le grand classique avec une sélection de nos meilleures viandes',
    image: images.recipes.couscous,
    difficulty: 'Avancé',
    prepTime: '45 minutes',
    cookTime: '2h30',
  },
];