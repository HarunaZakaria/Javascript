// create a person class
class Person {
  constructor(name = 'Tom', age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
    console.log('Energy is increasing, currently at:', this.energy);
  }
  doSomethingFun() {
    this.energy -= 10;
    console.log('Energy is decreasing, currently at:', this.energy);
  }
}

class Worker extends Person() {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    this.xp = xp;
    this.hourlyWage = hourlyWage;
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  goToWork() {
    this.xp += 10;
    console.log('your experience has been increased by: ', this.xp);
  }
}
