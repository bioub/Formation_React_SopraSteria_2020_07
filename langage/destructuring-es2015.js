const name = 'Romain Bohdanowicz';
// const tmp = name.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

//    ['Romain', 'Bohdanowicz']
const [prenom, nom] = name.split(' ');
console.log(prenom, nom);

const props = {
  firstName: 'Romain',
  lastName: 'Bohdanowicz',
};
//    {firstName: 'Romain', lastName: 'Bohdanowicz'}
const {firstName: prenom2, lastName: nom2} = props;
console.log(prenom2, nom2);

// const {firstName: firstName, lastName: lastName} = props;
// console.log(firstName, lastName);

// ES2015 Shorthand property + default param
const {firstName = '', lastName = ''} = props;
console.log(firstName, lastName);