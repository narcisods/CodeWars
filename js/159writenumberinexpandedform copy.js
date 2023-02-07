console.log('Codewars test');
// 2/6/22

// 6 Kyu
// Write number in expanded form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

//Details

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//PREP
//PARAMETER: What can you take in?
//No deceimals
// Return a string

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
const expandedForm = (num) => {
	let numArray = num
		.toString()
		.split('')
		.map((str) => Number(str));
	let expandedArray = numArray
		.map((num, index) => {
			let result = num;
			for (let i = numArray.length - index; i > 1; i--) {
				result = result * 10;
			}
			return result;
		})
		.filter((num) => num > 0);
	return expandedArray.join(' + ');
};

console.log(expandedForm(12), '-> 10 + 2'); // Should return '10 + 2'
console.log(expandedForm(42), '-> 40 + 2'); // Should return '40 + 2'
console.log(expandedForm(70304), '-> 70000 + 300 + 4'); // Should return '70000 + 300 + 4'

// Codewars Solution
// const expandedForm = (n) =>
// 	n
// 		.toString()
// 		.split('')
// 		.reverse()
// 		.map((a, i) => a * Math.pow(10, i))
// 		.filter((a) => a > 0)
// 		.reverse()
// 		.join(' + ');
