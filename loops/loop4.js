/*
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/


function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}


// Example contacts array
const contacts = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 25
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28
  }
];

console.log(contacts.length);
/*
console.log(lookUpProfile("John", "lastName")); // Output: "Doe"
console.log(lookUpProfile("Jane", "age"));      // Output: 25
console.log(lookUpProfile("Alice", "email"));   // Output: "No such property"
console.log(lookUpProfile("Mike", "age"));      // Output: "No such contact"

In this example, the lookUpProfile function takes a name and a prop as arguments.
 It iterates through the contacts array, checking if a contact's firstName matches the given name.
  If a match is found, it checks if the contact has the specified prop as a property. 
  Depending on the outcomes, it returns the appropriate message. If no matching contact is found, 
  it returns "No such contact".
*/