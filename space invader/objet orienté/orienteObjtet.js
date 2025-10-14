// le constructeur Personne()

function Personne(prenom, nom, age, genre, interets) {
  this.nom = {
    prenom,
    nom,
  }
  // les attributs au sein du constructeur.

  this.age = age;
  this.genre = genre;
 
  this.interets = interets;
}
//L'ensemble des méthodes est défini dans le prototype :

Personne.prototype.saluer = function () {
  
  alert("Salut! Je suis " + this.nom.prenom + ".");
};
// créer une classe Professeur

function Professeur( prenom, nom, age, interets, matiére){
   
    // La fonction Call permet d'appeler une fonction définie ailleurs
    // Le constructeur ait les mêmes attributs qu'une fonctin définit ailleurs
    
    Personne.call(this, prenom, nom, age, genre, interets);
    
    //créer un nouvel attribut et le définit

    this.matiére
}
//Notre classe Professeur() doit hériter des méthodes définies dans le prototype de Personne()

Professeur.prototype = Object.create(Personne.prototype);
Professeur.prototype.constructor = Professeur;

//définir une nouvelle fonction saluer()

Professeur.prototype.saluer = function () {
  let prefix;

  if (
    this.genre === "mâle" ||
    this.genre === "Mâle" ||
    this.genre === "m" ||
    this.genre === "M"
  ) {
    prefix = "M.";
  } else if (
    this.genre === "femelle" ||
    this.genre === "Femelle" ||
    this.genre === "f" ||
    this.genre === "F"
  ) {
    prefix = "Mme";
  } else {
    prefix = "";
  }

  alert(
    "Bonjour. Mon nom est " +
      prefix +
      " " +
      this.nom_complet.nom +
      ", et j'enseigne " +
      this.matiere +
      ".",
  );
};
