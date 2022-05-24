console.log('codewars')
// 5/24

// 7 Kyu
// Sum of two lowest postitive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

//Details
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.





//PREP
//PARAMETER: What can you take in?
    // Take in an array of numbers
//RETURNS: How? print to console? Return?
    // Return a number
//EXAMPLES: Examples of how the code should work?
let test = [19, 5, 42, 2, 77] // Return 7
//PSEDUO CODE: Write pseduo code for everything
    // Sort then add index 0 and 1


// My Solution
const sumTwoSmallestNumbers = num => num.sort((a,b) => a - b,0)[0] + num.sort((a,b) => a - b,0)[1]

console.log(sumTwoSmallestNumbers(test))
// Codewars Solution 

// function sumTwoSmallestNumbers(numbers){  
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];
//   };

// const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);
