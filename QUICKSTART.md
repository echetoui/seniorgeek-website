# 🚀 SeniorGeek - Quick Start Guide

Bienvenue! Ce guide explique comment travailler avec le projet SeniorGeek.

## ✨ En 2 Minutes

### 1. Cloner le Repository
```bash
git clone https://github.com/echetoui/seniorgeek-website.git
cd seniorgeek-website
```

### 2. Installer les Dépendances
```bash
npm install
```

### 3. Lancer le Serveur
```bash
npm run dev
```

Ouvrir: http://localhost:4321

## 🎯 Flux de Travail Typique

### Pour une nouvelle fonctionnalité:

```bash
# 1. Créer une branche
git checkout -b feature/ma-feature

# 2. Développer et tester
npm run dev
# Visiter http://localhost:4321

# 3. Vérifier l'accessibilité
npm run test:a11y

# 4. Builder pour production
npm run build

# 5. Commit et push
git add .
git commit -m "feat: description claire"
git push origin feature/ma-feature

# 6. Créer une PR sur GitHub
# Vercel crée une preview URL automatiquement

# 7. Après approbation, merge dans main
# Vercel déploie automatiquement en production
```

## 📁 Structure Rapide

```
src/
├── pages/              # Pages du site
│   ├── index.astro     # Accueil
│   ├── services/       # Pages services
│   └── contact.astro   # Formulaire
├── components/         # Composants réutilisables
│   ├── common/         # Header, Footer, Nav
│   ├── widgets/        # Sections complexes
│   └── ui/             # Boutons, cartes, etc.
├── layouts/            # Templates de pages
└── styles/             # CSS global
```

## 🎨 Modifier le Contenu

### Changer le texte de la homepage
Fichier: `src/pages/index.astro`

### Modifier un service
Fichiers: `src/pages/services/aines.astro`, `proches.astro`, `residences.astro`

### Ajouter une page
1. Créer un fichier dans `src/pages/`
2. Utiliser un layout (BaseLayout ou PageLayout)
3. Relancer le serveur

## 🎨 Modifier les Styles

Utiliser Tailwind CSS directement dans les composants:

```astro
<button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Click me
</button>
```

## ♿ Tester l'Accessibilité

```bash
npm run test:a11y
```

Vérifier:
- Navigation au clavier
- Contraste des couleurs
- Labels des formulaires
- ARIA attributes

## 📦 Build pour Production

```bash
npm run build
```

Résultat: `dist/` (prêt pour Vercel)

## 🧪 Preview Production

```bash
npm run preview
```

Voir: http://localhost:3000

## 📤 Déployer sur Vercel

**Automatique**: Push sur `main` → Vercel déploie

**Manual**:
```bash
vercel deploy --prod
```

## 🔍 Voir les Logs

### Logs Vercel
```bash
vercel logs
```

### Logs de Build Local
```bash
npm run build
# Erreurs visibles directement
```

## 💬 Git Commit Messages

Format:
```
type: description courte

feat: add new feature
fix: correct a bug
docs: update documentation
style: format code
test: add tests
```

## 🚀 Commandes Utiles

```bash
# Développement
npm run dev          # Serveur local avec hot reload

# Production
npm run build        # Build pour Vercel
npm run preview      # Prévisualiser la build

# Tests
npm run test:a11y    # Tests d'accessibilité
npm test             # Tous les tests

# Vercel
vercel               # Deploy preview
vercel deploy --prod # Deploy production
vercel logs          # Voir les logs
```

## 🆘 Problèmes Communs

### Le serveur ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
npm install
npm run dev
```

### Erreur de build
```bash
# Vérifier localement
npm run build

# Vérifier les logs Vercel
vercel logs

# Fixer et recommitter
git add .
git commit -m "fix: description"
git push origin main
```

### Imports cassés
Assurez-vous que les chemins sont corrects:
```astro
import Component from '../components/MyComponent.astro'
import Layout from '../layouts/PageLayout.astro'
```

## 📚 Ressources

- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **GitHub**: https://github.com/echetoui/seniorgeek-website

## 👥 Besoin d'Aide?

1. Consulter la documentation (`DEPLOYMENT.md`, `CONTRIBUTING.md`)
2. Vérifier les issues GitHub
3. Ouvrir une nouvelle issue

## ✅ Checklist Avant de Merger

- [ ] Code testé localement
- [ ] Pas d'erreurs de build
- [ ] Tests accessibilité passent
- [ ] Images optimisées
- [ ] Pas de console errors
- [ ] Commit messages clairs

---

**Ready to code?** 🚀

Bienvenue dans l'équipe SeniorGeek! Merci de contribuer! 💙
