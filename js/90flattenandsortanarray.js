console.log('codewars test')
// 7/11

// Kyu 7
// Flatten and sort an array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

//Details
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well





//PREP
//PARAMETER: What can you take in?
    // two-dimensional array of integers
//RETURNS: How? print to console? Return?
    // return an array
//EXAMPLES: Examples of how the code should work?
    // See above
//PSEDUO CODE: Write pseduo code for everything
    // Concenate array, sort, and return


// My Solution
function flattenAndSort(array) {
    let combinedArray = []
    for(let i = 0; i < array.length; i++) {
        combinedArray.push(...array[i])
    }
    return combinedArray.sort((a,b)=>a-b,0)
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
// Codewars Solution 

// "use strict";

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a,b) => a - b);
// }