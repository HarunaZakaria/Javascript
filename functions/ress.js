const arr0 = [2,4,5,6,7]
// it copy arr0
let arr1 = [...arr0] //spread operator ...
// it adds 9 to array1
arr1.push(9)
// this concatnate the two arrays
let array_1 = [...arr0, 'and', ...arr1]

console.log(array_1)
