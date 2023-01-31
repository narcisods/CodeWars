console.log('Codewars test');
// 1/31

// 6 Kyu
// Reverse or rotate?
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

//Details
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

//PREP
//PARAMETER: What can you take in?
// Two params. One is a string. One is an integer

//RETURNS: How? print to console? Return?
//Return a string

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
// Set Extreme conditions

// My Solution
const checkCubeSumAndParse = (str) => {
	let result = '';
	if (str.split('').reduce((acc, c) => acc + Number(c * c * c), 0) % 2 === 1) {
		result += str.slice(1) + str.slice(0, 1);
	} else {
		result += str.split('').reverse().join('');
	}
	return result;
};

const revrot = (str, sz) => {
	if (sz <= 0 || str === '' || sz > str.length) {
		return '';
	}

	let arrayOfChunks = [];
	for (let i = 0; i < str.length; i += sz) {
		if (str.substring(i, i + sz).length === sz) {
			arrayOfChunks.push(str.substring(i, i + sz));
		}
	}
	let result = '';
	arrayOfChunks.forEach((str) => {
		result += checkCubeSumAndParse(str);
	});

	return result;
};

// Test Cases
// console.log(revrot('123456987654', 6)); //"234561876549"
console.log(revrot('733049910872815764', 5)); //"234561356789"

// Codewars Solution
