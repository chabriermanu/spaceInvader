🎮 Space Invader - Premier Projet JavaScript

TP débutant - Découverte de la Programmation Orientée Objet @ AFPA Saint-Jean-de-Védas

Premier projet en JavaScript réalisé 3-4 semaines après le début de la formation. Découverte de la manipulation du DOM et des animations.
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)

🎯 Objectif du TP
Première approche du JavaScript avec :

Manipulation du DOM
Gestion des événements clavier
Animations avec setInterval()
Création dynamique d'éléments HTML

🕹️ Fonctionnalités
✅ Vaisseau joueur contrôlable au clavier
✅ Système de tir (touche Espace)
✅ Génération de 6 vaisseaux ennemis
✅ Déplacement automatique des ennemis vers le bas
✅ Animation fluide (16ms par frame)
💻 Code principal
Création du joueur
javascriptlet player = document.createElement("img")
player.setAttribute("src","script/navette.jpg")
// Positionnement et style via JavaScript
Contrôles clavier
javascriptdocument.addEventListener('keydown', (event) => {
    // ArrowRight / ArrowLeft : Déplacement
    // Space : Tir
})
Génération des ennemis
javascriptfor (i=0; i<=5; i++){
    let starShip = document.createElement("img")
    // 6 vaisseaux ennemis alignés en haut
}
Animation des ennemis
javascripttroupeEnnemy.forEach((vaisseau) => {
    // Descente progressive avec setInterval
})
🎮 Contrôles

← Flèche Gauche : Déplacement vers la gauche
→ Flèche Droite : Déplacement vers la droite
Espace : Tirer

🛠️ Technologies

JavaScript Vanilla : Manipulation DOM pure
HTML : Structure
setInterval() : Animations
addEventListener() : Événements clavier

📝 Concepts découverts
✅ document.createElement()
✅ Modification du style via JavaScript
✅ addEventListener() pour les événements
✅ setInterval() / clearInterval()
✅ querySelector() / querySelectorAll()
✅ Manipulation de propriétés CSS en JS
✅ Création dynamique de projectiles
🚀 Installation
bash# Cloner le repo
git clone https://github.com/chabriermanu/spaceInvader.git

# Ouvrir index.html dans un navigateur
🎓 Contexte
Formation : Développeur Web et Web Mobile
Organisme : AFPA Saint-Jean-de-Védas
Type : Premier TP JavaScript
Période : 3-4 semaines après début de formation (2025)
Niveau : Débutant - Découverte du langage
💡 Apprentissages
Ce projet m'a permis de découvrir :

La manipulation du DOM en JavaScript
La gestion des événements clavier
Les animations avec setInterval
Le positionnement absolu en CSS via JS
La création dynamique d'éléments (projectiles)

👨‍💻 Auteur
Emmanuel Chabrier
Développeur Web & Web Mobile en formation
🔗 [GitHub : chabriermanu](https://github.com/chabriermanu)  
🔗 [LinkedIn : Emmanuel Chabrier](https://fr.linkedin.com/in/emmanuel-chabrier-160b68197)
📍 Saint Genies de Fontedit, France
🔍 Recherche stage 10 semaines - Février 2026

Premier projet JavaScript - Formation AFPA 2025
