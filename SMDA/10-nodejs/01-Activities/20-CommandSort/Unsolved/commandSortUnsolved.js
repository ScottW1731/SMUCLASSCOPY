// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var nodeArg = process.argv;

var numArray = [];

//0 => node
//1 => this file

for( var i = 2; i < nodeArg.length; i++){
    numArray.push(parseFloat(nodeArg[i]));
}

console.log(numArray);

console.log(numArray.sort(sortNums));

function sortNums(a, b){
    return (a-b);
}
// b-a sorts in descending order