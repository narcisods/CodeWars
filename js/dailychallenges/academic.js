// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// What to do -
// Use array.reduce to get the sum of the array
// Divide by the arr.length
// Math.floor(the answer)
// Return Number

// const getAverage = (arr) => {
// 	let sumOfArray = arr.reduce((acc, current) => acc + current, 0);

// 	let averageRoundedDown = Math.floor(sumOfArray / arr.length);

// 	return averageRoundedDown;
// };

const getAverage = (arr) =>
	Math.floor(arr.reduce((acc, current) => acc + current, 0) / arr.length);

console.log(getAverage([2, 2, 2, 2]), 2); // 2 + 2 + 2 +2 / 4 = 2
console.log(getAverage([1, 2, 3, 4, 5]), 3); // 15 / 5 = 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1); // 9 / 8 = 1
