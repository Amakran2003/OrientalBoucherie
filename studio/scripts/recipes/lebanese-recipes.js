/**
 * Recettes libanaises pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const lebaneseRecipes = [
  {
    _type: "recipe",
    title: "Kafta à la Libanaise",
    slug: { _type: "slug", current: "kafta-libanaise" },
    mainImage: { _type: "image", asset: { _type: "reference", _ref: "image-kafta-libanaise" } },
    categories: [ { _type: "reference", _ref: "category-lamb" } ],
    country: "Liban",
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { ingredient: "Viande d'agneau hachée", amount: "500 g" },
      { ingredient: "Oignon", amount: "1" },
      { ingredient: "Persil frais", amount: "1 bouquet" },
      { ingredient: "Menthe fraîche", amount: "1/2 bouquet" },
      { ingredient: "Ail", amount: "2 gousses" },
      { ingredient: "Cumin", amount: "1 cuillère à café" },
      { ingredient: "Piment d'Alep", amount: "1/2 cuillère à café" },
      { ingredient: "Sel et poivre", amount: "Au goût" }
    ],
    steps: [
      { title: "Préparation", description: "Hachez finement l'oignon, le persil et la menthe. Écrasez l'ail." },
      { title: "Mélange", description: "Dans un grand bol, mélangez la viande hachée avec tous les ingrédients hachés et les épices." },
      { title: "Façonnage", description: "Formez des boulettes allongées ou des brochettes avec la préparation." },
      { title: "Cuisson", description: "Faites griller les kaftas au barbecue ou à la poêle pendant 8-10 minutes en les retournant régulièrement." }
    ],
    description: "Les kaftas libanaises sont des brochettes de viande hachée épicées, parfaites pour un barbecue estival.",
    body: [],
    featured: true,
    relatedProducts: [ { _type: "reference", _ref: "product-ground-lamb" } ]
  },
  {
    title: 'Méchoui d\'Agneau',
    slug: {
      current: 'mechoui-agneau'
    },
    mainImage: {
      asset: {
        _ref: 'image-to-be-replaced'
      }
    },
    categories: [
      {
        _ref: 'category-lamb'
      }
    ],
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 60,
    cookTime: 240,
    servings: 8,
    ingredients: [
      { ingredient: 'Épaule d\'agneau', amount: '2 kg' },
      { ingredient: 'Ail', amount: '1 tête' },
      { ingredient: 'Citron', amount: '2' },
      { ingredient: 'Huile d\'olive', amount: '4 c.à.s' },
      { ingredient: 'Cumin', amount: '2 c.à.s' },
      { ingredient: 'Paprika', amount: '1 c.à.s' },
      { ingredient: 'Piment de Cayenne', amount: '1 c.à.c' },
      { ingredient: 'Sel', amount: '2 c.à.s' },
      { ingredient: 'Poivre noir', amount: '1 c.à.s' },
      { ingredient: 'Thym frais', amount: '4 branches' },
      { ingredient: 'Romarin', amount: '4 branches' }
    ],
    steps: [
      { title: "Préparation de la marinade", description: "Préparez la marinade en mélangeant l'huile d'olive, le jus des citrons, l'ail écrasé, le cumin, le paprika, le piment de Cayenne, le sel et le poivre." },
      { title: "Marinage de la viande", description: "Faites des incisions profondes dans la viande et versez la marinade dessus. Ajoutez les branches de thym et de romarin. Laissez mariner au moins 4 heures, idéalement toute une nuit au réfrigérateur." },
      { title: "Cuisson", description: "Préchauffez le four à 180°C. Placez la viande dans un plat allant au four avec un peu d'eau au fond. Couvrez de papier aluminium et enfournez pour 3-4 heures." },
      { title: "Finalisation", description: "Retirez le papier aluminium pour les 30 dernières minutes de cuisson pour que la viande dore. La viande est prête lorsqu'elle se détache facilement de l'os." }
    ],
    description: 'Épaule d\'agneau marinée et rôtie à la libanaise, tendre et parfumée.',
    body: [
      {
        children: [
          {
            text: 'Le méchoui est un plat traditionnel du Maghreb et du Moyen-Orient. Cette version libanaise utilise une marinade épicée et des herbes aromatiques pour parfumer la viande.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: true,
    relatedProducts: [
      {
        _ref: 'product-lamb-shoulder'
      }
    ]
  },
  {
    title: 'Chawarma de Poulet',
    slug: {
      current: 'chawarma-poulet'
    },
    mainImage: {
      asset: {
        _ref: 'image-to-be-replaced'
      }
    },
    categories: [
      {
        _ref: 'category-poultry'
      }
    ],
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 60,
    servings: 6,
    ingredients: [
      { ingredient: 'Blancs de poulet', amount: '800 g' },
      { ingredient: 'Yaourt nature', amount: '200 g' },
      { ingredient: 'Jus de citron', amount: '2 c.à.s' },
      { ingredient: 'Ail', amount: '4 gousses' },
      { ingredient: 'Cumin', amount: '1 c.à.s' },
      { ingredient: 'Paprika', amount: '1 c.à.s' },
      { ingredient: 'Cannelle', amount: '1/2 c.à.c' },
      { ingredient: 'Cardamome', amount: '1/2 c.à.c' },
      { ingredient: 'Sel', amount: '1 c.à.s' },
      { ingredient: 'Poivre noir', amount: '1 c.à.c' },
      { ingredient: 'Huile d\'olive', amount: '2 c.à.s' },
      { ingredient: 'Pains pita', amount: '6' },
      { ingredient: 'Tahini', amount: '4 c.à.s' },
      { ingredient: 'Persil frais', amount: '1 bouquet' }
    ],
    steps: [
      { title: "Préparation de la marinade", description: "Mélangez le yaourt, le jus de citron, l'ail écrasé, le cumin, le paprika, la cannelle, la cardamome, le sel et le poivre." },
      { title: "Marinage du poulet", description: "Coupez le poulet en lamelles et mélangez-le avec la marinade. Laissez mariner au moins 2 heures, idéalement toute une nuit au réfrigérateur." },
      { title: "Cuisson", description: "Faites chauffer l'huile d'olive dans une grande poêle. Faites cuire le poulet à feu moyen-vif pendant 10-15 minutes jusqu'à ce qu'il soit bien cuit et légèrement doré." },
      { title: "Préparation des pains", description: "Chauffez légèrement les pains pita. Étalez une fine couche de tahini sur chaque pain, ajoutez le poulet et garnissez de persil frais." }
    ],
    description: 'Poulet mariné et épicé servi dans des pains pita, spécialité street food libanaise.',
    body: [
      {
        children: [
          {
            text: 'Le chawarma est un plat populaire dans tout le Moyen-Orient. Cette version utilise du poulet mariné dans des épices traditionnelles et est servie dans des pains pita avec une sauce au tahini.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: true,
    relatedProducts: [
      {
        _ref: 'product-chicken-breast'
      }
    ]
  },
  {
    title: 'Kibbeh Nayeh',
    slug: {
      current: 'kibbeh-nayeh'
    },
    mainImage: {
      asset: {
        _ref: 'image-to-be-replaced'
      }
    },
    categories: [
      {
        _ref: 'category-lamb'
      }
    ],
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 45,
    cookTime: 0,
    servings: 6,
    ingredients: [
      { ingredient: 'Viande d\'agneau hachée très finement', amount: '500 g' },
      { ingredient: 'Boulgour fin', amount: '200 g' },
      { ingredient: 'Oignon', amount: '1' },
      { ingredient: 'Ail', amount: '2 gousses' },
      { ingredient: 'Menthe fraîche', amount: '1/2 bouquet' },
      { ingredient: 'Cumin', amount: '1 c.à.c' },
      { ingredient: 'Piment de Cayenne', amount: '1/2 c.à.c' },
      { ingredient: 'Sel', amount: '1 c.à.s' },
      { ingredient: 'Poivre noir', amount: '1/2 c.à.c' },
      { ingredient: 'Huile d\'olive', amount: '4 c.à.s' },
      { ingredient: 'Pignons de pin', amount: '50 g' },
      { ingredient: 'Feuilles de laitue', amount: '1 tête' }
    ],
    steps: [
      { title: "Préparation du boulgour", description: "Faites tremper le boulgour dans de l'eau froide pendant 30 minutes, puis égouttez-le bien en pressant pour éliminer l'excès d'eau." },
      { title: "Préparation des ingrédients", description: "Hachez finement l'oignon et l'ail. Ciselez la menthe fraîche." },
      { title: "Mélange", description: "Dans un grand bol, mélangez la viande hachée, le boulgour égoutté, l'oignon, l'ail, la menthe, le cumin, le piment de Cayenne, le sel et le poivre. Pétrissez bien pour obtenir une pâte homogène." },
      { title: "Service", description: "Formez une boule avec le mélange et aplatissez-la sur un plat. Arrosez d'huile d'olive et garnissez de pignons de pin. Servez avec des feuilles de laitue pour envelopper." }
    ],
    description: 'Tartare d\'agneau épicé, spécialité libanaise servie crue.',
    body: [
      {
        children: [
          {
            text: 'Le kibbeh nayeh est un plat traditionnel libanais qui se déguste cru. Il est important d\'utiliser de la viande très fraîche et de haute qualité pour ce plat.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: false,
    relatedProducts: [
      {
        _ref: 'product-ground-lamb'
      }
    ]
  },
  {
    title: 'Mansaf au Poulet',
    slug: {
      current: 'mansaf-poulet'
    },
    mainImage: {
      asset: {
        _ref: 'image-to-be-replaced'
      }
    },
    categories: [
      {
        _ref: 'category-poultry'
      }
    ],
    country: 'Liban',
    publishedAt: new Date().toISOString(),
    prepTime: 60,
    cookTime: 120,
    servings: 8,
    ingredients: [
      { ingredient: 'Poulet entier', amount: '1.5 kg' },
      { ingredient: 'Riz basmati', amount: '500 g' },
      { ingredient: 'Yaourt nature', amount: '500 g' },
      { ingredient: 'Amandes effilées', amount: '100 g' },
      { ingredient: 'Pignons de pin', amount: '50 g' },
      { ingredient: 'Oignon', amount: '2' },
      { ingredient: 'Ail', amount: '4 gousses' },
      { ingredient: 'Bouillon de poulet', amount: '1 L' },
      { ingredient: 'Cardamome', amount: '1 c.à.c' },
      { ingredient: 'Cannelle', amount: '1 bâton' },
      { ingredient: 'Clous de girofle', amount: '4' },
      { ingredient: 'Sel', amount: '2 c.à.s' },
      { ingredient: 'Poivre noir', amount: '1 c.à.s' },
      { ingredient: 'Huile d\'olive', amount: '4 c.à.s' },
      { ingredient: 'Persil frais', amount: '1 bouquet' }
    ],
    steps: [
      { title: "Préparation du poulet", description: "Découpez le poulet en morceaux. Faites chauffer l'huile d'olive dans une grande cocotte et faites dorer les morceaux de poulet sur toutes les faces. Réservez." },
      { title: "Préparation de la sauce", description: "Dans la même cocotte, faites revenir l'oignon émincé et l'ail écrasé. Ajoutez le yaourt et le bouillon de poulet. Remettez les morceaux de poulet, ajoutez la cardamome, la cannelle et les clous de girofle. Salez et poivrez." },
      { title: "Cuisson", description: "Portez à ébullition, puis réduisez le feu et laissez mijoter pendant 1h30 jusqu'à ce que le poulet soit tendre." },
      { title: "Préparation du riz", description: "Pendant ce temps, faites cuire le riz basmati selon les instructions du paquet. Faites dorer les amandes et les pignons de pin dans une poêle avec un peu d'huile." },
      { title: "Service", description: "Disposez le riz sur un grand plat, ajoutez les morceaux de poulet et la sauce. Garnissez d'amandes, de pignons de pin et de persil frais." }
    ],
    description: 'Plat traditionnel libanais de poulet mijoté avec du riz et une sauce au yaourt.',
    body: [
      {
        children: [
          {
            text: 'Le mansaf est un plat festif traditionnel du Moyen-Orient. Cette version utilise du poulet au lieu de l\'agneau et est servie avec du riz basmati parfumé aux épices.'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    featured: true,
    relatedProducts: [
      {
        _ref: 'product-whole-chicken'
      }
    ]
  }
];
