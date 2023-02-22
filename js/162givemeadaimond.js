console.log('Codewars test');
// 2/22

// 6 Kyu
// Give me a diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

//Details

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

//PREP
//PARAMETER: What can you take in?
// A number

//RETURNS: How? print to console? Return?
// Return a string

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
const diamond = (n) => {
	if (n % 2 === 0 || n < 1) {
		return null;
	}
	let diamondStr = '';
	let midPoint = Math.floor(n / 2);
	for (let i = 0; i < n; i++) {
		let spaces = Math.abs(midPoint - i);
		let stars = n - 2 * spaces;

		diamondStr += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
	}
	return diamondStr;
};
// Test Cases

// Codewars Solution
console.log(diamond(5));
