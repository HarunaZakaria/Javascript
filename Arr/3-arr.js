//copy an array
const names = ['Haruna', 'Cury', 'Aziz', 'Dauda', 'Hamis'];
// Create a copy using spread syntax.
const namesCopy = [...names];
// Create a copy using the slice() method.
const namesCopy1 = names.splice();
console.log(namesCopy1);
