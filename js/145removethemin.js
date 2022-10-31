console.log('Codewars test');
// 10/31/22

// 7 Kyu
// Remove the min
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

//Details

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//PREP
//PARAMETER: What can you take in?
// Take in an array of numbers

//RETURNS: How? print to console? Return?
// Return an array

//EXAMPLES: Examples of how the code should work?
//     // * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//PSEDUO CODE: Write pseduo code for everything
// Identify the element with the lowest value.
// Splice after I find the index number with the loweset value

// My Solution
const removeSmallest = (array) => {
	let min = [Number.MAX_VALUE, 0];
	array.forEach((number, index) => {
		if (number < min[0]) min = [number, index];
	});
	console.log(min[1]);
	return [...array.slice(0, min[1]), ...array.slice(min[1] + 1)];
};

// Codewars Solution
// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }

//Test Cases
console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
