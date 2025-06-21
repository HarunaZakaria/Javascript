const products = [
  ['Laptop', 1000],
  ['Phone', 500],
  ['Tablet', 700],
];
// Destructure the second product's name and price from the array
const [secondProductName, secondProductPrice] = products[1];
console.log(`Second product: ${secondProductName}`); // phone
console.log(`Second product price: ${secondProductPrice}`); //500
// or
const [, , [thirdProductName, thirdProductPrice]] = products;
console.log(`Third product: ${thirdProductName}`); //tablet
console.log(`Thirdproduct price: ${thirdProductPrice}`); //700
