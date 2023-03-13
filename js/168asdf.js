console.log('Codewars test');
// 3/13

// 7 Kyu
// Sum of Cubes
// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

//Details
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
//PREP
//PARAMETER: What can you take in?
// A number

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
function sumCubes(n) {
	let current = 0;
	for (let i = 1; i < n; i++) {
		current += Math.pow(3, i);
	}
	return current;
}

// Test Cases

// Codewars Solution
