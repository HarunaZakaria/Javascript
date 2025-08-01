//add function
function Add(a, b) {
  return a + b;
}

//subtract function
function Subtract(a, b) {
  return a - b;
}

//multiply function
function multiply(a, b) {
  return a * b;
}

//divide function
function Divide(a, b) {
  return a / b;
}

//export individual functions
module.exports = {
  Add: Add,
  Subtract: Subtract,
  multiply: multiply,
  Divide: Divide,
};
