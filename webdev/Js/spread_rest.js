//rest operator
const [first, ...rest] = [1, 2, 3, 4];

//console.log(first); // 1

//console.log(rest); // [2, 3, 4]

//spread operator
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

//console.log(sum(1, 2, 3)); // 6

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
//console.log(fruitsAndBerries); // outputs a single array

const greeting = 'Hello';
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']
