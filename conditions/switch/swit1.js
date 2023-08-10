/* 
If you need to match one value against many options, you can use a switch statement. 
A switch statement compares the value to the case statements which define various possible values. 
Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.

Here is an example of a switch statement:
*/

switch (fruit) {
  case "apple":
    console.log("The fruit is an apple");
    break;
  case "orange":
    console.log("The fruit is an orange");
    break;
}
/*
case values are tested with strict equality (===). 
The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.
*/

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
      default:
        answer = "unknown";
    }
  
    // Only change code above this line
    return answer;
  }

  /*
  If the break statement is omitted from a switch statement's case, 
  the following case statement(s) are executed until a break is encountered. 
  If you have multiple inputs with the same output, you can represent them in a
    switch statement like this:
  */
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

//Cases for 1, 2, and 3 will all produce the same result.

/*Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
  */

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
    answer = "Low";
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid";
    break;
    case 7:
    case 8:
    case 9:
    answer = "High"
  }
  
  
    // Only change code above this line
    return answer;
  }


/*
If you have many options to choose from, 
a switch statement can be easier to write than many 
chained if/else if statements. The following:
*/

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

//can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

