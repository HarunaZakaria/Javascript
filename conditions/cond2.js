/* 
The most basic operator is the equality operator ==. The equality operator compares two values and 
returns true if they're equivalent or false if they are not. Note that equality is different from 
assignment (=), 
which assigns the value on the right of the operator to a variable on the left.
*/

function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
 // console.log(equalityTest(11)); // returns Not Equal
function birthDay(day) {
    if(day == 13) {
        return "Happy Birthday To You!"
    }
    return "Today Is Not Your Birthday"
}
//console.log(birthDay('13')); // returns "Happy Birthday To You"
//console.log(birthDay(14)); // returns "Today Is Not Your Birthday"


function fullName(name) {
    if(name === "Haruna Zakaria") {
        return "Welcome to the party Haruna Zakaria!"
    }
    return "You are not Haruna Zakaria"
}
console.log(fullName("Haruna"))// this return  "You are not Haruna Zakaria"
