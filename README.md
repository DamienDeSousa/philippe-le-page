# Site Web - Dr Philippe Le Page

## Cabinet de Médecine Esthétique & Lasers Médicaux - Montpellier

Site moderne développé avec Next.js 16, React 19 et Tailwind CSS v4.

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 20+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
app/
├── components/
│   ├── sections/          # Sections du site
│   │   ├── Hero.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── Specialties.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Composants réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── Navigation.tsx     # Header et menu
│   └── Footer.tsx
├── lib/
│   └── constants.ts       # Données du site (à personnaliser)
├── layout.tsx             # Layout principal
├── page.tsx               # Page d'accueil
├── globals.css            # Styles globaux
├── mentions-legales/      # Page mentions légales
└── politique-confidentialite/  # Page RGPD
```

---

## ✏️ Personnalisation

### 1. Informations du cabinet

Modifiez le fichier `app/lib/constants.ts` avec vos informations :

- ✅ Nom, adresse, téléphone, email
- ✅ Numéro RPPS (obligatoire)
- ✅ Assurance responsabilité civile
- ✅ Diplômes exacts
- ✅ Spécialités et services
- ✅ Témoignages (vérifier conformité Ordre des Médecins)
- ✅ Marques d'équipements

### 2. Images

Créez le dossier `/public/images/` et ajoutez vos photos :

**Requis :**

- `dr-philippe-lepage-placeholder.jpg` → Photo portrait professionnel (600x800px)
- `cabinet-1-placeholder.jpg` → Salle de consultation (1200x800px)
- `cabinet-2-placeholder.jpg` → Plateau technique laser (1200x800px)
- `cabinet-3-placeholder.jpg` → Salle de soins (1200x800px)
- `dr-action-placeholder.jpg` → Dr Le Page en action (1200x800px)
- `equipment-placeholder.jpg` → Équipements médicaux (800x600px)
- `reception-placeholder.jpg` → Accueil (1200x800px)
- `placeholder-clinic.jpg` → Image d'arrière-plan hero (optionnel)

**Format recommandé :** JPG optimisé, WebP si possible

### 3. Métadonnées SEO

Dans `app/layout.tsx` :

- Vérifier l'URL de base (`metadataBase`)
- Ajouter le code de vérification Google (`verification.google`)

### 4. Pages légales

Compléter dans :

- `app/mentions-legales/page.tsx` → Informations hébergeur, assurance RCP
- `app/politique-confidentialite/page.tsx` → Vérifier conformité RGPD

### 5. Google Maps

Dans `app/components/sections/Contact.tsx`, remplacer l'URL de l'iframe Google Maps par l'embed code réel de votre localisation.

---

## 🎨 Personnalisation du design

### Couleurs

Modifiez `app/globals.css` pour ajuster la palette :

```css
--color-primary-600: #2563eb; /* Bleu principal */
--color-accent-teal: #14b8a6; /* Accent */
```

### Polices

Les polices actuelles (Lora + Source Sans 3) peuvent être changées dans `app/layout.tsx`.

---

## 📋 Checklist avant mise en ligne

### Contenu

- [ ] Toutes les informations dans `constants.ts` sont exactes
- [ ] Numéro RPPS ajouté
- [ ] Assurance RCP mentionnée
- [ ] Photos professionnelles intégrées
- [ ] Témoignages validés (conformité Ordre des Médecins)
- [ ] Pages légales complétées

### SEO

- [ ] Métadonnées vérifiées (`layout.tsx`)
- [ ] URL de base correcte
- [ ] Google Search Console configuré
- [ ] Sitemap soumis

### Légal

- [ ] Conformité avec réglementation médicale française
- [ ] Pas de photos avant/après (interdit)
- [ ] Pas de mentions comparatives ("meilleur", etc.)
- [ ] RGPD respecté

### Technique

- [ ] Test sur mobile (Safari iOS, Chrome Android)
- [ ] Test accessibilité (navigation clavier, lecteur d'écran)
- [ ] Test performance (Lighthouse score 90+)
- [ ] Toutes les sections testées

---

## 🚀 Déploiement

### Option recommandée : Vercel

```bash
# Installation du CLI Vercel
npm i -g vercel

# Déploiement
vercel
```

### Alternative : Build manuel

```bash
# Build pour production
npm run build

# Tester le build
npm run start
```

Le site généré sera dans `.next/`

---

## 📱 Fonctionnalités

✅ **Single-page application** avec navigation fluide  
✅ **Responsive** mobile-first  
✅ **Accessible WCAG 2.1 AA**  
✅ **SEO optimisé** avec structured data  
✅ **Performance** optimale (Lighthouse 90+)  
✅ **Conformité RGPD**  
✅ **Design médical professionnel**

---

## 🔧 Commandes

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Serveur production
npm run lint         # Vérification code
```

---

## 📞 Support technique

Pour toute question ou modification, contactez votre développeur.

---

## 📄 Conformité

Ce site respecte :

- Réglementation Ordre National des Médecins
- RGPD (Règlement Général sur la Protection des Données)
- Accessibilité web WCAG 2.1 niveau AA
- Déontologie médicale française

---

**Dernière mise à jour :** Février 2026  
**Version :** 1.0.0
