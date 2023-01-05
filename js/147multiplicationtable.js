console.log('Codewars test');
// 1/5

// 6 Kyu
// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

//Details

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

//PREP
//PARAMETER: What can you take in?
// Take in a size parameter

//RETURNS: How? print to console? Return?
// return a nested array

//EXAMPLES: Examples of how the code should work?
// See above

//PSEDUO CODE: Write pseduo code for everything
//One array

// My Solution

const multiplicationTable = (size) => {
	const results = [];
	let current = [];
	let count = 1;
	while (count <= size) {
		for (let i = 1; i <= size; i++) {
			current.push(i * count);
		}
		results.push(current);
		count++;
		current = [];
	}

	return results;
};
// Codewars Solution

multiplicationTable = function (size) {
	var result = [];

	for (var i = 0; i < size; i++) {
		result[i] = [];
		for (var j = 0; j < size; j++) {
			result[i][j] = (i + 1) * (j + 1);
		}
	}

	return result;
};
