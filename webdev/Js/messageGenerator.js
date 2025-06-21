// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  // Declare a variable for the message
  let message = '%c' + txt;

  // Declare a variable for the style
  let style = `color: ${color};`;

  // Append background style to the style variable
  style += `background: ${background};`;

  // Append font size style to the style variable
  style += `font-size: ${fontSize};`;

  // Log the message with the applied style
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  // Declare a fontStyle variable with default styles
  let fontStyle = 'color: tomato; font-size: 50px';

  // Check if the reason is "birthday"
  if (reason == 'birthday') {
    console.log(`%cHappy birthday`, fontStyle);
  }

  // If reason is "champions", log a congrats message
  else if (reason == 'champions') {
    console.log(`%cCongrats on the title!`, fontStyle);
  }

  // For any other reason, log a default message
  else {
    console.log(message, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');

// Call the celebrateStyler function with an appropriate argument
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  // Call consoleStyler with the first four arguments
  consoleStyler(color, background, fontSize, txt);

  // Call celebrateStyler with the last argument
  celebrateStyler(reason);
}

// Call styleAndCelebrate with appropriate arguments
//styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
var globalVar = 77;

function scopeTest() {
  var localVar = 88;
}

console.log(localVar);
