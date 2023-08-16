/*
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
*/
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}


/*
A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
*/

const ourArrays = [];

for (let i = 10; i > 0; i -= 2) {
  ourArrays.push(i);
}

/*
A common task in JavaScript is to iterate through the 
contents of an array. One way to do that is with a for loop.
 This code will output each element of the array arr to the console:

*/
const arrs = [10, 9, 8, 7, 6];

for (let i = 0; i < arrs.length; i++) {
 // console.log(arr[i]);
}

/*
Declare and initialize a variable total to 0. Use a 
for loop to add the value of each element of the myArr array to total.
*/
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]
  //console.log(total)
}

/*
Nesting For Loops
If you have a multi-dimensional array, you can use the same logic as the prior waypoint 
to loop through both the array and any sub-arrays. Here is an example:
*/

const arr = [
  [1, 2, 3], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
 //   console.log(arr[i][j]);
  }
}


//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

const array = [
  [1, 2],
  [3, 4],
  [5, 6, 7]
];

//console.log(multiplyAll(array)); // Output: 5040
