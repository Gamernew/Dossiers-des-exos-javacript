var mot_mystere = ["Chat", "Ours", "Chine", "France", "Simon"];
var mot_a_trouver = "";
mot_a_trouver = mot_mystere[Math.floor(Math.random() * mot_mystere.length)];
console.log(mot_a_trouver);
//génère les inputs et les bonton du mot à trouver
for (var i = 0; i < mot_a_trouver.length; i++) {
  document.getElementById('mots').innerHTML += "<input id=inp" + i + ">" + "</input>";
  document.getElementById('entre').innerHTML += "<p id=tiret" + i + ">-</p>";
  document.getElementById('validation').innerHTML += "<button onclick=compare(" + i + ");" + " id=ok" + i + ">ok</button>";
}

function compare(num) {
  for (var i = 0; i < mot_a_trouver.length; i++) {
    var lettre = document.getElementById('inp' + num).value;
    if ((lettre == mot_a_trouver[i]) && (num - 1 == i)) {
      document.getElementById('tiret' + num).innerHTML = lettre;
    }
  }
}
