/*
The logical or operator (||) returns true if either of the operands is true. 
Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). 
This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints.
*/
if (num > 10) {
    return "No";
  }
  if (num < 5) {
    return "No";
  }
  return "Yes";
 /* 
 This code will return Yes if num is between 5 and 10 (5 and 10 included). 
  The same logic can be written with the logical or operator.
  */
  if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";
