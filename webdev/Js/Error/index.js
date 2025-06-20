try {
  console.log(a + b);
} catch (error) {
  console.log(error);
  console.log('there was an error');
  console.log('it was save in the error log');
}
//console.log('the program is still running');

//working error handler
function addTwoNums(a, b) {
  try {
    if (typeof a != 'number') {
      throw new TypeError('The first argument is not a number.');
    } else if (typeof b != 'number') {
      throw new TypeError('The second argument is not a number');
    }
    console.log(a + b);
  } catch (err) {
    console.log('Error!', err);
  }
}

addTwoNums('4', 4);
console.log('It still works');
