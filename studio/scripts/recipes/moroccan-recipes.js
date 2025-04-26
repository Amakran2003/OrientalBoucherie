/**
 * Recettes marocaines pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const recipes = [
  {
    _type: 'recipe',
    title: 'Tajine d\'Agneau aux Pruneaux',
    slug: {
      _type: 'slug',
      current: 'tajine-agneau-pruneaux'
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
    country: 'Maroc',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 120,
    servings: 4,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Épaule d\'agneau',
        amount: '800 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2 grands'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pruneaux',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Miel',
        amount: '2 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ras el Hanout',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cannelle',
        amount: '1 bâton'
      },
      {
        _type: 'ingredient',
        ingredient: 'Gingembre moulu',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Curcuma',
        amount: '1/2 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Amandes effilées',
        amount: '50 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Persil frais',
        amount: '1 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '3 cuillères à soupe'
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
        title: 'Préparation des oignons',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez les oignons et ajoutez-les à la viande. Faites revenir pendant 5 minutes jusqu\'à ce qu\'ils soient translucides.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Ajout des épices',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Ajoutez le ras el hanout, le gingembre, le curcuma, le bâton de cannelle, le sel et le poivre. Mélangez bien pour enrober la viande et les oignons.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson de la viande',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Versez 500 ml d\'eau, portez à ébullition, puis réduisez le feu. Couvrez et laissez mijoter pendant 1 heure, en remuant de temps en temps.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des pruneaux',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Pendant ce temps, faites tremper les pruneaux dans de l\'eau chaude pendant 15 minutes pour les ramollir.'
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
                text: 'Après 1 heure de cuisson, ajoutez les pruneaux et le miel. Laissez mijoter encore 15-20 minutes, jusqu\'à ce que la viande soit tendre et que les pruneaux soient bien cuits.'
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
                text: 'Garnissez d\'amandes effilées et de persil frais. Servez chaud avec du couscous ou du riz.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le tajine d\'agneau aux pruneaux est un plat emblématique de la cuisine marocaine, alliant la tendreté de l\'agneau à la douceur des pruneaux dans une sauce épicée et parfumée.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le tajine d\'agneau aux pruneaux est l\'un des plats les plus emblématiques de la cuisine marocaine. Ce plat savoureux combine la tendreté de l\'agneau mijoté avec la douceur naturelle des pruneaux, le tout parfumé d\'un mélange d\'épices traditionnel. Le ras el hanout, mélange d\'épices marocain, apporte une complexité aromatique qui caractérise la cuisine marocaine.'
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
    title: 'Pastilla au Poulet',
    slug: {
      _type: 'slug',
      current: 'pastilla-poulet'
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
    country: 'Maroc',
    publishedAt: new Date().toISOString(),
    prepTime: 45,
    cookTime: 60,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Poulet',
        amount: '1 entier'
      },
      {
        _type: 'ingredient',
        ingredient: 'Feuilles de brick',
        amount: '12'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '3'
      },
      {
        _type: 'ingredient',
        ingredient: 'Œufs',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Amandes',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Sucre glace',
        amount: '2 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cannelle',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Gingembre moulu',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Safran',
        amount: '1 pincée'
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
        ingredient: 'Beurre fondu',
        amount: '100 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '2 cuillères à soupe'
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
        title: 'Cuisson du poulet',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez les oignons et ajoutez-les au poulet. Ajoutez le gingembre, la cannelle, le safran, le sel et le poivre. Versez 500 ml d\'eau, portez à ébullition, puis réduisez le feu. Couvrez et laissez mijoter pendant 30-40 minutes, jusqu\'à ce que le poulet soit cuit et tendre.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des œufs',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Retirez le poulet de la cocotte et réservez-le. Dans le bouillon restant, cassez les œufs et remuez constamment jusqu\'à ce qu\'ils soient cuits et forment une sorte de crème. Réservez.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des amandes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Faites griller les amandes dans une poêle sèche jusqu\'à ce qu\'elles soient légèrement dorées. Laissez-les refroidir, puis hachez-les grossièrement. Mélangez avec le sucre glace et 1 cuillère à café de cannelle.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Déchiquetage du poulet',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Déchiquetez la viande de poulet en petits morceaux, en retirant la peau et les os. Mélangez avec les herbes fraîches hachées (persil et coriandre).'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Montage de la pastilla',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Préchauffez le four à 180°C. Beurrez un moule à tarte. Disposez 6 feuilles de brick au fond du moule, en les faisant se chevaucher et en les laissant dépasser sur les bords. Badigeonnez de beurre fondu.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Garnissage',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Répartissez la moitié du mélange de poulet sur les feuilles de brick. Ajoutez la moitié du mélange d\'œufs, puis la moitié des amandes. Répétez avec le reste des ingrédients dans le même ordre.'
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
                text: 'Repliez les feuilles de brick qui dépassent sur le dessus. Disposez les 6 feuilles de brick restantes sur le dessus, en les faisant se chevaucher. Badigeonnez de beurre fondu. Saupoudrez de cannelle et de sucre glace.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Enfournez pour 30-35 minutes, jusqu\'à ce que la pastilla soit dorée et croustillante.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'La pastilla au poulet est un plat traditionnel marocain, une tourte feuilletée sucrée-salée qui combine viande de poulet, œufs, amandes et épices dans une croûte de feuilles de brick.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La pastilla (ou bastilla) est l\'un des plats les plus emblématiques de la cuisine marocaine. Ce plat traditionnel, originaire de Fès, combine des saveurs sucrées et salées dans une délicate croûte feuilletée. La version au poulet est la plus courante, mais il existe également des versions au poisson ou aux fruits de mer. La pastilla est souvent servie lors des grandes occasions et des fêtes.'
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
    title: 'Kefta aux Œufs',
    slug: {
      _type: 'slug',
      current: 'kefta-oeufs'
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
    country: 'Maroc',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Viande hachée de bœuf',
        amount: '600 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Œufs',
        amount: '4'
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
        ingredient: 'Paprika',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '3 cuillères à soupe'
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
        title: 'Préparation des kefta',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans un grand bol, mélangez la viande hachée avec 1 oignon finement émincé, 2 gousses d\'ail hachées, le persil et la coriandre hachés, le paprika, le cumin, le sel et le poivre. Formez des boulettes de la taille d\'une balle de golf.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation de la sauce',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez l\'oignon restant et les 2 gousses d\'ail restantes. Coupez les tomates et les poivrons en dés.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson des kefta',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans une grande poêle ou une cocotte, faites chauffer l\'huile d\'olive. Faites revenir les kefta jusqu\'à ce qu\'elles soient dorées sur toutes les faces. Retirez-les et réservez.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation de la sauce tomate',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans la même poêle, faites revenir l\'oignon et l\'ail jusqu\'à ce qu\'ils soient translucides. Ajoutez les tomates et les poivrons. Faites cuire pendant 5 minutes en remuant régulièrement.'
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
                text: 'Remettez les kefta dans la poêle avec la sauce. Créez des petits creux dans la sauce et cassez-y les œufs. Couvrez et laissez cuire à feu doux pendant 5-7 minutes, jusqu\'à ce que les blancs d\'œufs soient pris.'
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
                text: 'Parsemez de persil frais ciselé et servez chaud avec du pain frais ou du riz.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Les kefta aux œufs sont un plat traditionnel marocain qui combine des boulettes de viande épicées avec des œufs pochés dans une sauce tomate parfumée.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Les kefta aux œufs sont un plat populaire dans toute la cuisine marocaine. Les boulettes de viande épicées sont cuites dans une sauce tomate parfumée, puis des œufs sont pochés directement dans la sauce. Ce plat est apprécié pour sa simplicité et ses saveurs riches. Il est souvent servi avec du pain frais pour absorber la délicieuse sauce.'
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