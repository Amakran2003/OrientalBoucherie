/**
 * Recettes françaises pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const recipes = [
  {
    _type: 'recipe',
    title: 'Bœuf Bourguignon',
    slug: {
      _type: 'slug',
      current: 'boeuf-bourguignon'
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
    country: 'France',
    publishedAt: new Date().toISOString(),
    prepTime: 45,
    cookTime: 180,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Paleron de bœuf',
        amount: '1.2 kg'
      },
      {
        _type: 'ingredient',
        ingredient: 'Lardons fumés',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Carottes',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Champignons de Paris',
        amount: '400 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Vin rouge de Bourgogne',
        amount: '75 cl'
      },
      {
        _type: 'ingredient',
        ingredient: 'Bouquet garni',
        amount: '1'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '3 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Farine',
        amount: '2 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Beurre',
        amount: '50 g'
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
        title: 'Préparation de la viande',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Coupez la viande en gros cubes de 4-5 cm. Épongez la viande avec du papier absorbant. Dans une cocotte, faites revenir les lardons avec un peu d\'huile d\'olive jusqu\'à ce qu\'ils soient dorés. Réservez.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Saisie de la viande',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans la même cocotte, faites revenir la viande en plusieurs fois pour ne pas surcharger la cocotte. Salez et poivrez. Une fois la viande bien dorée, réservez-la avec les lardons.'
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
                text: 'Dans la même cocotte, faites revenir les oignons émincés et les carottes coupées en rondelles. Ajoutez l\'ail haché et la farine. Mélangez bien.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Mijotage',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Remettez la viande et les lardons dans la cocotte. Versez le vin rouge et ajoutez le bouquet garni. Portez à ébullition puis réduisez le feu. Laissez mijoter à feu doux pendant 2h30 à 3 heures.'
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
                text: '30 minutes avant la fin de la cuisson, ajoutez les champignons émincés. Vérifiez l\'assaisonnement. Le bouillon doit être bien réduit et la viande doit être très tendre.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le bœuf bourguignon est un plat traditionnel français, fait de bœuf braisé dans du vin rouge avec des légumes et des lardons.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le bœuf bourguignon est l\'un des plats les plus emblématiques de la cuisine française. Cette version traditionnelle utilise du paleron de bœuf, une viande idéale pour la cuisson longue. Le vin rouge de Bourgogne, les lardons et les légumes créent une sauce riche et savoureuse, tandis que les champignons ajoutent une touche de fraîcheur.'
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
        _ref: 'product-beef-shoulder'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Coq au Vin',
    slug: {
      _type: 'slug',
      current: 'coq-au-vin'
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
    country: 'France',
    publishedAt: new Date().toISOString(),
    prepTime: 40,
    cookTime: 90,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Poulet fermier',
        amount: '1.5 kg'
      },
      {
        _type: 'ingredient',
        ingredient: 'Lardons fumés',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Carottes',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignons',
        amount: '2'
      },
      {
        _type: 'ingredient',
        ingredient: 'Champignons de Paris',
        amount: '400 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Vin rouge',
        amount: '75 cl'
      },
      {
        _type: 'ingredient',
        ingredient: 'Bouquet garni',
        amount: '1'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '3 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Farine',
        amount: '2 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Beurre',
        amount: '50 g'
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
                text: 'Découpez le poulet en morceaux. Épongez la viande avec du papier absorbant. Dans une cocotte, faites revenir les lardons avec un peu d\'huile d\'olive jusqu\'à ce qu\'ils soient dorés. Réservez.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Saisie du poulet',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans la même cocotte, faites revenir les morceaux de poulet en plusieurs fois. Salez et poivrez. Une fois la viande bien dorée, réservez-la avec les lardons.'
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
                text: 'Dans la même cocotte, faites revenir les oignons émincés et les carottes coupées en rondelles. Ajoutez l\'ail haché et la farine. Mélangez bien.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Mijotage',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Remettez le poulet et les lardons dans la cocotte. Versez le vin rouge et ajoutez le bouquet garni. Portez à ébullition puis réduisez le feu. Laissez mijoter à feu doux pendant 1h30.'
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
                text: '30 minutes avant la fin de la cuisson, ajoutez les champignons émincés. Vérifiez l\'assaisonnement. Le bouillon doit être bien réduit et la viande doit être très tendre.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le coq au vin est un plat traditionnel français, fait de poulet braisé dans du vin rouge avec des légumes et des lardons.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le coq au vin est un plat rustique de la cuisine française, originaire de la région de Bourgogne. Cette version utilise un poulet fermier entier, qui est braisé dans du vin rouge avec des légumes et des lardons. Le résultat est un plat riche et savoureux, parfait pour les repas de famille.'
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
        _ref: 'product-whole-chicken'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Gigot d\'Agneau à la Provençale',
    slug: {
      _type: 'slug',
      current: 'gigot-agneau-provencale'
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
    country: 'France',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 120,
    servings: 8,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Gigot d\'agneau',
        amount: '2 kg'
      },
      {
        _type: 'ingredient',
        ingredient: 'Gousses d\'ail',
        amount: '8'
      },
      {
        _type: 'ingredient',
        ingredient: 'Branches de romarin',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Branches de thym',
        amount: '4'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '4 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Sel et poivre',
        amount: 'Au goût'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pommes de terre',
        amount: '1 kg'
      },
      {
        _type: 'ingredient',
        ingredient: 'Tomates cerises',
        amount: '500 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Olives noires',
        amount: '200 g'
      }
    ],
    steps: [
      {
        _type: 'step',
        title: 'Préparation du gigot',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Préchauffez le four à 180°C. Incisez la surface du gigot et insérez-y les gousses d\'ail épluchées et coupées en lamelles. Salez et poivrez généreusement.'
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
                text: 'Épluchez et coupez les pommes de terre en quartiers. Mettez-les dans un plat allant au four avec les tomates cerises et les olives. Arrosez d\'huile d\'olive et assaisonnez.'
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
                text: 'Placez le gigot sur une grille au-dessus du plat de légumes. Ajoutez les branches de romarin et de thym. Enfournez pour 2 heures en arrosant régulièrement le gigot avec son jus.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Repos et service',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Sortez le gigot du four et laissez-le reposer 15 minutes avant de le découper. Servez avec les légumes et le jus de cuisson.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le gigot d\'agneau à la provençale est un plat traditionnel du sud de la France, rôti avec des herbes de Provence et des légumes méditerranéens.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le gigot d\'agneau à la provençale est un plat festif qui met en valeur les saveurs du sud de la France. L\'agneau est parfumé à l\'ail et aux herbes de Provence, tandis que les légumes méditerranéens (pommes de terre, tomates et olives) créent un accompagnement parfait. Ce plat est idéal pour les repas de famille ou les occasions spéciales.'
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
        _ref: 'product-leg-of-lamb'
      }
    ]
  }
];