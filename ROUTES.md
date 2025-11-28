# Routes et Pages du Site SeniorGeek

## Vue d'ensemble des routes

```
SeniorGeek.ca/
├── /                              Accueil
├── /services/
│   ├── /                          Vue d'ensemble
│   ├── /aines                     Pour les aînés
│   ├── /proches                   Pour les proches
│   └── /residences                Pour les résidences
├── /qui-sommes-nous               Qui sommes-nous
├── /nos-valeurs                   Nos valeurs
├── /a-propos                      À propos de nous
├── /partenariat                   Devenir partenaire
├── /contact                       Contact & Formulaire
├── /tarifs                        Pricing
├── /fraudes                       Reconnaître les fraudes
├── /urgence-numerique             Urgence numérique
├── /blog/
│   ├── /                          Index des articles
│   └── /reconnaitre-faux-appel-urgence  Article exemple
├── /robots.txt                    Robots.txt
└── /404                           Page erreur
```

## Pages détaillées

### 🏠 Accueil `/`
**Fichier:** `src/pages/index.astro`

Sections:
1. Hero avec titre principal et CTA
2. Services overview (3 cartes)
3. Pour qui (3 cibles)
4. Pourquoi nous (4 valeurs)
5. Témoignages (3 examples)
6. CTA final

Composants: Hero, Services, WhoWeSolve, WhyChooseUs, Testimonials, CallToAction

---

### 🔧 Services

#### Vue d'ensemble `/services/`
**Fichier:** `src/pages/services/index.astro`

Contenu:
- Présentation des 3 offres
- Grille services détaillée
- Conseil pour choisir
- CTA

Composants: Services, PageLayout, CallToAction

#### Pour les aînés `/services/aines`
**Fichier:** `src/pages/services/aines.astro`

Sections:
1. Hero - Services pour aînés
2. Détail des 4 services avec items
3. Pourquoi ces services
4. Avantages (4 cartes)
5. CTA

#### Pour les proches `/services/proches`
**Fichier:** `src/pages/services/proches.astro`

Sections:
1. Hero - Protection des proches
2. Détail des 4 services
3. Pourquoi protéger
4. Impacts (4 cartes)
5. CTA

#### Pour les résidences `/services/residences`
**Fichier:** `src/pages/services/residences.astro`

Sections:
1. Hero - Services résidences
2. Détail des 4 services
3. Rabais pour groupes
4. Avantages résidences
5. Comment ça marche (4 étapes)
6. CTA

---

### ℹ️ Pages informationnelles

#### Qui sommes-nous `/qui-sommes-nous`
**Fichier:** `src/pages/qui-sommes-nous.astro`

Contenu:
- Notre histoire
- Notre mission
- Équipe (cartes)
- CTA

#### Nos valeurs `/nos-valeurs`
**Fichier:** `src/pages/nos-valeurs.astro`

Contenu:
- 6 valeurs fondamentales
- 4 engagements envers vous
- CTA

#### À propos `/a-propos`
**Fichier:** `src/pages/a-propos.astro`

Contenu:
- Histoire avec timeline (4 points)
- Chiffres clés (3 stats)
- Ce qui nous motive
- Engagements (4 cartes)
- CTA

#### Partenariat `/partenariat`
**Fichier:** `src/pages/partenariat.astro`

Contenu:
- 4 types de partenariats
- 4 raisons de partenaireship
- Processus (4 étapes)
- 3 cas d'usage
- CTA

---

### 📞 Support et Contact

#### Contact `/contact`
**Fichier:** `src/pages/contact.astro`

Contenu:
- 3 cartes contact (appel, email, urgence)
- Formulaire de contact (5 champs)
- Délais de réponse

#### Tarifs `/tarifs`
**Fichier:** `src/pages/tarifs.astro`

Contenu:
- 3 options de pricing
- FAQ tarification (4 questions)
- CTA

#### Fraudes `/fraudes`
**Fichier:** `src/pages/fraudes.astro`

Contenu:
- 6 types d'arnaques avec signaux
- 6 conseils de protection
- Que faire si victime
- CTA

#### Urgence numérique `/urgence-numerique`
**Fichier:** `src/pages/urgence-numerique.astro`

Contenu:
- 4 services d'urgence
- 5 étapes si urgence
- 3 ressources utiles
- CTA urgent

---

### 📚 Blog

#### Index blog `/blog/`
**Fichier:** `src/pages/blog/index.astro`

Contenu:
- Filtre par catégorie
- 3 articles exemple
- Pagination

#### Article exemple `/blog/reconnaitre-faux-appel-urgence`
**Fichier:** `src/pages/blog/reconnaitre-faux-appel-urgence.astro`

Contenu:
- Hero
- 6 sections thématiques
- 3 scénarios avec explications
- 6 signaux d'alerte
- 4 conseils de protection
- Points à retenir

---

### 🚫 Pages système

#### Page 404 `/404`
**Fichier:** `src/pages/[...404].astro`

Contenu:
- Message erreur 404
- Boutons retour
- Liens utiles

#### Robots.txt `/robots.txt`
**Fichier:** `src/pages/robots.txt.ts`

Contenu:
- User-agent directives
- Sitemap link

---

## Métadonnées par page

| Route | Title | Description |
|-------|-------|-------------|
| `/` | SeniorGeek - Accueil | Protéger et accompagner les aînés |
| `/services/` | Services SeniorGeek | Découvrez tous nos services |
| `/services/aines` | Services pour les aînés | Accompagnement personnalisé |
| `/services/proches` | Services pour les proches | Protégez vos aînés |
| `/services/residences` | Services pour les résidences | Programmes complets |
| `/qui-sommes-nous` | Qui sommes-nous | L'équipe derrière SeniorGeek |
| `/nos-valeurs` | Nos valeurs | Les principes fondamentaux |
| `/a-propos` | À propos de nous | L'histoire et la vision |
| `/partenariat` | Partenariat SeniorGeek | Rejoignez-nous |
| `/contact` | Nous contacter | Formulaire de contact |
| `/tarifs` | Tarifs SeniorGeek | Nos tarifs justes |
| `/fraudes` | Reconnaître les fraudes | Guide complet |
| `/urgence-numerique` | Urgence numérique | Services d'urgence |
| `/blog/` | Blog - SeniorGeek | Articles et conseils |

---

## Conventions de nommage

### Pages
- Format: kebab-case (mon-page.astro)
- Dynamiques: [param].astro ou [...slug].astro
- Index: index.astro dans dossiers

### Composants
- Format: PascalCase (MonComposant.astro)
- Organisation: Par type (common, widgets, ui, blog)

### URLs
- Format: kebab-case (/ma-page/)
- Localisé: fr-CA (français Canada)
- HTTPS obligatoire en production

---

## Statut des pages

- ✅ Accueil - Complète
- ✅ Services (4) - Complètes
- ✅ Pages info (4) - Complètes
- ✅ Contact & Support (4) - Complètes
- ✅ Blog (2) - Base créée
- ✅ Système (2) - Complètes

**Total:** 16 pages créées et fonctionnelles

---

## Pour ajouter une nouvelle page

1. Créer fichier dans `src/pages/ma-page.astro`
2. Utiliser `PageLayout` ou `BaseLayout`
3. Ajouter route dans `navigation.js`
4. Tester à `http://localhost:3000/ma-page`

Exemple:
```astro
---
import PageLayout from '../layouts/PageLayout.astro';

export const prerender = true;
---

<PageLayout
  title="Ma Page"
  description="Description"
  heroTitle="Ma Page"
>
  <!-- Contenu -->
</PageLayout>
```

---

**Dernière mise à jour:** November 26, 2024
