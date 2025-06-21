// Task 1: Code a Person class
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

// Task 2: Code a Worker class
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

// Task 3: Code an intern object, run methods
function intern() {
  let intern = new worker(0, 10, 'Bob', 21, 110);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
function manager() {
  let manager = new Worker(100, 30, 'Alice', 30, 120);
  manager.doSomethingFun();
  return manager;
}
