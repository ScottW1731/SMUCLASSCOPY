// setup the variables
//setup an if else statement
// boolean values to log if it works, then yes, if not then no

var a = process.argv[2];
var b = process.argv[3];
if (a === b) {
  console.log(true);
}else {
  console.log(false);
}




// quick way, I don't understand
// i think this "===" means equal?
// console.log(process.argv[2] === process.argv[3]);

// this is in node
// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));