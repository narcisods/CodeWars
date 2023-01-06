console.log('Codewars test');
// 1/6

// 5 Kyu
// Integers: Recreation One
// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

//Details
// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

//PREP
//PARAMETER: What can you take in?
// Two integers

//RETURNS: How? print to console? Return?
// Return a nested array

//EXAMPLES: Examples of how the code should work?
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution

// const listSquared = (m, n) => {
// 	let results = [];
// 	for (let i = m; i < n; i++) {
// 		//Finds all divisors, squares them, adds them
// 		let divsiorsSquared = 0;
// 		for (let j = 0; j <= i; i++) {
// 			if (i % j === 0) {
// 				divsiorsSquared += j * j;
// 			}
// 		}
// 		//Checks if sqrt of divsiors are floats
// 		if (Math.sqrt(divisors) % 1 === 0) {
// 			console.log(divsiors);
// 			results.push(divisors);
// 		} else {
// 			return false;
// 		}
// 	}
// 	return results;
// };

// Codewars Solution

// Tests
console.log(listSquared(1, 250));
console.log([
	[1, 1],
	[42, 2500],
	[246, 84100],
]);
console.log(listSquared(42, 250));
console.log([
	[42, 2500],
	[246, 84100],
]);
