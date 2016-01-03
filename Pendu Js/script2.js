var mots = ["chat", "dromadaire", "poulpe"];
var motADeviner;

function generatePage() {
  // On tire au hasard un mot, ça devient le mot à deviner
  var i = random(0, mots.length);
  motADeviner = mots[i];
  // window.alert(motADeviner);
  divLettres = document.getElementById("lettres");
  for (var i = 0; i < motADeviner.length; i++) {
    // on met un id = numéro de la lettre
    divLettres.innerHTML += "<input type='text' id='" + i + "'><button onclick='verifier(" + i + ");'>OK</button><br>";
  }

}

function verifier(numeroLettre) {
  var lettreAController = document.getElementById(numeroLettre).value;
  // window.alert(lettreAController);
  // On contrôle si la lettre utilisateur est la même que le mot à deviner
  if(lettreAController == motADeviner[numeroLettre]){
    window.alert("bon");

  }else{
    window.alert("mauvais")
  }

}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
