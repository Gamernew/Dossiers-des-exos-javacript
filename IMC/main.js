function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
  function calcul() {
    try {
    var taille = document.getElementById('taille').value;
    if (taille == 0) {
      throw new UserException("la taille ne doit pas être nulle");
    }
    var poids = document.getElementById('poids').value;
    if (poids == 0) {
      throw new UserException("le poids ne doit pas être nulle");
    }
    var IMC = (poids / (taille * taille)).toFixed(2);
    compare(IMC);
  } catch(e) {
    alert("Erreur : " + e.message);
  }
  }

function compare(IMC) {
  if (IMC < 16 || IMC > 35) {
    alert("Danger ! Votre IMC est de " + IMC);
  } else if (IMC < 18 || IMC > 25) {
    alert("Warning ! Votre IMC est de " + IMC);
  } else if (IMC > 18 && IMC < 25) {
    alert("info ! Votre IMC est de " + IMC);
  }
}
