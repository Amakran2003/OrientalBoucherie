/**
 * Recettes françaises pour Oriental Boucherie
 * Chaque recette met en valeur un type de viande différent et est prête pour l'importation dans Sanity
 */

export const frenchRecipes = [
  {
    _type: "recipe",
    title: "Bœuf Bourguignon",
    slug: { _type: "slug", current: "boeuf-bourguignon" },
    mainImage: { _type: "image", asset: { _type: "reference", _ref: "image-boeuf-bourguignon" } },
    categories: [ { _type: "reference", _ref: "category-beef" } ],
    country: "France",
    publishedAt: new Date().toISOString(),
    prepTime: 45,
    cookTime: 180,
    servings: 6,
    ingredients: [
      { ingredient: "Paleron de bœuf", amount: "1.2 kg" },
      { ingredient: "Lardons fumés", amount: "200 g" },
      { ingredient: "Carottes", amount: "4" },
      { ingredient: "Oignons", amount: "2" },
      { ingredient: "Champignons de Paris", amount: "400 g" },
      { ingredient: "Vin rouge de Bourgogne", amount: "75 cl" },
      { ingredient: "Bouquet garni", amount: "1" },
      { ingredient: "Ail", amount: "3 gousses" },
      { ingredient: "Farine", amount: "2 cuillères à soupe" },
      { ingredient: "Beurre", amount: "50 g" },
      { ingredient: "Huile d'olive", amount: "2 cuillères à soupe" },
      { ingredient: "Sel et poivre", amount: "Au goût" }
    ],
    steps: [
      { title: "Préparation de la viande", description: "Coupez la viande en cubes de 4–5 cm. Épongez-les. Dans une cocotte, faites revenir les lardons dans l'huile d'olive jusqu'à coloration, puis réservez." },
      { title: "Saisie", description: "Saisissez la viande par petites portions dans la même cocotte. Salez, poivrez et réservez avec les lardons." },
      { title: "Légumes", description: "Faites revenir oignons émincés et carottes en rondelles. Ajoutez l'ail haché et la farine, puis mélangez." },
      { title: "Mijotage", description: "Remettez viande et lardons. Versez le vin rouge, ajoutez le bouquet garni. Portez à ébullition, puis laissez mijoter à feu doux 2h30–3h." },
      { title: "Ajout des champignons", description: "30 min avant la fin, ajoutez les champignons émincés. Ajustez l'assaisonnement et vérifiez la tendreté de la viande." }
    ],
    description: "Le bœuf bourguignon est un classique français : viande confite dans le vin rouge, relevée par lardons et légumes.",
    body: [],
    featured: true,
    relatedProducts: [ { _type: "reference", _ref: "product-beef-shoulder" } ]
  },
  {
    title: "Coq au Vin",
    slug: { current: "coq-au-vin" },
    mainImage: { asset: { _ref: "image-coq-au-vin" } },
    categories: [ { _ref: "category-poultry" } ],
    country: "France",
    publishedAt: new Date().toISOString(),
    prepTime: 40,
    cookTime: 90,
    servings: 6,
    ingredients: [
      { ingredient: "Poulet fermier", amount: "1.5 kg" },
      { ingredient: "Lardons fumés", amount: "200 g" },
      { ingredient: "Carottes", amount: "4" },
      { ingredient: "Oignons", amount: "2" },
      { ingredient: "Champignons de Paris", amount: "400 g" },
      { ingredient: "Vin rouge", amount: "75 cl" },
      { ingredient: "Bouquet garni", amount: "1" },
      { ingredient: "Ail", amount: "3 gousses" },
      { ingredient: "Farine", amount: "2 cuillères à soupe" },
      { ingredient: "Beurre", amount: "50 g" },
      { ingredient: "Huile d'olive", amount: "2 cuillères à soupe" },
      { ingredient: "Sel et poivre", amount: "Au goût" }
    ],
    steps: [
      { title: "Préparation du poulet", description: "Coupez le poulet, épongez soigneusement. Dans une cocotte, dorez les lardons dans l'huile d'olive puis réservez." },
      { title: "Saisie", description: "Dorez les morceaux de poulet en plusieurs fois, salez, poivrez et réservez avec les lardons." },
      { title: "Déglacer et légumes", description: "Faites revenir oignons et carottes, ajoutez l'ail et la farine. Déglacez au vin rouge." },
      { title: "Mijotage", description: "Replacez poulet et lardons, ajoutez le bouquet garni. Laissez mijoter 1h30 à feu doux." },
      { title: "Ajout des champignons", description: "30 min avant la fin, incorporez les champignons. Ajustez assaisonnement et servez." }
    ],
    description: "Le coq au vin, plat rustique de Bourgogne, marie poulet fermier et vin rouge pour un goût authentique.",
    body: [ { children: [ { text: "Le coq est braisé longuement pour révéler toutes ses saveurs dans une sauce riche et onctueuse." } ], markDefs: [], style: "normal" } ],
    featured: true,
    relatedProducts: [ { _ref: "product-whole-chicken" } ]
  },
  {
    title: "Gigot d'Agneau à la Provençale",
    slug: { current: "gigot-agneau-provencale" },
    mainImage: { asset: { _ref: "image-gigot-agneau-provencale" } },
    categories: [ { _ref: "category-lamb" } ],
    country: "France",
    publishedAt: new Date().toISOString(),
    prepTime: 30,
    cookTime: 120,
    servings: 8,
    ingredients: [
      { ingredient: "Gigot d'agneau", amount: "2 kg" },
      { ingredient: "Gousses d'ail", amount: "8" },
      { ingredient: "Branches de romarin", amount: "4" },
      { ingredient: "Branches de thym", amount: "4" },
      { ingredient: "Huile d'olive", amount: "4 cuillères à soupe" },
      { ingredient: "Sel et poivre", amount: "Au goût" },
      { ingredient: "Pommes de terre", amount: "1 kg" },
      { ingredient: "Tomates cerises", amount: "500 g" },
      { ingredient: "Olives noires", amount: "200 g" }
    ],
    steps: [
      { title: "Préparation", description: "Préchauffez à 180°C. Incisez le gigot, glissez l'ail. Salez, poivrez." },
      { title: "Légumes", description: "Disposez pommes de terre, tomates cerises et olives. Arrosez d'huile et assaisonnez." },
      { title: "Cuisson", description: "Placez le gigot au-dessus des légumes, ajoutez romarin et thym. Enfournez 2h en arrosant." },
      { title: "Repos", description: "Laissez reposer 15 min avant de découper. Servez avec légumes." }
    ],
    description: "Gigot rôti aux herbes de Provence, servi avec pommes de terre et légumes méditerranéens.",
    body: [ { children: [ { text: "Un plat festif aux saveurs ensoleillées, idéal pour les grandes tablées." } ], markDefs: [], style: "normal" } ],
    featured: false,
    relatedProducts: [ { _ref: "product-leg-of-lamb" } ]
  },
  {
    title: "Côte d'agneau dark sauce",
    slug: { current: "cote-dagneau-dark-sauce" },
    mainImage: { asset: { _ref: "image-cote-agneau-dark-sauce" } },
    categories: [ { _ref: "category-lamb" } ],
    country: "France",
    publishedAt: new Date().toISOString(),
    prepTime: 5,
    cookTime: 20,
    servings: 1,
    ingredients: [
      { ingredient: "Côte d'agneau", amount: "1 à 2" },
      { ingredient: "Petites pommes de terre", amount: "4" },
      { ingredient: "Oignons", amount: "2" },
      { ingredient: "Sauce soja", amount: "Au goût" },
      { ingredient: "Sucre", amount: "Au goût" },
      { ingredient: "Crème fraîche", amount: "Au goût" },
      { ingredient: "Noisette de beurre", amount: "1" },
      { ingredient: "Huile d'olive", amount: "1 filet" }
    ],
    steps: [
      { title: "Purée", description: "Cuire pommes de terre à la vapeur et écraser avec crème fraîche." },
      { title: "Fondue d'oignons", description: "Revenir oignons émincés dans huile d'olive 10 min, arroser de soja et saupoudrer de sucre." },
      { title: "Cuisson de la côte", description: "Saisir côte d'agneau, ajouter soja, puis monter la sauce au beurre." },
      { title: "Dressage", description: "Dressage en cercle : purée, fondue d'oignons, arroser sauce et accompagner de la côte." }
    ],
    description: "Côte d'agneau servie avec purée onctueuse et sauce soja caramélisée.",
    body: [],
    featured: false,
    relatedProducts: []
  },
  {
    title: "Souris d'agneau fondante",
    slug: { current: "souris-dagneau-fondante" },
    mainImage: {
      asset: { _ref: "image-placeholder-souris-agneau" }
    },
    categories: [{ _ref: "category-lamb" }],
    country: "France",
    publishedAt: new Date().toISOString(),
    prepTime: 10,
    cookTime: 120,
    servings: 2,
    ingredients: [
      { ingredient: "Souris d'agneau", amount: "4" },
      { ingredient: "Oignon", amount: "1" },
      { ingredient: "Miel", amount: "1 c.à.s" },
      { ingredient: "Thym", amount: "1 c.à.s" },
      { ingredient: "Romarin", amount: "1 c.à.s" },
      { ingredient: "Eau", amount: "½ verre" },
      { ingredient: "Huile d'olive", amount: "1 filet" }
    ],
    steps: [
      {
        title: "Cuisson de l'oignon et des souris",
        description: "Faites revenir l'oignon en rondelles dans un fond d'huile d'olive. Ajoutez les souris d'agneau et faites-les dorer sur toutes les faces."
      },
      {
        title: "Assaisonnement et mijotage",
        description: "Ajoutez le miel, le thym et le romarin. Versez l'eau et laissez mijoter à feu doux pendant 2 heures."
      }
    ],
    description: "Souris d'agneau mijotée longuement avec du miel et des herbes de Provence.",
    body: [
      {
        children: [
          {
            text: "Une recette traditionnelle qui fait fondre la viande pour un résultat tendre et savoureux."
          }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    featured: false,
    relatedProducts: [{ _ref: "product-lamb-shank" }]
  }
];
  
