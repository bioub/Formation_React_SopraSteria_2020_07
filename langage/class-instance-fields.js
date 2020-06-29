class Contact {
  #name = 'Romain';
  hello() {
    console.log('Hello ' + this.#name);
  }
}

const romain = new Contact();
console.log(romain.#name);
romain.hello();
