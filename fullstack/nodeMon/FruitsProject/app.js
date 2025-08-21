const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
}

const fruitsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

const fruit = new Fruit({
  name: 'Banana',
  rating: 8,
  review: 'Nice fruit',
});
//add only one fruits
//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: 'Harunzy',
  age: 26,
});

//add only one name
//person.save()

const Daud = new Person({
  name: 'Daud',
  age: 32,
});
const Hamis = new Person({
  name: 'Hamis',
  age: 30,
});
const Alhaj = new Person({
  name: 'Alhaj',
  age: 35,
});

//add many names
Person.insertMany([Daud, Hamis, Alhaj]);
