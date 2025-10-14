const main=document.querySelector("main")
const screenHeight = window.innerHeight
const screenWidth = window.innerWidth
const bottomLimit= window.innerWidth
const topLimit = window.innerWidth
let navetteDetruite = false;

// fonction de collision
let isCollide=function(a,b ){
    return!(
        ((a.y + a.height) < b.y)||
        (a.y > (b.y + b.height))||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width)) 
    )
}
//Les vaisseaux pnj
for (i=0; i<=7; i++){
    let croiseur= document.createElement("img")
    croiseur.id= "croiseur"
    croiseur.className="ennemy"
    croiseur.src="script/images.jpg"
    croiseur.style.width="100px"
    croiseur.style.height="75px"
    croiseur.style.position="absolute"
    croiseur.style.left=200*i+"px"
    croiseur.style.top="0px"
main.appendChild(croiseur)
}
//Mouvement des vaisseaux ennemi
let croiseurs= document.querySelectorAll(".ennemy") //selectionne tout les ennenmis
croiseurs.forEach((croiseur) => {
    let croiseursMoveInterval = setInterval(() => {
        let currentTop = parseInt(croiseur.style.top) ;
            if (currentTop < screenHeight - parseInt(croiseur.style.height)){
            croiseur.style.top = (currentTop + 1) + "px";            
        } else {
            croiseur.remove();
            clearInterval(croiseursMoveInterval);
        }
    }, 16);     
}) 
// Sélectionner un croiseur aléatoire
function getRandomCroiseur() {
    const croiseurs = document.querySelectorAll(".ennemy");
    if (croiseurs.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * croiseurs.length);
    return croiseurs[randomIndex];//renvois un tableau avec les index en odre aleatoire
}
function tirerDepuisCroiseur() {
    const croiseur = getRandomCroiseur();
    if (!croiseur) return;

    const laserCroiseur = document.createElement("img");
    laserCroiseur.src = "script/blast-harrier-laser.jpg"; // image différente si tu veux
    laserCroiseur.style.width = "75px";
    laserCroiseur.style.height = "35px";
    laserCroiseur.style.position = "absolute";

    const croiseurLeft = parseInt(croiseur.style.left);
    const croiseurTop = parseInt(croiseur.style.top);

    laserCroiseur.style.left = (croiseurLeft + 0) + "px";
    laserCroiseur.style.top = (croiseurTop + 75) + "px"; // juste sous le croiseur

    main.appendChild(laserCroiseur);
    

    let interval = setInterval(() => {
        let currentTop = parseInt(laserCroiseur.style.top);
        if (currentTop > screenHeight - parseInt(laserCroiseur.style.height)) {
            laserCroiseur.remove();
            clearInterval(interval);
        } else {
            laserCroiseur.style.top = (currentTop + 10) + "px";

            // Collision avec la navette
            const laserRect = laserCroiseur.getBoundingClientRect();
            const navetteRect = navette.getBoundingClientRect();//retourne un objet DOMRect fournissant des informations sur la taille d'un élément et sa position ...

            if (isCollide(laserRect, navetteRect)) {
                laserCroiseur.remove();
                clearInterval(interval);
                navette.src = "script/explosion-de-supernova-dans-l-espace-.jpg"; // effet visuel
                navetteDetruite = true
                setTimeout(() => {
                    navette.remove(); // ou autre effet de fin
                }, 300);
            }
        }
    }, 16);
}

//Création navette joueur
const navette = document.createElement("img")
navette.src="script/navette.jpg"
navette.style.width="100px"
navette.style.height="100px"
navette.style.position="absolute"
navette.style.left=0
navette.style.bottom=0
main.appendChild(navette)

//Mouvement de la navette joueur
let moveInterval=null
let direction = null
document.addEventListener('keydown',(event)=>{
       if (moveInterval) return;
    if (event.key==="ArrowRight"){
        direction="right"
    } else if(event.key==="ArrowLeft"){
        direction="left"
    }
    if (direction){
        moveInterval = setInterval(() => {
            let currentleft = parseInt(navette.style.left ||10)
            let navetteWidth = navette.offsetWidth
            let windowWidth = window.innerWidth
            if (direction ==="right" && currentleft+navetteWidth<windowWidth){
                navette.style.left = (currentleft+10)+"px" 
            }else if (direction ==="left" && currentleft>10){
                navette.style.left = (currentleft-10)+"px"
            }
        }, 16)
    }   
})
document.addEventListener("keyup",(event)=>{
    if (event.key==="ArrowRight" || event.key==="ArrowLeft" ){// arret des la touche relaché
        clearInterval(moveInterval)
        moveInterval=null
        direction=null
    }
})

// Tir laser
function tirerLaser() {
    const laserNavette = document.createElement("img");
    laserNavette.src = "script/rayon laser 1.jpg";
    laserNavette.style.width = "100px";
    laserNavette.style.height = "50px";
    laserNavette.style.position = "absolute";

    const navetteLeft = parseInt(navette.style.left);
    const navetteWidth = navette.offsetWidth;

    laserNavette.style.left = navetteLeft + (navetteWidth / 2 - 50) + "px";
    laserNavette.style.bottom = "100px";

    main.appendChild(laserNavette);

    let laserInterval = setInterval(() => {
        let currentBottom = parseInt(laserNavette.style.bottom);
        if (currentBottom > screenHeight) {
            laserNavette.remove();
            clearInterval(laserInterval);
        } else {
            laserNavette.style.bottom = currentBottom + 15 + "px";

            // Collision avec ennemis
            croiseurs.forEach((ennemy) => {
                if (ennemy.parentElement) {
                    let laserRect = laserNavette.getBoundingClientRect();//retourne un objet DOMRect fournissant des informations sur la taille d'un élément et sa position ...
                    let ennemyRect = ennemy.getBoundingClientRect();

                    if (isCollide(laserRect, ennemyRect)) {
                        ennemy.src="script/explosion-de-supernova-dans-l-espace-.jpg"
                        setTimeout(() => {
                        ennemy.remove();
                    }, 300);

                    laserNavette.remove();
                    clearInterval(laserInterval);
                    }
                }
            });
        }
    }, 16);
}
 // contrôle du ti.

document.addEventListener("keydown", (event) => {
   if (event.code === "Space" && !navetteDetruite){
        tirerLaser()
   }
});
document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        tirerLaser.remove();
        
    }
});    

setInterval(() => {
    tirerDepuisCroiseur();
}, 750); 