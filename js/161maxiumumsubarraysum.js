console.log('Codewars test');
// 2/17/2022

// 5 Kyu
// Maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

//Details
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

//PREP
//PARAMETER: What can you take in?
// An array of numbers

//RETURNS: How? print to console? Return?
// Return an int

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
// const maxSequence = (arr) => {
// 	if (arr.length === 0) {
// 		return 0;
// 	}
// 	let greatestSum = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		let tail = 1;
// 		while (tail < arr.length) {
// 			let currentSum = arr.slice(i, tail + 1).reduce((a, b) => a + b, 0);
// 			if (currentSum > greatestSum) {
// 				greatestSum = currentSum;
// 			}
// 			tail++;
// 		}
// 	}
// 	return greatestSum;
// };

// Codewars Solution

const maxSequence = (arr) => {
	let min = 0,
		ans = 0,
		sum = 0;
	for (let i = 0; i < arr.length; ++i) {
		sum += arr[i];
		min = Math.min(sum, min);
		ans = Math.max(ans, sum - min);
	}
	return ans;
};

// Test Cases
console.log(maxSequence([]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
// should be 6: [4, -1, 2, 1]
