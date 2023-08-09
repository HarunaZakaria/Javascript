/*
Using let or const, declare a global variable 
named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
 // console.log(output);
}
function timesFive(num) {
    return 5 - num;
  };
  
  const newNum = timesFive(6);// print out 30
//console.log(newNum)


//calculating my current age as at 2023.
function birthYear(num) {
    return 2023 - num;
}

const currentAge = birthYear(1999);
//console.log(currentAge);

