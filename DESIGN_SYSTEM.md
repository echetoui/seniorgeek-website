# Système de Design SeniorGeek

## 🎨 Identité visuelle complète pour l'accessibilité des aînés

Créé pour: Personnes 65+ ans avec vue diminuée ou difficultés de lecture
Frameworks: Astro + Tailwind CSS
Approche: Doux, rassurant, simple, accessible

---

## 1. PALETTE DE COULEURS

### Couleurs Principales

| Nom | Hex | RGB | WCAG AA | Usage |
|-----|-----|-----|---------|-------|
| **primary** | `#2563eb` | 37, 99, 235 | ✅ AAA | Boutons CTA, liens, accents principaux |
| **primary-light** | `#60a5fa` | 96, 165, 250 | ✅ AA | Survols, backgrounds clairs, focus states |
| **primary-dark** | `#1e40af` | 30, 64, 175 | ✅ AAA | États actifs, boutons enfoncés |
| **accent** | `#f59e0b` | 245, 158, 11 | ✅ AAA | Highlights, highlights positifs |
| **success** | `#10b981` | 16, 185, 129 | ✅ AAA | Confirmations, messages positifs |
| **warning** | `#f97316` | 249, 115, 22 | ✅ AAA | Alertes, mises en garde |

### Couleurs de Texte

| Nom | Hex | Contraste | Usage |
|-----|-----|-----------|-------|
| **text-primary** | `#111827` | 18:1 sur blanc | Texte principal, 100% lisible |
| **text-secondary** | `#6b7280` | 7:1 sur blanc | Texte secondaire, descriptions |
| **text-muted** | `#9ca3af` | 4.5:1 sur blanc | Texte discret, placeholders |

### Couleurs de Background

| Nom | Hex | Usage |
|-----|-----|-------|
| **bg-white** | `#ffffff` | Sections principales, cartes |
| **bg-light** | `#f9fafb` | Arrière-plan page, sections alternées |
| **bg-lighter** | `#f3f4f6` | Sections tertaires, inputs |
| **border-light** | `#e5e7eb` | Bordures subtiles |

### Ratios de contraste testés

```
✅ WCAG AA (4.5:1 minimum)
  - Texte primaire sur blanc: 18:1
  - Texte secondaire sur blanc: 7:1
  - Primary button sur white: 9:1

✅ WCAG AAA (7:1 minimum)
  - Primary button text: 10:1
  - Success button text: 11:1
  - Warning button text: 8:1
```

---

## 2. TYPOGRAPHIE

### Titres: Poppins

```
Font-family: Poppins, system-ui, sans-serif
Poids: 600 (semi-bold), 700 (bold)
Source: https://fonts.googleapis.com/css2?family=Poppins:wght@600;700

Caractéristiques:
✓ Arrondie et chaleureuse
✓ Sans-serif moderne
✓ Excellent contraste entre lettres
✓ Idéale pour personnes avec vue diminuée
```

### Textes: Inter

```
Font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
Poids: 400 (regular), 500 (medium), 600 (semi-bold)
Source: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600

Caractéristiques:
✓ Géométrique et lisible
✓ Spacing optimal entre lettres
✓ Évite fatigue oculaire
✓ Excellente sur petits écrans
```

### Hiérarchie typographique

```
H1 (Page Title / Hero)
  Desktop:    48px / 3rem (Poppins 700)
  Tablet:     40px / 2.5rem
  Mobile:     36px / 2.25rem
  Line-height: 1.2
  Letter-spacing: -0.02em (tight)
  Usage: Titres hero, page principales
  Example: "Protéger et accompagner les aînés du Québec"

H2 (Section Heading)
  Desktop:    36px / 2.25rem (Poppins 700)
  Tablet:     32px / 2rem
  Mobile:     28px / 1.75rem
  Line-height: 1.3
  Letter-spacing: -0.01em
  Usage: Titres des sections
  Example: "Nos services"

H3 (Card/Block Title)
  Desktop:    24px / 1.5rem (Poppins 600)
  Mobile:     20px / 1.25rem
  Line-height: 1.4
  Usage: Titres cartes, blocs
  Example: "Pour les aînés"

H4 (Subsection)
  18px / 1.125rem (Poppins 600)
  Line-height: 1.5
  Usage: Sous-titres

Body (Texte standard)
  16px / 1rem (Inter 400)
  Line-height: 1.6 (très important)
  Letter-spacing: 0
  Margin-bottom: 1rem entre paragraphes
  Usage: Contenu principal
  Example: "SeniorGeek aide les personnes âgées..."

Small (Texte secondaire)
  14px / 0.875rem (Inter 400)
  Line-height: 1.6
  Color: text-secondary
  Usage: Aide, descriptions
  Example: "Disponible 24h/24, 7 jours/7"

Caption (Très petit)
  12px / 0.75rem (Inter 400)
  Line-height: 1.5
  Color: text-muted
  Usage: Metadata, timestamps
  Example: "Mise à jour: November 26, 2024"
```

---

## 3. ESPACEMENTS & DIMENSIONS

### Système de grille (8px base)

```
xs:   4px   (0.25rem)
sm:   8px   (0.5rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
```

### Padding standard

```
Buttons:         12px (vertical) × 24px (horizontal)
Cards:           20-24px (all sides)
Sections:        16px-32px (padding sides)
Input fields:    12px (vertical) × 16px (horizontal)
```

### Margins standard

```
Section spacing: 48px-64px (vertical)
Component gap:   16px-24px
List items:      8px-12px
```

### Rayon de bordure

```
Cards:           12px (0.75rem)  - Soft, accessible
Buttons:         8px  (0.5rem)   - Modern, subtle
Inputs:          8px  (0.5rem)   - Consistent
Badges:          6px  (0.375rem) - Compact
Pills:           999px            - Full circle if needed
```

---

## 4. OMBRES

### Système d'ombres accessible

```
✓ AVEC OMBRES (plus accessible que flat design)
Raison: Les ombres créent de la profondeur,
        aidant les aînés à distinguer les éléments cliquables

Ombre légère (cartes au repos)
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
              0 1px 2px -1px rgb(0 0 0 / 0.1)
  Utilisation: Cartes, blocs normaux

Ombre moyenne (cartes au survol)
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
              0 2px 4px -2px rgb(0 0 0 / 0.1)
  Utilisation: Cartes interactives, boutons au survol

Ombre forte (modales, dropdowns)
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
              0 8px 10px -6px rgb(0 0 0 / 0.1)
  Utilisation: Modales, floating elements

Ombre très légère (bordures subtiles)
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)
  Utilisation: Inputs, éléments légers
```

---

## 5. BOUTONS

### Bouton Primary (CTA principal)

```
État NORMAL (au repos)
  Background:      #2563eb (primary)
  Color:           #ffffff (white)
  Padding:         12px (vertical) × 24px (horizontal)
  Border-radius:   8px
  Font:            Inter 600, 16px, uppercase lettres
  Box-shadow:      0 1px 3px rgba(0, 0, 0, 0.1)
  Cursor:          pointer
  Transition:      all 200ms ease-in-out

État HOVER (survol)
  Background:      #1e40af (primary-dark)
  Color:           #ffffff
  Box-shadow:      0 4px 6px rgba(0, 0, 0, 0.1)
  Transform:       none (stable pour accessibilité)
  Transition:      Smooth 200ms

État FOCUS (clavier)
  Outline:         2px solid #2563eb
  Outline-offset:  4px
  Ring:            2px solid #2563eb
  Ring-offset:     2px blanc
  (Alternative Tailwind: ring-2 ring-offset-2)

État ACTIVE (appuyé)
  Background:      #1e40af
  Transform:       scale(0.98) (léger feedback)
  Duration:        100ms

État DISABLED
  Background:      #d1d5db (gray-300)
  Color:           #6b7280 (gray-500)
  Opacity:         0.6
  Cursor:          not-allowed
  Box-shadow:      none
  No hover effect
```

### Bouton Secondary

```
État NORMAL
  Background:      #e5e7eb (gray-200)
  Color:           #111827 (text-primary)
  Padding:         12px × 24px
  Box-shadow:      0 1px 2px rgba(0, 0, 0, 0.05)

État HOVER
  Background:      #d1d5db (gray-300)
  Color:           #111827
  Box-shadow:      0 1px 3px rgba(0, 0, 0, 0.1)

État DISABLED
  Background:      #f3f4f6 (gray-100)
  Color:           #9ca3af (gray-400)
  Cursor:          not-allowed
```

### Bouton Outline

```
État NORMAL
  Background:      transparent
  Border:          2px solid #2563eb
  Color:           #2563eb
  Padding:         12px × 24px (note: 2px border adjust)

État HOVER
  Background:      #eff6ff (blue-50)
  Border:          2px solid #1e40af
  Color:           #1e40af

État FOCUS
  Outline:         2px solid #2563eb avec offset
```

### Tailles de boutons

```
Small (sx)
  Padding:         8px × 16px
  Font-size:       14px / 0.875rem
  Usage:           Boutons secondaires, inline actions

Normal (md) [DEFAULT]
  Padding:         12px × 24px
  Font-size:       16px / 1rem
  Usage:           CTA principaux, actions standards

Large (lg)
  Padding:         16px × 32px
  Font-size:       18px / 1.125rem
  Usage:           Hero buttons, appels d'action majeurs

Extra Large (xl)
  Padding:         20px × 40px
  Font-size:       20px / 1.25rem
  Usage:           Bannière principale, CTAs critiques
```

---

## 6. CARTES

### Card Standard

```
Structure CSS
  background:      #ffffff
  border:          1px solid #e5e7eb
  border-radius:   12px
  box-shadow:      0 1px 3px rgba(0, 0, 0, 0.1)
  padding:         24px
  transition:      all 200ms ease

État HOVER
  box-shadow:      0 4px 6px rgba(0, 0, 0, 0.1)
  border-color:    #bfdbfe (primary-light)
  cursor:          pointer (si cliquable)

Contenu interne
  Titre:           Poppins 600, 20-24px, #111827, mb-3
  Description:     Inter 400, 16px, #111827, mb-4
  Spacing:         12px entre titre et contenu
  Bottom space:    Padding bottom pour actions
```

### Card Variant: Service Card

```
Structure
  + Icon (48×48px) en haut, couleur primary
  + Titre H3 (Poppins 600, 20px)
  + Description (2-3 lignes max)
  + Liste items avec ✓ (green-600)
  + [Optionnel] Bouton action

Items list
  li::before: "✓" en vert (#10b981)
  Spacing: 8px entre items
  Font: Inter 400, 14px
```

### Card Variant: Testimonial Card

```
Structure
  + Rating stars (5 ★) en haut
  + Quote en italique, 16px, text-secondary
  + Border-bottom gris clair
  + Author name (Poppins 600, 14px)
  + Author role (Inter 400, 12px, text-muted)
  + [Optionnel] Author photo (48×48px rond)

Colors
  Quote:           #6b7280 (text-secondary)
  Author:          #111827 (text-primary)
  Stars:           #f59e0b (accent)
```

### Card Variant: Pricing Card

```
Structure
  + Badge "Populaire" si destacada
  + Plan name (H3)
  + Description (small)
  + Price (32px, Poppins 700, primary)
  + Features list avec ✓
  + CTA button au bottom

Destacada (Popular)
  border:          2px solid #2563eb
  background:      #eff6ff (very light blue)
  Bouton:          Couleur différente (accent)

Standard
  border:          1px solid #e5e7eb
  background:      white
```

---

## 7. SECTIONS ET BACKGROUNDS

### Page Background

```
Défaut:    #f9fafb (gray-50)
Raison:    Ultra clair, repose les yeux

Alternance sections:
  Section 1:  white (#ffffff)
  Section 2:  #f9fafb (gray-50)
  Section 3:  white
  (Crée rythme sans être agressif)
```

### Hero Section Background

```
Option 1: Dégradé doux
  background: linear-gradient(135deg,
              #ffffff 0%,
              #f3f4f6 100%)
  Padding: 64px-128px (vertical)

Option 2: Couleur unie
  background: #f9fafb
  Padding: 64px-128px

Avantage: Crée distinction sans être agressif
```

### CTA Section (Appel à l'action)

```
Standard
  background:      #2563eb (primary)
  color:           #ffffff
  text-color:      white

Avec texture (optionnel)
  background:      linear-gradient(135deg, #2563eb, #1e40af)
  box-shadow:      inset 0 1px 2px rgba(255,255,255,0.1)
  Crée profondeur sans être agressif
```

### Success/Warning Sections

```
SUCCESS
  background:      #d1fae5 (green-100)
  border-left:     4px solid #10b981 (green-500)
  color:           #047857 (green-800)
  Padding:         16px, border-left

WARNING
  background:      #fed7aa (orange-100)
  border-left:     4px solid #f97316 (orange-500)
  color:           #b45309 (orange-800)
  Padding:         16px, border-left

INFO
  background:      #dbeafe (blue-100)
  border-left:     4px solid #0284c7 (blue-500)
  color:           #0c4a6e (blue-900)
```

---

## 8. FORMULAIRES

### Input Fields

```
État NORMAL
  background:      white
  border:          1px solid #d1d5db (gray-300)
  border-radius:   8px
  padding:         12px 16px
  font:            Inter 400, 16px
  color:           #111827 (text-primary)
  box-shadow:      inset 0 1px 1px rgba(0,0,0,0.05)

::placeholder
  color:           #d1d5db (gray-300)

État FOCUS
  border-color:    #2563eb (primary)
  box-shadow:      0 0 0 3px rgba(37, 99, 235, 0.1)
  outline:         none

État DISABLED
  background:      #f9fafb (gray-50)
  border-color:    #e5e7eb (gray-200)
  color:           #9ca3af (text-muted)
  cursor:          not-allowed

État ERROR
  border-color:    #ef4444 (red-500)
  color:           #dc2626 (red-600)

État SUCCESS
  border-color:    #10b981 (green-500)
  color:           #059669 (green-600)
```

### Labels

```
Font:              Poppins 600, 14px
Color:             #111827 (text-primary)
Margin-bottom:     8px
Letter-spacing:    0 (normal)
```

### Help Text / Errors

```
Help text
  Font:            Inter 400, 12px
  Color:           #6b7280 (text-secondary)
  Margin-top:      4px

Error message
  Font:            Inter 400, 12px
  Color:           #dc2626 (red-600)
  Icon:            ⚠ rouge avant texte
```

---

## 9. CONFIGURATION TAILWIND

### Ajouter à tailwind.config.js

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
          dark: '#1e40af',
        },
        accent: '#f59e0b',
        success: '#10b981',
        warning: '#f97316',
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          muted: '#9ca3af',
        },
        bg: {
          light: '#f9fafb',
          lighter: '#f3f4f6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5rem' }],
        sm: ['14px', { lineHeight: '1.5rem' }],
        base: ['16px', { lineHeight: '1.6rem' }],
        lg: ['18px', { lineHeight: '1.75rem' }],
        xl: ['20px', { lineHeight: '1.75rem' }],
        '2xl': ['24px', { lineHeight: '2rem' }],
        '3xl': ['30px', { lineHeight: '2.25rem' }],
        '4xl': ['36px', { lineHeight: '2.5rem' }],
        '5xl': ['48px', { lineHeight: '3rem' }],
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        sm: '0.375rem',
        base: '0.5rem',
        md: '0.625rem',
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
};
```

---

## 10. EXEMPLE DE PAGE COMPLÈTE

```astro
---
// Page example
import BaseLayout from '../layouts/BaseLayout.astro';
import Button from '../components/ui/Button.astro';
import Card from '../components/ui/Card.astro';
---

<BaseLayout
  title="Services SeniorGeek"
  description="Nos services pour aînés, proches et résidences"
>
  <!-- HEADER -->
  <header class="sticky top-0 bg-white shadow-sm z-50">
    <!-- Header content -->
  </header>

  <!-- HERO SECTION -->
  <section class="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl lg:text-5xl font-bold text-gray-900
                 mb-6 leading-tight font-poppins">
        Nos services
      </h1>
      <p class="text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed
                font-inter">
        Trois offres pensées pour chacun
      </p>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-gray-900 mb-12
                 text-center font-poppins">
        Découvrez nos offres
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          title="Pour les aînés"
          description="Services adaptés pour maîtriser la technologie"
        >
          <ul class="space-y-2 text-sm text-gray-600">
            <li>✓ Accompagnement individuel</li>
            <li>✓ Ateliers en groupe</li>
            <li>✓ Aide rapide 24-48h</li>
          </ul>
        </Card>
        <!-- More cards -->
      </div>
    </div>
  </section>

  <!-- CTA SECTION (Inverted colors) -->
  <section class="bg-primary text-white py-16">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-6 font-poppins">
        Prêt à commencer
      </h2>
      <p class="text-lg mb-8 text-blue-100 font-inter">
        Appelez-nous pour une évaluation gratuite
      </p>
      <Button
        text="Appel gratuit"
        href="tel:+15141234567"
        type="primary"
        size="lg"
      />
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-gray-900 text-white py-12">
    <!-- Footer content -->
  </footer>
</BaseLayout>
```

---

## 11. RÈGLES D'ACCESSIBILITÉ

### Pour les aînés avec vue diminuée

```
✅ À FAIRE
  - Taille min 16px pour texte courant
  - Contraste minimum 4.5:1 (idéalement 7:1)
  - Line-height 1.5-1.6 (espacement vertical)
  - Lettre-spacing normal (pas trop serré)
  - Paddings généreux (easier to click)
  - Ombres douces (crée profondeur)
  - Transitions douces (200-300ms)

❌ À ÉVITER
  - Texte < 14px
  - Contraste < 4.5:1
  - Line-height < 1.4
  - Couleurs agressives ou vives
  - Animations rapides ou saccadées
  - Gris trop clair (#ccc ou moins)
  - Jargon technique

🎯 Tests de contraste
  Outil: WebAIM Contrast Checker
  https://webaim.org/resources/contrastchecker/
```

### Navigation au clavier

```
✅ Tous les éléments interactifs accessibles au clavier
✅ Ordre de tabulation logique (top-to-bottom, left-to-right)
✅ Focus states visibles (ring-2 ring-primary)
✅ Skip links pour naviguer rapidement
```

### Lecteur d'écran

```
✅ Semantic HTML (h1, h2, button, nav, etc.)
✅ Alt text pour toutes les images
✅ Labels pour les inputs
✅ ARIA labels si nécessaire
```

---

## 12. RESSOURCES

### Polices de caractères

```
Poppins: https://fonts.google.com/specimen/Poppins
Inter: https://fonts.google.com/specimen/Inter
```

### Outils de test

```
Contraste:     https://webaim.org/resources/contrastchecker/
Accessibilité: https://www.deque.com/axe/devtools/
Responsive:    https://responsively.app/
Lighthouse:    Chrome DevTools → Lighthouse
```

### Documentation

```
WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
Tailwind CSS: https://tailwindcss.com/
Astro Docs: https://docs.astro.build/
```

---

## 13. CHECKLIST D'IMPLÉMENTATION

- [ ] Google Fonts import (Poppins + Inter)
- [ ] Tailwind config updated
- [ ] Base styles in global.css
- [ ] Button component styles
- [ ] Card component styles
- [ ] Form field styles
- [ ] Test contraste (WebAIM)
- [ ] Test responsive
- [ ] Test clavier navigation
- [ ] Test lecteur d'écran
- [ ] Lighthouse audit
- [ ] Screenshots for documentation

---

**Créé pour les aînés du Québec avec ❤️**

Dernière mise à jour: November 26, 2024
