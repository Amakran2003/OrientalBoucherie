/**
 * Recettes algériennes pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const recipes = [
  {
    _type: 'recipe',
    title: 'Couscous Algérien à l\'Agneau',
    slug: {
      _type: 'slug',
      current: 'couscous-algerien-agneau'
    },
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-to-be-replaced' // À remplacer par une référence d'image réelle après téléchargement
      }
    },
    categories: [
      {
        _type: 'reference',
        _ref: 'category-lamb' // Référence à la catégorie agneau
      }
    ],
    country: 'Algérie',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 120,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Épaule d\'agneau',
        amount: '1 kg'
      },
      {
        _type: 'ingredient',
        ingredient: 'Semoule de couscous',
        amount: '500 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pois chiches',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Carottes',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Navets',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Courgettes',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Tomates',
        amount: '3'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '4 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ras el Hanout',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Paprika',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '4 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Beurre',
        amount: '50 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Sel et poivre',
        amount: 'Au goût'
      }
    ],
    steps: [
      {
        _type: 'step',
        title: 'Préparation de la viande',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Coupez l\'épaule d\'agneau en morceaux. Dans une grande cocotte, faites chauffer l\'huile d\'olive et faites revenir la viande jusqu\'à ce qu\'elle soit dorée sur toutes les faces.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des légumes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez les oignons et l\'ail. Coupez les carottes, navets et courgettes en morceaux. Coupez les tomates en quartiers.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson du ragoût',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les oignons et l\'ail à la viande et faites revenir pendant 5 minutes. Ajoutez les épices (ras el hanout, cumin, paprika) et mélangez bien. Versez 1,5 litre d\'eau, ajoutez les pois chiches et portez à ébullition. Réduisez le feu, couvrez et laissez mijoter pendant 30 minutes.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Ajout des légumes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les carottes et les navets, puis après 15 minutes, ajoutez les courgettes et les tomates. Laissez mijoter encore 15 minutes.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation du couscous',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Pendant ce temps, préparez le couscous. Versez la semoule dans un grand plat, arrosez-la d\'eau salée et laissez-la gonfler pendant 10 minutes. Égrainez-la à la fourchette.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Service',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Versez le couscous dans un grand plat creux, disposez la viande et les légumes au-dessus. Arrosez avec un peu de bouillon et servez chaud.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le couscous est un plat emblématique de la cuisine algérienne. Cette version à l\'agneau est particulièrement savoureuse avec ses légumes variés et ses épices parfumées.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le couscous est sans doute le plat le plus emblématique de la cuisine algérienne. Traditionnellement servi le vendredi, il est un moment de convivialité et de partage. Cette version à l\'agneau est particulièrement savoureuse, avec des légumes variés et des épices qui parfument délicatement le bouillon.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: true,
    relatedProducts: [
      {
        _type: 'reference',
        _ref: 'product-lamb-shoulder'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Tajine de Poulet aux Olives et Citrons Confits',
    slug: {
      _type: 'slug',
      current: 'tajine-poulet-olives-citrons-confits'
    },
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-to-be-replaced' // À remplacer par une référence d'image réelle après téléchargement
      }
    },
    categories: [
      {
        _type: 'reference',
        _ref: 'category-poultry' // Référence à la catégorie volaille
      }
    ],
    country: 'Algérie',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 90,
    servings: 4,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Poulet',
        amount: '1 entier'
      },
      {
        _type: 'ingredient',
        ingredient: 'Olives vertes',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Citrons confits',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '4 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Gingembre frais',
        amount: '2 cm'
      },
      {
        _type: 'ingredient',
        ingredient: 'Safran',
        amount: '1 pincée'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Paprika',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '3 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Persil frais',
        amount: '1 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Coriandre fraîche',
        amount: '1 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Sel et poivre',
        amount: 'Au goût'
      }
    ],
    steps: [
      {
        _type: 'step',
        title: 'Préparation du poulet',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Découpez le poulet en morceaux. Dans une grande cocotte, faites chauffer l\'huile d\'olive et faites revenir les morceaux de poulet jusqu\'à ce qu\'ils soient dorés sur toutes les faces.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des aromates',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez les oignons et l\'ail. Râpez le gingembre. Hachez finement le persil et la coriandre.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des citrons confits',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Coupez les citrons confits en quartiers et retirez la pulpe. Conservez uniquement la peau.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson du tajine',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les oignons, l\'ail et le gingembre à la viande et faites revenir pendant 5 minutes. Ajoutez les épices (safran, cumin, paprika) et mélangez bien. Versez 500 ml d\'eau, salez et poivrez. Portez à ébullition, réduisez le feu, couvrez et laissez mijoter pendant 30 minutes.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Ajout des olives et citrons',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les olives et les quartiers de citrons confits. Laissez mijoter encore 15-20 minutes, jusqu\'à ce que la viande soit tendre et que la sauce soit bien réduite.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Finalisation',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Parsemez de persil et de coriandre hachés. Servez chaud avec du couscous ou du riz.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le tajine de poulet aux olives et citrons confits est un plat traditionnel algérien qui allie la tendreté du poulet à l\'acidité des citrons confits et la saveur des olives.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le tajine de poulet aux olives et citrons confits est un plat emblématique de la cuisine algérienne. Les citrons confits apportent une note d\'acidité et de fraîcheur qui équilibre parfaitement la richesse du poulet et la saveur des olives. Ce plat est souvent servi lors des grandes occasions et des repas de famille.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: true,
    relatedProducts: [
      {
        _type: 'reference',
        _ref: 'product-chicken'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Chakhchoukha Algérienne au Bœuf',
    slug: {
      _type: 'slug',
      current: 'chakhchoukha-algerienne-boeuf'
    },
    mainImage: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: 'image-to-be-replaced' // À remplacer par une référence d'image réelle après téléchargement
      }
    },
    categories: [
      {
        _type: 'reference',
        _ref: 'category-beef' // Référence à la catégorie bœuf
      }
    ],
    country: 'Algérie',
    publishedAt: new Date().toISOString(),
    prepTime: 45,
    cookTime: 120,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Bœuf à mijoter',
        amount: '800 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pain rassis',
        amount: '500 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pois chiches',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Tomates',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Poivrons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '4 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ras el Hanout',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Paprika',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '4 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Persil frais',
        amount: '1 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Sel et poivre',
        amount: 'Au goût'
      }
    ],
    steps: [
      {
        _type: 'step',
        title: 'Préparation de la viande',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Coupez le bœuf en morceaux. Dans une grande cocotte, faites chauffer l\'huile d\'olive et faites revenir la viande jusqu\'à ce qu\'elle soit dorée sur toutes les faces.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des légumes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez les oignons et l\'ail. Coupez les tomates en quartiers. Coupez les poivrons en lanières.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson du ragoût',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les oignons et l\'ail à la viande et faites revenir pendant 5 minutes. Ajoutez les épices (ras el hanout, cumin, paprika) et mélangez bien. Versez 1 litre d\'eau, ajoutez les pois chiches et portez à ébullition. Réduisez le feu, couvrez et laissez mijoter pendant 1 heure.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Ajout des légumes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les tomates et les poivrons. Laissez mijoter encore 30 minutes, jusqu\'à ce que la viande soit tendre.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation du pain',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Pendant ce temps, coupez le pain rassis en morceaux de taille moyenne. Faites-les griller légèrement au four ou à la poêle pour qu\'ils soient croustillants.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Finalisation',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez les morceaux de pain au ragoût et mélangez délicatement. Laissez mijoter encore 5-10 minutes, jusqu\'à ce que le pain ait absorbé une partie de la sauce mais reste encore un peu ferme. Parsemez de persil frais haché.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'La chakhchoukha est un plat traditionnel algérien à base de pain rassis émietté dans un ragoût de viande et de légumes. Cette version au bœuf est particulièrement savoureuse.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La chakhchoukha est un plat traditionnel algérien qui tire son nom du mot arabe "chakchak", qui signifie "émietter". Ce plat est originaire de la région de Constantine et est particulièrement apprécié pendant le mois de ramadan. Il est préparé avec du pain rassis émietté dans un ragoût de viande et de légumes, créant un plat réconfortant et nourrissant.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: false,
    relatedProducts: [
      {
        _type: 'reference',
        _ref: 'product-minced-beef'
      }
    ]
  }
];