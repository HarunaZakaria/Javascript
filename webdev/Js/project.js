// // Provided data
// const dishData = [
//   { name: 'Italian pasta', price: 9.55 },
//   { name: 'Rice with veggies', price: 8.65 },
//   { name: 'Chicken with potatoes', price: 15.55 },
//   { name: 'Vegetarian Pizza', price: 6.45 },
// ];

// const tax = 1.2; // Tax Value (e.g., 20% tax, so price * 1.20)

// // Step 2: Define getPrices() function with taxBoolean parameter
// function getPrices(taxBoolean) {
//   // Step 3: Loop over dishData array
//   for (let i = 0; i < dishData.length; i++) {
//     let currentDish = dishData[i];
//     // Step 4: Declare finalPrice variable without assigning a value
//     let finalPrice;

//     // Step 5: Handle conditional pricing (if taxBoolean is true)
//     if (taxBoolean === true) {
//       finalPrice = currentDish.price * 1.2;
//     }
//     // Step 6: Handle no-tax pricing (else if taxBoolean is false)
//     else if (taxBoolean === false) {
//       finalPrice = currentDish.price;
//     }
//     // Step 7: Add default case for invalid taxBoolean input
//     else {
//       console.log('You need to pass a boolean to the getPrices call!');
//       return; // Exit the function to prevent further execution with invalid input
//     }

//     // Step 8: Still inside the loop, log the dish details
//     // .toFixed(2) is used to format the price to two decimal places for currency display
//     console.log('Dish: ', currentDish.name, 'Price: $', finalPrice);
//   }
// }

// // Step 9: Define getDiscount() function with taxBoolean and guests parameters
// function getDiscount(taxBoolean, guests) {
//   // Step 10: On the first line, call getPrices() inside getDiscount()
//   // using taxBoolean as an argument.
//   getPrices(taxBoolean);

//   //on the step 12.............

//   if (typeof guests === 'number' && guests > 0 && guests < 30) {
//     // If the conditions are valid, execute the if block.
//     // Step 12: Calculate discount
//     let discount = 0;
//     // Use if...else if to assign a discount:
//     if (guests < 5) {
//       // If guests < 5, set the discount to 5.
//       discount = 5;
//     } else if (guests >= 5) {
//       // Else, if guests >= 5, set the discount to 10.
//       discount = 10;
//     }
//     console.log('Discount is: $' + discount);
//   }
//   // Step 13: Handle invalid input for guests in the else block.
//   else {
//     console.log('The second argument must be a number between 0 and 30');
//   }
// }
// // Call getDiscount() with sample arguments
// getDiscount(true, 2);
// getDiscount(false, 10);

// Given variables
const dishData = [
  {
    name: 'Italian pasta',
    price: 9.55,
  },
  {
    name: 'Rice with veggies',
    price: 8.65,
  },
  {
    name: 'Chicken with potatoes',
    price: 15.55,
  },
  {
    name: 'Vegetarian Pizza',
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (menu of dishData) {
    // console.log(menu); this is for testing the code
    let finalPrice;
    if (taxBoolean == true) {
      finalPrice = menu.price * tax;
    } else if (taxBoolean == false) {
      finalPrice = menu.price;
    } else {
      console.log('You need to pass a boolean to the getPrices call!');
      return;
    }

    console.log(`Dish: ${menu.name} Price: $${finalPrice}`);
    // console.log("Dish: " + menu.name + "Price: $" + finalPrice)
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests == 'number' && guests > 0 && guests < 30) {
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else {
      discount = 10;
    }

    console.log('Discount is: $' + discount);
  } else {
    // step 12 code here
    console.log('The second argument must be a number between 0 and 30');
  }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);
