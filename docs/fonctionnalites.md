# Fonctionnalités et Architecture du projet jimmyvuidart.com

## 1. Présentation générale

**jimmyvuidart.com** est le site web professionnel et portfolio interactif de **Jimmy VUIDART**, Senior Frontend Engineer et Designer Web. L'application a été conçue pour mettre en valeur son profil, ses réalisations, son parcours technique ainsi que pour offrir un canal de prise de contact direct avec des recruteurs et clients potentiels.

Le projet met l'accent sur :
- Une navigation fluide, moderne et accessible.
- Un design épuré combiné à des effets visuels avancés (animations CSS, gradients fluides, glassmorphism, animations au défilement via AOS).
- Une architecture modulaire s'appuyant sur des données structurées et découplées de l'affichage.

---

## 2. Stack technique

L'application repose sur un écosystème moderne centré sur la performance et le rendu statique/hybride :

| Composant | Technologie | Rôle |
|---|---|---|
| **Framework Web** | [Astro](https://astro.build/) (v5) | Générateur de site moderne, rendu optimisé avec architecture en îles |
| **Composants dynamiques** | [Preact](https://preactjs.com/) (v10) | Composants interactifs côté client (ex. sélecteur de langue) |
| **Style & Design** | [Tailwind CSS](https://tailwindcss.com/) (v4) + Vite | Framework utilitaire pour le style et les micro-animations |
| **Animations au scroll** | [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) | Déclenchement fluide d'animations lors du défilement |
| **Génération de documents** | [PDFKit](https://pdfkit.org/) | Génération serveur/API de documents PDF (CV téléchargeable) |
| **Gestionnaire de paquets** | pnpm | Gestion des dépendances monorepo / workspace |
| **CI/CD** | GitHub Actions | Déploiement automatisé vers GitHub Pages |

---

## 3. Fonctionnalités détaillées de l'application

### 3.1. Page d'accueil (`/`)
La page d'accueil sert de vitrine d'introduction :
- **Section Hero** : accroche visuelle avec typographie soignée, titre percutant et sous-titre décrivant le positionnement professionnel.
- **Section À propos (*About*)** : résumé synthétique des compétences clés, des domaines de spécialisation et de la philosophie de travail.
- **Section Domaines d'expertise (*My Expertise*)** : mise en avant des compétences majeures (Développement Web, Design UI/UX, Conseil Technique) sous forme de cartes d'informations.
- **Call-to-Action (CTA)** : incitation à la collaboration renvoyant vers la page de contact.

### 3.2. Page Portfolio (`/portfolio`)
Le portfolio permet d'explorer les projets réalisés :
- **Grille responsive à 3 colonnes** : disposition adaptable selon la taille d'écran.
- **Mise en avant de projets phares (*Showcased Projects*)** : les réalisations majeures occupent les 3 colonnes (pleine largeur) pour maximiser leur visibilité.
- **Fiches projets enrichies** :
  - Visuel d'illustration avec overlay et zoom au survol.
  - Badge indiquant l'année de réalisation.
  - Titre et résumé explicatif de la solution et de la stack.
  - Boutons d'accès directs : lien vers le site en production / démo en ligne et lien vers le dépôt de code GitHub.
- **Filtres thématiques (en préparation)** : boutons de tri par catégorie (*Web Development*, *UI/UX Design*, *Mobile Apps*).

### 3.3. Page Curriculum Vitae / Parcours (`/resume`)
Cette section détaille l'ensemble du profil professionnel de Jimmy VUIDART :
- **Téléchargement du CV en PDF** : boutons d'action intégrés en haut et en bas de page pour télécharger instantanément le CV complet au format PDF.
- **Résumé professionnel (*Professional Summary*)** : paragraphe de synthèse du profil.
- **Expériences professionnelles (*Work Experience*)** : chronologie des postes occupés, entreprises, périodes, résumés de mission, réalisations clés sous forme de liste et étiquettes des technologies employées.
- **Formations & Diplômes (*Education*)** : cursus académique, diplômes obtenus et institutions.
- **Compétences techniques et linguistiques (*Skills*)** : classification par niveau de maîtrise (*Expert*, *Advanced*, *Intermediate*) et compétences linguistiques avec niveaux de fluidité.
- **Certifications professionnelles (*Certifications*)** : diplômes et certifications obtenus, avec organismes délivreurs et dates.

### 3.4. Génération dynamique de CV au format PDF (`/api/generate-resume-pdf`)
L'application propose une route d'API interne (`APIRoute`) Astro qui génère dynamiquement à la volée un document PDF du CV :
- Construit avec **PDFKit** sur le serveur.
- Mise en page vectorielle professionnelle respectant l'identité visuelle du site (palette indigo / ardoise).
- Intègre automatiquement l'ensemble des données du CV (coordonnées, résumé, expériences, formations, compétences, certifications).
- Pagination dynamique avec pied de page numéroté et date de génération.
- Accessible directement au téléchargement via `GET /api/generate-resume-pdf`.

### 3.5. Page de contact (`/contact`)
Facilite la prise de contact pour toute opportunité ou collaboration :
- **Section Coordonnées directes** : cartes d'accès rapide avec icônes vectorielles :
  - Adresse email avec lien `mailto:`
  - Téléphone avec lien `tel:`
  - Localisation géographique
  - Liens vers les réseaux sociaux professionnels (LinkedIn, GitHub).
- **Formulaire de message interactif** : champs nom, email, sujet et message avec contrôle et validation côté client.

### 3.6. Navigation globale, Header et Footer
- **Header fixe avec effet de verre (*glassmorphism*)** : reste visible au défilement, intègre le logo du site, les liens de navigation principaux et le sélecteur de langue.
- **Sélecteur de langue (`LanguageSelector`)** : composant Preact interactif affichant le drapeau et le code de la langue courante avec menu déroulant pour l'anglais et le français (préparation au support i18n).
- **Footer immersif** : fond avec gradient animé en CSS, rappel de la navigation, liens vers les réseaux sociaux et mentions de droits d'auteur dynamiques.

---

## 4. Architecture des données

Le projet suit le principe de séparation stricte entre les données et la vue :
- **Source de vérité du CV** : `data/reactive_resume-*.json` (export structuré Reactive Resume contenant les données brutes).
- **Adaptateur de données** : `src/shared/data/resume-data.ts` transforme et normalise les données JSON vers des interfaces TypeScript (`WorkExperience`, `Education`, `SkillGroup`, `Certification`). Il extrait également les réalisations HTML et les stacks technologiques.
- **Données du portfolio** : `src/shared/data/portfolio-data.ts` stocke les projets selon le modèle `PortfolioItem` (`src/shared/portfolio.model.ts`).
- **Modèle linguistique** : `src/shared/language.model.ts` définit les langues supportées (EN, FR) et les paramètres par défaut.

---

## 5. Déploiement et intégration continue (CI/CD)

- **Automatisation via GitHub Actions** : `.github/workflows/deploy.yml` écoute les nouveaux tags git (`v*`).
- **Génération du livrable** : exécution de `pnpm run build-ghpages` pour produire le build de production configuré avec la base path appropriée.
- **Déploiement sur GitHub Pages** : publication automatique du dossier `dist/` sur la branche `gh-pages`.

---

## 6. Pistes d'évolutions et améliorations identifiées

1. **Internationalisation complète (i18n)** : connecter le sélecteur de langue existant à un système de dictionnaire bilingue (EN / FR) sur l'ensemble des pages.
2. **Traitement serveur du formulaire de contact** : relier le formulaire à un service d'envoi d'emails (ex. Resend, Formspree ou serveur SMTP).
3. **Correction de la chaîne de build pnpm** : ticket `jkjmv9aucuj8qhx` créé pour restaurer les checksums d'intégrité de `pnpm-lock.yaml`.
