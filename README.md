<div align="center">

# 🧬 Jeu de la Vie (Game of Life)

**Une implémentation interactive du célèbre automate cellulaire de John Conway.**

<br>

<img src="https://img.shields.io/badge/Projet-Personnel-9b59b6?style=for-the-badge&logo=labview&logoColor=white" />
<img src="https://img.shields.io/badge/Type-Algorithme-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Stack-HTML_CSS_JS-yellow?style=for-the-badge" />

</div>

---

## 📄 À propos du projet

Ce projet est une récréation en code du "Jeu de la Vie", un automate cellulaire imaginé par le mathématicien John Conway en 1970. C'est un "jeu à zéro joueur", ce qui signifie que son évolution est déterminée uniquement par l'état initial.

J'ai réalisé ce projet pour m'entraîner sur la **logique algorithmique** et la manipulation dynamique du DOM en JavaScript pur.

### 📜 Les Règles implémentées
Chaque cellule de la grille évolue selon 4 règles simples :
1. **Survie** : Une cellule vivante avec 2 ou 3 voisines reste en vie.
2. **Mort (Isolement)** : Une cellule avec moins de 2 voisines meurt.
3. **Mort (Surpopulation)** : Une cellule avec plus de 3 voisines meurt.
4. **Reproduction** : Une cellule morte avec exactement 3 voisines devient vivante.

---

## 🛠 Stack Technique

Projet réalisé sans librairie externe pour un défi logique pur.

<div align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,vscode,git&theme=dark" />
</div>

* **HTML5** : Structure de la grille et des contrôles.
* **CSS3** : Design de l'interface et visualisation des états (cellules vivantes/mortes).
* **JavaScript (ES6+)** : Cœur logique de la simulation (boucle de rendu, calcul des voisins, mise à jour des états).
