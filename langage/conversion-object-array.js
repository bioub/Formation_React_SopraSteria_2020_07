const contact = {
  prenom: 'Romain',
  nom: 'Bohdanowicz',
};

// Convertir en tableau de clés (ES5)
console.log(Object.keys(contact)); // ['prenom', 'nom']

// Convertir en tableau de clés (ES9/ES2018)
console.log(Object.values(contact)); // ['Romain', 'Bohdanowicz']

// Convertir en tableau de tuples [clé, valeur] (ES9/ES2018)
console.log(Object.entries(contact)); // [['prenom', Romain'], ['nom', 'Bohdanowicz']]
