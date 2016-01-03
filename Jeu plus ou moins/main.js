

  var nb = Math.floor(Math.random() * 101); // génère un nombre aléatoire de 1 à 100
  var cpt = 0; // nb de coups

  

function indice() {
  var saisie = document.getElementById("proposition").value; // prend le nombre x dans l'input et la stock dans saisie

  if (saisie > nb && saisie != nb) { // si saisie est plus grand que nb et saisie n'est pas égale à nombre
    cpt++; // incrémente cpt +1 pour les coups d'essai
    document.getElementById("indice").innerHTML = "C'est moins"; // affiche dans l'id indice "C'est moins"
  } else if (saisie < nb && saisie != nb) { // sinon si saisie est plus petit que nb et saisie n'est pas égale à nombre
    cpt++; // incrémente cpt +1 pour les coups d'essai
    document.getElementById("indice").innerHTML = "C'est plus"; // affiche dans l'id indice "C'est plus"
  } else if (saisie == nb){ //sinon si saisie égale à nb
    document.getElementById("indice").innerHTML = "Bravo, tu as gagne en " + cpt + " coups !"; // affiche dans l'id incide "Bravo, tu as gagne en " + cpt + " coups !"
  }
  // else {
  //   document.getElementById("indice").innerHTML = "essayer encore";
  // }

}
