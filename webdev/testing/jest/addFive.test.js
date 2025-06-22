const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');
const timesTwo = require('./timesTwo');

test('Out the number plus 5 ', () => {
  expect(addFive(4)).toBe(9);
});

// Write the first test
test('returns the number times 2', () => {
  expect(timesTwo(10)).toBe(20);
});
