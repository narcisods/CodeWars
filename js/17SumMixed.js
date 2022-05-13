console.log('codewars')
// 5.12.22

// 8 Kyu
// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// //Details
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.



//PREP
//PARAMETER: What can you take in?
    //
//RETURNS: How? print to console? Return?
    //
//EXAMPLES: Examples of how the code should work?
    //
//PSEDUO CODE: Write pseduo code for everything
    //


// My Solution
const sumMix = x => x.reduce((acc,c) => acc + Number(c), 0)


// Codewars Solution 
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);

