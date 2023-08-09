/*
Add the inequality operator != in the if statement so that the function will 
return the string Not Equal when val is not equivalent to 99.
*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
testNotEqual(10);// returns "Not Equal"


/*
The strict inequality operator (!==) is the logical opposite 
of the strict equality operator. It means "Strictly Not Equal" 
and returns false where strict equality would return true and vice versa. 
The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/


/*
The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, 
it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert 
data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
*/
