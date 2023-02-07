console.log('Codewars test');
// 2/7/22

// 6 Kyu
// +1 Array
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

//Details
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

//PREP
//PARAMETER: What can you take in?
// Take in an array of numbers, single digit, positive, no floats

//RETURNS: How? print to console? Return?
// Return an array which adds to that number

//EXAMPLES: Examples of how the code should work?
//// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

//PSEDUO CODE: Write pseduo code for everything
// // Join the array, convert to number, ++ , convert to string, split into indvidual numbers, convert each "string number" into a number, return that array

// My Solution
// const upArray = (arr) => {
// 	let stack = [];
// 	for (let i = 0; i <= arr.length; i++) {
// 		if (arr[i] === 0) {
// 			stack.push(0);
// 		} else {
// 			break;
// 		}
// 	}
// 	let arrNum = Number(arr.join(''));
// 	arrNum++;
// 	let resultArr = arrNum
// 		.toString()
// 		.split('')
// 		.map((str) => Number(str));

// 	return [...stack, ...resultArr];
// };

const upArray = (arr) => {
	if (arr.length < 1) {
		return null;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0 || arr[i] > 9) {
			return null;
		}
	}

	let remainder = 1;
	let result = arr
		.reverse()
		.map((num) => {
			if (remainder === 0) {
				return num;
			}
			num = num + remainder;
			remainder--;
			if (num === 10) {
				remainder++;
				num = 0;
			}
			return num;
		})
		.reverse();

	if (remainder === 1) {
		result.unshift(1);
	}
	return result;
};

// Test Cases

console.log(upArray([]));

// Codewars Solution
function upArray(arr) {
	if (typeof arr === 'undefined' || arr === null || arr.length === 0) {
		return null;
	}

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0 || typeof arr[i] !== 'number' || arr[i] > 9) {
			return null;
		}
	}
	// if its 9 and more than one digit we have to check all previous digits
	// whether they are also a 9
	for (var j = arr.length - 1; j > -1; j--) {
		if (arr[j] !== 9) {
			arr[j] = arr[j] + 1;
			break;
		} else {
			arr[j] = 0;
		}

		if (j === 0) {
			arr.unshift(1);
		}
	}

	return arr;
}
