var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  try {
    func(x, y);
  }
  catch (err) {
    // If func throws set threw to false and log the error
    // Since the error was caught, it doesn't crash our program
    threw = true;
    console.log(err);
  }
  // Return threw
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Either x or y is not a number. Please try again with numbers.");
  }
  // Otherwise return the result of x * y
  else return x * y;
};

// Throws an error
console.log(assertThrows(multiply, "a", 2));

// No error thrown below
// assertThrows(multiply, 2, 2);