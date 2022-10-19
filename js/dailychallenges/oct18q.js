// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//Notes -
// Only numbers - strings and/or numbers // No extreme params
// Returned in a number
// Retrun - Reduce array method and make sure to parse each element into a number

// Parses array of numbers to remove any strings
const parseArrayStringsToNumbers = (dataArray) =>
	dataArray.map((number) => parseInt(number));

// Returns sum of array of numbers
const sumMix = (arrNumbers) =>
	parseArrayStringsToNumbers(arrNumbers).reduce((acc, c) => acc + c, 0);

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);
