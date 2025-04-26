/**
 * Recettes tunisiennes pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const recipes = [
  {
    _type: 'recipe',
    title: 'Ojja Tunisienne au Merguez',
    slug: {
      _type: 'slug',
      current: 'ojja-tunisienne-merguez'
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
        _ref: 'category-mixed-meat' // Référence à la catégorie viande mixte
      }
    ],
    country: 'Tunisie',
    publishedAt: new Date().toISOString(),
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Merguez',
        amount: '8'
      },
      {
        _type: 'ingredient',
        ingredient: 'Œufs',
        amount: '6'
      },
      {
        _type: 'ingredient',
        ingredient: 'Poivrons rouges',
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
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '3 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Harissa',
        amount: '2 cuillères à café'
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
        title: 'Préparation des légumes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Émincez les oignons et l\'ail. Coupez les poivrons en dés. Coupez les tomates en dés.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson des merguez',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans une grande poêle, faites chauffer l\'huile d\'olive. Ajoutez les merguez et faites-les dorer sur toutes les faces pendant 5 minutes. Retirez-les et réservez.'
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
                text: 'Dans la même poêle, faites revenir les oignons et l\'ail jusqu\'à ce qu\'ils soient translucides. Ajoutez les poivrons et les tomates. Faites cuire pendant 5 minutes en remuant régulièrement.'
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
                text: 'Ajoutez la harissa, le cumin, le sel et le poivre. Remettez les merguez dans la poêle. Créez des petits creux dans la sauce et cassez-y les œufs. Couvrez et laissez cuire à feu doux pendant 5-7 minutes, jusqu\'à ce que les blancs d\'œufs soient pris.'
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
                text: 'Parsemez de persil frais ciselé et servez chaud avec du pain frais.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'L\'Ojja est un plat traditionnel tunisien qui combine des merguez épicées avec des œufs dans une sauce tomate parfumée. Un plat convivial parfait pour le brunch ou le dîner.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'L\'Ojja est un plat emblématique de la cuisine tunisienne, particulièrement apprécié pour le petit-déjeuner ou le brunch. Cette version avec des merguez est particulièrement savoureuse et épicée. Les œufs pochés dans la sauce créent une texture onctueuse qui se marie parfaitement avec les merguez grillées.'
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
        _ref: 'product-merguez'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Couscous Tunisien à l\'Agneau',
    slug: {
      _type: 'slug',
      current: 'couscous-tunisien-agneau'
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
    country: 'Tunisie',
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
        ingredient: 'Harissa',
        amount: '2 cuillères à soupe'
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
                text: 'Ajoutez les oignons et l\'ail à la viande et faites revenir pendant 5 minutes. Ajoutez les épices (harissa, cumin, paprika) et mélangez bien. Versez 1,5 litre d\'eau, ajoutez les pois chiches et portez à ébullition. Réduisez le feu, couvrez et laissez mijoter pendant 30 minutes.'
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
    description: 'Le couscous est un plat emblématique de la cuisine tunisienne. Cette version à l\'agneau est particulièrement savoureuse avec ses légumes variés et ses épices parfumées.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le couscous est sans doute le plat le plus emblématique de la cuisine tunisienne. Traditionnellement servi le vendredi, il est un moment de convivialité et de partage. Cette version à l\'agneau est particulièrement savoureuse, avec des légumes variés et des épices qui parfument délicatement le bouillon.'
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
    title: 'Lablabi Tunisien au Poulet',
    slug: {
      _type: 'slug',
      current: 'lablabi-tunisien-poulet'
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
    country: 'Tunisie',
    publishedAt: new Date().toISOString(),
    prepTime: 20,
    cookTime: 60,
    servings: 4,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Pois chiches secs',
        amount: '300 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Blancs de poulet',
        amount: '400 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pain rassis',
        amount: '4 tranches épaisses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Œufs',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '4 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Harissa',
        amount: '2 cuillères à café'
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
        title: 'Préparation des pois chiches',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Faites tremper les pois chiches dans un grand volume d\'eau pendant toute une nuit. Le lendemain, égouttez-les et rincez-les.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Cuisson des pois chiches',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans une grande casserole, mettez les pois chiches, couvrez largement d\'eau, ajoutez 2 gousses d\'ail entières et portez à ébullition. Réduisez le feu et laissez cuire à couvert pendant environ 1 heure, ou jusqu\'à ce que les pois chiches soient tendres. Salez en fin de cuisson.'
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
                text: 'Pendant ce temps, faites cuire les blancs de poulet dans une casserole d\'eau bouillante salée avec une gousse d\'ail, du poivre et un peu de cumin pendant environ 20 minutes. Retirez le poulet, laissez-le refroidir légèrement puis effilochez-le. Conservez le bouillon de cuisson.'
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
                text: 'Faites cuire les œufs dans l\'eau bouillante pendant 6-7 minutes pour des œufs mollets. Refroidissez-les sous l\'eau froide, écalez-les et coupez-les en deux.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation du bouillon',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans un bol, écrasez 2 gousses d\'ail avec du sel. Ajoutez le cumin, la harissa et mélangez avec un peu d\'eau pour former une pâte. Prélevez environ 500 ml de bouillon de cuisson des pois chiches, ajoutez-y le bouillon de poulet et cette pâte d\'assaisonnement. Portez à ébullition et laissez mijoter pendant 5 minutes.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Montage du lablabi',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Coupez le pain en petits morceaux et répartissez-le dans 4 bols profonds. Ajoutez les pois chiches, le poulet effiloché, les œufs coupés en deux. Versez le bouillon chaud par-dessus. Arrosez d\'huile d\'olive et parsemez de persil ciselé.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le lablabi est une soupe traditionnelle tunisienne à base de pois chiches, souvent consommée au petit-déjeuner. Cette version au poulet en fait un plat complet et réconfortant.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le lablabi est un plat traditionnel tunisien, particulièrement apprécié pour le petit-déjeuner ou comme repas réconfortant en hiver. Cette version enrichie au poulet en fait un plat complet et nourrissant. Les pois chiches, riches en protéines et en fibres, se marient parfaitement avec la tendreté du poulet et les épices qui parfument le bouillon.'
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
        _ref: 'product-chicken-fillets'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Maklouba Tunisienne au Bœuf',
    slug: {
      _type: 'slug',
      current: 'maklouba-tunisienne-boeuf'
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
    country: 'Tunisie',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 90,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Bœuf à mijoter',
        amount: '800 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Riz basmati',
        amount: '500 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Aubergines',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Tomates',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
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
        ingredient: 'Concentré de tomate',
        amount: '2 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cannelle',
        amount: '1 bâton'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cardamome',
        amount: '4 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '4 cuillères à soupe'
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
                text: 'Émincez les oignons et l\'ail. Coupez les aubergines en tranches épaisses. Coupez les tomates en quartiers. Coupez les poivrons en lanières.'
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
                text: 'Ajoutez les oignons et l\'ail à la viande et faites revenir pendant 5 minutes. Ajoutez les épices (cannelle, cardamome, cumin) et le concentré de tomate. Versez 500 ml d\'eau, salez et poivrez. Portez à ébullition, réduisez le feu, couvrez et laissez mijoter pendant 1 heure.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation des aubergines',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Pendant ce temps, salez les tranches d\'aubergines et laissez-les dégorger pendant 20 minutes. Rincez-les et épongez-les avec du papier absorbant. Dans une poêle, faites chauffer un peu d\'huile d\'olive et faites dorer les tranches d\'aubergines des deux côtés. Réservez.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation du riz',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Rincez le riz à l\'eau froide jusqu\'à ce que l\'eau soit claire. Laissez-le tremper dans de l\'eau pendant 15 minutes, puis égouttez-le.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Assemblage du maklouba',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans une grande casserole à fond épais, disposez d\'abord une couche de tranches d\'aubergine, puis une couche de viande, une couche de poivrons et de tomates, et enfin le riz. Versez le bouillon de cuisson de la viande sur le riz (il doit être à peine couvert). Couvrez et laissez cuire à feu doux pendant 30 minutes, jusqu\'à ce que le riz soit cuit et ait absorbé tout le liquide.'
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
                text: 'Laissez reposer pendant 5 minutes. Placez un grand plat sur la casserole et retournez-la rapidement (c\'est ce qui donne son nom au plat, maklouba signifiant "renversé"). Garnissez d\'amandes effilées et de persil frais.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le maklouba est un plat traditionnel tunisien dont le nom signifie "renversé". C\'est un plat de riz parfumé aux épices, avec des légumes et de la viande, servi en le retournant sur un plat.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le maklouba est un plat spectaculaire de la cuisine tunisienne, dont le nom signifie littéralement "renversé". Le moment du service, où l\'on retourne la casserole sur un plat, est toujours impressionnant et crée un effet visuel saisissant. Cette version au bœuf est particulièrement savoureuse, avec des légumes qui se superposent au riz parfumé aux épices orientales.'
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