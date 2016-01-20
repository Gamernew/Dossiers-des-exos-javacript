/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

console.log("Bienvenue dans le gestionnaire des contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");

var contact = {

  init: function(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  },
  decrire: function() {
    var description = "Nom : " + this.nom + ", Prénom : " + this.prenom;
    return description;
  }
};
var contact1 = Object.create(contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");
var contacts = [];

contacts.push(contact1);
contacts.push(contact2);

function addContact() {
  var newContact = Object.create(contact);
  newContact.init(prompt("Saisissez un nom :"), prompt("saisissez un prénom : "));
  contacts.push(newContact);
  console.log("Votre contact est ajouté.");
}
while (saisie != 0) {

  var saisie = Number(prompt("Choissisez une option : "));

  if (1 == saisie) {
    console.log("Voici la liste de tous vos contacts : ");
    contacts.forEach(function(contact) {
      console.log(contact.decrire());
    });
  } else if (2 == saisie) {
    addContact();
  } else if (0 == saisie) {
    console.log("Au revoir ! ");

  } else {
    Number(prompt("Votre numéro d'option n'est pas valide !"));
  }
}
