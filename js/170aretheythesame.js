console.log('Codewars test');
// 4/13/23

// 6 Kyu
// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

//Details
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
//PREP
//PARAMETER: What can you take in?
// Take two arrays. The goal is to comapre both arrays.

//RETURNS: How? print to console? Return?
//

//EXAMPLES: Examples of how the code should work?
//

//PSEDUO CODE: Write pseduo code for everything
//

// My Solution
function comp(array1, array2) {
	if (array1 === null || array2 === null) return false;
	let squaredArray1 = array1.map((num) => num * num);
	return (
		JSON.stringify(squaredArray1.sort((a, b) => a - b)) ===
		JSON.stringify(array2.sort((a, b) => a - b))
	);
}

// function comp(array1, array2) {
// 	if (array1 === null || array2 === null) return false;
// 	let squaredArray1 = array1.map((num) => num * num);
// 	squaredArray1.forEach((num) => {
// 		if (array2.includes(num) === false) {
//             return false
//         }
// 	});
//     return true
// }
// Test Cases
const aArray = [121, 144, 19, 161, 19, 144, 19, 11];
const bArray = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(aArray, bArray), 'true');
// Codewars Solution
