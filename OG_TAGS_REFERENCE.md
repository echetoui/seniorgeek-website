# Référence Rapide - Balises Open Graph

## 🎯 Utilisation Simple

### **Cas 1: Utiliser les valeurs par défaut**
```astro
<BaseLayout>
  <!-- Contenu -->
</BaseLayout>
```
Résultat: Utilise tous les tags OG par défaut

---

### **Cas 2: Personnaliser pour une page**
```astro
<BaseLayout
  title="Mon Titre Personnalisé"
  description="Ma description unique"
  image="https://seniorgeek.ca/assets/images/custom-image.png"
>
  <!-- Contenu -->
</BaseLayout>
```
Résultat: Tous les tags OG s'adaptent automatiquement

---

## 📊 Tags Générés Automatiquement

Chaque page génère automatiquement ces 15 balises meta:

```html
<!-- Titre du site -->
<title>SeniorGeek - Accompagnement numérique pour les aînés</title>

<!-- Description -->
<meta name="description" content="Protéger et accompagner les aînés du Québec..." />

<!-- ========== Open Graph ========== -->
<meta property="og:type" content="website" />
<meta property="og:title" content="SeniorGeek - Accompagnement numérique pour les aînés" />
<meta property="og:description" content="Protéger et accompagner les aînés du Québec..." />
<meta property="og:image" content="https://seniorgeek.ca/logo-full.svg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="http://localhost:4321/" />
<meta property="og:site_name" content="SeniorGeek" />
<meta property="og:locale" content="fr_CA" />

<!-- ========== Twitter Card ========== -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="SeniorGeek - Accompagnement numérique pour les aînés" />
<meta property="twitter:description" content="Protéger et accompagner les aînés du Québec..." />
<meta property="twitter:image" content="https://seniorgeek.ca/logo-full.svg" />
<meta property="twitter:site" content="@SeniorGeekCA" />
<meta property="twitter:creator" content="@SeniorGeekCA" />

<!-- ========== Auteur ========== -->
<meta name="author" content="SeniorGeek" />
<meta property="article:author" content="SeniorGeek" />
<meta name="publisher" content="SeniorGeek" />
```

---

## 🚀 Quand les Tags OG Sont Utilisés

### **Facebook & Instagram**
- ✅ Lorsqu'on partage un lien
- ✅ Lorsqu'on utilise le Facebook Debugger
- ✅ Lorsqu'on utilise OpenGraph.io

### **Twitter / X**
- ✅ Lorsqu'on tweet un lien
- ✅ Lorsqu'on utilise Tweetdeck
- ✅ Lorsqu'on partage avec Twitter Card

### **LinkedIn**
- ✅ Lorsqu'on partage un lien
- ✅ Affichage automatique dans les posts

### **WhatsApp / Messenger**
- ✅ Lorsqu'on partage le lien
- ✅ Preview automatique du titre + image

### **Discord / Slack**
- ✅ Lorsqu'on poste le lien dans un canal
- ✅ Affichage du titre + image + description

### **Outils SEO**
- ✅ Semrush, Ahrefs, Screaming Frog
- ✅ Vérification des meta tags

---

## 🧪 Comment Tester

### **Étape 1: Partager sur Facebook**
1. Aller sur facebook.com
2. Créer un post
3. Coller le lien de SeniorGeek
4. Voir le preview généré

### **Étape 2: Utiliser Facebook Debugger**
1. Aller à https://developers.facebook.com/tools/debug/
2. Entrer une URL du site
3. Cliquer "Debugger URL"
4. Voir le rendu OG généré

### **Étape 3: Tester Twitter Card**
1. Aller à https://card-validator.twitter.com/
2. Entrer l'URL du site
3. Vérifier le rendu Twitter Card

### **Étape 4: Tester LinkedIn**
1. Aller à https://www.linkedin.com/post-inspector/
2. Entrer l'URL du site
3. Voir le preview LinkedIn

### **Étape 5: Tester WhatsApp**
1. Ouvrir WhatsApp Web ou mobile
2. Partager le lien dans un chat
3. Voir le preview généré

---

## 📋 Propriétés Props de BaseLayout

```astro
interface Props {
  title?: string;              // Titre de la page (par défaut défini)
  description?: string;        // Description (par défaut défini)
  image?: string;             // URL absolue de l'image OG
  canonical?: string;         // URL canonique pour og:url
  noindex?: boolean;          // Ajouter noindex robots si true
  nofollow?: boolean;         // Ajouter nofollow robots si true
  author?: string;            // Auteur du contenu
}
```

---

## ✨ Bonnes Pratiques

### **Título**
- ✅ 50-60 caractères maximum
- ✅ Inclure la marque "SeniorGeek"
- ✅ Description pertinente

```
❌ Mauvais:  Services
✅ Bon:      SeniorGeek - Services pour les aînés
```

### **Description**
- ✅ 150-160 caractères
- ✅ Appel à l'action ou bénéfice
- ✅ Unique pour chaque page

```
❌ Mauvais:  Nous sommes SeniorGeek
✅ Bon:      Apprenez à utiliser la technologie en toute confiance
```

### **Image**
- ✅ 1200x630px minimum
- ✅ Logo clair et visible
- ✅ URL absolue (commence par https://)
- ✅ Pas de transparence

```
❌ Mauvais:  /assets/images/logo.png
✅ Bon:      https://seniorgeek.ca/assets/images/hero.png
```

---

## 🎨 Personnalisation par Type de Page

### **Homepage**
```astro
<BaseLayout
  title="SeniorGeek - Accompagnement numérique pour les aînés"
  description="Protéger et accompagner les aînés du Québec..."
  image="https://seniorgeek.ca/logo-full.svg"
>
```

### **Page Services**
```astro
<BaseLayout
  title="Services pour les aînés - SeniorGeek"
  description="Accompagnement personnalisé pour maîtriser la technologie..."
  image="https://seniorgeek.ca/assets/images/service-group-learning.png"
  author="SeniorGeek - Services"
>
```

### **Article Blog**
```astro
<BaseLayout
  title="Comment reconnaître une arnaque - SeniorGeek"
  description="Guide complet pour identifier les fraudes numériques..."
  image="https://seniorgeek.ca/assets/images/blog-fraud-detection.png"
  author="SeniorGeek Blog"
>
```

---

## 📱 Locale Disponibles

L'actuelle configuration utilise: `fr_CA` (Français Canada)

Pour changer de locale, modifier dans BaseLayout:
```astro
<meta property="og:locale" content="fr_CA" />
```

**Autres locales:**
- `fr_FR` - Français France
- `en_US` - Anglais USA
- `en_CA` - Anglais Canada
- `es_ES` - Espagnol

---

## 🔄 URL Dynamique (og:url)

La propriété `og:url` s'adapte automatiquement:

```astro
const ogUrl = canonical || Astro.url.href;
```

- Si `canonical` est fourni → utilise celui-ci
- Sinon → utilise l'URL actuelle de la page

---

## ⚠️ Points à Retenir

1. **Tous les tags OG sont générés automatiquement** depuis BaseLayout
2. **Les valeurs par défaut s'appliquent** si rien n'est spécifié
3. **Les images doivent être des URLs absolues** (commençant par https://)
4. **Les dimensions idéales sont 1200x630px** (ratio 1.91:1)
5. **Les tests sont gratuits** sur Facebook Debugger et LinkedIn Inspector

---

## 🎓 Exemple Complet

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Services pour les proches - SeniorGeek"
  description="Protégez vos aînés avec nos services de vérification et conseils personnalisés"
  image="https://seniorgeek.ca/assets/images/service-family-support.png"
  canonical="https://seniorgeek.ca/services/proches/"
  author="SeniorGeek - Services Proches"
>
  <section>
    <h1>Services pour les proches</h1>
    <!-- Contenu de la page -->
  </section>
</BaseLayout>
```

Cela génère automatiquement tous les tags OG optimisés! 🚀

---

**Créé:** 27 novembre 2024
**Version:** 1.0
**Statut:** ✅ Production Ready
