class Enemy {
  name;
  healthPoints = 100;
  x = 0;
  y = 0;

  constructor(name, hp) {
    this.name = name;

    if (hp !== undefined) {
      this.healthPoints = hp;
    }
  }

  hit() {
    this.healthPoints = this.healthPoints - 1;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const covid19 = new Enemy('COVID-19', 1000000);
covid19.speak();

console.log(covid19.healthPoints);
covid19.hit();
console.log(covid19.healthPoints);

const sars = new Enemy('SARS', 100000);
sars.speak();
console.log(sars.healthPoints);
sars.hit();
console.log(sars.healthPoints);

const mers = new Enemy('MERS', 10000);
mers.speak();
console.log(mers.healthPoints);
mers.hit();
console.log(mers.healthPoints);
