console.log('Codewars test');
// 1/11

// 6 Kyu
// Meeting
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

//Details
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

//PREP
//PARAMETER: What can you take in?
// A string

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
const meeting = (str) => {
	let parsedArray = str
		.toUpperCase()
		.replaceAll(':', ' ')
		.split(';')
		.map((name) => {
			let firstName = name.slice(0, name.indexOf(' '));
			return `${name.slice(name.indexOf(' ')).trim()}, ${firstName}`;
		})
		.sort();
	return `(${parsedArray.join(')(')})`;
};

// Codewars Solution
function meeting(s) {
	let string = s
		.toUpperCase()
		.split(';')
		.map((x) => x.split(':').reverse().join(', '))
		.sort()
		.join(')(');
	return '(' + string + ')';
}
//Test Cases

console.log(
	meeting(
		'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
	),
	'(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)'
);
