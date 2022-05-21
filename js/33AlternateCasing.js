console.log('codewars')
// 5.20

// 8 Kyu
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

//Details
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:



//PREP
//PARAMETER: What can you take in?
    // A string
//RETURNS: How? print to console? Return?
    // Return a string
//EXAMPLES: Examples of how the code should work?
    // "hello world".toAlternatingCase() === "HELLO WORLD"
//PSEDUO CODE: Write pseduo code for everything
    // Split, if uppercase make lower, and vice versa, join


// My Solution
String.prototype.toAlternatingCase = function () {
    return this
               .split('')
               .map(e => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase())
               .join('')
    
  }

// Codewars Solution 

// String.prototype.toAlternatingCase = function () {
//     return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }