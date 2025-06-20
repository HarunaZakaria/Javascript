class Bird {
  useWings() {
    console.log('Flying!');
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log('Barely flapping!');
  }
}
class Penguin extends Bird {
  useWings() {
    console.log('Diving!');
  }
}
let baldEagle = new Eagle();
let kingPenguin = new Penguin();
console.log(baldEagle.useWings()); // "Flying! Barely flapping!"
console.log(kingPenguin.useWings()); // "Diving!"
