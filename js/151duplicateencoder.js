console.log('Codewars test');
// 1/9

// 6 Kyu
// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

//Details

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//PREP
//PARAMETER: What can you take in?
// String

//RETURNS: How? print to console? Return?
// Return a string

//EXAMPLES: Examples of how the code should work?
// //"din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

//PSEDUO CODE: Write pseduo code for everything
// To lower case
// Create hashmap
// Map through hashmap and return parens

// My Solution
const duplicateEncode = (word) => {
	//Ignore casing
	let lower = word.toLowerCase();

	// Creates hashmap
	let count = {};

	for (let char of lower) {
		if (!(char in count)) {
			count[char] = 0;
		}
		count[char]++;
	}

	//Create result string
	let results = '';
	lower.split('').forEach((char) => {
		if (count[char] > 1) {
			results += ')';
		} else {
			results += '(';
		}
	});

	return results;
};

// Codewars Solution

//Test cases
console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())');
console.log(duplicateEncode('(( @'), '))((');
