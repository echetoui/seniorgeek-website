# ⚡ Open Graph - Quick Start (5 minutes)

## 🎯 TL;DR

SeniorGeek a **17 balises Open Graph** qui se génèrent **automatiquement** pour tous les réseaux sociaux.

---

## 🚀 Comment Ça Marche

```astro
<BaseLayout
  title="Mon Titre"
  description="Ma description"
  image="https://seniorgeek.ca/image.png"
>
  <!-- Contenu -->
</BaseLayout>
```

✅ **Boom!** 17 tags OG générés automatiquement

---

## 📋 Les 17 Tags (Générés Automatiquement)

```html
<!-- Open Graph (9 tags) -->
og:type, og:title, og:description, og:image,
og:image:width, og:image:height, og:url,
og:site_name, og:locale

<!-- Twitter (6 tags) -->
twitter:card, twitter:title, twitter:description,
twitter:image, twitter:site, twitter:creator

<!-- Meta (2 tags) -->
author, publisher
```

---

## 🎨 3 Cas d'Usage

### **Cas 1: Utiliser les Défauts**
```astro
<BaseLayout>
  <!-- Contenu -->
</BaseLayout>
```
✅ Tous les tags OG par défaut

---

### **Cas 2: Personnaliser la Page**
```astro
<BaseLayout
  title="Titre Unique"
  description="Description unique"
  image="https://seniorgeek.ca/custom.png"
>
  <!-- Contenu -->
</BaseLayout>
```
✅ Tous les tags OG personnalisés

---

### **Cas 3: Utiliser Canon + Author**
```astro
<BaseLayout
  title="Titre"
  description="Description"
  image="https://seniorgeek.ca/image.png"
  canonical="https://seniorgeek.ca/page/"
  author="SeniorGeek Custom"
>
  <!-- Contenu -->
</BaseLayout>
```
✅ Tous les tags OG + canonical + author

---

## 📱 Réseau Sociaux Supportés

| Réseau | Support | Preview |
|--------|---------|---------|
| Facebook | ✅ | Titre + Image + Desc |
| Instagram | ✅ | Titre + Image + Desc |
| Twitter | ✅ | Twitter Card complet |
| LinkedIn | ✅ | Titre + Image + Desc |
| WhatsApp | ✅ | Titre + Image |
| Messenger | ✅ | Titre + Image |
| Discord | ✅ | Titre + Image |

---

## 🧪 Vérifier Rapidement

```bash
# Voir tous les tags OG
curl http://localhost:4321/ | grep "og:\|twitter:"

# Ou avec Facebook Debugger
# https://developers.facebook.com/tools/debug/
```

---

## 💡 Props Disponibles

```typescript
<BaseLayout
  title?      // Titre de page (défaut: SeniorGeek -...)
  description?// Description (défaut: Protéger et...)
  image?      // Image OG (défaut: logo-full.svg)
  canonical?  // URL canonique (optionnel)
  author?     // Auteur (défaut: SeniorGeek)
  noindex?    // Empêcher indexation (optionnel)
  nofollow?   // Empêcher follow (optionnel)
>
```

---

## 📖 Exemples par Type de Page

### **Homepage**
```astro
<BaseLayout
  title="SeniorGeek - Accompagnement numérique pour les aînés"
  description="Protéger et accompagner les aînés du Québec..."
>
```

### **Page Services**
```astro
<BaseLayout
  title="Services pour les aînés - SeniorGeek"
  description="Accompagnement personnalisé pour maîtriser..."
  image="https://seniorgeek.ca/assets/images/services.png"
>
```

### **Article Blog**
```astro
<BaseLayout
  title="Comment reconnaître une arnaque - SeniorGeek"
  description="Guide complet pour identifier les fraudes..."
  image="https://seniorgeek.ca/assets/images/fraud.png"
  author="SeniorGeek Blog"
>
```

---

## ✅ Checklist Simple

Pour chaque page:

```
⬜ Ajouter BaseLayout
⬜ Remplir title (unique et clair)
⬜ Remplir description (unique et pertinente)
⬜ Ajouter image (optionnel, ou utilise défaut)
✅ Prêt! (17 tags OG générés automatiquement)
```

---

## 🎯 Bonnes Pratiques

### **Titre**
- 50-60 caractères max
- Inclure la marque "SeniorGeek"
- Décrire la page

❌ Services
✅ Services pour les aînés - SeniorGeek

### **Description**
- 150-160 caractères
- Unique à chaque page
- Appel à l'action si possible

❌ Nous sommes SeniorGeek
✅ Apprenez à utiliser la technologie en confiance

### **Image**
- URL absolue (https://...)
- 1200x630px idéalement
- Clair et lisible

❌ /assets/logo.png
✅ https://seniorgeek.ca/assets/logo.png

---

## 🔗 Resources

- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/
- **Twitter Card Validator:** https://card-validator.twitter.com/

---

## 📚 Pour Aller Plus Loin

- **Détails techniques:** OPEN_GRAPH_SETUP.md
- **Guide complet:** OG_TAGS_REFERENCE.md
- **Vérification:** IMPLEMENTATION_CHECKLIST.md
- **Vue visuelle:** OPENGRAPH_SUMMARY.md
- **Index complet:** DOCUMENTATION_INDEX.md

---

## ✨ C'est tout!

Vous savez maintenant tout ce qu'il faut savoir pour utiliser les balises Open Graph de SeniorGeek.

**À retenir:**
1. Utilisez BaseLayout pour chaque page
2. Remplissez title + description personnalisés
3. Les 17 tags OG se génèrent automatiquement ✨

C'est vraiment aussi simple! 🚀

---

**Besoin d'aide?** → Consultez OG_TAGS_REFERENCE.md
**Vérifier?** → Utiliser Facebook Debugger
**Approfondir?** → Lire OPEN_GRAPH_SETUP.md
