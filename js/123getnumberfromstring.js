console.log('Codewars test')
// 08/29

// 8 Kyu
// Get number from string
// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

//Details

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)


//PREP
//PARAMETER: What can you take in?
// A string

//RETURNS: How? print to console? Return?
// Return a number

//EXAMPLES: Examples of how the code should work?
// See above

//PSEDUO CODE: Write pseduo code for everything
//  use the string method replace()


// My Solution
function getNumberFromString(s) {
    return Number((s.replace(/\D/g, '')))

}


// Codewars Solution 

// function getNumberFromString(s) {
//     return +s.replace(/\D/g, "");
//   } 