# projet-ts

## Auteurs : 
- Johan Schaeffer & Loic Durand

## Fonctionnalitées réalisées :

### Affichage de la photo principale
* **Chargement initial :** Affichage automatique d'une photo par défaut (ID 105) dès l'ouverture du site.
* **Extraction des données :** Récupération et rendu du titre, de la description, du format et de la résolution.
* **Génération dynamique :** Utilisation de **Handlebars** (`#photoTemplate`) pour assembler et injecter le bloc HTML de l'image.
* **Utilisation de l'API :** Suivi des URIs fournies par l'API pour charger en arrière-plan :
  * Le nom de la **catégorie** de l'image.
  * La liste complète des **commentaires** associés dans un <li>.

### Galerie de vignettes
* **Chargement de la gallerie :** Appel à l'API et rendu de la galerie uniquement lors du clic sur le bouton *"charger galerie"*.
* **Rendu :** Affichage d'une grille via un template Handlebars (`#galleryTemplate`).
* **Suivi des identifiants :** Stockage de l'ID unique de chaque photo directement sur sa vignette via l'attribut `data-photoId`.

### Système de pagination
* **Mémorisation de l'état :** Suivi en mémoire de la page de la galerie actuellement affichée (`currentGallery`).
* **Navigation :** Utilisation des liens de pagination fournis par les réponses de l'API (`links.next`, `links.prev`, etc.).
* **Boutons de déplacement :** Création des boutons de navigation pour basculer de page instantanément :
  * `first` : Retour à la première page.
  * `prev` : Page précédente.
  * `next` : Page suivante.
  * `last` : Saut à la dernière page.

### Interactions
* **Gestion d'événements :** Écouteur unique sur le conteneur de la galerie pour intercepter les clics sur les vignettes.
* **Navigation par l'URL :** Le clic sur une vignette change dynamiquement le hash de l'adresse du navigateur (`index.html#id`).
* **Mise à jour :** Écoute de l'événement global `hashchange` pour rafraîchir à la volée la photo grand format, sa catégorie et ses commentaires sans recharger l'application.
