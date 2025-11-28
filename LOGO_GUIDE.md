# Logo SeniorGeek - Guide Complet

## 🎨 Concept du Logo

Le logo SeniorGeek incarne la **bienveillance, l'aide et l'accessibilité** pour les aînés et leurs familles.

### Éléments Clés
- **Cœur épuré** : Trait fin et arrondi, légèrement incliné (-15°) pour une sensation dynamique et douce
- **Dégradé bleu** : Bleu clair (#60a5fa) → Bleu moyen (#2563eb) pour la chaleur et la confiance
- **Typographie** : Inter / Sans-serif géométrique, légère et moderne
- **Palette** : Fond bleu profond (#1e40af), texte blanc, cœur en dégradé

---

## 📁 Fichiers du Logo

### 1. **Logo Complet Horizontal**
- **Fichier** : `/src/components/common/LogoFull.astro`
- **Utilisation** : Bannières, en-têtes, présentation complète
- **Dimensions** : 320x80px (format 4:1)
- **Contenu** : Cœur + "SeniorGeek" sur fond bleu profond

```html
<LogoFull size="md" />
<!-- sm: 32px height | md: 48px height | lg: 64px height -->
```

### 2. **Logo Marque (Icon + Texte)**
- **Fichier** : `/src/components/common/Logo.astro`
- **Utilisation** : Navigation, header, mini-logo
- **Format** : Cœur seul + "SeniorGeek" côte à côte sans fond
- **Responsive** : S'adapte à la couleur du contexte

```html
<Logo class="inline-flex" />
```

### 3. **Icône Cœur Seule**
- **Fichier** : `/src/assets/icons/seniorgeek-heart.svg`
- **Utilisation** : Favicon, icône, app symbol
- **Format** : SVG scalable (64x64px)
- **Dégradé intégré** : Bleu clair → Bleu moyen

### 4. **Logo Full SVG Public**
- **Fichier** : `/public/logo-full.svg`
- **Utilisation** : Partage, export, documentation
- **Format** : SVG standalone avec styles intégrés

---

## 🎨 Palette Couleurs

| Élément | Couleur | Code | Usage |
|---------|---------|------|-------|
| **Fond** | Bleu profond | `#1e40af` | Arrière-plan du logo complet |
| **Dégradé - Clair** | Bleu clair | `#60a5fa` | Haut du cœur, lumière |
| **Dégradé - Moyen** | Bleu moyen | `#2563eb` | Bas du cœur, profondeur |
| **Texte** | Blanc pur | `#FFFFFF` | "SeniorGeek" sur fond bleu |
| **Text Alt** | Gris foncé | `#111827` | "SeniorGeek" sur fond blanc |

---

## 📐 Spécifications Techniques

### Cœur
- **Forme** : Courbe de Bézier lisse
- **Stroke** : 2px (au 1/64 de la viewBox)
- **Rotation** : -15° (dynamique, accessible)
- **Arrondi** : `stroke-linecap="round"` et `stroke-linejoin="round"`

### Typographie
- **Police** : Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI'
- **Poids** : 500 (medium) pour équilibre
- **Taille** : 32px (dans viewBox 320x80)
- **Espacement** : -0.5px (letter-spacing pour compacité)

### Gradient
```xml
<linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  <stop offset="0%" style="stop-color:#60a5fa" />
  <stop offset="100%" style="stop-color:#2563eb" />
</linearGradient>
```

---

## 💡 Variantes et Utilisations

### 1️⃣ **Logo Complet** (Horizontal)
```astro
<LogoFull size="lg" />
```
- ✅ Hero sections, bandeaux
- ✅ Présentations, documents
- ✅ Large format (800x200px+)

### 2️⃣ **Logo Mini** (Marque)
```astro
<Logo />
```
- ✅ Navigation, header
- ✅ Footer
- ✅ Inline avec texte
- ✅ Dimensions: 32-48px

### 3️⃣ **Icône Seule** (Cœur)
```html
<img src="/icons/seniorgeek-heart.svg" alt="SeniorGeek" />
```
- ✅ Favicon (16-32px)
- ✅ App icon (192px+)
- ✅ Social media (1024px)
- ✅ Emoji replacement

### 4️⃣ **Variations Futures**
- [ ] Version monochrome blanc (pour fonds foncés)
- [ ] Version monochrome bleu (pour texte)
- [ ] Version avec fond blanc (pour documents)
- [ ] Icône favicon 16x16px
- [ ] Apple touch icon 180x180px

---

## ✅ Principes de Design

### Philosophie
- 🫀 **Cœur** = Bienveillance, écoute, chaleur humaine
- 💙 **Bleu** = Confiance, sécurité, accessibilité
- ✨ **Épuré** = Moderne, lisible, minimaliste
- 🎯 **Tilté** = Dynamique, approchable, pas rigide

### Accessibilité
- ✅ Contraste élevé (blanc sur bleu)
- ✅ Formes reconnaissables (cœur universel)
- ✅ Police sans-serif lisible
- ✅ Pas de texte en dégradé
- ✅ Proportions équilibrées

### Cohérence Brand
- ✅ Reprend la couleur primaire du design system (#2563eb)
- ✅ Utilise Inter (typographie du site)
- ✅ Minimaliste comme le reste du site
- ✅ Chaleureux et accessible pour les aînés

---

## 📱 Responsive et Scales

| Contexte | Fichier | Taille | Notas |
|----------|---------|--------|-------|
| Favicon | `seniorgeek-heart.svg` | 16-32px | Carré, centré |
| Mobile header | `Logo` | 32px | Inline, flexible |
| Desktop header | `Logo` | 48px | Inline, flexible |
| Hero banner | `LogoFull` | 240-320px | Full horizontal |
| Social media | `seniorgeek-heart.svg` | 1024px | Carré, haute res |
| Document print | `logo-full.svg` | 300dpi | Export vectoriel |

---

## 🎯 Prochaines Étapes

1. ✅ **Logo créé** : Cœur + texte + gradient
2. ✅ **Intégré au site** : Navigation, header
3. ⏳ **À faire** :
   - Exporter en PNG (formats multiples)
   - Créer favicon (.ico, .png)
   - Générer Apple touch icon
   - Tester sur mobile/desktop
   - Ajouter à brand guidelines

---

## 📄 Export et Utilisation

### Format SVG (Scalable)
```bash
# Logo complet
cp src/components/common/LogoFull.astro public/logo-full.svg

# Icône cœur
cp src/assets/icons/seniorgeek-heart.svg public/heart-icon.svg
```

### Format PNG (Web)
```bash
# Require: ImageMagick or Figma export
convert -background none -size 320x80 public/logo-full.svg public/logo-full.png
```

---

**Version** : 1.0
**Date** : 26 novembre 2024
**Designer** : Claude (Astro components)
**License** : © SeniorGeek 2024
