console.log('codewars')
// 5.19.22

// 8 Kyu
// Find Maximum and minimum Values of a list
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//Details
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.




//PREP
//PARAMETER: What can you take in?
    // An array of integers 
//RETURNS: How? print to console? Return?
    // Return
//EXAMPLES: Examples of how the code should work?
    // See above
//PSEDUO CODE: Write pseduo code for everything
    // Use math.max and math.min


// My Solution
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}


// Codewars Solution 

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);