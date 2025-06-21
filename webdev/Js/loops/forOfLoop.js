let names = ['Haruna', 'Zeinab Nurse', 'Zeinab Tailor', 'Ruhia', 'Mom'];
for (let name of names) {
  //console.log(name);
}

let dairy = [
  'cheese',
  'sour cream',
  'milk',
  'yogurt',
  'ice cream',
  'milkshake',
];
function logDairy() {
  for (let dair of dairy) {
    console.log(dair);
  }
}
//output each daily
//logDairy();

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let key of Object.keys(bird)) {
    console.log(key, ':', bird[key]);
  }
}

birdCan();
