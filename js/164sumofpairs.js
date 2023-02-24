console.log('Codewars test');
// 2/24
// 5 Kyu
// Sum of Pairs
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

//Details
// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
//PREP
//PARAMETER: What can you take in?
//An array

//RETURNS: How? print to console? Return?
//Return a number

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
// function sumPairs(array, targetSum) {
// 	let current = 0;
// 	let results = [0, Infinity];

// 	while (current < array.length) {
// 		if (current > results[1]) {
// 			break;
// 		}
// 		for (let i = current + 1; i < array.length; i++) {
// 			if (array[current] + array[i] === targetSum) {
// 				if (i < results[1]) {
// 					results = [current, i];
// 				}
// 			}
// 		}
// 		current++;
// 	}
// 	if (results[1] === Infinity) {
// 		return undefined;
// 	}
// 	return [array[results[0]], array[results[1]]];
// }

function sumPairs(numbers, sum) {
	const pairs = new Map();
	for (let i = 0; i < numbers.length; i++) {
		const diff = sum - numbers[i];
		if (pairs.has(diff)) {
			return [diff, numbers[i]];
		}
		pairs.set(numbers[i], i);
	}
	return null;
}
// Test Cases
console.log(sumPairs([4, 3, 2, 3, 4], 6), [4, 2]);
// Codewars Solution
