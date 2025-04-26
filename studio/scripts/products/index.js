/**
 * Products for Oriental Boucherie
 * These match the product references used in recipe collections
 */
import { categoryIds } from '../categories/index';

export const products = [
  {
    _type: 'product',
    _id: 'product-lamb-shoulder',
    title: 'Épaule d\'agneau',
    slug: {
      _type: 'slug',
      current: 'epaule-agneau'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-lamb']
    },
    pricePerKg: 18.90,
    available: true,
    description: 'Épaule d\'agneau tendre, parfaite pour les tajines, couscous et autres plats mijotés.',
    origin: 'France',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pour attendrir l\'épaule d\'agneau, faites-la mariner avec des épices et de l\'huile d\'olive la veille de la préparation.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-minced-beef',
    title: 'Viande hachée de bœuf',
    slug: {
      _type: 'slug',
      current: 'viande-hachee-boeuf'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-beef']
    },
    pricePerKg: 15.90,
    available: true,
    description: 'Viande de bœuf hachée fraîche, idéale pour les keftas, boulettes et autres préparations.',
    origin: 'France',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pour des keftas juteuses, incorporez un peu d\'oignon finement râpé à la viande hachée.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-chicken-fillets',
    title: 'Filets de poulet',
    slug: {
      _type: 'slug',
      current: 'filets-poulet'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-poultry']
    },
    pricePerKg: 12.90,
    available: true,
    description: 'Filets de poulet frais, parfaits pour chawarma, brochettes et autres préparations.',
    origin: 'France',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pour un chawarma tendre et savoureux, marinez les filets de poulet dans du citron, de l\'ail et des épices pendant plusieurs heures.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-chicken',
    title: 'Poulet entier',
    slug: {
      _type: 'slug',
      current: 'poulet-entier'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-poultry']
    },
    pricePerKg: 8.90,
    available: true,
    description: 'Poulet entier frais, parfait pour un couscous ou un tajine traditionnel.',
    origin: 'France',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pour une cuisson parfaite, commencez par saisir le poulet à feu vif avant de le laisser mijoter doucement.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-merguez',
    title: 'Merguez',
    slug: {
      _type: 'slug',
      current: 'merguez'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-mixed-meat']
    },
    pricePerKg: 16.90,
    available: true,
    description: 'Merguez préparées maison, selon la recette traditionnelle avec épices et piment.',
    ingredients: 'Viande de bœuf, viande d\'agneau, épices (paprika, cumin, coriandre, piment), sel.',
    origin: 'Fabriqué en France',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pour préserver toute la saveur des merguez, cuisez-les rapidement à feu vif en les retournant régulièrement.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-moroccan-spice-mix',
    title: 'Mélange d\'épices marocaines',
    slug: {
      _type: 'slug',
      current: 'melange-epices-marocaines'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-sides']
    },
    pricePerUnit: 4.50,
    available: true,
    description: 'Mélange d\'épices marocaines authentiques, parfait pour tajines, couscous et autres spécialités.',
    ingredients: 'Cumin, paprika, cannelle, coriandre, gingembre, curcuma, poivre noir, piment doux.',
    origin: 'Maroc',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Ajoutez ce mélange d\'épices en début de cuisson pour libérer tous ses arômes dans votre plat.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-ras-el-hanout',
    title: 'Ras el hanout',
    slug: {
      _type: 'slug',
      current: 'ras-el-hanout'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-sides']
    },
    pricePerUnit: 5.20,
    available: true,
    description: 'Mélange traditionnel d\'épices nord-africaines, indispensable pour les plats marocains authentiques.',
    ingredients: 'Plus de 20 épices dont cannelle, cardamome, clou de girofle, poivre, cumin, coriandre, muscade.',
    origin: 'Maroc',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le ras el hanout peut être utilisé comme rub pour les viandes avant cuisson ou ajouté aux plats mijotés.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-lebanese-spice-mix',
    title: 'Mélange d\'épices libanaises',
    slug: {
      _type: 'slug',
      current: 'melange-epices-libanaises'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-sides']
    },
    pricePerUnit: 4.50,
    available: true,
    description: 'Mélange d\'épices libanaises traditionnel, parfait pour chawarma, kibbeh et autres spécialités.',
    ingredients: 'Sumac, thym, sésame, sel, origan, marjolaine et autres épices.',
    origin: 'Liban',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Ce mélange peut être utilisé comme assaisonnement pour les salades, les grillades ou saupoudré sur du pain plat avec de l\'huile d\'olive.'
          }
        ]
      }
    ]
  },
  {
    _type: 'product',
    _id: 'product-bulgur',
    title: 'Boulgour',
    slug: {
      _type: 'slug',
      current: 'boulgour'
    },
    category: {
      _type: 'reference',
      _ref: categoryIds['category-sides']
    },
    pricePer100g: 0.90,
    available: true,
    description: 'Boulgour fin, idéal pour le taboulé libanais et autres plats du Moyen-Orient.',
    origin: 'Turquie',
    preparationTips: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Pour un taboulé authentique, trempez le boulgour dans un peu d\'eau froide pendant 15 minutes, puis pressez-le pour en extraire l\'humidité avant de l\'incorporer aux autres ingrédients.'
          }
        ]
      }
    ]
  }
];

// Export individual product IDs for easy reference
export const productIds = products.reduce((acc, product) => {
  acc[product._id] = product._id;
  return acc;
}, {});
