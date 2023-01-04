console.log('Codewars test');
// 1/4/23

// 7 Kyu
// No oddities here
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

//Details
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//PREP
//PARAMETER: What can you take in?
// Take in an array of integers

//RETURNS: How? print to console? Return?
// Return an array

//EXAMPLES: Examples of how the code should work?
//[0,1] ), [0]
// [0,1,2,3] ), [0,2]
//PSEDUO CODE: Write pseduo code for everything
// filter

// My Solution
const noOdds = (values) => values.filter((num) => num % 2 === 0);

console.log(noOdds([0, 1, 2, 3, 4]));
// Codewars Solution
