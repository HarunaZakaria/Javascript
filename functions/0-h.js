//this is an array of numbers
const num = [23, 4, 54, 25, 18, 29]

//this one a sign num to maxValue, which is going to return the 
//the highest number of the array
let maxValue = Math.max(... num)
console.log(maxValue);

//this one define months in a year
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
// this return months in a year
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
