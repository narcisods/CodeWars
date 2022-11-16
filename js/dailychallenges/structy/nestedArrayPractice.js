// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example: ([2, 3, 1]) => 0

// gimme
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// const gimme = (arr) => {
// 	let orignalArr = [...arr];
// 	let lowest = arr.sort((a, b) => a - b)[1];

// 	return orignalArr.indexOf(lowest);
// };

// console.log(gimme([5, 10, 14]), 1);
// console.log(gimme([2, 3, 1]), 0);

console.log('structly');

const pairProduct = (numbers, targetProduct) => {
	const previousNums = {};
	for (let i = 0; i < numbers.length; i++) {
		let num = numbers[i];
		let complement = targetProduct / num;

		if (complement in previousNums) {
			return [i, previousNums[complement]];
		}
		previousNums[num] = i;
	}
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]

// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// //  asdf
// // const pairSum = (numArr, targetSum) => {
// // 	const count = {};
// // 	for (let i = 0; i < numArr.length; i++) {
// // 		const num = numArr[i];
// // 		const complement = targetSum - num;
// // 		if (complement in count) {
// // 			return [i, count[complement]];
// // 		}
// // 		count[num] = i;
// // 	}
// // 	return count;
// // };

// console.log(pairSum([3, 2, 5, 4, 1], 8)); // e
