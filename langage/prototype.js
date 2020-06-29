function Contact() {
  this.name = 'Romain';
  this.hello = function() {
    console.log('Hello (object) ' + this.name);
  }
}

Contact.prototype.hello = function() {
  console.log('Hello (prototype) ' + this.name);
}

// class Contact {
//   constructor() {
//     this.name = 'Romain';
//   }
//   hello() {
//     console.log('Hello ' + this.name);
//   }
// }

console.log(typeof Contact); // function

const romain1 = new Contact();
romain1.hello();

const romain2 = new Contact();
romain2.hello();

console.log(romain1.hello === romain2.hello); // true