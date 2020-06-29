// /**
//  * Mon composant Hello
//  * @param {object} props 
//  * @param {string} props.firstName Le prénom
//  */
// function Hello(props) {
//   // return 'Hello ' + props.firstName.toUpperCase() + ' !!!';
//   return `Hello ${props.firstName.toUpperCase()} !!!`
// }


function Hello({ firstName = '' }) {
  return `Hello ${firstName.toUpperCase()} !!!`
}

export default Hello;
