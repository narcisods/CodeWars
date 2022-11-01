console.log('test');

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// The input string contains only characters. No extreme unique cases

// Need to do
// Reverse the string
// Flip the casing

const reverseString = (string) => {
	return string.split(' ').reverse().join(' ');
};

const flipCasing = (string) => {
	return [...string]
		.map((char) => {
			if (!char.match(/[a-z]/i)) return char;

			if (char == char.toUpperCase()) return char.toLowerCase();

			if (char == char.toLowerCase()) return char.toUpperCase();
		})
		.join('');
};

const reverseAndChangeCaps = (string) => {
	return reverseString(flipCasing(string));
};

//Codewars solution
function stringTransformer(str) {
	return str
		.split(' ')
		.reverse()
		.join(' ')
		.split('')
		.map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
		.join('');
}

console.log(reverseAndChangeCaps('Example Input'), '| iNPUT eXAMPLE');
console.log(reverseAndChangeCaps('dog dog Dog CAT'), '| cat dOG DOG DOG');
