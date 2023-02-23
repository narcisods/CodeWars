console.log('Codewars test');
// 2/23

// 7 Kyu
// Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

//Details
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.
//PREP
//PARAMETER: What can you take in?
//Take in an array

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
function divCon(x) {
	let nums = x
		.filter((num) => typeof num == 'number')
		.reduce((acc, c) => acc + c, 0);
	let strings = x
		.filter((num) => typeof num == 'string')
		.reduce((acc, c) => acc + Number(c), 0);
	return nums - strings;
}
// Test Cases

// Codewars Solution
