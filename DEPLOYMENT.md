# Configuration du déploiement GitHub Pages

## Étapes à suivre dans GitHub

### 1. Activer GitHub Pages avec GitHub Actions

1. Allez sur votre repository GitHub : `https://github.com/Amakran2003/OrientalBoucherie`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **GitHub Actions** au lieu de "Deploy from a branch"

### 2. Configurer votre nom de domaine personnalisé (si vous en avez un)

1. Toujours dans **Settings > Pages**
2. Dans la section **Custom domain**, entrez votre nom de domaine
3. Cliquez sur **Save**
4. GitHub va vérifier votre domaine et créer automatiquement le fichier CNAME

### 3. Configuration DNS chez votre fournisseur de domaine

Si vous avez un domaine personnalisé, ajoutez ces enregistrements DNS :

**Pour un domaine apex (exemple.com) :**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Pour un sous-domaine (www.exemple.com) :**
```
Type: CNAME
Name: www
Value: amakran2003.github.io
```

### 4. Déploiement automatique

Maintenant, chaque fois que vous poussez des changements sur la branche `main`, le workflow GitHub Actions va :
- Construire votre application
- Déployer automatiquement sur GitHub Pages

### 5. Vérification

Après le premier push :
1. Allez dans l'onglet **Actions** de votre repository
2. Vous verrez le workflow "Deploy to GitHub Pages" en cours d'exécution
3. Une fois terminé (symbole vert ✓), votre site sera déployé

### URL de votre site

- **Sans domaine personnalisé** : https://amakran2003.github.io/OrientalBoucherie/
- **Avec domaine personnalisé** : https://votredomaine.com/

## Commandes utiles

```bash
# Déploiement manuel (ancienne méthode, non recommandée)
npm run deploy

# Build local pour tester
npm run build
npm run preview
```

## Notes importantes

- Le déploiement automatique remplace la méthode `npm run deploy` (gh-pages)
- Les changements sont déployés automatiquement lors du push sur `main`
- Vous pouvez aussi déclencher manuellement le déploiement depuis l'onglet Actions
