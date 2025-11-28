# Deployment Guide - Vercel

Ce document explique comment le site SeniorGeek est déployé sur Vercel.

## 🚀 Architecture Déploiement

```
GitHub Repository (Main Branch)
         ↓
    Webhook GitHub
         ↓
   Vercel Build Server
         ↓
   Build & Test
         ↓
   Deploy to Vercel
         ↓
   Live at seniorgeek.ca
```

## 📋 Processus de Déploiement

### 1. **Développement Local**
```bash
npm run dev
# Tester à http://localhost:4321
```

### 2. **Commit et Push sur GitHub**
```bash
git add .
git commit -m "feat: add new feature"
git push origin feature-branch
```

### 3. **Créer une Pull Request**
- Ouvrir une PR sur GitHub
- Description claire des changements
- Vérifier les checks automatiques

### 4. **Review et Merge**
- Code review
- Approvals reçues
- Merge dans `main`

### 5. **Vercel Deploy Automatique**
- Webhook déclenche le build
- Vercel construit le projet
- Tests exécutés
- Site déployé en production

## 🔧 Configuration Vercel

### Connexion Vercel à GitHub
1. Aller sur https://vercel.com
2. Connecter votre compte GitHub
3. Importer le repository `seniorgeek-website`
4. Vercel détecte automatiquement Astro

### Variables d'Environnement
```
Production:
- NODE_ENV = production
- PUBLIC_SITE_URL = https://seniorgeek.ca

Preview/Development:
- NODE_ENV = development
```

### Domaine Personnalisé
1. Aller sur Vercel Project Settings
2. Domains
3. Ajouter votre domaine
4. Configurer les DNS records

## 📊 Build Settings (Vercel)

```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## ✅ Pré-Déploiement Checklist

Avant de merger dans `main`:

- [ ] Code testé localement
- [ ] Pas d'erreurs de build
- [ ] Tests passent
- [ ] Lighthouse scores OK
- [ ] Accessibilité vérifiée
- [ ] Images optimisées
- [ ] Pas de console errors

## 🔒 Sécurité

### Headers Sécurité (vercel.json)
```json
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
```

### Cache Control
```
- Pages HTML: 1 heure
- Assets (/assets/*): 1 an (immutable)
```

## 📈 Monitoring Déploiement

### Vercel Dashboard
- Real-time build logs
- Deployment history
- Performance analytics
- Error tracking

### GitHub Integration
- Check runs on PRs
- Deployment status
- Preview URLs
- Automatic rollbacks

## 🔄 Workflow Déploiement

### Feature Development
```bash
# 1. Créer une branche
git checkout -b feature/ma-feature

# 2. Développer et tester
npm run dev
# Tester à http://localhost:4321

# 3. Commit et push
git add .
git commit -m "feat: description"
git push origin feature/ma-feature

# 4. Créer une PR sur GitHub
# Vercel crée une Preview URL automatiquement

# 5. Vérifier le preview
# URL: https://seniorgeek-website-[hash].vercel.app

# 6. Merge dans main
git checkout main
git pull origin main
git merge feature/ma-feature
git push origin main

# 7. Vercel déploie automatiquement en production
```

## 📱 Preview Deployments

Chaque PR reçoit une URL preview unique:
```
https://seniorgeek-website-[git-branch-name].vercel.app
```

Voir les changements avant le merge:
- Partagez la preview URL
- Testez sur tous les appareils
- Vérifiez l'accessibilité
- Testez les formulaires

## 🚨 Rollback

Si un déploiement échoue:
1. Vercel roll back automatiquement
2. Vérifier les logs de build
3. Fixer les erreurs
4. Faire un nouveau commit
5. Redéploiement automatique

## 📊 Performance

### Lighthouse Checks
- Performance > 90
- Accessibility = 100
- Best Practices > 90
- SEO > 95

### Core Web Vitals
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

## 🔗 URLs

### Production
```
https://seniorgeek.ca
```

### Vercel Dashboard
```
https://vercel.com/echetoui/seniorgeek-website
```

### GitHub Repository
```
https://github.com/echetoui/seniorgeek-website
```

## 📝 Logs et Debugging

### Voir les logs de build
1. Aller sur Vercel Dashboard
2. Project → Deployments
3. Cliquer sur le déploiement
4. Voir les logs en détail

### Logs locaux
```bash
npm run build
# Erreurs visibles directement
```

## ✨ Best Practices

1. **Commits Petits et Logiques**
   - Une feature par PR
   - Messages clairs
   - Facilite les reviews

2. **Tester Avant Push**
   ```bash
   npm run build
   npm run preview
   # Tester la build de production localement
   ```

3. **Vérifier les Preview URLs**
   - Chaque PR a une URL preview
   - Testez avant de merger

4. **Monitorer la Production**
   - Vérifier les analytics
   - Alertes de erreurs
   - Performance metrics

## 🆘 Troubleshooting

### Build Failure
```
1. Vérifier les logs Vercel
2. Reproduire localement: npm run build
3. Fixer les erreurs
4. Push de nouveau
```

### Performance Issues
```
1. Analyser avec Lighthouse
2. Vérifier les images
3. Optimiser le JavaScript
4. Tester avec le throttling
```

### Deployment Stuck
```
1. Annuler le déploiement
2. Vérifier les logs
3. Faire un nouveau push
```

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Astro Docs**: https://docs.astro.build
- **GitHub Issues**: Pour les bugs

---

**Last Updated**: 28 novembre 2025
**Deployment Status**: ✅ Ready for Production
