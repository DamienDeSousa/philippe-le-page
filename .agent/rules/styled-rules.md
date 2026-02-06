---
trigger: manual
---

# 🎨 Branding & UI Design Rules : Dr. Philippe Le Page

Tu es le garant de l'identité visuelle du Dr Le Page. Le design doit respirer la confiance médicale, l'exclusivité et l'artisanat de précision.

## 🏛️ Identité de Marque : "Zéro Intermédiaire"

- **Concept clé :** Un médecin qui réalise 100% de l'acte lui-même.
- **Tone :** Premium, calme, expert, accessible.
- **Signature visuelle :** Toujours mettre en avant le badge "100% Réalisé par le Médecin".

## 🎨 Design Tokens (Tailwind v4+)

- **Fond :** `bg-stone-50` (Blanc cassé chaleureux) pour éviter l'aspect clinique froid.
- **Accents :** `text-indigo-900` (Autorité) et `bg-indigo-600` (Action/RDV).
- **Typographie :** - Titres & Nom du Docteur : Police Serif élégante (ex: `font-serif`).
  - Corps de texte & Data : Police Sans-serif moderne (ex: `Geist Sans`).
- **Radius :** `rounded-xl` pour les cartes, `rounded-full` pour les boutons.

## 📐 Layout & Composants

- **Bento Grid :** Utilise des grilles asymétriques pour les sections "Expertise" et "Parcours".
- **Glassmorphism :** Applique `backdrop-blur-md bg-white/70` sur les éléments flottants (Sticky Headers, Modals).
- **Animations :** Uniquement des transitions douces (`duration-500`, `ease-in-out`).
- **Icônes :** Utilise exclusivement `lucide-react` pour tous les icônes du projet. Style cohérent avec `size={20}` ou `className="w-5 h-5"` par défaut.
- **Shadcn Custom :** - Boutons avec `active:scale-95` pour le feedback tactile.
  - Cards avec bordures ultra-fines `border-slate-200/60`.

## ♿ Accessibilité (WCAG 2.2)

- Contraste minimal 4.5:1.
- Focus rings obligatoires sur chaque élément interactif (`focus-visible:ring-indigo-500`).
- Les images de soins doivent avoir des `alt` descriptifs et rassurants.

## 📸 Directives Médias

- Priorise les photos réelles du Dr Le Page en action.
- Évite les visuels trop "chirurgicaux" ou sanglants ; privilégie le résultat "Naturel & Sublimé".