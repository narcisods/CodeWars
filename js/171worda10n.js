console.log('Codewars test');
// 4/14

// 6 Kyu
// Word a10n (abbreviation)
// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

//Details
// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

//PREP
//PARAMETER: What can you take in?
//

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
function abbreviate(str) {
	const words = str.split(/([^a-zA-Z]+)/); // split by any non-alphabetical character and include the delimiters in the array
	const abbreviatedWords = words.map((word) => {
		const len = word.length;
		if (len < 4) {
			return word;
		}
		return word[0] + (len - 2) + word[len - 1];
	});
	return abbreviatedWords.join('');
}
// Test Cases
console.log(abbreviate('internationalization'));
// Codewars Solution
function comp(array1, array2) {
	if (array1 == null || array2 == null) return false;
	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);
	return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
// Test
