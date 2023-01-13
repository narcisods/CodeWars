console.log('Codewars test');
// Date

// ? Kyu
// Title
// Link

//Details
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

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

const SeriesSum = (n) => {
	if (n === 0) {
		return (0.0).toFixed(2);
	}
	let result = 1.0;
	let series = 1;
	for (let i = 1; i < n; i++) {
		series += 3;
		result += 1 / series;
	}
	return result.toFixed(2);
};

console.log(SeriesSum(3));

// Codewars Solution
function SeriesSum(n) {
	for (var s = 0, i = 0; i < n; i++) {
		s += 1 / (1 + i * 3);
	}

	return s.toFixed(2);
}
