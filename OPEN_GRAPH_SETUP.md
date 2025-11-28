# Balises Open Graph - SeniorGeek

## 📋 Vue d'ensemble

Les balises Open Graph (OG) permettent à SeniorGeek d'optimiser l'apparence du site lorsqu'il est partagé sur les réseaux sociaux (Facebook, LinkedIn, Twitter, WhatsApp, etc.) et dans les previews de liens.

---

## ✅ Balises Open Graph Implémentées

### **Balises Principales**

```html
<!-- Type de contenu -->
<meta property="og:type" content="website" />

<!-- Titre du contenu -->
<meta property="og:title" content="SeniorGeek - Accompagnement numérique pour les aînés" />

<!-- Description -->
<meta property="og:description" content="Protéger et accompagner les aînés du Québec dans leur vie numérique" />

<!-- Image de partage (obligatoire pour bonne expérience) -->
<meta property="og:image" content="https://seniorgeek.ca/logo-full.svg" />

<!-- Dimensions de l'image OG -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- URL de la page -->
<meta property="og:url" content="https://seniorgeek.ca" />

<!-- Nom du site -->
<meta property="og:site_name" content="SeniorGeek" />

<!-- Locale (langue et région) -->
<meta property="og:locale" content="fr_CA" />
```

### **Balises Twitter Card**

```html
<!-- Format de la carte Twitter -->
<meta property="twitter:card" content="summary_large_image" />

<!-- Titre Twitter -->
<meta property="twitter:title" content="SeniorGeek - Accompagnement numérique pour les aînés" />

<!-- Description Twitter -->
<meta property="twitter:description" content="Protéger et accompagner les aînés du Québec dans leur vie numérique" />

<!-- Image Twitter -->
<meta property="twitter:image" content="https://seniorgeek.ca/logo-full.svg" />

<!-- Compte Twitter officiel -->
<meta property="twitter:site" content="@SeniorGeekCA" />

<!-- Créateur du contenu -->
<meta property="twitter:creator" content="@SeniorGeekCA" />
```

### **Balises Additionnelles**

```html
<!-- Auteur du contenu -->
<meta name="author" content="SeniorGeek" />

<!-- Auteur article (pour blog) -->
<meta property="article:author" content="SeniorGeek" />

<!-- Éditeur/Producteur -->
<meta name="publisher" content="SeniorGeek" />
```

---

## 🔧 Configuration par Page

### **BaseLayout (Défaut)**
Tous les sites utilisent ces valeurs par défaut s'ils ne les surchargent pas :

```astro
const {
  title = 'SeniorGeek - Accompagnement numérique pour les aînés',
  description = 'Protéger et accompagner les aînés du Québec dans leur vie numérique',
  image = 'https://seniorgeek.ca/logo-full.svg',
  author = 'SeniorGeek',
} = Astro.props;
```

### **Exemple : Personnaliser pour une Page**

```astro
<BaseLayout
  title="Services pour les aînés"
  description="Accompagnement personnalisé pour maîtriser la technologie"
  image="https://seniorgeek.ca/assets/images/service-group-learning.png"
  author="SeniorGeek - Accompagnement"
>
  <!-- Contenu de la page -->
</BaseLayout>
```

---

## 📊 Propriétés OG Expliquées

| Propriété | Usage | Format | Exemple |
|-----------|-------|--------|---------|
| `og:type` | Type de contenu | website, article, etc. | website |
| `og:title` | Titre du contenu | Texte (55-60 caractères) | SeniorGeek - Accompagnement numérique pour les aînés |
| `og:description` | Description du contenu | Texte (150-160 caractères) | Protéger et accompagner les aînés... |
| `og:image` | Image de partage | URL absolue | https://seniorgeek.ca/logo-full.svg |
| `og:image:width` | Largeur image OG | Pixel (recommandé: 1200) | 1200 |
| `og:image:height` | Hauteur image OG | Pixel (recommandé: 630) | 630 |
| `og:url` | URL canonique | URL absolue | https://seniorgeek.ca/services/aines/ |
| `og:site_name` | Nom du site | Texte court | SeniorGeek |
| `og:locale` | Langue et région | Code BCP 47 | fr_CA, en_US, fr_FR |

---

## 🎨 Image OG - Recommandations

### **Dimensions Idéales**
- **Largeur:** 1200px
- **Hauteur:** 630px
- **Ratio:** 1.91:1 (landscape)
- **Format:** JPG, PNG, GIF, WebP
- **Taille:** < 5MB

### **Bonnes Pratiques**
- ✅ Logo clair et visible
- ✅ Couleurs du brand (bleu SeniorGeek)
- ✅ Texte lisible en petit
- ✅ Sans transparence (utiliser fond blanc)
- ✅ Test avec Facebook Sharing Debugger

### **Fichier Utilisé**
- **Défaut:** `/public/logo-full.svg`
- **URLs Absolues:** `https://seniorgeek.ca/logo-full.svg`

---

## 🔗 Locale Alternatives

Pour support multilingue, ajouter d'autres locales :

```astro
<!-- Versions alternatives (meta alternate) -->
<link rel="alternate" hrefLang="fr-CA" href="https://seniorgeek.ca/" />
<link rel="alternate" hrefLang="en-CA" href="https://seniorgeek.ca/en/" />
<link rel="alternate" hrefLang="x-default" href="https://seniorgeek.ca/" />
```

---

## 🐦 Twitter Card Types

### **Summary Large Image** (Utilisé)
```html
<meta name="twitter:card" content="summary_large_image" />
```
- Format: Image grande (280x150px minimum)
- Idéal pour: Pages principales, articles
- Affichage: Titre + description + grande image

### **Alternatives**
```html
<!-- Summary (petit) -->
<meta name="twitter:card" content="summary" />

<!-- Player (pour vidéos) -->
<meta name="twitter:card" content="player" />

<!-- App -->
<meta name="twitter:card" content="app" />
```

---

## ✔️ Vérification et Test

### **1. Facebook Sharing Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Entrer l'URL du site
- Voir le rendu OG du partage
- Forcer un rafraîchissement du cache

### **2. Twitter Card Validator**
- URL: https://card-validator.twitter.com/
- Entrer l'URL du site
- Vérifier le rendu Twitter Card

### **3. LinkedIn Inspector**
- URL: https://www.linkedin.com/feed/
- Copier/coller le lien
- Vérifier l'aperçu généré

### **4. LinkedIn Post Inspector**
- URL: https://www.linkedin.com/post-inspector/
- Entrer l'URL
- Voir le rendu du post

### **5. WhatsApp Preview**
- Partager le lien dans WhatsApp Web
- Voir le preview généré avec titre + image

---

## 📝 Checklist Implementation

- ✅ BaseLayout configuré avec OG tags
- ✅ Image par défaut (logo-full.svg)
- ✅ Locale française (fr_CA)
- ✅ Propriété og:url dynamique
- ✅ Twitter Card configuration
- ✅ Author meta tags
- ✅ og:image avec dimensions

### **À Faire (Optionnel)**
- ⏳ Créer une image OG spécialisée (1200x630px) pour meilleure impact visuel
- ⏳ Ajouter article:published_time et article:modified_time pour blog
- ⏳ Implémenter Schema.org (JSON-LD) pour structured data
- ⏳ Tester avec SEO tools (Screaming Frog, Semrush)

---

## 📚 Ressources

- [Open Graph Protocol Docs](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Astro Meta Tags Docs](https://docs.astro.build/en/guides/integrations/integrations/)

---

## 🎯 Exemple Complet en Astro

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Services pour les aînés - SeniorGeek"
  description="Accompagnement personnalisé pour maîtriser la technologie en toute confiance et sécurité"
  image="https://seniorgeek.ca/assets/images/service-group-learning.png"
  canonical="https://seniorgeek.ca/services/aines/"
  author="SeniorGeek"
>
  <!-- Contenu de la page -->
</BaseLayout>
```

Cela génère automatiquement tous les tags OG correspondants! 🚀

---

**Version:** 1.0
**Date:** 27 novembre 2024
**Statut:** ✅ Déployé et actif
