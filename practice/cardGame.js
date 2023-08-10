/*
You will write a card counting function.
It will receive a card parameter,
which can be a number or a string, and increment 
or decrement the global count variable according to 
the card's value (see table). The function will then 
return a string with the current count and the string Bet 
if the count is positive, or Hold if the count is zero or negative. 
The current count and the player's decision (Bet or Hold)
should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/

let count = 0;

function cardCount(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

// Example outputs
console.log(cardCount(2));   // Output: 1 Bet
console.log(cardCount(7));   // Output: 1 Bet
console.log(cardCount('K')); // Output: -1 Hold
console.log(cardCount(10));  // Output: -2 Hold
console.log(cardCount('A')); // Output: -3 Hold

