// define an array of even numbers less than 16.
const evenNum = [2, 4, 6, 8, 10, 12, 14];
// use for loop to loop through the numbers
for (const n of evenNum){
   // console.log(n);
}
const end = 2;
// this remove the first two evenNum
const removeNum = evenNum.splice(end);
console.log(removeNum);
