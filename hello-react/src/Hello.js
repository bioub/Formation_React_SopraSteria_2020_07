// /**
//  * Mon composant Hello
//  * @param {object} props
//  * @param {string} props.firstName Le prénom
//  */
// function Hello(props) {
//   // return 'Hello ' + props.firstName.toUpperCase() + ' !!!';
//   return `Hello ${props.firstName.toUpperCase()} !!!`
// }

// function Hello({ firstName = '' }) {
//   return `Hello ${firstName.toUpperCase()} !!!`
// }

// function Hello({ firstName = '' }) {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';
//   divEl.innerText = `Hello DOM ${firstName.toUpperCase()} !!!`;
//   document.body.appendChild(divEl);
//   return '';
// }

// function Hello({ firstName = '' }) {
//   return React.createElement('div', { className: 'Hello' }, [
//     'Hello ',
//     React.createElement('span', { className: 'prenom' }, firstName),
//     ' !!!',
//   ]);
// }

// React.createElement('div', { className: 'Hello' }, [
//   'Hello ',
//   React.createElement('span', { className: 'prenom' }, firstName),
//   ' !!!',
// ]);

import React from 'react';

function Hello({ firstName = '' }) {
  return (
    <div className="Hello">
      Hello <span className="prenom">{firstName}</span> !!!
    </div>
  );
}

export default Hello;
