# SeniorGeek - Accompagnement Numérique pour les Aînés

Bienvenue sur le site vitrine de **SeniorGeek**, une initiative québécoise dédiée à protéger et accompagner les aînés dans leur vie numérique.

## 🚀 À propos

SeniorGeek offre des services d'accompagnement personnalisés pour :
- **Les aînés** : Apprentissage technologique adapté et sécurité numérique
- **Les proches** : Conseils pour protéger les aînés de fraudes
- **Les résidences** : Programmes complets de prévention et formation

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/          # Header, Footer, Navigation, Logo
│   ├── widgets/         # Sections réutilisables (Hero, Services, CTA)
│   ├── ui/              # Composants atomiques (Button, Card, Badge)
│   └── blog/            # Composants pour blog
├── layouts/
│   ├── BaseLayout.astro # Layout principal avec Header/Footer
│   ├── PageLayout.astro # Layout pour pages avec hero
│   └── BlogLayout.astro # Layout pour articles
├── pages/
│   ├── index.astro      # Accueil
│   ├── services/        # Pages services
│   ├── blog/            # Pages blog
│   └── [routes]         # Autres pages principales
├── content/
│   ├── pages/           # Contenu des pages
│   └── post/            # Articles blog
├── navigation.js        # Configuration menu/footer
├── config.yaml          # Configuration globale
└── layouts.ts           # Schémas de contenu Astro
```

## 🎨 Design

Le site suit une approche **AstroWind** avec :
- **Tailwind CSS** pour les styles
- **Langage simple et clair** - Pas de jargon technique
- **Accessibilité** - Conçu pour les aînés
- **Responsive** - Fonctionne sur tous les appareils
- **Performance** - Optimisé pour vitesse

## 🛠 Développement

### Installation

```bash
npm install
# ou
yarn install
```

### Démarrage du serveur de développement

```bash
npm run dev
```

Le site sera disponible à `http://localhost:3000`

### Build pour production

```bash
npm run build
```

### Preview du site en production

```bash
npm run preview
```

## 📄 Pages principales

- `/` - Accueil avec hero et overview services
- `/services/` - Vue d'ensemble des services
- `/services/aines` - Services pour aînés
- `/services/proches` - Services pour proches
- `/services/residences` - Services pour résidences
- `/fraudes/` - Guide de reconnaissance des arnaques
- `/urgence-numerique/` - Services d'urgence
- `/tarifs/` - Tarification
- `/qui-sommes-nous/` - Qui sommes-nous
- `/nos-valeurs/` - Nos valeurs
- `/a-propos/` - À propos
- `/partenariat/` - Devenir partenaire
- `/contact/` - Formulaire de contact
- `/blog/` - Index des articles
- `/blog/[slug]/` - Articles individuels

## 🎯 Composants réutilisables

### Widgets
- `<Hero />` - Section bannière d'accueil
- `<Services />` - Grille de services
- `<WhoWeSolve />` - Section "Pour qui"
- `<WhyChooseUs />` - Section valeurs
- `<Testimonials />` - Témoignages
- `<CallToAction />` - Appels à l'action
- `<Pricing />` - Tableau de tarification
- `<FAQ />` - Questions fréquentes

### UI
- `<Button />` - Boutons (primary, secondary, outline)
- `<Card />` - Cartes réutilisables
- `<Badge />` - Badges de catégorie
- `<Icon />` - Système d'icônes

## 🎓 Contenu

### Langage et ton
- ✅ Simple et clair, sans jargon
- ✅ Adapté aux aînés
- ✅ Bienveillant et non condescendant
- ✅ Court et facile à comprendre
- ❌ Pas de gras excessif
- ❌ Pas de tirets énumérés

### SEO
- Titres et descriptions optimisés
- Structure HTML sémantique
- Meta tags (OG, Twitter)
- Sitemap et robots.txt

## 📱 Responsive

Le site est entièrement responsive avec breakpoints :
- Mobile : < 640px
- Tablette : 640px - 1024px
- Desktop : > 1024px

## 🔧 Configuration

### `config.yaml`
Configuration globale du site (URL, branding, contacts)

### `navigation.js`
Menu principal et liens footer

### `astro.config.mjs`
Configuration Astro (adapter, integrations, build)

## 📋 Checklist développement

- [x] Structure des fichiers créée
- [x] Composants réutilisables développés
- [x] Layouts créés (Base, Page, Blog)
- [x] Pages principales créées
- [x] Articles blog créés
- [x] Configuration globale
- [x] Navigation et routing
- [ ] Images et assets (à ajouter)
- [ ] Formulaires de contact (à brancher)
- [ ] Analytics (à configurer)
- [ ] Sitemap dynamique
- [ ] Métadonnées canoniques

## 🚀 Déploiement

Le site peut être déployé sur :
- Netlify
- Vercel
- GitHub Pages
- Tout serveur compatible avec site statique

## 📞 Contact

Pour plus d'informations :
- Téléphone : +1 (514) XXX-XXXX
- Email : contact@seniorgeek.ca

## 📄 Licence

MIT

---

**Fait avec amour pour les aînés du Québec** 💙
