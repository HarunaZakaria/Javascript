/* 
An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.
*/

const myArray = [["John", 23], ["cat", 2]];
//Push ["dog", 3] onto the end of the myArray variable.
myArray.push(["dog", 3]);


/*
Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
/*
console.log(oneDown);//will display the value 6
console.log(threeArr);//will display the value [1, 4].
*/


/*pop() always removes the last element of an array. 
What if you want to remove the first?
That's where .shift() comes in. It works just like .pop(), 
except it removes the first element instead of the last.
*/
Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

//removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

// to add elements in front of the array use unshift()

// this function print out "Haruna"

function myName() {
    console.log("Haruna");
};
