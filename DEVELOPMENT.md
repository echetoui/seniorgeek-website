# Guide de développement - SeniorGeek

## Pour commencer

### 1. Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
```

### 2. Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera disponible à `http://localhost:3000`

## Architecture

### Astro 4.0+

SeniorGeek utilise **Astro** pour :
- Génération de sites statiques ultra-rapides
- Composants réutilisables en `.astro`
- Support natif de Markdown/MDX
- Optimisation automatique des images
- Zero JavaScript par défaut

### Structure des fichiers

```
src/
├── components/       # Composants réutilisables
├── layouts/         # Templates de page
├── pages/          # Routes et pages
├── styles/         # CSS global et Tailwind
├── utils/          # Fonctions utilitaires
├── navigation.js   # Config menu/footer
├── config.yaml     # Config globale
└── layouts.ts      # Schémas Astro
```

## Composants

### Créer un nouveau composant

```astro
---
// components/widgets/MyComponent.astro
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<section class="py-16 lg:py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900">{title}</h2>
    {description && <p class="text-gray-700">{description}</p>}
    <slot />
  </div>
</section>
```

### Utiliser un composant

```astro
---
import MyComponent from '../components/widgets/MyComponent.astro';
---

<MyComponent title="Mon titre" description="Ma description">
  <p>Contenu supplémentaire</p>
</MyComponent>
```

## Pages

### Créer une nouvelle page

```astro
---
// pages/ma-page.astro
import PageLayout from '../layouts/PageLayout.astro';

export const prerender = true;
---

<PageLayout
  title="Ma Page"
  description="Description de ma page"
  heroTitle="Ma Page"
  heroSubtitle="Sous-titre de la page"
>
  <section>
    <h2>Contenu</h2>
  </section>
</PageLayout>
```

### Routes dynamiques

Les routes dynamiques utilisent la convention `[param].astro` :

```
pages/blog/[slug].astro      → /blog/mon-article
pages/services/[type].astro  → /services/aines
```

## Styles

### Tailwind CSS

SeniorGeek utilise **Tailwind CSS** pour les styles. Les utilitaires sont configurés dans `tailwind.config.js`.

### Exemple

```astro
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Cliquez-moi
</button>
```

### Variables personnalisées

```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
}
```

## SEO et Métadonnées

### BaseLayout

Toutes les métadonnées doivent passer par `BaseLayout` :

```astro
<BaseLayout
  title="Titre de la page"
  description="Description pour les moteurs de recherche"
  image="/images/og-image.jpg"
  canonical="https://seniorgeek.ca/page"
  noindex={false}
  nofollow={false}
>
  <!-- Contenu -->
</BaseLayout>
```

### Open Graph et Twitter Cards

Les métadonnées OG et Twitter sont générées automatiquement à partir des props de `BaseLayout`.

## Blog

### Créer un article

1. Créer un fichier `.astro` ou `.md` dans `src/pages/blog/`

```astro
---
// pages/blog/mon-article.astro
import BlogLayout from '../../layouts/BlogLayout.astro';
---

<BlogLayout
  title="Mon Article"
  description="Description de l'article"
  author="Nom de l'auteur"
  publishDate={new Date('2024-11-20')}
  category="Fraudes"
  image="/images/articles/mon-image.jpg"
>
  <h2>Contenu de l'article</h2>
  <p>Paragraphe</p>
</BlogLayout>
```

### Structure d'un article

- Titre accrocheur
- Image/Featured image
- Meta (auteur, date, catégorie)
- Contenu principal
- CTA ou conclusion
- Lien vers article suivant (optionnel)

## Performance

### Optimisations incluses

- Minification CSS/JS automatique
- Image optimization avec `astro:assets`
- Code splitting automatique
- Static generation
- Zero JS par défaut

### Mesurer la performance

```bash
npm run build
npm run preview
# Utiliser Lighthouse dans Chrome DevTools
```

## Déploiement

### Netlify

```bash
# Vous n'avez rien à faire, Netlify détecte automatiquement Astro
# Build command: npm run build
# Publish directory: dist
```

### Vercel

```bash
# Vous n'avez rien à faire, Vercel détecte automatiquement Astro
# Deploy depuis votre Git repo
```

### Serveur statique personnalisé

```bash
npm run build
# Uploader le contenu de `/dist` sur votre serveur
```

## Scripts disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Construire pour production
npm run preview  # Prévisualiser la build
npm run astro    # Accéder à la CLI Astro
```

## Variables d'environnement

Copier `.env.example` en `.env.local` et configurer :

```env
PUBLIC_SITE_URL=https://seniorgeek.ca
PUBLIC_PHONE=+1-514-XXX-XXXX
PUBLIC_EMAIL=contact@seniorgeek.ca
```

## Bonnes pratiques

### Nommage

- Pages : `kebab-case` (mon-page.astro)
- Composants : `PascalCase` (MonComposant.astro)
- Fichiers CSS : `kebab-case` (global.css)

### Code

- Utiliser TypeScript pour la sécurité des types
- Documenter les composants complexes
- Respecter l'indentation (2 espaces)
- Utiliser des variables CSS pour les couleurs répétées

### Contenu

- Langage simple, pas de jargon
- Paragraphes courts
- Pas de gras excessif
- Pas de tirets énumérés
- Textes optimisés pour SEO

## Dépannage

### Build échoue

```bash
# Nettoyer le cache
rm -rf .astro/
rm -rf dist/
npm install
npm run build
```

### Port 3000 déjà utilisé

```bash
npm run dev -- --port 3001
```

### Images non chargées

Vérifier le chemin dans `/public` ou utiliser `astro:assets` pour les images locales.

## Ressources

- [Documentation Astro](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [AstroWind](https://github.com/arthelokyo/astrowind)

## Support

Pour toute question, contactez l'équipe SeniorGeek.
