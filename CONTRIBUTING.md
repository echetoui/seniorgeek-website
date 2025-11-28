# Contributing to SeniorGeek

Merci de votre intérêt pour SeniorGeek! Ce document explique comment contribuer au projet.

## 🎯 Nos Valeurs

- **Accessibilité** - Tous nos changements doivent respecter WCAG 2.1 Level AA
- **Simplicité** - Le code doit être clair et facile à comprendre
- **Performance** - Optimiser la vitesse et l'expérience utilisateur
- **Inclusivité** - Penser aux aînés et leurs besoins spécifiques

## 🚀 Comment Commencer

### 1. Forker le projet
```bash
git clone https://github.com/votre-username/seniorgeek-website.git
cd seniorgeek-website
```

### 2. Créer une branche
```bash
git checkout -b feature/votre-feature
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Lancer le serveur de développement
```bash
npm run dev
# Ouvrir http://localhost:4321
```

### 5. Faire vos changements
- Modifier le code
- Tester localement
- Vérifier l'accessibilité

### 6. Soumettre une Pull Request
```bash
git add .
git commit -m "type: description claire"
git push origin feature/votre-feature
```

## 📋 Types de Contributions

### 🐛 Bug Fixes
- Décrivez le bug en détail
- Incluez des étapes pour reproduire
- Fournissez des screenshots si possible

### ✨ Nouvelles Fonctionnalités
- Discutez d'abord via une Issue
- Assurez-vous de respecter le design
- Testez sur mobile et desktop

### 📚 Documentation
- Corrections de typos
- Amélioration de la clarté
- Nouveaux guides

### ♿ Accessibilité
- Tests WCAG 2.1
- Améliorations du contraste
- Navigation au clavier

## 🧪 Tests

Avant de soumettre, testez:

```bash
# Build
npm run build

# Tests d'accessibilité
npm run test:a11y

# Performance
npm run build && npm run preview
```

## 📝 Commit Messages

Format recommandé:
```
type(scope): description

feat(homepage): add mini-pricing section
fix(contact): improve form validation
docs(readme): update installation steps
style(css): improve button styling
test(accessibility): add WCAG tests
```

Types:
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage/styles
- `test:` Tests
- `perf:` Performance
- `refactor:` Refactoring

## 🎨 Style Guide

### Code
- Utiliser Tailwind CSS pour les styles
- Noms de variables en anglais
- Commentaires en français pour documentation
- 2 espaces d'indentation

### Accessibilité
- Toujours ajouter des labels aux formulaires
- Tester la navigation au clavier
- Vérifier le contraste des couleurs
- Utiliser des ARIA labels si nécessaire

### Performance
- Optimiser les images
- Minimiser les bundles
- Lazy load quand c'est possible
- Tester Lighthouse

## 🚫 Avant de Soumettre

- [ ] Code formaté correctement
- [ ] Pas d'erreurs de console
- [ ] Tests accessibilité passent
- [ ] Build réussit sans erreurs
- [ ] Documentation mise à jour
- [ ] Commit messages clairs

## ❓ Questions?

- Ouvrez une Issue
- Consultez la documentation
- Regardez les Pull Requests existantes

## 📜 License

En contribuant, vous acceptez que votre code soit sous license MIT.

---

**Merci de contribuer à SeniorGeek!** 🙏
