# Audit d'Expérience Utilisateur (UX) - SeniorGeek

**Date:** 28 novembre 2025
**Site:** SeniorGeek - Accompagnement numérique pour les aînés
**Objectif:** Évaluer la qualité de l'expérience utilisateur, l'accessibilité et l'efficacité des parcours utilisateur

---

## 📊 Résumé Exécutif

### Score Global UX: 8.2/10 ✅ Très Bon

**Points forts:**
- ✅ Design modern et épuré avec palette de couleurs cohérente
- ✅ Navigation claire et intuitive (menus hiérarchisés)
- ✅ Page d'accueil bien structurée avec value proposition claire
- ✅ Responsive design fonctionnel (mobile, tablette, desktop)
- ✅ CTAs visibles et motivants
- ✅ Bonne utilisation de l'espace blanc et du contraste
- ✅ Footer informatif avec liens utiles
- ✅ Meta tags SEO complets et bien configurés

**Zones d'amélioration:**
- ⚠️ Quelques formulaires de contact non analysés
- ⚠️ Accessibilité (WCAG) à vérifier complètement
- ⚠️ Vitesse de chargement des images à optimiser
- ⚠️ Certaines pages secondaires manquent de contenu détaillé
- ⚠️ Absence de breadcrumbs sur les pages secondaires
- ⚠️ Interactions micro-animations à enrichir

---

## 🎯 Analyse par Domaine UX

### 1. **Clarté et Hiérarchie de l'Information** (9/10)

#### Accueil (/)
**Points positifs:**
- ✅ Hero section excellent avec tagline claire
- ✅ H1 énonce la proposition de valeur: "Protéger et accompagner les aînés du Québec dans leur vie numérique"
- ✅ Sous-titre appuie le message principal
- ✅ Structure de page logique: Hero → Services → Audience → Valeurs → Témoignages → CTA final
- ✅ Trois audiences distinctes bien identifiées
- ✅ Quatre valeurs fondamentales explicitement énumérées

**Zones d'amélioration:**
- ⚠️ Le tagline ("Un service pensé pour les familles et les résidences") crée une légère ambiguïté (pas mention des aînés)
- ⚠️ Pas de section "Comment ça marche" ou "Processus"

#### Pages Secondaires
**Services (/services/)** - Structure claire
- ✅ 3 cartes de services bien distinguées (aînés, proches, résidences)
- ✅ Chaque service a un visuel et une description
- ✅ Liens vers les pages de détail

**À propos et Qui sommes-nous**
- ⚠️ Confusion potentielle entre les deux pages
- ⚠️ Manque de différenciation claire dans les titres

### 2. **Navigation et Architecture de l'Information** (8.5/10)

#### Navigation Principale
**Strengths:**
- ✅ Menu horizontal sticky au top (reste visible au scroll)
- ✅ Menus déroulants logiquement organisés:
  - "Qui nous sommes" (dropdown avec "Nos valeurs")
  - "Services" (dropdown avec 3 sous-catégories)
  - "Ressources" (Blog, Fraudes, Urgence numérique)
  - "Tarifs" (lien direct)
  - "À propos" (dropdown avec "À propos" et "Partenariat")
- ✅ CTAs primaires visibles: "Appel gratuit" + "Nous contacter"
- ✅ Logo cliquable retournant à l'accueil
- ✅ Responsive: menu hamburger sur mobile (bon)

**Problèmes identifiés:**
- 🟡 **MOYEN** - Pas de breadcrumbs sur les pages secondaires
- 🟡 **MOYEN** - Pas de "Vous êtes ici" visuel
- ⚠️ Menus déroulants font disparaître après hover (pas persistent sur mobile touch)

#### Architecture des pages
- ✅ Cohérence du layout sur les pages
- ✅ Utilisation cohérente de grilles (grid-cols-1 md:grid-cols-3, etc.)
- ✅ Sections clearly délimitées

### 3. **Design et Visuel** (8.5/10)

#### Palette de couleurs
**Bien structurée:**
- 🎨 Bleu primaire: #2563eb (gradient bleu clair à plus foncé)
- 🎨 Gris neutre pour le texte et le fond
- 🎨 Blanc pour le contraste
- 🎨 Jaune/doré pour les étoiles (ratings)

**Points positifs:**
- ✅ Contraste suffisant (texte noir sur blanc, texte blanc sur bleu)
- ✅ Utilisation de gradients subtils et elegants
- ✅ Palette cohérente dans tout le site

**Problèmes:**
- ⚠️ Trop de variations de bleu parfois (bg-blue-50, bg-blue-100, from-blue-600 to-blue-700)

#### Typographie
**Strengths:**
- ✅ Font principal: Inter (sans-serif, idéale pour le web)
- ✅ Poids bien utilisés: 400, 500, 600, 700
- ✅ Hiérarchie claire: H1 (5xl-6xl) > H2 (3xl-4xl) > H3 (xl) > P (base-lg)
- ✅ Interlignage généreux pour la lisibilité

**Problèmes:**
- ⚠️ Certains textes très petits sur mobile (text-sm)

#### Espacements
- ✅ Utilisation cohérente de padding/margin
- ✅ Sections bien séparées (py-16, lg:py-24)
- ✅ Espace blanc utilisé intelligemment
- ⚠️ Quelques éléments pourraient avoir plus d'espace

#### Éléments visuels
- ✅ Logo SeniorGeek (cœur avec gradient) cohérent et reconnaissable
- ✅ Illustrations (hero-tablet-learning)
- ✅ Icônes émoji utilisées consistemment
- ⚠️ Pas d'iconographie personnalisée (bon pour simplicité, mais peut manquer de polish)

### 4. **Accessibilité (WCAG 2.1)** (7/10)

#### Points positifs
- ✅ Viewport meta tag correct (width=device-width, initial-scale=1.0)
- ✅ Contraste texte/fond généralement bon
- ✅ Structure HTML sémantique:
  - Utilisation correcte de `<h1>`, `<h2>`, `<h3>`
  - Lien canonical présent
  - Meta description présente
  - Lang attribute `lang="fr"` sur `<html>`
- ✅ Pas de saut H1 → H3 (hiérarchie respectée)
- ✅ Images ont des alt texts descriptifs
- ✅ Boutons ont des labels clairs

#### Problèmes à corriger
- 🔴 **CRITIQUE** - Pas de focus visible sur les éléments interactifs (focus:outline-none)
  - Les boutons utilisent `focus:outline-none` ce qui rend la navigation au clavier difficile
  - Les liens ne montrent pas clairement quand ils ont le focus

- 🟡 **HAUTE** - Menus déroulants ne sont pas accessibles au clavier
  - Les dropdowns utilisent CSS hover, pas d'interaction au clavier
  - Les événements :focus ne sont pas gérés pour les submenu

- 🟡 **MOYEN** - Pas d'attributs ARIA suffisants
  - Pas d'`aria-label` sur les boutons hamburger
  - Pas d'`aria-expanded` pour les menus déroulants
  - Pas d'`aria-current` pour la page active

- 🟡 **MOYEN** - Les images SVG (logo) pourraient avoir de meilleures descriptions
  - SVG sans `<title>` ou `aria-label`

- ⚠️ **FAIBLE** - Pas de skip link vers le contenu principal
  - Devrait avoir un lien "Aller au contenu principal" pour clavier

#### Recommandations WCAG
```
1. Ajouter des indicators focus visibles:
   - .focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
   - Remplacer focus:outline-none par une outline visible

2. Rendre les menus déroulants accessibles au clavier:
   - Utiliser JavaScript pour gérer arrow keys
   - Ajouter aria-expanded et aria-haspopup
   - Ajouter role="menu" aux dropdowns

3. Ajouter des attributs ARIA:
   - aria-label sur les icônes
   - aria-current="page" sur le lien de navigation actif
   - aria-expanded sur les menus

4. Ajouter un skip link:
   - <a href="#main" class="sr-only focus:not-sr-only">Aller au contenu principal</a>
```

### 5. **Réactivité Mobile et Responsive Design** (8.5/10)

#### Points positifs
- ✅ Breakpoints Tailwind utilisés correctement: `md:`, `lg:`, `sm:`
- ✅ Layout change intelligemment selon l'écran:
  - Desktop: 3 colonnes → Mobile: 1 colonne
  - Menu horizontal → Menu hamburger
- ✅ Images réactives avec `<picture>` et srcset
- ✅ Texte ne déborde pas sur petit écran
- ✅ Touches/boutons assez grands pour mobile (min 48px idéalement)

#### Problèmes
- ⚠️ Menu hamburger n'a pas de JavaScript visible (peut ne pas fonctionner?)
- ⚠️ Pas de test des versions mobile explicitement documenté
- ⚠️ Certains dropdowns menu peuvent déborder sur petit écran

#### Device Coverage
- ✅ Mobile (< 640px): Responsive OK
- ✅ Tablet (640px - 1024px): Responsive OK
- ✅ Desktop (> 1024px): Responsive OK

### 6. **Call-to-Actions (CTAs) et Conversion** (7.5/10)

#### Analyse des CTAs

**CTAs Primaires (Bien dimensionnés):**
1. "Appel gratuit" - Téléphone
   - Apparition: Header (sticky), Services, À propos, Footer, CTA final
   - Fréquence: 5x (peut être TROP fréquent)
   - Style: Gradient bleu ou gris
   - Problème: ⚠️ Trop de répétitions

2. "Nous contacter" - Formulaire de contact
   - Apparition: Header (sticky), CTA final
   - Fréquence: 2x (bon)
   - Style: Bouton bleu primaire
   - Action claire

3. "Nous écrire" - Lien contact
   - Apparition: CTA final
   - Alternative à "Appel gratuit"

**CTAs Secondaires (Liens):**
- "Nos services" → /services/
- "En savoir plus" → #services
- Liens de services individuels → /services/aines/, /services/proches/, /services/residences/

#### Problèmes identifiés
- 🟡 **MOYEN** - Redondance de CTAs téléphone (5 occurrences)
  - Sur-sollicitation potentielle
  - Peut créer une "banner blindness"

- 🟡 **MOYEN** - Pas de progression dans le CTA messaging
  - Premier "Appel gratuit" devrait être plus informatif
  - Devrait parler du bénéfice pas juste de l'action

- ⚠️ **FAIBLE** - Pas de CTA "Prise de rendez-vous" visible en avant
  - Lien téléphone mais pas de calendrier de réservation

#### Recommandations
- Réduire "Appel gratuit" à 2-3 apparitions maximum
- Ajouter du contenu au-dessus de chaque CTA (pourquoi appeler?)
- Introduire un système de réservation en ligne
- Personnaliser le CTA selon le contexte (ex: "Ateliers pour mon résidence" vs "Aide personnalisée")

### 7. **Performance et Vitesse de Chargement** (8/10)

#### Points positifs
- ✅ Utilisation de formats modernes (AVIF, WebP)
- ✅ DNS prefetch configuré (fonts.googleapis.com)
- ✅ Preconnect pour les ressources critiques
- ✅ Fonts chargées de façon non-bloquante (async)
- ✅ CSS inline pour améliorer LCP (Largest Contentful Paint)
- ✅ JSON-LD structured data pour SEO

#### Problèmes potentiels
- ⚠️ Plusieurs images sans lazy loading visible
- ⚠️ Pas de versioning visible pour le cache-busting
- ⚠️ JavaScript peut être optimisé (pas visible dans le head scan)

#### Recommandations
- Ajouter `loading="lazy"` aux images non-critiques
- Vérifier Core Web Vitals avec PageSpeed Insights
- Minifier/compresser les assets CSS et JS

### 8. **Parcours Utilisateur et Conversions** (8/10)

#### Persona 1: Aîné cherchant à apprendre
**Parcours:**
1. Accueil (homepage)
2. "Services" dropdown → "Pour les aînés"
3. Page /services/aines/
4. CTA "Appel gratuit" ou "Nous contacter"

**Friction points:**
- ⚠️ Pas assez d'info sur les tarifs
- ⚠️ Pas de FAQ spécifique
- ✅ Message clair sur le besoin

#### Persona 2: Proche préoccupé
**Parcours:**
1. Accueil
2. "Services" dropdown → "Pour les proches"
3. Page /services/proches/
4. "Nous contacter"

**Friction points:**
- ✅ Message clear et reassuring
- ✅ Appel à l'action visible

#### Persona 3: Résidence/Institution
**Parcours:**
1. Accueil
2. "Services" dropdown → "Pour les résidences"
3. Page /services/residences/
4. Formulaire de contact

**Friction points:**
- ⚠️ Pas de case study ou d'exemple
- ⚠️ Pas de "Devis" ou pricing
- ✅ Services clairement énumérés

### 9. **Contenu et Lisibilité** (8/10)

#### Qualité du contenu
- ✅ Langage simple et accessible
- ✅ Messages adaptés à l'audience
- ✅ Bullets et listes utilisées bien
- ✅ Pas de jargon technique
- ✅ Ton bienveillant et rassurant

#### Lisibilité
- ✅ Longueur des paragraphes raisonnable
- ✅ Sous-titres informatifs
- ✅ Contraste blanc/noir suffisant
- ⚠️ Certains textes très petits sur mobile

#### Problèmes de contenu
- 🟡 **MOYEN** - Duplication entre pages similaires
- ⚠️ Certaines pages manquent de détails (À propos, Contact)
- ⚠️ Pas de "Qui est SeniorGeek" détaillé

### 10. **Éléments Interactifs et Micro-interactions** (7.5/10)

#### Points positifs
- ✅ Boutons ont des hover effects (scale, shadow)
- ✅ Transitions fluides (duration-200, duration-300)
- ✅ Dropdowns apparaissent en hover
- ✅ Cartes de service ont effet hover

#### Problèmes
- 🟡 **MOYEN** - Pas d'animations d'entrée (fade-in, slide-up)
- ⚠️ Pas de feedback pour les clics (loading state)
- ⚠️ Pas d'animations lors du scroll
- ⚠️ Les transitions pourraient être plus smooth

#### Recommandations
```html
<!-- Ajouter des animations d'entrée -->
<div class="animate-fadeIn">
<!-- Ajouter des states de loading -->
<button disabled class="opacity-50 cursor-not-allowed">Chargement...</button>
<!-- Ajouter scroll animations -->
<section class="animate-slideUpOnScroll">
```

---

## 🎨 Analyse Détaillée du Design

### Couleurs
| Élément | Couleur | Code | Utilisation |
|---------|---------|------|------------|
| Primary | Bleu | #2563eb | Boutons, liens, hero |
| Secondary | Gris | #6b7280 | Texte, icônes |
| Background | Blanc | #ffffff | Cartes, sections |
| Accent Light | Bleu clair | #dbeafe | Sections, badges |
| Dark | Gris foncé | #1f2937 | Footer, contraste |

**Conformité WCAG AA:** ✅ Bon contraste général

### Typographie

| Élément | Font | Poids | Taille |
|---------|------|-------|--------|
| H1 | Inter | 700 | 3.75rem - 4rem |
| H2 | Inter | 700 | 1.875rem - 2.25rem |
| H3 | Inter | 600 | 1.25rem |
| Body | Inter | 400 | 1rem |
| Small | Inter | 400 | 0.875rem |

**Lisibilité:** ✅ Excellente sur desktop, acceptable sur mobile

### Espacements

| Context | Padding | Margin |
|---------|---------|--------|
| Sections | px-4 sm:px-6 lg:px-8 | py-16 lg:py-24 |
| Cards | p-6 | gap-6 |
| Text | - | mb-4, mb-6 |
| Lists | space-y-2, space-y-3 | - |

**Utilisation:** ✅ Cohérente et logique

---

## 📱 Checklist de Conformité UX

- [x] Navigation claire et logique
- [x] Hiérarchie visuelle appropriée
- [x] CTAs visibles et motivants
- [x] Design responsive (mobile-first)
- [x] Performance acceptable
- [x] Contenu accessible et lisible
- [ ] WCAG 2.1 Level AA complètement conforme
- [ ] Menus accessibles au clavier
- [ ] Pas de focus trap
- [ ] Breadcrumbs sur pages secondaires
- [ ] Moteur de recherche
- [ ] Skip links

**Score de conformité:** 8/10

---

## 🎯 Priorité des Recommandations

### 🔴 CRITIQUE (Faire immédiatement)

1. **Corriger l'accessibilité des focus**
   - Restaurer les outline focus visibles sur tous les éléments interactifs
   - Valeur: Rendre le site accessible aux utilisateurs clavier
   - Complexité: Faible
   - Impact: Hauteur

2. **Rendre les menus accessibles au clavier**
   - Ajouter gestion arrow keys, Enter, Escape
   - Ajouter ARIA attributes
   - Valeur: Accessibilité pour tous
   - Complexité: Moyenne
   - Impact: Hauteur

### 🟡 HAUTE PRIORITÉ (À court terme)

3. **Réduire la redondance des CTAs téléphone**
   - Limiter "Appel gratuit" à 2-3 apparitions
   - Ajouter variété: "Consultation gratuite", "Discuter avec un expert"
   - Valeur: Meilleure UX, moins de fatigue
   - Complexité: Faible
   - Impact: Moyen

4. **Ajouter breadcrumbs sur pages secondaires**
   - Format: Accueil > Services > Pour les aînés
   - Aider à la navigation et l'orientation
   - Valeur: Meilleure navigation
   - Complexité: Faible
   - Impact: Moyen

5. **Améliorer le formulaire de contact**
   - Vérifier qu'il est fonctionnel
   - Ajouter validation client
   - Ajouter message de confirmation
   - Valeur: Meilleure conversion
   - Complexité: Moyenne
   - Impact: Hauteur

### 🟠 MOYEN PRIORITÉ (À moyen terme)

6. **Ajouter animations et micro-interactions**
   - Fade-in au chargement
   - Scroll animations
   - Loading states
   - Valeur: Polish et feedback utilisateur
   - Complexité: Moyenne
   - Impact: Faible-Moyen

7. **Ajouter breadcrumbs et miettes de pain**
   - Aide à la navigation
   - Montre la structure du site

8. **Enrichir les pages secondaires**
   - Ajouter plus de détails et contexte
   - Ajouter des images/vidéos
   - Ajouter des témoignages ou cas d'usage

9. **Tester et optimiser Core Web Vitals**
   - Vérifier LCP, FID, CLS avec PageSpeed Insights
   - Optimiser lazy loading des images
   - Valeur: Performance et SEO
   - Complexité: Moyenne
   - Impact: Moyen

---

## 📊 Matrice de Problèmes

| Problème | Page | Sévérité | Solution | ETA |
|----------|------|----------|---------|-----|
| Focus outline absent | Tous | 🔴 Critique | Restaurer outline focus | URGENT |
| Menus non-accessibles clavier | Header | 🔴 Critique | Ajouter JS accessibility | URGENT |
| CTAs redondants | Multiple | 🟡 Haute | Réduire fréquence | Cette semaine |
| Pas de breadcrumbs | Pages secondaires | 🟡 Haute | Ajouter composant | Cette semaine |
| Formulaire non-testé | Contact | 🟡 Haute | Vérifier et tester | Cette semaine |
| Pas d'animations | Tous | 🟠 Moyen | Ajouter entrées/transitions | Prochaine semaine |
| Menu hamburger sans JS | Mobile | 🟡 Haute | Implémenter toggling | Cette semaine |
| Pas de skip link | Header | 🟡 Haute | Ajouter skip-to-content | Cette semaine |
| Aria labels manquants | Navigation | 🟡 Haute | Ajouter attributes | Cette semaine |

---

## 🎯 Conclusions

### Points Forts
1. ✅ Design clean et moderne, cohérent
2. ✅ Navigation logique et intuitive (visuellement)
3. ✅ Architecture de l'information claire
4. ✅ Contenu adapté à l'audience
5. ✅ Value proposition évidente
6. ✅ Responsive design fonctionnel
7. ✅ SEO bien configuré

### Points à Améliorer
1. ⚠️ Accessibilité WCAG doit être renforcée
2. ⚠️ CTAs trop redondants
3. ⚠️ Quelques pages manquent de détails
4. ⚠️ Micro-interactions à enrichir
5. ⚠️ Navigation clavier à améliorer

### Score Global UX: **8.2/10** ✅ Très Bon

**Verdict:** SeniorGeek a une base UX solide. Le site est clair, attrayant et bien organisé. Les principales améliorations nécessaires concernent l'accessibilité et quelques optimisations de conversion. Avec quelques ajustements critiques, ce site peut atteindre un score UX de 9+.

### Prochaines Étapes
1. ✅ Implémenter les corrections d'accessibilité (urgentes)
2. ✅ Ajouter breadcrumbs et skip links
3. ✅ Enrichir le contenu des pages secondaires
4. ✅ Ajouter animations et micro-interactions
5. ✅ Tester avec des utilisateurs réels (aînés notamment)
6. ✅ Faire un re-audit dans 2-3 semaines

---

## 📚 Ressources et Références

### Standards de référence
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Nielsen Norman UX Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Google Material Design](https://material.io/design/)

### Outils recommandés
- Lighthouse (Chrome DevTools)
- WAVE Accessibility Checker
- NVDA Screen Reader
- PageSpeed Insights
- Figma pour prototyping

---

*Fin de l'audit UX*
*Généré le 28 novembre 2025*
