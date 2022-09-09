console.log('Codewars test')
// 9/9/22

// 7 Kyu
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

//Details

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.





//PREP
//PARAMETER: What can you take in?
    // An array

//RETURNS: How? print to console? Return?
    // Return an array

//EXAMPLES: Examples of how the code should work?
    //["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//PSEDUO CODE: Write pseduo code for everything
    // Return index+1 : element


// My Solution
const number = array => array.map((element,index) => {
    return `${index+1}: ${element}`
})

// Codewars Solution 

// var number = function(array) {
//     return array.map(function (line, index) {
//       return (index + 1) + ": " + line;
//     });
//   }