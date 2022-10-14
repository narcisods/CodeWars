console.log('Codewars test');
// 10/17

// 7 Kyu
// Largest pair sum in array
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

//Details
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

//PREP
//PARAMETER: What can you take in?
// Negative? Decimial ? Yes on negeatives

//RETURNS: How? print to console? Return?
// Return the largest sum

//EXAMPLES: Examples of how the code should work?
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

//PSEDUO CODE: Write pseduo code for everything
// Sort array and add the first two

// My Solution
const largestPairSum = (arrNumbers) => {
	arrNumbers.sort((a, b) => b - a);
	return arrNumbers[0] + arrNumbers[1];
};

// Codewars Solution

// function largestPairSum(numbers){
//     numbers.sort(function(a, b){ return b - a });
//     return numbers[0] + numbers[1];
//   }

console.log(largestPairSum([10, 14, 2, 23, 19]), 42);
console.log(largestPairSum([99, 2, 2, 23, 19]), 122);
