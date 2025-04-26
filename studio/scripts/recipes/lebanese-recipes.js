/**
 * Recettes libanaises pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const recipes = [
  {
    _type: 'recipe',
    title: 'Kafta à la Libanaise',
    slug: {
      _type: 'slug',
      current: 'kafta-libanaise'
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
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 25,
    servings: 4,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Viande d\'agneau hachée',
        amount: '500 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignon',
        amount: '1'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '3 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Persil plat',
        amount: '1 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Menthe fraîche',
        amount: '1/2 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cannelle',
        amount: '1/2 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Piment de Cayenne',
        amount: '1/4 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Sel et poivre',
        amount: 'Au goût'
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile d\'olive',
        amount: '2 cuillères à soupe'
      }
    ],
    steps: [
      {
        _type: 'step',
        title: 'Préparation des ingrédients',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Hachez finement l\'oignon, l\'ail, le persil et la menthe. Mélangez tous les ingrédients secs (épices, sel, poivre).'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation de la kafta',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans un grand bol, mélangez la viande hachée avec les légumes hachés et les épices. Pétrir à la main pendant 5 minutes pour obtenir une pâte homogène.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Formation des brochettes',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Formez des boulettes allongées de la taille d\'un doigt. Enfilez-les sur des brochettes en bois préalablement trempées dans l\'eau.'
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
                text: 'Badigeonnez les brochettes d\'huile d\'olive. Faites griller sur un barbecue ou sous le gril du four pendant 10-12 minutes en les retournant régulièrement.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'La kafta est un plat emblématique de la cuisine libanaise, fait de viande d\'agneau hachée épicée et grillée en brochettes.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'La kafta est l\'un des plats les plus populaires de la cuisine libanaise. Cette version traditionnelle utilise de la viande d\'agneau hachée, parfumée aux herbes fraîches et aux épices caractéristiques de la cuisine du Levant. Les brochettes sont généralement servies avec du tabbouleh, de l\'houmous et du pain pita.'
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
        _ref: 'product-minced-lamb'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Chawarma de Poulet à la Libanaise',
    slug: {
      _type: 'slug',
      current: 'chawarma-poulet-libanaise'
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
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Blancs de poulet',
        amount: '1 kg'
      },
      {
        _type: 'ingredient',
        ingredient: 'Yaourt nature',
        amount: '200 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Jus de citron',
        amount: '2 cuillères à soupe'
      },
      {
        _type: 'ingredient',
        ingredient: 'Ail',
        amount: '6 gousses'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Paprika',
        amount: '2 cuillères à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cannelle',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cardamome',
        amount: '1/2 cuillère à café'
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
        title: 'Préparation de la marinade',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans un grand bol, mélangez le yaourt, le jus de citron, l\'ail pressé, les épices, l\'huile d\'olive, le sel et le poivre.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Marinade du poulet',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Coupez les blancs de poulet en lamelles. Ajoutez-les à la marinade et mélangez bien. Couvrez et laissez mariner au réfrigérateur pendant au moins 4 heures, idéalement toute une nuit.'
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
                text: 'Faites chauffer une grande poêle ou un wok à feu vif. Ajoutez le poulet mariné et faites-le cuire en remuant constamment pendant 8-10 minutes, jusqu\'à ce que la viande soit bien cuite et légèrement caramélisée.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Le chawarma de poulet est un plat street-food libanais populaire, fait de poulet mariné aux épices et grillé, servi dans du pain pita avec des légumes et une sauce à l\'ail.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Le chawarma est l\'un des plats les plus emblématiques de la cuisine de rue libanaise. Cette version au poulet est particulièrement savoureuse grâce à sa marinade épicée au yaourt et aux épices traditionnelles. Traditionnellement servi dans du pain pita avec des légumes frais et une sauce à l\'ail crémeuse, c\'est un plat complet et délicieux.'
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
        _ref: 'product-chicken-breast'
      }
    ]
  },
  {
    _type: 'recipe',
    title: 'Kibbeh au Bœuf',
    slug: {
      _type: 'slug',
      current: 'kibbeh-boeuf'
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
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 60,
    cookTime: 30,
    servings: 6,
    ingredients: [
      {
        _type: 'ingredient',
        ingredient: 'Boulgour fin',
        amount: '250 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Viande de bœuf hachée',
        amount: '500 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Oignon',
        amount: '1'
      },
      {
        _type: 'ingredient',
        ingredient: 'Pignons de pin',
        amount: '50 g'
      },
      {
        _type: 'ingredient',
        ingredient: 'Persil plat',
        amount: '1 bouquet'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cumin',
        amount: '1 cuillère à café'
      },
      {
        _type: 'ingredient',
        ingredient: 'Cannelle',
        amount: '1/2 cuillère à café'
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
      },
      {
        _type: 'ingredient',
        ingredient: 'Huile pour friture',
        amount: 'Pour la friture'
      }
    ],
    steps: [
      {
        _type: 'step',
        title: 'Préparation du boulgour',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Faites tremper le boulgour dans de l\'eau tiède pendant 30 minutes. Égouttez bien et essorez dans un torchon.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation de la farce',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Hachez finement l\'oignon et le persil. Dans une poêle, faites revenir les pignons de pin jusqu\'à ce qu\'ils soient dorés. Réservez.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Préparation de la pâte',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Dans un grand bol, mélangez la moitié de la viande hachée avec le boulgour égoutté, l\'oignon, les épices, le sel et le poivre. Pétrir à la main jusqu\'à obtenir une pâte homogène.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      },
      {
        _type: 'step',
        title: 'Formation des kibbeh',
        description: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Prenez une noix de pâte et formez une boule creuse. Remplissez avec un peu de viande hachée restante et quelques pignons. Fermez en formant une forme de ballon de rugby.'
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
                text: 'Faites chauffer l\'huile de friture. Plongez les kibbeh et faites-les frire pendant 5-6 minutes jusqu\'à ce qu\'ils soient bien dorés. Égouttez sur du papier absorbant.'
              }
            ],
            markDefs: [],
            style: 'normal'
          }
        ]
      }
    ],
    description: 'Les kibbeh sont des croquettes traditionnelles libanaises à base de boulgour et de viande hachée, farcies et frites.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Les kibbeh sont l\'un des plats les plus emblématiques de la cuisine libanaise. Ces croquettes croustillantes à l\'extérieur et tendres à l\'intérieur sont traditionnellement servies en entrée ou en accompagnement. La version au bœuf est particulièrement populaire, avec sa farce savoureuse aux pignons de pin.'
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
