class Animal {
  name;

  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} says, "Woof woof!"`);
  }

  fetch() {
    console.log('I got the toy! Throw it again!');
  }
}

const ali = new Dog('Ali');
ali.speak();

const callie = new Animal('Callie');
callie.speak();

// const dog = new Dog();
// dog.speak();

// const cat = new Animal();
// cat.speak();
