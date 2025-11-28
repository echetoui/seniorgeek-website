# Structure du Projet SeniorGeek

## 📊 Vue d'ensemble

Projet Astro complet pour site vitrine de **SeniorGeek** - accompagnement numérique pour aînés du Québec.

**Total:** 47 fichiers | **Composants:** 17 | **Pages:** 16 | **Assets:** 0 (à ajouter)

---

## 📁 Hiérarchie des fichiers

```
SeniorGeek/
├── 📄 Package & Config
│   ├── package.json              # Dépendances npm
│   ├── astro.config.mjs          # Configuration Astro
│   ├── tsconfig.json             # Configuration TypeScript
│   ├── tailwind.config.js        # Configuration Tailwind CSS
│   ├── .gitignore                # Fichiers à ignorer Git
│   ├── .env.example              # Variables d'environnement
│   └── README.md                 # Documentation générale
│
├── 📚 Documentation
│   ├── DEVELOPMENT.md            # Guide de développement
│   └── STRUCTURE.md              # Cette file (structure détaillée)
│
└── src/                          # Code source
    ├── components/               # Composants réutilisables
    │   ├── common/              # En-tête, pied de page
    │   │   ├── Header.astro
    │   │   ├── Footer.astro
    │   │   ├── Navigation.astro
    │   │   └── Logo.astro
    │   │
    │   ├── widgets/             # Sections de page
    │   │   ├── Hero.astro
    │   │   ├── Services.astro
    │   │   ├── WhoWeSolve.astro
    │   │   ├── WhyChooseUs.astro
    │   │   ├── CallToAction.astro
    │   │   ├── Testimonials.astro
    │   │   ├── Pricing.astro
    │   │   └── FAQ.astro
    │   │
    │   ├── ui/                 # Composants atomiques
    │   │   ├── Button.astro
    │   │   ├── Card.astro
    │   │   ├── Badge.astro
    │   │   └── Icon.astro
    │   │
    │   └── blog/               # Composants blog
    │       └── BlogCard.astro
    │
    ├── layouts/                # Templates de page
    │   ├── BaseLayout.astro    # Layout principal
    │   ├── PageLayout.astro    # Layout avec hero
    │   └── BlogLayout.astro    # Layout pour articles
    │
    ├── pages/                  # Routes du site
    │   ├── index.astro         # Accueil
    │   ├── qui-sommes-nous.astro
    │   ├── nos-valeurs.astro
    │   ├── a-propos.astro
    │   ├── partenariat.astro
    │   ├── contact.astro
    │   ├── tarifs.astro
    │   ├── fraudes.astro
    │   ├── urgence-numerique.astro
    │   ├── robots.txt.ts       # Robots.txt dynamique
    │   ├── [..404].astro       # Page 404
    │   │
    │   ├── services/           # Pages services
    │   │   ├── index.astro
    │   │   ├── aines.astro
    │   │   ├── proches.astro
    │   │   └── residences.astro
    │   │
    │   └── blog/               # Pages blog
    │       ├── index.astro
    │       └── reconnaitre-faux-appel-urgence.astro
    │
    ├── styles/                 # Feuilles de style
    │   └── global.css          # CSS global + Tailwind
    │
    ├── utils/                  # Fonctions utilitaires
    │   └── helpers.ts
    │
    ├── config.yaml             # Configuration globale
    ├── navigation.js           # Menu et navigation
    └── layouts.ts              # Schémas de contenu Astro
```

---

## 🧩 Composants

### Common Components (4)
| Composant | Rôle | Props |
|-----------|------|-------|
| `Header` | Barre de navigation | `isSticky` |
| `Footer` | Pied de page | Aucune |
| `Navigation` | Menu principal | Aucune |
| `Logo` | Logo SeniorGeek | `class` |

### Widgets (8)
| Composant | Rôle | Usage |
|-----------|------|-------|
| `Hero` | Bannière principale | Accueil |
| `Services` | Grille de services | Accueil, Services |
| `WhoWeSolve` | Section "Pour qui" | Accueil |
| `WhyChooseUs` | Section valeurs | Accueil |
| `CallToAction` | Appels à l'action | Partout |
| `Testimonials` | Témoignages clients | Accueil |
| `Pricing` | Table de tarification | Tarifs |
| `FAQ` | Questions fréquentes | Support |

### UI Components (4)
| Composant | Rôle | Types |
|-----------|------|-------|
| `Button` | Boutons | primary, secondary, outline |
| `Card` | Cartes conteneur | Flexible |
| `Badge` | Badges étiquettes | primary, success, warning, info |
| `Icon` | Système d'icônes | Extensible |

### Blog (1)
| Composant | Rôle |
|-----------|------|
| `BlogCard` | Carte article blog |

---

## 📄 Pages et Routes

### Pages principales
| Route | Titre | Composants |
|-------|-------|-----------|
| `/` | Accueil | Hero, Services, WhoWeSolve, WhyChooseUs, Testimonials, CTA |
| `/services/` | Vue services | Services, CTA |
| `/services/aines` | Services aînés | PageLayout, Services, CTA |
| `/services/proches` | Services proches | PageLayout, Services, CTA |
| `/services/residences` | Services résidences | PageLayout, Services, CTA |
| `/qui-sommes-nous` | Qui sommes-nous | PageLayout, Card, CTA |
| `/nos-valeurs` | Nos valeurs | PageLayout, Card, CTA |
| `/a-propos` | À propos | PageLayout, CTA |
| `/partenariat` | Partenariat | PageLayout, Card, CTA |
| `/contact` | Contact | PageLayout, Card, Form |
| `/tarifs` | Tarification | PageLayout, Pricing, CTA |
| `/fraudes` | Fraudes | PageLayout, Custom content |
| `/urgence-numerique` | Urgence | PageLayout, Card, CTA |

### Pages blog
| Route | Titre |
|-------|-------|
| `/blog/` | Index articles |
| `/blog/reconnaitre-faux-appel-urgence` | Article exemple |

### Pages système
| Route | Titre |
|-------|-------|
| `/[...404]` | Page 404 |
| `/robots.txt` | Robots.txt dynamique |

---

## 🎨 Design System

### Couleurs
```css
--color-primary: #2563eb      (Bleu)
--color-primary-dark: #1e40af (Bleu foncé)
--color-gray-900: #111827     (Texte)
--color-gray-700: #374151     (Texte secondaire)
```

### Typography
- **Font Family:** Inter, -apple-system, BlinkMacSystemFont
- **H1:** 4xl (3rem) lg:5xl
- **H2:** 3xl (1.875rem) lg:4xl
- **H3:** 2xl (1.5rem) lg:3xl
- **Body:** base (1rem)

### Spacing
- Secteurs : `py-16 lg:py-24`
- Conteneurs : `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grilles : `gap-6 md:grid-cols-2 lg:grid-cols-3`

### Responsive Breakpoints
- `xs`: 320px
- `sm`: 640px (mobile)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large)
- `2xl`: 1536px (x-large)

---

## 🚀 Configuration

### astro.config.mjs
- Build: assets → `assets/`
- Markdown: Shiki syntax highlighting
- Output: static
- Site: https://seniorgeek.ca

### tailwind.config.js
- Content: `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- Thème: Couleurs primaires étendues
- Plugins: Aucun

### tsconfig.json
- Extends: astro/tsconfigs/strict
- Target: ES2020
- Path aliases: @/*

### package.json
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

---

## 📝 Contenu

### Types de contenu
1. **Contenu vitrine** - Pages statiques (Services, À propos)
2. **Contenu éducatif** - Articles blog (Fraudes, Conseils)
3. **Contenu commercial** - CTA, Tarifs, Contact
4. **Contenu informatif** - FAQ, Urgence

### Langage et ton
✅ Simple, sans jargon
✅ Adapté aux aînés
✅ Bienveillant
✅ Court et clair

❌ Pas de gras excessif
❌ Pas de tirets énumérés

---

## 🔧 Utilitaires

### helpers.ts
- `formatDate()` - Format date en français
- `generateSlug()` - Créer URL slug
- `estimateReadTime()` - Temps de lecture
- `getInitials()` - Initiales d'un nom
- `truncate()` - Tronquer texte
- `isExternalUrl()` - Vérifier URL
- `cn()` - Combiner classes CSS
- `getCurrentYear()` - Année actuelle
- `formatPhoneNumber()` - Formater téléphone

---

## 📊 Statistiques

### Fichiers
- **Total:** 47
- **Astro:** 23
- **TypeScript/JavaScript:** 6
- **Configuration:** 5
- **Styles:** 1
- **Documentation:** 2
- **Autres:** 10

### Lignes de code
- Estimé: ~3500+ lignes
- Composants: ~1200 lignes
- Pages: ~1800 lignes
- Config: ~500 lignes

### Pages
- **Total:** 16 pages
- **Services:** 4 pages
- **Blog:** 2 pages
- **Utilitaires:** 2 pages
- **Principales:** 8 pages

---

## 🎯 À faire avant production

### Images & Assets
- [ ] Ajouter logo SeniorGeek
- [ ] Ajouter images articles blog
- [ ] Ajouter images hero sections
- [ ] Ajouter favicons
- [ ] Optimiser images (WebP, srcset)

### Contenu
- [ ] Ajouter plus d'articles blog
- [ ] Formules de tarification finales
- [ ] Témoignages réels de clients
- [ ] Photos de l'équipe
- [ ] Images pour sections

### Fonctionnalités
- [ ] Intégrer formulaires de contact
- [ ] Ajouter analytics (Google, Hotjar)
- [ ] Configurer email notifications
- [ ] Ajouter newsletter signup
- [ ] Mettre en place live chat

### SEO & Performance
- [ ] Créer sitemap.xml
- [ ] Ajouter canonical URLs
- [ ] Optim images
- [ ] Test Lighthouse
- [ ] Vérifier Core Web Vitals

### Deployment
- [ ] Configurer domaine
- [ ] SSL certificate
- [ ] CDN configuration
- [ ] Email setup
- [ ] Backup strategy

---

## 🚀 Next Steps

1. **Développement local**
   ```bash
   npm install
   npm run dev
   ```

2. **Ajouter images**
   - Créer `/public/images/`
   - Ajouter assets

3. **Peaufiner contenu**
   - Articles blog supplémentaires
   - Témoignages
   - Cas d'usage

4. **Configuration production**
   - Variables d'environnement
   - Analytics
   - Form backend

5. **Déployement**
   - Netlify ou Vercel
   - Custom domain
   - SSL

---

## 📚 Ressources

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [AstroWind Template](https://github.com/arthelokyo/astrowind)

---

**Créé pour les aînés du Québec avec ❤️**
