//The parseInt() function parses a string and returns an integer. Here's an example:

const a = parseInt("007");

//The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

//The function call looks like:

parseInt(string, radix);
//And here's an example:

const b = parseInt("11", 2);
//The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.


/*
Use the Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:
*/

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

//This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

/*
Use the conditional operator in the checkEqual 
function to check if two numbers are equal or not. 
The function should return either the string Equal or the string Not Equal.
*/
function chechEqual(a, b) {
    return a == b ? "Equal" : "Not Equal"
};

chechEqual(3, 5); // this will print out Not Equal

/*
Use Multiple Conditional (Ternary) Operators
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:
*/

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

//The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}

//It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

/*
In the checkSign function, use multiple conditional operators - following the recommended format
 used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function 
 should return positive, negative or zero.
*/

function checkSign(num) {
    return (num > 0) ? "positive"
      : (num < 0) ? "negative"
      :  "zero";
  
  }
  
  checkSign(10);

/*
 write a recursive function that returns an array containing the numbers 1 through n. 
 This function will need to accept an argument, n, representing the final number. 
 Then it will need to call itself with progressively smaller values of n until it reaches 1. 
 You could write the function as follows:
*/

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
//console.log(countup(5));//The value [1, 2, 3, 4, 5] will be displayed in the console.

/*
We have defined a function called countdown with one parameter (n). 
The function should use recursion to return an array containing the 
integers n through 1 based on the n parameter. If the function is 
called with a number less than 1, the function should return an empty array. 
For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
Your function must use recursion by calling itself and must not use loops of any kind.
*/
function countdown(n){
    if (n < 1) {
        return []
    } else {
        
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

/*
We have defined a function named rangeOfNumbers with two parameters. 
The function should return an array of integers which begins with a 
number represented by the startNum parameter and ends with a number 
represented by the endNum parameter. The starting number will always be 
less than or equal to the ending number. Your function must use recursion 
by calling itself and not use loops of any kind. It should 
also work for cases where both startNum and endNum are the same.
  */

if (startNum > endNum) {
return [];
} else {
const countArray = rangeOfNumbers(startNum, endNum - 1);
countArray.push(endNum);
return countArray;
} 
