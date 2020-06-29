// class Contact {
//   constructor() {
//     this.name = 'Romain';
//   }
//   hello() {
//     const that = this;
//     setTimeout(function() {
//       console.log('Hello ' + that.name);
//     }, 1000);
//   }
// }

// class Contact {
//   constructor() {
//     this.name = 'Romain';
//   }
//   hello() {
//     setTimeout(function() {
//       console.log('Hello ' + this.name);
//     }.bind(this), 1000);
//   }
// }

class Contact {
  constructor() {
    this.name = 'Romain';
  }
  hello() {
    setTimeout(() => {
      console.log('Hello ' + this.name);
    }, 1000);
  }
}

const romain = new Contact();
romain.hello();
